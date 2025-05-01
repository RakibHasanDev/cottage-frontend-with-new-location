import Image from "next/image";
import React from "react";

const CovidSymption = () => {
  const symptoms = [
    {
      name: "High Fever",
      img: "/assets/Covid-19/symptom-a.png",
      description:
        " this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.",
    },
    {
      name: "Continuous cough",
      img: "/assets/Covid-19/symptom-b.png",
      description:
        "this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).",
    },
    {
      name: "Difficulty breathing",
      img: "/assets/Covid-19/symptom-c.png",
      description:
        " Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.",
    },
  ];
  return (
    <div className="my-20 lg:w-[80%] mx-auto font-[Roboto] " id="symtom-covid">
      <div className="lg:grid md:grid-cols-2 gap-7 items-center flex flex-col-reverse">
        <div data-aos-duration="2000" data-aos="fade-right">
          <p className="text-[#F65858] text-lg font-semibold league-spartan">
            What are the symptoms of COVID-19?
          </p>

          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold  mt-4  dark:text-gray-100 league-spartan text-[#00A6B2]">
            Symptoms of Coronavirus
          </h1>

          <p className="text-justify mt-5 dark:text-gray-100 text-[16px] leading-relaxed open-sans font-normal">
            The most common symptoms of COVID-19 are fever, tiredness, and dry
            cough. Some patients may have aches and pains, nasal congestion,
            runny nose, sore throat or diarrhea. These symptoms are usually mild
            and begin gradually. Also the symptoms may appear 2-14 days after
            exposure.
          </p>

          <div>
            {symptoms?.map((symptom, index) => (
              <div key={index} className=" mt-8">
                <div className="flex  open-sans text-[16px] leading-relaxed font-normal">
                  <div>
                    <img
                      src={symptom?.img}
                      alt="covid-symptoms"
                      className="rounded-full"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className="ml-5 w-[90%]">
                    <p className="text-justify dark:text-gray-100">
                      <span className="text-lg text-[#00A6B2] font-semibold">
                        {symptom.name}
                      </span>{" "}
                      - <span>{symptom?.description} </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos-duration="2000" data-aos="fade-left">
          <img
            src={"/assets/Covid-19/gfx-b.png"}
            alt="COVID-19 Symptoms Graphic"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CovidSymption;
