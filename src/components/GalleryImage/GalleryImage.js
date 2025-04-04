// components/GalleryImage.jsx
import React, { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const GalleryImage = ({ src, alt, className = "" }) => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
  }, [src]);

  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <img
          src={src}
          alt={alt}
          width={size.width}
          height={size.height}
          loading="lazy"
          className={`w-full h-full object-cover shadow-md border-[1px] border-[#00A6B2] custom-zoom ${className}`}
        />
      </PhotoView>
    </PhotoProvider>
  );
};

export default GalleryImage;
