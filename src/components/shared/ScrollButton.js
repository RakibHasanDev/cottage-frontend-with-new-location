"use client"; // Needed if using Next.js App Router (v13+)

import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import styled from "styled-components";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const toggleVisible = () => {
      if (window.scrollY > 2000) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button visible={visible} onClick={scrollToTop}>
      <MdOutlineKeyboardDoubleArrowUp className="h-7 w-7 md:h-9 md:w-10 md:p-2 text-white bg-[#00A6B2] shadow-lg  cursor-pointer " />
    </Button>
  );
};

export default ScrollButton;

// ✅ Styled-components for styling
const Button = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 900;
  display: ${({ visible }) => (visible ? "block" : "none")};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
