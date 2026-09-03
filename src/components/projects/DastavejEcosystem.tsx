import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, FileText, Layers, Eye, Cpu, Terminal, Sparkles, Box } from 'lucide-react';
import { DASTAVEJ_ECOSYSTEM } from '../../data/projects';

export const DastavejEcosystem: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>("dastavej-rag");

  const nodes = [
    {
      id: "dastavej-rag",
      label: "dastavej-rag",
      branch: "Retrieval",
      icon: Cpu,
      color: "emerald",
      desc: "Modular RAG engine with customizable semantic chunking, multi-modal context aggregation, and cross-encoder rerankers."
    },
    {
      id: "dastavej-visualization",
      label: "dastavej-visualization",
      branch: "Visualization",
      icon: Eye,
      color: "cyan",
      desc: "Interactive visual representations for high-dimensional document embeddings, attention heatmaps, and retrieval clustering."
    },
    {
      id: "document-processing",
      label: "Document Processing",
      branch: "Parsing",
      icon: FileText,
      color: "indigo",
      desc: "Intelligent layout analysis for OCR, tabular preservation, and multi-format document extraction pipelines."
    },
    {
      id: "embeddings",
      label: "Embeddings",
      branch: "Retrieval Core",
      icon: Layers,
      color: "violet",
      desc: "Specialized bi-encoder vectorization tuned for dense domain document similarity and low-latency retrieval."
    },
    {
      id: "eda",
      label: "EDA & Diagnostics",
      branch: "Visualization Core",
      icon: Sparkles,
      color: "amber",
      desc: "Integrated exploratory data analysis diagnostics and corpus quality auditing tools."
    },
    {
      id: "developer-tooling",
      label: "Developer Tools",
      branch: "Parsing Core",
      icon: Terminal,
      color: "blue",
      desc: "CLI utilities, synthetic benchmark evaluation suites, and validation harnesses for document AI builders."
    },
    {
      id: "pyforge",
      label: "PyForge Playground",
      branch: "Sandbox",
      icon: Box,
      color: "pink",
      desc: "Interactive developer playground to test prompt templates, chunk sizes, and vector retrieval accuracy in real time."
    }
  ];

  const activeNodeData = nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <div id="dastavej" className="py-12">
      {/* Section Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">tree ~/dastavej-ecosystem</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-2">
            <Network className="w-3 h-3" />
            <span>DEVELOPER ECOSYSTEM</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {DASTAVEJ_ECOSYSTEM.title}
          </h3>
          <p className="text-neutral-400 text-sm mt-1.5 font-sans max-w-2xl">
            {DASTAVEJ_ECOSYSTEM.tagline} — tackling end-to-end document intelligence pipelines from structural parsing to embedding visualizers.
          </p>
        </div>

        <div className="font-mono text-xs text-neutral-500 bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800">
          HOVER / CLICK NODES TO INSPECT
        </div>
      </div>

      {/* Living Architecture Graph */}
      <div className="relative bg-[#07080b] border border-neutral-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Ambient background lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Central Root Node */}
        <div className="flex flex-col items-center justify-center mb-8 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-xl bg-emerald-950/40 border border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.25)] text-center cursor-pointer select-none"
          >
            <span className="text-[11px] font-mono text-emerald-400 font-semibold tracking-wider block">
              ECOSYSTEM CORE
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-widest">
              DASTAVEJ
            </span>
          </motion.div>

          {/* Central Stem Line */}
          <div className="w-px h-8 bg-gradient-to-b from-emerald-500/80 to-neutral-700 mt-2" />
        </div>

        {/* Main Branch Headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 relative z-10">
          {/* Branch 1: RAG */}
          <div className="flex flex-col items-center">
            <div className="px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
              RAG Branch
            </div>
            <div className="space-y-3 w-full">
              {nodes.filter(n => n.branch.includes("Retrieval")).map(node => {
                const Icon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => setSelectedNode(node.id)}
                    onMouseEnter={() => setSelectedNode(node.id)}
                    className={`p-3 rounded-xl border font-mono text-xs cursor-pointer transition-all ${
                      isSelected
                        ? "bg-emerald-500/15 border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        : "bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <Icon className="w-4 h-4 text-emerald-400" />
                      <span>{node.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Branch 2: Visualization */}
          <div className="flex flex-col items-center">
            <div className="px-4 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              Visualization Branch
            </div>
            <div className="space-y-3 w-full">
              {nodes.filter(n => n.branch.includes("Visualization")).map(node => {
                const Icon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => setSelectedNode(node.id)}
                    onMouseEnter={() => setSelectedNode(node.id)}
                    className={`p-3 rounded-xl border font-mono text-xs cursor-pointer transition-all ${
                      isSelected
                        ? "bg-cyan-500/15 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                        : "bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{node.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Branch 3: Parsing & Tools */}
          <div className="flex flex-col items-center">
            <div className="px-4 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_10px_rgba(99,102,241,0.15)]">
              Parsing & Tools Branch
            </div>
            <div className="space-y-3 w-full">
              {nodes.filter(n => n.branch.includes("Parsing") || n.branch.includes("Sandbox")).map(node => {
                const Icon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => setSelectedNode(node.id)}
                    onMouseEnter={() => setSelectedNode(node.id)}
                    className={`p-3 rounded-xl border font-mono text-xs cursor-pointer transition-all ${
                      isSelected
                        ? "bg-indigo-500/15 border-indigo-400 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                        : "bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <Icon className="w-4 h-4 text-indigo-400" />
                      <span>{node.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Node Detail Inspector Box */}
        <div className="mt-8 pt-6 border-t border-neutral-800/80 bg-neutral-950/70 p-5 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-mono">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">&gt; INSPECTED COMPONENT:</span>
              <span className="text-white font-semibold">{activeNodeData.label}</span>
            </div>
            <span className="text-xs text-neutral-500">
              CLUSTER: {activeNodeData.branch}
            </span>
          </div>
          <p className="text-neutral-300 text-xs sm:text-sm font-sans leading-relaxed">
            {activeNodeData.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
