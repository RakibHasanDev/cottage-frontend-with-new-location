import React, { memo } from "react";
import Image from "next/image";
import { LiaUserNurseSolid } from "react-icons/lia";
import { MdOutlineMedicalServices, MdOutlineStar } from "react-icons/md";
import { TiStarHalfOutline } from "react-icons/ti";
import PropTypes from "prop-types";

// ✅ Import assets
import cardCover from "../../../assets/testimonial/testimonial-cover.webp";
import bluetik from "../../../assets/testimonial/download.webp";

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
          src={cardCover}
          alt="cover"
          className="rounded-t-xl"
          width={1053}
          height={264}
          priority
        />
        <Image
          src={image}
          alt={name}
          className="w-14 h-14 md:w-24 md:h-24 object-cover shadow-lg rounded-full bg-[#EBF8F9] absolute left-3 -bottom-6 md:-bottom-10 border-[#e47825] border-[2px]"
          width={96}
          height={96}
          loading="lazy"
        />
      </div>

      {/* Testimonial Details */}
      <div className="mt-7 md:mt-11 px-5">
        <h3 className="text-sm lg:text-lg font-semibold dark:text-gray-100 league-spartan text-[18px]">
          {name}
        </h3>

        <p className="-ml-1 flex items-center md:text-base text-sm md:mt-1 gap-1 font-medium dark:text-gray-100 league-spartan">
          <LiaUserNurseSolid className="md:text-2xl text-sm font-semibold" />
          <span className="font-semibold text-[18px]">Profession</span>{" "}
          <span className="font-bold">:</span>
          <span className="font-semibold text-[18px]">{designation}</span>
        </p>

        <p className="-ml-1 flex md:mt-1.5 items-center font-semibold gap-1 dark:text-gray-100 text-sm md:text-base league-spartan">
          <MdOutlineMedicalServices className="md:text-xl" />
          <span className="text-[18px]"> Service : </span>{" "}
          <span className="text-[18px]">{caseType}</span>
        </p>

        <div className="md:mt-2 mt-2">
          <Image
            src={bluetik}
            alt="verified"
            className="md:w-7 w-5 h-5 md:h-7 dark:bg-white dark:rounded-full"
            width={20}
            height={20}
            loading="lazy"
          />
          <p className="text-justify auto-hyphen tracking-tight md:tracking-normal dark:text-gray-100 dark:mt-1 text-[13px] md:text-[16px] leading-relaxed open-sans font-normal">
            {description}
          </p>
        </div>

        {/* Star Ratings */}
        <p className="flex items-center mt-2 text-yellow-500">
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  caseType: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default memo(TestimonialCard);
