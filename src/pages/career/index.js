import SpinerLoading from "@/components/shared/SpinerLoading";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Clock, DollarSign, Send, ChevronDown } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function App() {
  const [page, setPage] = useState(0); // 0-based
  const size = 10;

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["jobPosts", page, size],
    queryFn: async () => {
      const res = await fetch(
        `https://cottage-backend-voilerplate.vercel.app/job-post?page=${page}&size=${size}`,
        { headers: { "Content-Type": "application/json" } }
      );
      if (!res.ok) throw new Error("Failed to fetch job posts");
      return res.json();
    },
    keepPreviousData: true, // avoids UI flicker when paging
    staleTime: 30_000,
  });

  const { jobPosts, count } = data || { jobPosts: [], count: 0 };
  const totalPages = Math.max(1, Math.ceil(count / size));

  // Optional: show range like “1–10 of 53”
  const rangeText = useMemo(() => {
    if (!count) return "0 of 0";
    const start = page * size + 1;
    const end = Math.min((page + 1) * size, count);
    return `${start}–${end} of ${count}`;
  }, [page, size, count]);

  const gotoPage = (p) => {
    const next = Math.min(Math.max(p, 0), totalPages - 1);
    if (next !== page) {
      setPage(next);
      // scroll the listings back to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pageNumbers = useMemo(() => {
    // build a compact window around current page
    const maxButtons = 5;
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(0, page - half);
    let end = Math.min(totalPages - 1, start + maxButtons - 1);
    start = Math.max(0, end - (maxButtons - 1));
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, totalPages]);

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What benefits does Cottage Home Care offer its employees?",
      answer:
        "Cottage Home Care offers flexible schedules, steady client assignments, and weekly pay through direct deposit. We provide paid training, supportive supervision, and a respectful workplace culture, ensuring that our employees feel valued and supported.",
    },
    {
      question: "Do you offer health insurance or other medical benefits?",
      answer:
        "Currently, Cottage Home Care does not offer health insurance benefits. However, we focus on providing a supportive work environment with consistent hours and weekly pay, ensuring financial stability for our employees.",
    },
    {
      question: "How often are employees paid?",
      answer:
        "Employees at Cottage Home Care are paid weekly through direct deposit, ensuring that you have reliable and timely access to your earnings every week.",
    },
    {
      question: "Can I choose my own schedule?",
      answer:
        "Yes, we offer flexible schedules to accommodate your lifestyle. Whether you prefer full-time, part-time, or variable hours, we work with you to find a schedule that fits your personal and professional needs.",
    },
    {
      question: "Is paid training provided for new employees?",
      answer:
        "Absolutely! All Home Health Aides (HHAs) receive paid training to ensure that you are well-prepared and confident in your role. We believe in providing our employees with the knowledge and skills they need to succeed.",
    },
    {
      question: "Are there opportunities for advancement at Cottage Home Care?",
      answer:
        "Yes! Cottage Home Care focuses on performance-based growth. Employees who consistently perform well can expect steady work, regular client assignments, and opportunities to advance in their careers through ongoing training and support.",
    },
    {
      question: "Do you offer paid time off or vacation days?",
      answer:
        "Yes, we provide vacation days for our employees, allowing you to take the time you need to rest and recharge. We understand the importance of work-life balance and offer time off to support your personal well-being.",
    },
    {
      question: " What is the work environment like at Cottage Home Care?",
      answer:
        "We pride ourselves on fostering a supportive and respectful workplace culture. Our team members enjoy a positive and inclusive environment where they can thrive professionally and personally, with supervision that encourages growth and open communication.",
    },
    {
      question: "Are the work assignments steady and reliable?",
      answer:
        "Yes! At Cottage Home Care, we ensure that work is stable and performance-based. Our employees are assigned consistent hours with reliable clients, so you can count on steady work and dependable pay.",
    },
    {
      question: " How is performance recognized at Cottage Home Care?",
      answer:
        "We recognize and reward performance through consistent work assignments and steady hours. We believe in rewarding dedication and hard work with opportunities for growth and advancement within the company.",
    },
  ];

  return (
    <>
      <Head>
        <title>Careers at Cottage Home Care Services | Join Our Team</title>
        <meta
          name="description"
          content="Join Cottage Home Care and explore diverse career paths in home care services. Check out our current job openings and start your rewarding journey today!"
        />
        <meta
          name="keywords"
          content="Caregiver Job Opportunities, Home Health Aide Jobs, PCA Employment, HHA Career Openings, Nursing Home Transition Jobs, OPWDD Positions, Home Care Jobs Near Me, Personal Care Aide Careers, Certified Home Health Agency Jobs, Home Care Careers, In-Home Health Aide Jobs, Senior Caregiver Positions, Disability Support Jobs, Personal Support Aide Jobs, HHA Openings Near Me, PCA Job Vacancies, Caregiver Positions USA, Home Care Jobs Nationwide, Senior Home Care Jobs, Private Pay Home Care Jobs, Nursing Home Transition Career Paths, OPWDD Support Positions, In-Home Nursing Jobs, Live-In Caregiver Jobs, 24-Hour Caregiver Jobs, Home Health Aide Job Openings, Compassionate Caregiver Jobs, Medicaid-Approved Home Care Careers, Disability Care Jobs Near Me, Health Aide Positions, Personal Caregiver Job Openings, Healthcare Careers in Home Care, Community Health Jobs, Senior Care Assistant Roles, Geriatric Caregiver Jobs, Hospice Caregiver Positions, Family Support Caregiver Jobs, Home Health Specialist Jobs, Part-Time Caregiver Jobs, Full-Time Home Health Aide Jobs, Healthcare Support Jobs USA, Residential Care Aide Jobs, Assisted Living Caregiver Jobs, Overnight Caregiver Positions, Home Health Assistant Roles, Home Caregiver Positions USA, Companion Caregiver Jobs, Health Care Worker Jobs, In-Home Caregiver Positions, Certified Nursing Assistant Jobs, Home Care Worker Jobs, Senior Living Care Jobs, Medical Home Care Positions, Health Support Aide Careers, Home Health Nurse Jobs, In-Home Care Jobs, Live-in Home Care Positions, Personal Care Assistant Jobs Near Me"
        />
        <link
          rel="alternate"
          href={"https://cottagehomecare.com/career/"}
          hrefLang="en"
        />
        <link
          rel="alternate"
          href={"https://cottagehomecare.com/career/"}
          hrefLang="x-default"
        />

        <link rel="canonical" href="https://cottagehomecare.com/career/" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section (unchanged) */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={"/assets/job.webp"}
              alt="Career opportunities"
              className="w-full h-full object-cover"
              width={1920}
              height={883}
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

        {/* Job Listings Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white via-cyan-50/30 to-white dark:from-slate-600 dark:via-slate-600 dark:to-slate-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 bg-[#005f6b] text-white px-6 py-2 text-sm rounded-full font-medium dark:bg-slate-400">
                Join Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-[#005f6b] bg-clip-text text-transparent dark:bg-white">
                Open Positions
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto dark:text-gray-100">
                Make a difference in people&apos;s lives. Join our compassionate
                team of healthcare professionals.
              </p>
            </div>

            {/* Top toolbar: results info + loading state */}
            <div className="mb-6 flex items-center justify-between text-sm text-slate-600 dark:text-gray-100">
              <span>{rangeText}</span>
              {isFetching && <span className="italic">Updating…</span>}
            </div>

            {/* Grid */}
            {isLoading ? (
              <SpinerLoading />
            ) : isError ? (
              <div className="text-center text-red-600">
                Failed to load jobs. Please try again.
              </div>
            ) : jobPosts?.length === 0 ? (
              <div className="text-center text-slate-600">No jobs found.</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobPosts.map((job, index) => (
                  <div
                    key={job?.id || index}
                    className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-2 animate-fade-in-up rounded-2xl overflow-hidden border border-slate-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className="inline-block bg-gradient-to-r from-[#005f6b]/10 to-blue-500/10 text-[#005f6b] border border-[#005f6b]/20 px-3 py-1 rounded-full text-xs font-medium">
                          Healthcare
                        </span>
                        <span className="text-xs text-slate-500">
                          {(() => {
                            if (!job?.createdAt) return null;
                            const createdDate = new Date(job.createdAt);
                            const today = new Date();
                            const created = new Date(
                              createdDate.getFullYear(),
                              createdDate.getMonth(),
                              createdDate.getDate()
                            );
                            const now = new Date(
                              today.getFullYear(),
                              today.getMonth(),
                              today.getDate()
                            );
                            const diffTime = now - created;
                            const diffDays = Math.floor(
                              diffTime / (1000 * 60 * 60 * 24)
                            );
                            if (diffDays === 0) return "Today";
                            if (diffDays === 1) return "1 day ago";
                            return `${diffDays} days ago`;
                          })()}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-600 transition-colors">
                        {job?.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-base font-medium text-slate-600">
                          <MapPin className="w-4 h-4 text-[#005f6b]" />
                          <span>{job?.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-base font-medium text-slate-600">
                          <Clock className="w-4 h-4 text-[#005f6b]" />
                          <span>{job?.jobType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-base font-medium text-slate-600">
                          <DollarSign className="w-4 h-4 text-[#005f6b]" />
                          <span>{job?.salary}/hour</span>
                        </div>
                      </div>

                      <Link
                        href={`/career/${job?.slug}`}
                        className="w-full bg-[#005f6b] text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-cyan-500/30 group-hover:shadow-xl group-hover:shadow-[#005f6b] transition-all flex items-center justify-center gap-2"
                      >
                        Apply Now
                        <Send className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 dark:text-gray-100">
              <button
                className="px-3 py-2 rounded-lg border text-sm disabled:opacity-50 dark:text-gray-100"
                onClick={() => gotoPage(0)}
                disabled={page === 0}
                aria-label="First page"
              >
                « First
              </button>
              <button
                className="px-3 py-2 rounded-lg border text-sm disabled:opacity-50 dark:text-gray-100"
                onClick={() => gotoPage(page - 1)}
                disabled={page === 0}
                aria-label="Previous page"
              >
                ‹ Prev
              </button>

              {pageNumbers.map((p) => (
                <button
                  key={p}
                  onClick={() => gotoPage(p)}
                  className={[
                    "px-3 py-2 rounded-lg border text-sm dark:text-gray-100",
                    p === page
                      ? "bg-[#005f6b] text-white border-[#005f6b] dark:border-slate-400 dark:bg-slate-400"
                      : "hover:bg-slate-100",
                  ].join(" ")}
                  aria-current={p === page ? "page" : undefined}
                >
                  {p + 1}
                </button>
              ))}

              <button
                className="px-3 py-2 rounded-lg border text-sm disabled:opacity-50 dark:text-gray-100"
                onClick={() => gotoPage(page + 1)}
                disabled={page >= totalPages - 1}
                aria-label="Next page"
              >
                Next ›
              </button>
              <button
                className="px-3 py-2 rounded-lg border text-sm disabled:opacity-50  dark:text-gray-100"
                onClick={() => gotoPage(totalPages - 1)}
                disabled={page >= totalPages - 1}
                aria-label="Last page"
              >
                Last »
              </button>
            </div>
            <section className="py-20 px-4 bg-white dark:bg-slate-600 ">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                  {/* Left Side - Image */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src={"/assets/carrer.webp"}
                        alt="Caregiver with elderly person"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        width={600}
                        height={400}
                      />
                    </div>
                    {/* Decorative floating badge */}
                    <div className="absolute -bottom-6 -right-6 bg-[#005f6b] dark:bg-[#0491a3] text-white p-6 rounded-2xl shadow-xl animate-float">
                      <div className="text-3xl font-bold">10,000+</div>
                      <div className="text-sm text-cyan-50">Happy Families</div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="space-y-6">
                    <p className="text-4xl md:text-5xl font-bold bg-[#005f6b] bg-clip-text text-transparent leading-tight dark:text-gray-100">
                      Why Join with us
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed dark:text-gray-100">
                      At Cottage Home Care Services, we offer more than just a
                      job—we provide a fulfilling and meaningful career where
                      you can truly make a difference in the lives of others. As
                      part of our compassionate team, you&apos;ll have the
                      opportunity to deliver exceptional, personalized care
                      while building meaningful relationships with the people
                      you serve. We are deeply committed to supporting our
                      employees, offering a work environment where you feel
                      valued, respected, and empowered to grow. With flexible
                      scheduling options, competitive pay, comprehensive
                      benefits, and ongoing training opportunities, we make sure
                      you have the tools you need to succeed and advance in your
                      career. Whether you&apos;re looking for part-time,
                      full-time or contract work, we offer a range of
                      opportunities that cater to your personal needs and
                      professional goals. At Cottage Home Care Services, we
                      believe in nurturing talent, fostering career growth, and
                      providing a supportive atmosphere that helps you thrive.
                      Join us and become part of a team that is dedicated to
                      making a real and lasting impact on the lives of our
                      clients, while enjoying the fulfillment and opportunities
                      for growth that come with being part of our mission-driven
                      organization.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20  dark:bg-slate-600">
              <div className="container mx-auto px-4">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-primary dark:text-gray-100">
                  Frequently Asked Questions
                </p>

                <div className="max-w-5xl 2xl:max-w-7xl mx-auto space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${
                          openIndex === index
                            ? "bg-cyan-500 text-white"
                            : "bg-white text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        <span className="font-semibold text-lg pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 transition-transform ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openIndex === index && (
                        <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* CTA Section */}
            <div className="mt-16 text-center p-12 rounded-3xl bg-[#005f6b] dark:bg-slate-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/repeating-geometric-pattern.png')] opacity-10" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Don&apos;t See the Right Position?
                </h3>
                <p className="text-cyan-50 mb-6 max-w-2xl mx-auto">
                  We&apos;re always looking for talented, compassionate
                  individuals. Please contact us, and we&apos;ll keep you in
                  mind for future opportunities.
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-[#005f6b] hover:bg-cyan-50 px-8 py-4 rounded-xl font-semibold shadow-xl transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
