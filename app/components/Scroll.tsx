"use client";

import React from "react";

const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="scroll"
      onClick={scrollToTop}
      role="button"
      aria-label="Scroll to top"
    />
  );
};

export default Scroll;
