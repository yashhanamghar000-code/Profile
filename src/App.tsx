/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BootScreen } from './components/terminal/BootScreen';
import { AnimatedBackground } from './components/background/AnimatedBackground';
import { MatrixRain } from './components/ui/MatrixRain';
import { CustomCursor } from './components/layout/CustomCursor';
import { CommandPalette } from './components/layout/CommandPalette';
import { Navbar } from './components/layout/Navbar';
import { InteractiveTerminal } from './components/terminal/InteractiveTerminal';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { ModelLab } from './sections/ModelLab';
import { Creatix } from './sections/Creatix';
import { TechStack } from './sections/TechStack';
import { BrainArchitecture } from './sections/BrainArchitecture';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  const [isBooting, setIsBooting] = useState<boolean>(true);
  const [matrixActive, setMatrixActive] = useState<boolean>(false);
  const [paletteOpen, setPaletteOpen] = useState<boolean>(false);
  const [floatingTerminalOpen, setFloatingTerminalOpen] = useState<boolean>(false);

  // Global keyboard shortcuts: Cmd+K / Ctrl+K for palette, Esc to close matrix
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        if (matrixActive) setMatrixActive(false);
        if (floatingTerminalOpen) setFloatingTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [matrixActive, floatingTerminalOpen]);

  const handleActionTrigger = (action: string, target?: string) => {
    if (action === 'matrix') {
      setMatrixActive(true);
    } else if (action === 'boot') {
      setIsBooting(true);
    } else if (action === 'terminal') {
      setFloatingTerminalOpen(true);
    } else if (action === 'scroll-to' && target) {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#060608] text-neutral-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      {/* 1. Custom Interactive Desktop Cursor */}
      <CustomCursor />

      {/* 2. Technical Animated Background Grid & Particles */}
      <AnimatedBackground />

      {/* 3. Matrix Rain Easter Egg */}
      {matrixActive && <MatrixRain onExit={() => setMatrixActive(false)} />}

      {/* 4. Boot Sequence Screen */}
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}

      {/* 5. VS Code / Raycast Style Command Palette */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onAction={handleActionTrigger}
      />

      {/* 6. OS Top Navigation Bar */}
      <Navbar
        onOpenCommandPalette={() => setPaletteOpen(true)}
        onOpenTerminal={() => {
          const termEl = document.getElementById('interactive-terminal');
          if (termEl) {
            termEl.scrollIntoView({ behavior: 'smooth' });
          } else {
            setFloatingTerminalOpen(true);
          }
        }}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Embedded Interactive Terminal Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <InteractiveTerminal onMatrixTrigger={() => setMatrixActive(true)} />
        </section>

        {/* About Me Section */}
        <About />

        {/* Work Experience Timeline */}
        <Experience />

        {/* Featured Projects: Audito AI, Dastavej Ecosystem, yashalyze, AgroAI, NER */}
        <FeaturedProjects />

        {/* Model Lab: Small Language Models, fine-tuning & training telemetry */}
        <ModelLab />

        {/* Creatix: Venture & Creative Agency floating portal */}
        <Creatix />

        {/* Technical Stack: Clustered competencies with interactive inspector */}
        <TechStack />

        {/* Cognitive & Brain Systems Architecture */}
        <BrainArchitecture />

        {/* Education & Industry Simulation Certifications */}
        <Education />

        {/* Contact & Comms Channels */}
        <Contact />
      </main>

      {/* Floating Terminal Modal (optional pop-out) */}
      {floatingTerminalOpen && (
        <div className="fixed inset-4 sm:inset-10 z-50 flex items-center justify-center p-2 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-4xl max-h-[85vh] shadow-2xl">
            <InteractiveTerminal
              isFloatingModal={true}
              onClose={() => setFloatingTerminalOpen(false)}
              onMatrixTrigger={() => setMatrixActive(true)}
            />
          </div>
        </div>
      )}

      {/* Footer & OS Status Bar */}
      <Footer />
    </div>
  );
}

