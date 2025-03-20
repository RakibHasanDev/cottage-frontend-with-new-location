"use client"; // ✅ Ensure this runs only on the client side

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineHome } from "react-icons/ai";
import { MdDashboard, MdPersonAdd } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { FaFileSignature } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { ImBlog } from "react-icons/im";

const Sidebar = () => {
  const pathname = usePathname();

  // ✅ State for Unread Messages (Updates UI Immediately)
  const [unreadMessages, setUnreadMessages] = useState(() => {
    return Number(localStorage.getItem("dashBoardMessage")) || 0;
  });

  // ✅ Fetch User Messages Data (Chats API)
  const { data: chatData } = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://cottage-backend-voilerplate.vercel.app/chats"
      );
      return data.chats;
    },
    refetchInterval: 6000, // Refresh every 6 seconds
  });

  // ✅ Compute Unread User Messages
  useEffect(() => {
    if (!chatData) return;

    const lastMessageCount =
      JSON.parse(localStorage.getItem("lastMessageCount")) || {};
    const newMessageCount = {};

    chatData.forEach((chat) => {
      if (chat?.messages && !chat?.role) {
        newMessageCount[chat.userId] = (newMessageCount[chat.userId] || 0) + 1;
      }
    });

    const totalNewMessages = Object.keys(newMessageCount).reduce(
      (total, userId) => {
        const lastCount = lastMessageCount[userId] || 0;
        const currentCount = newMessageCount[userId];
        return (
          total + (currentCount > lastCount ? currentCount - lastCount : 0)
        );
      },
      0
    );

    if (totalNewMessages > 0) {
      toast.success(`You have ${totalNewMessages} new messages`);
      localStorage.setItem("dashBoardMessage", totalNewMessages);
    }

    localStorage.setItem("lastMessageCount", JSON.stringify(newMessageCount));
    setUnreadMessages(totalNewMessages); // ✅ Update UI
  }, [chatData]);

  // ✅ Clear Notification Count on Click
  const clearNotificationCount = () => {
    setUnreadMessages(0);
    localStorage.setItem("dashBoardMessage", "0");
  };

  const { data } = useQuery({
    queryKey: ["allChat"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://cottage-backend-voilerplate.vercel.app/helpDesk`
      );
      return data;
    },
    refetchInterval: 6000, // Refresh every 6 seconds
  });

  // ✅ Compute Remaining Notifications
  const requests = {};
  data?.forEach((request) => {
    const type = request.type;
    const review = request.review;

    if (!requests[type]) {
      requests[type] = { total: 0, reviewed: 0 };
    }

    requests[type].total++;
    if (review === "true") {
      requests[type].reviewed++;
    }
  });

  // ✅ Function to Get Remaining Count
  const getRemainingCount = (type) => {
    return requests[type]?.total - requests[type]?.reviewed || 0;
  };

  return (
    <aside className="bg-[#EBF8F9] dark:bg-slate-800 text-gray-700 w-full h-full p-4 shadow-lg">
      <nav className="flex flex-col gap-y-3">
        <SidebarLink
          href="/"
          icon={<AiOutlineHome />}
          label="Home"
          activePath={pathname}
        />
        <SidebarLink
          href="/dashboard"
          icon={<MdDashboard />}
          label="Dashboard"
          activePath={pathname}
        />

        {/* ✅ Fix: Clicking will instantly remove the number */}
        <SidebarLink
          href="/dashboard/all-form-submission-message"
          icon={<SiGooglemessages />}
          label="All Form Submission Message"
          count={unreadMessages}
          onClick={clearNotificationCount} // ✅ Fix: UI updates instantly
          activePath={pathname}
        />

        <SidebarLink
          href="/dashboard/add-employee"
          icon={<MdPersonAdd />}
          label="Add Employee"
          activePath={pathname}
        />

        <SidebarLink
          href="/dashboard/blog-form"
          icon={<ImBlog />}
          label="Add A Blog"
          activePath={pathname}
        />
        <SidebarLink
          href="/dashboard/email-signature"
          icon={<FaFileSignature />}
          label="Generate Email Signature"
          activePath={pathname}
        />
        <SidebarLink
          href="/dashboard/general-request"
          icon={<LuFileSearch2 />}
          label="All General Request"
          count={getRemainingCount("generalRequest")}
          activePath={pathname}
        />
        <SidebarLink
          href="/dashboard/pay-stub"
          icon={<LuFileSearch2 />}
          label="Pay Stub Access"
          count={getRemainingCount("payStub")}
          activePath={pathname}
        />
        <SidebarLink
          href="/dashboard/pay-roll"
          icon={<LuFileSearch2 />}
          label="Pay Roll Queries"
          count={getRemainingCount("payroll")}
          activePath={pathname}
        />
        <SidebarLink
          href="/dashboard/supplies"
          icon={<LuFileSearch2 />}
          label="Request Supplies"
          count={getRemainingCount("requestSupply")}
          activePath={pathname}
        />
        <SidebarLink
          href="/dashboard/all-pto"
          icon={<LuFileSearch2 />}
          label="PTO Request"
          count={getRemainingCount("requestPto")}
          activePath={pathname}
        />
      </nav>
    </aside>
  );
};

const SidebarLink = ({ href, icon, label, count, onClick }) => {
  const pathname = usePathname();

  let isActive = false;

  if (href === "/") {
    isActive = pathname === "/";
  } else if (href === "/dashboard") {
    isActive = pathname === "/dashboard" || pathname === "/dashboard/"; // ✅ Fixes the issue
  } else {
    isActive = pathname.startsWith(href); // ✅ Matches all other paths correctly
  }

  return (
    <Link href={href} onClick={onClick}>
      <div
        className={`flex items-center px-4 py-3 rounded-md text-lg font-medium cursor-pointer transition-all
          ${
            isActive
              ? "bg-[#00A6B2] text-white dark:bg-[#00A6B2] dark:text-white" // ✅ Active color
              : "hover:bg-gray-700 hover:text-gray-100 dark:bg-slate-400 bg-slate-300 dark:text-white"
          }`}
      >
        <span className="mr-3 text-xl">{icon}</span>
        <span>{label}</span>

        {/* ✅ Notification Badge (only if count > 0) */}
        {count > 0 && (
          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Sidebar;
