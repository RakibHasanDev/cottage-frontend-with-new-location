import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { BiUserCircle } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import AdminConversation from "@/components/shared/AdminConversation";
import SkeletonLoading from "@/components/shared/SkeletonLoading";

const Pca = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [load, setLoad] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdownId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const url = `https://cottage-backend-voilerplate.vercel.app/chats/messages/PCA?page=${page}&size=${size}`;

  const { data: { count = 0, users = [] } = {}, isLoading } = useQuery({
    queryKey: ["users", page, size, load],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    if (users?.length) {
      setNewUser(users[0]);
      setId(users[0]?._id);
    }
  }, [users]);

  const pages = Math.ceil(count / size);

  const deleteHandler = (user) => {
    const proceed = window.confirm(
      `Are you sure, you want to delete ${user?.firstName} ?`
    );
    if (proceed) {
      fetch(
        `https://cottage-backend-voilerplate.vercel.app/chats/${user?._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("User Deleted Successfully");
            setLoad(!load);
          }
        });
    }
  };

  const userHandler = (user) => {
    setNewUser(user);
    setId(user?._id);
  };

  return (
    <div className="min-h-screen border-2 bg-[#EBF8F9] dark:bg-slate-600 relative">
      {isLoading && <SkeletonLoading />}
      <div className="grid grid-cols-7">
        <div className="col-span-2 border-r-4">
          <ul className="menu p-4 w-[95%] mx-auto text-base-content mt-5">
            {users?.map((user) => (
              <li key={user?._id} onClick={() => userHandler(user)}>
                <div
                  className={`my-2 block rounded-md p-2 ${
                    user?._id === id
                      ? "bg-[#79A4A8] dark:bg-neutral-700 text-white"
                      : "bg-[#D8E4E5] dark:bg-slate-400 dark:text-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h1 className="flex items-center gap-3 px-2 py-1">
                      {user?.photoURL ? (
                        <img
                          src={user?.photoURL}
                          alt={user?.photoURL}
                          className="w-10 h-10 border-2 border-primary rounded-full"
                        />
                      ) : (
                        <BiUserCircle className="w-12 h-12 text-gray-300 rounded-full" />
                      )}
                      <p>{user?.firstName}</p>
                    </h1>

                    <div className="relative inline-block text-left">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdownId(
                            openDropdownId === user._id ? null : user._id
                          );
                        }}
                        className="text-2xl text-gray-500 dark:text-gray-100 focus:outline-none"
                      >
                        <BsThreeDotsVertical />
                      </button>

                      {openDropdownId === user._id && (
                        <div className="absolute right-0 mt-2 w-32 z-50 rounded-md shadow-lg bg-gray-200 dark:bg-slate-700">
                          <ul className="py-2">
                            <li>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteHandler(user);
                                  setOpenDropdownId(null);
                                }}
                                className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white"
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`flex items-center justify-between px-2 mt-1 text-sm ${
                      user?._id === id
                        ? "text-gray-100"
                        : "text-gray-600 dark:text-gray-200"
                    }`}
                  >
                    {user?.adminMessage && <p>You: {user?.adminMessage}</p>}
                    {user?.message && (
                      <p>
                        {user?.message.length > 18
                          ? user?.message.slice(0, 16) + "..."
                          : user?.message}
                      </p>
                    )}
                    {user?.time && (
                      <p className="text-xs">
                        {new Date(user?.time).toLocaleTimeString("en-us", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="float-left">
            <p className="text-center mt-10 text-sm font-semibold dark:text-gray-100">
              Currently Selected page:{" "}
              <span className="text-primary">{page + 1}</span>
            </p>
            <div className="pagination my-3 flex justify-center">
              {[...Array(pages).keys()].map((number) => (
                <button
                  key={number}
                  className={
                    page === number
                      ? "selected px-2 ml-3 cursor-pointer border-[1px] custom-shadow text-sm"
                      : "px-3 py-1 text-gray-500 ml-3 cursor-pointer border-[1px] border-gray-300 hover:bg-[#444444] hover:text-white custom-shadow dark:text-white text-sm"
                  }
                  onClick={() => setPage(number)}
                >
                  {number + 1}
                </button>
              ))}

              <select
                className="ml-3 dark:bg-gray-400 dark:text-gray-100 bg-white text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none px-2 text-sm leading-tight font-medium"
                onChange={(event) => setSize(Number(event.target.value))}
              >
                <option disabled hidden>{`Page Size ${size}`}</option>
                <option value="6">Page Size 6</option>
                <option value="10">Page Size 10</option>
                <option value="15">Page Size 15</option>
                <option value="20">Page Size 20</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <AdminConversation
            newUser={newUser}
            users={users}
            load={load}
            setLoad={setLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Pca;
