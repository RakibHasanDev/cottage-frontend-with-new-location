"use client"; // ✅ Ensures this runs only on the client side

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/shared/Loading";
import MessageModal from "./MessageModal";

const GeneralQuery = () => {
  const [message, setMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false); // ✅ Modal state
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);

  const url = `https://cottage-backend-voilerplate.vercel.app/helpDesk/inquiry/generalRequest?page=${page}&size=${size}`;

  const {
    data: { allInfo = [], count = 0 } = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["generalRequest", page, size],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    },
  });

  console.log(allInfo);

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
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Review Successful");
          refetch();
          // console.log("true");
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
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Review Unsuccessful");
          refetch();
          // console.log("true");
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
    <div className="border-t-2 overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        {/* ✅ Table Header */}
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-left text-sm font-semibold">
            <th className="p-3 border dark:border-gray-600">#</th>
            <th className="p-3 border dark:border-gray-600">Name</th>
            <th className="p-3 border dark:border-gray-600">Email</th>
            <th className="p-3 border dark:border-gray-600">Phone</th>
            <th className="p-3 border dark:border-gray-600">SSN / DOB</th>
            <th className="p-3 border dark:border-gray-600">Message</th>
            <th className="p-3 border dark:border-gray-600">Date & Time</th>
            <th className="p-3 border dark:border-gray-600">Status</th>
            <th className="p-3 border dark:border-gray-600">Actions</th>
          </tr>
        </thead>

        {/* ✅ Table Body */}
        <tbody>
          {allInfo?.map((user, index) => (
            <tr
              key={user._id}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-center">
                {index + 1}
              </td>
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">
                {user?.name}
              </td>
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">
                <a href={`mailto:${user?.email}`} className="text-[#00A6B2]">
                  {user?.email}
                </a>
              </td>
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">
                <a href={`tel:+1${user?.phone}`} className="text-[#00A6B2]">
                  {user?.phone}
                </a>
              </td>
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">
                {user?.employeeId}
              </td>
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-center">
                <button
                  onClick={() => openModal(user?.subject)}
                  className="text-sm bg-[#00A6B2] py-2 px-3 rounded-md text-white shadow-md hover:opacity-80 transition"
                >
                  View Message
                </button>
              </td>
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">
                <p className="text-sm font-medium">
                  {new Date(user?.today).toLocaleString()}
                </p>
              </td>

              {/* ✅ Review Checkbox */}
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-center">
                <div
                  className="form-control"
                  onClick={() =>
                    user?.review === "true"
                      ? reverseHandler(user)
                      : reviewHandler(user)
                  }
                >
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      checked={user?.review === "true"}
                      className="checkbox w-4 h-4 "
                      readOnly
                    />
                  </label>
                </div>
              </td>

              {/* ✅ Delete Button */}
              <td className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-center">
                <button
                  onClick={() => deleteHandler(user)}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded-md shadow-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <MessageModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        message={message}
      />

      {/* pagination section  */}

      <div>
        <p className="text-center mt-10 text-lg font-semibold dark:text-gray-100">
          Currently Selected Page:{" "}
          <span className="text-[#00A6B2]">{page + 1}</span>
        </p>

        <div className="pagination my-3 flex justify-center">
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              className={`px-3 py-1 ml-3 cursor-pointer ${
                page === number
                  ? "text-white bg-[#00A6B2] custom-shadow"
                  : "text-gray-500 border border-gray-300 hover:bg-gray-700 hover:text-white custom-shadow"
              }`}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
          <select
            className="ml-3 bg-white text-gray-500 border border-gray-300 rounded-md focus:outline-none px-2"
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
          >
            {[7, 10, 15, 20].map((s) => (
              <option key={s} value={s}>
                Page Size {s}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GeneralQuery;
