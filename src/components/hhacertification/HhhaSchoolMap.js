import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline, IoSchool } from "react-icons/io5";

const HhhaSchoolMap = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto mb-16">
      <div className="grid lg:grid-cols-2 gap-7 items-center">
        <div
          className="  bg-[#f02f39d8] rounded-md shadow-lg  md:h-[420px]"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="py-[10px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.51270996487!2d-73.8339175847323!3d40.6847045472221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26750729d3653%3A0x592e70afeb742348!2s110-05%20Liberty%20Ave%2C%20Queens%2C%20NY%2011419!5e0!3m2!1sen!2sus!4v1678997264123!5m2!1sen!2sus"
              title="Brooklyn Institute Location"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="  w-[95%] mx-auto h-[350px] md:h-[400px] rounded-md border-4 border-[#F1F3F4]"
            ></iframe>
          </div>
        </div>
        <div className="ml-5 ">
          <h3
            className="text-2xl md:font-semibold font-medium text-[#f02f39d8]  league-spartan "
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Better yet, see us in person!
          </h3>
          <div
            className="mt-4 flex items-center gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <IoLocationOutline className="text-[#f02f39d8] text-2xl font-bold" />

            <a
              href="https://www.google.com/maps/dir//110-05+Liberty+Ave+Queens,+NY+11419/@40.6847005,-73.8317289,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c26750729d3653:0x592e70afeb742348!2m2!1d-73.8317289!2d40.6847005"
              target="_blank"
              className="text-lg hover:text-[#f02f39d8] text-gray-600 dark:text-gray-100 open-sans"
              rel="noreferrer"
            >
              We are located at 110-05 Liberty Ave, South Richmond Hill,
              NY-11419.
            </a>
          </div>
          <div
            className="mt-4 flex items-center gap-2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <IoSchool className="text-[#f02f39d8] text-2xl font-bold" />

            <p className="text-2xl  md:font-semibold font-medium text-[#f02f39d8] league-spartan">
              Brooklyn Institute of Vocational Training
            </p>
          </div>

          <div
            className="mt-4 flex items-center gap-2"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <FiPhone className="text-[#f02f39d8] text-2xl font-bold" />

            <a
              href="tel:929-386-0092"
              className="text-lg text-gray-600 hover:text-[#f02f39d8] dark:text-gray-100 open-sans"
            >
              (929) 386-0092
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HhhaSchoolMap;
