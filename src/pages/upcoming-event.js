import Head from "next/head";
import React from "react";

// import img2 from "../../../src/assets/toy-giveaway/IMG-5.jpg";
// import img3 from "../../../src/assets/toy-giveaway/img-3.jpg";
// import img4 from "../../../src/assets/toy-giveaway/img-4.jpg";
// import img5 from "../../../src/assets/toy-giveaway/img-6.jpg";

const UpcomingEvent = () => {
  // const events = [

  //   {
  //     picture: img2,
  //     step1: "Save the Date!",
  //     step2: "Date: December 23rd, 2023",
  //     step3: "Time: 10:00 AM - Until Supplies last",
  //     step4: "Location: Jamaica Queens, NY",

  //   },
  //   {
  //     picture: img3,
  //     step1: "Register for Cheer!",
  //     step2: "Registration: Secure your spot and ensure a special toy for your child.",
  //     step3: " How: Visit our website or call [contact number] to register.",
  //     step4: "Toy Variety: Toys for all ages, generously donated by our community partners.",

  //   },
  //   {
  //     picture: img4,
  //     step1: "Elf Team Acknowledgment!",
  //     step2:  "Volunteer Appreciation: A heartfelt thank you to our incredible team of volunteers." ,
  //     step3: "Dedication and Spirit: Your dedication and spirit are the driving force behind our event.",
  //     step4: "Magical Contribution: As our Elf team, you play a vital role in making this event truly magical.",

  //   },
  //   {
  //     picture: img5,
  //     step1: "Spread the Word!",
  //     step2: "Community Unity: Share the joy with neighbors and friends.",
  //     step3: "Social Media: Spread the word online - every share counts!",
  //     step4: "Help Us Grow: Together, let's make this event unforgettable for every child in our community!"

  //   },

  // ]

  // const targetDate = '2023-12-23T00:00:00';
  return (
    <>
      <Head>
        <title>Upcoming Events - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Stay informed about our upcoming events at Cottage Home Care Services. From health and wellness workshops to community engagement activities, find out what's happening next. Join us to learn, connect, and support our community through our scheduled events."
        />
        <meta
          name="keywords"
          content="Cottage Home Care upcoming events, health and wellness workshops, community engagement activities, future home care events, scheduled events, community support events, learn and connect, upcoming healthcare events, Cottage Home Care activities"
        />

        <link
          rel="canonical"
          href="https://cottagehomecare.com/upcoming-event/"
        />
      </Head>
      <main className="min-h-screen dark:bg-slate-600 bg-[#F5F5F7]">
        <div className="relative  bg-cover bg-center text-center h-[40vh] md:min-h-[80vh] upcoming-cover "></div>

        {/* start coutdown section  */}

        {/* <div className=" py-10 ">

        
        <div className="text-3xl lg:text-4xl relative font-bold  mb-5 text-center px-5   space-y-3 lobster text-red-600 border-[2px] border-red-600 dark:text-gray-100 dark:border-gray-100 py-5 lg:max-w-6xl mx-auto shadow-md rounded-sm">
      
        <h3 className="text-2xl md:text-2xl  2xl:text-4xl ">
          <MdOutlineDateRange className="inline -mt-1  "/> Date: Saturday December 23rd, 2023 <IoMdTime className="inline -mt-1 ml-2 custom-icon   "/>  Time: 10AM - Until Supplies last 
          </h3>
          <h3 className="text-2xl md:text-2xl  2xl:text-4xl">

            Location: Jamaica Queens, NY
          </h3>
        </div>

        <div className="flex justify-center mt-10">
          <CountDown
            targetDate={targetDate}
          >
          </CountDown>

        </div>

      </div> */}

        {/* end countdown section  */}

        {/* <div className="w-[80%] mx-auto pb-10" id="toy-giveaway">

        <h3 className="text-xl md:text-2xl text-red-600 font-semibold mb-5 uppercase underline ">Upcoming Event</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
          {

            events?.map((event, index) => <div

              key={index}

              className="shadow-md pb-5 rounded-md dark:border-[1px]"

            >
              <img src={event?.picture} alt={event?.picture} className="w-full rounded-md h-[15rem]" />

              <div className="px-4">
                

                <h3 className="text-xl font-semibold text-red-500 mt-3">Step {index + 1} : {event?.step1} </h3>

                <ul className="list-disc ml-4 space-y-1 mt-2 text-justify dark:text-gray-100 " style={{hyphens:"auto"}}>
                  <li>{event?.step2}</li>
                  <li>{event?.step3}</li>
                  <li>{event?.step4}</li>
                  
                </ul>

                
              </div>










            </div>)
          }

        </div>

      </div> */}

        {/* start card section  */}
      </main>
    </>
  );
};

export default UpcomingEvent;
