import React, { useState } from "react";
import { Virtual, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import images

import { CottageVideoSliderButton } from "@/components/shared/CottageVideoSliderButton";
import CottageVideoModal from "./CottageVideoModal";

const allVideos = [
  {
    des: "💬 Having Trouble with PPL or Payments? | Cottage Home Care Can Help!",
    duration: "0.39",
    img: "https://img.youtube.com/vi/tGyiwV3YYHU/maxresdefault.jpg",
    alt: "💬 Having Trouble with PPL or Payments? | Cottage Home Care Can Help!",
    youtubeUrl:
      "https://www.youtube.com/embed/tGyiwV3YYHU?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🛏️ Reliable & Compassionate Homecare Services (Tamil Version) | Cottage Home Care Services",
    duration: "1:01",
    img: "https://img.youtube.com/vi/mkWcgLyx-I0/maxresdefault.jpg",
    alt: "🛏️ Reliable & Compassionate Homecare Services (Tamil Version) | Cottage Home Care Services",
    youtubeUrl:
      "https://www.youtube.com/embed/mkWcgLyx-I0?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🛏️ Reliable & Compassionate Homecare Services (Hindi Version) | Cottage Home Care Services",
    duration: "1:13",
    img: "https://img.youtube.com/vi/BYuXb_Ni9pI/maxresdefault.jpg",
    alt: "🛏️ Reliable & Compassionate Homecare Services (Hindi Version) | Cottage Home Care Services",
    youtubeUrl:
      "https://www.youtube.com/embed/BYuXb_Ni9pI?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🌟 Why Choose Cottage Home Care Services? 🌟 (Spanish Version) | Cottage Home Care Services",
    duration: "1:17",
    img: "https://img.youtube.com/vi/roHmwfWgm3w/maxresdefault.jpg",

    alt: "🌟 Why Choose Cottage Home Care Services? 🌟 (Spanish Version) | Cottage Home Care Services",
    youtubeUrl:
      "https://www.youtube.com/embed/roHmwfWgm3w?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Compassionate, Professional Homecare Services | Cottage Homecare Services",
    duration: "1:18",
    img: "https://img.youtube.com/vi/yOtPb-LVfuk/maxresdefault.jpg",
    alt: "Compassionate, Professional Homecare Services | Cottage Homecare Services",
    youtubeUrl:
      "https://www.youtube.com/embed/yOtPb-LVfuk?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🛏️ Quality Homecare You Can Trust (Punjabi version)",
    duration: "0:57",
    img: "https://img.youtube.com/vi/V8DI9MCHArs/maxresdefault.jpg",
    alt: "🛏️ Quality Homecare You Can Trust (Punjabi version)",
    youtubeUrl:
      "https://www.youtube.com/embed/V8DI9MCHArs?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Cottage Homecare HHA resistration process .",
    duration: "2:54",
    img: "https://res.cloudinary.com/di3wwp9s0/image/upload/v1749139336/carousel%20Thumnail/hha_registration.webp",
    alt: "Cottage Homecare HHA resistration process .",
    youtubeUrl:
      "https://www.youtube.com/embed/R-naoq-B5HI?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🛏️ Reliable & Compassionate Homecare Services (Tamil Version) | Cottage Home Care Services",
    duration: "1:01",
    img: "https://img.youtube.com/vi/mkWcgLyx-I0/maxresdefault.jpg",
    alt: "🛏️ Reliable & Compassionate Homecare Services (Tamil Version) | Cottage Home Care Services",
    youtubeUrl:
      "https://www.youtube.com/embed/mkWcgLyx-I0?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "OPWDD Navigation & Support Services | Powered by Cottage Home Care",
    duration: "0.57",
    img: "https://img.youtube.com/vi/Lsj_0TL_Fak/maxresdefault.jpg",
    alt: "OPWDD Navigation & Support Services | Powered by Cottage Home Care",
    youtubeUrl:
      "https://www.youtube.com/embed/Lsj_0TL_Fak?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },

  {
    des: "🛏️ Reliable & Compassionate Homecare Services (Hindi Version) | Cottage Home Care Services",
    duration: "1:13",
    img: "https://img.youtube.com/vi/BYuXb_Ni9pI/maxresdefault.jpg",
    alt: "🛏️ Reliable & Compassionate Homecare Services (Hindi Version) | Cottage Home Care Services",
    youtubeUrl:
      "https://www.youtube.com/embed/BYuXb_Ni9pI?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🌟 Why Choose Cottage Home Care Services? 🌟 (Spanish Version) | Cottage Home Care Services",
    duration: "1:17",
    img: "https://img.youtube.com/vi/roHmwfWgm3w/maxresdefault.jpg",

    alt: "🌟 Why Choose Cottage Home Care Services? 🌟 (Spanish Version) | Cottage Home Care Services",
    youtubeUrl:
      "https://www.youtube.com/embed/roHmwfWgm3w?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Compassionate, Professional Homecare Services | Cottage Homecare Services",
    duration: "1:18",
    img: "https://img.youtube.com/vi/yOtPb-LVfuk/maxresdefault.jpg",
    alt: "Compassionate, Professional Homecare Services | Cottage Homecare Services",
    youtubeUrl:
      "https://www.youtube.com/embed/yOtPb-LVfuk?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🛏️ Quality Homecare You Can Trust (Punjabi version)",
    duration: "0:57",
    img: "https://img.youtube.com/vi/V8DI9MCHArs/maxresdefault.jpg",
    alt: "🛏️ Quality Homecare You Can Trust (Punjabi version)",
    youtubeUrl:
      "https://www.youtube.com/embed/V8DI9MCHArs?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
];

export default function App() {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [showModal, setShowModal] = useState(false);

  const openModal = (video) => {
    setShowModal(true);
    setYoutubeUrl(video?.youtubeUrl);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="carousel-bg  py-5">
      <div className="w-[100%]">
        <div data-aos="fade-up" data-aos-duration="1500">
          <div className="w-[95%] lg:w-[80%] 2xl:w-[70%] mx-auto dark:text-white mt-[10px] md:mt-[20px] lg:mt-10 ">
            <p className="text-start text-2xl lg:text-3xl font-semibold league-spartan text-[#00A6B2] dark:text-gray-100 lg:max-w-[840px]">
              Discover Our Exceptional Home Care Services!
            </p>
            <p className="mt-1 md:mt-3 w-[95%] lg:max-w-[865px] text-sm md:text-base leading-loose open-sans font-normal text-[#373642] dark:text-gray-100 text-justify">
              Curious about how Cottage Home Care can help your family? These
              videos show exactly how our friendly and skilled caregivers bring
              comfort and joy into homes every day. Available in Tamil, Hindi,
              Spanish, and Punjabi, these clips offer a real glimpse into the
              genuine care and warmth we provide. Check them out and see why
              families trust Cottage Home Care to support their loved ones.
            </p>
            <p className="mt-2 2xl:mt-5 text-xl lg:text-xl 2xl:text-2xl font-semibold text-start league-spartan text-[#00A6B2] dark:text-gray-100">
              Watch Now & Learn More About Our Services in Your Language!
            </p>
          </div>
          <div
            className="flex cottageAllVideo-swiper-page  relative lg:pb-10 "
            style={{ overflow: "hidden" }}
          >
            <Swiper
              modules={[Virtual, Pagination, Autoplay]}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={40}
              pagination={{
                type: "fraction",
              }}
              virtual
              grabCursor={true}
              autoplay={{
                delay: 3000, // Delay between slides in ms (adjust as needed)
                disableOnInteraction: false, // Continue autoplay even after user interaction
              }}
              loop={true} // Enable looping
              className="w-[90%] md:w-[95%] lg:w-[80%] 2xl:w-[70%]   2xl:h-[350px] h-[285px] lg:h-[270px] cottage-all-videos "
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {allVideos?.map((video, index) => (
                <SwiperSlide
                  onClick={() => openModal(video)}
                  className="  cottage-video-slider  h-[200px]  lg:h-[180px] 2xl:h-[240px]  mt-[35px] md:mt-[30px] 2xl:mt-[35px]  "
                  key={index}
                  virtualIndex={index}
                >
                  <div
                    className="cottage-video-image  h-[200px] lg:h-[180px] 2xl:h-[240px] relative"
                    style={{
                      backgroundImage: `url(${video?.img})`,
                      backgroundColor: "transparent",
                      backgroundSize: "cover",
                      width: "100%",
                    }}
                  >
                    <p className="bg-[#000000d8] px-2 py-0.5 text-sm text-white absolute top-2 left-2">
                      {video?.duration}
                    </p>

                    <p className="cottage-video-description  text-[16px] leading-relaxed open-sans font-normal">
                      {video.des}
                    </p>
                  </div>
                </SwiperSlide>
              ))}

              <div className="top-0 right-0 absolute">
                <CottageVideoSliderButton />
              </div>
            </Swiper>
          </div>
        </div>

        {showModal ? (
          <CottageVideoModal youtubeUrl={youtubeUrl} onClose={closeModal} />
        ) : null}
      </div>
    </div>
  );
}
