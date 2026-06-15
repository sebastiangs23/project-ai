"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  languages,
  type Language,
  type LanguageCode,
} from "../constants/languages";
import { translations } from "../constants/translations";

type Translation = (typeof translations)[keyof typeof translations];

type LanguageContextValue = {
  languages: typeof languages;
  selectedLanguage: Language;
  changeLanguage: (code: LanguageCode) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const defaultLanguage =
    languages.find((language) => language.code === "en") ?? languages[0];

  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);

  const changeLanguage = (code: LanguageCode) => {
    const language = languages.find((item) => item.code === code);

    if (!language) return;

    setSelectedLanguage(language);
  };

  const t = useMemo<Translation>(() => {
    return translations[selectedLanguage.code];
  }, [selectedLanguage.code]);

  return (
    <LanguageContext.Provider
      value={{
        languages,
        selectedLanguage,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}