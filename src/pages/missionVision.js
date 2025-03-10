import Head from "next/head";
import React from "react";

const MissionVision = () => {
  return (
    <>
      <Head>
        <title>Mission & Vision - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Discover the mission and vision that drive Cottage Home Care Services. Learn about our commitment to providing exceptional home care, our core values, and our long-term goals. See how we strive to improve the quality of life for our clients and make a positive impact in the community."
        />
        <meta
          name="keywords"
          content="Cottage Home Care mission, Cottage Home Care vision, home care core values, exceptional home care commitment, long-term goals, quality of life improvement, community impact, home care dedication, client-centered care, Cottage Home Care philosophy"
        />
      </Head>
      <main className="min-h-screen dark:bg-slate-600">
        <div className="md:w-[85%] w-[95%] mx-auto pt-5 pb-20">
          <h1 className="text-center mt-5 playrify font-semibold text-gray-700 md:text-3xl text-2xl dark:text-gray-200">
            {" "}
            Mission And Vision Of Cottage Care{" "}
          </h1>
          <hr className="mt-2 border-t-[1px] border-primary w-16 mx-auto " />
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
            <div className="lg:col-span-2 md:col-span-4  mt-5 order-first sm:order-none md:h-96 overflow-hidden">
              <img
                src={"/assets/mission-vision/sova.webp"}
                alt="pic1"
                className="w-full  rounded-md h-fit"
                data-aos="fade-down"
                data-aos-duration="2000"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="lg:col-span-4 mt-5 hidden lg:block md:h-96 overflow-hidden">
              <img
                src={"/assets/mission-vision/group-photo.webp"}
                alt="pic2"
                className="w-full  rounded-md h-fit"
                data-aos="fade-left"
                data-aos-duration="2000"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-8  gap-8 items-center mt-3">
            <div className="lg:col-span-4 mt-5 hidden lg:block md:h-96 overflow-hidden">
              <img
                src={"/assets/mission-vision/group-cover2.webp"}
                alt="pic4"
                className="w-full h-fit rounded-md"
                data-aos="fade-right"
                data-aos-duration="2000"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="lg:col-span-2 md:col-span-4  mt-5 md:h-96 overflow-hidden">
              <img
                src={"/assets/priya.jpg"}
                alt="pic3"
                className="w-full rounded-md h-fit"
                data-aos="fade-up"
                data-aos-duration="2000"
                width={{ with: "100%", height: "auto" }}
              />
            </div>
            <div
              className="md:col-span-4 lg:col-span-2 text-gray-600 mt-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
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
