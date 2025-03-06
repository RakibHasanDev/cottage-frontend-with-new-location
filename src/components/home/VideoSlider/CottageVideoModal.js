import LazyLoadVideo from "@/components/shared/LazyLoadVideo";
import React from "react";

const CottageVideoModal = ({ onClose, youtubeUrl }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur  flex justify-center z-50 bg-opacity-50"
      onClick={onClose}
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="relative dark:bg-slate-600 w-[95%] md:max-w-2xl 2xl:max-w-4xl top-[35%] md:top-[30%] lg:top-[25%]"
        onClick={handleModalClick}
        id="food-video"
        style={{
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          <div className="w-full shadow-md z-50">
            <LazyLoadVideo src={youtubeUrl} rounded={false}></LazyLoadVideo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CottageVideoModal;
