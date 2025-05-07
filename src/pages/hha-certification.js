import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";

const LazyBanner = dynamic(
  () => import("@/components/hhacertification/heroSection"),
  {
    suspense: true,
    ssr: false,
  }
);
const WelcomeMessage = dynamic(
  () => import("@/components/hhacertification/WelcomeMessage"),
  {
    suspense: true,
    ssr: false,
  }
);
const HhhaCertificationAbout = dynamic(
  () => import("@/components/hhacertification/HhhaCertificationAbout"),
  {
    suspense: true,
    ssr: false,
  }
);

const HhhaSchoolMap = dynamic(
  () => import("@/components/hhacertification/HhhaSchoolMap"),
  {
    suspense: true,
    ssr: false,
  }
);
const HhhaContactForm = dynamic(
  () => import("@/components/hhacertification/HhhaContactForm"),
  {
    suspense: true,
    ssr: false,
  }
);

const Placeholder = () => (
  <div>
    <SkeletonLoading />
  </div>
);

const HhhaCertification = () => {
  const title = "HHA Certification - Cottage Home Care Services";
  const description =
    "Get your HHA certification at Brooklyn Institute. Gain skills for a career in home care with Cottage Home Care Services. Enroll today!";
  const keywords =
    "HHA Certification, Home Health Aide Training, Brooklyn Institute of Vocational Training, healthcare training, home care industry training, Cottage Home Care Services, healthcare careers, vocational training in Brooklyn";

  const schemaData = [
    // ✅ Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cottage Home Care Services",
      url: "https://cottagehomecare.com",
      logo: "https://cottagehomecare.com/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1516-367-2266",
          contactType: "Customer Service",
          areaServed: "US",
          availableLanguage: [
            "English",
            "Spanish",
            "Bengali",
            "Punjabi",
            "Gujarati",
          ],
        },
      ],
      sameAs: [
        "https://www.facebook.com/cottageHC",
        "https://www.linkedin.com/company/cottage-homecare/",
      ],
    },

    // ✅ WebPage Schema (HHA Certification)
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: "https://cottagehomecare.com/hha-certification",
      description: description,
      isPartOf: {
        "@type": "WebSite",
        url: "https://cottagehomecare.com",
      },
    },

    // ✅ Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://cottagehomecare.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://cottagehomecare.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "NHTD",
          item: "https://cottagehomecare.com/nhtd",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "HHA/PCA",
          item: "https://cottagehomecare.com/hha",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "HHA Certification",
          item: "https://cottagehomecare.com/hha-certification",
        },
      ],
    },

    // ✅ FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is HHA Certification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HHA Certification qualifies individuals to work as Home Health Aides, providing personal care and support to patients in their homes.",
          },
        },
        {
          "@type": "Question",
          name: "How do I enroll in the HHA Certification program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can enroll by visiting our website's HHA Certification page, filling out the application form, or contacting us directly at +1-516-367-2266.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to complete the HHA Certification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The HHA Certification program typically takes a few weeks to complete, depending on the course schedule and your availability.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/hha-certification/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/logo.png"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/hha-certification/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/hha-certification/"
          hreflang="x-default"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/hha-certification/"
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <main className="dark:bg-slate-600 min-h-screen">
        <h1 className="sr-only">
          Become HHA Certified at Brooklyn Institute of Vocational Training
        </h1>
        <h2 className="sr-only">
          Get Certified as a Home Health Aide at Cottage Home Care
        </h2>

        <Suspense fallback={<Placeholder />}>
          <LazyBanner />
        </Suspense>
        <Suspense fallback={<Placeholder />}>
          <WelcomeMessage />
        </Suspense>
        <Suspense fallback={<Placeholder />}>
          <HhhaCertificationAbout></HhhaCertificationAbout>
        </Suspense>
        <div className="w-[80%] py-10 mx-auto dark:text-gray-100 sr-only">
          <p>
            <strong>
              HHA Certification – Become a Certified Home Health Aide at My
              Brooklyn Institute
            </strong>
          </p>

          <p>
            At My Brooklyn Institute, we are proud to offer a comprehensive Home
            Health Aide (HHA) Certification program designed to prepare
            compassionate individuals like you for a rewarding career in the
            home health care industry. As a sister organization of{" "}
            <strong>Cottage Home Care Services</strong>, we are deeply committed
            to the values of excellence, care, and compassion, providing both
            foundational training and real-world experience to ensure our
            graduates are fully equipped to succeed in this essential and
            growing field.
          </p>

          <p>
            Whether you&apos;re just starting your career or looking to switch
            professions, earning your HHA Certification from My Brooklyn
            Institute will open the door to countless opportunities in the
            rapidly expanding field of home health care.
          </p>

          <p>
            <strong>
              Why Choose My Brooklyn Institute for Your HHA Certification?
            </strong>
          </p>

          <ul>
            <li>
              <strong>Comprehensive Curriculum</strong>
              <ul>
                <li>
                  Our program covers all the essential aspects of home health
                  care, from assisting with daily living activities to
                  understanding the medical, emotional, and social needs of
                  patients. The curriculum includes:
                </li>
                <li>
                  Personal care assistance (bathing, grooming, dressing, etc.)
                </li>
                <li>Health and safety protocols</li>
                <li>Basic first aid and emergency procedures</li>
                <li>
                  Understanding medical conditions and how they affect daily
                  living
                </li>
                <li>Patient rights and confidentiality</li>
                <li>
                  Caring for patients with chronic illnesses, disabilities, or
                  mobility issues
                </li>
              </ul>
            </li>
            <li>
              <strong>Hands-On Training</strong>
              <ul>
                <li>
                  We offer practical, in-person training, giving you real-world
                  experience to develop the skills you need to care for patients
                  with confidence. Under the supervision of skilled instructors,
                  you&apos;ll have the chance to practice your caregiving skills
                  in a controlled, supportive environment.
                </li>
              </ul>
            </li>
            <li>
              <strong>Flexible Learning Options</strong>
              <ul>
                <li>
                  Understanding the busy lives of our students, we offer
                  flexible class schedules, including evening and weekend
                  options, to accommodate your work and personal commitments.
                  Whether you prefer full-time or part-time study, we have a
                  schedule that works for you.
                </li>
              </ul>
            </li>
            <li>
              <strong>Experienced Instructors</strong>
              <ul>
                <li>
                  Our instructors are experienced professionals in the home
                  health care industry, with years of experience as registered
                  nurses, certified nursing assistants, and home health aides.
                  They are committed to providing you with the best possible
                  education, offering valuable insights into the demands and
                  rewards of the profession.
                </li>
              </ul>
            </li>
            <li>
              <strong>Job Placement Assistance</strong>
              <ul>
                <li>
                  After completing the certification program, My Brooklyn
                  Institute offers job placement assistance to help you connect
                  with opportunities at{" "}
                  <strong>Cottage Home Care Services</strong> and other local
                  agencies. We work closely with a network of employers looking
                  for trained, certified HHAs, making the transition from
                  student to employee smoother and faster.
                </li>
              </ul>
            </li>
            <li>
              <strong>Affordable Training</strong>
              <ul>
                <li>
                  We believe that education should be accessible, which is why
                  we offer competitive tuition rates and various payment plans
                  to help you finance your education without breaking the bank.
                </li>
              </ul>
            </li>
          </ul>

          <p>
            <strong>What is an HHA?</strong>
          </p>

          <p>
            A Home Health Aide is a vital member of the healthcare team,
            providing non-medical support to individuals who need assistance
            with daily tasks, including those with disabilities, the elderly, or
            patients recovering from surgery. HHAs help with activities like
            bathing, dressing, meal preparation, mobility assistance, and more.
            They also play an important role in monitoring a patient&apos;s
            well-being, providing companionship, and communicating with family
            members and healthcare providers about the patient&apos;s condition.
          </p>

          <p>
            <strong>
              How to Get Started with Your HHA Certification at My Brooklyn
              Institute
            </strong>
          </p>

          <ul>
            <li>
              <strong>Apply to the Program:</strong> Complete our online
              application or contact us directly to start the enrollment
              process. Our friendly admissions team is here to guide you through
              the steps and answer any questions you may have.
            </li>
            <li>
              <strong>Attend Classes:</strong> Once enrolled, you will attend
              both classroom lectures and hands-on training sessions, where you
              will gain the knowledge and skills necessary to provide the
              highest level of care to patients.
            </li>
            <li>
              <strong>Pass the Certification Exam:</strong> After completing the
              required training, you will be given the opportunity to take the
              certification exam to demonstrate your competence. Upon passing
              the exam, you will earn your HHA certification.
            </li>
            <li>
              <strong>Start Your Career:</strong> With your HHA certification in
              hand, you can begin your career as a Home Health Aide, working
              with <strong>Cottage Home Care Services</strong> or other trusted
              agencies in the field. With a growing demand for in-home care,
              your career prospects are brighter than ever.
            </li>
          </ul>

          <p>
            <strong>Why Work as a Home Health Aide?</strong>
          </p>

          <ul>
            <li>
              <strong>Meaningful Work:</strong> As an HHA, you&apos;ll have the
              opportunity to make a real difference in the lives of others by
              providing essential care and companionship to individuals in need.
            </li>
            <li>
              <strong>Job Security:</strong> The demand for qualified home
              health aides is rapidly increasing as more people opt for in-home
              care, making it a stable and rewarding career choice.
            </li>
            <li>
              <strong>Flexible Hours:</strong> Many HHAs work on a part-time or
              full-time basis, giving you the flexibility to choose hours that
              fit your personal life and schedule.
            </li>
            <li>
              <strong>Career Advancement:</strong> As an HHA, there are many
              opportunities for career advancement, including further
              certification or training to become a Certified Nursing Assistant
              (CNA) or Licensed Practical Nurse (LPN).
            </li>
          </ul>

          <p>
            <strong>
              Enroll Today and Start Your Career in Home Health Care!
            </strong>
          </p>

          <p>
            At My Brooklyn Institute, we&apos;re committed to helping you
            achieve your career goals in the rewarding field of home health
            care. Our HHA Certification Program will provide you with the skills
            and training needed to succeed and make a lasting impact in the
            lives of patients.
          </p>
        </div>

        <Suspense fallback={<Placeholder />}>
          <HhhaSchoolMap></HhhaSchoolMap>
        </Suspense>
        <Suspense fallback={<Placeholder />}>
          <HhhaContactForm></HhhaContactForm>
        </Suspense>
      </main>
    </>
  );
};

export default HhhaCertification;
