import React, { useContext, useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { BsSearch } from "react-icons/bs";
import Loading from "@/components/shared/Loading";
import Link from "next/link";
import Head from "next/head";
import { AuthContext } from "@/context/AuthProvider";
import useAdmin from "@/hooks/useAdmin";

const AllTeamMembers = () => {
  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  const { user } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useAdmin(user?.email);

  const [searchQuery, setSearchQuery] = useState("");

  const url = "https://cottage-backend-voilerplate.vercel.app/employee";

  const {
    data: employees = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employee"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  const deleteHandler = (employer) => {
    const proceed = window.confirm(
      `Are you sure, you want to delete ${employer?.name}?`
    );
    if (proceed) {
      fetch(
        `https://cottage-backend-voilerplate.vercel.app/employee/${employer?._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success(`${employer?.name} Delete SuccessFully`);
            refetch();
          }
        });
    }
  };

  const filteredEmployees = employees?.filter((employee) =>
    employee?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>All Team Members - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Meet the experienced team members of Cottage Home Care Services. Our compassionate caregivers are committed to delivering quality home care."
        />

        <meta
          name="keywords"
          content="Cottage Home Care team members, all team members, home care staff, experienced caregivers, healthcare professionals, dedicated team, compassionate care providers, expert home care, meet our staff, Cottage Home Care professionals"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/all-team-members/"
        />
      </Head>
      <main id="all-team">
        <div className="min-h-screen dark:bg-slate-600 relative">
          <div className="md:container md:flex md:justify-center md:mx-auto pt-10 ">
            <div>
              <h1 className="text-gray-500 text-lg text-center  pb-3 dark:text-gray-400 mt-5 md:mt-0 open-sans font-semibold">
                Meet Our All Team Members
              </h1>
              <h2 className="xl:text-3xl text-2xl text-center text-gray-700 font-extrabold  sm:w-4/6 w-5/6 mx-auto playrify dark:text-gray-200 league-spartan">
                Meet the talented individuals who drive Cottage Home Care&apos;s
                success.
              </h2>
              <hr className="mt-3 border-t-[1px] border-[#00A6B2] w-16 mx-auto pb-6" />
            </div>
          </div>

          <div className="absolute md:top-10 top-2 md:right-12 left-1/2 md:left-auto transform md:-translate-x-0 -translate-x-1/2">
            <div className="relative ">
              <input
                className="focus:outline-0 border-[2px] border-[#00A6B2] md:pl-8 md:pr-4 pl-7 pr-1 py-1 rounded-full md:placeholder:text-sm placeholder:font-medium placeholder:text-xs dark:bg-slate-500 dark:placeholder:text-gray-200 dark:text-gray-200"
                type="text"
                placeholder="Search By Employee Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <BsSearch className="absolute top-2.5 left-3  text-[#00A6B2]" />
            </div>
          </div>

          <div className="w-full bg-gray-100 dark:bg-slate-600 md:px-10 pt-10 ">
            <div className="md:container mx-auto">
              {isLoading && (
                <>
                  <Loading></Loading>
                </>
              )}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-16 team-member mx-auto"
                id="team-card"
              >
                {/* lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around */}
                {filteredEmployees?.map((employer, index) => (
                  <div
                    key={index}
                    className=" relative mt-16   mb-10 md:w-full  bg-white  shadow-md rounded-md lg:min-h-[22rem] dark:bg-slate-800 "
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <div className="rounded overflow-hidden  ">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32 relative overflow-hidden hover:rounded-full cursor-pointer duration-500">
                          <PhotoProvider>
                            <PhotoView src={employer?.img}>
                              <img
                                src={employer?.img}
                                alt={employer?.img}
                                className="rounded-full object-cover h-full w-full shadow-md  transition-transform transform scale-100  custom-zoom  hover:rounded-full"
                                loading="lazy"
                                width="128"
                                height="128"
                              />
                            </PhotoView>
                          </PhotoProvider>
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <Link
                          href={`/team/${employer?._id}`}
                          className=" block hover:underline font-bold text-3xl text-center pb-1 dark:text-gray-300 league-spartan"
                        >
                          {employer?.name}
                        </Link>
                        <p className="text-gray-800 text-base font-semibold  text-center dark:text-gray-200 league-spartan text-[18px]">
                          {employer?.designation}
                        </p>

                        <p className="flex items-center justify-center  text-gray-700 text-base pt-3 font-normal source-sans pb-8 dark:text-gray-300  leading-7 hyphens-auto text-justify-hyphenate tracking-tight">
                          {employer?.description}
                        </p>

                        {!isAdminLoading && isAdmin && user?.uid && (
                          <div className=" mt-16">
                            <div className="flex items-center justify-evenly  absolute w-full right-0 left-0 bottom-12">
                              <Link href={`/employee/${employer?._id}`}>
                                <button className="btn btn-sm bg-[#1D93AE] px-4 py-2 rounded-md  my-5 text-white font-semibold uppercase">
                                  Update
                                </button>
                              </Link>

                              <button
                                onClick={() => deleteHandler(employer)}
                                className="bg-red-500 px-4 py-2 rounded-md  my-5 text-white font-semibold uppercase btn btn-sm"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                        <div className="pb-6">
                          <div className="w-full flex justify-center   absolute bottom-0  right-0 left-0 my-5">
                            {employer?.facebook == null ||
                            employer?.facebook === "" ? (
                              <>
                                <button className="mx-5 bg-hov2">
                                  <div>
                                    <FiFacebook className="text-[#828FA3] text-2xl " />
                                  </div>
                                </button>
                              </>
                            ) : (
                              <>
                                <a
                                  href={employer?.facebook}
                                  target="_blank"
                                  className="mx-5 bg-hov2"
                                  rel="noreferrer"
                                >
                                  <div>
                                    <FiFacebook className="text-[#828FA3] text-2xl " />
                                  </div>
                                </a>
                              </>
                            )}

                            {employer?.twitter == null ||
                            employer?.twitter === "" ? (
                              <>
                                <button className="mx-5 bg-hov2">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-twitter"
                                    >
                                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                    </svg>
                                  </div>
                                </button>
                              </>
                            ) : (
                              <>
                                <a
                                  href={employer?.twitter}
                                  target="_blank"
                                  className="mx-5 bg-hov2"
                                  rel="noreferrer"
                                >
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-twitter"
                                    >
                                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                    </svg>
                                  </div>
                                </a>
                              </>
                            )}
                            {employer?.instagram == null ||
                            employer?.instagram === "" ? (
                              <>
                                <button className="mx-5 bg-hov2">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-instagram"
                                    >
                                      <rect
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        ry={5}
                                      />
                                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                      <line
                                        x1="17.5"
                                        y1="6.5"
                                        x2="17.51"
                                        y2="6.5"
                                      />
                                    </svg>
                                  </div>
                                </button>
                              </>
                            ) : (
                              <>
                                <a
                                  href={employer?.instagram}
                                  target="_blank"
                                  className="mx-5 bg-hov2"
                                  rel="noreferrer"
                                >
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-instagram"
                                    >
                                      <rect
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        ry={5}
                                      />
                                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                      <line
                                        x1="17.5"
                                        y1="6.5"
                                        x2="17.51"
                                        y2="6.5"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </>
                            )}
                            {employer?.web && (
                              <a
                                href={employer?.web}
                                target="_blank"
                                className="mx-5 bg-hov2"
                                rel="noreferrer"
                              >
                                <div>
                                  <AiOutlineGlobal className="text-[#828FA3] text-2xl " />
                                </div>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <Chat /> */}
      </main>
    </>
  );
};

export default AllTeamMembers;
