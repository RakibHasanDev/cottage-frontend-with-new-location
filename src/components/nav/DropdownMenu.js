import React, { useState, useRef, useEffect, useContext } from "react";
import { BiMenu } from "react-icons/bi"; // Menu icon
import { MdLogin, MdLogout } from "react-icons/md";
import Link from "next/link";
import useAdmin from "@/hooks/useAdmin";
import { AuthContext } from "@/context/AuthProvider";
import { RiDashboardLine } from "react-icons/ri";

const DropdownMenu = ({ handleLogOut }) => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const dropdownRef = useRef(null); // Reference to dropdown

  const { user } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useAdmin(user?.email);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // ✅ Removed unnecessary dependency

  return (
    <div ref={dropdownRef} className="relative">
      {/* ✅ Fix: Ensure click event updates state correctly */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-4xl z-50 tracking-wide text-[#00A6B2] font-bold duration-200 bg-transparent outline-none cursor-pointer dark:text-gray-300 mt-1"
      >
        <BiMenu />
      </button>

      {/* ✅ Fix: Proper positioning for dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-52 z-5 p-2 py-4 space-y-2 shadow  z-[1] bg-slate-200 dark:text-gray-100 rounded-box dark:bg-slate-600 font-semibold league-spartan rounded-md">
          <div className="">
            {user?.uid ? (
              <>
                {/* ✅ User Info */}
                <div className="flex items-center gap-2 pl-2">
                  <img
                    src={user?.photoURL}
                    title={user?.displayName}
                    className="rounded-full w-10 h-10 object-cover border-[#00A6B2] border-[2px] p-[1px] dark:border-gray-100"
                    alt="user"
                  />
                  <p className="text-[#49465D] text-lg dark:text-gray-100">
                    {user?.displayName}
                  </p>
                </div>

                {/* ✅ Logout Button */}
                <button
                  className="w-full flex items-center gap-5 p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md text-[#49465D] dark:text-gray-100"
                  onClick={handleLogOut}
                >
                  <MdLogout />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                {/* ✅ Sign In Button */}
                <Link href="/login">
                  <button className="w-full flex items-center gap-5 p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md text-[#49465D] dark:text-gray-100">
                    <MdLogin />
                    Sign In
                  </button>
                </Link>
              </>
            )}

            {!isAdminLoading && isAdmin && user?.uid && (
              <ul>
                <li>
                  <Link href="/dashboard">
                    <button className="w-full flex items-center gap-5 p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md text-[#49465D] dark:text-gray-100">
                      <RiDashboardLine className="text-2xl" />
                      Dashboard
                    </button>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
