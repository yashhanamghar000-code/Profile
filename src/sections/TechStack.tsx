import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Layers, Cpu, Database, Server, Wrench, BarChart2, Code2, HelpCircle } from 'lucide-react';
import { SKILL_CLUSTERS } from '../data/skills';

export const TechStack: React.FC = () => {
  const [activeSkillInfo, setActiveSkillInfo] = useState<{
    name: string;
    context: string;
    cluster: string;
  } | null>({
    name: "RAG Systems",
    context: "Production hybrid retrieval, semantic chunking, and verifiable source attribution (Audito, NyAI).",
    cluster: "AI & Machine Learning"
  });

  const categoryIcons: Record<string, any> = {
    "ai-core": Cpu,
    "frameworks": Layers,
    "languages": Code2,
    "backend": Server,
    "data": BarChart2,
    "databases": Database,
    "devtools": Wrench,
    "visualization": BarChart2
  };

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Terminal Command Header */}
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3">
        <span className="text-emerald-400 font-semibold">$</span>
        <span className="text-neutral-300">./skills --visualize</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Competencies & Clusters
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 font-sans max-w-2xl">
            Grouped by architectural domain. Hover or tap any competency to inspect production application and context.
          </p>
        </div>

        <div className="font-mono text-xs text-neutral-400 flex items-center gap-2 bg-neutral-900/60 border border-neutral-800 px-3 py-1.5 rounded-lg">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>NO ARBITRARY PERCENTAGES</span>
        </div>
      </div>

      {/* Floating Active Skill Inspection HUD Banner */}
      <div className="mb-8 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-neutral-950 via-[#0a0d12] to-neutral-950 border border-emerald-500/40 font-mono shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-2 mb-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>INSPECTING: {activeSkillInfo?.name}</span>
          </div>
          <span className="text-neutral-500 text-[11px]">
            CLUSTER: {activeSkillInfo?.cluster}
          </span>
        </div>
        <p className="text-neutral-200 text-xs sm:text-sm font-sans leading-relaxed">
          {activeSkillInfo?.context}
        </p>
      </div>

      {/* Clusters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CLUSTERS.map(cluster => {
          const Icon = categoryIcons[cluster.category] || Layers;
          return (
            <motion.div
              key={cluster.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-[#090a0e] border border-neutral-800/90 hover:border-neutral-700 rounded-xl p-5 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800/80">
                  <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-display font-bold text-white text-sm">
                    {cluster.name}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {cluster.skills.map(skill => {
                    const isSelected = activeSkillInfo?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() =>
                          setActiveSkillInfo({
                            name: skill.name,
                            context: skill.context,
                            cluster: cluster.name
                          })
                        }
                        onMouseEnter={() =>
                          setActiveSkillInfo({
                            name: skill.name,
                            context: skill.context,
                            cluster: cluster.name
                          })
                        }
                        className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-150 cursor-pointer text-left ${
                          isSelected
                            ? "bg-emerald-500 text-neutral-950 font-bold shadow-[0_0_10px_rgba(16,185,129,0.5)] scale-105"
                            : "bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:border-emerald-500/50 hover:text-emerald-300 hover:bg-neutral-900"
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
