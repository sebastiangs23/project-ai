import { US, SA, IN } from "country-flag-icons/react/3x2";

export const languages = [
  {
    code: "en",
    label: "English",
    shortLabel: "US",
    FlagIcon: US,
  },
  {
    code: "ar",
    label: "Arabic",
    shortLabel: "AR",
    FlagIcon: SA,
  },
  {
    code: "hi",
    label: "Hindi",
    shortLabel: "HI",
    FlagIcon: IN,
  },
] as const;

export type Language = (typeof languages)[number];
export type LanguageCode = Language["code"];