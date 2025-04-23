import Head from "next/head";
import React from "react";

const MissionVision = () => {
  return (
    <>
      <Head>
        <title>Mission & Vision - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Discover the mission and vision behind Cottage Home Care Services. Learn about our values, goals, and dedication to exceptional home care."
        />

        <meta
          name="keywords"
          content="Cottage Home Care mission, Cottage Home Care vision, home care core values, exceptional home care commitment, long-term goals, quality of life improvement, community impact, home care dedication, client-centered care, Cottage Home Care philosophy"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/mission-vision/"
        />
      </Head>
      <main className="min-h-screen dark:bg-slate-600">
        <div className="md:w-[85%] w-[95%] mx-auto pt-5 pb-20">
          <h1 className="text-center mt-5 playrify font-semibold text-gray-700 md:text-3xl text-2xl dark:text-gray-200">
            {" "}
            Our Mission: Delivering Compassionate Home Care
          </h1>
          <hr className="mt-2 border-t-[1px] border-[#00A6B2] w-16 mx-auto " />
          <div className="grid md:grid-cols-8  gap-8 items-center mt-2">
            <div
              className="md:col-span-4 lg:col-span-2 text-gray-600 mt-5"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="text-justify dark:text-gray-100">
                Our mission is to provide personalized, compassionate, and
                high-quality home care services that enable our patients to
                maintain their independence and improve their overall health and
                well-being.
              </p>

              <p className="text-justify mt-3 dark:text-gray-100">
                We strive to deliver individualized care plans tailored to each
                patient&apos;s unique needs and preferences. We are also
                committed to establishing lasting bonds of respect, confidence,
                and open communication with our patients and their families.
              </p>
            </div>
            <div
              className="lg:col-span-2 md:col-span-4  mt-5 order-first sm:order-none md:h-96 overflow-hidden"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <img
                src={"/assets/mission-vision/sova.webp"}
                alt="pic1"
                className="w-full  rounded-md h-auto"
                width={694}
                height={810}
              />
            </div>
            <div
              className="lg:col-span-4 mt-5 hidden lg:block md:h-96 overflow-hidden"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                src={"/assets/mission-vision/group-photo.webp"}
                alt="pic2"
                className="w-full  rounded-md h-auto"
                width={1080}
                height={686}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-8  gap-8 items-center mt-3">
            <div
              className="lg:col-span-4 mt-5 hidden lg:block md:h-96 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                src={"/assets/mission-vision/group-cover2.webp"}
                alt="pic4"
                className="w-full h-auto rounded-md"
                width={1001}
                height={561}
              />
            </div>
            <div
              className="lg:col-span-2 md:col-span-4  mt-5 md:h-96 overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={"/assets/cottage-home-care-contact-image.webp"}
                alt="pic3"
                className="w-full rounded-md h-auto"
                width={1200}
                height={1569}
              />
            </div>
            <div
              className="md:col-span-4 lg:col-span-2 text-gray-600 mt-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h2 className=" mt-5 mb-2 playrify font-semibold text-gray-700 md:text-xl text-xl dark:text-gray-200">
                {" "}
                Our Vision: Shaping the Future of Community Health
              </h2>
              <p className="text-justify dark:text-gray-100">
                Our team of highly qualified and dedicated caregivers is
                passionate about improving the lives of those we serve. Cottage
                Home Care Services is committed to delivering exceptional care
                with dignity, integrity, and professionalism.
              </p>
            </div>
          </div>
        </div>

        {/* <Chat /> */}
      </main>
    </>
  );
};

export default MissionVision;
