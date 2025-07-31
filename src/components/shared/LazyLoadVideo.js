import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const LazyLoadVideo = ({ src, rounded = true, title = "Embedded video" }) => {
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

    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
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
          src={`${src}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          aria-label="Care Givers and Patients Review"
        />
      )}
    </div>
  );
};

LazyLoadVideo.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  rounded: PropTypes.bool,
};

export default LazyLoadVideo;
