import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Bronx = ({ officeHandler }) => {
  //   console.log(now);
  const [now, setCurrentDate] = useState("");

  useEffect(() => {
    // Ensure the date is set only on client-side
    setCurrentDate(
      new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date())
    );
  }, []);

  let val;
  let day;
  let text;

  switch (now) {
    case "Sunday":
      //   console.log("sun hello");
      val = "Sun";
      text = "Closed today";
      day = "Sun Closed";
      break;
    case "Monday":
      //   console.log("mon hello");
      val = "Mon";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Mon 09:00 am – 05:00 pm";
      break;
    case "Tuesday":
      //   console.log("tue hello");
      val = "Tue";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Tue 09:00 am – 05:00 pm";
      break;
    case "Wednesday":
      //   console.log("wed hello");
      val = "Wed";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Wed 09:00 am – 05:00 pm";
      break;
    case "Thursday":
      //   console.log("thu hello");
      val = "Thu";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Thu 09:00 am – 05:00 pm";
      break;
    case "Friday":
      //   console.log("fri hello");
      val = "Fri";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Fri 09:00 am – 05:00 pm";
      break;

    default:
      val = "Sat";
      text = "Closed today";
      day = "Sat Closed";
  }
  const selectedText = { text };
  const selectedDay = { day };
  const selectedVal = { val };
  const all = [{ selectedText, selectedDay, selectedVal }];

  const bronx = {
    recName: "Bronx Office (Recruitment Center) ",
    name: "Bronx Office",
    address1: "391 East 149th Street, Bronx,",
    address2: "New York 10455",
    direction:
      "https://www.google.com/maps?daddr=391+East+149th+Street,+Bronx,+New+York+10455,+United+States",
  };
  return (
    <div>
      <div
        className="md:mt-0 border-2 py-8 md:py-0 border-[#00A6B2] rounded-md md:border-0"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <h5 className="2xl:text-xl  font-semibold text-[#00A6B2] league-spartan text-2xl lg:text-base ">
          {bronx?.recName}
        </h5>
        <p className="text-white 2xl:text-base lg:text-xs open-sans">
          {bronx?.address1}
        </p>
        <p className="text-white 2xl:text-base lg:text-xs open-sans">
          {bronx?.address2}
        </p>

        <div className="mt-1 open-sans ">
          {/* <p className="text-2xl text-[#1b1b1b] mb-6">Hours</p> */}
          <select className="focus:outline-none text-lg rounded-md py-2 md:px-1 md:text-sm 2xl:text-base 2xl:px-2 my-1 bg-[#322E51] text-[#00A6B2] border-[1px]">
            {all.map((al, index) => (
              <option value={al.selectedVal.val} key={index}>
                {al.selectedText.text}
              </option>
            ))}
            <option value="Mon">Mon 09:00 am – 05:00 pm</option>
            <option value="Tue">Tue 09:00 am – 05:00 pm</option>
            <option value="Wed">Wed 09:00 am – 05:00 pm</option>
            <option value="Thu">Thu 09:00 am – 05:00 pm</option>
            <option value="Fri">Fri 09:00 am – 05:00 pm</option>
            <option value="Sat">Sat Closed</option>
            <option value="Sunday">Sun Closed</option>
          </select>
        </div>

        <div className="flex items-center gap-5  justify-center lg:justify-start">
          <a
            href={bronx?.direction}
            target="_blank"
            className="uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-[#00A6B2] open-sans"
            rel="noreferrer"
          >
            {" "}
            <AiOutlineArrowRight /> Get Direction
          </a>

          <a
            href="https://www.facebook.com/share/p/XRpX58eeHyCdPqqq/?mibextid=qi2Omg"
            target="_blank"
            className="uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-[#00A6B2] open-sans"
            rel="noreferrer"
          >
            {" "}
            <AiOutlineArrowRight /> Apply Job
          </a>
        </div>

        <div className="mt-5 bg-hov2">
          <label
            onClick={() => officeHandler(bronx)}
            htmlFor="booking-modal"
            className="bg-[#00A6B2] px-4 py-3 rounded-md shadow-md text-white text-sm  cursor-pointer open-sans"
          >
            Contact the {bronx.name}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Bronx;
