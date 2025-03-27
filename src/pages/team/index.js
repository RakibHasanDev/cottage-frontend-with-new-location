import React, { useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/shared/Loading";
import Link from "next/link";
import Head from "next/head";

const Team = () => {
  const [rotate, setRotate] = useState(false);
  const [department, setDepartment] = useState("");
  const [leader, setLeader] = useState("");
  const [rotations, setRotations] = useState({});

  const [team, setTeam] = useState("");

  const marketing = {
    img: "https://res.cloudinary.com/di3wwp9s0/image/upload/v1724690186/i5s7nmpqrrnisafsnacn.jpg",
    name: "Marketing Team",
  };
  const itTeam = {
    img: "https://res.cloudinary.com/di3wwp9s0/image/upload/v1724690186/i5s7nmpqrrnisafsnacn.jpg",
    name: "IT/Software Team",
  };
  const frontDeskTeam = {
    img: "https://res.cloudinary.com/di3wwp9s0/image/upload/v1724690186/i5s7nmpqrrnisafsnacn.jpg",
    name: "Front Desk / Receptionist Team",
  };
  const rnTeam = {
    img: "https://res.cloudinary.com/di3wwp9s0/image/upload/v1724690186/i5s7nmpqrrnisafsnacn.jpg",
    name: "Nursing Department",
  };

  // rotate-180

  const handleRotate = (team, department, leader, id) => {
    document.documentElement.style.scrollBehavior = "smooth";

    // console.log("Clicked ID:", id);
    // console.log("Previous Rotations:", rotations);

    setRotations((prevRotations) => {
      // Create a new object to store the updated rotation state
      const updatedRotations = {};

      // Set the rotation state of the clicked button to the opposite of its current state
      updatedRotations[id] = !prevRotations[id] || false;

      // Set rotation state of all other buttons to false
      Object.keys(prevRotations).forEach((key) => {
        if (key !== id) {
          updatedRotations[key] = false;
        }
      });

      return updatedRotations;
    });

    setRotate(!rotate);
    setTeam(team);
    setDepartment(department);
    setLeader(leader);

    // const offsetTop = targetElement.offsetTop - navbarHeight;

    setTimeout(() => {
      const targetElement = document.getElementById(department);
      const navbarHeight = 0;
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: "auto" });
      } else {
        console.error(`Element with ID ${department} not found.`);
      }
    }, 100); // Adjust the delay time as needed
  };

  // console.log(team, leader)

  const url = "https://cottage-backend-voilerplate.vercel.app/employee";

  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["employee"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  // console.log(employees);

  const employeesByDepartment = {};
  const employeesByOffice = {};

  // Iterate through the employees array
  employees.forEach((employee) => {
    // Group by department (ensure no duplication)
    if (!(employee.department in employeesByDepartment)) {
      employeesByDepartment[employee.department] = [];
    }

    // Add the employee to the department
    const alreadyInDepartment = employeesByDepartment[employee.department].some(
      (emp) => emp._id === employee._id
    );
    if (!alreadyInDepartment) {
      employeesByDepartment[employee.department].push(employee);
    }

    // Group by office
    if (employee.office) {
      if (!(employee.office in employeesByOffice)) {
        employeesByOffice[employee.office] = [];
      }

      // Add the employee to the office group
      employeesByOffice[employee.office].push(employee);
    }
  });

  // Log the final groups
  // console.log("Employees by Department:", employeesByDepartment);
  // console.log("Employees by Office:", employeesByOffice);

  return (
    <>
      <Head>
        <title>Team Members - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Meet the team at Cottage Home Care Services—compassionate, professional staff dedicated to delivering exceptional care and support across New York."
        />
        <meta
          name="keywords"
          content="Cottage Home Care team, home care staff, dedicated caregivers, professional healthcare team, compassionate home care providers, team member qualifications, home care experts, meet our team, Cottage Home Care professionals, healthcare staff profiles"
        />
        <link rel="canonical" href="https://cottagehomecare.com/team/" />
      </Head>

      <div className="min-h-screen dark:bg-slate-600 relative">
        <div className="md:container md:flex md:justify-center md:mx-auto pt-10 ">
          <div>
            <h2 className="text-gray-500 text-lg text-center  open-sans font-semibold pb-3 dark:text-gray-400 mt-5 md:mt-0">
              Meet our Team
            </h2>
            <h1 className="xl:text-3xl text-2xl text-center text-gray-700 font-bold  sm:w-4/6 w-5/6 mx-auto playrify dark:text-gray-200 league-spartan">
              The Talented People Behind the Success of the Organization
            </h1>
            <hr className="mt-3 border-t-[1px] border-[#00A6B2] w-16 mx-auto pb-6" />
          </div>
        </div>

        <div className="w-full  dark:bg-slate-600 ">
          <div className=" mx-auto">
            {isLoading && (
              <>
                <Loading></Loading>
              </>
            )}

            {/* new design for team member  */}

            {employees?.length > 0 && (
              <div className="w-full bg-[#F5F5F6] dark:bg-slate-800 ">
                <div className=" w-[95%] lg:w-[80%] mx-auto pt-20 pb-10 employee-flowchart ">
                  <div className="w-full lg:w-[75%] mx-auto" id="leadership">
                    <div className="  flex justify-between">
                      {employeesByDepartment?.Leadership?.map((employee) => (
                        <div key={employee?._id}>
                          <div>
                            <div className=" w-32 h-[85px] md:w-64 mt-8 md:mt-0 bg-[#FFFFFF]  md:h-32 rounded-lg shadow open-sans relative ">
                              <PhotoProvider>
                                <PhotoView src={employee?.img}>
                                  <img
                                    src={employee?.img}
                                    alt={employee?.img}
                                    className="w-10 h-10 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                                    w="64"
                                    h="64"
                                    loading="lazy"
                                  />
                                </PhotoView>
                              </PhotoProvider>

                              <Link
                                href={`/team/${employee?._id}`}
                                className="text-center font-semibold text-gray-500 pt-6 md:pt-9 text-sm md:text-lg hover:underline block"
                              >
                                {employee?.name}
                              </Link>
                              <h5 className="text-center pt-0.5 md:pt-2 text-[10px] md:text-sm font-bold md:font-semibold text-gray-500">
                                {employee?.designation}
                              </h5>

                              {employee?._id === "65dcede2331dfddc25c80c26" && (
                                <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-[14px] md:-bottom-3 ">
                                  <a
                                    href="#EXECUTIVE"
                                    onClick={() =>
                                      handleRotate(
                                        employeesByDepartment?.AdminSuperVisor,
                                        "EXECUTIVE",
                                        employeesByDepartment?.Leadership?.[1],
                                        "uniqueId222222"
                                      )
                                    }
                                    style={{
                                      backgroundColor: rotations[
                                        "uniqueId222222"
                                      ]
                                        ? "black"
                                        : "#6B7280",
                                    }}
                                    className={` w-9 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-[10px] md:text-base  flex items-center justify-center gap-0.5  }`}
                                  >
                                    <span>
                                      {
                                        employeesByDepartment?.AdminSuperVisor
                                          ?.length
                                      }
                                    </span>

                                    <span>
                                      <svg
                                        className={`fill-current font-semibold w-[13px] h-[13px] md:h-5 md:w-5 transform transition-transform ${
                                          rotations["uniqueId2"]
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          strokeWidth="1"
                                          stroke="currentColor"
                                          fill="none"
                                          d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                                        ></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <svg
                      id="medium-svg"
                      className="mx-auto -mt-[30px] md:-mt-[90px]  lg:-mt-[130px] 2xl:-mt-[135px] svg-line"
                      width="80%"
                      viewBox="0 0 100 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 1,10 L 1,19 L 99,19 L 99,10"
                        strokeWidth=".2"
                        fill="none"
                      />
                    </svg>

                    {/* sabine section start  */}

                    <div className=" z-30  h-[70px] w-40 md:w-52 bg-[#FFFFFF] md:h-24 lg:h-28 rounded-lg shadow open-sans relative mx-auto mt-8 md:mt-12">
                      <div className="flex justify-center items-center relative">
                        <p className=" h-12 dark:bg-gray-200 bg-[#6B7280] w-[1px] md:w-[2px] mx-auto absolute md:-top-[54px] lg:-top-[58px] -top-[35px]"></p>
                      </div>
                      <PhotoProvider>
                        <PhotoView
                          src={employeesByDepartment?.Administrator?.[0]?.img}
                        >
                          <img
                            src={employeesByDepartment?.Administrator?.[0]?.img}
                            alt={employeesByDepartment?.Administrator?.[0]?.img}
                            className="w-9 h-9 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-5 md:-top-10 shadow cursor-pointer z-10"
                            w="36"
                            h="36"
                            loading="lazy"
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div>
                        <Link
                          href={`/team/${employeesByDepartment?.Administrator?.[0]?._id}`}
                          className=" hover:underline text-center block font-semibold text-gray-500 pt-6 md:pt-7 lg:pt-9 text-[10px] md:text-lg"
                        >
                          {employeesByDepartment?.Administrator?.[0]?.name}
                        </Link>
                        <h5 className="text-center pt-0.5 lg:pt-2 text-[8px] md:text-sm font-semibold text-gray-500 px-2 md:px-0 leading-3">
                          {
                            employeesByDepartment?.Administrator?.[0]
                              ?.designation
                          }
                        </h5>
                      </div>
                    </div>

                    {/* sabine section end  */}

                    {/* <svg
                      className="mx-auto -mt-[38px] md:-mt-[90px] lg:-mt-[130px] svg-line  md:max-w-[561px] lg:max-w-[743px] 2xl:max-w-[862px] mobile-line-svg"
                      viewBox="0 0 100 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 1,19 L 99,19" stroke-width=".2" fill="none" />

                      <path d="M 50,19 L 50,10" stroke-width=".2" fill="none" />
                    </svg> */}
                    <svg
                      className="mx-auto rotate-180 mt-6 svg-line md:max-w-[470px] lg:max-w-[743px] 2xl:max-w-[862px] mobile-line-svg"
                      viewBox="0 0 100 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* <!-- Vertical lines at the bottom --> */}
                      <path d="M 1,19 L 1,15" strokeWidth="0.2" fill="none" />
                      <path d="M 99,19 L 99,15" strokeWidth="0.2" fill="none" />

                      {/* <!-- Horizontal line at the bottom --> */}
                      <path d="M 1,19 L 99,19" strokeWidth="0.2" fill="none" />
                    </svg>
                  </div>

                  <div
                    className=" md:max-w-[730px] lg:max-w-[1000px] 2xl:max-w-[1200px]  mx-auto lg:-mt-20 2xl:-mt-24 -mt-7 md:-mt-8 mobile-line-manager"
                    id="manager-section"
                  >
                    <div className="  flex  justify-evenly gap-[54px]  md:gap-3 lg:gap-[127px] 2xl:gap-[142px]  ">
                      {employeesByDepartment?.OfficeManager?.map((employee) => (
                        <div key={employee?._id}>
                          <div>
                            <div className="w-[82px] z-20  h-[70px] md:w-40 lg:w-52 bg-[#FFFFFF] md:h-24 lg:h-28 rounded-lg shadow open-sans relative  ">
                              {employee?._id === "65dcede2331dfddc25c80c30" && (
                                <div className="flex justify-center items-center relative">
                                  <p
                                    className=" h-[80px] md:h-[70px] lg:h-[100px]  dark:bg-gray-200 bg-[#6B7280] w-[1px] md:w-[2px] mx-auto absolute 
                                    md:-top-[94px] lg:-top-[100px] 
                                  -top-[70px]"
                                  ></p>
                                </div>
                              )}

                              <PhotoProvider>
                                <PhotoView src={employee?.img}>
                                  <img
                                    src={employee?.img}
                                    alt={employee?.img}
                                    className="w-9 h-9 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-5 md:-top-10 shadow cursor-pointer z-10"
                                    w="36"
                                    h="36"
                                    loading="lazy"
                                  />
                                </PhotoView>
                              </PhotoProvider>

                              <div>
                                <Link
                                  href={`/team/${employee?._id}`}
                                  className=" hover:underline text-center block font-semibold text-gray-500 pt-6 md:pt-7 lg:pt-9 text-[10px] md:text-lg"
                                >
                                  {employee?.name}
                                </Link>
                                <h5 className="text-center pt-0.5 lg:pt-2 text-[8px] md:text-sm font-semibold text-gray-500 px-2 md:px-0 leading-3">
                                  {employee?.designation}
                                </h5>
                              </div>
                              {employee?._id === "65dcede2331dfddc25c80c2a" && (
                                <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3 ">
                                  <a
                                    href="#BD"
                                    onClick={() =>
                                      handleRotate(
                                        employeesByOffice?.BD,
                                        "BD",
                                        employeesByDepartment
                                          ?.OfficeManager?.[1],
                                        "uniqueId2222"
                                      )
                                    }
                                    style={{
                                      backgroundColor: rotations["uniqueId2222"]
                                        ? "black"
                                        : "#6B7280",
                                    }}
                                    className={` w-10 h-6 md:w-12 md:h-6  rounded-3xl font-semibold text-gray-100 text-[10px] md:text-[14px]  flex items-center justify-center gap-0.5  }`}
                                  >
                                    <span>{employeesByOffice?.BD?.length}</span>

                                    <span>
                                      <svg
                                        className={`fill-current font-semibold w-[13px] h-[13px] md:h-[16px] md:w-[16px] transform transition-transform ${
                                          rotations["uniqueId2"]
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          strokeWidth="1"
                                          stroke="currentColor"
                                          fill="none"
                                          d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                                        ></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {employees?.length > 0 && (
              <div
                className=" w-[95%] lg:w-[70%] 2xl:w-[70%]  mx-auto mt-5 pb-10"
                id="team-details"
              >
                <h3 className="font-semibold Poppins dark:text-gray-100 text-gray-600 text-lg text-center">
                  Departments
                </h3>

                <hr className="border-[#00a6b2] border-t-[2px] w-16 mt-0.5  mx-auto  " />

                <div className="flex gap-3 md:gap-14 mt-3 md:mt-12 justify-evenly md:justify-center items-center flex-wrap ">
                  {/* div start Intake */}

                  <div>
                    <div className=" w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative  ">
                      <PhotoProvider>
                        <PhotoView
                          src={employeesByDepartment?.OfficeManager?.[0]?.img}
                        >
                          <img
                            src={employeesByDepartment?.OfficeManager?.[0]?.img}
                            alt={employeesByDepartment?.OfficeManager?.[0]?.img}
                            className=" w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                            w="48"
                            h="48"
                            loading="lazy"
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div>
                        <Link
                          href={`/team/${employeesByDepartment?.OfficeManager?.[0]?._id}`}
                          className=" hover:underline block text-center font-semibold text-gray-500 pt-8 md:pt-9 text-sm md:text-lg"
                        >
                          {employeesByDepartment?.OfficeManager?.[0]?.name}
                        </Link>
                        <h5 className="text-center pt-1 md:pt-2 text-xs md:text-sm font-semibold text-gray-500">
                          Intake Manager
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#INTAKE"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.INTAKE,
                              "INTAKE",
                              employeesByDepartment?.OfficeManager?.[0],
                              "uniqueId1"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId1"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5 `}
                        >
                          <span>{employeesByDepartment?.INTAKE?.length}</span>
                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId1"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* div end Intake */}

                  {/* div start CDPAP  */}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative ">
                      <PhotoProvider>
                        <PhotoView
                          src={employeesByDepartment?.CdpapSuperVisor?.[0]?.img}
                        >
                          <img
                            src={
                              employeesByDepartment?.CdpapSuperVisor?.[0]?.img
                            }
                            alt={
                              employeesByDepartment?.CdpapSuperVisor?.[0]?.img
                            }
                            className="  w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                            w="48"
                            h="48"
                            loading="lazy"
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div>
                        <Link
                          href={`/team/${employeesByDepartment?.CdpapSuperVisor?.[0]?._id}`}
                          className=" hover:underline block text-center font-semibold text-gray-500 pt-8 md:pt-9 text-sm md:text-lg"
                        >
                          {employeesByDepartment?.CdpapSuperVisor?.[0]?.name}
                        </Link>
                        <h5 className="text-center pt-1 md:pt-2 text-xs md:text-sm font-semibold text-gray-500">
                          CDPAP Manager
                        </h5>
                      </div>
                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#CDPAP"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.CDPAP,
                              "CDPAP",
                              employeesByDepartment?.CdpapSuperVisor?.[0],
                              "uniqueId2"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId2"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5  }`}
                        >
                          <span>{employeesByDepartment?.CDPAP?.length}</span>

                          <span>
                            <svg
                              className={`fill-current font-semibold w-4 h-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId2"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* div end CDPAP */}

                  {/* div start Admin */}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative ">
                      <PhotoProvider>
                        <PhotoView
                          src={employeesByDepartment?.AdminSuperVisor?.[0]?.img}
                        >
                          <img
                            src={
                              employeesByDepartment?.AdminSuperVisor?.[0]?.img
                            }
                            alt={
                              employeesByDepartment?.AdminSuperVisor?.[0]?.img
                            }
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                            w="48"
                            h="48"
                            loading="lazy"
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div>
                        <Link
                          href={`/team/${employeesByDepartment?.AdminSuperVisor?.[0]?._id}`}
                          className="block hover:underline text-center font-semibold text-gray-500 pt-8 md:pt-9 text-sm md:text-lg"
                        >
                          {employeesByDepartment?.AdminSuperVisor?.[0]?.name}
                        </Link>
                        <h5 className="text-center  md:pt-2 text-xs md:text-sm font-semibold text-gray-500">
                          {
                            employeesByDepartment?.AdminSuperVisor?.[0]
                              ?.designation
                          }
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#ADMIN"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.ADMIN,
                              "ADMIN",
                              employeesByDepartment?.AdminSuperVisor?.[0],
                              "uniqueId6"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId6"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5 `}
                        >
                          <span>{employeesByDepartment?.ADMIN?.length}</span>

                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId6"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* div end Admin */}

                  {/* div start HHA  */}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative">
                      <PhotoProvider>
                        <PhotoView
                          src={employeesByDepartment?.HHA_MANAGER?.[0]?.img}
                        >
                          <img
                            src={employeesByDepartment?.HHA_MANAGER?.[0]?.img}
                            alt={employeesByDepartment?.HHA_MANAGER?.[0]?.img}
                            className="  w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                            w="48"
                            h="48"
                            loading="lazy"
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div>
                        <Link
                          href={`/team/${employeesByDepartment?.HHA_MANAGER?.[0]?._id}`}
                          className=" block hover:underline text-center font-semibold text-gray-500 pt-8 md:pt-9 text-sm md:text-lg"
                        >
                          {employeesByDepartment?.HHA_MANAGER?.[0]?.name}
                        </Link>
                        <h5 className="text-center pt-1 md:pt-2 text-xs md:text-sm font-semibold text-gray-500">
                          HHA Manager
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#HHA"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.HHA,
                              "HHA",
                              employeesByDepartment?.HHA_MANAGER?.[0],
                              "uniqueId3"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId3"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5 `}
                        >
                          <span>{employeesByDepartment?.HHA?.length}</span>

                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId3"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* div end HHA  */}
                </div>
                <div className="flex gap-3 md:gap-14  justify-evenly md:justify-center items-center flex-wrap  mt-6 md:mt-[70px] ">
                  {/* div start HR */}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative">
                      <PhotoProvider>
                        <PhotoView
                          src={employeesByDepartment?.HrSuperVisor?.[0]?.img}
                        >
                          <img
                            src={employeesByDepartment?.HrSuperVisor?.[0]?.img}
                            alt={employeesByDepartment?.HrSuperVisor?.[0]?.img}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                            w="48"
                            h="48"
                            loading="lazy"
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div>
                        <Link
                          href={`/team/${employeesByDepartment?.HrSuperVisor?.[0]?._id}`}
                          className=" hover:underline block text-center font-semibold text-gray-500 pt-8 md:pt-9 text-sm md:text-lg"
                        >
                          {employeesByDepartment?.HrSuperVisor?.[0]?.name}
                        </Link>
                        <h5 className="text-center pt-1 md:pt-2 text-xs md:text-sm font-semibold text-gray-500">
                          HR Manager
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#HR"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.HR,
                              "HR",
                              employeesByDepartment?.HrSuperVisor?.[0],
                              "uniqueId4"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId4"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5 `}
                        >
                          <span>{employeesByDepartment?.HR?.length}</span>

                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId4"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* div end HR */}

                  {/* div start BILLING  */}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative ">
                      <PhotoProvider>
                        <PhotoView
                          src={
                            employeesByDepartment?.BillingSuperVisor?.[0]?.img
                          }
                        >
                          <img
                            src={
                              employeesByDepartment?.BillingSuperVisor?.[0]?.img
                            }
                            alt={
                              employeesByDepartment?.BillingSuperVisor?.[0]?.img
                            }
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                            w="48"
                            h="48"
                            loading="lazy"
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div>
                        <Link
                          href={`/team/${employeesByDepartment?.BillingSuperVisor?.[0]?._id}`}
                          className="block hover:underline text-center font-semibold text-gray-500 pt-8 md:pt-9 text-sm md:text-lg"
                        >
                          {employeesByDepartment?.BillingSuperVisor?.[0]?.name}
                        </Link>
                        <h5 className="text-center pt-1 md:pt-2 text-xs md:text-sm font-semibold text-gray-500">
                          Billing & Payroll Manager
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#BILLING"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.BILLING,
                              "BILLING",
                              employeesByDepartment?.BillingSuperVisor?.[0],
                              "uniqueId5"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId5"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5 `}
                        >
                          <span>{employeesByDepartment?.BILLING?.length}</span>

                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId5"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* div end BILLING */}

                  {/* div start Administrative  */}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative ">
                      <PhotoProvider>
                        <PhotoView
                          src={employeesByDepartment?.Administrative?.[0]?.img}
                        >
                          <img
                            src={
                              employeesByDepartment?.Administrative?.[0]?.img
                            }
                            alt={
                              employeesByDepartment?.Administrative?.[0]?.img
                            }
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                            w="48"
                            h="48"
                            loading="lazy"
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div>
                        <Link
                          href={`/team/${employeesByDepartment?.Administrative?.[0]?._id}`}
                          className=" block hover:underline text-center font-semibold text-gray-500 pt-8 md:pt-9 text-sm md:text-lg"
                        >
                          {employeesByDepartment?.Administrative?.[0]?.name}
                        </Link>
                        <h5 className="text-center pt-1 md:pt-2 text-xs md:text-sm font-semibold text-gray-500">
                          {
                            employeesByDepartment?.Administrative?.[0]
                              ?.designation
                          }
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* div end  Administrative  */}
                </div>

                <div className="flex gap-3 md:gap-14 mt-6 md:mt-16 justify-evenly md:justify-center items-center flex-wrap ">
                  {/* IT/SOFTWARE DEPARTMENT START*/}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative ">
                      <div className="px-4">
                        <div className="flex gap-2 items-center pt-2 md:pt-4">
                          {employeesByDepartment?.ItSoftware?.map(
                            (employee) => (
                              <div key={employee?._id}>
                                <img
                                  className="w-7 h-7 md:w-8 md:h-8 rounded-full"
                                  src={employee?.img}
                                  alt={employee?.name}
                                  w="28"
                                  h="28"
                                  loading="lazy"
                                />
                              </div>
                            )
                          )}
                        </div>
                        <p className="text-start  font-semibold text-gray-500 text-xs md:text-lg pt-1 md:pt-2">
                          SOFTWARE & IT Team
                        </p>
                        <h5 className="text-start  pt-1 text-xs md:text-sm font-semibold text-gray-500">
                          {employeesByDepartment?.ItSoftware?.length} Members
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#IT"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.ItSoftware,
                              "IT",
                              itTeam,
                              "uniqueId7"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId7"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5  `}
                        >
                          <span>
                            {employeesByDepartment?.ItSoftware?.length}
                          </span>

                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId7"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* IT/SOFTWARE DEPARTMENT END*/}

                  {/* Marketing DEPARTMENT START*/}

                  {/* <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative ">
                      <div className="px-4">
                        <div className="flex gap-2 items-center pt-2 md:pt-4">
                          {employeesByDepartment?.MediaMarketing?.map(
                            (employee) => (
                              <div key={employee?._id}>
                                <img
                                  className="w-7 h-7 md:w-8 md:h-8 rounded-full"
                                  src={employee?.img}
                                  alt={employee?.name}
                                  w="32"
                                  h="32"
                                  loading="lazy"
                                />
                              </div>
                            )
                          )}
                        </div>
                        <h1 className="text-start  font-semibold text-gray-500 text-xs md:text-lg pt-1 md:pt-2">
                          Marketing Team
                        </h1>
                        <h5 className="text-start  pt-1 text-xs md:text-sm font-semibold text-gray-500">
                          {employeesByDepartment?.MediaMarketing?.length}{" "}
                          Members
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#IT"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.MediaMarketing,
                              "MediaMarketing",
                              marketing,
                              "uniqueId15"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId15"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5  `}
                        >
                          <span>
                            {employeesByDepartment?.MediaMarketing?.length}
                          </span>

                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId7"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div> */}

                  {/* marketing DEPARTMENT END*/}

                  {/* Front Desk DEPARTMENT START*/}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative">
                      <div className="px-4">
                        <div className="flex gap-2 items-center pt-2 md:pt-4">
                          {employeesByDepartment?.FrontDesk?.map((employee) => (
                            <div key={employee?._id}>
                              <img
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full"
                                src={employee?.img}
                                alt={employee?.name}
                                w="28"
                                h="28"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-start  font-semibold text-gray-500 text-[10px]  md:text-sm pt-1 md:pt-2 ">
                          Receptionist Coordinators
                        </p>

                        <h5 className="text-start  pt-0.5 md:pt-1 text-xs md:text-sm font-semibold text-gray-500">
                          {employeesByDepartment?.FrontDesk?.length} Members
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#DESK"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.FrontDesk,
                              "DESK",
                              frontDeskTeam,
                              "uniqueId8"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId8"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5  `}
                        >
                          <span>
                            {employeesByDepartment?.FrontDesk?.length}
                          </span>

                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId8"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* front desk DEPARTMENT END*/}

                  {/* RN /DPS DEPARTMENT START*/}

                  <div>
                    <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative">
                      <div className="px-4">
                        <div className="flex gap-2 items-center pt-2 md:pt-4">
                          {employeesByDepartment?.RnDps?.map((employee) => (
                            <div key={employee?._id}>
                              <img
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full"
                                src={employee?.img}
                                alt={employee?.name}
                                w="28"
                                h="28"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-start  font-semibold text-gray-500 text-xs md:text-lg pt-1 md:pt-2">
                          Nursing Department
                        </p>
                        <h5 className="text-start  pt-1 text-xs md:text-sm font-semibold text-gray-500">
                          {employeesByDepartment?.RnDps?.length} Members
                        </h5>
                      </div>

                      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                        <a
                          href="#RN"
                          onClick={() =>
                            handleRotate(
                              employeesByDepartment?.RnDps,
                              "RN",
                              rnTeam,
                              "uniqueId9"
                            )
                          }
                          style={{
                            backgroundColor: rotations["uniqueId9"]
                              ? "black"
                              : "#6B7280",
                          }}
                          className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5  `}
                        >
                          <span>{employeesByDepartment?.RnDps?.length}</span>

                          <span>
                            <svg
                              className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                rotations["uniqueId9"] ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* RN/DPS DEPARTMENT END*/}
                </div>

                {Object.keys(rotations).map(
                  (id) =>
                    rotations[id] && (
                      <div
                        key={id}
                        className="mt-20 mx-auto dynamic-team"
                        id={department}
                      >
                        {leader && (
                          <div className="flex justify-center items-center gap-2">
                            <img
                              className="w-7 h-7 rounded-full"
                              src={leader?.img}
                              alt={leader?.img}
                              w="28"
                              h="28"
                              loading="lazy"
                            />
                            <p className="font-medium dark:text-gray-100">
                              {leader?.name}
                            </p>
                          </div>
                        )}
                        <svg
                          className="w-full fill-gray-500 dark:fill-white md:-mt-3 lg:-mt-5"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 685.53 36"
                        >
                          <path d="M670.58,22.24c0.01-3.02-2.19-5.17-5.31-5.18c-1.98-0.01-3.97,0.02-5.95,0.02c-65.76,0-131.53,0-197.29,0  c-39.38,0-78.75-0.01-118.13-0.02c-0.74,0-1.5-0.08-2.21-0.25c-1.41-0.34-2.03-1.18-2.08-2.6c-0.04-1.11-0.09-2.23-0.2-3.34  c-0.02-0.22-0.33-0.42-0.51-0.63c-0.15,0.2-0.42,0.39-0.44,0.6c-0.1,1-0.17,2-0.19,3.01c-0.03,1.87-0.79,2.82-2.7,3.05  c-1.36,0.17-2.75,0.18-4.13,0.18c-105.86,0-211.72,0-317.58-0.04c-4.82,0-6.43,3.52-5.96,7.32c0.03,0.21,0.38,0.5,0.6,0.52  c0.17,0.01,0.5-0.33,0.54-0.54c0.1-0.66,0.12-1.33,0.13-2c0.04-2.18,1.44-3.85,3.65-4.07c1.88-0.19,3.78-0.21,5.67-0.21  c76.05-0.01,152.11-0.01,228.16-0.01c29.09,0,58.17,0,87.26,0.03c1.85,0,3.64,0.02,5.03-1.6c1.36,1.63,3.15,1.66,5,1.6  c1.67-0.06,3.33-0.02,5-0.02c75.79,0,151.59,0,227.38,0c28.89,0,57.77,0,86.66,0.02c1.11,0,2.25,0.12,3.32,0.37  c1.81,0.42,3.01,2.01,3.08,3.8c0.02,0.64,0.03,1.29,0.15,1.92c0.05,0.28,0.37,0.51,0.56,0.77c0.15-0.25,0.41-0.49,0.44-0.75  C670.61,23.53,670.58,22.88,670.58,22.24z" />
                        </svg>
                        <div className="flex gap-3 md:gap-14 -mt-2 md:mt-4  justify-evenly md:justify-center items-center flex-wrap ">
                          {team.map((tm) => (
                            <div key={tm?._id}>
                              <div className="w-40 md:w-64 mt-8 md:mt-0 bg-[#F5F5F6] h-24 md:h-32 rounded-lg shadow open-sans relative ">
                                <PhotoProvider>
                                  <PhotoView src={tm?.img}>
                                    <img
                                      src={tm?.img}
                                      alt={tm?.img}
                                      className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-10 shadow cursor-pointer"
                                      w="64"
                                      h="64"
                                      loading="lazy"
                                    />
                                  </PhotoView>
                                </PhotoProvider>
                                <div>
                                  <Link
                                    href={`/team/${tm?._id}`}
                                    className="block hover:underline text-center font-semibold text-gray-500 pt-8 md:pt-9 text-sm md:text-lg"
                                  >
                                    {tm?.name}
                                  </Link>
                                  <h5 className="text-center pt-1 md:pt-2 text-xs md:text-sm font-semibold text-gray-500">
                                    {tm?.designation}
                                  </h5>
                                </div>
                                {tm?._id === "65dcede2331dfddc25c80c35" && (
                                  <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                                    <a
                                      href="#ADMIN"
                                      onClick={() =>
                                        handleRotate(
                                          employeesByDepartment?.ADMIN,
                                          "ADMIN",
                                          employeesByDepartment
                                            ?.AdminSuperVisor?.[0],
                                          "uniqueId6"
                                        )
                                      }
                                      style={{
                                        backgroundColor: rotations["uniqueId6"]
                                          ? "black"
                                          : "#6B7280",
                                      }}
                                      className={` w-10 h-6 md:w-12 md:h-7  rounded-3xl font-semibold text-gray-100 text-xs md:text-base  flex items-center justify-center gap-0.5 `}
                                    >
                                      <span>
                                        {employeesByDepartment?.ADMIN?.length}
                                      </span>

                                      <span>
                                        <svg
                                          className={`fill-current font-semibold h-4 w-4 md:h-5 md:w-5 transform transition-transform ${
                                            rotations["uniqueId6"]
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            strokeWidth="1"
                                            stroke="currentColor"
                                            fill="none"
                                            d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                                          ></path>
                                        </svg>
                                      </span>
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            )}

            <Link
              href="/all-team-members"
              className=" dark:text-gray-100 text-gray-100 text-center block pb-10 md:pt-5 open-sans font-semibold md:text-base text-sm "
            >
              <p className=" w-[200px] md:w-[240px] mx-auto bg-[#00A6B2] flex justify-center items-center gap-1 py-2 rounded-lg shadow-lg">
                <span>
                  {" "}
                  <AiOutlineTeam className="font-semibold text-shadow" />
                </span>{" "}
                <span className="hover-underline-animation league-spartan ">
                  View All Team Members
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* <Chat /> */}
    </>
  );
};

export default Team;
