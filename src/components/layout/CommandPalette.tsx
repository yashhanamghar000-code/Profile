import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Terminal, ExternalLink, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (actionId: string) => void;
}

interface PaletteItem {
  id: string;
  title: string;
  category: string;
  shortcut?: string;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectAction
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items: PaletteItem[] = useMemo(() => [
    {
      id: 'about',
      title: 'About Yash Hanamghar',
      category: 'Navigation',
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('about');
        onClose();
      }
    },
    {
      id: 'projects',
      title: 'View Projects & Architecture',
      category: 'Navigation',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('projects');
        onClose();
      }
    },
    {
      id: 'audito',
      title: 'Open Audito AI (Production Platform)',
      category: 'Projects',
      action: () => {
        document.getElementById('audito')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('audito');
        onClose();
      }
    },
    {
      id: 'dastavej',
      title: 'Explore Dastavej Ecosystem',
      category: 'Projects',
      action: () => {
        document.getElementById('dastavej')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('dastavej');
        onClose();
      }
    },
    {
      id: 'yashalyze',
      title: 'View yashalyze Python Library',
      category: 'Projects',
      action: () => {
        document.getElementById('yashalyze')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('yashalyze');
        onClose();
      }
    },
    {
      id: 'model-lab',
      title: 'Open Model Lab & SLM Research',
      category: 'AI Research',
      action: () => {
        document.getElementById('model-lab')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('model-lab');
        onClose();
      }
    },
    {
      id: 'creatix',
      title: 'Launch Creatix Creative Tech',
      category: 'Entrepreneurship',
      action: () => {
        document.getElementById('creatix')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('creatix');
        onClose();
      }
    },
    {
      id: 'experience',
      title: 'Work Experience (NyAI.ai & V Edge)',
      category: 'Career',
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('experience');
        onClose();
      }
    },
    {
      id: 'skills',
      title: 'Tech Stack Clusters',
      category: 'Skills',
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('skills');
        onClose();
      }
    },
    {
      id: 'terminal',
      title: 'Focus Interactive Terminal',
      category: 'Terminal',
      action: () => {
        document.getElementById('interactive-terminal')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('terminal');
        onClose();
      }
    },
    {
      id: 'resume',
      title: 'Download Resume PDF',
      category: 'Quick Action',
      action: () => {
        window.open(PROFILE_DATA.socials.resume, '_blank');
        onClose();
      }
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      category: 'Links',
      action: () => {
        window.open(PROFILE_DATA.socials.github, '_blank');
        onClose();
      }
    },
    {
      id: 'huggingface-model',
      title: 'Hugging Face: Yash-Llama2-7B-QLoRA-v1 (Weights)',
      category: 'Links',
      action: () => {
        window.open(PROFILE_DATA.socials.huggingface, '_blank');
        onClose();
      }
    },
    {
      id: 'huggingface-profile',
      title: 'Hugging Face Profile (@yashhanamghar9099)',
      category: 'Links',
      action: () => {
        window.open('https://huggingface.co/yashhanamghar9099', '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      category: 'Links',
      action: () => {
        window.open(PROFILE_DATA.socials.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'contact',
      title: 'Contact Yash / Direct Transmission',
      category: 'Connect',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onSelectAction('contact');
        onClose();
      }
    }
  ], [onClose, onSelectAction]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const lower = query.toLowerCase();
    return items.filter(
      item =>
        item.title.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-[#0a0a0c] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden font-mono text-sm z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-800/80 bg-neutral-900/40">
              <Search className="w-4 h-4 text-emerald-400" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Type a command or search section (e.g., Audito, Resume, Skills)..."
                autoFocus
                className="w-full bg-transparent text-neutral-200 placeholder-neutral-500 focus:outline-none text-xs sm:text-sm"
              />
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-neutral-300 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-neutral-500 text-xs">
                  No commands matching "{query}"
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors duration-150 ${
                        isSelected
                          ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                          : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Terminal className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-neutral-600'}`} />
                        <span className="text-xs font-medium">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700/50">
                          {item.category}
                        </span>
                        {item.category === 'Links' ? (
                          <ExternalLink className="w-3 h-3 text-neutral-500" />
                        ) : (
                          <ArrowRight className="w-3 h-3 text-neutral-500" />
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer hints */}
            <div className="px-4 py-2 border-t border-neutral-800/80 bg-neutral-950/70 flex items-center justify-between text-[11px] text-neutral-500">
              <div className="flex items-center gap-3">
                <span><kbd className="px-1 py-0.5 bg-neutral-900 border border-neutral-800 rounded">↑↓</kbd> navigate</span>
                <span><kbd className="px-1 py-0.5 bg-neutral-900 border border-neutral-800 rounded">↵</kbd> select</span>
                <span><kbd className="px-1 py-0.5 bg-neutral-900 border border-neutral-800 rounded">ESC</kbd> close</span>
              </div>
              <span className="text-emerald-500/70">YASH.OS // CMD+K</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
