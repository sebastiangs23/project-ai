"use client";

import { useState } from "react";
import {
  languages,
  type Language,
  type LanguageCode,
} from "../constants/languages";

export function useLanguage() {
  const defaultLanguage =
    languages.find((language) => language.code === "en") ?? languages[0];

  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);

  const changeLanguage = (code: LanguageCode) => {
    const language = languages.find((item) => item.code === code);

    if (!language) return;

    setSelectedLanguage(language);
  };

  return {
    languages,
    selectedLanguage,
    changeLanguage,
  };
}