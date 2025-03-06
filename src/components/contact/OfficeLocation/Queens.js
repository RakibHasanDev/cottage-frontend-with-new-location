import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Queens = ({ officeHandler }) => {
  const now = new Date().toLocaleDateString("en-US", { weekday: "long" });
  //   console.log(now);

  let val;
  let day;
  let text;

  switch (now) {
    case "Sunday":
      //   console.log("sun hello");
      val = "Sun";
      text = "Open today 08:30 am – 05:00 pmy";
      day = "Sun 08:30 am – 05:00 pm";
      break;
    case "Monday":
      //   console.log("mon hello");
      val = "Mon";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Mon 08:30 am – 05:00 pm";
      break;
    case "Tuesday":
      //   console.log("tue hello");
      val = "Tue";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Tue 08:30 am – 05:00 pm";
      break;
    case "Wednesday":
      //   console.log("wed hello");
      val = "Wed";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Wed 08:30 am – 05:00 pm";
      break;
    case "Thursday":
      //   console.log("thu hello");
      val = "Thu";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Thu 08:30 am – 05:00 pm";
      break;
    case "Friday":
      //   console.log("fri hello");
      val = "Fri";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Fri 08:30 am – 05:00 pm";
      break;

    default:
      val = "Sat";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Sat 08:30 am – 05:00 pm";
  }
  const selectedText = { text };
  const selectedDay = { day };
  const selectedVal = { val };
  const all = [{ selectedText, selectedDay, selectedVal }];

  const queens = {
    name: "Queens Office",
    address1: "126-01 Liberty Avenue, South Richmond Hill",
    address2: "Queens, New York 11419",
    direction:
      "https://www.google.com/maps?daddr=126-01+Liberty+Avenue,+South+Richmond+Hill+Queens,+New+York+11419,+United+States",
  };
  return (
    <div>
      <div
        className="md:mt-0 border-2 py-8 md:py-0 border-[#00A6B2] rounded-md md:border-0"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <h5 className="2xl:text-xl  font-semibold text-[#00A6B2] league-spartan text-2xl lg:text-base ">
          {queens?.name}
        </h5>
        <p className="text-white 2xl:text-base lg:text-xs open-sans">
          {queens?.address1}
        </p>
        <p className="text-white 2xl:text-base lg:text-xs open-sans">
          {queens?.address2}
        </p>

        <div className="mt-1 open-sans">
          {/* <p className="text-2xl text-[#1b1b1b] mb-6">Hours</p> */}
          <select className="focus:outline-none text-lg rounded-md py-2 md:px-1 md:text-sm 2xl:text-base 2xl:px-2 my-1 bg-[#322E51] text-[#00A6B2] border-[1px]">
            {all.map((al, index) => (
              <option value={al.selectedVal.val} key={index}>
                {al.selectedText.text}
              </option>
            ))}
            <option value="Mon">Mon 08:30 am – 05:00 pm</option>
            <option value="Tue">Tue 08:30 am – 05:00 pm</option>
            <option value="Wed">Wed 08:30 am – 05:00 pm</option>
            <option value="Thu">Thu 08:30 am – 05:00 pm</option>
            <option value="Fri">Fri 08:30 am – 05:00 pm</option>
            <option value="Sat">Sat 08:30 am – 05:00 pm</option>
            <option value="Sunday">Sun 08:30 am – 05:00 pm</option>
          </select>
        </div>

        <a
          href={queens?.direction}
          target="_blank"
          className="uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-[#00A6B2] open-sans"
          rel="noreferrer"
        >
          {" "}
          <AiOutlineArrowRight /> Get Direction
        </a>
        <div className="mt-5 bg-hov2">
          <label
            onClick={() => officeHandler(queens)}
            htmlFor="booking-modal"
            className="bg-[#00A6B2] px-4 py-3 rounded-md shadow-md text-white text-sm  cursor-pointer open-sans"
          >
            Contact the {queens.name}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Queens;
