"use client"; // ✅ Ensures this runs only on the client side

import React, { useState, useCallback } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/shared/Loading";

const PayRoll = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);

  const url = `https://cottage-backend-voilerplate.vercel.app/helpDesk/inquiry/payroll?page=${page}&size=${size}`;

  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["payroll", page, size],
    queryFn: async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      } catch (error) {
        toast.error("Error fetching data. Please try again.");
        throw error;
      }
    },
    staleTime: 5000, // Cache data for 5 seconds
  });

  const allInfo = data?.allInfo || [];
  const count = data?.count || 0;
  const pages = Math.ceil(count / size);

  if (isLoading) return <Loading />;
  if (isError)
    return <p className="text-center text-red-500">Error loading data.</p>;

  // ✅ Handle Review Approve/Reject
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

  return (
    <div className="border-t-2">
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300 border-collapse">
          <thead className="bg-gray-100 dark:bg-slate-800 dark:text-gray-200">
            <tr>
              {[
                "Serial",
                "Name",
                "Phone",
                "Last 4 SSN / DOB",

                "Date & Time",
                "Check",
                "Delete",
              ].map((header, index) => (
                <th key={index} className="border border-gray-300 px-4 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allInfo.map((user, index) => (
              <tr
                className="hover:bg-gray-100 dark:bg-slate-500 dark:text-gray-100"
                key={user._id}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.name || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.phone || "No data"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-primary">
                  {user?.employeeId}
                </td>

                <td className="border border-gray-300 px-4 py-2 text-primary text-sm font-medium">
                  {user?.today ? new Date(user?.today).toLocaleString() : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
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
                        className="checkbox checkbox-primary"
                        readOnly
                      />
                    </label>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(user)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md"
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

export default PayRoll;
