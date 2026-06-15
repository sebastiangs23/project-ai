"use client";

import { FiImage, FiVideo, FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchItems = [
  {
    title: "UGC Videos",
    description: "Generate stunning UGC videos from text and templates in seconds.",
    category: "UGC Videos",
    icon: <FiVideo />,
  },
  {
    title: "Images",
    description: "",
    category: "Images",
    icon: <FiImage />,
  },
  {
    title: "Create Image",
    description: "Generate unique images from your words.",
    category: "Images",
    icon: <FiImage />,
  },
  {
    title: "Enhance Image",
    description: "Make your photos crystal clear in HD.",
    category: "Images",
    icon: <FiImage />,
  },
  {
    title: "Logo Maker",
    description: "Quick, simple, stunning logos.",
    category: "Images",
    icon: <FiImage />,
  },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 shadow-2xl">
        <button
          type="button"
          aria-label="Close search"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
        >
          <IoClose />
        </button>

        <div className="flex h-16 items-center border-b border-white/10 px-5 pr-16">
          <FiSearch className="mr-3 text-2xl text-zinc-500" />

          <input
            autoFocus
            type="text"
            placeholder="What are you looking for?"
            className="w-full bg-transparent text-base font-medium text-white outline-none placeholder:text-zinc-500 md:text-lg"
          />
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-3">
          {searchItems.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition hover:bg-white/10 ${
                index === 0 ? "border border-dashed border-[#2065D1] bg-white/5" : ""
              }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-cyan-100 text-2xl text-cyan-600">
                {item.icon}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-heading text-base font-bold text-white md:text-lg">
                  {item.title}
                </span>

                {item.description && (
                  <span className="mt-1 block truncate text-sm font-medium text-zinc-400 md:text-base">
                    {item.description}
                  </span>
                )}
              </span>

              <span className="shrink-0 rounded-lg bg-cyan-900/80 px-3 py-1.5 text-xs font-extrabold text-cyan-200 md:text-sm">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}