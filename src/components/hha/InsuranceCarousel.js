import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InsuranceCarousel = () => {
  const images = [
    "/assets/insurance/40507361449.webp",
    "/assets/insurance/riverspring.jpg",
    "/assets/insurance/blue-cross-shield.jpg",
    "/assets/insurance/eldersplan.jpg",
    "/assets/insurance/fedelis.jpg",
    "/assets/insurance/hemaspic.jpg",
    "/assets/insurance/centerlight.jpg",
    "/assets/insurance/seniorHolwHealth.jpg",
    "/assets/insurance/vns.jpg",
    "/assets/insurance/40507361449.webp",
    "/assets/insurance/riverspring.jpg",
    "/assets/insurance/blue-cross-shield.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust slidesToShow as needed for mobile devices
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto my-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none focus:outline-none ">
            <img
              src={image}
              alt={`carousel-item-${index}`}
              width={1080}
              height={530}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InsuranceCarousel;
