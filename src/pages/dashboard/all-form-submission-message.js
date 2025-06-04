"use client"; // ✅ Ensures the component runs on the client side

import { useState } from "react";
import { toast } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineNavigateNext, MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import SpinerLoading from "@/components/shared/SpinerLoading";
import AdminConversation from "@/components/shared/AdminConversation";

const AllUsers = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey; // ✅ Next.js uses NEXT_PUBLIC_

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["activeUsers", page, size, load],
    queryFn: async () => {
      const res = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/users/activeUsers/active?page=${page}&size=${size}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey,
          },
        }
      );
      return res.json();
    },
  });

  const users = data?.users || [];
  const count = data?.count || 0;
  const pages = Math.ceil(count / size);

  const [newUser, setNewUser] = useState(users?.[0]);
  const [id, setId] = useState(users?.[0]?._id);

  const nextPage = () => setPage((prev) => Math.min(prev + 1, pages - 1));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const deleteHandler = async (user) => {
    if (!window.confirm(`Are you sure you want to delete ${user?.name}?`))
      return;

    try {
      const res = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/users/${user?._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey,
          },
        }
      );

      const data = await res.json();
      if (data.deletedCount) {
        toast.success("User deleted successfully");
        refetch();
      }
    } catch (error) {
      toast.error("Error deleting user");
    }
  };

  const userHandler = (user) => {
    setNewUser(user);
    setId(user?._id);
    setShow(true);
  };

  // console.log(users);

  return (
    <div className="min-h-screen md:border-2 bg-[#EBF8F9] dark:bg-slate-600 relative">
      <div className="md:grid grid-cols-7 hidden h-[88vh]">
        <div className="md:col-span-3 lg:col-span-2 md:border-r-4 h-[85vh] overflow-y-scroll">
          {isLoading && <SpinerLoading />}

          <ul className="menu p-4 w-[95%] mx-auto text-base">
            <ul className="menu p-4 w-[95%] mx-auto text-base space-y-4 ">
              {users?.map(
                (user) =>
                  user?.chat && (
                    <li key={user?._id} onClick={() => userHandler(user)}>
                      {user?._id === id ? (
                        <>
                          <div className="my-2 block bg-[#79A4A8] dark:bg-neutral-700 rounded-md text-white p-1">
                            <div className="flex items-center justify-between ">
                              <div
                                //  to={`/dashboard/user/${user?._id}`}
                                className="flex items-center gap-3   w-full  px-2 "
                              >
                                {user?.photoURL && (
                                  <img
                                    src={user?.photoURL}
                                    alt={user?.photoURL}
                                    className=" w-8 2xl:w-10  h-8 2xl:h-10 border-2 border-[#00A6B2] rounded-full"
                                    w="32"
                                    h="32"
                                  />
                                )}
                                {!user?.photoURL && (
                                  <BiUserCircle className="w-8 h-8 2xl:w-12 2xl:h-12 rounded-full text-gray-300"></BiUserCircle>
                                )}

                                <p className="dark:text-gray-100 text-xs 2xl:text-base">
                                  {user?.name}
                                </p>
                              </div>
                              <div className="relative inline-block text-left">
                                {/* Dropdown Trigger */}
                                <button
                                  onClick={() => setIsOpen(!isOpen)}
                                  className="bg-transparent outline-none text-gray-200 dark:text-gray-100 text-2xl cursor-pointer"
                                >
                                  <BsThreeDotsVertical />
                                </button>

                                {/* Dropdown Menu */}
                                {isOpen && (
                                  <ul
                                    className="absolute right-0 mt-2 w-40 bg-gray-200 dark:bg-slate-700 rounded-md shadow-lg z-10"
                                    onMouseLeave={() => setIsOpen(false)} // Close when mouse leaves
                                  >
                                    <li>
                                      <button
                                        onClick={() => {
                                          deleteHandler(user);
                                          setIsOpen(false);
                                        }}
                                        className="text-sm w-full px-4 py-2 bg-red-500  hover:bg-[#00A6B2] text-white block text-left rounded-md dark:text-gray-300 dark:hover:bg-[#00A6B2]"
                                      >
                                        Delete
                                      </button>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-gray-100 px-2 dark:text-gray-200">
                              {user?.adminMessage && (
                                <div>
                                  {user?.adminMessage?.length >= 16 ? (
                                    <>
                                      <p className="mt-1 text-xs 2xl:text-sm">
                                        You:{" "}
                                        {user?.adminMessage?.slice(0, 10) +
                                          "..."}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="mt-1 text-xs 2xl:text-sm">
                                        You: {user?.adminMessage}
                                      </p>
                                    </>
                                  )}
                                </div>
                              )}
                              {user?.message && (
                                <div className="mt-1">
                                  {user?.message?.length >= 18 ? (
                                    <>
                                      <p className=" text-xs 2xl:text-sm t">
                                        {user?.message?.slice(0, 16) + "..."}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className=" text-xs md:text-sm ">
                                        {user?.message}
                                      </p>
                                    </>
                                  )}
                                </div>
                              )}
                              {user?.time && (
                                <p className="text-xs ">
                                  {new Date(user?.time).toLocaleTimeString(
                                    "en-us",
                                    {
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                    }
                                  )}
                                </p>
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-[#D8E4E5] my-2 block dark:text-gray-100 dark:bg-slate-400 rounded-md p-1">
                            <div className="flex items-center justify-between  ">
                              <h1
                                //  to={`/dashboard/user/${user?._id}`}
                                className="flex items-center gap-3   w-full  px-2 rounded-md"
                              >
                                {user?.photoURL && (
                                  <img
                                    src={user?.photoURL}
                                    alt={user?.photoURL}
                                    className=" w-8 h-8 2xl:w-10 2xl:h-10 border-2 border-[#00A6B2] rounded-full"
                                  />
                                )}
                                {!user?.photoURL && (
                                  <BiUserCircle className="w-8 h-8 2xl:w-12 2xl:h-12 rounded-full text-gray-300"></BiUserCircle>
                                )}

                                <p className="dark:text-gray-100 2xl:text-base text-xs">
                                  {user?.name}
                                </p>
                              </h1>

                              <div>
                                <details className="dropdown dropdown-end  ">
                                  <summary
                                    type="button"
                                    className="
                                        bg-transparent outline-none text-gray-500 dark:text-gray-100 text-2xl -mr mt-1 cursor-pointer"
                                    style={{ listStyle: "none" }}
                                  >
                                    <BsThreeDotsVertical></BsThreeDotsVertical>
                                  </summary>
                                  <ul className="px-4 py-6  menu dropdown-content z-[1] bg-gray-200 pr-10 rounded-md shadow-lg  dark:bg-slate-700 mt-3 duration-500">
                                    <li onClick={() => deleteHandler(user)}>
                                      <button className="text-sm w-full px-8  hover:bg-[#00A6B2] btn-sm border-[1px] border-[#00A6B2] font-semibold hover:text-white dark:bg-slate-300 dark:hover:bg-[#00A6B2]">
                                        Delete
                                      </button>
                                    </li>
                                  </ul>
                                </details>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-gray-600 px-2 dark:text-gray-200">
                              {user?.adminMessage && (
                                <div>
                                  {user?.adminMessage?.length >= 16 ? (
                                    <>
                                      <p className="mt-1 text-xs 2xl:text-sm">
                                        You:{" "}
                                        {user?.adminMessage?.slice(0, 10) +
                                          "..."}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="mt-1 text-xs 2xl:text-sm">
                                        You: {user?.adminMessage}
                                      </p>
                                    </>
                                  )}
                                </div>
                              )}

                              {user?.message && (
                                <div className="mt-1">
                                  {user?.message?.length > 18 ? (
                                    <>
                                      <p className="2xl:text-sm text-xs">
                                        {user?.message?.slice(0, 16) + "..."}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="2xl:text-sm text-xs ">
                                        {user?.message}
                                      </p>
                                    </>
                                  )}
                                </div>
                              )}
                              {user?.time && (
                                <p className="text-xs ">
                                  {new Date(user?.time).toLocaleTimeString(
                                    "en-us",
                                    {
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                    }
                                  )}
                                </p>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </li>
                  )
              )}
            </ul>
          </ul>

          {/* Pagination Controls */}
          <div className="pagination py-3 flex justify-center">
            <button
              className="flex items-center pr-2 pl-1 py-1 text-gray-500 ml-2 border border-gray-300 hover:bg-[#00A6B2] hover:text-white custom-shadow text-sm"
              onClick={prevPage}
              disabled={page === 0}
            >
              <MdArrowBackIosNew className="text-xs font-bold" /> Prev
            </button>
            <button
              className="flex items-center pl-2 py-1 text-gray-500 ml-2 border border-gray-300 hover:bg-[#00A6B2] hover:text-white custom-shadow text-sm"
              onClick={nextPage}
              disabled={page === pages - 1}
            >
              Next <MdOutlineNavigateNext className="text-xl" />
            </button>

            <select
              className="ml-2 bg-white text-gray-500 border border-gray-300 rounded-md focus:outline-none px-1 text-xs leading-tight font-medium"
              onChange={(event) => setSize(Number(event.target.value))}
              value={size}
            >
              {[7, 10, 15, 20].map((s) => (
                <option key={s} value={s}>{`Page Size ${s}`}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Admin Chat Component */}
        <div className="md:col-span-4 lg:col-span-5">
          <AdminConversation
            newUser={newUser}
            users={users}
            setLoad={setLoad}
            load={load}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <ul className="menu p-4 w-[95%] mx-auto text-base mt-5">
          {users?.map(
            (user) =>
              user?.chat && (
                <Link href={`/dashboard/user/${user?._id}`} key={user?._id}>
                  <li className="bg-[#79A4A8] text-white p-3 rounded-md">
                    {user?.name}
                  </li>
                </Link>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default AllUsers;
