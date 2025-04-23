import React, { Suspense } from "react";

import { useInView } from "react-intersection-observer";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import reader from "../../assets/button-lottie/call.json";
import emailReader from "../../assets/button-lottie/email.json";
import { IoLocationSharp } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import Loading from "../shared/Loading";
import IconLoading from "../shared/IconLoading";

const Lottie = React.lazy(() => import("lottie-react"));

const ContactInfo = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const Placeholder = () => (
    <div>
      <IconLoading />
    </div>
  );

  return (
    <div className="mt-16 mb-8 md:mb-12" id="contact-info">
      <div>
        <div
          className="w-[95%] lg:w-[50%] mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="league-spartan my-5 text-2xl md:text-xl lg:text-2xl xl:text-4xl font-bold dark:text-gray-100 text-[#00A6B2]">
            Cottage Home Care Services
          </p>
          <h1 className="Poppins dark:text-gray-100 text-[16px] leading-relaxed open-sans font-normal">
            {" "}
            Cottage Home Care Services is open to any feedback. Have questions?
            Unsure whether you can be covered by your insurance for Home Care
            Services? Need assessment? We would love to speak to you. Please
            call or email us! Thank you!{" "}
          </h1>
        </div>
      </div>

      <div className="w-[95%] lg:w-[90%] 2xl:w-[85%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6 lg:gap-5 2xl:gap-8">
        <div
          className="bg-[#E0F4F6] px-4 py-6 rounded-xl border border-gray-300 cart"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="flex flex-col items-center">
            <div className="bg-[#00A6B2] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 logo">
              <IoLocationOutline />
            </div>
            <h5 className="text-gray-800 text-xl font-bold mb-4">Visit Us</h5>

            <div className="space-y-2 text-gray-700">
              <a
                href="https://www.google.com/maps/dir//25+Newbridge+Rd+Unit+302,+Oyster+Bay,+NY+11801/@40.7680687,-73.5969743,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c280e280b85923:0x6d08773ea58e3908!2m2!1d-73.5269344!2d40.7680899"
                target="_blank"
                rel="noreferrer"
                className="flex items-start hover:underline hover:text-[#00A6B2] text-base lg:text-sm 2xl:text-base"
              >
                <IoLocationSharp className="mr-2 text-[#00A6B2] text-lg" />
                <span className="w-[90%]">
                  25 Newbridge Road, Suite 302, Hicksville, NY 11801, USA
                </span>
              </a>

              <a
                href="https://www.google.com/maps?daddr=126-01+Liberty+Avenue,+South+Richmond+Hill+Queens,+New+York+11419,+United+States"
                target="_blank"
                rel="noreferrer"
                className="flex items-start hover:underline hover:text-[#00A6B2] text-base lg:text-sm 2xl:text-base"
              >
                <IoLocationSharp className="mr-2 text-[#00A6B2] text-lg" />
                <span className="w-[90%]">
                  126-01 Liberty Avenue, South Richmond Hill, Queens, NY 11419,
                  USA
                </span>
              </a>

              <a
                href="https://www.google.com/maps/dir//130+Washington+Ave,+Albany,+NY+12210,+USA/@42.6548809,-73.795538,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89de0a3aa4c10641:0xaf8dd4ae670e2237!2m2!1d-73.7605185!2d42.6548231?hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex items-start hover:underline hover:text-[#00A6B2] text-base lg:text-sm 2xl:text-base"
              >
                <IoLocationSharp className="mr-2 text-[#00A6B2] text-lg" />
                <span className="w-[90%]">
                  130 Washington Ave, 3rd Floor Unit G, Albany, NY 12210 (CDPAP
                  Services)
                </span>
              </a>

              <a
                href="https://www.google.com/maps/dir//391+E+149th+St,+Bronx,+NY+10455,+USA/@40.8164095,-73.9232657,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2f5c8cbeb9cad:0x62ee200e1f45a264!2m2!1d-73.9181158!2d40.8164096?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="flex items-start hover:underline hover:text-[#00A6B2] text-base lg:text-sm 2xl:text-base"
              >
                <IoLocationSharp className="mr-2 text-[#00A6B2] text-lg" />
                <span className="w-[90%]">
                  391 East 149th Street, Bronx, NY 10455
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="bg-[#E0F4F6] p-6 rounded-xl border border-gray-300 cart"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div className="flex flex-col items-center">
            <div className="bg-[#00A6B2] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 logo">
              <MdPhoneAndroid />
            </div>
            <h5 className="text-gray-800 text-xl font-bold mb-4">Call Us</h5>
            <a
              href="tel:+1516-367-2266"
              className="text-gray-700 text-base my-0.5 hover:text-[#00A6B2]"
            >
              Phone: 516-367-2266
            </a>
            <p className="text-gray-700 text-base my-0.5">Fax: 516-367-1067</p>
          </div>
          <div className=" bg-hov2  flex justify-center">
            <a href="tel:+1516-367-2266" className=" text-white  ">
              {" "}
              {/* <Lottie
                animationData={reader}
                loop={true}
                className="w-32 h-32"
              /> */}
              <div ref={ref}>
                {useInView && (
                  <Suspense fallback={<Placeholder />}>
                    <Lottie
                      animationData={reader}
                      loop={true}
                      className="w-32 h-32"
                    />
                  </Suspense>
                )}
              </div>
            </a>
          </div>
        </div>

        <div
          className="bg-[#E0F4F6] p-6 rounded-xl border border-gray-300 cart"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div className="flex flex-col items-center">
            <div className="bg-[#00A6B2] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 logo">
              <AiOutlineMail />
            </div>
            <h5 className="text-gray-800 text-xl font-bold mb-4">Email Us</h5>
            <a
              href={`mailto:${"info"}@${"cottagehomecare.com"}`}
              className="text-gray-700 text-base"
            >
              {`${"info"}@${"cottagehomecare.com"}`}
            </a>
          </div>
          <div className="text-center mt-10 bg-hov2 flex justify-center">
            <a href={`mailto:${"info"}@${"cottagehomecare.com"}`}>
              <div ref={ref}>
                {inView && (
                  <Suspense fallback={<IconLoading />}>
                    <Lottie
                      animationData={emailReader}
                      loop={true}
                      className="w-32 h-32"
                    />
                  </Suspense>
                )}
              </div>
            </a>
          </div>
        </div>

        <div
          className="bg-[#E0F4F6] p-6 rounded-lg shadow-lg border border-gray-200 text-center flex flex-col items-center space-y-4 cart"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="bg-[#00A6B2] text-white w-16 h-16 rounded-full flex items-center justify-center mb-2 logo">
            <RiUserFollowLine className="text-3xl" />
          </div>
          <h5 className="text-xl font-semibold text-gray-800">Follow Us</h5>
          <p className="text-gray-600 text-base mb-4">
            Stay connected for updates and support.
          </p>

          {/* <div className="flex justify-evenly w-full  pt-8  space-x-4">
        <a href="https://www.facebook.com/cottageHC" target="_blank" rel="noreferrer" className="bg-hov2">
           
            <Lottie
            animationData={facebookReader}
            loop={true}
           className="w-[48px] h-[48px]"
          />
        </a>
        <a href="https://x.com" target="_blank" rel="noreferrer" className="bg-hov2">
           
            <Lottie
            animationData={twitterReader}
            loop={true}
           className="w-[48px] h-[48px]"
          />
        </a>
        <a href="https://www.instagram.com/cottage.homecare" target="_blank" rel="noreferrer" className="bg-hov2">
            
            <Lottie
            animationData={instaReader}
            loop={true}
           className="w-[48px] h-[48px]"
          />
        </a>
        <div className="w-[50px] h-[50px] ">
        <a href="https://www.tiktok.com/@cottage.homecare" target="_blank" rel="noreferrer" className="bg-hov2" >
            

            <Lottie
            animationData={tiktokReader}
            loop={true}
            
          />
        </a>

        </div>
       
    </div> */}
          <div className="flex space-x-4 justify-evenly pt-9 text-2xl icon-container text-white">
            <a
              href="https://www.facebook.com/cottageHC"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaFacebookF className="w-[40px] h-[40px] p-[6px]" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="icon">
              <AiOutlineTwitter className="w-[40px] h-[40px] p-[6px]" />
            </a>
            <a
              href="https://www.instagram.com/cottage.homecare"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <GrInstagram className="w-[40px] h-[40px] p-[6px]" />
            </a>
            <a
              href="https://www.tiktok.com/@cottage.homecare"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaTiktok className="w-[40px] h-[40px] p-[6px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
