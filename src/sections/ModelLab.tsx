import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Sparkles, Activity, ExternalLink, Copy, Check, Box, BookOpen } from 'lucide-react';
import { MODEL_LAB_DATA } from '../data/projects';

export const ModelLab: React.FC = () => {
  const [lossVal, setLossVal] = useState(0.284);
  const [step, setStep] = useState(1420);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => prev + 1);
      setLossVal(prev => Math.max(0.12, +(prev - 0.001 * (Math.random() * 2)).toFixed(4)));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(MODEL_LAB_DATA.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="model-lab" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Terminal Command Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">cd ~/model-lab && cat telemetry.log</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 font-mono text-xs mb-2">
            <Cpu className="w-3 h-3" />
            <span>AI RESEARCH & MODEL WEIGHTS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {MODEL_LAB_DATA.title}
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 font-sans max-w-2xl">
            {MODEL_LAB_DATA.subtitle}. Parameter-efficient fine-tuning (QLoRA) on Meta Llama 2 with published public weights on Hugging Face Hub.
          </p>
        </div>

        {/* Hugging Face Hub Buttons */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <a
            href={MODEL_LAB_DATA.huggingFaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="HF MODEL ↗"
            className="px-3.5 py-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/40 hover:border-yellow-400 text-yellow-300 flex items-center gap-2 transition cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.15)]"
          >
            <span className="text-base">🤗</span>
            <span className="font-semibold">{MODEL_LAB_DATA.modelName}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={MODEL_LAB_DATA.huggingFaceProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="HF PROFILE ↗"
            className="px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 flex items-center gap-1.5 transition cursor-pointer"
          >
            <span>@yashhanamghar9099</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Animated Model-Training Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 bg-[#07080a] border border-neutral-800 rounded-xl p-6 font-mono text-xs shadow-2xl overflow-hidden relative"
        >
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>MODEL TRAINING TELEMETRY</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-500 text-[11px]">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                LIVE RUN
              </span>
              <span>STEP: {step}</span>
            </div>
          </div>

          <div className="space-y-3 font-mono text-neutral-300">
            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Target Model:</span>
              <span className="text-yellow-300 font-bold">{MODEL_LAB_DATA.modelName}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Base Architecture:</span>
              <span className="text-cyan-400 font-bold">{MODEL_LAB_DATA.baseModel}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Epoch:</span>
              <span className="text-white font-bold">{MODEL_LAB_DATA.trainingSimulation.epoch}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Training Loss:</span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-mono tracking-tighter">
                  {MODEL_LAB_DATA.trainingSimulation.lossBar}
                </span>
                <span className="text-white font-bold">{lossVal}</span>
              </div>
            </div>

            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">GPU Cluster:</span>
              <span className="text-emerald-300 font-medium">
                {MODEL_LAB_DATA.trainingSimulation.gpuStatus}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">LoRA Configuration:</span>
              <span className="text-violet-300 font-medium">
                {MODEL_LAB_DATA.adapterConfig}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Target Modules:</span>
              <span className="text-neutral-200">
                {MODEL_LAB_DATA.targetModules}
              </span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-neutral-500">Evaluation Harness:</span>
              <span className="text-amber-400 font-semibold animate-pulse">
                {MODEL_LAB_DATA.trainingSimulation.evalStatus}
              </span>
            </div>
          </div>

          {/* Mini Training Loss Sparkline / Status bar */}
          <div className="mt-6 pt-4 border-t border-neutral-800/80 text-[11px] text-neutral-500 flex items-center justify-between">
            <span>PEFT + QLoRA 4-bit Quantization Active</span>
            <span className="text-neutral-400">Checkpoint: <code className="text-emerald-400">ckpt-epoch-1-step-1400</code></span>
          </div>
        </motion.div>

        {/* Right Column: Featured Hugging Face Model Card & Code */}
        <div className="lg:col-span-6 space-y-5">
          {/* Hugging Face Model Spotlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl bg-neutral-950 border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.06)] relative overflow-hidden"
          >
            {/* Top Accent glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤗</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-neutral-400">huggingface.co/</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                      VERIFIED MODEL
                    </span>
                  </div>
                  <h3 className="text-lg font-mono font-bold text-white hover:text-yellow-300 transition-colors">
                    <a href={MODEL_LAB_DATA.huggingFaceUrl} target="_blank" rel="noopener noreferrer">
                      {MODEL_LAB_DATA.repoId}
                    </a>
                  </h3>
                </div>
              </div>

              <a
                href={MODEL_LAB_DATA.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 transition-all hover:scale-105"
                title="View on Hugging Face"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Badges / Tech Specs */}
            <div className="flex flex-wrap gap-2 mb-4 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                Base: <span className="text-cyan-400 font-semibold">Llama-2-7B</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                Format: <span className="text-violet-400 font-semibold">PEFT / LoRA</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                Precision: <span className="text-yellow-400 font-semibold">4-bit NF4</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                Rank: <span className="text-emerald-400 font-semibold">r=16, alpha=32</span>
              </span>
            </div>

            {/* Python / Transformers Integration Code Block */}
            <div className="bg-[#050608] rounded-lg border border-neutral-800/80 overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between px-3 py-2 bg-neutral-900/70 border-b border-neutral-800 text-neutral-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-yellow-400" />
                  <span>load_model.py</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-neutral-800 text-neutral-300 hover:text-white transition cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-neutral-400" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-3 text-[11px] text-neutral-300 overflow-x-auto leading-relaxed">
                <code>{MODEL_LAB_DATA.codeSnippet}</code>
              </pre>
            </div>

            <div className="mt-4 flex items-center justify-between pt-3 border-t border-neutral-900 text-xs font-mono">
              <span className="text-neutral-500">Hugging Face Hub Weights:</span>
              <a
                href={MODEL_LAB_DATA.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-1 transition"
              >
                <span>Browse Files & Weights</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Research Focus Areas Grid */}
          <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Domain Research & Adaptation Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
              {MODEL_LAB_DATA.areas.map(area => (
                <div
                  key={area}
                  className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800/90 text-neutral-300 hover:border-emerald-500/40 transition"
                >
                  <span className="text-emerald-400 mr-1.5 font-bold">▹</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

