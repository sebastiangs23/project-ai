"use client";

import { HomeCardEntity } from "../../domain/entities/home-card.entity";
import { FiImage, FiVideo, FiHeadphones, FiArrowRight } from "react-icons/fi";
import { useLanguage } from "@/modules/home/presentation/context/LanguageContext";

interface ToolCardProps {
  card: HomeCardEntity;
}

const iconByType = {
  image: <FiImage />,
  video: <FiVideo />,
  audio: <FiHeadphones />,
};

export function ToolCard({ card }: ToolCardProps) {
  const { t, selectedLanguage } = useLanguage();

  const cardText = t.cards[card.type];
  const isArabic = selectedLanguage.code === "ar";

  return (
    <article
      dir={isArabic ? "rtl" : "ltr"}
      className="group relative h-[320px] overflow-hidden rounded-[28px] border border-zinc-900 bg-zinc-950 transition duration-300 ease-out hover:scale-[1.03] hover:border-[#2065D1]/70 hover:shadow-[0_0_35px_rgba(32,101,209,0.45)] md:h-[375px]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 ease-out group-hover:scale-110 group-hover:opacity-90"
        src={card.videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent transition duration-300 group-hover:via-black/35" />

      <div
        className={`absolute top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/20 text-2xl text-white backdrop-blur-sm transition duration-300 group-hover:bg-white/30 ${
          isArabic ? "right-5" : "left-5"
        }`}
      >
        {iconByType[card.type]}
      </div>

      {card.type === "image" && (
        <div
          className={`absolute top-[110px] rounded-md border border-[#2065D1] bg-black px-3 py-1 text-xs font-black uppercase tracking-widest text-[#4BA3FF] ${
            isArabic
              ? "right-[-36px] rotate-[18deg]"
              : "left-[-36px] rotate-[-18deg]"
          }`}
        >
          Beta
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="font-heading text-xl font-extrabold text-white">
          {cardText.title}
        </h3>

        <p className="mt-1 max-w-[420px] text-sm font-medium text-white/90 md:text-base">
          {cardText.description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="h-1 w-7 rounded-full bg-[#2065D1] transition-all duration-500 ease-out group-hover:w-20" />

          <button
            type="button"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-800 px-5 py-3 text-sm font-extrabold text-white shadow-lg transition duration-300 ease-out group-hover:border-[#2065D1] group-hover:bg-[#2065D1] group-hover:text-white"
          >
            {cardText.button}

            <FiArrowRight
              className={`text-xl transition duration-300 ease-out ${
                isArabic
                  ? "rotate-180 group-hover:rotate-[145deg]"
                  : "group-hover:-rotate-[35deg]"
              }`}
            />
          </button>
        </div>
      </div>
    </article>
  );
}