"use client";

import React, { Suspense, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import reader from "../../src/assets/106680-login-and-sign-up";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
const Lottie = React.lazy(() => import("lottie-react"));

const PasswordHandler = () => {
  const [passwordMessage, setPasswordMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { resetPassword } = useContext(AuthContext);
  const router = useRouter();

  const passwordHandler = (data) => {
    resetPassword(data.email)
      .then(() => {
        setPasswordMessage("Password Reset Link has been sent to your email");
        reset();
      })
      .catch((error) => {
        setPasswordMessage(error.message);
      });
  };

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="grid md:grid-cols-2 -mt-14 mx-auto gap-7 pb-10 items-center dark:bg-slate-600 min-h-screen">
      <div className="hidden md:block">
        <div ref={ref} className="mx-auto">
          {inView && (
            <Suspense fallback={<div>Loading...</div>}>
              <Lottie animationData={reader} loop={true} />
            </Suspense>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md px-4 rounded-md sm:p-8 text-gray-600 shadow-lg bg-[#EBF8F9] dark:bg-slate-800">
          <h2 className="mb-3 text-3xl font-semibold text-center dark:text-gray-100">
            Reset Your Password
          </h2>

          <form
            onSubmit={handleSubmit(passwordHandler)}
            className="space-y-10 ng-untouched ng-pristine ng-valid py-5"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 dark:text-gray-100"
                >
                  Email address
                </label>
                <input
                  type="email"
                  onSelect={() => setPasswordMessage("")}
                  {...register("email", { required: "Email is required" })}
                  id="email"
                  placeholder="Type Your Valid Email"
                  className="w-full px-8 py-2 rounded-md bg-white shadow-2xl placeholder:text-gray-500 focus:outline-none dark:bg-gray-400 dark:text-gray-100 dark:placeholder:text-gray-100"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              {passwordMessage && (
                <p className="py-3 text-red-500">{passwordMessage}</p>
              )}
            </div>

            <button className="w-full px-8 py-3 rounded-md sign-button text-white h-14 bg-gradient-to-r from-[#00A6B2] to-[#56AAFF] hover:from-secondary hover:to-primary">
              Submit
            </button>

            <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-100">
              Remember your password?
              <Link href="/login" className="underline ml-2 text-[#00A6B2]">
                Go to Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordHandler;
