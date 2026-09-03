import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cpu, Database, Server, Terminal, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
}

const ARCHITECTURE_NODES = [
  {
    step: '01',
    title: 'Client Frontend',
    subtitle: 'React / Next.js / Vite UI',
    desc: 'Document upload, interactive chat UI, semantic chunk visualizer, query telemetry stream.',
    icon: Terminal,
    color: 'emerald'
  },
  {
    step: '02',
    title: 'API Gateway & Auth',
    subtitle: 'Nginx / Cloud Router',
    desc: 'Rate limiting, payload validation, TLS termination, session authorization.',
    icon: Server,
    color: 'cyan'
  },
  {
    step: '03',
    title: 'Backend Services',
    subtitle: 'FastAPI / Async Python',
    desc: 'Background task workers, document OCR processing, multi-format chunk extraction.',
    icon: Layers,
    color: 'indigo'
  },
  {
    step: '04',
    title: 'AI Retrieval Pipeline',
    subtitle: 'SBERT Bi-Encoders + BM25',
    desc: 'Dense vector generation, hybrid keyword scoring, contextual metadata injection.',
    icon: Cpu,
    color: 'violet'
  },
  {
    step: '05',
    title: 'Vector Database',
    subtitle: 'FAISS Semantic Index',
    desc: 'HNSW / Flat-IP indices, sub-second nearest-neighbor cosine similarity search.',
    icon: Database,
    color: 'blue'
  },
  {
    step: '06',
    title: 'Reranker & LLM Reasoning',
    subtitle: 'Cross-Encoder + Domain LLM/SLM',
    desc: 'Precision reranking of top-k passages, grounding verification, and zero-hallucination prompt synthesis.',
    icon: Sparkles,
    color: 'amber'
  },
  {
    step: '07',
    title: 'Attributed Response',
    subtitle: 'Answer + Verifiable Citations',
    desc: 'Streaming output delivery with clickable footnote anchors linking directly to source PDF pages.',
    icon: CheckIcon,
    color: 'emerald'
  }
];

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  isOpen,
  onClose,
  projectTitle = 'AUDITO AI'
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl bg-[#090a0d] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {projectTitle} — End-to-End Pipeline
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Flow Diagram */}
            <div className="space-y-4">
              <div className="font-mono text-xs text-neutral-400 mb-2">
                &gt; DATA FLOW TRAJECTORY (Ingestion to Attributed Generation):
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ARCHITECTURE_NODES.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.step}
                      className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-emerald-500/40 transition-colors relative group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-display font-semibold text-white text-sm">
                              {node.title}
                            </h4>
                            <span className="font-mono text-[11px] text-neutral-400">
                              {node.subtitle}
                            </span>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-emerald-500/60">
                          {node.step}
                        </span>
                      </div>

                      <p className="text-neutral-400 text-xs font-sans leading-relaxed mt-2">
                        {node.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Visual Pipeline Sequence Strip */}
              <div className="mt-8 p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs overflow-x-auto">
                <div className="text-neutral-500 text-[11px] uppercase tracking-wider mb-2">
                  Linear Pipeline Flow:
                </div>
                <div className="flex items-center gap-2 text-neutral-300 min-w-max">
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-emerald-400 font-medium">DOCUMENT</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-cyan-400 font-medium">PARSING</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-cyan-400 font-medium">CHUNKING</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-violet-400 font-medium">EMBEDDINGS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-blue-400 font-medium">VECTOR SEARCH</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-amber-400 font-medium">RERANKING</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-emerald-300 font-bold">ANSWER + SOURCE</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-mono text-xs border border-neutral-800 transition cursor-pointer"
              >
                Close Architecture View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
