"use client";

import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 2000);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-5 left-5 z-[900] transition-opacity duration-300 hover:opacity-80 ${
        visible ? "block" : "hidden"
      }`}
    >
      <MdOutlineKeyboardDoubleArrowUp className="h-7 w-7 md:h-9 md:w-10 md:p-2 text-white bg-[#00A6B2] shadow-lg cursor-pointer" />
    </div>
  );
};

export default ScrollButton;
