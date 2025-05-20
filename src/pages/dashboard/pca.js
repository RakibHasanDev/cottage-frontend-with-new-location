import React, { useState } from "react";
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

  const url = `https://cottage-backend-voilerplate.vercel.app/chats/messages/PCA?page=${page}&size=${size}`;

  const { data: { count, users } = [], isLoading } = useQuery({
    queryKey: ["users", page, size],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const [newUser, setNewUser] = useState(users?.[0]);
  const [id, setId] = useState(users?.[0]?._id);

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
            toast.success("User Delete SuccessFully");
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
      {isLoading && <SkeletonLoading></SkeletonLoading>}
      <div className="grid grid-cols-7">
        <div className="col-span-2 border-r-4">
          {
            <ul className="menu p-4 w-[95%] mx-auto text-base-content mt-5">
              {users?.map((user) => (
                <li key={user?._id} onClick={() => userHandler(user)}>
                  {user?._id === id ? (
                    <>
                      <div className="my-2 block bg-[#79A4A8] dark:bg-neutral-700 rounded-md text-white">
                        <div
                          className="flex items-center justify-between 
                                              "
                        >
                          <h1
                            //  to={`/dashboard/user/${user?._id}`}
                            className="flex items-center gap-3 py-1  px-2 dark:bg-neutral-700 rounded-md"
                          >
                            {user?.photoURL && (
                              <img
                                src={user?.photoURL}
                                alt={user?.photoURL}
                                className="w-10 h-10 border-2 border-primary rounded-full"
                                w="40"
                                h="40"
                              />
                            )}
                            {!user?.photoURL && (
                              <BiUserCircle className="w-12 h-12 rounded-full text-gray-300"></BiUserCircle>
                            )}

                            <p className="dark:text-gray-100">
                              {user?.firstName}
                            </p>
                          </h1>

                          <div>
                            <details className="dropdown dropdown-end  ">
                              <summary
                                type="button"
                                className="
                                          bg-transparent outline-none text-gray-100 dark:text-gray-100 text-2xl -mr mt-1 cursor-pointer"
                                style={{ listStyle: "none" }}
                              >
                                <BsThreeDotsVertical></BsThreeDotsVertical>
                              </summary>
                              <ul className="px-4 py-6  menu dropdown-content z-[1] bg-gray-200 pr-10 rounded-md shadow-lg  dark:bg-slate-700 mt-3 duration-500">
                                <li onClick={() => deleteHandler(user)}>
                                  <button className="text-sm w-full px-8  hover:bg-primary btn-sm border-[1px] border-primary font-semibold hover:text-white dark:bg-slate-300 dark:hover:bg-primary">
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </details>
                          </div>
                        </div>
                        <div className="flex items-center justify-between  px-2 dark:text-gray-200 text-gray-100">
                          {user?.adminMessage && (
                            <p className="mt-1 text-sm">
                              You: {user?.adminMessage}
                            </p>
                          )}
                          {user?.message && (
                            <div className="mt-1">
                              {user?.message?.length > 18 ? (
                                <>
                                  <p className="text-sm  ">
                                    {user?.message?.slice(0, 16) + "..."}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <p className="text-sm ">{user?.message}</p>
                                </>
                              )}
                            </div>
                          )}
                          {user?.time && (
                            <p className="text-xs ">
                              {new Date(user?.time).toLocaleTimeString(
                                "en-us",
                                { month: "short", day: "numeric" }
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-[#D8E4E5] my-2 block dark:text-gray-100 dark:bg-slate-400">
                        <div className="flex items-center justify-between ">
                          <h1
                            //  to={`/dashboard/user/${user?._id}`}
                            className="flex items-center gap-3 dark:hover:bg-slate-800 w-full py-1.5 px-2 rounded-md"
                          >
                            {user?.photoURL && (
                              <img
                                src={user?.photoURL}
                                alt={user?.photoURL}
                                className="w-10 h-10 border-2 border-primary rounded-full"
                                w="40"
                                h="40"
                              />
                            )}
                            {!user?.photoURL && (
                              <BiUserCircle className="w-12 h-12 rounded-full text-gray-300"></BiUserCircle>
                            )}

                            <p className="dark:text-gray-100">
                              {user?.firstName}
                            </p>
                          </h1>

                          <div>
                            <details className="dropdown dropdown-end  ">
                              <summary
                                style={{ listStyle: "none" }}
                                type="button"
                                className="
                                          bg-transparent outline-none dark:text-gray-100 text-2xl -mr mt-1 cursor-pointer text-gray-500"
                              >
                                <BsThreeDotsVertical></BsThreeDotsVertical>
                              </summary>
                              <ul className="px-4 py-6  menu dropdown-content z-[1] bg-gray-200 pr-10 rounded-md shadow-lg  dark:bg-slate-700 mt-3 duration-500">
                                <li onClick={() => deleteHandler(user)}>
                                  <button className="text-sm w-full px-8  hover:bg-primary btn-sm border-[1px] border-primary font-semibold hover:text-white dark:bg-slate-300 dark:hover:bg-primary">
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </details>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-gray-600  dark:text-gray-200 px-3">
                          {user?.adminMessage && (
                            <p className="mt-1 text-sm">
                              You: {user?.adminMessage}
                            </p>
                          )}
                          {user?.message && (
                            <div className="mt-1">
                              {user?.message?.length > 18 ? (
                                <>
                                  <p className="text-sm t">
                                    {user?.message?.slice(0, 16) + "..."}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <p className="text-sm ">{user?.message}</p>
                                </>
                              )}
                            </div>
                          )}
                          {user?.time && (
                            <p className="text-xs ">
                              {new Date(user?.time).toLocaleTimeString(
                                "en-us",
                                { month: "short", day: "numeric" }
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          }

          <div className="float-left">
            <p className="text-center mt-10 text-sm font-semibold dark:text-gray-100 ">
              Currently Selected page:{" "}
              <span className="text-primary">{page + 1}</span>
            </p>
            <div className="pagination my-3 flex justify-center">
              {pages &&
                [...Array(pages).keys()].map((number) => (
                  <button
                    key={number}
                    className={
                      page === number
                        ? "selected px-2  ml-3 cursor-pointer border-[1px] custom-shadow text-sm"
                        : "px-3 py-1   text-gray-500 ml-3 cursor-pointer border-[1px] border-gray-300 hover:bg-[#444444] hover:text-white custom-shadow dark:text-white text-sm"
                    }
                    onClick={() => setPage(number)}
                  >
                    {number + 1}
                  </button>
                ))}

              <select
                className="ml-3 dark:bg-gray-400 dark:text-gray-100 bg-white text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none px-2 text-sm leading-tight font-medium"
                onChange={(event) => setSize(event.target.value)}
              >
                <option
                  selected
                  disabled
                  className="hidden"
                >{`Page Size ${size}`}</option>

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
          ></AdminConversation>
        </div>
      </div>
    </div>
  );
};

export default Pca;
