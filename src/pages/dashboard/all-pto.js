"use client"; // ✅ Ensures this runs only on the client side

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/shared/Loading";
import MessageModal from "./MessageModal"; // Ensure this is imported correctly

const Pto = () => {
  const [message, setMessage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);

  const url = `https://cottage-backend-voilerplate.vercel.app/helpDesk/inquiry/requestPto?page=${page}&size=${size}`;

  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["requestPto", page, size],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    },
  });

  const allInfo = data?.allInfo || [];
  const count = data?.count || 0;
  const pages = Math.ceil(count / size);

  if (isLoading) return <Loading />;
  if (isError)
    return <p className="text-center text-red-500">Error loading data.</p>;

  // ✅ Handle Review Status Toggle
  const handleReview = async (user, action) => {
    const endpoint =
      action === "approve"
        ? `https://cottage-backend-voilerplate.vercel.app/helpDesk/${user._id}`
        : `https://cottage-backend-voilerplate.vercel.app/helpDesk/reverse/${user._id}`;

    try {
      const res = await fetch(endpoint, { method: "PUT" });
      const data = await res.json();
      if (data.modifiedCount > 0) {
        toast.success(
          `Review ${action === "approve" ? "Successful" : "Unsuccessful"}`
        );
        refetch();
      }
    } catch (error) {
      toast.error("Error updating review status.");
    }
  };

  // ✅ Handle Delete User
  const handleDelete = async (user) => {
    if (window.confirm(`Are you sure you want to delete ${user?.name}?`)) {
      try {
        const res = await fetch(
          `https://cottage-backend-voilerplate.vercel.app/helpDesk/${user?._id}`,
          { method: "DELETE" }
        );
        const data = await res.json();
        if (data.deletedCount) {
          toast.success("User deleted successfully.");
          refetch();
        }
      } catch (error) {
        toast.error("Error deleting user.");
      }
    }
  };

  // ✅ Open Modal with Message
  const openModal = (userMessage) => {
    setMessage(userMessage);
    setModalOpen(true);
  };

  return (
    <div className="border-t-2">
      <div className="overflow-x-auto">
        <table className="table w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-800 dark:text-gray-200">
              {[
                "Serial",
                "Name",
                "Phone",
                "Last 4 SSN / DOB",
                "Message",
                "Date & Time",
                "Check",
                "Delete",
              ].map((header, index) => (
                <th key={index} className="border-b border-gray-300 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allInfo.map((user, index) => (
              <tr
                key={user._id}
                className="hover dark:bg-slate-500 dark:text-gray-100 border-b border-gray-300"
              >
                <td>{index + 1}</td>
                <td>{user?.name || "N/A"}</td>
                <td>{user?.phone || "No data"}</td>
                <td className="text-[#00A6B2]">{user?.employeeId}</td>
                <td className="p-3  dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-center">
                  <button
                    onClick={() => openModal(user?.subject)}
                    className="text-sm bg-[#00A6B2] py-2 px-3 rounded-md text-white shadow-md hover:opacity-80 transition"
                  >
                    View Message
                  </button>
                </td>
                <td className="text-[#00A6B2] text-sm font-medium">
                  {user?.today ? new Date(user?.today).toLocaleString() : "N/A"}
                </td>
                <td>
                  <div
                    className="form-control cursor-pointer"
                    onClick={() =>
                      handleReview(
                        user,
                        user?.review === "true" ? "reverse" : "approve"
                      )
                    }
                  >
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        checked={user?.review === "true"}
                        className="checkbox w-6 h-6 checkbox-[#00A6B2]"
                        readOnly
                      />
                    </label>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn text-sm bg-red-600 uppercase text-white px-2 py-1.5 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ Modal Component for Message */}
        <MessageModal
          isOpen={isModalOpen}
          closeModal={() => setModalOpen(false)}
          message={message}
        />
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
              className={`px-3 py-1 ml-3 cursor-pointer ${
                page === number
                  ? "text-white bg-[#00A6B2] custom-shadow"
                  : "text-gray-500 border border-gray-300 hover:bg-gray-600 hover:text-white custom-shadow"
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

export default Pto;
