"use client";

import React, { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Dynamic Imports
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const TestimonialCard = dynamic(() => import("./TestimonialCard"), {
  ssr: false,
});
const VideoCard = dynamic(() => import("../../shared/LazyLoadVideo"), {
  ssr: false,
});

const NewSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const allData = [
    { src: "https://www.youtube.com/embed/cruhtClBx_I?rel=0" },
    {
      image:
        "/assets/testimonial/cottage-home-care-review-Cinthya_Almendarez.webp",
      name: "Cinthya Almendarez",
      designation: "Patient",
      description:
        "Cottage home care is a spectacular agency with a great work environment. I can call any hour and there is always someone on the phone who will answer me and provide the help I need.",
      caseType: "HHA",
      rating: 5,
    },
    { src: "https://www.youtube.com/embed/NKOzRc6sJBE?rel=0" },
    {
      image:
        "/assets/testimonial/cottage-home-care-review-Sherry_Fiedtkou.webp",
      name: "Sherry Fiedtkou",
      designation: "Patient",
      description:
        "I'm having the best experience working with Cottage Home Care. The staff and management is exceptional because I've been working in the Home care for 17 years and this is one of the best agencies.",
      caseType: "HHA",
      rating: 4.8,
    },
    { src: "https://www.youtube.com/embed/7xb2ChJBhh8?rel=0" },
    {
      image:
        "/assets/testimonial/cottage-home-care-review-Natividad_Mateo.webp",
      name: "Natividad Mateo",
      designation: "Patient",
      description:
        "Excellent customer service and employee service, always with a smile. Staff is caring and loving and receptive to your needs. Great home care agency to sign up with for work, or to receive Homecare services at home.",
      caseType: "NHTD",
      rating: 5,
    },
    { src: "https://www.youtube.com/embed/_6QntUW0hjg?rel=0" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mb-6 md:my-8">
      {isClient && (
        <Slider {...sliderSettings}>
          {allData.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white dark:bg-[#1C3460] rounded-xl shadow-xl h-[360px] md:h-[465px] 2xl:h-[450px]">
                {item.src ? (
                  <VideoCard src={item.src} />
                ) : (
                  <TestimonialCard {...item} />
                )}
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default memo(NewSlider);
