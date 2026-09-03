import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, FileDown, Terminal, MapPin, Activity, Cpu } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % PROFILE_DATA.roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top OS Prompt Tag */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-300 mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>&gt; whoami</span>
      </motion.div>

      {/* Main Title & Staggered Headers */}
      <div className="space-y-3 font-display">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none"
        >
          {PROFILE_DATA.name.toUpperCase()}
        </motion.h1>

        {/* Roles Stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-sm sm:text-base md:text-lg text-neutral-400 space-y-1 font-medium tracking-wide"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-emerald-400">
            <span>AI/ML ENGINEER</span>
            <span className="text-neutral-600">/</span>
            <span>PYTHON DEVELOPER</span>
            <span className="text-neutral-600">/</span>
            <span>RAG + LLM BUILDER</span>
          </div>
          <div className="text-cyan-400 font-semibold flex items-center gap-2">
            <span>FOUNDER @ CREATIX</span>
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              VENTURE
            </span>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Animated Rotating Role */}
      <div className="mt-6 flex items-center gap-2 font-mono text-xs sm:text-sm text-neutral-300 h-8">
        <span className="text-neutral-500">CURRENT_FUNCTION:</span>
        <div className="relative overflow-hidden h-6 w-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="text-emerald-400 font-semibold flex items-center gap-1.5"
            >
              <span className="text-neutral-600">&gt;</span>
              <span>{PROFILE_DATA.roles[roleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Animated Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed font-sans font-light"
      >
        I build AI systems that understand documents, retrieve knowledge, reason over information, and solve real-world problems.
      </motion.p>

      {/* System Status Row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-8 flex flex-wrap gap-4 sm:gap-6 font-mono text-xs text-neutral-400"
      >
        {/* Status indicator with softly pulsing green dot */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
          <span className="text-neutral-500">STATUS</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          </span>
          <span className="text-emerald-400 font-semibold tracking-wider">{PROFILE_DATA.status}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
          <MapPin className="w-3.5 h-3.5 text-neutral-500" />
          <span className="text-neutral-500">LOCATION</span>
          <span className="text-neutral-200">{PROFILE_DATA.location}</span>
        </div>

        {/* Focus */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-neutral-500">FOCUS</span>
          <span className="text-cyan-300 font-medium">{PROFILE_DATA.focus}</span>
        </div>
      </motion.div>

      {/* Action Buttons & Socials */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        {/* Primary Explore button */}
        <a
          href="#interactive-terminal"
          className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer"
        >
          <Terminal className="w-4 h-4" />
          <span>LAUNCH TERMINAL</span>
        </a>

        {/* Resume Download */}
        <a
          href={PROFILE_DATA.socials.resume}
          download="Yash_Hanamghar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-mono text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer"
        >
          <FileDown className="w-4 h-4 text-emerald-400" />
          <span>RESUME</span>
        </a>

        {/* Social Icon Buttons with beautiful hover effects */}
        <div className="flex items-center gap-2 pl-2">
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB ↗"
            className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-emerald-500/50 text-neutral-400 hover:text-white transition-all hover:scale-105 cursor-pointer group"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
          </a>

          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN ↗"
            className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-cyan-500/50 text-neutral-400 hover:text-white transition-all hover:scale-105 cursor-pointer group"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
          </a>

          <a
            href={PROFILE_DATA.socials.email}
            data-cursor="EMAIL ↗"
            className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/50 text-neutral-400 hover:text-white transition-all hover:scale-105 cursor-pointer group"
            title="Send Email"
          >
            <Mail className="w-4 h-4 group-hover:text-amber-400 transition-colors" />
          </a>

          <a
            href={PROFILE_DATA.socials.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="HF REPO ↗"
            className="px-2.5 py-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-yellow-500/50 text-neutral-400 hover:text-yellow-300 font-mono text-xs transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 group"
            title="Hugging Face: Yash-Llama2-7B-QLoRA-v1"
          >
            <span className="text-sm">🤗</span>
            <span className="text-[11px] font-semibold">HF</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
