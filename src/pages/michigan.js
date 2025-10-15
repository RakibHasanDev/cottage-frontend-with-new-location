export default function App() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#005F6B] py-30 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight text-center">
            Cottage Home Care MI LLC:
            <br />
            Compassionate Home Care for Over 25 Years
          </h1>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Eligibility Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-8">
              Who is Eligible for
              <br />
              Medicaid Home Care?
            </h3>
          </div>

          {/* Eligibility Cards */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-40">
            {/* Qualify for Care Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl lg:text-4xl font-bold text-[#005F6B] text-center mb-6">
                Qualify for Care
              </h4>
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-6 md:w-10 h-6 md:h-10 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xl">
                    Actively enrolled in Medicaid
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-6 md:w-10 h-6 md:h-10 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xl">Michigan resident</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-6 md:w-10 h-6 md:h-10 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xl">
                    Need assistance with daily activities
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-6 md:w-10 h-6 md:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xl">
                    Married (unless spouse cannot provide care)
                  </p>
                </div>

                <div className="mt-6 pt-6">
                  <p className="text-sm text-gray-600 italic text-center">
                    By law, Medicare alone is not enough.
                  </p>
                </div>
              </div>
            </div>

            {/* Become a Caregiver Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] text-center mb-6">
                Become a Caregiver
              </p>
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-6 md:w-10 h-6 md:h-10 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xl">
                    Adult child of the person receiving care
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-6 md:w-10 h-6 md:h-10 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xl">
                    Friend or other relative of the person receiving care
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-6 md:w-10 h-6 md:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xl">
                    Spouse of the person receiving care
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-6 md:w-10 h-6 md:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xl">
                    Parent caring for a child under 18
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="container mx-auto text-center mt-10 px-4">
          *All eligibility requirements are determined by the state of Michigan.
          To accurately determine your eligibility please{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {" "}
            contact us
          </a>
          .
        </p>
      </section>

      {/* Caregiver Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] text-center mb-16">
            Caregiver Benefits
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-20 ">
            {/* Convenient Pay Options */}
            <div className="text-center">
              <div className="flex justify-center items-center w-[130px] mx-auto mb-6">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="69.79 48.5 397.166 439.75"
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="ugc"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="382.49"
                        x2="366.02"
                        y1="101.47"
                        x1="84.99"
                        id="55dce437-397e-446e-b4f9-44618fe64e0d_comp-m5x2lif24__item1"
                      >
                        <stop stop-color="#005F6B" offset="0"></stop>
                        <stop stop-color="#005F6B" offset="1"></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(45 341.483 362.777)"
                        y2="425.51"
                        x2="404.22"
                        y1="300.04"
                        x1="278.75"
                        id="12be28f7-24af-4aad-b9fb-44dcc49c011a_comp-m5x2lif24__item1"
                      >
                        <stop stop-color="#005F6B" offset="0"></stop>
                        <stop stop-color="#005F6B" offset="1"></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="385.92"
                        x2="364.32"
                        y1="339.83"
                        x1="318.24"
                        id="73e90095-dfda-4557-862f-e07aa081142e_comp-m5x2lif24__item1"
                      >
                        <stop stop-color="#005F6B" offset="0"></stop>
                        <stop stop-color="#005F6B" offset="1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M121.63 397.69c-28.58 0-51.84-23.26-51.84-51.84V138.11c0-28.58 23.26-51.84 51.84-51.84h4.82v-4.82c0-18.17 14.78-32.95 32.95-32.95h18.89c18.17 0 32.95 14.78 32.95 32.95v4.82h28.52v-4.82c0-18.17 14.78-32.95 32.95-32.95h18.89c18.17 0 32.95 14.78 32.95 32.95v4.82h4.82c28.58 0 51.84 23.26 51.84 51.84v207.74c0 28.58-23.26 51.84-51.84 51.84z"
                      fill="url(#55dce437-397e-446e-b4f9-44618fe64e0d_comp-m5x2lif24__item1)"
                    ></path>
                    <path
                      d="M93.31 345.85c0 15.64 12.69 28.33 28.33 28.33h207.74c15.64 0 28.33-12.69 28.33-28.33V185.32H93.31zm188.85-115.67c0-3.9 3.19-7.08 7.08-7.08h23.61c3.9 0 7.08 3.19 7.08 7.08v23.61c0 3.9-3.19 7.08-7.08 7.08h-23.61c-3.9 0-7.08-3.19-7.08-7.08zm0 75.54c0-3.9 3.19-7.08 7.08-7.08h23.61c3.9 0 7.08 3.19 7.08 7.08v23.61c0 3.9-3.19 7.08-7.08 7.08h-23.61c-3.9 0-7.08-3.19-7.08-7.08zm-75.54-75.54c0-3.9 3.19-7.08 7.08-7.08h23.61c3.9 0 7.08 3.19 7.08 7.08v23.61c0 3.9-3.19 7.08-7.08 7.08H213.7c-3.9 0-7.08-3.19-7.08-7.08zm0 75.54c0-3.9 3.19-7.08 7.08-7.08h23.61c3.9 0 7.08 3.19 7.08 7.08v23.61c0 3.9-3.19 7.08-7.08 7.08H213.7c-3.9 0-7.08-3.19-7.08-7.08zm-75.54-75.54c0-3.9 3.19-7.08 7.08-7.08h23.61c3.9 0 7.08 3.19 7.08 7.08v23.61c0 3.9-3.19 7.08-7.08 7.08h-23.61c-3.9 0-7.08-3.19-7.08-7.08zm0 75.54c0-3.9 3.19-7.08 7.08-7.08h23.61c3.9 0 7.08 3.19 7.08 7.08v23.61c0 3.9-3.19 7.08-7.08 7.08h-23.61c-3.9 0-7.08-3.19-7.08-7.08zm198.3-195.94h-28.33V81.45c0-5.19-4.25-9.44-9.44-9.44h-18.89c-5.19 0-9.44 4.25-9.44 9.44v28.33h-75.54V81.45c0-5.19-4.25-9.44-9.44-9.44h-18.89c-5.19 0-9.44 4.25-9.44 9.44v28.33h-28.33c-15.64 0-28.33 12.69-28.33 28.33v28.33h264.4v-28.33c0-15.64-12.69-28.33-28.33-28.33"
                      fill="#ffffff"
                    ></path>
                    <path
                      transform="rotate(-45 341.485 362.772)"
                      fill="url(#12be28f7-24af-4aad-b9fb-44dcc49c011a_comp-m5x2lif24__item1)"
                      d="M430.2 362.78c0 48.999-39.721 88.72-88.72 88.72s-88.72-39.721-88.72-88.72 39.721-88.72 88.72-88.72 88.72 39.721 88.72 88.72"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M402.76 362.76c0 33.827-27.423 61.25-61.25 61.25s-61.25-27.423-61.25-61.25 27.423-61.25 61.25-61.25 61.25 27.423 61.25 61.25"
                    ></path>
                    <path
                      d="M363.28 386.13c-1.67 2.87-4.13 5.23-7.37 7.09-3.25 1.86-7.08 2.95-11.49 3.26v7.66h-6.05v-7.75c-6.3-.57-11.38-2.47-15.22-5.72s-5.83-7.64-5.96-13.19h14.18c.38 4.54 2.71 7.28 7 8.22v-18.06c-4.54-1.13-8.19-2.27-10.97-3.4-2.77-1.13-5.17-2.96-7.19-5.48s-3.03-5.96-3.03-10.3c0-5.48 1.97-9.96 5.91-13.42 3.94-3.47 9.03-5.45 15.27-5.96v-7.66h6.05v7.66c6.05.51 10.89 2.33 14.51 5.48s5.66 7.5 6.1 13.05h-14.28c-.19-1.83-.84-3.42-1.94-4.77s-2.57-2.32-4.4-2.88v17.87c4.73 1.2 8.46 2.35 11.2 3.45s5.12 2.9 7.14 5.39 3.02 5.91 3.02 10.26c0 3.28-.84 6.35-2.5 9.22Zm-30.4-33.28c1.26 1.29 3.09 2.35 5.48 3.17v-16.36c-2.27.32-4.06 1.17-5.39 2.55-1.32 1.39-1.99 3.25-1.99 5.58 0 2.08.63 3.77 1.89 5.06Zm17.16 30.11c1.35-1.51 2.03-3.34 2.03-5.48s-.66-3.75-1.99-5.01q-1.98-1.89-5.67-3.12v16.54c2.39-.44 4.27-1.42 5.63-2.93"
                      fill="url(#73e90095-dfda-4557-862f-e07aa081142e_comp-m5x2lif24__item1)"
                    ></path>
                  </g>
                </svg>
              </div>
              <p className="text-2xl font-bold text-[#005F6B] mb-3">
                Convenient Pay Options
              </p>
              <p className="text-gray-700 leading-relaxed">
                Enjoy flexible, weekly pay straight to your bank or on a
                convenient pay card.
              </p>
            </div>

            {/* Free Resource Tools */}
            <div className="text-center">
              <div className="flex justify-center mb-6 w-[130px] mx-auto">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="77.852 32.99 344.284 434.023"
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="ugc"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="70.05"
                        x2="308.54"
                        y1="70.05"
                        x1="215.2"
                        id="f1c3dbbd-d5e2-424e-ab97-f453142ced34_comp-m5x2lif24__item-j9ples3e"
                      >
                        <stop stop-color="#005F6B" offset="0"></stop>
                        <stop stop-color="#005F6B" offset="1"></stop>
                      </linearGradient>
                      <linearGradient
                        href="#f1c3dbbd-d5e2-424e-ab97-f453142ced34_comp-m5x2lif24__item-j9ples3e"
                        y2="268.59"
                        x2="301.61"
                        y1="187.85"
                        x1="220.87"
                        id="585bcffb-7bff-4a03-a5a8-738ca55c1876_comp-m5x2lif24__item-j9ples3e"
                      ></linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="397.27"
                        x2="383.17"
                        y1="100.3"
                        x1="86.2"
                        id="e7addebf-2c7f-4c4a-91bf-c2a2a6f1c010_comp-m5x2lif24__item-j9ples3e"
                      >
                        <stop stop-color="#005F6B" offset="0"></stop>
                        <stop stop-color="#005F6B" offset="1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M356.43 51.67H166.75c-7.39 0-13.4 6.01-13.4 13.4v148.24c9.51-3.3 19.48-3.15 27.83.73 18.15 8.43 23.23 30.38 20.28 47.21-1.82 10.34-5.91 19.6-9.86 28.56-2.02 4.58-3.93 8.91-5.53 13.31-10.48 28.96-5.08 63.1 11.78 89.22.7-.16 1.41-.28 2.16-.28h156.42c7.39 0 13.4-6.01 13.4-13.4V65.07c0-7.39-6.01-13.4-13.4-13.4m-56.66 217.3c-2.93 5.02-7.23 9.17-12.92 12.42-5.69 3.26-12.4 5.16-20.13 5.71v13.41h-10.6v-13.58c-11.04-1-19.93-4.33-26.67-10.02s-10.22-13.39-10.44-23.11h24.85c.66 7.95 4.75 12.76 12.26 14.41v-31.64c-7.95-1.99-14.36-3.97-19.22-5.96s-9.06-5.19-12.59-9.61c-3.54-4.42-5.3-10.43-5.3-18.05q0-14.415 10.35-23.52c6.9-6.07 15.82-9.55 26.75-10.44v-13.42h10.6v13.42c10.6.89 19.08 4.09 25.43 9.61q9.525 8.28 10.68 22.86h-25.01c-.33-3.2-1.46-5.99-3.4-8.37-1.93-2.37-4.5-4.06-7.7-5.05v31.31c8.28 2.1 14.83 4.12 19.63 6.05s8.97 5.08 12.51 9.44c3.53 4.36 5.3 10.35 5.3 17.97 0 5.74-1.46 11.13-4.39 16.15Zm-.56-189.59h-74.67c-5.15 0-9.33-4.18-9.33-9.33s4.18-9.33 9.33-9.33h74.67c5.15 0 9.33 4.18 9.33 9.33s-4.18 9.33-9.33 9.33"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M266.73 239.56v28.99c4.2-.77 7.48-2.48 9.86-5.14 2.37-2.65 3.56-5.85 3.56-9.61s-1.16-6.57-3.48-8.78-5.63-4.03-9.94-5.47Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M113.23 256.29c5.86-10.58 12.31-22.17 21.46-31.1v-79.36c-19.15 33.39-26.96 73.02-21.94 111.3.16-.29.32-.56.48-.85Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M223.74 419.33c4.67 3.18 5.54 9.84 1.52 14.14-3.14 3.37-8.5 3.71-12.3 1.11-43.1-29.55-62.2-88.73-44.44-137.8 1.81-5 3.94-9.83 6-14.49 3.67-8.31 7.13-16.16 8.55-24.26 1.78-10.09-1.04-23.01-9.76-27.05-5.07-2.36-12.1-1.6-18.34 1.97-10.96 6.27-18.31 19.55-25.42 32.39-1.76 3.17-3.48 6.29-5.22 9.24-10.45 17.69-18.11 37.14-22.76 57.81-9.18 40.78-5.76 78.92 9.57 115.69H292.8c1.93 0 3.49-1.56 3.49-3.49v-33.83h-83.14c3.32 3.11 6.82 6.02 10.59 8.59Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M243.21 201.8c0 3.64 1.1 6.6 3.31 8.86 2.21 2.27 5.41 4.12 9.61 5.55v-28.66c-3.98.56-7.12 2.05-9.44 4.47-2.32 2.43-3.48 5.69-3.48 9.77Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M399.16 113.04c-2.38-1.84-6.45-3.33-10.66-3.51v40.69c3.84-4.79 7.22-9.76 10.1-14.86 2.17-3.84 4.68-8.82 4.86-13.31.1-2.52-.56-6.13-4.3-9.01"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M399.16 248.38c-1.92-1.48-4.94-2.73-8.25-3.26-.82.8-1.57 1.62-2.42 2.41v38.04c3.84-4.79 7.22-9.76 10.1-14.86 2.17-3.84 4.68-8.82 4.86-13.31.1-2.52-.56-6.13-4.3-9.01Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M399.16 183.05c-2.38-1.83-6.45-3.33-10.66-3.51v40.69c3.84-4.79 7.22-9.76 10.1-14.86 2.17-3.84 4.68-8.82 4.86-13.31.1-2.52-.56-6.13-4.3-9.01"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M299.21 60.72h-74.67c-5.15 0-9.33 4.18-9.33 9.33s4.18 9.33 9.33 9.33h74.67c5.15 0 9.33-4.18 9.33-9.33s-4.18-9.33-9.33-9.33"
                      fill="url(#f1c3dbbd-d5e2-424e-ab97-f453142ced34_comp-m5x2lif24__item-j9ples3e)"
                    ></path>
                    <path
                      d="M286.36 225.4c-4.8-1.93-11.35-3.95-19.63-6.05v-31.31c3.2 1 5.77 2.68 7.7 5.05s3.06 5.16 3.4 8.37h25.01q-1.155-14.58-10.68-22.86c-6.35-5.52-14.83-8.72-25.43-9.61v-13.42h-10.6v13.42c-10.93.89-19.85 4.36-26.75 10.44s-10.35 13.91-10.35 23.52c0 7.62 1.77 13.64 5.3 18.05 3.53 4.42 7.73 7.62 12.59 9.61s11.26 3.97 19.22 5.96v31.64c-7.51-1.65-11.6-6.46-12.26-14.41h-24.85c.22 9.72 3.7 17.42 10.44 23.11q10.11 8.535 26.67 10.02v13.58h10.6V287.1c7.73-.56 14.44-2.46 20.13-5.71 5.69-3.26 9.99-7.4 12.92-12.42s4.39-10.41 4.39-16.15c0-7.62-1.77-13.61-5.3-17.97s-7.7-7.51-12.51-9.44Zm-30.23-9.19c-4.2-1.43-7.4-3.28-9.61-5.55-2.21-2.26-3.31-5.22-3.31-8.86 0-4.09 1.16-7.34 3.48-9.77s5.47-3.92 9.44-4.47v28.66Zm20.45 47.21c-2.38 2.65-5.66 4.37-9.86 5.14v-28.99c4.31 1.44 7.62 3.26 9.94 5.47s3.48 5.13 3.48 8.78-1.19 6.96-3.56 9.61Z"
                      fill="url(#585bcffb-7bff-4a03-a5a8-738ca55c1876_comp-m5x2lif24__item-j9ples3e)"
                    ></path>
                    <path
                      d="M422.11 122.82c.4-9.64-3.81-18.59-11.55-24.56-5.96-4.6-14.09-7.17-22.06-7.35V65.06c0-17.68-14.39-32.07-32.07-32.07H166.75c-17.68 0-32.07 14.39-32.07 32.07v51.03c-2.05.51-3.95 1.68-5.28 3.53-33.27 45.85-44.91 106.16-31.12 161.33.16.64.4 1.23.67 1.8a221 221 0 0 0-15.6 45.53c-2.45 10.87-4.14 21.92-4.95 33.03-1.38 18.87-.16 37.9 3.74 56.42 1.95 9.27 4.56 18.39 7.77 27.31 1.54 4.28 3.2 8.55 4.93 12.76 1.47 3.56 4.33 7.16 7.98 8.62 2.77 1.11 7.13.32 10.08.32h184.4c2.19 0 4.37 0 6.56-.03.57.11 1.15.18 1.75.18 5.15 0 9.33-4.18 9.33-9.33v-46.8h41.47c17.68 0 32.07-14.39 32.07-32.07v-65.81c10.82-10.09 19.7-21.19 26.36-32.99 3.19-5.66 6.9-13.25 7.25-21.72.4-9.64-3.81-18.59-11.55-24.56-1.83-1.41-3.89-2.6-6.07-3.63 3.86-4.99 7.37-10.13 10.36-15.43 3.19-5.66 6.9-13.25 7.25-21.72.4-9.64-3.81-18.59-11.55-24.56-2.6-2-5.63-3.58-8.86-4.79 5.02-6.07 9.46-12.38 13.15-18.93 3.19-5.66 6.9-13.25 7.25-21.72Zm-287.42 23.01v79.36c-9.15 8.93-15.6 20.52-21.46 31.1-.16.29-.32.56-.48.85-5.02-38.28 2.79-77.91 21.94-111.3Zm161.6 298.74c0 1.93-1.56 3.49-3.49 3.49H111.15c-15.33-36.77-18.75-74.91-9.57-115.69 4.65-20.67 12.31-40.11 22.76-57.81 1.74-2.95 3.47-6.06 5.22-9.24 7.11-12.85 14.46-26.13 25.42-32.39 6.25-3.57 13.28-4.32 18.34-1.97 8.71 4.05 11.53 16.96 9.76 27.05-1.42 8.1-4.89 15.95-8.55 24.26-2.06 4.66-4.19 9.49-6 14.49-17.76 49.07 1.34 108.25 44.44 137.8 3.8 2.6 9.15 2.26 12.3-1.11a9.345 9.345 0 0 0-1.52-14.14c-3.76-2.56-7.26-5.48-10.59-8.59h83.14v33.83Zm73.54-65.89c0 7.39-6.01 13.4-13.4 13.4H200.01c-.75 0-1.46.11-2.16.28-16.86-26.12-22.27-60.26-11.78-89.22 1.6-4.4 3.5-8.73 5.53-13.31 3.96-8.96 8.04-18.23 9.86-28.56 2.96-16.83-2.13-38.78-20.28-47.21-8.35-3.88-18.32-4.03-27.83-.73V65.07c0-7.39 6.01-13.4 13.4-13.4h189.68c7.39 0 13.4 6.01 13.4 13.4zM398.6 270.7c-2.88 5.1-6.25 10.07-10.1 14.86v-38.04c.84-.78 1.6-1.61 2.42-2.41 3.3.53 6.33 1.78 8.25 3.26 3.74 2.88 4.4 6.49 4.3 9.01-.19 4.49-2.7 9.47-4.86 13.31Zm4.86-78.64c-.19 4.49-2.7 9.47-4.86 13.31-2.88 5.1-6.25 10.07-10.1 14.86v-40.69c4.21.18 8.28 1.67 10.66 3.51 3.74 2.88 4.4 6.49 4.3 9.01m-4.86-56.69c-2.88 5.1-6.25 10.07-10.1 14.86v-40.69c4.21.18 8.28 1.67 10.66 3.51 3.74 2.88 4.4 6.49 4.3 9.01-.19 4.49-2.7 9.47-4.86 13.31"
                      fill="url(#e7addebf-2c7f-4c4a-91bf-c2a2a6f1c010_comp-m5x2lif24__item-j9ples3e)"
                    ></path>
                  </g>
                </svg>
              </div>
              <p className="text-2xl font-bold text-[#005F6B] mb-3">
                Free Resource Tools
              </p>
              <p className="text-gray-700 leading-relaxed">
                Access emergency funds, credit solutions, and tools to help you
                achieve your financial goals.
              </p>
            </div>

            {/* Affordable Benefits and Discounts */}
            <div className="text-center">
              <div className="flex justify-center mb-6 w-[130px] mx-auto">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="54.66 47 390.7 406.03"
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="ugc"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="340.81"
                        x2="331.73"
                        y1="160.74"
                        x1="151.67"
                        id="d30b0811-5776-4f94-a643-d11ee01c602c_comp-m5x2lif24__item-j9plerjk"
                      >
                        <stop stop-color="#005F6B" offset="0"></stop>
                        <stop stop-color="#005F6B" offset="1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M445.34 165.38C445.34 100.1 392.23 47 326.96 47c-60.22 0-110.04 45.2-117.4 103.45-4.55-8.18-13.23-13.53-23.12-13.53-1.36 0-2.74.11-4.13.32-14.42 2.28-24.29 15.87-22 30.4l4.23 25.93a21.15 21.15 0 0 0-12.36 14.06l-20.25 75.52c-1.95-.58-3.96-.96-5.98-.96-5.41 0-10.81 2.06-14.94 6.19l-50.16 50.16c-3.96 3.96-6.19 9.34-6.19 14.94s2.23 10.98 6.19 14.94l5.74 5.75-6.33 10.59a21.13 21.13 0 0 0 3.19 25.78l25.35 25.35c4.07 4.07 9.48 6.19 14.95 6.19 3.72 0 7.47-.98 10.84-3l10.59-6.33 5.74 5.74c3.96 3.96 9.34 6.19 14.94 6.19s10.98-2.23 14.94-6.19l3.74-3.74 37.8 16.51c2.72 1.19 5.6 1.77 8.45 1.77 5.51 0 10.92-2.15 14.97-6.22l22.29-22.36c4.92-4.94 7.09-12 5.79-18.85s-5.9-12.62-12.29-15.42l-25.29-11.07c1.08-3.84 1.05-7.88-.07-11.7l75.52-20.25a21.14 21.14 0 0 0 14.94-14.94c.52-1.94.73-3.92.7-5.88 10.6-.21 22.85-.46 22.85-.46 14.51-.37 25.87-12.04 25.87-26.56 0-6.81-2.66-12.96-6.91-17.65 54.71-10.42 96.2-58.57 96.2-116.27Z"
                      fill="url(#d30b0811-5776-4f94-a643-d11ee01c602c_comp-m5x2lif24__item-j9plerjk)"
                    ></path>
                    <path
                      d="m125.94 303.3-50.16 50.16 70.07 70.07 50.16-50.16zm18.46 89.13c-1.07 1.07-2.45 1.53-3.75 1.53-1.38 0-2.76-.54-3.83-1.61l-29.94-29.94c-2.07-2.07-2.07-5.51 0-7.58s5.51-2.07 7.58 0l29.94 29.94c2.07 2.22 2.07 5.59 0 7.66"
                      fill="#ffffff"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="m146.85 309.04 43.42 43.42 95.95-25.73-113.64-113.64z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="m78.39 395.57 25.35 25.35 15.23-9.11-31.47-31.48z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="m170.28 414.18 40.51 17.69 22.29-22.36-40.44-17.69z"
                    ></path>
                    <path
                      d="M186.9 199.46c.46 2.6 2.68 4.52 5.28 4.52.31 0 .61 0 .84-.08 2.91-.46 4.9-3.22 4.44-6.13l-5.74-35.23c-.46-2.91-3.22-4.9-6.13-4.44s-4.9 3.22-4.44 6.13l5.74 35.23Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="m329.49 294.02-37.52.77c-2.99.08-5.28 2.53-5.28 5.44.08 2.91 2.45 5.28 5.36 5.28h.08l37.52-.77c2.99-.08 5.28-2.53 5.28-5.44s-2.45-5.36-5.44-5.28"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M341.17 196.15v12.81c0 3.78 2.33 7.26 5.92 8.44 6.03 1.98 11.69-2.57 11.69-8.34v-13.01c0-5.66-5.29-9.98-11.08-8.52-3.89.98-6.53 4.61-6.53 8.62"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M312.07 134.69v-12.81c0-3.78-2.33-7.26-5.92-8.44-6.03-1.98-11.69 2.57-11.69 8.34v13.01c.09 5.73 5.56 10.26 11.59 8.37 3.64-1.14 6.03-4.65 6.03-8.47Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M326.96 68.13c-53.68 0-97.25 43.57-97.25 97.25 0 20.29 6.2 39.13 16.85 54.68l-11.64 28.33 30.25-7.96a96.82 96.82 0 0 0 61.8 22.21c53.68 0 97.25-43.57 97.25-97.25s-43.57-97.25-97.25-97.25Zm-42.46 53.7c0-10.73 8.72-19.53 19.53-19.53s19.53 8.72 19.53 19.53v12.89c0 10.73-8.72 19.53-19.53 19.53s-19.53-8.72-19.53-19.53zm14.66 97c-1 1.61-2.76 2.45-4.52 2.45-1 0-1.99-.31-2.91-.84-2.53-1.61-3.22-4.9-1.61-7.43l64.56-101.16c1.61-2.53 4.9-3.22 7.43-1.61s3.22 4.9 1.61 7.43zm70.34-9.9c0 12.09-11.08 21.73-23.73 19.09-8.47-1.77-15.33-10.64-15.33-19.3v-12.68c0-12.09 11.08-21.73 23.73-19.09 8.47 1.77 15.33 10.64 15.33 19.3z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </div>
              <p className="text-2xl font-bold text-[#005F6B] mb-3">
                Affordable Benefits and Discounts
              </p>
              <p className="text-gray-700 leading-relaxed">
                Access valuable benefits, deals, and discounts that can help you
                live a happier, healthier life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 lg:py-30 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative grid lg:grid-cols-2 gap-16 lg:gap-40 items-start">
            {/* Left Side - Text */}
            <div className="md:sticky top-0 left-0">
              <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-6">
                Compassionate Home Care for Over 25 Years
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Cottage Home Care MI LLC, we believe every person deserves to
                live with dignity and comfort in their own home. With over 25
                years of experience, our team provides personalized care
                tailored to your needs, backed by trust, compassion, and
                unwavering dedication. We take pride in our role as Michigan’s
                trusted provider of non-medical home care services, ensuring
                every client receives the support they deserve.
              </p>
            </div>

            {/* Right Side - Cards */}
            <div className="space-y-6">
              {/* People First Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={"/assets/commitment1.avif"}
                  alt="Two elderly women smiling"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-2xl font-bold text-[#005F6B] mb-3">
                    People First
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Your well-being comes before anything else. We want to help
                    you find comfort and freedom.
                  </p>
                </div>
              </div>

              {/* Family-Focused Care Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={"/assets/commitment1.avif"}
                  alt="Multi-generational family"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-2xl font-bold text-[#005F6B] mb-3">
                    Family-Focused Care
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As a family-run organization, we&apos;re driven by a
                    commitment to empower families through meaningful support.
                  </p>
                </div>
              </div>
              {/* Family-Focused Care Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={"/assets/commitment1.avif"}
                  alt="Multi-generational family"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-2xl font-bold text-[#005F6B] mb-3">
                    Family-Focused Care
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As a family-run organization, we&apos;re driven by a
                    commitment to empower families through meaningful support.
                  </p>
                </div>
              </div>
              {/* Family-Focused Care Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={"/assets/commitment1.avif"}
                  alt="Multi-generational family"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-2xl font-bold text-[#005F6B] mb-3">
                    Family-Focused Care
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As a family-run organization, we&apos;re driven by a
                    commitment to empower families through meaningful support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Independence Section */}
      <div className="flex items-start gap-8  bg-blue-100/50 py-24 px-4">
        <div className="flex-1 text-center">
          <p className="text-2xl lg:text-4xl font-medium text-[#005F6B] mb-6">
            Independence with Trusted,
            <br />
            Compassionate Care from Cottage Home Care Services
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
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
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="BURD Home Health Stories"
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
      <section className="py-16 lg:py-24 bg-white">
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
              <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-8">
                Frequently Asked Questions
              </p>

              <div className="space-y-4">
                {/* Question 1 - Expanded */}
                <details className="group border-b border-gray-200 pb-4" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900">
                      Can I trust Cottage Home Care Services with my loved one’s
                      care?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      Will Cottage Home Care Services be available if my loved
                      one’s care needs increase over time?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      What happens if I’m not happy with the service provided?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      How can Cottage Home Care Services help my family during
                      times of stress or emergency?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      Can Cottage Home Care Services help with both short-term
                      and long-term care?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      Is Cottage Home Care Services affordable for families on a
                      budget?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      Can Cottage Home Care Services help in all areas of
                      Michigan?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      Can I change my loved one’s care plan as their needs
                      change?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      Are your caregivers properly trained and qualified?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
                    <span className="text-lg font-semibold text-gray-900">
                      How do you ensure my loved one’s comfort and safety during
                      care?
                    </span>
                    <span className="text-[#005F6B] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
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
            <button className="bg-white hover:bg-gray-100 text-[#005F6B] font-semibold py-3 px-8 rounded-full transition-colors duration-200 flex items-center gap-2">
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
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full border-2 border-white transition-colors duration-200 flex items-center gap-2">
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

      {/* Meet the Michigan Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] text-center mb-16">
            Meet the Michigan Team
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Stacey Denardo */}
            <div className="">
              <div className="mb-6">
                <img
                  src={"/assets/michigan-about-hero.webp"}
                  alt="Stacey Denardo"
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#005F6B] mb-1">
                STACEY DENARDO
              </p>
              <p className="text-gray-700 uppercase text-sm tracking-wide">
                Relationship Manager
              </p>
            </div>

            {/* Kyle Burdick */}
            <div className="">
              <div className="mb-6">
                <img
                  src={"/assets/michigan-about-hero.webp"}
                  alt="Kyle Burdick"
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#005F6B] mb-1">
                KYLE BURDICK
              </p>
              <p className="text-gray-700 uppercase text-sm tracking-wide">
                Relationship Manager
              </p>
            </div>

            {/* Rodney Burdick */}
            <div className="">
              <div className="mb-6">
                <img
                  src={"/assets/michigan-about-hero.webp"}
                  alt="Rodney Burdick"
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#005F6B] mb-1">
                RODNEY BURDICK
              </p>
              <p className="text-gray-700 uppercase text-sm tracking-wide">
                Relationship Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Most Counties Section */}
      <section className="py-16 lg:py-24 bg-white">
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
              <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-6">
                Serving Most Counties
                <br />
                in Michigan
              </p>
              <p className="text-gray-700 leading-relaxed mb-12">
                Cottage Home Care Services is proud to offer compassionate,
                professional, and personalized care across Michigan, covering
                most counties. With our dedicated caregivers, we are committed
                to providing non-medical home care services that help
                individuals maintain their independence in the comfort of their
                own homes.
              </p>

              <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-6">
                Michigan Office
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#005F6B] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-medium">
                      400 Renaissance Ctr Ste 2600 Detroit,
                    </p>
                    <p className="text-gray-700">MI 48243-1599 United State</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#005F6B] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a
                    href="tel:2483270523"
                    className="text-gray-900 font-medium hover:text-[#005F6B]"
                  >
                    (347) 975-2525
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Family or Friend CTA Section */}
      <section className="py-16 lg:py-40 bg-[#e8f4fd]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl lg:text-4xl font-bold text-[#005F6B] mb-8 leading-tight">
            Hire Family or Friend as a
            <br />
            Caregiver in Michigan
          </p>
          <button className="bg-white hover:bg-gray-50 text-[#005F6B] font-semibold py-3 px-8 rounded-full  transition-colors duration-200">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
