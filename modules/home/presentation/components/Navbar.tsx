"use client";

import { useState } from "react";
import {
  FiImage,
  FiVideo,
  FiHeadphones,
  FiEdit3,
  FiBell,
  FiUser,
  FiGrid,
  FiMenu,
} from "react-icons/fi";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { MdAutoAwesome } from "react-icons/md";
import { SearchBar } from "@/modules/home/presentation/components/SearchBar";
import { PlanButton } from "@/modules/home/presentation/components/PlanButton";
import { LanguageSelector } from "@/modules/home/presentation/components/LanguageSelector";
import { useLanguage } from "@/modules/home/presentation/context/LanguageContext";
import { AuthModal } from "@/modules/home/presentation/components/AuthModal";

const navItems = [
  {
    labelKey: "home",
    icon: <FiGrid />,
    active: true,
  },
  {
    labelKey: "images",
    icon: <FiImage />,
    active: false,
  },
  {
    labelKey: "videos",
    icon: <FiVideo />,
    active: false,
  },
  {
    labelKey: "audio",
    icon: <FiHeadphones />,
    active: false,
  },
  {
    labelKey: "writer",
    icon: <FiEdit3 />,
    active: false,
  },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t, selectedLanguage } = useLanguage();

  const isArabic = selectedLanguage.code === "ar";

  return (
    <header className="fixed left-0 top-9 z-40 w-full bg-black">
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        
      <nav
        dir={isArabic ? "rtl" : "ltr"}
        className="flex h-20 items-center justify-between gap-3 px-4 md:px-10"
      >
        <div className="flex items-center gap-4 lg:gap-8">
          <div lang="ar" className="text-4xl font-black text-[#0A84FF]">
            ع
          </div>

          <div className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <button
                key={item.labelKey}
                type="button"
                className={`flex items-center gap-2 text-base font-bold transition ${
                  item.active ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                {t.nav[item.labelKey]}
              </button>
            ))}

            <button
              type="button"
              className="font-heading flex items-center gap-2 text-base font-bold text-[#0A84FF]"
            >
              <span lang="ar" className="text-3xl">
                ع
              </span>
              {t.nav.arabyGpt}
            </button>

            <button
              type="button"
              className="flex items-center gap-2 text-base font-bold text-zinc-400 transition hover:text-white"
            >
              <MdAutoAwesome className="text-2xl" />
              {t.nav.apps}
              <span className="rounded-md bg-[#2065D1] px-2 py-1 text-xs font-bold text-white">
                {t.nav.new}
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
          <div className="w-full max-w-[280px] sm:max-w-[240px] md:max-w-[320px] lg:max-w-[380px]">
            <SearchBar />
          </div>

          <PlanButton />

          <LanguageSelector />

          <button
            type="button"
            aria-label="Notifications"
            className="hidden text-2xl text-zinc-500 transition hover:text-white md:block"
          >
            <FiBell />
          </button>

          <button
            type="button"
            aria-label="Profile"
            onClick={() => setIsAuthOpen(true)}
            className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-600 text-2xl text-black md:h-11 md:w-11">
              <FiUser />
            </span>
            <IoChevronDown className="hidden text-xl md:block" />
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-2xl text-white transition hover:bg-zinc-800 xl:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm xl:hidden">
          <aside
            dir={isArabic ? "rtl" : "ltr"}
            className={`h-full w-[280px] bg-zinc-950 p-5 shadow-2xl ${
              isArabic ? "mr-auto" : "ml-auto"
            }`}
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="font-heading text-xl font-bold text-white">
                Menu
              </div>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-2xl text-white"
              >
                <IoClose />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.labelKey}
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-bold transition ${
                    item.active
                      ? "bg-[#2065D1] text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  {t.nav[item.labelKey]}
                </button>
              ))}

              <button
                type="button"
                className="font-heading flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-bold text-[#0A84FF] hover:bg-zinc-900"
              >
                <span lang="ar" className="text-3xl">
                  ع
                </span>
                {t.nav.arabyGpt}
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-bold text-zinc-400 hover:bg-zinc-900 hover:text-white"
              >
                <MdAutoAwesome className="text-2xl" />
                {t.nav.apps}
                <span className="rounded-md bg-[#2065D1] px-2 py-1 text-xs font-bold text-white">
                  {t.nav.new}
                </span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
