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
    des: "🔥💰 New Year...$300 on the line, AND there’s a catch! Fail to finish, and you face the penalty! 🌶️",
    duration: "4:51",
    img: "/allVideos/new_year.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/G7F1DKSty18?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "The Spicy Wings Challenge: Who Will Cry First? 🌶️👀 | Sponsored By Cottage Home Care | Friday Fun Day",
    duration: "6:01",
    img: "/allVideos/img16.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/MBCTyo9OmCE?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🔥 TRIPLE S Threat Takes on the Hot Spicy Wings Challenge! 🔥 | Friday Fun Day Food Challenge | Cottage Home Care",
    duration: "4:37",
    img: "/allVideos/triple_wings.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/WWth0ITKe8M?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "She ALMOST had it, OMG | Taco Challenge | Friday Fun Day Food Challenge | Cottage Home Care",
    duration: "3:33",
    img: "/allVideos/img12.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/12vz6yxxGSU?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "ফুচকা চ্যালেঞ্জ! প্রতিযোগিতার উত্তেজনা তুঙ্গে – দুই প্রতিযোগী, একটি বড় পুরস্কার! এখনই দেখুন!",
    duration: "3:47",
    img: "/allVideos/fuska.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/HGRmMKus4rc?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Pizza Pie Challenge l Loser Gets Penalty | Friday Fun Day Food Challenge | Cottage Home Care",
    duration: "4:19",
    img: "/allVideos/img8.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/dV6t9P00voE?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },

  {
    des: "Risk or Reward Challenge! | India vs Guyana | $300 On the Line! Sponsored by Cottage Home Care",
    duration: "9:26",
    img: "/allVideos/img14.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/ZdJE8sCJFbM?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: " 'Gwaan, give up nuh bredda' | Friday Fun Day Food Challenge |  Brooklyn Institute of Vocational Training ",
    duration: "5:17",
    img: "/allVideos/IMG13.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/2q65v3R-YHA?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Guess the Chocolate Blindfolded & Separation Anxiety | Friday Fun Day Food Challenge | Cottage Home Care",
    duration: "6:02",
    img: "/allVideos/img10.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/VCQJliEFxy8?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "OMG - Don't pick THAT cup! | Friday Fun Day Challenge | Cottage Home Care",
    duration: "6:02",
    img: "/allVideos/img11.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/mauJBeWAjvM?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Balloon Challenge, Best Out of 3 Rounds | $300 Prize | Friday Fun Day Food Challenge | Cottage Home Care",
    duration: "2:20",
    img: "/allVideos/img9.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/RWeQ3cz2YW0?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  // {
  //   des: "Friday Funday Food Chllange By Cottage home Care Services Winners get $500",
  //   duration: "4:58",
  //   img: img2,
  //   youtubeUrl:
  //     "https://www.youtube.com/embed/9t48a9Ckc8o?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  // },
  // {
  //   des: "Match The Bottle Challenge, Friday Funday Food Challenge ",
  //   duration: "3:07",
  //   img: img3,
  //   youtubeUrl:
  //     "https://www.youtube.com/embed/5Ta0VDZmbNY?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  // },
  {
    des: "Who can eat the most? Friday Funday Food Challenge ",
    duration: "2:39",
    img: "/allVideos/img6.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/rmL7mpbjDNM?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Behind the scenes - Who can eat the most? Friday Funday Food Challenge",
    duration: "0:35",
    img: "/allVideos/img17.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/qWMiLZpoHK8?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Chow Challenge, Friday Funday Food Challenge ",
    duration: "0:56",
    img: "/allVideos/img5.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/YJ-9CiyKj0I?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "WHAT JUST HAPPENED! No Way! - Taco Challenge | Sponsored by Cottage Home Care Services | Friday Fun!",
    duration: "5:18",
    img: "/allVideos/img15.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/kxZTjxCb5Os?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },

  {
    des: " 'Gwaan, give up nuh bredda' | Friday Fun Day Food Challenge |  Brooklyn Institute of Vocational Training ",
    duration: "5:17",
    img: "/allVideos/IMG13.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/2q65v3R-YHA?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Spicy Wings Challenge | Friday Fun Day Food Challenge | Ft. Singer Vanita aka Poowah | Collaboration",
    duration: "3:51",
    img: "/allVideos/spicy_wings.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/1AlkjRTfHYY?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🌶️🔥 Jamaican Jerk Chicken Challenge | Sponsored By Cottage Home Care | Friday Fun Day 🔥🌶️",
    duration: "4:15",
    img: "/allVideos/img17.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/rrA72WpBAwY?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🎥 Omardath Maraj & Vanita Willie Judge Trinidadian Doubles Challenge Sponsored by Cottage Home Care🍛",
    duration: "6:18",
    img: "/allVideos/img18.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/43qCfiNI5Xs?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "Pani Puri Challenge Alert! | Sponsored by Cottage Home Care Services | Friday Fun! 🔥",
    duration: "4:29",
    img: "/allVideos/img19.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/XzCEv810gI4?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "$300 SPICY DOUBLES CHALLENGE: 3 CONTESTANTS, 5 DOUBLES, ONE WINNER! | Sponsored by Cottage Home Care",
    duration: "4:16",
    img: "/allVideos/spicy_bouble.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/gZXCPT8dIas?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
  },
  {
    des: "🔥 $300 BBQ Chicken Chow Mein Challenge! 🍜💰 | Sponsored by Cottage Home Care",
    duration: "3:31",
    img: "/allVideos/bbq_chiken.webp",
    youtubeUrl:
      "https://www.youtube.com/embed/vFG9kGmzXaE?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1",
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
            <h1 className=" text-start text-2xl lg:text-3xl font-semibold league-spartan text-[#00A6B2] dark:text-gray-100 lg:max-w-[840px] ">
              {" "}
              Our Fun Day Challenges: Where Competition Meets Community!
            </h1>
            <p className="mt-1 md:mt-3 w-[95%] lg:max-w-[865px]  text-sm md:text-base  leading-loose  text-[16px] open-sans font-normal text-[#373642] dark:text-gray-100 text-justify">
              Get ready for nonstop fun, exciting challenges, and belly-aching
              laughter! Our Fun Day Challenges are packed with unique,
              culturally inspired competitions that bring everyone together.
              From aides and staff to students and beyond, we’re all about
              creating unforgettable memories—and giving them all the chance to
              win big with cash prizes.
            </p>
            <p className="mt-2 2xl:mt-5 text-xl  lg:text-xl 2xl:text-2xl font-semibold text-start league-spartan text-[#00A6B2] dark:text-gray-100">
              Watch Now & Stay Tuned for More Excitement!
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
