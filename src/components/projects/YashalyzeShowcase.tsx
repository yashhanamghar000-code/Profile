import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Copy, Check, ExternalLink, Play, CheckCircle2, FileCode2 } from 'lucide-react';
import { YASHALYZE_PROJECT } from '../../data/projects';

const YASHALYZE_CHECKS = [
  { name: "Dataset Shape", status: "100,000 rows × 24 features identified" },
  { name: "Data Types", status: "14 float64, 6 int64, 4 object/string encoded" },
  { name: "Missing Values", status: "3 features flagged (>0.05% nulls) - impute suggested" },
  { name: "Duplicate Detection", status: "0 duplicate primary keys found across index" },
  { name: "Numeric Statistics", status: "Mean, Std, Skewness, Kurtosis computed in 0.04s" },
  { name: "Categorical Analysis", status: "High-cardinality flags raised for 2 columns" },
  { name: "Correlations", status: "Pearson matrix generated; 2 collinear pairs highlighted" },
  { name: "Outlier Detection", status: "IQR & Z-score bounds calculated (1.2% anomalies)" },
  { name: "Value Counts", status: "Top 10 distributions ranked and vectorized" }
];

export const YashalyzeShowcase: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'report'>('code');

  const copyCommand = () => {
    navigator.clipboard.writeText('pip install yashalyze');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="yashalyze" className="py-12">
      {/* Section Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">python3 -m yashalyze --version</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
              PUBLISHED PYTHON LIBRARY
            </span>
            {/* PyPI Badge style */}
            <div className="inline-flex items-center rounded overflow-hidden text-[10px] font-mono border border-neutral-700">
              <span className="bg-neutral-800 text-neutral-300 px-2 py-0.5 font-bold">pypi</span>
              <span className="bg-emerald-600 text-white px-2 py-0.5 font-bold">v0.1.4</span>
            </div>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {YASHALYZE_PROJECT.title}
          </h3>
          <p className="text-neutral-400 text-sm mt-1.5 font-sans max-w-2xl">
            {YASHALYZE_PROJECT.tagline}. Run full EDA diagnostics, missingness audits, and correlation matrices in a single line of Python.
          </p>
        </div>

        {/* Install Pip Pill */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-300">
            <span className="text-neutral-500">$</span>
            <span>pip install yashalyze</span>
            <button
              onClick={copyCommand}
              className="ml-2 text-neutral-400 hover:text-emerald-400 transition cursor-pointer"
              title="Copy pip command"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Visual Terminal Demo & Output Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Code Snippet */}
        <div className="lg:col-span-5 bg-[#090a0e] border border-neutral-800 rounded-xl p-6 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4 text-neutral-400">
            <div className="flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-emerald-400" />
              <span>demo_analysis.py</span>
            </div>
            <span className="text-emerald-500 font-bold">PYTHON 3.11</span>
          </div>

          <pre className="text-neutral-300 leading-relaxed overflow-x-auto">
            <code>
              <span className="text-cyan-400">import</span> pandas <span className="text-cyan-400">as</span> pd{'\n'}
              <span className="text-cyan-400">import</span> yashalyze <span className="text-cyan-400">as</span> yz{'\n\n'}
              <span className="text-neutral-500"># Load enterprise dataset</span>{'\n'}
              df = pd.read_parquet(<span className="text-emerald-300">"financial_records.parquet"</span>){'\n\n'}
              <span className="text-neutral-500"># Run one-line automated diagnostic</span>{'\n'}
              report = yz.analyze(df){'\n\n'}
              <span className="text-neutral-500"># Output rendered instantly to terminal</span>{'\n'}
              report.show_summary()
            </code>
          </pre>

          <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-neutral-400 text-[11px]">
            <span>Optimized for multi-GB DataFrames</span>
            <a
              href={YASHALYZE_PROJECT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition"
            >
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right: Animate Output Panel showing the 9 checks */}
        <div className="lg:col-span-7 bg-[#050608] border border-neutral-800/90 rounded-xl p-6 font-mono text-xs shadow-2xl">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>YASHALYZE DIAGNOSTIC REPORT [OUTPUT]</span>
            </div>
            <span className="text-[11px] text-neutral-500">EXECUTION TIME: 0.12s</span>
          </div>

          {/* Checks checklist */}
          <div className="space-y-2.5">
            {YASHALYZE_CHECKS.map((chk, i) => (
              <motion.div
                key={chk.name}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="flex items-start justify-between p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800/60 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-white font-medium">{chk.name}</span>
                </div>
                <span className="text-neutral-400 text-[11px] text-right font-sans">
                  {chk.status}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500">
            <span>Status: ALL 9 DIAGNOSTIC TESTS PASSED</span>
            <span className="text-emerald-400">Ready for feature engineering</span>
          </div>
        </div>
      </div>
    </div>
  );
};
