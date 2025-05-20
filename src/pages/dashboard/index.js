import DashboardLayout from "./layout";
import React, { useContext, Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { FaUserNurse, FaUsers } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { AuthContext } from "@/context/AuthProvider";
import Loading from "@/components/shared/Loading";
import SkeletonLoading from "@/components/shared/SkeletonLoading";

const Rechart = dynamic(() => import("@/components/dashboard/Graph/Rechart"), {
  ssr: false,
  loading: () => <SkeletonLoading />,
});
const RoundChart = dynamic(
  () => import("@/components/dashboard/Graph/RoundChart"),
  { ssr: false, loading: () => <SkeletonLoading /> }
);
const AreaRechartComponent = dynamic(
  () => import("@/components/dashboard/Graph/AreaRechartComponent"),
  { ssr: false, loading: () => <SkeletonLoading /> }
);

const Dashboard = () => {
  const { previousVisitors, visitors } = useContext(AuthContext);

  let presentVisitors = 0;
  if (visitors) {
    for (const visitor of visitors) {
      presentVisitors += visitor?.visitor;
    }
  }

  const { data: allData = [] } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await fetch(
        "https://cottage-backend-voilerplate.vercel.app/notification"
      );
      return res.json();
    },
  });

  let pca = 0,
    cdpap = 0,
    officeMessage = 0;

  if (!allData?.messages) return <Loading />;

  for (const service of allData.messages) {
    if (service?.service === "PCA") pca++;
    else if (service?.service === "CDPAP") cdpap++;
    else if (service?.officeName) officeMessage++;
  }

  return (
    <div className="border-2 dark:border-[#E5E7EB] min-h-screen">
      <div className="md:flex gap-10 items-center">
        <div className="w-[100%] mx-auto md:ml-[4%]">
          <div className="w-[95%] mx-auto grid grid-cols-2 lg:grid-cols-5 mt-5 gap-7 items-center ">
            <Link href="/dashboard/cottage-users">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-primary-content rounded-xl py-4 shadow-md">
                <p className="flex justify-center text-4xl text-gray-100">
                  <FaUsers />
                </p>
                <p className="flex justify-center font-semibold text-gray-100 gap-2 items-center">
                  Total Users:{" "}
                  <span className="text-xl">{allData?.users?.length}</span>
                </p>
              </div>
            </Link>

            <Link href="/dashboard/pca">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-primary-content rounded-xl py-4 shadow-md">
                <p className="flex justify-center text-4xl text-gray-100">
                  <FaUserNurse />
                </p>
                <p className="flex justify-center font-semibold text-gray-100 gap-2 items-center">
                  PCA Inquiry: <span className="text-xl">{pca}</span>
                </p>
              </div>
            </Link>

            <Link href="/dashboard/cdpap">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-primary-content rounded-xl py-4 shadow-md">
                <p className="flex justify-center text-4xl text-gray-100">
                  <GiLovers />
                </p>
                <p className="flex justify-center font-semibold text-gray-100 gap-2 items-center">
                  CDPAP Inquiry: <span className="text-xl">{cdpap}</span>
                </p>
              </div>
            </Link>

            <Link href="/dashboard/offices">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-primary-content rounded-xl py-4 shadow-md">
                <p className="flex justify-center text-4xl text-gray-100">
                  <HiOutlineBuildingOffice2 />
                </p>
                <p className="flex justify-center font-semibold text-gray-100 gap-2 items-center">
                  Office Messages:{" "}
                  <span className="text-xl">{officeMessage}</span>
                </p>
              </div>
            </Link>

            <div className="lg:flex items-center gap-3 hidden">
              <p className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                <FaUsers className="text-3xl" />
              </p>
              <div>
                <p className="text-gray-500 font-medium text-sm dark:text-gray-200">
                  Total Visitors
                </p>
                <p className="font-semibold text-gray-600 dark:text-gray-200">
                  {previousVisitors + presentVisitors}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden justify-center mt-5">
            <p className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
              <FaUsers className="text-3xl" />
            </p>
            <div>
              <p className="text-gray-500 font-medium text-sm dark:text-gray-200">
                Total Visitors
              </p>
              <p className="font-semibold text-gray-600 dark:text-gray-200">
                {previousVisitors + presentVisitors}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:ml-[2%] lg:flex mt-10 gap-10">
        <div className="lg:w-[50%] w-full">
          <Suspense fallback={<SkeletonLoading />}>
            <Rechart />
          </Suspense>
        </div>

        <div className="w-full lg:w-[50%] md:flex md:justify-center md:mt-5 lg:mt-0 lg:justify-start items-center ml-[3%]">
          <div className="flex justify-center mt-5 md:block md:mt-0">
            <Suspense fallback={<SkeletonLoading />}>
              <RoundChart
                pca={pca}
                cdpap={cdpap}
                officeMessage={officeMessage}
              />
            </Suspense>
          </div>

          <div className="flex justify-center -mt-10 md:block md:mt-0">
            <div>
              <LegendItem color="#00C49F" label="PCA Message" />
              <LegendItem color="#0088FE" label="CDPAP Message" />
              <LegendItem color="#FFBB28" label="Office Message" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-[95%] mx-auto">
        <Suspense fallback={<SkeletonLoading />}>
          <AreaRechartComponent />
        </Suspense>
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }) => (
  <div className="flex gap-2 items-center my-2">
    <p
      className="flex"
      style={{ backgroundColor: color, width: 20, height: 20 }}
    ></p>
    <p className="font-medium text-sm text-gray-600 dark:text-gray-200">
      - {label}
    </p>
  </div>
);

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
