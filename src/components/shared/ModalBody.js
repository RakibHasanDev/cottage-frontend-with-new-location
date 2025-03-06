import React from "react";
import LazyLoadVideo from "./LazyLoadVideo";

const ModalBody = ({ onClose, youtubeUrl }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur  flex items-center justify-center z-50  "
      onClick={onClose}
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="relative dark:bg-slate-600 w-[95%] md:max-w-2xl 2xl:max-w-4xl"
        onClick={handleModalClick}
      >
        {youtubeUrl ? (
          <>
            <div className="w-full h-[220px] md:h-[378px] 2xl:h-[504px] shadow-md z-50">
              <LazyLoadVideo src={youtubeUrl} rounded={false}></LazyLoadVideo>
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-[200px] md:h-[378px] 2xl:h-[504px]">
              <p className="text-white text-cneter flex justify-center items-center h-full text-2xl">
                Working on Videos
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalBody;
