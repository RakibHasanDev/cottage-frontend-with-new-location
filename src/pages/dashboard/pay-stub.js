"use client"; // ✅ Ensures this runs only on the client side

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/shared/Loading";
import MessageModal from "./MessageModal";

const PayStub = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);

  const url = `https://cottage-backend-voilerplate.vercel.app/helpDesk/inquiry/payStub?page=${page}&size=${size}`;

  const {
    data: { allInfo = [], count = 0 } = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payStub", page, size],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    },
  });

  //   console.log(allInfo);

  const pages = Math.ceil(count / size);

  // ✅ Handle Message Modal
  const openModal = (userMessage) => {
    setMessage(userMessage);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // ✅ Handle Review Approve/Reject
  const reviewHandler = (user) => {
    fetch(
      `https://cottage-backend-voilerplate.vercel.app/helpDesk/${user._id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Successful");
          refetch();
        }
      });
  };

  const reverseHandler = (user) => {
    fetch(
      `https://cottage-backend-voilerplate.vercel.app/helpDesk/reverse/${user._id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Unsuccessful");
          refetch();
        }
      });
  };

  // ✅ Handle Delete User
  const deleteHandler = async (user) => {
    if (confirm(`Are you sure, you want to delete ${user?.name}?`)) {
      try {
        const response = await fetch(
          `https://cottage-backend-voilerplate.vercel.app/helpDesk/${user?._id}`,
          {
            method: "DELETE",
          }
        );

        const data = await response.json();
        if (data.deletedCount) {
          toast.success("User Deleted Successfully");
          refetch();
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="border-t-2">
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-5">
          <thead>
            <tr className="dark:bg-slate-800 dark:text-gray-200 ">
              <th className="border-b border-t py-3">Serial</th>
              <th className="border-b border-t py-3">Name</th>
              <th className="border-b border-t py-3">Email</th>
              <th className="border-b border-t py-3">Phone</th>
              <th className="border-b border-t py-3">Last 4 SSN / DOB</th>
              <th className="border-b border-t py-3">Date & Time</th>
              <th className="border-b border-t py-3">Check</th>
              <th className="border-b border-t py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {allInfo?.map((user, index) => (
              <tr
                className=" border-b border-t border-gray-300 hover:bg-gray-100 "
                key={user._id}
              >
                <th className="border-b border-t  py-2 dark:bg-slate-500 dark:text-gray-100">
                  {index + 1}
                </th>
                <td className="border-b border-t  py-2 dark:bg-slate-500 dark:text-gray-100">
                  {user?.name}
                </td>
                <td className="border-b border-t  py-2 dark:bg-slate-500 dark:text-gray-100">
                  <a
                    href={`mailto:${user?.email}`}
                    className="text-[#00A6B2] dark:text-gray-300"
                  >
                    {user?.email}
                  </a>
                </td>
                <td className="border-b border-t  py-2 dark:bg-slate-500 dark:text-gray-100">
                  <a
                    href={`tel:+1${user?.phone}`}
                    className="text-[#00A6B2] dark:text-gray-300"
                  >
                    {user?.phone}
                  </a>
                </td>
                <td className="border-b border-t  py-2 dark:bg-slate-500 dark:text-gray-100">
                  {user?.employeeId}
                </td>

                <td className="border-b border-t  py-2 dark:bg-slate-500 dark:text-gray-100">
                  <p className="text-[#00A6B2] dark:text-gray-300 text-sm font-medium">
                    {new Date(user?.today).toLocaleString()}
                  </p>
                </td>

                {/* ✅ Checkbox for Review Status */}
                <td className="border-b border-t  py-2 dark:bg-slate-500 dark:text-gray-100 cursor-pointer">
                  {user?.review === "true" ? (
                    <div
                      className="form-control"
                      onClick={() => reverseHandler(user)}
                    >
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          className="peer hidden"
                          checked
                        />
                        <div className="w-5 h-5 bg-red-500 peer-checked:bg-green-500 rounded-md"></div>
                      </label>
                    </div>
                  ) : (
                    <div
                      className="form-control"
                      onClick={() => reviewHandler(user)}
                    >
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          className="peer hidden"
                          checked
                        />
                        <div className="w-5 h-5 bg-gray-500 peer-checked:bg-blue-500 rounded-md"></div>
                      </label>
                    </div>
                  )}
                </td>

                {/* ✅ Delete Button */}
                <td className="border-b border-t  py-2  dark:bg-slate-500 dark:text-gray-100">
                  <button
                    onClick={() => deleteHandler(user)}
                    className="px-2 py-1 rounded-md text-sm bg-red-600 uppercase text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination Section */}
      <div>
        <p className="text-center mt-10 text-lg font-semibold dark:text-gray-100">
          Currently Selected Page:{" "}
          <span className="text-[#00A6B2]">{page + 1}</span>
        </p>
        <div className="pagination my-3 flex justify-center">
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              className={
                page === number
                  ? "selected px-3 py-1 text-white ml-3 cursor-pointer custom-shadow"
                  : "px-3 py-1 text-gray-500 ml-3 cursor-pointer border border-gray-300 hover:bg-gray-700 hover:text-white custom-shadow"
              }
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}

          {/* ✅ Page Size Dropdown */}
          <select
            className="ml-3 bg-white text-gray-500 border border-gray-300 rounded-md focus:outline-none px-2"
            onChange={(event) => setSize(Number(event.target.value))}
          >
            {[7, 10, 15, 20].map((sizeOption) => (
              <option key={sizeOption} value={sizeOption}>
                Page Size {sizeOption}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PayStub;
