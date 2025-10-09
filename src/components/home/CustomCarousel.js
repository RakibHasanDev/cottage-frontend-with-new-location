"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function HeroSection({ onRequestCare = () => {} }) {
  return (
    <section className="relative  bg-gradient-to-br from-[#00A6B2]/30 via-white to-[#00A6B2]/40 overflow-hidden ">
      {/* Decorative SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Healthcare-related decorative shapes */}
        <div className="absolute top-20 left-10 opacity-20">
          <Icon
            icon="lucide:heart"
            className="text-2xl md:text-3xl lg:text-6xl"
          />
        </div>
        <div className="absolute top-40 right-20 opacity-15">
          <Icon
            icon="lucide:users"
            className="text-2xl md:text-3xl lg:text-6xl"
          />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20">
          <Icon
            icon="lucide:shield"
            className="text-2xl md:text-3xl lg:text-6xl"
          />
        </div>

        {/* curved shapes */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          viewBox="0 0 400 800"
          fill="none"
        >
          <path
            d="M400 0C350 100 300 200 320 300C340 400 380 500 360 600C340 700 300 750 400 800V0Z"
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A6B2" />
              <stop offset="100%" stopColor="#00A6B2" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5"
          viewBox="0 0 300 400"
          fill="none"
        >
          <path
            d="M0 400C50 350 100 300 80 250C60 200 20 150 40 100C60 50 100 25 0 0V400Z"
            fill="url(#gradient2)"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A6B2" />
              <stop offset="100%" stopColor="#00A6B2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-xl lg:text-3xl font-bold text-balance leading-tight text-gray-800">
                Cottage Home Care Services provides care to seniors in need and
                has taken on some of the most challenging cases in New York.
              </h1>

              <h2 className="text-lg text-muted-foreground font-medium tracking-wide uppercase text-gray-00">
                HHA/PCA, NHTD & Private Pay Services Throughout New York City,
                Nassau & Suffolk County, Westchester & Albany
              </h2>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1(516) 367-2266"
                className="bg-[#005f6b] text-center hover:bg-[#005f6b]/80 text-white px-8 py-2 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Contact Us
              </a>
              <button
                onClick={onRequestCare}
                className="border-2 border-[#005f6b] text-black hover:bg-[#005f6b] hover:text-white px-8 py-2 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent cursor-pointer"
              >
                Request Care
              </button>
            </div>
          </div>

          {/* Right Image with Curved Shape */}
          <div className="relative  order-1 md:order-2 lg:-[60%] 2xl:w-[85%] mx-auto">
            {/* Curved background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/20 rounded-[3rem] transform rotate-3 scale-105"></div>

            {/* Main image container with curved mask */}
            <div className="relative bg-card rounded-[2.5rem] overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1758561989/main_banner/hero_Section_bynmal.webp"
                alt="Compassionate caregiver with elderly client"
                className="w-full   object-cover min-h-[400px] lg:min-h-[600px] "
                width={600}
                height={600}
              />

              {/* Overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>

            {/* Floating elements */}

            <div className="absolute -top-6 -right-6 bg-card rounded-full p-4 shadow-lg">
              {/* <Heart className="w-8 h-8 text-primary" /> */}
              <Icon
                icon="lucide:heart"
                className="text-2xl md:text-3xl lg:text-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
