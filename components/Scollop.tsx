"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scollop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <FaArrowUp
      onClick={() => scrollToTop()}
      className={`lg:bottom-20 lg:right-20 bottom-10 right-10 bg-pp_avocado p-2 rounded-md fixed z-50 transition duration-500 ease-in-out bg-opacity-80 hover:cursor-pointer ${
        isVisible ? "translate-x-0" : "translate-x-40"
      }`}
      size={40}
      color="white"
    />
  );
};

export default Scollop;
