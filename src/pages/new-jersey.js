"use client";
import { useState } from "react";

/* --- Optional reusable video with custom thumbnail --- */
function VideoWithCustomThumb({
  videoId = "7uoXudV9uas",
  thumb = "https://img.youtube.com/vi/7uoXudV9uas/maxresdefault.jpg",
  caption = "YOU CHOOSE WHO PROVIDES YOUR HOME CARE",
}) {
  const [play, setPlay] = useState(false);
  return (
    <div className="w-full aspect-video  overflow-hidden shadow-lg">
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
          <img
            src={thumb}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="rounded-full p-5 bg-white/90 shadow-md transition group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#E53935]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-12 left-4 right-4">
            <span className="block bg-[#009EA9]/90 text-white text-sm md:text-base font-semibold tracking-wide text-center py-2 text-shadow">
              {caption}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

/* --- Page component --- */
export default function NewJersey() {
  return (
    <section>
      <div className="relative bg-white min-h-[68vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1757013616/state_images/her_banner_rqcnvc.webp"
            alt="Caregiver with patient"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 lg:flex lg:items-end lg:justify-between min-h-[68vh]">
          <div className="max-w-xl bg-black/70 rounded-2xl shadow-lg p-6 mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              BEST HOME CARE SERVICES, PRIVATE PAY HOME CARE IN NEW JERSEY
            </h2>
            <p className="text-lg text-gray-100 font-medium">
              Compassionate home support — choose your caregiver with Medicaid
              or Private Pay.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 bg-[#00A6B2] py-10 text-center text-white font-semibold xl:text-2xl text-xl">
          Residents of NY, NJ, MD
          <br />
          <span className="text-sm font-normal lg:text-xl">
            Your #1 Choice for Home Care
          </span>
        </div>
      </div>

      {/* Optional: custom-thumb YouTube section (remove if not needed) */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text + Video */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Over <span className="text-[#00A6B2]">70,000 Customers</span> have
            joined the <span className="text-[#00A6B2]">Cottage Homecare</span>{" "}
            family where a family or friend gets{" "}
            <span className="font-extrabold">paid to care</span> for their loved
            ones in need.
          </h2>

          <ul className="mt-6 space-y-3 text-lg font-semibold text-gray-800">
            <li>• 21% Lower Hospitalization Rate</li>
            <li>• 97% Customer Satisfaction</li>
            <li>• 7,000+ 5-star reviews</li>
          </ul>

          <div className="mt-8">
            <VideoWithCustomThumb
              videoId="7uoXudV9uas"
              caption="YOU CHOOSE WHO PROVIDES YOUR HOME CARE"
            />
          </div>
        </div>

        {/* Right Side: Empty Column */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
