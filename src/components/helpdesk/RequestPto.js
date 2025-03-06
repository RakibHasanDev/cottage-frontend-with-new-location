import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RequestPto = ({ loading, setLoading }) => {
  const date = Date.now();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const payrollHandler = (data) => {
    setLoading(true);

    const info = {
      type: "requestPto",
      name: data?.name,
      employeeId: data?.employeeId,
      phone: data?.phone,
      subject: data?.subject,
      today: date,
    };

    fetch(`https://cottage-backend-voilerplate.vercel.app/helpDesk`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("message send successfully");
          setLoading(false);
          reset();
        }
      });
  };

  return (
    <div>
      <div
        style={{ boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.3)" }}
        className="w-full mx-auto rounded-lg"
      >
        <form
          // onSubmit={submitHandler}

          onSubmit={handleSubmit(payrollHandler)}
          className="w-full  dark:bg-slate-800  bg-gray-50 px-3 py-3 md:py-6 md:p-8 rounded-md shadow-xl   lg:ml-0"
        >
          <h1 className="text-2xl text-gray-600 text-center font-semibold my-3  dark:text-gray-100 league-spartan">
            {" "}
            Request to Use PTO
          </h1>

          <div className="grid  gap-3 md:gap-6 md:mt-4 grid-cols-2">
            <div className="md:space-y-1 text-sm open-sans">
              <label htmlFor="name" className="block dark:text-gray-400">
                Name
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                id="name"
                placeholder="Name"
                className="w-full px-4  py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                  focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
              />

              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="md:space-y-.5 md:space-y-1  text-sm ">
              <label htmlFor="phone" className="block dark:text-gray-400 ">
                Phone
              </label>
              <input
                type="text"
                {...register("phone", {
                  required: "Phone No is required",
                })}
                id="phone"
                placeholder=" Phone"
                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                  focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100 "
              />

              {errors.phone && (
                <p className="text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="md:space-y-.5 md:space-y-1  text-sm mt-5 ">
            <label
              htmlFor="employeeId"
              className="block dark:text-gray-400 text-sm"
            >
              Last 4 digits of SSN / DOB
            </label>
            <input
              type="text"
              {...register("employeeId", {
                required: "SSN / DOB is required",
              })}
              id="employeeId"
              placeholder="Last 4 digits of SSN / DOB"
              className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                  focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100 text-sm"
            />

            {errors.employeeId && (
              <p className="text-red-600">{errors.employeeId.message}</p>
            )}
          </div>

          <div className="space-y-.5 md:space-y-1 text-sm  mt-5">
            <label htmlFor="description" className="block dark:text-gray-400">
              Comments Or Questions
            </label>
            <textarea
              type="tel"
              {...register("subject", {
                required: "Comments Or Questions are Required",
              })}
              // name="subject"
              id="subject"
              rows={5}
              placeholder="Comments Or Questions"
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                              focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
            />
            {errors.subject && (
              <p className="text-red-600">{errors.subject.message}</p>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-md bg-[#00A6B2] hover:bg-secondary text-white mt-6 league-spartan">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestPto;
