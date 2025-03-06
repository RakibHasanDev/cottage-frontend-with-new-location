import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-[100vh] fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-md z-50">
      <div className="animate-spin h-10 w-10 border-4 border-t-[#00A6B2] border-gray-300 rounded-full"></div>
    </div>
  );
};

export default LoadingScreen;
