"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = "signup" | "signin";

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("signup");

  if (!isOpen) return null;

  const isSignUp = mode === "signup";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
      <div className="relative grid h-[88vh] max-h-[720px] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black p-4 text-white shadow-[0_0_50px_rgba(32,101,209,0.28)] md:grid-cols-[0.9fr_1.4fr]">
        <button
          type="button"
          aria-label="Close auth modal"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
        >
          <IoClose />
        </button>

        <section className="flex min-h-0 flex-col overflow-hidden px-4 py-4 md:px-8 md:py-5">
          <div className="flex items-center gap-3">
            <div
              lang="ar"
              className="flex h-11 w-11 items-center justify-center rounded bg-[#06124A] text-3xl font-black text-[#0A84FF]"
            >
              ع
            </div>

            <span className="font-heading text-2xl font-bold text-white">
              Araby.ai
            </span>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="grid grid-cols-2 rounded-lg bg-white/10 p-1">
              <button
                type="button"
                onClick={() => setMode("signup")}
                className={`rounded-md py-2.5 text-sm font-bold transition md:text-base ${
                  isSignUp
                    ? "bg-[#0A84FF] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Sign Up
              </button>

              <button
                type="button"
                onClick={() => setMode("signin")}
                className={`rounded-md py-2.5 text-sm font-bold transition md:text-base ${
                  !isSignUp
                    ? "bg-[#0A84FF] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
            </div>

            <button
              type="button"
              className="mt-3 flex h-10 w-full items-center justify-center gap-4 rounded-lg border border-[#2065D1]/70 bg-zinc-950 text-sm font-medium text-white transition hover:bg-[#2065D1]/15"
            >
              <FcGoogle className="text-xl" />
              Google {isSignUp ? "Sign up" : "Sign in"}
            </button>

            <button
              type="button"
              className="mt-3 flex h-10 w-full items-center justify-center gap-4 rounded-lg border border-[#2065D1]/70 bg-zinc-950 text-sm font-medium text-white transition hover:bg-[#2065D1]/15"
            >
              <FaApple className="text-xl text-white" />
              Apple {isSignUp ? "Sign up" : "Sign in"}
            </button>

            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/15" />
              <span className="text-xs font-bold text-zinc-500">OR</span>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            {isSignUp ? (
              <button
                type="button"
                className="h-11 w-full rounded-lg border border-[#2065D1]/70 bg-zinc-950 text-sm font-medium text-white shadow-[0_8px_20px_rgba(10,132,255,0.12)] transition hover:bg-[#2065D1]/15"
              >
                Sign Up With Email
              </button>
            ) : (
              <form className="space-y-2.5">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-white">
                    Email ID
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 w-full rounded-lg border border-[#2065D1]/70 bg-zinc-950 px-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#0A84FF] focus:ring-4 focus:ring-[#0A84FF]/15"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-white">
                    Password
                  </span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="h-10 w-full rounded-lg border border-[#2065D1]/70 bg-zinc-950 px-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#0A84FF] focus:ring-4 focus:ring-[#0A84FF]/15"
                  />
                </label>

                <button
                  type="button"
                  className="ml-auto block text-xs text-zinc-400 underline transition hover:text-white"
                >
                  forget password ?
                </button>

                <button
                  type="submit"
                  className="mt-3 h-10 w-full rounded-lg bg-[#2065D1] text-sm font-bold text-white transition hover:bg-[#0A84FF]"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>

          <p className="mt-auto pt-4 text-center text-[11px] leading-5 text-zinc-500">
            By signing up to create an account I accept Company’s
            <br />
            <strong className="text-white">
              Terms of use & Privacy Policy
            </strong>
          </p>
        </section>

        <section className="hidden min-h-0 p-0 md:block">
          <div className="h-full overflow-hidden rounded-2xl">
            <video
              className="h-full w-full object-cover opacity-90"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/video-login.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </div>
    </div>
  );
}