import Head from "next/head";

const values = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 50 50"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M46.79248,24.23a4.05389,4.05389,0,0,0-5.689-.14l-7.69872,6.84a5.25608,5.25608,0,0,1,.58993,2.43,5.39055,5.39055,0,0,1-3.4794,5.02l-6.46895,2.43a1.00694,1.00694,0,0,1-1.27975-.59.98322.98322,0,0,1,.57986-1.28l6.46895-2.43A3.38021,3.38021,0,0,0,31.995,33.36,3.45753,3.45753,0,0,0,28.63555,30H9.99866A1.99982,1.99982,0,0,0,7.999,28H3.99966A1.99982,1.99982,0,0,0,2,30V46a1.99986,1.99986,0,0,0,1.99966,2H7.999a1.99986,1.99986,0,0,0,1.99967-2H14.048l1.24979.51A19.61328,19.61328,0,0,0,37.924,40.87l9.10846-11.01A4.20182,4.20182,0,0,0,46.79248,24.23ZM12.99816,44H9.99866V32h2.9995ZM30.41809,2a8.59142,8.59142,0,0,0-5.42194,1.9082A8.59147,8.59147,0,0,0,19.5742,2a8.68822,8.68822,0,0,0-8.66651,8.68945c0,9.14258,13.03,16.85059,13.58463,17.17481a1.00289,1.00289,0,0,0,1.00765,0C26.05456,27.54,39.08461,19.832,39.08461,10.68945A8.68822,8.68822,0,0,0,30.41809,2Zm-1.772,18.6571a.98319.98319,0,0,1-.65022.2229.99554.99554,0,0,1-.65047-1.7423c3.70153-3.1709,5.74025-6.17188,5.74025-8.44825A2.68158,2.68158,0,0,0,30.41809,8a1,1,0,0,1,0-2,4.68337,4.68337,0,0,1,4.66719,4.68945C35.08528,14.3681,31.584,18.13953,28.64605,20.6571Z"
        />
      </svg>
    ),
    title: "PCA",
    description:
      "Our Personal Care Assistance (PCA) services help individuals with daily activities, enhancing their independence and quality of life at home. PCA includes personal care tasks like bathing, dressing, and grooming, as well as mobility assistance, medication reminders, meal preparation, and light housekeeping. We ensure clients receive compassionate, customized support to help them live with dignity, while providing a high standard of care in the comfort of their own home.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 50 50"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M46.79248,24.23a4.05389,4.05389,0,0,0-5.689-.14l-7.69872,6.84a5.25608,5.25608,0,0,1,.58993,2.43,5.39055,5.39055,0,0,1-3.4794,5.02l-6.46895,2.43a1.00694,1.00694,0,0,1-1.27975-.59.98322.98322,0,0,1,.57986-1.28l6.46895-2.43A3.38021,3.38021,0,0,0,31.995,33.36,3.45753,3.45753,0,0,0,28.63555,30H9.99866A1.99982,1.99982,0,0,0,7.999,28H3.99966A1.99982,1.99982,0,0,0,2,30V46a1.99986,1.99986,0,0,0,1.99966,2H7.999a1.99986,1.99986,0,0,0,1.99967-2H14.048l1.24979.51A19.61328,19.61328,0,0,0,37.924,40.87l9.10846-11.01A4.20182,4.20182,0,0,0,46.79248,24.23ZM12.99816,44H9.99866V32h2.9995ZM30.41809,2a8.59142,8.59142,0,0,0-5.42194,1.9082A8.59147,8.59147,0,0,0,19.5742,2a8.68822,8.68822,0,0,0-8.66651,8.68945c0,9.14258,13.03,16.85059,13.58463,17.17481a1.00289,1.00289,0,0,0,1.00765,0C26.05456,27.54,39.08461,19.832,39.08461,10.68945A8.68822,8.68822,0,0,0,30.41809,2Zm-1.772,18.6571a.98319.98319,0,0,1-.65022.2229.99554.99554,0,0,1-.65047-1.7423c3.70153-3.1709,5.74025-6.17188,5.74025-8.44825A2.68158,2.68158,0,0,0,30.41809,8a1,1,0,0,1,0-2,4.68337,4.68337,0,0,1,4.66719,4.68945C35.08528,14.3681,31.584,18.13953,28.64605,20.6571Z"
        />
      </svg>
    ),
    title: "HHA/CHHA",
    description:
      "Our Certified Home Health Aides (HHA/CHHA) are trained to provide compassionate care to individuals in their homes. Services include help with bathing, dressing, and grooming, as well as health monitoring through vital sign checks and medication reminders. HHAs also provide companionship, help with mobility, and assist with light housekeeping. Our goal is to ensure clients live independently while receiving professional care and attention in a safe, nurturing environment.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 7.5h19.5v9H2.25v-9zM2.25 10.5h19.5"
        />
      </svg>
    ),
    title: "Private Pay",
    description:
      "Private Pay services offer the flexibility to directly fund customized care plans without insurance restrictions. Clients can design a personalized care plan that includes personal care, housekeeping, medical support, and companionship. With private pay, there’s no need to navigate insurance requirements, giving clients full control over their care schedule and level of service. This option ensures peace of mind and the freedom to choose care based on individual needs and preferences.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 50 50"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M46.79248,24.23a4.05389,4.05389,0,0,0-5.689-.14l-7.69872,6.84a5.25608,5.25608,0,0,1,.58993,2.43,5.39055,5.39055,0,0,1-3.4794,5.02l-6.46895,2.43a1.00694,1.00694,0,0,1-1.27975-.59.98322.98322,0,0,1,.57986-1.28l6.46895-2.43A3.38021,3.38021,0,0,0,31.995,33.36,3.45753,3.45753,0,0,0,28.63555,30H9.99866A1.99982,1.99982,0,0,0,7.999,28H3.99966A1.99982,1.99982,0,0,0,2,30V46a1.99986,1.99986,0,0,0,1.99966,2H7.999a1.99986,1.99986,0,0,0,1.99967-2H14.048l1.24979.51A19.61328,19.61328,0,0,0,37.924,40.87l9.10846-11.01A4.20182,4.20182,0,0,0,46.79248,24.23ZM12.99816,44H9.99866V32h2.9995ZM30.41809,2a8.59142,8.59142,0,0,0-5.42194,1.9082A8.59147,8.59147,0,0,0,19.5742,2a8.68822,8.68822,0,0,0-8.66651,8.68945c0,9.14258,13.03,16.85059,13.58463,17.17481a1.00289,1.00289,0,0,0,1.00765,0C26.05456,27.54,39.08461,19.832,39.08461,10.68945A8.68822,8.68822,0,0,0,30.41809,2Zm-1.772,18.6571a.98319.98319,0,0,1-.65022.2229.99554.99554,0,0,1-.65047-1.7423c3.70153-3.1709,5.74025-6.17188,5.74025-8.44825A2.68158,2.68158,0,0,0,30.41809,8a1,1,0,0,1,0-2,4.68337,4.68337,0,0,1,4.66719,4.68945C35.08528,14.3681,31.584,18.13953,28.64605,20.6571Z"
        />
      </svg>
    ),
    title: "NHTD",
    description:
      "The Nursing Home Transition and Diversion (NHTD) program helps individuals move from nursing homes to community-based living. We offer services like care coordination, housing assistance, and access to community resources. Our team supports personal care, medical services, and community integration, ensuring a smooth transition. NHTD empowers individuals to live independently in their homes, providing the resources and care needed for a successful and fulfilling life.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        width={60}
        height={60}
        viewBox="0 0 96.623 96.622"
        xmlSpace="preserve"
        className="fill-[#005F6B] dark:fill-white"
      >
        <g>
          <g>
            <path d="M31.642,22.691c5.311,1.138,10.541-2.246,11.68-7.559c0.254-1.183,0.271-2.359,0.105-3.49L48.828,0l-7.489,1.934    l-9.606-1.933l-1.482,3.866l0.002,0.001c-3.033,1.139-5.44,3.743-6.17,7.143C22.946,16.324,26.33,21.553,31.642,22.691z" />
            <circle cx="68.822" cy="25.679" r="9.281" />
            <path d="M93.753,91.378l-0.355-1.323l-7.661,3.541c0.624,2.184,2.882,3.475,5.079,2.883    C93.037,95.881,94.351,93.598,93.753,91.378z" />
            <polygon points="92.696,87.441 84.388,88.602 85.307,92.012 92.97,88.467" />
            <path d="M91.451,82.814l-7.293,3.104c0.012-0.021,0.021-0.043,0.031-0.064c0.016-0.209,0.023-0.42,0.043-0.627    c0.034-0.406,0.098-0.801,0.186-1.188l6.607-2.812l-4.27-16.293c-0.147-0.559-0.414-1.058-0.75-1.494    c0.045,0,0.09,0.002,0.137,0.002c1.988,0,3.604-1.612,3.604-3.603c0-1.989-1.613-3.603-3.604-3.603    c-5.432,0-8.93-2.24-10.742-13.689c-0.042-0.26-0.111-0.508-0.205-0.744c-0.447-3.334-3.511-5.569-6.376-6.271    c0,0-0.976-0.293-2.015-0.27c-0.996,0.023-2.105,0.253-2.105,0.253l-0.027,0.006c-3.121,0.765-6.447,3.309-6.447,7.126    l0.001,18.57l-2.724-19.313c-0.215-1.614-1.705-2.747-3.312-2.532c-1.615,0.214-2.749,1.697-2.531,3.312l0.153,1.121    c-11.314-1.577-11.554-3.209-12.983-13.285c-0.021-0.156-0.07-0.301-0.11-0.45c-0.295-3.052-2.695-5.567-5.206-6.784    c0,0-0.949-0.52-2.031-0.727c-1.036-0.198-2.235-0.205-2.235-0.205l-0.029-0.002c-3.406,0.099-7.416,1.998-8.264,5.954    L2.724,69.779h9.701c-0.245,1.85-0.467,3.205-0.637,3.757c-0.428,1.382-3.744,6.526-7.097,11.011    c-1.649,2.208-1.698,5.086,0.509,6.737c2.36,1.464,4.757,0.553,5.737-0.759c1.718-2.295,7.418-10.096,8.639-14.037    c0.383-1.236,0.784-3.752,1.161-6.711h6.997c0.73,1.914,1.238,3.365,1.367,3.992c0.288,1.418-0.146,7.523-0.929,13.066    c-0.388,2.73,0.972,5.891,4.242,5.643c0.238-0.018-0.527,0.051-0.295,0.051c2.446,0,4.584-1.801,4.938-4.293    c0.402-2.84,1.65-12.42,0.824-16.461c-0.103-0.514-0.298-1.196-0.556-1.996h4.013c0,0-8.04-17.162-7.844-23.169l0.283-1.327    c2.74,3.199,7.266,5.035,15.334,6.137c0.176,0.023,0.352,0.035,0.521,0.035c0.422,0,0.83-0.079,1.214-0.209l2.415,17.361    c-1.596,2.664-2.516,5.777-2.516,9.102c0,9.799,7.971,17.77,17.77,17.77c6.475,0,12.15-3.48,15.257-8.67l0.001,0.006    c0.023-0.068,0.055-0.135,0.079-0.203l0.108,0.402l8.306-1.16L91.451,82.814z M73.197,57.889c1.854,1.644,3.939,3.07,6.297,4.239    L73.197,62.1V57.889z M68.517,89.417c-6.455,0-11.709-5.252-11.709-11.709c0-1.468,0.283-2.868,0.779-4.163    c0.209,0.031,0.42,0.053,0.637,0.053h21.242c0.484,1.281,0.762,2.664,0.762,4.11C80.228,84.165,74.974,89.417,68.517,89.417z" />
          </g>
        </g>
      </svg>
    ),
    title: "OPWDD",
    description:
      "Our OPWDD services provide essential care and support to individuals with developmental disabilities, helping them lead independent and fulfilling lives. We offer personal care assistance, including hygiene, meal preparation, and medication management, while also facilitating access to educational, social, and employment opportunities. Our services are designed to help individuals integrate into their communities, maintain autonomy, and access the resources needed to live a fulfilling life with dignity.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 50 50"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M46.79248,24.23a4.05389,4.05389,0,0,0-5.689-.14l-7.69872,6.84a5.25608,5.25608,0,0,1,.58993,2.43,5.39055,5.39055,0,0,1-3.4794,5.02l-6.46895,2.43a1.00694,1.00694,0,0,1-1.27975-.59.98322.98322,0,0,1,.57986-1.28l6.46895-2.43A3.38021,3.38021,0,0,0,31.995,33.36,3.45753,3.45753,0,0,0,28.63555,30H9.99866A1.99982,1.99982,0,0,0,7.999,28H3.99966A1.99982,1.99982,0,0,0,2,30V46a1.99986,1.99986,0,0,0,1.99966,2H7.999a1.99986,1.99986,0,0,0,1.99967-2H14.048l1.24979.51A19.61328,19.61328,0,0,0,37.924,40.87l9.10846-11.01A4.20182,4.20182,0,0,0,46.79248,24.23ZM12.99816,44H9.99866V32h2.9995ZM30.41809,2a8.59142,8.59142,0,0,0-5.42194,1.9082A8.59147,8.59147,0,0,0,19.5742,2a8.68822,8.68822,0,0,0-8.66651,8.68945c0,9.14258,13.03,16.85059,13.58463,17.17481a1.00289,1.00289,0,0,0,1.00765,0C26.05456,27.54,39.08461,19.832,39.08461,10.68945A8.68822,8.68822,0,0,0,30.41809,2Zm-1.772,18.6571a.98319.98319,0,0,1-.65022.2229.99554.99554,0,0,1-.65047-1.7423c3.70153-3.1709,5.74025-6.17188,5.74025-8.44825A2.68158,2.68158,0,0,0,30.41809,8a1,1,0,0,1,0-2,4.68337,4.68337,0,0,1,4.66719,4.68945C35.08528,14.3681,31.584,18.13953,28.64605,20.6571Z"
        />
      </svg>
    ),
    title: "CFC",
    description:
      "CFC (Community First Choice) is a Medicaid program supporting elderly adults and individuals with disabilities who want to live independently at home. It provides essential personal care assistance such as help with bathing, dressing, and meal preparation. CFC also offers caregiver support, training, and respite care, ensuring individuals receive the care they need while maintaining their independence, enhancing their quality of life in the comfort of their own homes.",
  },
];

