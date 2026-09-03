import React from 'react';
import { Terminal, ShieldCheck, Heart, Cpu, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-[#060709] font-mono text-xs text-neutral-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Terminal Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>YASH.OS v4.2.0-LTS</span>
            </div>
            <span className="text-neutral-700">|</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-neutral-500 text-[11px]">
            <div>
              <span>Memory: </span>
              <span className="text-neutral-300">64MB / 128MB</span>
            </div>
            <span className="text-neutral-700">|</span>
            <div>
              <span>Kernel: </span>
              <span className="text-cyan-400">YashAI-Kernel-v1</span>
            </div>
          </div>
        </div>

        {/* Bottom credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-[11px] font-sans">
          <div className="flex items-center gap-1.5">
            <span>Made with curiosity, terminal nostalgia & modern AI.</span>
          </div>
          <div className="font-mono text-neutral-400">
            © {new Date().getFullYear()} Yash Hanamghar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
