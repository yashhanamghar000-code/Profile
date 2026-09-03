import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, FileDown, Copy, Check, Terminal, ExternalLink, Send } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = PROFILE_DATA.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Terminal Command Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">./contact --ping</span>
      </div>

      <div className="relative rounded-2xl bg-[#08090d] border border-neutral-800 p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left: Message */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>READY FOR NEW CHALLENGES</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Let's Build the Next Generation of AI Systems.
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed max-w-xl">
              Whether you are looking to deploy an enterprise RAG pipeline, fine-tune Small Language Models for private domains, or build venture products with Creatix, I'm always open to discussing high-impact engineering opportunities.
            </p>

            {/* Email with copy button */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${emailAddress}`}
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SEND DIRECT EMAIL</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 font-mono text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" />
                    <span>{emailAddress}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Connect Channels Card */}
          <div className="lg:col-span-5 bg-neutral-950/80 border border-neutral-800/90 rounded-xl p-6 font-mono text-xs space-y-3">
            <div className="text-neutral-500 uppercase tracking-wider text-[11px] border-b border-neutral-800 pb-2 flex items-center justify-between">
              <span>Direct Comms Channels</span>
              <span className="text-emerald-400 font-bold">PORT: 443</span>
            </div>

            {/* GitHub */}
            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-emerald-500/40 text-neutral-300 transition group"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                <span className="font-semibold text-white">GitHub</span>
              </div>
              <span className="text-[11px] text-neutral-500 flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
                <span>View Repos</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-cyan-500/40 text-neutral-300 transition group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400 transition-colors" />
                <span className="font-semibold text-white">LinkedIn</span>
              </div>
              <span className="text-[11px] text-neutral-500 flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                <span>Connect</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* Hugging Face */}
            <a
              href={PROFILE_DATA.socials.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="HF REPO ↗"
              className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-yellow-500/40 text-neutral-300 transition group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base">🤗</span>
                <div>
                  <div className="font-semibold text-white">Hugging Face</div>
                  <div className="text-[10px] text-neutral-500 font-mono">Yash-Llama2-7B-QLoRA-v1</div>
                </div>
              </div>
              <span className="text-[11px] text-neutral-500 flex items-center gap-1 group-hover:text-yellow-300 transition-colors">
                <span>View Model</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* Resume */}
            <a
              href={PROFILE_DATA.socials.resume}
              download="Yash_Hanamghar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-emerald-500/40 text-neutral-300 transition group"
            >
              <div className="flex items-center gap-2.5">
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">Curriculum Vitae</span>
              </div>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <span>Download PDF</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
