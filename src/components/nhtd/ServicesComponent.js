"use client"; // Ensure it's a Client Component

import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ServicesComponent = () => {
  const pathname = usePathname(); // ✅ Call hook at the top level

  const allServices = [
    {
      servicesName: "CDPAP",
      path: "cdpap",
    },
    {
      servicesName: "HHA/PCA",
      path: "hha",
    },
    {
      servicesName: "NHTD",
      path: "nhtd",
    },
    {
      servicesName: "PrivatePay",
      path: "personal-pay-service",
    },
  ];

  return (
    <div>
      {allServices?.map((service, index) => (
        <Link
          key={index}
          href={`/${service?.path}`}
          className={`flex items-center gap-1 px-3 py-2.5 rounded-md shadow-lg my-3 ${
            pathname === `/${service?.path}`
              ? "bg-[#00A6B2] text-white"
              : "bg-white hover:bg-[#00A6B2] hover:text-white"
          }`}
        >
          <IoIosArrowForward className="font-semibold text-xl" />{" "}
          {service?.servicesName}
        </Link>
      ))}
    </div>
  );
};

export default ServicesComponent;
