import EasierLife from "@/components/home/EasierLife";
import CareRequestModal from "@/components/shared/CareRequestModal";
import { CircleCheck } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#005F6B] via-cyan-800 to-[#005F6B] py-20 lg:py-32">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/repeating-geometric-pattern.png')] opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto  leading-relaxed">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 mb-6 animate-fade-in ">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-medium text-sm">
                Cottage Home Care MI LLC
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
              style={{ lineHeight: "50px" }}
            >
              Empowering Independence with the Home Help Program Live at home.{" "}
              <br />
              Stay independent. Get care from someone you trust.
            </h1>

            {/* Subheading */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-fade-in-up shadow-2xl">
              <p className="text-white/90 text-lg leading-relaxed">
                {/* <strong className="text-yellow-300">Meeting Overview:</strong>{" "} */}
                Cottage Home Care MI LLC, we believe in putting families first.
                That’s why we proudly support the Home Help Program, a Michigan
                Medicaid-funded initiative that lets eligible individuals
                receive care in the comfort of their own home — from a caregiver
                they personally choose. <br /> Whether it&apos;s a family
                member, a friend, or a trusted loved one, the caregiver is paid
                by Medicaid — with no out-of-pocket cost to the person receiving
                care.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">
                  2+ Hours
                </div>
                <div className="text-white/80 text-lg">Independence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">
                  5 Members
                </div>
                <div className="text-white/80 text-lg">Choice</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-lg">Control</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden dark:bg-slate-500">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-float-delayed" />

        <div className="container mx-auto px-4 relative z-10 ">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold  dark:text-gray-100 text-[#005F6B]  mb-4">
                Eligibility Requirements
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto dark:text-gray-100">
                To qualify for the Home Help Program, you must:
              </p>
            </div>

            {/* Content Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Michigan Residency
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Must live in Michigan to qualify for the program.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Medicaid Benefits
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Applicants need to be enrolled in Medicaid.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Assistance with Daily Activities
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Require help with daily tasks like bathing and dressing.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Living at Home
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Must reside in their own home, not in a nursing facility.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    MDHHS Assessment
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Complete an evaluation by the Michigan Department of Health
                    & Human Services.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Caregiver Availability
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Have a willing and able caregiver or be open to hiring one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caregiver Enrollment & CHAMPS Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden dark:bg-gradient-to-br dark:from-slate-500 dark:to-slate-500 ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#005F6B] bg-clip-text  dark:text-gray-100 mb-4">
                Who Can Be a Caregiver?
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto dark:text-gray-100">
                With the Home Help Program, you choose your caregiver.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Card - Classification */}
              <div className="md:col-span-2 bg-cyan-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        Personal Care Assistants (PCAs)
                      </h3>
                      <p className="text-white/80">
                        No license or certification required
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Caregivers are classified as Personal Care Assistants (PCAs)
                    and do not require professional licenses or certifications
                    to provide care services.
                  </p>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <p className="text-white font-semibold mb-2">
                      ✨ Key Benefit:
                    </p>
                    <p className="text-white/90">
                      Faster onboarding process with simplified requirements
                      while maintaining quality care standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tall Card - Age Requirement */}
              <div className="md:row-span-2 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Caregivers can be:
                  </h3>
                  <ul className=" ml-5 text-lg font-semibold space-y-2 text-gray-600">
                    <li className="flex  items-center gap-2">
                      {" "}
                      <CircleCheck size={20} color="#005F6B" /> A family member
                    </li>
                    <li className="flex  items-center gap-2">
                      {" "}
                      <CircleCheck size={20} color="#005F6B" />A friend
                    </li>
                    <li className="flex  items-center gap-2">
                      {" "}
                      <CircleCheck size={20} color="#005F6B" />A neighbor
                    </li>
                    <li className="flex  items-center gap-2">
                      {" "}
                      <CircleCheck size={20} color="#005F6B" />A neighbor
                    </li>
                    <li className="flex  items-center gap-2">
                      {" "}
                      <CircleCheck size={20} color="#005F6B" />
                      An adult child
                    </li>
                    <li className="flex  items-center gap-2">
                      {" "}
                      <CircleCheck size={20} color="#005F6B" />A sibling
                    </li>
                    <li className="flex  items-center gap-2">
                      {" "}
                      <CircleCheck size={20} color="#005F6B" />
                      In some cases, even a spouse
                    </li>
                  </ul>
                  <p className="mt-8 px-8 py-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    Yes — they get paid for the care they provide through
                    Medicaid.
                  </p>
                </div>
              </div>

              {/* Wide Card - Background Checks */}

              <div className="md:col-span-2 bg-cyan-600   rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group ">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                          <svg
                            className="w-7 h-7 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          Background & Exclusion Checks
                        </h3>
                      </div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        Clean background required. CHAMPS system runs automatic
                        background and exclusion checks. Caregivers must not be
                        excluded from state or federal programs.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
                          Clean Background
                        </span>
                        <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
                          CHAMPS Approved
                        </span>
                        <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
                          No Exclusions
                        </span>
                      </div>
                    </div>
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border-4 border-white/20">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-10">
              {/* Square Card - Multiple Agencies */}
              <div className="bg-white rounded-3xl p-8    shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Multiple Agencies
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Caregivers can work for multiple agencies
                  </p>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <p className="text-orange-900 text-sm font-semibold mb-1">
                      ⚠️ Important:
                    </p>
                    <p className="text-orange-800 text-sm">
                      Agencies must pay overtime, even if state doesn&apos;t
                      reimburse
                    </p>
                  </div>
                </div>
              </div>

              {/* Square Card - W2 Employees */}
              <div className="bg-green-700 rounded-3xl   p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    W2 Employment
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    All caregivers must be W2 employees
                  </p>
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                    <p className="text-white font-semibold mb-1">
                      ✓ Benefits Include:
                    </p>
                    <p className="text-white/90 text-sm">
                      Eligible for sick time and standard employee protections
                    </p>
                  </div>
                </div>
              </div>

              {/* Square Card - CHAMPS System */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 relative overflow-hidden group">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    CHAMPS System
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Automated verification system
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Background checks</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Exclusion verification</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Automatic processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Independence Section */}
      <div className="flex items-start gap-8  bg-blue-100/50 py-24 px-4 dark:bg-slate-500">
        <div className="flex-1 text-center">
          <p className="text-2xl lg:text-4xl font-medium text-[#005F6B] mb-6 dark:text-gray-100">
            Independence with Trusted,
            <br />
            Compassionate Care from Cottage Home Care Services
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto dark:text-gray-100">
            ’At Cottage Home Care Services, we believe that everyone deserves to
            live independently and comfortably in their own home. That’s why we
            are proud to offer the Michigan Home Help Program, a service funded
            by Michigan Medicaid that provides essential non-medical personal
            care and chore services for those who qualify.
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="py-16 lg:py-24 bg-[#005F6B]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-40">
            {/* Left Side - Title and Video */}
            <div>
              <p className="text-2xl lg:text-4xl font-bold text-white mb-4">
                Here&apos;s What Our
                <br />
                Clients Say About Us
              </p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-10 md:w-16 h-10 md:h-16 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-lg mb-8">
                Earning the confidence of the families we serve.
              </p>

              {/* Video Placeholder */}
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video ">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/7uoXudV9uas"
                  title="Maryland Home Health Stories"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right Side - Review Cards */}
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Review 1 */}
              <div className="bg-white rounded-xl p-6">
                <p className="text-gray-700 mb-4 md:leading-relaxed">
                  I can&apos;t say how much I appreciate Cottage Home Care
                  Services. The personnel went above and above to make sure my
                  mom was properly cared for. They truly took the time to learn
                  about her requirements and always treated her with respect and
                  decency. I highly recommend their services!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#005F6B] rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">John P.</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#f5a623]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-xl p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We&apos;ve been using Cottage Home Care Services for over a
                  year, and it&apos;s been great. The people who look after you
                  are professional, caring, and reliable. My dad is like family
                  to them, and they have made things so much easier for him and
                  us. We are very happy with the help they gave us!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#005F6B] rounded-full flex items-center justify-center text-white font-bold">
                    E
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emily T.</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#f5a623]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="col-span-1 bg-white rounded-xl p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  “Cottage Home Care Services is by far the best in the area.
                  During my father&apos;s recovery, the caregivers were very
                  professional and caring. I&apos;ve worked with other agencies
                  before, but none of them give as much care and attention as
                  Cottage Home Care does.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#005F6B] rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Michael H.</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#f5a623]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="col-span-1 bg-white rounded-xl p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Great service! I was worried about getting help for my elderly
                  grandmother, but Cottage Home Care Services has made me feel
                  completely at ease. They were so nice and patient, and my
                  grandma really looks forward to seeing them. Thank you so much
                  for your help!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#005F6B] rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah W.</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#f5a623]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* More Reviews Button */}
              {/* <div className="md:col-span-2 text-center pt-4">
                <button className="bg-white hover:bg-gray-100 text-[#005F6B] font-semibold py-3 px-8 rounded-full transition-colors duration-200">
                  More Reviews
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Image */}
            <div>
              <img
                src={"/assets/map.avif"}
                alt="Elderly man reading"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Right Side - FAQ */}
            <div>
              <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-8 dark:text-gray-100">
                Frequently Asked Questions
              </p>

              <div className="space-y-4">
                {/* Question 1 - Expanded */}
                <details className="group border-b border-gray-200 pb-4" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Can I trust Cottage Home Care Services with my loved one’s
                      care?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Absolutely! At Cottage Home Care Services, trust is at the
                    core of everything we do. All our caregivers undergo
                    thorough background checks, extensive training, and are
                    fully certified to ensure that they are not only skilled but
                    also compassionate and dependable. With over 25 years of
                    experience in the industry, we have earned the trust of
                    families throughout Michigan. We treat your loved one like
                    our own family, and our clients satisfaction speaks for
                    itself.
                  </div>
                </details>

                {/* Question 2 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Will Cottage Home Care Services be available if my loved
                      one’s care needs increase over time?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Yes, absolutely! We understand that care needs can change,
                    which is why we offer flexible care plans that can be
                    adjusted at any time. Whether your loved one needs more help
                    with daily tasks or a different kind of support, we are
                    always ready to adapt and meet those evolving needs. We
                    provide consistent, compassionate care no matter how long
                    the journey lasts, so you can rely on us for long-term
                    support.
                  </div>
                </details>

                {/* Question 3 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      What happens if I’m not happy with the service provided?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Your satisfaction is extremely important to us. If you’re
                    ever not completely satisfied with the service provided,
                    we’ll work with you directly to address your concerns and
                    make things right. We are dedicated to ensuring your loved
                    one receives the highest level of care, and we’ll do
                    everything we can to resolve any issues. Our goal is to
                    build lasting, trust-based relationships, and we’ll always
                    go the extra mile to make sure you’re happy with our
                    services.
                  </div>
                </details>

                {/* Question 4 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      How can Cottage Home Care Services help my family during
                      times of stress or emergency?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 leading-relaxed dark:text-gray-100 dark:text-gray-100">
                    At Cottage Home Care Services, we understand that family
                    members may need assistance during times of stress or
                    emergency. Whether your loved one is recovering from a
                    surgery, experiencing a health crisis, or you simply need
                    respite care, we are here to support you. We offer
                    immediate, flexible care services to provide the extra help
                    you need during tough times. Our team is always just a phone
                    call away, ready to provide care that fits the unique needs
                    of your family.
                  </div>
                </details>

                {/* Question 5 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Can Cottage Home Care Services help with both short-term
                      and long-term care?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Yes, we offer both short-term and long-term care services,
                    ensuring we meet your loved one’s needs regardless of the
                    duration of care required. Whether it&apos;s temporary help
                    during recovery or ongoing support for long-term conditions,
                    we’re here to provide the right level of care at the right
                    time. Our flexibility and dedication to your loved one’s
                    comfort mean that we can adjust services as their needs
                    change. Motivational Offer: Get started with a short-term
                    care plan today and discover how we can provide ongoing
                    support as your needs evolve
                  </div>
                </details>

                {/* Question 6 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Is Cottage Home Care Services affordable for families on a
                      budget?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Yes, we understand that affordability is important, which is
                    why we strive to provide affordable, high-quality care.
                    Through the Michigan Home Help Program, we offer
                    Medicaid-covered services, making it easier for families to
                    access care without breaking the bank. Additionally, we work
                    with you to ensure that care fits within your budget while
                    still delivering exceptional service. We’ll be happy to walk
                    you through your options to make sure we find a solution
                    that works for you and your family.
                  </div>
                </details>

                {/* Question 7 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Can Cottage Home Care Services help in all areas of
                      Michigan?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Yes, we proudly serve families throughout Michigan,
                    providing high-quality home care services across the state.
                    Whether you&apos;re in a major city or a rural area, we’re
                    committed to bringing compassionate, personalized care to
                    your loved one wherever they live. Our team is ready to
                    serve your family no matter where you are in Michigan! We
                    treat your family like our own, offering personalized care
                    that promotes independence, dignity, and peace of mind.
                  </div>
                </details>

                {/* Reviews 8 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Can I change my loved one’s care plan as their needs
                      change?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Of course! We understand that needs change over time, and we
                    believe care should be flexible. At Cottage Home Care
                    Services, you can adjust the care plan at any time. Whether
                    your loved one requires more assistance or fewer services,
                    we’ll work with you to update their care plan accordingly.
                    Your family’s comfort and peace of mind are our top
                    priority.
                  </div>
                </details>

                {/* Reviews 9 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Are your caregivers properly trained and qualified?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Absolutely! At Cottage Home Care Services, we believe in
                    only the highest standards of care. Our caregivers are
                    thoroughly trained, background-checked, and
                    Medicaid-certified. We take pride in our team’s dedication
                    and expertise. Each caregiver is selected not just for their
                    skill but for their compassion and commitment to making a
                    positive impact in the lives of those they care for. With
                    over 25 years of experience, we’ve built a reputation for
                    providing trusted care that families can count on.
                  </div>
                </details>

                {/* Reviews 10 */}
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      How do you ensure my loved one’s comfort and safety during
                      care?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform dark:text-gray-100">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed dark:text-gray-100">
                    Your loved one’s comfort and safety are our top priority. We
                    go above and beyond to make sure that care is delivered in a
                    safe, supportive, and compassionate environment. All of our
                    caregivers are trained in safety protocols, from fall
                    prevention to medication reminders and mobility assistance.
                    Additionally, we continuously monitor the quality of care,
                    so you can be assured that your loved one is receiving the
                    best possible service. We also take the time to listen to
                    your concerns and customize care plans to fit your loved
                    one’s specific needs, ensuring they feel respected and cared
                    for at all times.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Check Your Eligibility Section */}
      <section className="py-16 lg:py-40 bg-[#005F6B]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Check Your Eligibility
          </p>
          <p className="text-white text-lg mb-8">
            See if you qualify in just a few minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+(347) 975-2525"
              className="bg-white hover:bg-gray-100 text-[#005F6B] font-semibold py-3 px-8 rounded-full transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
            <button
              onClick={() => setOpen(true)}
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full border-2 border-white transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Apply Online
            </button>
          </div>
        </div>
      </section>

      {/* Serving Most Counties Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Map */}
            <div>
              <img
                src={"/assets/map.avif"}
                alt="Michigan service area map"
                className="w-full h-auto"
              />
            </div>

            {/* Right Side - Content */}
            <div>
              <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-6 dark:text-gray-100">
                Serving Most Counties
                <br />
                in Michigan
              </p>
              <p className="text-gray-700 leading-relaxed mb-12 dark:text-gray-100">
                Cottage Home Care Services is proud to offer compassionate,
                professional, and personalized care across Michigan, covering
                most counties. With our dedicated caregivers, we are committed
                to providing non-medical home care services that help
                individuals maintain their independence in the comfort of their
                own homes.
              </p>

              <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-6 dark:text-gray-100">
                Michigan Office
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#005F6B] flex-shrink-0 mt-1 dark:text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/400+Renaissance+Center+Suite+2600,+Detroit,+MI+48243,+USA/@42.3291208,-83.0426684,17z/data=!3m2!4b1!5s0x883b2d262341fc3b:0x881f184436b272d0!4m6!3m5!1s0x883b2d263e3e510d:0x2f8f9650c1b95211!8m2!3d42.3291169!4d-83.0400935!16s%2Fg%2F11svfk4s37?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                    >
                      <span className="text-gray-900 font-medium dark:text-gray-100">
                        400 Renaissance Ctr Ste 2600 Detroit,
                      </span>{" "}
                      <br />
                      <span className="text-gray-700 dark:text-gray-100">
                        MI 48243-1599 United State
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#005F6B] flex-shrink-0 dark:text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a
                    href="tel:2483270523"
                    className="text-gray-900 font-medium hover:text-[#005F6B] dark:text-gray-100 "
                  >
                    (347) 975-2525
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#005F6B] flex-shrink-0 dark:text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4C2.895 4 2 4.895 2 6v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l7.333 4.888c.195.13.435.13.63 0L20 8.489V18H4z" />
                  </svg>

                  <a
                    href="mailto:michigan@cottagehomecare.com"
                    className="text-gray-900 font-medium hover:text-[#005F6B] dark:text-gray-100 "
                  >
                    michigan@cottagehomecare.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Family or Friend CTA Section */}
      <EasierLife />

      <CareRequestModal open={open} setOpen={setOpen} />
    </main>
  );
}
