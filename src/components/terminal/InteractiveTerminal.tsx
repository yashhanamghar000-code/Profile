import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { executeCommand, registry } from '../../lib/terminalEngine';
import { TerminalOutputLine } from '../../types';

interface InteractiveTerminalProps {
  onMatrixTrigger?: () => void;
  isFloatingModal?: boolean;
  onClose?: () => void;
}

const POPULAR_COMMANDS = [
  'help',
  'whoami',
  'projects',
  'audito',
  'dastavej',
  'yashalyze',
  'experience',
  'skills',
  'models',
  'creatix',
  'sudo hire yash',
  'clear'
];

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  onMatrixTrigger,
  isFloatingModal = false,
  onClose
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalOutputLine[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'YASH.OS [Version 4.2.0-Production-LTS]'
    },
    {
      id: 'init-2',
      type: 'system',
      content: 'AI Developer Kernel initialized. Connected to Hugging Face & RAG Pipeline.'
    },
    {
      id: 'init-3',
      type: 'output',
      content: "Type 'help' for command list or click any command chip below."
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommandRun = (commandStr: string) => {
    const trimmed = commandStr.trim();
    if (!trimmed) return;

    // Add input to history
    const inputLine: TerminalOutputLine = {
      id: `in-${Date.now()}`,
      type: 'input',
      content: trimmed
    };

    // Update command history for Up/Down arrows
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryPointer(-1);

    // Execute through engine
    const res = executeCommand(trimmed);

    if (res.action === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (res.action === 'matrix') {
      if (onMatrixTrigger) onMatrixTrigger();
    }

    if (res.action === 'scroll-to' && res.target) {
      const targetEl = document.getElementById(res.target);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const outputLines: TerminalOutputLine[] = res.lines.map((l, i) => ({
      id: `out-${Date.now()}-${i}`,
      type: l.type,
      content: l.content,
      url: l.url,
      urlLabel: l.urlLabel
    }));

    setHistory(prev => [...prev, inputLine, ...outputLines]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandRun(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInput(commandHistory[nextPointer] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length === 0 || historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setInput('');
      } else {
        setHistoryPointer(nextPointer);
        setInput(commandHistory[nextPointer] || '');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (!input.trim()) return;
      const allCmds = registry.getCommandNames();
      const match = allCmds.find(c => c.startsWith(input.toLowerCase().trim()));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <div
      id="interactive-terminal"
      className={`flex flex-col bg-[#08080a] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm transition-all duration-300 ${
        isMaximized ? 'fixed inset-4 z-50 rounded-lg' : 'w-full'
      }`}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d0e12] border-b border-neutral-800 select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition"
              title="Close"
            />
            <span
              onClick={() => setHistory([])}
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 cursor-pointer transition"
              title="Clear terminal"
            />
            <span
              onClick={() => setIsMaximized(prev => !prev)}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 cursor-pointer transition"
              title="Maximize"
            />
          </div>
          <div className="flex items-center gap-2 text-neutral-400 text-xs">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-neutral-300">visitor@yash-os:~</span>
            <span className="hidden sm:inline text-neutral-600">--bash</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-emerald-500/80 hidden md:inline-block">
            TAB for Autocomplete
          </span>
          <button
            onClick={() => setIsMaximized(prev => !prev)}
            className="text-neutral-500 hover:text-neutral-300 transition cursor-pointer"
            aria-label="Maximize window"
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div
        ref={terminalBodyRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 min-h-[280px] max-h-[420px] p-4 sm:p-5 overflow-y-auto space-y-2 bg-[#050507] text-neutral-300 cursor-text"
      >
        {history.map(item => {
          if (item.type === 'input') {
            return (
              <div key={item.id} className="flex items-center gap-2 text-emerald-400 pt-1">
                <span className="text-emerald-500 font-semibold select-none">visitor@yash-os:~$</span>
                <span className="text-neutral-100 font-medium">{item.content}</span>
              </div>
            );
          }

          if (item.type === 'system') {
            return (
              <div key={item.id} className="text-cyan-400/90 text-xs py-0.5">
                {item.content}
              </div>
            );
          }

          if (item.type === 'ascii') {
            return (
              <div key={item.id} className="text-emerald-400 font-bold text-sm sm:text-base py-1 border-y border-emerald-500/20 my-1 bg-emerald-950/20 px-2 rounded">
                {item.content}
              </div>
            );
          }

          if (item.type === 'error') {
            return (
              <div key={item.id} className="text-rose-400 text-xs py-0.5">
                {item.content}
              </div>
            );
          }

          if (item.type === 'link') {
            return (
              <div key={item.id} className="py-1">
                <a
                  href={item.url}
                  target={item.url?.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-xs transition underline decoration-emerald-500/60 cursor-pointer"
                >
                  <span>{item.urlLabel || item.content}</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            );
          }

          // Default output
          return (
            <div key={item.id} className="text-neutral-300 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
              {item.content}
            </div>
          );
        })}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-emerald-500 font-semibold select-none shrink-0">
            visitor@yash-os:~$
          </span>
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-neutral-100 placeholder-neutral-700 focus:outline-none text-xs sm:text-sm"
              placeholder="type 'help', 'audito', 'projects', 'sudo hire yash'..."
              spellCheck={false}
              autoComplete="off"
            />
            <span className="inline-block w-2 h-4 bg-emerald-400 cursor-blinking align-middle ml-0.5" />
          </div>
          <button
            onClick={() => handleCommandRun(input)}
            className="text-neutral-500 hover:text-emerald-400 transition p-1 cursor-pointer sm:hidden"
            aria-label="Submit command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Interactive Command Chips */}
      <div className="p-3 bg-[#0a0b0e] border-t border-neutral-800/80">
        <div className="flex items-center gap-1.5 mb-2 text-[11px] text-neutral-400">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>Click to execute command:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {POPULAR_COMMANDS.map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommandRun(cmd)}
              className="px-2 py-1 rounded bg-neutral-900/80 hover:bg-emerald-500/20 hover:text-emerald-300 border border-neutral-800 hover:border-emerald-500/50 text-neutral-400 text-[11px] transition-all cursor-pointer select-none"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
