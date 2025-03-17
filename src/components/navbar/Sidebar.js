import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { MdDashboard, MdPersonAdd, MdPostAdd } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { FaFileSignature } from "react-icons/fa";

const Sidebar = ({ handleLogout }) => {
  const router = useRouter();

  // Check if route is active
  const isActive = (path) => router.pathname === path;

  return (
    <aside className="bg-[#EBF8F9] dark:bg-slate-800 text-gray-700 w-full h-full p-4 shadow-lg">
      <nav className="flex flex-col gap-y-3">
        <SidebarLink href="/" icon={<AiOutlineHome />} label="Home" />
        <SidebarLink
          href="/dashboard"
          icon={<MdDashboard />}
          label="Dashboard"
        />
        <SidebarLink
          href="/dashboard/add-employee"
          icon={<MdPersonAdd />}
          label="Add Employee"
        />

        <SidebarLink
          href="/dashboard/email-signature"
          icon={<FaFileSignature />}
          label="Generate Email Signature"
        />

        <SidebarLink
          href="/dashboard/general-request"
          icon={<LuFileSearch2 />}
          label="All General Request"
        />

        <SidebarLink
          href="/dashboard/pay-stub"
          icon={<LuFileSearch2 />}
          label="Pay Stub Access"
        />
        <SidebarLink
          href="/dashboard/pay-roll"
          icon={<LuFileSearch2 />}
          label="Pay Roll Queries"
        />
      </nav>
    </aside>
  );
};

// ✅ Sidebar Link Component for Reusability
const SidebarLink = ({ href, icon, label }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <div
        className={`flex items-center px-4 py-3 rounded-md text-lg font-medium cursor-pointer transition-all
          ${
            isActive
              ? "bg-gray-600 dark:bg-[#00A6B2] text-gray-100 "
              : "hover:bg-gray-700 hover:text-gray-100 dark:bg-slate-400 bg-slate-300 dark:text-white "
          }`}
      >
        <span className="mr-3 text-xl">{icon}</span>
        {label}
      </div>
    </Link>
  );
};

export default Sidebar;
