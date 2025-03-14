import React, { useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { BsPauseCircleFill } from "react-icons/bs";

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePushButtonClick = () => {
    if (!isVideoPlaying) {
      // If the video is not playing, start playing it
      setVideoPlaying(true);
      const video = videoRef.current;
      video.muted = false; // Unmute the video
      video.play(); // Start playing the video
    } else {
      // If the video is already playing, pause it
      const video = videoRef.current;
      video.pause();
      setVideoPlaying(false);
    }
  };

  return (
    <div className="w-[100%] md:h-[82vh] relative block h-[40vh] ">
      <div className="overlay-past"></div>
      {!isVideoPlaying ? (
        <img
          src={"/assets/past-event-cover.jpg"} // Replace with the path to your thumbnail image
          alt="Thumbnail"
          style={{
            position: "absolute",
            width: "100%",

            objectFit: "cover",
          }}
          className="md:h-[83vh] h-[40vh]"
          w="100"
          h="100"
        />
      ) : null}

      {!isVideoPlaying ? (
        <button
          onClick={handlePushButtonClick}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "white",
          }}
        >
          <div className="play-btn2">
            <FaPlayCircle className="text-3xl lg:text-5xl" />
          </div>
        </button>
      ) : null}

      <video
        id="video"
        preload="none"
        loading="eager|lazy"
        src="https://res.cloudinary.com/di3wwp9s0/video/upload/v1741789037/pastevent_banner/bpixjws01syclsqptgqp_gmktik.mp4"
        muted={false}
        ref={videoRef}
        loop
        style={{
          display: isVideoPlaying ? "block" : "none",
        }}
      />

      {isVideoPlaying ? (
        <button
          onClick={handlePushButtonClick}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "white",
          }}
        >
          <BsPauseCircleFill className="md:text-6xl text-5xl  text-[#e0e5eb86]" />
        </button>
      ) : null}
    </div>
  );
};

export default Hero;
