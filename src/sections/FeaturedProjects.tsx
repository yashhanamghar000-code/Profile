import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AuditoSection } from '../components/projects/AuditoSection';
import { DastavejEcosystem } from '../components/projects/DastavejEcosystem';
import { YashalyzeShowcase } from '../components/projects/YashalyzeShowcase';
import { OtherProjects } from '../components/projects/OtherProjects';
import { ArchitectureModal } from '../components/projects/ArchitectureModal';

export const FeaturedProjects: React.FC = () => {
  const [archModalOpen, setArchModalOpen] = useState(false);
  const [selectedArchProject, setSelectedArchProject] = useState('AUDITO AI');

  const openArchitecture = (projectName: string = 'AUDITO AI') => {
    setSelectedArchProject(projectName);
    setArchModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Top OS Directory Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-2">
            <span className="text-emerald-400 font-semibold">$</span>
            <span className="text-neutral-300">ls ~/projects --featured</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured AI Systems & Architectures
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 font-sans max-w-2xl">
            Production platforms, developer ecosystems, and open-source libraries built for document reasoning, vector search, and automated diagnostics.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-neutral-400 bg-neutral-950 border border-neutral-800 px-3.5 py-2 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PRODUCTION SYSTEMS READY</span>
        </div>
      </div>

      {/* 1. AUDITO AI (Prominent flagship with live mini RAG simulator) */}
      <div className="space-y-16">
        <AuditoSection onOpenArchitecture={() => openArchitecture('AUDITO AI')} />

        {/* 2. DASTAVEJ (Document Intelligence Ecosystem architecture graph) */}
        <DastavejEcosystem />

        {/* 3. YASHALYZE (Python EDA library with terminal output panel) */}
        <YashalyzeShowcase />

        {/* 4. OTHER PROJECTS (AgroAI & NER System) */}
        <OtherProjects />
      </div>

      {/* Reusable Architecture Modal */}
      <ArchitectureModal
        isOpen={archModalOpen}
        onClose={() => setArchModalOpen(false)}
        projectTitle={selectedArchProject}
      />
    </section>
  );
};
