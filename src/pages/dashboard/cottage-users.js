import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/shared/Loading";

const CottageUsers = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  const url = `https://cottage-backend-voilerplate.vercel.app/users?page=${page}&size=${size}`;

  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", page, size],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": `${apiKey}`,
        },
      });
      return res.json();
    },
  });

  const users = data.users || [];
  const count = data.count || 0;
  const pages = count > 0 ? Math.ceil(count / size) : 0;

  if (isLoading) {
    return <Loading />;
  }

  const deleteHandler = (user) => {
    const proceed = window.confirm(
      `Are you sure, you want to delete ${user?.name} ?`
    );
    if (proceed) {
      fetch(
        `https://cottage-backend-voilerplate.vercel.app/users/${user?._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": `${apiKey}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("User deleted successfully");
            refetch();
          }
        });
    }
  };

  const editorHandler = (user) => {
    const proceed = window.confirm(
      `Are you sure you want to make ${user?.name} an Admin?`
    );
    if (proceed) {
      fetch(
        `https://cottage-backend-voilerplate.vercel.app/editor/${user?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": `${apiKey}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success(`${user?.name} is now an Admin`);
            refetch();
          } else if (data.message === "User already has Admin role") {
            toast.info("User already has Admin role");
          } else {
            toast.error("Failed to update user role");
          }
        })
        .catch(() => toast.error("Error updating role"));
    }
  };

  const removeEditorHandler = (user) => {
    const proceed = window.confirm(
      `Are you sure you want to remove ${user?.name} as an editor?`
    );
    if (proceed) {
      fetch(
        `https://cottage-backend-voilerplate.vercel.app/editor/remove/${user?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": `${apiKey}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success(`${user?.name} is no longer an Admin`);
            refetch();
          } else {
            toast.error("Failed to update user role");
          }
        })
        .catch(() => toast.error("Error updating role"));
    }
  };

  return (
    <div className="border-t-2">
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300 border-collapse">
          <thead className="bg-gray-100 dark:bg-slate-800 dark:text-gray-200">
            <tr>
              {["Serial", "User Name", "Image", "Email", "Role", "Delete"].map(
                (header, index) => (
                  <th key={index} className="border border-gray-300 px-4 py-3">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 dark:bg-slate-500 dark:text-gray-100"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.name || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="avatar">
                    <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt={user.name} />
                      ) : (
                        <FaUser className="w-full h-full p-2" />
                      )}
                    </div>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.email || "No email"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user?.role === "Admin" ? (
                    <button
                      onClick={() => removeEditorHandler(user)}
                      className=" bg-green-600 text-sm text-white  px-2 py-1 rounded-md"
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => editorHandler(user)}
                      className=" text-sm bg-blue-600 text-white px-2 py-1 rounded-md"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => deleteHandler(user)}
                    className="text-sm bg-red-600 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div>
        <p className="text-center mt-10 text-lg font-semibold dark:text-gray-100">
          Currently Selected Page:{" "}
          <span className="text-[#00A6B2]">{page + 1}</span>
        </p>

        <div className="pagination my-3 flex justify-center flex-wrap">
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={`px-3 py-1 ml-3 cursor-pointer ${
                page === number
                  ? "text-white bg-[#00A6B2] custom-shadow"
                  : "text-gray-500 border border-gray-300 hover:bg-gray-700 hover:text-white custom-shadow"
              }`}
            >
              {number + 1}
            </button>
          ))}
          <select
            className="ml-3 bg-white text-gray-500 border border-gray-300 rounded-md focus:outline-none px-2"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          >
            {[7, 10, 15, 20, 50, 100].map((val) => (
              <option key={val} value={val}>
                Page Size {val}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CottageUsers;
