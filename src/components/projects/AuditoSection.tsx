import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, ArrowRight, Play, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { AUDITO_AI_PROJECT } from '../../data/projects';

interface AuditoSectionProps {
  onOpenArchitecture: () => void;
}

const RAG_SIMULATION_STEPS = [
  { step: 'INPUT', label: 'User Question', detail: '"What are the liability exemptions under Section 4.2 of the compliance policy?"' },
  { step: 'SEARCH', label: 'Searching Documents...', detail: 'Scanning policy corpus & indexed vectors' },
  { step: 'RETRIEVE', label: 'Retrieving Chunks...', detail: 'Retrieved 4 high-affinity passages (Score: 0.942)' },
  { step: 'GENERATE', label: 'Generating Answer...', detail: 'Cross-encoder reranking & synthesis with SBERT' },
  { step: 'OUTPUT', label: 'Answer + Source', detail: 'Liability is exempted in Force Majeure events. Source: [Policy_Doc_v2.pdf, Page 14, ¶3]' }
];

export const AuditoSection: React.FC<AuditoSectionProps> = ({ onOpenArchitecture }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < RAG_SIMULATION_STEPS.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 900);
  };

  return (
    <div id="audito" className="relative group">
      {/* Glow highlight */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />

      <div className="relative bg-[#08090d] border border-neutral-800 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-300">
        {/* Flagship Banner Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold">
                FLAGSHIP PRODUCTION PRODUCT
              </span>
              <span className="flex items-center gap-1 text-neutral-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AWS Production Cluster
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span>{AUDITO_AI_PROJECT.title}</span>
              <a
                href={AUDITO_AI_PROJECT.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="auditoai.online ↗"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 px-3 py-1 rounded bg-cyan-950/40 border border-cyan-800/50 flex items-center gap-1 transition"
              >
                <span>auditoai.online</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base mt-2 font-sans max-w-2xl leading-relaxed">
              {AUDITO_AI_PROJECT.tagline}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={AUDITO_AI_PROJECT.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-xs font-bold flex items-center gap-2 transition shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenArchitecture}
              className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-emerald-500/50 text-neutral-200 font-mono text-xs flex items-center gap-2 transition cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>ARCHITECTURE</span>
            </button>

            <a
              href={AUDITO_AI_PROJECT.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 font-mono text-xs flex items-center gap-2 transition"
            >
              <span>VIEW PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Visual Pipeline Architecture Strip */}
        <div className="mb-8 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 font-mono text-xs">
          <div className="text-neutral-400 text-[11px] uppercase tracking-wider mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              RAG Knowledge Retrieval Pipeline
            </span>
            <span className="text-emerald-500">PRODUCTION ARCHITECTURE</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-[11px]">
            {AUDITO_AI_PROJECT.architectureSteps?.map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className="px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-800 text-neutral-300 whitespace-nowrap hover:border-emerald-500/40 transition">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-neutral-600 px-1 font-bold">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Mini RAG Simulation Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 bg-[#050608] border border-neutral-800/90 rounded-xl p-5 font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4">
              <div className="flex items-center gap-2 text-neutral-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Interactive Mini RAG Simulation</span>
              </div>
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="px-3 py-1 rounded bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-1.5 transition cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>{isSimulating ? 'SIMULATING...' : 'RUN PIPELINE'}</span>
              </button>
            </div>

            {/* Simulation steps list */}
            <div className="space-y-3">
              {RAG_SIMULATION_STEPS.map((s, index) => {
                const isCurrent = activeStep === index;
                const isPassed = activeStep > index;
                return (
                  <motion.div
                    key={s.step}
                    animate={{
                      backgroundColor: isCurrent ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                      borderColor: isCurrent ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.04)'
                    }}
                    className="p-3 rounded-lg border text-xs transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold flex items-center gap-1.5 ${
                        isCurrent ? 'text-emerald-400' : isPassed ? 'text-neutral-300' : 'text-neutral-500'
                      }`}>
                        {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                        {isCurrent && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
                        {s.label}
                      </span>
                      <span className="text-[10px] text-neutral-600 uppercase font-mono">{s.step}</span>
                    </div>
                    <p className={`text-[11px] font-sans ${isCurrent ? 'text-emerald-200' : 'text-neutral-400'}`}>
                      {s.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Highlights & Tech Tags */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-sans">
              <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Production Highlights
              </h4>
              <ul className="space-y-2 text-neutral-300">
                {AUDITO_AI_PROJECT.highlights?.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono">✓</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800">
              <div className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider mb-3">
                Production Stack
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {AUDITO_AI_PROJECT.technologies.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-emerald-500/40 hover:text-emerald-300 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
