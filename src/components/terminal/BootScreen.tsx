import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowRight, ShieldCheck } from 'lucide-react';

interface BootScreenProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  "INITIALIZING YASH.OS...",
  "Loading AI modules............. [OK]",
  "Loading RAG Engine............. [OK]",
  "Loading Python Runtime......... [OK]",
  "Connecting Hugging Face........ [OK]",
  "Loading Projects............... [OK]",
  "Loading Creatix................ [OK]",
  "Initializing Developer Profile. [OK]",
  "",
  "SYSTEM READY.",
  "ACCESS GRANTED"
];

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < BOOT_LINES.length) {
      const delay = currentIndex === 0 ? 300 : currentIndex >= BOOT_LINES.length - 2 ? 220 : 120;
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, BOOT_LINES[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        setIsFinished(true);
        setTimeout(onComplete, 450);
      }, 550);
      return () => clearTimeout(exitTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="boot-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-between p-6 sm:p-12 font-mono text-xs sm:text-sm text-neutral-300 select-none overflow-hidden"
        >
          {/* Top Status Header */}
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5">
                <Terminal className="w-4 h-4" /> YASH.OS v4.2.0-PROD
              </span>
            </div>
            <div className="flex items-center gap-4 text-neutral-500 text-xs">
              <span className="hidden sm:inline">BUILD: 2026.09-RELEASE</span>
              <button
                id="skip-intro-btn"
                onClick={() => {
                  setIsFinished(true);
                  setTimeout(onComplete, 100);
                }}
                className="px-3 py-1 border border-neutral-700 hover:border-emerald-500/60 text-neutral-400 hover:text-emerald-300 rounded transition-all duration-200 flex items-center gap-1.5 bg-neutral-900/60 cursor-pointer text-xs"
              >
                <span>SKIP INTRO</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Terminal Content Buffer */}
          <div className="max-w-2xl w-full mx-auto my-auto space-y-2 py-8">
            <div className="p-6 rounded-lg bg-neutral-950/90 border border-neutral-800/80 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-cyan-500/20" />
              
              <div className="space-y-1.5 min-h-[220px]">
                {displayedLines.map((line, idx) => {
                  const isOk = line.includes("[OK]");
                  const isReady = line === "SYSTEM READY." || line === "ACCESS GRANTED";
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      className={`leading-relaxed ${
                        isReady
                          ? "text-emerald-400 font-bold text-sm sm:text-base flex items-center gap-2 pt-1"
                          : isOk
                          ? "text-neutral-300"
                          : idx === 0
                          ? "text-cyan-400 font-semibold mb-2"
                          : "text-neutral-400"
                      }`}
                    >
                      {isReady && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                      <span>{line}</span>
                    </motion.div>
                  );
                })}

                {currentIndex < BOOT_LINES.length && (
                  <span className="inline-block w-2 h-4 bg-emerald-400 cursor-blinking align-middle ml-1" />
                )}
              </div>
            </div>
          </div>

          {/* Bottom Security Footer */}
          <div className="border-t border-neutral-800/80 pt-4 flex items-center justify-between text-neutral-500 text-xs">
            <span>AI / RAG / SLM / DOCUMENT INTELLIGENCE</span>
            <span className="flex items-center gap-1 text-emerald-500/80">
              SECURE SESSION GRANTED
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
