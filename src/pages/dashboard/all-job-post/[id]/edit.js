import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const EditJobPostForm = () => {
  const router = useRouter();
  const { id } = router.query;

  const [description, setDescription] = useState("");
  const [descError, setDescError] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("active");
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const today = new Date().toISOString().split("T")[0];

  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // Fetch job post data on load
  useEffect(() => {
    if (!id) return;

    const fetchJob = async () => {
      try {
        const res = await axios.get(
          `https://cottage-backend-voilerplate.vercel.app/job-post/${id}`
        );
        const job = res.data?.job;

        if (job) {
          setValue("title", job.title || "");
          setValue("salary", job.salary || "");
          setValue("vacancy", job.vacancy || "");
          setValue("deadline", job.deadline || "");
          setValue("location", job.location || "");
          setValue("jobType", job.jobType || "");
          setSlug(job.slug || "");
          setDescription(job.description || "");
          setStatus(job.status || "active");
        }
      } catch (err) {
        toast.error("Failed to load job details.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id, setValue]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const onSubmit = async (data) => {
    if (!description.trim()) {
      setDescError("Job description is required.");
      return;
    }
    if (!slug.trim()) {
      toast.error("Slug is required.");
      return;
    }

    setSubmitting(true);
    setDescError("");

    try {
      const jobData = {
        title: data.title,
        slug: slugify(slug),
        salary: data.salary,
        vacancy: data.vacancy,
        location: data.location,
        jobType: data.jobType,
        deadline: data.deadline,
        description: description.trim(),
        status: status, // active | inactive
        updatedAt: new Date(),
      };

      await axios.put(
        `https://cottage-backend-voilerplate.vercel.app/job-post/${id}`,
        jobData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_secureApiKey,
          },
        }
      );

      toast.success("Job post updated!");
      router.push("/dashboard/all-job-post");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update job post.");
    } finally {
      setSubmitting(false);
    }
  };

  const labelCls = "mb-1 block text-sm font-medium text-gray-700";
  const inputCls =
    "block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none " +
    "transition ring-blue-400 focus:border-blue-500 focus:ring-2";
  const errorTextCls = "mt-1 block text-sm text-red-600";

  if (loading)
    return (
      <p className="mt-4 text-center text-gray-700">Loading job post...</p>
    );

  return (
    <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-2xl font-semibold">Edit Job Post</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Title */}
        <div>
          <label className={labelCls}>Job Title</label>
          <input
            type="text"
            className={inputCls}
            {...register("title", { required: true })}
            placeholder="e.g., Certified Home Health Aide (CHHA)"
          />
          {errors.title && (
            <small className={errorTextCls}>Title is required.</small>
          )}
        </div>

        {/* Slug */}
        <div>
          <label className={labelCls}>Slug</label>
          <input
            type="text"
            className={inputCls}
            placeholder="e.g., certified-home-health-aide-chha"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            onBlur={() => setSlug(slugify(slug))}
            required
          />
        </div>

        {/* Salary */}
        <div>
          <label className={labelCls}>Hourly Rate / Salary</label>
          <input
            type="text"
            className={inputCls}
            {...register("salary", { required: true })}
            placeholder="e.g., 17 or $17/hr"
          />
          {errors.salary && (
            <small className={errorTextCls}>Salary is required.</small>
          )}
        </div>

        {/* Vacancy */}
        <div>
          <label className={labelCls}>Vacancy</label>
          <input
            type="number"
            className={inputCls}
            {...register("vacancy", { required: true })}
            placeholder="e.g., 50"
            min={1}
          />
          {errors.vacancy && (
            <small className={errorTextCls}>Vacancy is required.</small>
          )}
        </div>

        {/* Location */}
        <div>
          <label className={labelCls}>Location</label>
          <input
            type="text"
            className={inputCls}
            {...register("location", { required: true })}
            placeholder="e.g., Burlington, NJ 08016"
          />
          {errors.location && (
            <small className={errorTextCls}>Location is required.</small>
          )}
        </div>

        {/* Job Type */}
        <div>
          <label className={labelCls}>Job Type</label>
          <input
            type="text"
            className={inputCls}
            {...register("jobType", { required: true })}
            placeholder="e.g., Part-time, Full-time, Contract"
          />
          {errors.jobType && (
            <small className={errorTextCls}>Job type is required.</small>
          )}
        </div>

        {/* Deadline */}
        <div>
          <label className={labelCls}>Application Deadline</label>
          <input
            type="date"
            className={inputCls}
            min={today}
            {...register("deadline", { required: true })}
          />
          {errors.deadline && (
            <small className={errorTextCls}>Deadline is required.</small>
          )}
        </div>

        {/* Status */}
        <div>
          <label className={labelCls}>Status</label>
          <div className="flex gap-3">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-800">Active</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-800">Inactive</span>
            </label>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className={labelCls}>Job Description (HTML)</label>
          <textarea
            className={`${inputCls} resize-none overflow-hidden`}
            rows={4}
            style={{ resize: "none", overflow: "hidden" }}
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Write job description in HTML format..."
          />
          {descError && <small className={errorTextCls}>{descError}</small>}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              submitting
                ? "cursor-not-allowed bg-blue-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {submitting ? "Updating..." : "Update Job"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJobPostForm;
