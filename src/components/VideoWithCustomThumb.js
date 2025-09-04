"use client";
import { useState } from "react";

function VideoWithCustomThumb({
  videoId = "7uoXudV9uas",
  thumb = "https://img.youtube.com/vi/7uoXudV9uas/maxresdefault.jpg", // fallback to YT thumbnail
  caption = "YOU CHOOSE WHO PROVIDES YOUR HOME CARE",
}) {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      {play ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Customer Testimonial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="relative w-full h-full group"
          aria-label="Play video"
        >
          {/* Thumbnail */}
          <img
            src={thumb}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Play button */}
          <span className="absolute inset-0 grid place-items-center">
            <span className="rounded-full p-5 bg-white/90 shadow-md transition group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#E53935]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>

          {/* Red caption bar like your screenshot */}
          <span className="absolute bottom-4 left-4 right-4">
            <span className="block bg-[#E53935]/95 text-white text-sm md:text-base font-semibold tracking-wide text-center py-2">
              {caption}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy + video */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Over <span className="text-[#00A6B2]">70,000 Customers</span> have
            joined the Cottage Homecare family where a family or friend gets{" "}
            <span className="font-extrabold">paid to care</span> for their loved
            ones.
          </h2>

          <ul className="mt-6 space-y-3 text-lg font-semibold text-gray-800">
            <li>• 21% Lower Hospitalization Rate</li>
            <li>• 97% Customer Satisfaction</li>
            <li>• 7,000+ 5-star reviews</li>
          </ul>

          <div className="mt-8">
            <VideoWithCustomThumb
              videoId="7uoXudV9uas"
              // swap with your own CDN image if you want a branded thumbnail:
              // thumb="/images/testimonial-thumb.jpg"
              caption="YOU CHOOSE WHO PROVIDES YOUR HOME CARE"
            />
          </div>
        </div>

        {/* Right column intentionally empty */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
