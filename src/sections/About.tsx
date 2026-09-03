import React from 'react';
import { motion } from 'motion/react';
import { Terminal, FileCode2, CheckCircle2, Flame, Layers, Sparkles } from 'lucide-react';
import { ABOUT_TEXT } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Terminal Command Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-8">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">cat about_yash.txt</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Terminal Card Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-[#090a0d] border border-neutral-800 rounded-xl p-6 sm:p-8 relative shadow-2xl overflow-hidden font-mono"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 mb-6 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-emerald-400" />
              <span>about_yash.txt</span>
            </div>
            <span className="text-neutral-600">UTF-8 • Markdown</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
            <p className="font-mono text-emerald-400 text-xs">
              &gt; Yash Hanamghar // Developer Dossier
            </p>
            <p>
              Yash Hanamghar is a <strong className="text-white font-medium">Python Developer and AI/ML enthusiast</strong> based in Pune, India, focused on Generative AI, NLP, RAG systems, LLM applications, SLM research, and document intelligence.
            </p>
            <p>
              He enjoys <strong className="text-emerald-300 font-medium">building real AI products</strong> rather than only experimenting with notebooks.
            </p>
            <p>
              His work encompasses end-to-end document AI systems, production RAG pipelines, published Python libraries, contextual AI assistants, small language model experimentation, developer tools, and cloud deployments.
            </p>
          </div>

          {/* Quick Technical Highlights */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Product-First</span>
              </div>
              <p className="text-neutral-400 text-[11px] font-sans">Live cloud deployments over theoretical prototypes</p>
            </div>
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
              <div className="text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>RAG Systems</span>
              </div>
              <p className="text-neutral-400 text-[11px] font-sans">Multimodal parsing, chunking & semantic retrieval</p>
            </div>
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
              <div className="text-violet-400 font-semibold mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SLM Tuning</span>
              </div>
              <p className="text-neutral-400 text-[11px] font-sans">Domain adaptation with LoRA, QLoRA & evaluation</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Modern UI Dossier Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Engineering Philosophy Card */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-950 via-[#0e0f14] to-neutral-950 border border-neutral-800/90 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 text-emerald-400" />
              <span>Core Philosophy</span>
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              "AI without deployment is just an observation."
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed">
              Bridging the gap between frontier research papers and production software: taking unstructured documents and turning them into indexed, queryable knowledge graphs with deterministic citations.
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800/80 font-mono text-xs space-y-3">
            <div className="text-neutral-500 uppercase tracking-wider text-[11px] border-b border-neutral-800 pb-2">
              System Specification
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Location Base:</span>
              <span className="text-neutral-200">Pune, Maharashtra, India</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Academic:</span>
              <span className="text-neutral-200">B.E. IT @ MMCOE (SPPU)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Ventures:</span>
              <span className="text-cyan-400 font-medium">Creatix (Founder)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-neutral-500">Specialty:</span>
              <span className="text-emerald-400">RAG • SLM • Python Libraries</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
