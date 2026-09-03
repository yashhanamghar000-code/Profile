import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Cpu, Palette, Box, Share2, Rocket, ArrowUpRight } from 'lucide-react';
import { CREATIX_DATA } from '../data/projects';

export const Creatix: React.FC = () => {
  const iconMap: Record<string, any> = {
    "AI Solutions": Cpu,
    "Web Development": Globe,
    "Digital Products": Box,
    "Creative Technology": Sparkles,
    "Branding & Identity": Palette,
    "Social Media Content": Share2
  };

  return (
    <section id="creatix" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Terminal Launcher Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">launch creatix</span>
      </div>

      {/* Floating Agency Window inside YASH.OS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl bg-gradient-to-br from-[#0c0d14] via-[#090a10] to-[#0d0e18] border border-cyan-500/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(6,182,212,0.1)] overflow-hidden group"
      >
        {/* Window Top Controls */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="font-mono text-xs text-neutral-400">creatix.app // OS Venture Portal</span>
          </div>

          <div className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-semibold">
            VENTURE // CREATIX
          </div>
        </div>

        {/* Agency Heading & Tagline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase mb-2">
              <Rocket className="w-3.5 h-3.5 text-cyan-400" />
              <span>Founder — {CREATIX_DATA.founder}</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
              {CREATIX_DATA.title}
            </h2>
            <div className="mt-2 font-mono text-xs sm:text-sm font-bold text-cyan-300 tracking-wider">
              {CREATIX_DATA.tagline}
            </div>
            <p className="mt-3 text-neutral-300 text-sm sm:text-base font-sans max-w-2xl leading-relaxed">
              {CREATIX_DATA.mission}
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-mono font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] self-start lg:self-end cursor-pointer"
          >
            <span>DISCUSS VENTURE COLLABORATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Creatix Service Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
          {CREATIX_DATA.domains.map((dom, i) => {
            const Icon = iconMap[dom.title] || Sparkles;
            return (
              <motion.div
                key={dom.title}
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/50 hover:bg-neutral-900/90 transition-all group/card shadow-lg"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-3 group-hover/card:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1.5">
                  {dom.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {dom.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Footer banner */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 gap-2">
          <span>CREATIX × YASH.OS SYSTEM ARCHITECTURE</span>
          <span className="text-cyan-400">Open for strategic AI and Web initiatives</span>
        </div>
      </motion.div>
    </section>
  );
};
