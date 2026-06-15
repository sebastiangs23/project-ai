"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function TopOfferBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-9 w-full items-center justify-center bg-[#2065D1] px-10 text-sm font-semibold tracking-tight text-white transition-transform duration-300 ease-in-out md:text-base ${
        isClosing ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <span>Limited Offer – Free Week</span>

      <button
        type="button"
        aria-label="Close offer"
        onClick={handleClose}
        className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-xl text-white transition hover:bg-white/15"
      >
        <IoClose />
      </button>
    </div>
  );
}