"use client";

import { useState } from "react";
import { BsCamera, BsSearch } from "react-icons/bs";
import { SearchModal } from "@/modules/home/presentation/components/SearchModal";

const searchWords = ["Images", "Videos", "Audio", "Prompts"];

export function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsSearchOpen(true)}
        className="relative z-30 w-full text-left"
      >
        <div className="flex h-12 w-full items-center rounded-2xl border border-white/10 bg-zinc-950 px-4 shadow-[0_0_25px_rgba(32,101,209,0.18)] transition hover:border-[#2065D1]/70 md:h-14">
          <BsSearch className="mr-3 shrink-0 text-lg text-[#2065D1] md:text-xl" />

          <div className="flex min-w-0 flex-1 items-center overflow-hidden text-white">
            <span className="mr-1 shrink-0 text-sm font-medium text-white/70 md:text-base">
              Search
            </span>

            <div className="search-word-container">
              {searchWords.map((word) => (
                <span key={word} className="search-word">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-3 h-7 w-px shrink-0 bg-white/10 md:mx-4 md:h-8" />

          <span className="shrink-0 text-xl text-[#2065D1] transition hover:text-white md:text-2xl">
            <BsCamera />
          </span>
        </div>
      </button>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}