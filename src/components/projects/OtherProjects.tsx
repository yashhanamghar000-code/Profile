import React from 'react';
import { motion } from 'motion/react';
import { Sprout, FileCheck, ExternalLink, Github, Cpu } from 'lucide-react';
import { OTHER_PROJECTS } from '../../data/projects';

export const OtherProjects: React.FC = () => {
  return (
    <div id="other-projects" className="py-12">
      {/* Section Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">ls ~/projects --secondary</span>
      </div>

      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
        Specialized AI Applications & Research Systems
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {OTHER_PROJECTS.map(proj => {
          const isLlama = proj.id === 'llama2-qlora';
          const isAgro = proj.id === 'agroai';

          return (
            <motion.div
              key={proj.id}
              whileHover={{ y: -4 }}
              className="bg-[#090a0e] border border-neutral-800 hover:border-neutral-700 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isLlama
                      ? 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-300'
                      : isAgro
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                  }`}>
                    {isLlama ? (
                      <span className="text-xl">🤗</span>
                    ) : isAgro ? (
                      <Sprout className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <FileCheck className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-0.5 rounded border ${
                    isLlama
                      ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}>
                    {isLlama ? 'HUGGING FACE MODEL' : isAgro ? 'AGRICULTURE RAG' : 'FINANCIAL NLP'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {proj.title}
                  </h4>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white p-1 rounded transition"
                      title="Open project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="font-mono text-xs text-emerald-400 mt-1 mb-3">
                  {proj.tagline}
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {proj.description}
                </p>

                {/* Highlights */}
                {proj.highlights && (
                  <ul className="mt-4 space-y-1.5 text-xs text-neutral-400 font-sans">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Technologies footer */}
              <div className="mt-6 pt-5 border-t border-neutral-800/80">
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {proj.technologies.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
