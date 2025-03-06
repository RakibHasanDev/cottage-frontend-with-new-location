import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Queens from "./OfficeLocation/Queens";
import Bronx from "./OfficeLocation/Bronx";

const OfficeLocation = () => {
  const now = new Date().toLocaleDateString("en-US", { weekday: "long" });
  //   console.log(now);

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
      text = "Closed today";
      day = "Sat Closed";
  }
  const selectedText = { text };
  const selectedDay = { day };
  const selectedVal = { val };
  const all = [{ selectedText, selectedDay, selectedVal }];
  //   console.log(all);

  const [office, setOffice] = useState("");
  const [modalData, setModalData] = useState(false);

  const officeHandler = (office) => {
    setOffice(office);
    setModalData(true);
  };

  const offices = [
    {
      name: "Long Island Office",
      address1: "25 Newbridge Road, Suite 302 Hicksville, New York 11801",
      address2: "",
      direction:
        "https://www.google.com/maps/dir//25+Newbridge+Rd+Unit+302,+Oyster+Bay,+NY+11801/@40.7680687,-73.5969743,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c280e280b85923:0x6d08773ea58e3908!2m2!1d-73.5269344!2d40.7680899",
    },

    // {
    //   recName: "Ozone Park Office",
    //   name: "Ozone Park Office",
    //   address1: "103-21 98th St, Jamaica,",
    //   address2: "New York 11417",
    //   direction:
    //     "https://www.google.com/maps/dir//103-21+98th+St,+Jamaica,+NY+11417,+USA/@40.6823889,-73.8443419,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c267589d232e07:0x58530cff1202b8d6!2m2!1d-73.841767!2d40.6823849?entry=ttu",
    // },
    {
      recName: "Albany Office (CDPAP Services)",
      name: "Albany Office",
      address1: "130 Washington Ave 3rd Floor Unit G, Albany, NY 12210",
      address2: "",
      direction:
        "https://www.google.com/maps/dir//130+Washington+Ave,+Albany,+NY+12210,+USA/@42.6548809,-73.795538,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89de0a3aa4c10641:0xaf8dd4ae670e2237!2m2!1d-73.7605185!2d42.6548231?hl=en",
    },
    // {
    //   recName: "Bronx Office (Recruitment Center) ",
    //   name: "Bronx Office",
    //   address1: "391 East 149th Street, Bronx,",
    //   address2: "New York 10455",
    //   direction:
    //     "https://www.google.com/maps?daddr=391+East+149th+Street,+Bronx,+New+York+10455,+United+States",
    // }
  ];

  return (
    <div className="bg-[#322E51] py-24 ">
      <div className="w-[95%]  mx-auto ">
        <h1 className="text-lg md:text-2xl lg:text-4xl league-spartan text-white  font-semibold">
          Call today or come visit — at a location near you.
        </h1>
        <hr className="border-t-[.5px] border-[#00A6B2] mt-3 w-[80px]" />

        <h5 className=" text-xl md:text-2xl text-[#00A6B2] mt-5 font-semibold league-spartan">
          {" "}
          Cottage Home Care Services of New York Office Locations{" "}
        </h5>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14  text-center md:text-start ">
          <Queens officeHandler={officeHandler}></Queens>

          {offices.map((office, index) => (
            <div
              key={index}
              className="mt-5 md:mt-0 border-2 py-8 md:py-0 border-[#00A6B2] rounded-md md:border-0"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              {office?.recName ? (
                <>
                  <h5 className="  2xl:text-xl  text-2xl lg:text-base  font-semibold text-[#00A6B2] league-spartan">
                    {office?.recName}
                  </h5>
                </>
              ) : (
                <>
                  <h5 className=" 2xl:text-xl text-2xl lg:text-base  font-semibold text-[#00A6B2] league-spartan">
                    {office?.name}
                  </h5>
                </>
              )}
              <p className="text-white 2xl:text-base lg:text-xs  2xl:w-[90%] open-sans">
                {office?.address1}
              </p>
              <p className="text-white 2xl:text-base lg:text-xs  2xl:w-[90%] open-sans">
                {office?.address2}
              </p>

              <div className="mt-1 open-sans">
                {/* <p className="text-2xl text-[#1b1b1b] mb-6">Hours</p> */}
                <select className="focus:outline-none lg:text-xs tracking-tight 2xl:-tracking-normal rounded-md py-2 md:px-1 text-sm 2xl:text-base 2xl:px-2 my-1 bg-[#322E51] text-[#00A6B2] border-[1px] ">
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
                  <option value="Sat">Sat Closed</option>
                  <option value="Sun">Sun Closed</option>
                </select>
              </div>

              <a
                href={office?.direction}
                target="_blank"
                className="uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-[#00A6B2] open-sans"
                rel="noreferrer"
              >
                {" "}
                <AiOutlineArrowRight /> Get Direction
              </a>
              <div className="mt-5 bg-hov2">
                <label
                  onClick={() => officeHandler(office)}
                  htmlFor="booking-modal"
                  className="bg-[#00A6B2] px-4 py-3 rounded-md shadow-md text-white text-sm  lg:text-xs 2xl:text-sm cursor-pointer open-sans"
                >
                  Contact the {office.name}
                </label>
              </div>
            </div>
          ))}

          <Bronx officeHandler={officeHandler}> </Bronx>
        </div>
        {/* {modalData && (
          <Modal office={office} setModalData={setModalData}></Modal>
        )} */}
      </div>
    </div>
  );
};

export default OfficeLocation;
