import BannerWithBreadcrumbs from "@/utils/BannerWithBreadcrumbs";
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
          content="Stay updated on events at Cottage Home Care Services—join us for workshops and activities to learn, connect, and support your community."
        />
        <meta
          name="keywords"
          content="Cottage Home Care upcoming events, health and wellness workshops, community engagement activities, future home care events, scheduled events, community support events, learn and connect, upcoming healthcare events, Cottage Home Care activities"
        />

        {/* Canonical & Alternate URLs */}
        <link
          rel="alternate"
          href="https://cottagehomecare.com/upcoming-event/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/upcoming-event/"
          hreflang="x-default"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/upcoming-event/"
        />

        {/* ✅ Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Upcoming Events - Cottage Home Care Services"
        />
        <meta
          property="og:description"
          content="Join Cottage Home Care at our upcoming events—community programs, wellness workshops, and support activities for families and caregivers."
        />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/upcoming-event/"
        />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/assets/cottage-home-care-logo.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cottage Home Care Services" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cottagecareny" />
        <meta name="twitter:creator" content="@cottagecareny" />
        <meta
          name="twitter:title"
          content="Upcoming Events - Cottage Home Care Services"
        />
        <meta
          name="twitter:description"
          content="Stay informed about future events hosted by Cottage Home Care—connect, learn, and participate in community-focused activities."
        />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/assets/cottage-home-care-logo.webp"
        />
      </Head>

      <main className="min-h-screen dark:bg-slate-600 bg-[#F5F5F7]">
        <div className="relative  bg-cover bg-center text-center h-[40vh] md:min-h-[80vh] upcoming-cover ">
          <div className="absolute bottom-0 lg:bottom-10 left-0">
            <BannerWithBreadcrumbs title="Upcoming Event" />
          </div>
        </div>

        <h1 className="md:text-3xl text-lg text-[#00A6B2] font-bold text-center my-5">
          Grand Opening of Cottage Social Adult Day Care – Coming Soon!
        </h1>

        <div className="w-[95%] lg:w-[90%] mx-auto py-8 text-gray-800 dark:text-gray-100 open-sans">
          <h2>
            <strong>
              Upcoming Events at Cottage Home Care – Social Adult Day Care
              Opening
            </strong>
          </h2>

          <p>
            We are thrilled to announce the{" "}
            <strong>Grand Opening of Cottage Social Adult Day Care</strong>—a
            new, innovative care service designed to provide a safe, engaging,
            and supportive environment for adults in need of daily care and
            socialization. At <strong>Cottage Home Care</strong>, we understand
            the importance of providing our clients with both physical care and
            emotional well-being, and our Adult Day Care service is created to
            support individuals who require assistance while also offering them
            opportunities for meaningful interactions and activities.
          </p>

          <h3 className="mt-3">
            <strong>What Is Cottage Social Adult Day Care?</strong>
          </h3>

          <p>
            Cottage Social Adult Day Care is a specialized program that provides
            a caring and structured environment for adults, particularly those
            who are aging or living with chronic conditions. This service is
            designed to allow clients to remain active, socially engaged, and
            well-cared for, all while giving family caregivers the peace of mind
            they need during the day. Whether it’s for those with Alzheimer’s,
            dementia, or physical disabilities, our program is tailored to meet
            the specific needs of every participant.
          </p>

          <h3 className="my-3">
            <strong>Key Features of Cottage Social Adult Day Care:</strong>
          </h3>
          <ul className="list-disc ml-5">
            <li>
              <strong>Personalized Care Plans:</strong> Each client’s health and
              care needs are evaluated, and a customized care plan is created to
              ensure the best care experience.
            </li>
            <li>
              <strong>Social and Recreational Activities:</strong> We offer a
              wide range of activities including games, arts and crafts,
              exercise programs, and music therapy to keep clients engaged and
              mentally stimulated.
            </li>
            <li>
              <strong>Health Monitoring and Assistance:</strong> On-site
              caregivers and medical professionals will provide assistance with
              medication, monitoring health conditions, and ensuring overall
              well-being.
            </li>
            <li>
              <strong>Nutritional Meals:</strong> Nutritious meals are provided
              to our clients, with dietary restrictions and preferences
              carefully considered to support health and wellness.
            </li>
            <li>
              <strong>Safe and Secure Environment:</strong> Our state-of-the-art
              facility is designed to create a comfortable and safe space for
              clients, including secure entry points and regular supervision by
              our trained staff.
            </li>
          </ul>

          <h3 className="mt-3">
            <strong>Why Choose Cottage Social Adult Day Care?</strong>
          </h3>
          <ul className="list-disc ml-5">
            <li>
              <strong>Compassionate and Experienced Staff:</strong> Our trained
              caregivers and health professionals bring experience, compassion,
              and dedication to every client.
            </li>
            <li>
              <strong>A Positive Social Environment:</strong> We believe in the
              importance of socializing, and our facility is designed to foster
              positive interactions among clients to combat loneliness and
              isolation.
            </li>
            <li>
              <strong>Relief for Caregivers:</strong> Family members and
              caregivers can take time for themselves, knowing their loved ones
              are in a safe, caring environment with the attention they deserve.
            </li>
            <li>
              <strong>Holistic Approach to Care:</strong> Our program doesn’t
              just focus on physical health—it promotes emotional, social, and
              mental well-being as well.
            </li>
          </ul>

          <h3 className="mt-3">
            <strong>Join Us for the Grand Opening!</strong>
          </h3>

          <p>
            We invite you to celebrate the opening of{" "}
            <strong>Cottage Social Adult Day Care</strong> with us! Stay tuned
            for details on our grand opening event, where we will offer tours of
            our facility, meet-and-greets with our staff, and light
            refreshments. It&apos;s a great opportunity to learn more about the
            services we provide and how we can help improve the lives of your
            loved ones.
          </p>

          <p className="mt-3">
            <strong>Grand Opening Date: Coming soon!</strong>
          </p>
          <p>
            <strong>Location:</strong> Coming soon!
          </p>

          <p>
            To learn more about our Adult Day Care services or to RSVP for the
            grand opening event, please contact us.
          </p>

          <h3 className="mt-3">
            <strong>How to Get Involved:</strong>
          </h3>
          <ul>
            <li>
              <strong>Schedule a Tour:</strong> Interested in seeing our
              facility? Schedule a tour before the grand opening.
            </li>
            <li>
              <strong>RSVP for the Event:</strong> Join us for our grand opening
              to learn about our services we offer.
            </li>
            <li>
              <strong>Refer a Friend:</strong> Know someone who could benefit
              from our Adult Day Care services? Refer them to us and help
              improve their daily life.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default UpcomingEvent;
