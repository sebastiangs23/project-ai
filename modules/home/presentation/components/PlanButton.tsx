"use client";

import Image from "next/image";
import star from "@/public/star.png";

const words = [
  { label: "View Plans", className: "text-white" },
  { label: "40% Off", className: "text-[#4BA3FF]" },
  { label: "Started", className: "text-[#4BA3FF]" },
  { label: "Premium", className: "text-[#4BA3FF]" },
];

export function PlanButton() {
  return (
    <button
      type="button"
      className="plan-button md:w-[250px] hidden items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-extrabold sm:flex"
    >
      <span className="plan-word-container">
        {words.map((word) => (
          <span key={word.label} className={`plan-word ${word.className}`}>
            {word.label}
          </span>
        ))}
      </span>

      <Image
        src={star}
        alt="Star"
        width={20}
        height={20}
        className="h-5 w-5 rounded-full"
      />
    </button>
  );
}