import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { MdDashboard, MdPersonAdd, MdPostAdd } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ handleLogout }) => {
  const router = useRouter();

  // Check if route is active
  const isActive = (path) => router.pathname === path;

  return (
    <aside className="bg-[#EBF8F9] dark:bg-slate-800 text-gray-700 w-full min-h-screen p-4 shadow-lg">
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
          href="/dashboard/add-blog"
          icon={<MdPostAdd />}
          label="Add Blog"
        />
        <SidebarLink
          href="/dashboard/add-blog"
          icon={<MdPostAdd />}
          label="Generate Email Signature"
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
              : "hover:bg-gray-700 hover:text-gray-100 dark:bg-slate-400 dark:text-white "
          }`}
      >
        <span className="mr-3 text-xl">{icon}</span>
        {label}
      </div>
    </Link>
  );
};

export default Sidebar;
