"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Devika Dwarka",
      date: "2 weeks ago",
      rating: 5,
      text: "Lovely people to work with. It was amazing! I also love those lovely ladies and gents I spoke to and handled the classes. It’s great to be here with Cottage, they are the best.",
    },
    {
      name: "Rajestha Chathura",
      date: "3 weeks ago",
      rating: 5,
      text: "I would like to congratulate miss nadia on a wonderful job she’s done on teaching other students the process of care.",
    },
    {
      name: "Brenda 'sunny'",
      date: "2 weeks ago",
      rating: 5,
      text: "Excellent experience with this agency. The staff is very helpful and friendly. I highly recommend anyone.",
    },
    {
      name: "Judith Allen",
      date: "2 weeks ago",
      rating: 5,
      text: "An excellent experience with front desk clerk. I will give recommended any one to cottage home care.",
    },
    {
      name: "Nadia Allen",
      date: "3 weeks ago",
      rating: 5,
      text: "Absolutely love working with this agency and my awesome coordinator Ayala. Very compassionate young lady, very understanding and hardworking coordinator. I highly recommend working here.",
    },
    {
      name: "Sabrina Brewlam",
      date: "2 months ago",
      rating: 5,
      text: "All the team members of Cottage Homecare are friendly, caring, helpful all the time. Orientation was great, very quick and smooth.",
    },
    {
      name: "Kiran Champasriya",
      date: "3 weeks ago",
      rating: 5,
      text: "I am happy for sure, always it is with this company for the second time. I love it here.",
    },
    {
      name: "Nadia Oriental",
      date: "3 weeks ago",
      rating: 5,
      text: "The service is excellent and they are very helpful at all times.",
    },
    {
      name: "Roshni Ockurum",
      date: "2 months ago",
      rating: 5,
      text: "I recently completed my HHA orientation, and I found it to be a highly informative and valuable experience.",
    },
    {
      name: "Fanny Perez",
      date: "3 weeks ago",
      rating: 5,
      text: "Great company to work with. The staff and coordinator are great.",
    },
  ];

  const totalReviews = 147;
  const avgRating = 5;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-orange-500" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-orange-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section className="mt-8">
      <div className="relative mt-16 min-h-[800px]">
        {/* Background Section */}
        <div
          className="bg-cover bg-center h-[400px] lg:h-[550px] flex flex-col items-center justify-center text-center text-white px-4"
          style={{
            backgroundImage: `
    linear-gradient(rgba(0, 166, 178, 0.85), rgba(0, 166, 178, 0.85)),
    url('https://res.cloudinary.com/di3wwp9s0/image/upload/v1755288282/Services/abstract-bg_1_i1sehs.webp')
  `,
          }}
        >
          <div className=" lg:-mt-10 ">
            <img
              className="lg:w-20 lg:h-20 h-12 w-12 animate-float -mt-40 lg:mt-0 "
              src="/assets/client-review-white.webp"
              alt="review_image"
            />
          </div>
          <h2 className="text-xl md:text-4xl font-bold max-w-3xl leading-snug  -mt-24 lg:-mt-0">
            See Why So Many Families Needing Home Care In NY, NJ, CT & MA Look
            To Us For <span className="underline">World-Class Care</span>
          </h2>
        </div>

        {/* Card Section */}
        <div className="absolute top-[250px] lg:top-[400px] left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="lg:flex justify-between items-center mb-4">
              <h3 className="lg:text-xl font-semibold">
                Cottage Home Care Services Reviews
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex">{renderStars(avgRating)}</div>
                <span className="font-bold text-lg">{avgRating}</span>
                <span className="text-gray-500">
                  {totalReviews} Total Reviews
                </span>
              </div>
            </div>
            <hr className="my-3" />

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop
            >
              {reviews.map((rev, idx) => (
                <SwiperSlide key={idx} style={{ height: "230px" }}>
                  <p className="text-gray-700 text-center max-w-2xl mx-auto mb-4">
                    {rev.text}{" "}
                  </p>
                  <div className="flex justify-center">
                    {renderStars(rev.rating)}
                  </div>
                  <p className="font-semibold text-center mt-2">{rev.name}</p>
                  <p className="text-sm text-gray-500 text-center">
                    {rev.date}
                  </p>
                  <div className="text-center text-2xl mt-2 flex justify-center">
                    <img
                      src="/assets/google.png"
                      alt="google_icon"
                      height={32}
                      width={32}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
