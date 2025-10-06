import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import OverlayLoading from "./shared/OverlayLoading";

const UploadForm = ({ jobId, jobTitle, setShowModal }) => {
  const [phone, setPhone] = useState("");
  const [fileError, setFileError] = useState("");
  const [uploading, setUploading] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ✅ U.S. phone number validation
  const validateUSPhone = (num) =>
    /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/.test(num);

  const emailSender = async (username, userEmail) => {
    await axios.post(
      "https://cottage-backend-voilerplate.vercel.app/send-email",
      { name: username, email: userEmail, position: jobTitle },
      { headers: { "Content-Type": "application/json", "X-API-Key": apiKey } }
    );
  };

  const onSubmit = async (data) => {
    const username = data?.name;
    const userEmail = data?.email;

    if (!validateUSPhone(phone)) {
      alert("Enter a valid U.S. phone number (e.g. 123-456-7890).");
      return;
    }

    const file = data.cv?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setFileError("Only PDF files are allowed.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setFileError("File size must be under 2MB.");
      return;
    }
    setFileError("");

    setUploading(true);
    try {
      // 1️⃣ Upload file
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await axios.post(
        "https://cottage-backend-voilerplate.vercel.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-API-Key": apiKey,
          },
        }
      );

      const fileId = uploadRes?.data?.fileId;
      if (!fileId) {
        setUploading(false);
        toast.error("File upload failed");
        return;
      }

      // 2️⃣ Submit application
      const applicantData = {
        name: data.name,
        email: data.email,
        jobId,
        jobTitle,
        phone,
        address: {
          street: data.streetAddress,
          unit: data.unit || null,
          city: data.city,
          state: data.state,
        },
        fileId,
      };

      await axios.post(
        "https://cottage-backend-voilerplate.vercel.app/job-apply",
        applicantData,
        {
          headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
        }
      );

      toast.success("Application submitted successfully!");
      emailSender(username, userEmail);
      reset();
      setPhone("");
      setShowModal(false);
    } catch (error) {
      console.error("Error during submission:", error);
      const errorMsg =
        error.response?.data?.error || error.message || "Submission failed.";
      toast.error(errorMsg);
    } finally {
      setUploading(false);
    }
  };

  // Tailwind CSS utility classes
  const labelCls = "block text-sm font-medium text-slate-700";
  const inputCls =
    "mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 " +
    "placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#005F6B] focus:border-[#005F6B]";
  const errorTextCls = "mt-1 text-xs text-red-600";

  return (
    <div className="relative mt-2 max-h-[80vh] overflow-y-auto px-1 sm:px-0">
      {uploading && <OverlayLoading />}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className={labelCls}>Full Name</label>
          <input
            className={inputCls}
            {...register("name", { required: true })}
          />
          {errors.name && <p className={errorTextCls}>Name is required.</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelCls}>Email</label>
          <input
            type="email"
            className={inputCls}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <p className={errorTextCls}>Valid email is required.</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className={labelCls}>Contact Number</label>
          <input
            type="tel"
            className={inputCls}
            placeholder="123-456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* State & City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>State</label>
            <select
              className={inputCls}
              {...register("state", { required: true })}
            >
              <option value="">Select your state</option>
              <option value="NY">New York</option>
              <option value="NJ">New Jersey</option>
              <option value="MD">Maryland</option>
              <option value="CT">Connecticut</option>
              <option value="MI">Michigan</option>
            </select>
            {errors.state && <p className={errorTextCls}>State is required.</p>}
          </div>

          <div>
            <label className={labelCls}>City</label>
            <input
              type="text"
              className={inputCls}
              placeholder="Enter your city"
              {...register("city", { required: true })}
            />
            {errors.city && <p className={errorTextCls}>City is required.</p>}
          </div>
        </div>

        {/* Address Fields */}
        <div>
          <label className={labelCls}>Street Address</label>
          <input
            className={inputCls}
            placeholder="123 Main St"
            {...register("streetAddress", { required: true })}
          />
          {errors.streetAddress && (
            <p className={errorTextCls}>Street address is required.</p>
          )}
        </div>

        <div>
          <label className={labelCls}>Apt / Ste / Unit (optional)</label>
          <input
            className={inputCls}
            placeholder="Apt 4B"
            {...register("unit")}
          />
        </div>

        {/* CV Upload */}
        <div>
          <label className={labelCls}>Upload CV (PDF, max 2MB)</label>
          <input
            type="file"
            className={inputCls}
            {...register("cv", { required: true })}
            accept="application/pdf"
          />
          {errors.cv && <p className={errorTextCls}>CV is required.</p>}
          {fileError && <p className={errorTextCls}>{fileError}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploading}
          className="inline-flex items-center justify-center rounded-lg bg-[#005F6B] px-6 py-2.5 font-semibold text-white shadow-sm transition
                     hover:bg-[#004954] focus:outline-none focus:ring-2 focus:ring-[#005F6B] focus:ring-offset-2
                     disabled:cursor-not-allowed disabled:opacity-60"
        >
          {uploading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
