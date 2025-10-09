import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import ApplyModal from "@/components/ApplyModal";

const JobDetails = ({ job }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  if (!job) {
    return <p className="text-red-600 text-center">Job not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50/30 to-white dark:from-slate-400 dark:via-slate-400 dark:to-slate-400">
      <Head>
        <title>
          {job.title
            ? `${job.title} | Careers at Cottage Homecare Services`
            : "Job Details | Cottage Homecare Services"}
        </title>

        <meta
          name="description"
          content={
            job.description
              ? job.description.replace(/<[^>]+>/g, "").slice(0, 150)
              : "Explore job opportunities at Cottage Homecare Services"
          }
        />
        <meta
          name="keywords"
          content={`care jobs, ${job.title}, home care job, career at Cottage Homecare`}
        />
        <link
          rel="canonical"
          href={`https://cottagehomecare.com/career/${slug}/`}
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${job.title || "Job Opportunity"} | Cottage Homecare`}
        />
        <meta
          property="og:description"
          content={
            job.description
              ? job.description.replace(/<[^>]+>/g, "").slice(0, 150)
              : "Join the Cottage Homecare team and make a difference in home care services."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://cottagehomecare.com/career/${slug}/`}
        />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/assets/job.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${job.title || "Job Opportunity"} | Cottage Homecare`}
        />
        <meta
          name="twitter:description"
          content={
            job.description
              ? job.description.replace(/<[^>]+>/g, "").slice(0, 150)
              : "Join the Cottage Homecare team and make a difference in home care services."
          }
        />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/assets/job.webp"
        />
      </Head>
      <section>
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden dark:bg-slate-600">
          <div className="absolute inset-0">
            <img
              src={"/assets/job.webp"}
              alt="Career opportunities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" />
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-delayed" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              Career
            </h1>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Link href={"/"} className="text-white font-bold">
                HOME
              </Link>
              <span className="text-white font-bold">—</span>
              <Link href={"/career"} className="text-white font-semibold">
                Career
              </Link>
            </div>
          </div>
        </div>
        <div className=" my-6 w-full px-4 W-[95%] lg:w-[70%] mx-auto  ">
          <div className="relative  bg-white p-6 shadow-md ring-1 ring-slate-200  dark:bg-slate-600">
            {/* Mobile Apply button (visible on <lg) */}

            <h4 className="mt-2 text-2xl font-bold text-slate-900 dark:text-gray-100">
              {job.title || "Untitled Job"}
            </h4>

            <div className="mt-3 space-y-2 text-slate-700 dark:text-gray-100">
              <p>
                <span className="font-semibold">Salary:</span>{" "}
                <span> ${job.salary || "Negotiable"}/Hour</span>
              </p>
              <p>
                <span className="font-semibold">Vacancy:</span>{" "}
                {job.vacancy || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Deadline:</span>{" "}
                {job.deadline || "Not specified"}
              </p>
              <p className="pt-5">
                <button
                  className=" rounded-lg bg-[#005F6B] dark:bg-slate-400 px-6 py-2 text-white shadow hover:bg-[#005F6B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005F6B]"
                  onClick={() => setShowModal(true)}
                >
                  Apply Now
                </button>
              </p>
            </div>

            <hr className="my-4 border-slate-300" />

            {/* Job description (HTML) */}
            <div
              className="prose max-w-none prose-headings:scroll-mt-20 prose-ul:list-disc prose-li:marker:text-slate-700 prose-p:text-slate-700 prose-li:text-slate-700"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />

            {/* Bottom Apply button */}
            <button
              className="mx-auto mt-6 flex items-center justify-center rounded-lg bg-[#005F6B] px-8 py-3 font-medium text-white shadow-md transition hover:bg-[#005F6B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005F6B] dark:bg-slate-400 "
              onClick={() => setShowModal(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <ApplyModal
        show={showModal}
        setShowModal={setShowModal}
        onClose={() => setShowModal(false)}
        jobId={job._id}
        jobTitle={job.title}
      />
    </div>
  );
};

export default JobDetails;

export async function getStaticPaths() {
  try {
    const res = await fetch(
      "https://cottage-backend-voilerplate.vercel.app/job-post"
    );
    const data = await res.json();

    const paths = (data?.jobPosts || [])
      .filter((job) => typeof job.slug === "string" && job.slug.trim() !== "")
      .map((job) => ({ params: { slug: job.slug } }));

    return { paths, fallback: false };
  } catch (err) {
    console.error("Error in getStaticPaths:", err);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://cottage-backend-voilerplate.vercel.app/job-post/slug/${slug}`
  );
  if (!res.ok) {
    return { notFound: true };
  }

  const data = await res.json();
  return { props: { job: data?.job || null } };
}
