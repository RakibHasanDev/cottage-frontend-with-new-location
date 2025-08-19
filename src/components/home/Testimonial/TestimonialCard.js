import React, { memo } from "react";
import Image from "next/image";
import { LiaUserNurseSolid } from "react-icons/lia";
import { MdOutlineMedicalServices, MdOutlineStar } from "react-icons/md";
import { TiStarHalfOutline } from "react-icons/ti";
import PropTypes from "prop-types";

const TestimonialCard = ({
  image,
  name,
  description,
  designation,
  caseType,
  rating,
}) => {
  return (
    <>
      {/* Cover Image & Profile Picture */}
      <div className="relative">
        <Image
          src={"/assets/testimonial/testimonial-cover.webp"}
          alt="testimonial cover background"
          className="rounded-t-xl"
          width={1053}
          height={264}
          priority
          decoding="async"
          fetchPriority="high"
        />
        <Image
          src={image || "/fallback.jpg"}
          alt={`${name}'s profile picture`}
          className="w-14 h-14 md:w-24 md:h-24 object-cover shadow-lg rounded-full bg-[#EBF8F9] absolute left-3 -bottom-6 md:-bottom-10 border-[#e47825] border-[2px]"
          width={96}
          height={96}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Testimonial Details */}
      <div className="mt-7 md:mt-11 px-5">
        <h3 className="text-sm lg:text-lg font-semibold dark:text-gray-100 league-spartan text-base md:text-lg">
          {name}
        </h3>

        <p className="flex items-center md:text-base text-sm md:mt-1 gap-1 font-medium dark:text-gray-100 league-spartan">
          <LiaUserNurseSolid className="md:text-2xl text-base" />
          <span className="font-semibold">Profession</span> <span>:</span>{" "}
          <span className="font-semibold">{designation}</span>
        </p>

        <p className="flex md:mt-1.5 items-center font-semibold gap-1 dark:text-gray-100 text-sm md:text-base league-spartan">
          <MdOutlineMedicalServices className="md:text-xl" />
          <span>Service:</span> <span>{caseType}</span>
        </p>

        <div className="md:mt-2 mt-2">
          <Image
            src={"/assets/testimonial/download.webp"}
            alt="verified"
            className="md:w-7 w-5 h-5 md:h-7 dark:bg-white dark:rounded-full"
            width={20}
            height={20}
            loading="lazy"
            decoding="async"
          />
          <p className="text-justify tracking-tight dark:text-gray-100 dark:mt-1 text-sm md:text-base leading-relaxed open-sans font-normal">
            {description}
          </p>
        </div>

        {/* Star Ratings */}
        <p
          className="flex items-center mt-2 text-yellow-500"
          aria-label={`Rated ${rating} out of 5`}
        >
          {[...Array(Math.floor(rating))].map((_, i) => (
            <MdOutlineStar className="md:text-xl" key={i} />
          ))}
          {rating % 1 !== 0 && <TiStarHalfOutline className="md:text-xl" />}
        </p>

        <p className="w-20 text-center font-bold mt-1 dark:text-gray-100 md:text-xl">
          {rating}
        </p>
      </div>
    </>
  );
};

TestimonialCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  caseType: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default memo(TestimonialCard);
