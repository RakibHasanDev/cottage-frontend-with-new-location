import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const LazyLoadVideo = ({ src, rounded = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    const currentRef = videoRef.current; // Store the current ref value

    if (currentRef) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className="w-full h-full">
      {isVisible && (
        <iframe
          className={`w-full h-full ${rounded ? "rounded-xl" : ""}`}
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
};

LazyLoadVideo.propTypes = {
  src: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};

export default LazyLoadVideo;
