import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle, Terminal, Layers } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Section Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-4">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">ls ./experience</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-neutral-400 text-sm mt-2 font-sans max-w-xl">
            Production engineering internships focused on enterprise RAG deployments, Multimodal document processing, and Small Language Model fine-tuning.
          </p>
        </div>
        <div className="font-mono text-xs text-neutral-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>2 PRODUCTION INTERNSHIPS</span>
        </div>
      </div>

      {/* Animated Timeline */}
      <div className="relative border-l border-neutral-800 ml-4 sm:ml-8 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative pl-8 sm:pl-12 group"
          >
            {/* Timeline Node Icon */}
            <div className="absolute -left-3 sm:-left-3.5 top-1.5 w-6 h-6 rounded-full bg-[#090a0d] border border-neutral-700 flex items-center justify-center group-hover:border-emerald-400 group-hover:scale-110 transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            {/* Experience Card */}
            <div className="bg-[#090a0e] border border-neutral-800 hover:border-neutral-700 rounded-xl p-6 sm:p-8 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_25px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                      {exp.type}
                    </span>
                  </div>
                  <div className="font-mono text-sm text-cyan-400 font-semibold mt-1">
                    @{exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description Bullets */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-sans">
                {exp.descriptionBullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 mt-1 font-mono text-xs">▹</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-neutral-500 mr-2 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-emerald-400" />
                  TECHNOLOGIES:
                </span>
                {exp.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-xs hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
