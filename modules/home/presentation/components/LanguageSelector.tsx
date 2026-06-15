"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
// import { useLanguage } from "@/modules/home/presentation/hooks/useLanguage";
import { useLanguage } from "@/modules/home/presentation/context/LanguageContext";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { languages, selectedLanguage, changeLanguage } = useLanguage();

  const SelectedFlag = selectedLanguage.FlagIcon;

  return (
    <div className="relative hidden shrink-0 xl:block">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 text-xs font-bold text-white transition hover:bg-zinc-800"
      >
        <span>{selectedLanguage.shortLabel}</span>
        <span>{selectedLanguage.label}</span>

        <span className="flex h-5 w-5 overflow-hidden rounded-full">
          <SelectedFlag className="h-full w-full object-cover" />
        </span>

        <IoChevronDown
          className={`text-base transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-2 shadow-2xl">
          {languages.map((language) => {
            const FlagIcon = language.FlagIcon;

            return (
              <button
                key={language.code}
                type="button"
                onClick={() => {
                  changeLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                  selectedLanguage.code === language.code
                    ? "bg-[#2065D1] text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{language.shortLabel}</span>
                  <span>{language.label}</span>
                </span>

                <span className="flex h-5 w-5 overflow-hidden rounded-full">
                  <FlagIcon className="h-full w-full object-cover" />
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}