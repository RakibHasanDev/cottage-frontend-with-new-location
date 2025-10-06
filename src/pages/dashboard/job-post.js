import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const AdminJobPostForm = () => {
  const [description, setDescription] = useState("");
  const [descError, setDescError] = useState("");
  const [slug, setSlug] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
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

    setDescError("");
    setSubmitting(true);

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
        status: "active",
        createdAt: new Date(),
      };

      await axios.post(
        "https://cottage-backend-voilerplate.vercel.app/job-post",
        jobData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_secureApiKey,
          },
        }
      );

      toast.success("Job post saved!");
      reset();
      setDescription("");
      setSlug("");
    } catch (error) {
      console.error("Job post error:", error);
      toast.error("Failed to save job post.");
    } finally {
      setSubmitting(false);
    }
  };

  const labelCls = "block text-sm font-medium text-gray-700 dark:text-gray-200";
  const inputCls =
    "mt-1 block w-full rounded-lg border border-gray-300 bg-white/90 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 " +
    "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:placeholder:text-gray-500";
  const errorTextCls = "mt-1 text-xs text-red-600";

  return (
    <div className="mx-auto mt-6 max-w-2xl 2xl:max-w-4xl px-4">
      <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Create Job Post
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-6 space-y-5"
      >
        {/* Job Title */}
        <div>
          <label className={labelCls}>Job Title</label>
          <input
            type="text"
            className={inputCls}
            placeholder="e.g., Female Coordinator (Night Shift)"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className={errorTextCls}>Job title is required.</p>
          )}
        </div>

        {/* Slug */}
        <div>
          <label className={labelCls}>Slug</label>
          <input
            type="text"
            className={inputCls}
            placeholder="e.g., female-coordinator-night-shift"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            onBlur={(e) => setSlug(slugify(e.target.value))}
            required
          />
        </div>

        {/* Salary */}
        <div>
          <label className={labelCls}>Hourly Rate</label>
          <input
            type="text"
            className={inputCls}
            placeholder="e.g., $19.10"
            {...register("salary", { required: true })}
          />
          {errors.salary && <p className={errorTextCls}>Salary is required.</p>}
        </div>

        {/* Vacancy */}
        <div>
          <label className={labelCls}>Vacancy</label>
          <input
            type="number"
            className={inputCls}
            placeholder="e.g., 5"
            {...register("vacancy", { required: true })}
          />
          {errors.vacancy && (
            <p className={errorTextCls}>Vacancy is required.</p>
          )}
        </div>
        <div>
          <label className={labelCls}>Job Type</label>
          <input
            type="text"
            className={inputCls}
            placeholder="Full time"
            {...register("jobType", { required: true })}
          />
          {errors.jobType && <p className={errorTextCls}>Type is required.</p>}
        </div>
        <div>
          <label className={labelCls}>Locations</label>
          <input
            type="text"
            className={inputCls}
            placeholder="ny"
            {...register("location", { required: true })}
          />
          {errors.location && (
            <p className={errorTextCls}>Location is required.</p>
          )}
        </div>

        {/* Deadline */}
        <div>
          <label className={labelCls}>Application Deadline</label>
          <input
            type="date"
            min={today}
            className={inputCls}
            {...register("deadline", { required: true })}
          />
          {errors.deadline && (
            <p className={errorTextCls}>Deadline is required.</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className={labelCls}>Job Description (HTML)</label>
          <textarea
            className={`${inputCls} resize-none overflow-hidden`}
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Write job description in HTML format..."
          />
          {descError && <p className={errorTextCls}>{descError}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition
                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                     disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Posting...
            </span>
          ) : (
            "Post Job"
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminJobPostForm;
