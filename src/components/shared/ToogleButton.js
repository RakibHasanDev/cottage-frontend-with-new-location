import React, { useContext } from "react";
import { MdBrightnessAuto, MdLightMode } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { ThemeContext } from "@/context/ThemeContext";

const ToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  if (theme === null) return null; // Prevent rendering until theme is loaded

  const options = [
    { icon: <MdLightMode />, text: "light" },
    { icon: <IoMoonSharp />, text: "dark" },
    { icon: <MdBrightnessAuto />, text: "system" },
  ];

  const toggleTheme = () => {
    setTheme((prev) => {
      const currentIndex = options.findIndex((opt) => opt.text === prev);
      const newTheme = options[(currentIndex + 1) % options.length].text;
      localStorage.setItem("theme", newTheme); // Persist in localStorage
      return newTheme;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center px-1 py-2 transition-all"
    >
      {/* Dynamic Circle */}
      <span
        className={`absolute w-5 h-5 rounded-full p-[3px] bg-white dark:bg-black flex justify-center items-center text-black dark:text-white transition-all ${
          theme === "dark"
            ? "translate-x-8"
            : theme === "system"
              ? "translate-x-4"
              : "translate-x-0"
        }`}
      >
        {options.find((opt) => opt.text === theme)?.icon}
      </span>
    </button>
  );
};

export default ToggleButton;
