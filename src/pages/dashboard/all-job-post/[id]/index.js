import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import toast from "react-hot-toast";
import Loading from "@/components/shared/Loading";
import Head from "next/head";

const ApplicantsByJob = () => {
  const router = useRouter();
  const { id } = router.query;

  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const size = 10;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["applicants", id, page],
    enabled: !!id,
    queryFn: async () => {
      const res = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/job-apply/${id}?page=${page}&size=${size}`
      );
      if (!res.ok) throw new Error("Failed to fetch applicants.");
      return res.json();
    },
  });

  const applicants = data?.applicants || [];
  const count = data?.count || 0;
  const totalPages = Math.ceil(count / size);

  const allReviewedOnPage = useMemo(() => {
    if (!applicants.length) return false;
    return applicants.every((a) => !!a.reviewed);
  }, [applicants]);

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  const cvHandler = (fileId) => {
    if (!fileId) return;
    const fileUrl = `https://cottage-backend-voilerplate.vercel.app/upload/${fileId}`;
    window.open(fileUrl, "_blank");
  };

  const deleteHandler = async (fileId, appId) => {
    if (!fileId || !appId) return alert("Missing file or application ID");
    const confirmed = window.confirm(
      "Are you sure you want to delete this application?"
    );
    if (!confirmed) return;

    try {
      // delete file
      const fileRes = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/upload/${fileId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey || "",
          },
        }
      );
      if (!fileRes.ok) return toast.error("Failed to delete file.");

      // delete app
      const appRes = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/job-apply/${appId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey || "",
          },
        }
      );
      if (!appRes.ok) return toast.error("Failed to delete job application.");

      toast.success("Application and file deleted successfully.");
      refetch();
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Something went wrong during deletion.");
    }
  };

  const toggleReviewed = async (appId, reviewed) => {
    try {
      const res = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/job-apply/reviewed/${appId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey || "",
          },
          body: JSON.stringify({ reviewed }),
        }
      );

      if (!res.ok) throw new Error("Failed to update");
      toast.success(`Reviewed set to ${reviewed}`);
      refetch();
    } catch {
      toast.error("Update failed");
    }
  };

  const toggleAllOnPage = async (targetVal) => {
    try {
      // optimistic update
      queryClient.setQueryData(["applicants", id, page], (old) => {
        if (!old) return old;
        return {
          ...old,
          applicants: old.applicants.map((a) => ({
            ...a,
            reviewed: targetVal,
          })),
        };
      });

      await Promise.all(
        applicants.map((a) =>
          fetch(
            `https://cottage-backend-voilerplate.vercel.app/job-apply/${a._id}/reviewed`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey || "",
              },
              body: JSON.stringify({ reviewed: targetVal }),
            }
          )
        )
      );
      toast.success(
        `Marked ${targetVal ? "reviewed" : "not reviewed"} for this page.`
      );
      refetch();
    } catch {
      toast.error("Bulk update failed.");
      refetch();
    }
  };

  return (
    <>
      <div className="p-4">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <h4 className="text-xl font-semibold dark:text-gray-100">
            Applicants for The Position of:{" "}
            <span className="text-[#00A6B2]">
              {applicants?.[0]?.jobTitle || ""}
            </span>
          </h4>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loading />
          </div>
        ) : isError ? (
          <p className="text-red-600">Failed to load applicants.</p>
        ) : applicants.length === 0 ? (
          <p className="text-gray-700">No applicants found for this job.</p>
        ) : (
          <>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900">
                  <tr>
                    {[
                      "#",
                      "Name",
                      "Email",
                      "Phone",
                      "Present Address",
                      "Job Title",
                      "Submitted",
                      "CV",
                      "Reviewed",
                      "Delete",
                    ]?.map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {applicants?.map((app, idx) => {
                    const checked = !!app.reviewed;
                    // Correct address format: street, unit, city, state
                    const presentAddress = `${app.address.street}, ${app.address.unit}, ${app.address.city}, ${app.address.state}`;
                    return (
                      <tr key={app._id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {page * size + idx + 1}
                        </td>

                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {app.name}
                        </td>

                        <td className="px-4 py-3 text-sm">
                          <a
                            href={`mailto:${app.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {app.email}
                          </a>
                        </td>

                        <td className="px-4 py-3 text-sm">
                          <a
                            href={`tel:+${app.phone}`}
                            className="text-blue-600 hover:underline"
                          >
                            +{app.phone}
                          </a>
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-700">
                          {presentAddress}
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-700">
                          {app.jobTitle}
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-700">
                          {new Date(app.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </td>

                        <td className="px-4 py-3">
                          <button
                            onClick={() => cvHandler(app.fileId)}
                            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          >
                            View
                          </button>
                        </td>

                        <td className="px-4 py-3">
                          <label
                            htmlFor={`review-${app._id}`}
                            className="inline-flex cursor-pointer items-center"
                          >
                            <input
                              id={`review-${app._id}`}
                              type="checkbox"
                              className="peer sr-only"
                              checked={checked}
                              onChange={(e) =>
                                toggleReviewed(app._id, e.target.checked)
                              }
                            />
                            <div className="relative h-5 w-9 rounded-full bg-gray-300 transition peer-checked:bg-blue-600">
                              <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4" />
                            </div>
                            <span
                              className={`ml-2 text-sm font-semibold ${
                                checked ? "text-blue-600" : "text-red-600"
                              }`}
                            >
                              {checked ? "Checked" : "Unchecked"}
                            </span>
                          </label>
                        </td>

                        <td className="px-4 py-3">
                          <button
                            onClick={() => deleteHandler(app.fileId, app._id)}
                            className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {totalPages > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2
                    ${
                      i === page
                        ? "bg-blue-600 text-white focus:ring-blue-400"
                        : "border border-blue-300 text-blue-700 hover:bg-blue-50 focus:ring-blue-300"
                    }`}
                    onClick={() => setPage(i)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ApplicantsByJob;
