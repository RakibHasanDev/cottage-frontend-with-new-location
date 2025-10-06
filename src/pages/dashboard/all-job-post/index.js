import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Loading from "@/components/shared/Loading";

const JobPostTable = () => {
  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  const url = `https://cottage-backend-voilerplate.vercel.app/job-post?page=${page}&size=${size}`;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["job-post", page, size],
    queryFn: async () => {
      const res = await fetch(url);
      return res.json();
    },
  });

  const jobPosts = data?.jobPosts || [];
  const count = data?.count || 0;
  const pages = Math.ceil(count / size);

  const handleStatusToggle = async (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";

    try {
      const res = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/job-post/status/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey || "",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const result = await res.json();
      if (result.modifiedCount || result.success) {
        toast.success(`Status updated to ${newStatus}`);
        refetch();
      } else {
        toast.error("Status update failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while updating status.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job post?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/job-post/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey || "",
          },
        }
      );

      const result = await res.json();
      if (result.deletedCount || result.success) {
        toast.success("Job post deleted successfully.");
        refetch();
      } else {
        toast.error("Failed to delete job post.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during deletion.");
    }
  };

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { marginBottom: "50px" },
        }}
      />

      <div className="container mx-auto p-4">
        <h4 className="text-xl font-semibold mb-4 dark:text-gray-100">
          All Job Posts
        </h4>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loading />
          </div>
        ) : (
          <>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      #
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Created At
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Total Applicants
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Edit
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {jobPosts?.map((post, index) => (
                    <tr key={post._id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {page * size + index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {post.title}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold
                          ${
                            post.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {new Date(post.createdAt).toLocaleString()}
                      </td>

                      {/* Toggle Status Button Column */}
                      <td className="px-4 py-3">
                        <button
                          className="inline-flex items-center rounded-md border border-amber-300 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                          onClick={() =>
                            handleStatusToggle(post._id, post.status)
                          }
                        >
                          Change
                        </button>
                      </td>

                      {/* Total Applicants + View */}
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <Link
                            href={`all-job-post/${post._id}`}
                            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          >
                            View
                          </Link>
                          <small className="text-gray-500">
                            Total Applicants:{" "}
                            <span className="font-semibold text-blue-700">
                              {post?.totalApplicants}
                            </span>
                          </small>
                        </div>
                      </td>

                      {/* Edit */}
                      <td className="px-4 py-3">
                        <Link
                          href={`all-job-post/${post._id}/edit`}
                          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                          Edit
                        </Link>
                      </td>

                      {/* Delete */}
                      <td className="px-4 py-3">
                        <button
                          className="inline-flex items-center rounded-md bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                          onClick={() => handleDelete(post._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {jobPosts.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-4 py-10 text-center text-sm text-gray-500"
                      >
                        No job posts found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex flex-wrap gap-2">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  className={`inline-flex items-center rounded-md px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2
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
          </>
        )}
      </div>
    </>
  );
};

export default JobPostTable;
