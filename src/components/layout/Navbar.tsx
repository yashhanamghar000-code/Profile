import React, { useState, useEffect } from 'react';
import { Terminal, Command, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'experience', 'projects', 'audito', 'dastavej', 'yashalyze', 'model-lab', 'creatix', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', target: 'about' },
    { label: 'WORK', target: 'experience' },
    { label: 'PROJECTS', target: 'projects' },
    { label: 'LAB', target: 'model-lab' },
    { label: 'CREATIX', target: 'creatix' },
    { label: 'CONTACT', target: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.07] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-mono">
        {/* Brand / Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group select-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] group-hover:scale-125 transition-transform" />
          <span className="text-sm tracking-wider font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors">
            YH://<span className="text-neutral-500 font-normal group-hover:text-neutral-400">OS</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-wider text-neutral-400">
          {navLinks.map(link => {
            const isActive = activeSection === link.target;
            return (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className={`relative py-1 hover:text-white transition-colors cursor-pointer ${
                  isActive ? 'text-emerald-400 font-medium' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Palette & Terminal Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCommandPalette}
            className="px-2.5 py-1 rounded bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-neutral-200 text-xs flex items-center gap-1.5 transition cursor-pointer"
            title="Open Command Palette (Cmd+K)"
          >
            <Command className="w-3 h-3 text-neutral-400" />
            <span className="text-[11px]">CMD+K</span>
          </button>

          <button
            id="nav-terminal-btn"
            onClick={onOpenTerminal}
            className="px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 transition cursor-pointer group shadow-[0_0_12px_rgba(16,185,129,0.15)]"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-6 transition-transform" />
            <span className="font-semibold tracking-wider">[ TERMINAL ]</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-1.5 rounded bg-neutral-900 border border-emerald-500/30 text-emerald-400"
            aria-label="Toggle terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-1.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-xl px-4 py-5 font-mono text-xs space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className="text-left px-3 py-2 rounded bg-neutral-900/60 border border-neutral-800/80 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40 transition"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 pt-2 border-t border-neutral-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex-1 py-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center justify-center gap-1.5"
            >
              <Command className="w-3.5 h-3.5" />
              <span>COMMANDS</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 py-2 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center gap-1.5 font-semibold"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>YASH TERMINAL</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
