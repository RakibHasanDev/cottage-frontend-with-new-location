import SpinerLoading from "@/components/shared/SpinerLoading";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Clock, DollarSign, Send } from "lucide-react";
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

  return (
    <div className="min-h-screen">
      {/* Hero Section (unchanged) */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
          {/* CTA Section */}
          <div className="mt-16 text-center p-12 rounded-3xl bg-[#005f6b] dark:bg-slate-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/repeating-geometric-pattern.png')] opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Don&apos;t See the Right Position?
              </h3>
              <p className="text-cyan-50 mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for talented, compassionate
                individuals. Send us your resume and we&apos;ll keep you in mind
                for future opportunities.
              </p>
              <button className="bg-white text-[#005f6b] hover:bg-cyan-50 px-8 py-4 rounded-xl font-semibold shadow-xl transition-colors">
                Submit Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
