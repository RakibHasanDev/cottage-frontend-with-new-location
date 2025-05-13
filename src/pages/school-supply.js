import GalleryImage from "@/components/GalleryImage/GalleryImage";
import Head from "next/head";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const schoolSupply = () => {
  return (
    <>
      <Head>
        <title>School Supplies Giveaway | Cottage Home Care Services</title>
        <meta
          name="description"
          content="Join Cottage Home Care’s School Supplies Giveaway. Explore event highlights and heartwarming moments in our back-to-school photo gallery."
        />
        <meta
          name="keywords"
          content="school supplies giveaway, Cottage Home Care events, back to school support, community giveaway NYC, free school supplies, family event, education support, care services events"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="School Supplies Giveaway | Cottage Home Care Services"
        />
        <meta property="og:site_name" content="Cottage Home Care Services" />
        <meta
          property="og:description"
          content="Experience the joy and community impact of our School Supplies Giveaway. View the full event gallery and relive the smiles!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cottagehomecare.com/assets/Backpack School GIveway/backPack-cover-1.webp"
        />
        <meta
          property="og:image"
          content="https://www.cottagehomecare.com/assets/new-school-giveaway/img11.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="School Supplies Giveaway | Cottage Home Care Services"
        />
        <meta name="twitter:site" content="@cottagecareny" />
        <meta
          name="twitter:description"
          content="Check out the highlights from our School Supplies Giveaway event — supporting families and education in our community."
        />
        <meta
          name="twitter:image"
          content="https://www.cottagehomecare.com/assets/new-school-giveaway/img11.webp"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/school-supply/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/school-supply/"
          hreflang="x-default"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/school-supply/"
        />
      </Head>
      <div className="min-h-screen dark:bg-slate-600">
        <div>
          <div className="school-supply min-h-[80vh] hidden md:block ">
            <h1 className="lg:pt-[60vh] pt-[60vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
              <span className="graduation-title px-4 py-2  text-shadow">
                School Supplies Giveaway
              </span>
            </h1>
          </div>
          <div className="school-supply block md:hidden  ">
            <p className=" pt-[30vh] text-center text-white  text-2xl md:text-5xl font-semibold">
              <span className="graduation-title px-4 py-2  text-shadow advertise">
                School Supplies Giveaway
              </span>
            </p>
          </div>
        </div>

        <div className="w-[95%] my-5 mx-auto seo-text-hidden">
          <p>
            Cottage Home Care Services is proud to give back to the community
            through our annual <strong>School Supplies Giveaway</strong>. This
            meaningful initiative is designed to support students and families
            across New York by providing essential back-to-school materials. By
            reducing the financial burden on families, we help students start
            the academic year feeling confident, prepared, and motivated for
            success.
          </p>

          <p>
            As a trusted home care agency serving New York City, Nassau,
            Suffolk, Westchester, and Albany, our mission extends beyond health
            care. We understand that education plays a vital role in long-term
            community success. That’s why we are committed to empowering youth
            and building strong relationships with local families through
            outreach events like our back-to-school program.
          </p>

          <p>
            Our <strong>School Supplies Giveaway</strong> is open to students of
            all ages, grade levels, and cultural backgrounds. It provides a
            safe, inclusive, and supportive space where children can receive the
            resources they need while enjoying a memorable day filled with
            excitement, entertainment, and encouragement.
          </p>

          <p>Highlights of the event include:</p>

          <ul>
            <li>
              <strong>Free Backpack Distribution:</strong> Hundreds of students
              receive backpacks filled with essential school supplies including
              notebooks, pencils, pens, folders, rulers, crayons, glue sticks,
              and more.
            </li>
            <li>
              <strong>Fun & Educational Activities:</strong> Kids participate in
              games, creative learning stations, and school-readiness challenges
              that make preparing for the new year both joyful and meaningful.
            </li>
            <li>
              <strong>Community Engagement:</strong> Parents and caregivers
              learn more about our home care services, CDPAP programs, and
              family-centered resources offered throughout New York.
            </li>
          </ul>

          <p>
            This event is more than a giveaway—it’s a celebration of learning
            and an opportunity for Cottage Home Care Services to connect
            directly with the people we proudly serve. We believe in the power
            of education and are committed to creating a nurturing environment
            where all children have the tools they need to thrive and succeed.
          </p>

          <p>
            Our team is deeply grateful to the volunteers, partners, sponsors,
            and staff members who help make this annual event possible. Their
            commitment makes a lasting difference in the lives of students and
            families across New York.
          </p>

          <p>
            For more information about our{" "}
            <strong>School Supplies Giveaway in New York</strong>, or to find
            out how you can contribute, volunteer, or sponsor the event, please
            contact us at{" "}
            <a href="mailto:info@cottagehomecare.com">
              info@cottagehomecare.com
            </a>{" "}
            or call <a href="tel:516-367-2266">516-367-2266</a>. Let’s build
            brighter futures—one backpack at a time.
          </p>
        </div>

        <div className="md:py-10 lg:w-[80%] w-[95%] mx-auto ">
          <div className="lg:mb-8 lg:pt-12 py-5">
            <h2 className=" text-center  text-xl  league-spartan font-bold md:text-xl lg:text-2xl xl:text-4xl  dark:text-gray-100 text-[#00A6B2]">
              {" "}
              School Supplies Giveaway{" "}
            </h2>

            <div className="flex justify-center ">
              <hr className="bg-[#00A6B2] px-5 md:mt-5 mt-2 py-[1px] w-[100px]" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img11.webp"}
                  alt="img-1"
                  className="w-full h-[100%]  center shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                />
              </div>
              <div
                className=" row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-2.webp"}
                  alt="img2"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                ></GalleryImage>
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-3.webp"}
                  alt="img3"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                />
              </div>
              <div
                className="row-span-2 col-span-2 lg:h-[628px] h-[428px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-4.webp"}
                  alt="school supply"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                />
              </div>
            </div>

            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointe"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-5.webp"}
                  alt="img-1"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom "
                />
              </div>
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointe"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-8.webp"}
                  alt="img-1"
                  className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-[#00A6B2] cursor-pointer "
                />
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-7.webp"}
                  alt="img-1"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom "
                />
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointe "
                data-aos="fade-down"
                data-aos-duration="1400"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-6.webp"}
                  alt="img-1"
                  className="w-full  h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                />
              </div>
              <div
                className="row-span-1 col-span-2  lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer  "
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-10.webp"}
                  alt="img-1"
                  className=" h-[100%] w-full shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-7 mt-[28px]">
            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img11.webp"}
                  alt="img-1"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                />
              </div>
              <div
                className=" row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-12.webp"}
                  alt="img2"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                ></GalleryImage>
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-13.webp"}
                  alt="img3"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                />
              </div>
              <div
                className="row-span-2 col-span-2 lg:h-[628px] h-[428px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-14.webp"}
                  alt="cottage school supply giveaway"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                />
              </div>
            </div>

            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-16.webp"}
                  alt="img-1"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                />
              </div>
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-17.webp"}
                  alt="img-1"
                  className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-[#00A6B2] cursor-pointer  "
                />
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-15.webp"}
                  alt="img-1"
                  className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-[#00A6B2] cursor-pointer "
                />
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointe "
                data-aos="fade-down"
                data-aos-duration="1400"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-13.webp"}
                  alt="img-1"
                  className="w-full  h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                />
              </div>
              <div
                className="row-span-1 col-span-2  lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer  "
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <GalleryImage
                  src={"/assets/new-school-giveaway/img-19.webp"}
                  alt="img-1"
                  className=" h-[100%] w-full shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default schoolSupply;
