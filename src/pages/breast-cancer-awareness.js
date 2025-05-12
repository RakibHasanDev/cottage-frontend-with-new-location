import GalleryImage from "@/components/GalleryImage/GalleryImage";
import Head from "next/head";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const breastCancerAwareness = () => {
  return (
    <>
      <Head>
        <title>Breast Cancer Awareness Month 2024 | Cottage Home Care</title>
        <meta
          name="description"
          content="Join Cottage Home Care for Breast Cancer Awareness Month 2024. Explore event highlights and touching moments in our community photo gallery."
        />
        <meta
          name="keywords"
          content="Breast Cancer Awareness 2024, Breast Cancer Event NYC, Cottage Home Care, health awareness campaign, pink October, community health event, breast cancer photos, healthcare support"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content="Breast Cancer Awareness Month 2024 | Cottage Home Care Services"
        />
        <meta
          property="og:description"
          content="Take a glimpse into our Breast Cancer Awareness Month celebration — a powerful event filled with support, love, and awareness."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cottagehomecare.com/assets/Breast_Cancer_Awarencess/cover.webp"
        />
        <meta
          property="og:image"
          content="https://www.cottagehomecare.com/assets/Breast_Cancer_Awarencess/cover.webp"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Breast Cancer Awareness Month 2024 | Cottage Home Care Services"
        />
        <meta
          name="twitter:description"
          content="See how Cottage Home Care Services honored Breast Cancer Awareness Month with events, photos, and community support."
        />
        <meta
          name="twitter:image"
          content="https://www.cottagehomecare.com/assets/Breast_Cancer_Awarencess/cover.webp"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/breast-cancer-awareness/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/breast-cancer-awareness/"
          hreflang="x-default"
        />

        <link
          rel="canonical"
          href="https://cottagehomecare.com/breast-cancer-awareness/"
        />
      </Head>

      <div className="min-h-screen dark:bg-slate-600">
        <div>
          <div className="breast-cancer-awarencess min-h-[80vh] hidden md:block">
            <h1 className="lg:pt-[65vh] pt-[50vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
              <span className="px-4 py-2 text-shadow">
                Breast Cancer Awareness Month - 2024
              </span>
            </h1>
          </div>
          <div className="breast-cancer-awarencess md:hidden block">
            <p className=" pt-[30vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
              <span className=" px-4 py-2">
                Breast Cancer Awareness Month - 2024
              </span>
            </p>
          </div>
        </div>

        <div className="w-[95%] my-5 mx-auto seo-text-hidden">
          <p>
            At Cottage Home Care Services, we are deeply committed to supporting
            our community during{" "}
            <strong>Breast Cancer Awareness Month 2024</strong>. This important
            annual observance held every October is a time to raise awareness
            about the impact of breast cancer, emphasize the importance of early
            detection, and honor the strength of survivors, fighters, and those
            we&apos;ve lost.
          </p>

          <p>
            As a trusted home care provider serving New York City, Nassau,
            Suffolk, Westchester, and Albany, we believe that compassionate care
            extends beyond the home. Our commitment to public health includes
            active participation in awareness campaigns and educational efforts
            that empower individuals to take charge of their breast health.
            Breast Cancer Awareness Month allows us to come together as a team,
            as caregivers, and as community members to make a meaningful impact.
          </p>

          <p>
            Throughout the month of October, we organize and participate in
            several outreach and education initiatives. Our goal is to help
            reduce the number of breast cancer cases through awareness,
            education, and community action.
          </p>

          <p>Our 2024 Breast Cancer Awareness Month activities include:</p>

          <ul>
            <li>
              <strong>Educational Sessions:</strong> Hosting informative
              workshops about the importance of routine breast exams, early
              detection, and access to screening resources.
            </li>
            <li>
              <strong>Community Events:</strong> Honoring breast cancer
              survivors and remembering loved ones through community walks,
              virtual meetups, and memorial events.
            </li>
            <li>
              <strong>Resource Distribution:</strong> Collaborating with
              healthcare professionals and local partners to distribute flyers,
              brochures, and support group information to families in need.
            </li>
            <li>
              <strong>Pink Day Participation:</strong> Encouraging our staff and
              the broader community to wear pink throughout the month to promote
              solidarity and raise awareness.
            </li>
          </ul>

          <p>
            We believe that through education and local engagement, we can
            encourage more individuals to prioritize their health and seek
            screenings early. As a home care agency, we also assist families
            affected by breast cancer with compassionate support, personal care,
            and assistance that helps ease daily burdens during treatment and
            recovery.
          </p>

          <p>
            For more information about our{" "}
            <strong>Breast Cancer Awareness Month 2024</strong> initiatives or
            to find out how you can participate, please contact Cottage Home
            Care Services at{" "}
            <a href="mailto:info@cottagehomecare.com">
              info@cottagehomecare.com
            </a>{" "}
            or call <a href="tel:516-367-2266">516-367-2266</a>. We are proud to
            stand beside the fighters, celebrate the survivors, and honor the
            taken.
          </p>
        </div>

        <div className="md:py-5 lg:w-[80%] w-[95%] mx-auto ">
          <div className="lg:mb-8  py-5">
            <p className=" text-center  text-xl  md:text-xl lg:text-2xl xl:text-4xl font-bold text-[#00A6B2] dark:text-gray-100 text-shadow league-spartan">
              {" "}
              Breast Cancer Awareness Month - 2024
            </p>
            <h2 className="seo-text-hidden ">
              Breast Cancer Awareness with Cottage Home Care
            </h2>

            <div className="flex justify-center ">
              <hr className="bg-[#00A6B2] px-5 md:mt-2 mt-2 py-[1px] w-[100px]" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer hidden md:block"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <GalleryImage
                  src={"/assets/Breast_Cancer_Awarencess/img1.webp"}
                  alt="img-1"
                  className="w-full h-[100%]  center shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom "
                />
              </div>
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer block md:hidden"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <GalleryImage
                  src={"/assets/Breast_Cancer_Awarencess/mobile.webp"}
                  alt="img-1"
                  className="w-full h-[100%]  center shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom "
                />
              </div>
              <div
                className=" row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <GalleryImage
                  src={"/assets/Breast_Cancer_Awarencess/img3.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img4.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img15.webp"}
                  alt="breast cancer event 2025"
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
                  src={"/assets/Breast_Cancer_Awarencess/img9.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img2.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img5.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img8.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img13.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/cover.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img14.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img11.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img17.webp"}
                  alt="cottage breast cancer event"
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
                  src={"/assets/Breast_Cancer_Awarencess/img10.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img8.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img6.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img12.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img18.webp"}
                  alt="img-18"
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
                  src={"/assets/Breast_Cancer_Awarencess/img27.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img24.webp"}
                  alt="img2"
                  className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                />
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <GalleryImage
                  src={"/assets/Breast_Cancer_Awarencess/img21.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img19.webp"}
                  alt="breast cancer awareness month 2025"
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
                  src={"/assets/Breast_Cancer_Awarencess/img25.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img28.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img26.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img20.webp"}
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
                  src={"/assets/Breast_Cancer_Awarencess/img29.webp"}
                  alt="img-18"
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

export default breastCancerAwareness;
