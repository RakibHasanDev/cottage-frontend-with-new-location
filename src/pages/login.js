import IconLoading from "@/components/shared/IconLoading";
import { AuthContext } from "@/context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import React, { Suspense, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import callReader from "../../src/assets/106680-login-and-sign-up";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
const Lottie = React.lazy(() => import("lottie-react"));

const Login = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showPass, setShowPass] = useState(false);
  const { signIn, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // const from = location.state?.from?.pathname || "/";

  const handelLogin = (data) => {
    // console.log(data)

    setLoginError("");

    signIn(data.email, data.password)
      .then(async (result) => {
        console.log("User logged in:", result.user);

        if (!result.user) {
          router.push("/"); // ✅ Send non-admins to home
          return;
        }

        // ✅ Fetch user role from backend
        const res = await fetch(
          `https://cottage-backend-voilerplate.vercel.app/admin/${result.user.email}`
        );
        const userData = await res.json();

        console.log("Admin Check:", userData); // Debugging

        if (userData.isAdmin) {
          router.push("/dashboard"); // ✅ Admins go to dashboard
        } else {
          router.push("/"); // ✅ Non-admins go home
        }

        toast.success("User Login Successfully");
        reset();
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  const googleSignInHandler = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        // toast.success('User Login SuccessFully')
        saveUser(user?.displayName, user?.email, user?.photoURL);
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const saveUser = (
    name,
    email,
    photoURL,
    chat = "",
    verify = "false",
    time = Date.now()
  ) => {
    const user = { name, email, chat, photoURL, verify, time };
    fetch("https://cottage-backend-voilerplate.vercel.app/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        //    console.log(data)
        if (data.acknowledged) {
          toast.success("User Login Successfully");
        }
      });
  };

  return (
    <div className=" grid md:grid-cols-2 -mt-14  mx-auto gap-7  pb-10 items-center dark:bg-slate-600 min-h-screen">
      <div className="hidden md:block">
        <div ref={ref} className="mx-auto">
          {inView && (
            <Suspense fallback={<IconLoading />}>
              {Lottie && <Lottie animationData={callReader} loop={true} />}
            </Suspense>
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-center ">
          <div className="w-full max-w-md p-4 rounded-md  sm:p-8  text-gray-600 shadow-lg bg-[#EBF8F9] dark:bg-slate-800">
            <h2 className="mb-3 text-3xl font-semibold text-center dark:text-gray-100">
              Login to your account
            </h2>

            <form
              onSubmit={handleSubmit(handelLogin)}
              className="space-y-5 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm  text-gray-600 dark:text-gray-100"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "email is required" })}
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-8 py-2  rounded-md bg-white shadow-2xl placeholder:text-gray-500 focus:outline-none dark:bg-gray-400 dark:text-gray-100 dark:placeholder:text-gray-100"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2 relative">
                  <div className="flex justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm dark:text-gray-100"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type={showPass ? "text" : "password"}
                    {...register("password", {
                      required: "password is required",
                    })}
                    id="password"
                    placeholder="*****"
                    className="w-full px-8 py-2 relative  rounded-md bg-white shadow-2xl  placeholder:text-gray-500 focus:outline-none dark:bg-gray-400 dark:text-gray-100 dark:placeholder:text-gray-100"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                  <div
                    className="absolute right-3 top-7 text-gray-700"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <AiFillEyeInvisible className="h-6 w-6" />
                    ) : (
                      <AiFillEye className="h-6 w-6" />
                    )}
                  </div>
                </div>
                {loginError && <p className="text-red-600">{loginError}</p>}

                <div className="-mt-1">
                  <p className="cursor-pointer text-sm font-bold text-[#00A6B2] underline ">
                    <Link href="/passwordHandler">Forget password..?</Link>
                  </p>
                </div>
              </div>

              <button className="w-full px-8 py-3  rounded-md sign-button text-white h-14 bg-gradient-to-r bg-[#00A6B2] hover:bg-secondary">
                Sign in
              </button>
            </form>
            <p className="text-sm text-start mt-3  text-gray-600 dark:text-gray-100">
              Don&apos;t have account?
              <Link
                href="/register"
                className="underline ml-3 text-[#00A6B2] text-lg"
              >
                Sign up here
              </Link>
            </p>
            <div className="flex items-center w-full mt-2">
              <hr className="w-full dark:text-gray-400" />
              <p className="px-3 dark:text-gray-100">OR</p>
              <hr className="w-full dark:text-gray-400" />
            </div>
            <div className="my-2 space-y-2">
              <button
                onClick={googleSignInHandler}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400  text-white   bg-[#00A6B2] hover:bg-secondary shadow-2xl font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
