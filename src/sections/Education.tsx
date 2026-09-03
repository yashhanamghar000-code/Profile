import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2, FileCode2, ExternalLink } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Terminal Command Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">cat education.json</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Background & Certifications
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 font-sans max-w-xl">
            Formal engineering degree in Information Technology with industry simulation credentials in Generative AI and Data Analytics.
          </p>
        </div>

        <div className="font-mono text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>MMCOE • SPPU PUNE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Animated JSON Response Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 bg-[#07080b] border border-neutral-800 rounded-xl p-6 font-mono text-xs shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4 text-neutral-400">
            <div className="flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-emerald-400" />
              <span>education.json</span>
            </div>
            <span className="text-emerald-400 text-[11px] font-semibold">STATUS: 200 OK</span>
          </div>

          <pre className="text-neutral-300 leading-relaxed overflow-x-auto text-xs sm:text-sm">
            <code>
              {'{'}{'\n'}
              {'  '}<span className="text-emerald-400">"degree"</span>: <span className="text-cyan-300">"{EDUCATION_DATA.degree}"</span>,{'\n'}
              {'  '}<span className="text-emerald-400">"field"</span>: <span className="text-cyan-300">"{EDUCATION_DATA.field}"</span>,{'\n'}
              {'  '}<span className="text-emerald-400">"university"</span>: <span className="text-cyan-300">"{EDUCATION_DATA.university}"</span>,{'\n'}
              {'  '}<span className="text-emerald-400">"college"</span>: <span className="text-cyan-300">"MMCOE"</span>,{'\n'}
              {'  '}<span className="text-emerald-400">"location"</span>: <span className="text-cyan-300">"{EDUCATION_DATA.location}"</span>,{'\n'}
              {'  '}<span className="text-emerald-400">"cgpa"</span>: <span className="text-amber-300">"{EDUCATION_DATA.cgpa}"</span>,{'\n'}
              {'  '}<span className="text-emerald-400">"period"</span>: <span className="text-violet-300">"{EDUCATION_DATA.period}"</span>{'\n'}
              {'}'}
            </code>
          </pre>

          <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500">
            <span>Specialization: Data Structures, Algorithms & AI</span>
            <span className="text-emerald-400 font-semibold">CGPA: 8.0/10.0</span>
          </div>
        </motion.div>

        {/* Right: Small Animated Certification Cards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="font-mono text-xs text-neutral-400 flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>INDUSTRY CERTIFICATION SIMULATIONS (FORAGE)</span>
          </div>

          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, x: 4 }}
              className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/40 transition-all shadow-md group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mt-0.5 group-hover:scale-110 transition-transform">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="font-mono text-xs text-neutral-400 mt-0.5">
                      {cert.issuer} • <span className="text-emerald-400">{cert.platform}</span>
                    </div>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-emerald-400 font-mono text-[10px] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {cert.year}
                </span>
              </div>

              {/* Certification tags */}
              <div className="mt-3 pt-2.5 border-t border-neutral-900 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {cert.skills.map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-neutral-900/90 text-neutral-400 border border-neutral-800">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
