import React from "react";

const SkeletonLoading = () => {
  return (
    <div>
      <div className="py-4 rounded shadow-md w-full animate-pulse bg-[#00a6b25d] dark:bg-gray-900 min-h-[82vh]">
        <div className="flex p-4 space-x-4 sm:px-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700"></div>
          <div className="flex-1 py-2 space-y-4">
            <div className="w-full h-3 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
            <div className="w-5/6 h-3 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          <div className="w-full h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          <div className="w-3/4 h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
        </div>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          <div className="w-full h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          <div className="w-3/4 h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
        </div>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          <div className="w-full h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          <div className="w-3/4 h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
        </div>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          <div className="w-full h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
          <div className="w-3/4 h-4 rounded bg-[#00a6b230] dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
