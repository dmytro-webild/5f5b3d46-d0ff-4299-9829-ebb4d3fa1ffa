"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, BookOpen } from "lucide-react";

interface CinematicLogoRevealProps {
  onComplete?: () => void;
  forceShow?: boolean;
  onClose?: () => void;
}

export default function CinematicLogoReveal({ onComplete, forceShow = false, onClose }: CinematicLogoRevealProps) {
  const [show, setShow] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const handleFinish = useCallback(() => {
    sessionStorage.setItem("sevenfold_intro_seen", "true");
    setShow(false);
    if (onComplete) onComplete();
    if (onClose) onClose();
  }, [onComplete, onClose]);

  useEffect(() => {
    if (forceShow) {
      setShow(true);
      setStep(1);
      return;
    }
    const hasSeen = sessionStorage.getItem("sevenfold_intro_seen");
    if (!hasSeen) {
      setShow(true);
      setStep(1);
    }
  }, [forceShow]);

  useEffect(() => {
    if (!show) return;

    // Sequence timers:
    // Step 1: Open Bible appears with subtle golden glow (0s - 1.8s)
    // Step 2: Cross emerges from centre of Bible (1.8s - 3.6s)
    // Step 3: Golden number SEVEN forms last, completing logo (3.6s - 5.4s)
    // Step 4: Wordmark SEVENFOLD & Tagline FAITH. COMMUNITY. GROWTH. (5.4s - 7.5s)
    const t1 = setTimeout(() => setStep(2), 1800);
    const t2 = setTimeout(() => setStep(3), 3600);
    const t3 = setTimeout(() => setStep(4), 5400);
    const t4 = setTimeout(() => {
      handleFinish();
    }, 8500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [show, handleFinish]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#010519] text-[#FEF9EE] overflow-hidden select-none"
      >
        {/* Background glow and subtle starburst effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,187,93,0.15)_0%,rgba(16,27,53,0.8)_50%,rgba(1,5,25,1)_100%)] pointer-events-none" />

        {/* Ambient radial particles */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#F0BB5D]/5 blur-[120px] animate-pulse pointer-events-none" />

        {/* Skip button */}
        <button
          onClick={handleFinish}
          type="button"
          className="absolute top-6 right-6 z-10 flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#F0BB5D] bg-[#101B35]/80 hover:bg-[#101B35] border border-[#1C2B4B] rounded-full transition-all hover:border-[#F0BB5D]"
        >
          <span>Skip Intro</span>
          <X className="w-4 h-4" />
        </button>

        {/* Main Logo Container */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 max-w-lg text-center">
          
          {/* Animated Graphic Stage */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center mb-8">
            
            {/* Step 1: Glowing Open Bible */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: step >= 1 ? 1 : 0.6, opacity: step >= 1 ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Outer Golden Aura */}
              <div className="absolute w-36 h-36 rounded-full bg-[#F0BB5D]/20 blur-2xl animate-pulse" />
              
              {/* Open Bible SVG Path */}
              <svg viewBox="0 0 100 100" className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-[0_0_25px_rgba(240,187,93,0.6)]">
                {/* Left Page */}
                <path
                  d="M 15 65 Q 32 58 50 65 L 50 35 Q 32 28 15 35 Z"
                  fill="url(#goldGradient)"
                  opacity="0.85"
                />
                {/* Right Page */}
                <path
                  d="M 50 65 Q 68 58 85 65 L 85 35 Q 68 28 50 35 Z"
                  fill="url(#goldGradient)"
                  opacity="0.95"
                />
                {/* Page Lines */}
                <path d="M 22 42 Q 33 37 45 42" stroke="#010519" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M 22 50 Q 33 45 45 50" stroke="#010519" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M 55 42 Q 67 37 78 42" stroke="#010519" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M 55 50 Q 67 45 78 50" stroke="#010519" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

                {/* SVG Gradient definitions */}
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF2D6" />
                    <stop offset="50%" stopColor="#F0BB5D" />
                    <stop offset="100%" stopColor="#C98B32" />
                  </linearGradient>
                  <linearGradient id="metallicGold" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="30%" stopColor="#F0BB5D" />
                    <stop offset="100%" stopColor="#B37A1E" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Step 2: Emerging Cross from Centre */}
            {step >= 2 && (
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                {/* Radiant Light Beam */}
                <div className="absolute w-2 h-44 bg-gradient-to-t from-transparent via-[#FFF] to-transparent opacity-80 blur-sm" />
                <div className="absolute h-2 w-36 bg-gradient-to-r from-transparent via-[#FFF] to-transparent opacity-80 blur-sm" />

                {/* Elegant Metallic Golden Cross */}
                <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
                  {/* Vertical Beam */}
                  <rect x="46" y="15" width="8" height="60" rx="1.5" fill="url(#metallicGold)" />
                  {/* Horizontal Crossbar */}
                  <rect x="25" y="30" width="50" height="8" rx="1.5" fill="url(#metallicGold)" />
                  {/* Centre Diamond Accent */}
                  <polygon points="50,28 54,34 50,40 46,34" fill="#FFFFFF" opacity="0.9" />
                </svg>
              </motion.div>
            )}

            {/* Step 3: Golden Number SEVEN forming last */}
            {step >= 3 && (
              <motion.div
                initial={{ scale: 2, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
              >
                <div className="relative">
                  <span className="font-serif text-8xl sm:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#F0BB5D] to-[#996515] filter drop-shadow-[0_4px_25px_rgba(240,187,93,0.8)]">
                    7
                  </span>
                  <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-[#FFF2D6] animate-spin" style={{ animationDuration: "6s" }} />
                </div>
              </motion.div>
            )}
          </div>

          {/* Step 4: SEVENFOLD Wordmark & Tagline Reveal */}
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101B35] border border-[#F0BB5D]/40 text-[11px] font-semibold text-[#F0BB5D] tracking-wider uppercase mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>SEVENTH-DAY ADVENTIST DIGITAL PLATFORM</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FEF9EE] via-[#F0BB5D] to-[#FEF9EE] drop-shadow-md">
                SEVENFOLD
              </h1>

              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#F0BB5D] to-transparent my-1" />

              <p className="text-sm sm:text-base font-semibold tracking-[0.3em] uppercase text-[#F0BB5D]">
                FAITH. COMMUNITY. GROWTH.
              </p>

              <p className="text-xs text-[#C0C9DC] mt-2 max-w-sm">
                Empowering Adventist believers, churches, and young adults globally.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFinish}
                className="mt-6 btn-primary px-8 py-3 text-sm font-bold shadow-xl border border-[#F0BB5D]"
              >
                Enter Platform
              </motion.button>
            </motion.div>
          )}

          {/* Progress dots at bottom */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  step === s ? "w-8 bg-[#F0BB5D]" : step > s ? "w-2 bg-[#F0BB5D]/60" : "w-2 bg-[#1C2B4B]"
                }`}
              />
            ))}
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
