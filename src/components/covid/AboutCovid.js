import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const AboutCovid = () => {
  return (
    <div className="my-16 lg:w-[80%] mx-auto" id="about-covid">
      <div className="grid lg:grid-cols-2 items-center gap-7">
        <div data-aos-duration="2000" data-aos="fade-right">
          <img
            src={"/assets/Covid-19/gfx-a.png"}
            alt={"covid-banner"}
            className="h-96 md:h-[450px] md:ml-auto mr-10 hidden lg:block"
            w="100"
            h="384"
          />
        </div>

        <div
          className="font-[Roboto]"
          data-aos-duration="2000"
          data-aos="fade-left"
        >
          <h5 className="text-[#F65858] text-lg font-semibold league-spartan">
            {" "}
            About the disease
          </h5>

          <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-medium md:font-bold dark:text-gray-100 league-spartan text-[#00A6B2]">
            Coronavirus (COVID-19)
          </h1>

          <p className="text-lg text-justify mt-5 dark:text-gray-100  leading-relaxed open-sans font-normal ">
            <span className="font-semibold ">
              COVID-19 is a new illness that can affect your lungs and airways.
            </span>
            It&#39;s caused by a virus called coronavirus. It was discovered in
            December 2019 in Wuhan, Hubei, China.
          </p>

          <p className="text-justify mt-5 dark:text-gray-100 leading-relaxed open-sans font-normal">
            Common signs of infection include respiratory symptoms, fever,
            cough, shortness of breath and breathing difficulties. In more
            severe cases, infection can cause pneumonia, severe acute
            respiratory syndrome, kidney failure and even death.
          </p>

          <p className="text-justify mt-5 dark:text-gray-100 leading-relaxed open-sans font-normal">
            Standard recommendations to prevent infection spread include regular
            hand washing, covering mouth and nose when coughing and sneezing,
            thoroughly cooking meat and eggs. Avoid close contact with anyone
            showing symptoms of respiratory illness such as coughing and
            sneezing.
          </p>

          <h4 className="text-2xl md:font-bold mt-5  dark:text-gray-100 font-medium league-spartan text-[#00A6B2]">
            What you need to know
          </h4>

          <div className="lg:flex items-center gap-10  ">
            <a
              href="#symtom-covid"
              className="flex gap-3 items-center text-[#00A6B2] mt-3 league-spartan"
            >
              Symptoms of coronavirus <AiOutlineArrowRight />
            </a>
            <a
              href="#actions-section"
              className="flex gap-3 items-center text-[#00A6B2] mt-3 league-spartan"
            >
              How to Prevent & Protect <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCovid;
