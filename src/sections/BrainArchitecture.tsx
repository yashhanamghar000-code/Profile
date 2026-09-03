import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Sparkles, Cpu, Layers, Rocket } from 'lucide-react';

export const BrainArchitecture: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<'all' | 'ai' | 'eng' | 'biz'>('all');

  return (
    <section id="brain" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Terminal Command Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">visualize my_brain --animated</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs mb-2">
            <Brain className="w-3 h-3" />
            <span>NEURAL & SYSTEMS TOPOLOGY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Cognitive & Technical Architecture
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 font-sans max-w-2xl">
            A mental model of Yash's core technical vectors: from frontier RAG & SLM fine-tuning to cloud infrastructure and entrepreneurial ventures.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <button
            onClick={() => setSelectedBranch('all')}
            className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
              selectedBranch === 'all'
                ? 'bg-emerald-500 text-neutral-950 font-bold'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setSelectedBranch('ai')}
            className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
              selectedBranch === 'ai'
                ? 'bg-emerald-500 text-neutral-950 font-bold'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            AI/ML
          </button>
          <button
            onClick={() => setSelectedBranch('eng')}
            className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
              selectedBranch === 'eng'
                ? 'bg-cyan-500 text-neutral-950 font-bold'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            ENGINEERING
          </button>
          <button
            onClick={() => setSelectedBranch('biz')}
            className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
              selectedBranch === 'biz'
                ? 'bg-violet-500 text-neutral-950 font-bold'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            ENTREPRENEURSHIP
          </button>
        </div>
      </div>

      {/* Interactive Topology Graph Container */}
      <div className="relative bg-[#06070a] border border-neutral-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden font-mono text-xs">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Center Node: YASH */}
        <div className="flex flex-col items-center justify-center mb-8 relative z-10">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-400 text-neutral-950 font-black text-xl tracking-widest shadow-[0_0_35px_rgba(16,185,129,0.4)] cursor-pointer select-none"
          >
            YASH
          </motion.div>
          <span className="text-[11px] text-neutral-500 mt-1">NEXUS // BUILDER</span>
        </div>

        {/* 3 Major Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Pillar 1: AI / ML */}
          {(selectedBranch === 'all' || selectedBranch === 'ai') && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-xl bg-neutral-950/80 border border-emerald-500/30 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>AI / ML BRANCH</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                  CORE FOCUS
                </span>
              </div>

              {/* Sub-branches */}
              <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="p-2 rounded bg-neutral-900/90 border border-neutral-800 text-emerald-300 font-semibold">
                  RAG
                </div>
                <div className="p-2 rounded bg-neutral-900/90 border border-neutral-800 text-emerald-300 font-semibold">
                  SLM
                </div>
                <div className="p-2 rounded bg-neutral-900/90 border border-neutral-800 text-emerald-300 font-semibold">
                  NLP
                </div>
              </div>

              {/* Trajectories */}
              <div className="grid grid-cols-3 gap-2 text-[10px] text-neutral-400">
                <div className="space-y-1.5 p-2 rounded bg-neutral-900/40 border border-neutral-800/60">
                  <div className="text-white font-medium">Dastavej</div>
                  <div className="text-emerald-400">↓ Audito</div>
                  <div className="text-neutral-300">↓ Document AI</div>
                </div>
                <div className="space-y-1.5 p-2 rounded bg-neutral-900/40 border border-neutral-800/60">
                  <div className="text-white font-medium">Fine-Tuning</div>
                  <div className="text-cyan-400">↓ LoRA</div>
                  <div className="text-neutral-300">↓ QLoRA</div>
                </div>
                <div className="space-y-1.5 p-2 rounded bg-neutral-900/40 border border-neutral-800/60">
                  <div className="text-white font-medium">NER</div>
                  <div className="text-violet-400">↓ SpaCy</div>
                  <div className="text-neutral-300">↓ 500+ Entities</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Pillar 2: Engineering */}
          {(selectedBranch === 'all' || selectedBranch === 'eng') && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-xl bg-neutral-950/80 border border-cyan-500/30 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Layers className="w-4 h-4" />
                  <span>ENGINEERING BRANCH</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                  PRODUCTION SYSTEMS
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <span className="text-white font-medium">Python Runtime</span>
                  <span className="text-[11px] text-neutral-500">Core Language</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <span className="text-white font-medium">FastAPI & Async</span>
                  <span className="text-[11px] text-neutral-500">Backend API Services</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <span className="text-white font-medium">Docker Containers</span>
                  <span className="text-[11px] text-neutral-500">Reproducible Runtimes</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <span className="text-white font-medium">AWS Cloud Deployments</span>
                  <span className="text-[11px] text-neutral-500">Audito Production Cluster</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Pillar 3: Entrepreneurship */}
          {(selectedBranch === 'all' || selectedBranch === 'biz') && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-xl bg-neutral-950/80 border border-violet-500/30 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2 text-violet-400 font-bold text-sm">
                  <Rocket className="w-4 h-4" />
                  <span>ENTREPRENEURSHIP BRANCH</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/10 text-violet-400">
                  VENTURE
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <span className="text-white font-medium">Creatix</span>
                  <span className="text-[11px] text-cyan-400 font-semibold">Founder</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <span className="text-white font-medium">Digital Products</span>
                  <span className="text-[11px] text-neutral-500">Concept to Launch</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <span className="text-white font-medium">Client AI Solutions</span>
                  <span className="text-[11px] text-neutral-500">Applied Document RAG</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <span className="text-white font-medium">Brand & Creative Tech</span>
                  <span className="text-[11px] text-neutral-500">Design Systems</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