export default function App() {
  return (
    <>
      <Head>
        <title>About Us - Cottage Home Care | 25+ Years of Expertise</title>
        <meta
          name="description"
          content="With 25+ years of experience, Cottage Home Care provides trusted in-home care services that enhance independence and improve your loved ones' well-being."
        />
        <meta
          name="keywords"
          content="
        About Cottage Home Care Services, trusted in-home care, home health aides near me, personal care aides near me, PCA services near me, HHA services near me, 24-hour home care services near me, NHTD 24-Hour Services near me, Nursing Home Transition & Diversion near me, OPWDD Programs near me, private pay home care near me, certified home health agency near me, community first choice near me, experienced home health professionals near me, compassionate in-home care, faith-based home care services, home care providers near me, registered nurses in home care near me, licensed practical nurses near me, managed long-term care near me, PCA nursing services near me, nurse visits near me, senior care services near me, home health care near me, personal care assistance near me, elder care services near me, in-home senior care near me, home health services in New Jersey, New York home care, Maryland home care, senior health care in New Jersey, professional home care in New York, elder care in Maryland, compassionate home care near me, affordable home care services near me, senior health services near me, private home care New Jersey, home care services in Jersey City, NJ, personal care aides in Bayonne, NJ, home health aides in Union, NJ, home care services in East Orange, NJ, home health services in Linden, NJ, home care providers in Newark, NJ, nursing home transition services in New Jersey, certified home health agency in New Jersey, community first choice New Jersey, home care services in Manhattan, NY, home health care Brooklyn, NY, in-home care services in Queens, NY, senior care services Bronx, NY, private pay home care Long Island, NY, home care providers Westchester, NY, certified home health agency in Albany, NY, personal care aides New York City, home health aides in Long Island, home care services near me in New York, New York City home health services, professional nursing services New York, personal care aides in Maryland, private pay home care services in Maryland, OPWDD programs Maryland, certified home health agency Maryland, community first choice Maryland, home health care in Baltimore City, MD, home care in Montgomery County, MD, home care services in Prince George's County, MD, in-home care in Anne Arundel County, MD, elder care services in Carroll County, MD, senior health services in Frederick County, MD, personal care services in Howard County, MD, nursing care services in Washington County, MD, home care providers in Worcester County, MD, experienced home health professionals Maryland, home health aides Somerset County, MD, home care services St. Mary's County, MD, personal care aides Calvert County, MD, home health care in Talbot County, MD
      "
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/about-us/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/about-us/"
          hrefLang="x-default"
        />
        <link rel="canonical" href="https://cottagehomecare.com/about-us/" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cottage Home Care Services",
        "url": "https://cottagehomecare.com/",
        "logo": "https://cottagehomecare.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/cottageHC",
          "https://www.linkedin.com/company/cottage-homecare"
          
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-516-367-2266",
          "contactType": "Home Health Care Services",
          "areaServed": ["US"]
        }
      }
      `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cottagehomecare.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://cottagehomecare.com/about-us/"
          }
        ]
      }
      `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Cottage Home Care provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cottage Home Care offers trusted in-home care services including personal care, home health aides, PCA services, HHA services, 24-hour care, and more."
            }
          },
          {
            "@type": "Question",
            "name": "Which areas do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide services in New Jersey, New York, and Maryland, covering cities like Jersey City, Newark, Manhattan, Baltimore, and more."
            }
          },
          {
            "@type": "Question",
            "name": "Are your caregivers certified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our team consists of certified home health aides, registered nurses, licensed practical nurses, and experienced home care professionals."
            }
          }
        ]
      }
      `,
          }}
        />
      </Head>

      <main className="min-h-screen ">
        <section className="relative overflow-hidden bg-[#005f6b]/90 dark:bg-sla text-white pb-2">
          <div className="hidden md:block">
            <div
              className={`absolute top-40 left-40  opacity-70 bg-cover bg-center w-[300px] h-[300px] rounded-md -rotate-12`}
              style={{
                backgroundImage: `url(${"/assets/process_image.webp"})`,
              }}
            />
            <div
              className={`absolute top-40 right-40  opacity-70 bg-cover bg-center w-[300px] h-[300px] rounded-md rotate-12`}
              style={{
                backgroundImage: `url(${"/assets/process_image.webp"})`,
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary text-sm font-medium border ">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                  About Cottage Homecare Services
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-white">
                25+ Years of Experience in{" "}
                <span className="text-primary">
                  Compassionate Home Care Services
                </span>
              </h1>

              <p className="xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto px-8">
                With over 25 years of experience, Cottage Home Care Services is
                a trusted provider of compassionate home care services in New
                York, Maryland, and New Jersey. Our expert team delivers
                personalized nursing care and home healthcare services, helping
                clients maintain independence and wellbeing in the comfort of
                their own homes. Whether you need personal care assistance,
                nursing services, or in-home healthcare solutions, we are here
                to provide the care you deserve.
              </p>
            </div>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="w-full h-12 md:h-16 text-background fill-white dark:fill-slate-500"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C300,80 600,80 900,40 L1200,0 L1200,120 L0,120 Z" />
            </svg>
          </div>
        </section>
        <section className="relative py-10 md:py-20  overflow-hidden ">
          <div className="absolute inset-0 bg-white dark:bg-slate-500" />

          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative">
                  {/* Decorative background card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-[3rem] rotate-6 opacity-20 blur-sm" />
                  <div>
                    <img
                      src={"/assets/about-hero.webp"}
                      alt="About us Hero Image"
                      className="rounded-xl"
                      width={1080}
                      height={721}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary dark:text-gray-100 text-[#005f6b] md:text-2xl font-bold tracking-wide shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  OUR MISSION
                </div>

                <h2 className="text-xl md:text-4xl font-bold tracking-tight text-balance leading-tight text-[#005f6b] dark:text-gray-100">
                  Enhancing Lives Through Compassionate,{" "}
                  <span className="text-primary">Personalized Home Care</span>
                </h2>

                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                  <p className="text-xl  text-foreground dark:text-gray-100">
                    At Cottage Home Care Services, we are committed to
                    delivering top-tier home care services across New York,
                    Maryland, and New Jersey. With over 25 years of experience,
                    we have built a reputation for being a beacon of trust and
                    reliability in personal care services, nursing care, and
                    home healthcare solutions. Our highly trained professionals,
                    including Registered Nurses (RNs) and Licensed Practical
                    Nurses (LPNs), ensure that every client receives
                    personalized care tailored to their unique needs. Whether
                    you&apos;re recovering from an illness, managing chronic
                    conditions, or in need of everyday assistance, we provide
                    compassionate care that meets your needs with warmth,
                    expertise, and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-10 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />

          <div className="absolute top-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 lg:order-2">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-[#005f6b] dark:text-gray-100 md:text-2xl font-bold tracking-wide shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  OUR VISION
                </div>

                <h3 className="text-xl md:text-4xl font-bold tracking-tight text-balance leading-tight text-[#005f6b] dark:text-gray-100">
                  Building a Future of Accessible and{" "}
                  <span className="text-accent">
                    Compassionate Home Care Services
                  </span>
                </h3>

                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                  <p className="text-xl  text-foreground dark:text-gray-100">
                    Our vision at Cottage Home Care Services is to be the most
                    trusted provider of home care services in New York,
                    Maryland, and New Jersey. We aim to create a future where
                    individuals of all ages and health conditions can live
                    safely and comfortably in their homes with the right
                    support. Our goal is to provide innovative, accessible, and
                    affordable personal care and nursing services that are built
                    on a foundation of excellence. Through our comprehensive
                    long-term care services and personalized home care, we are
                    dedicated to making a positive, lasting impact on the lives
                    of the families we serve. simply in need of assistance, we
                    are committed to being there when you need us most.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative p-6 space-y-2">
                      <div className="text-3xl md:text-6xl font-bold text-[#005f6b] dark:text-gray-100">
                        10,000+
                      </div>
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide dark:text-gray-100">
                        Families Served
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/70 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative p-6 space-y-2">
                      <div className="text-3xl md:text-6xl font-bold text-[#005f6b] dark:text-gray-100">
                        99%
                      </div>
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide dark:text-gray-100">
                        Satisfaction Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:order-1">
                <div className="relative">
                  {/* Decorative background card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/70 rounded-[3rem] -rotate-6 opacity-20 blur-sm" />

                  {/* Main card */}

                  <div>
                    <img
                      src={"/assets/process_image.webp"}
                      alt="About us article image"
                      className="rounded-xl"
                      width={1080}
                      height={721}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-cyan-100/50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-[#005f6b] text-xl md:text-3xl font-semibold dark:text-white">
                Our Core Services
              </div>

              <h4 className="text-2xl md:text-4xl font-bold tracking-tight text-[#005f6b] dark:text-white">
                Expert Care Solutions to Foster Independence and Enhance Quality
                of Life at Home
              </h4>

              <p className="text-lg text-muted-foreground leading-relaxed dark:text-white">
                We specialize in providing high-quality, tailored in-home care
                services that focus on promoting independence, dignity, and
                well-being. Our experienced professionals are committed to
                delivering compassionate, customized care to meet the unique
                needs of each individual.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl p-8 shadow-sm border dark:border-white dark:text-white border-[#005f6b] hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 text-[#005f6b] dark:text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-[#005f6b] dark:text-white">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
