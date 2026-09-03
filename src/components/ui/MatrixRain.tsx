import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface MatrixRainProps {
  onClose: () => void;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'\'#&_(),.;:?!\\|{}<>[]^~';
    const alphabet = katakana + latin;

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const rainDrops: number[] = Array.from({ length: columns }).map(() => Math.floor(Math.random() * -50));

    const render = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        // Head character is white
        ctx.fillStyle = '#ecfdf5';
        ctx.fillText(text, x, y);

        // Trail is green
        ctx.fillStyle = '#10b981';

        if (y > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animId);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center select-none backdrop-blur-sm">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* HUD Info */}
      <div className="relative z-10 flex flex-col items-center gap-3 bg-neutral-950/80 border border-emerald-500/40 p-5 rounded-lg text-emerald-400 font-mono text-center max-w-sm shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <span className="text-xs uppercase tracking-widest text-emerald-500">CYBER MATRIX STREAM ACTIVE</span>
        <p className="text-sm text-neutral-300">Press <kbd className="px-1.5 py-0.5 border border-neutral-700 rounded bg-neutral-900 text-emerald-400 text-xs">ESC</kbd> or click below to exit</p>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-1.5 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs flex items-center gap-1.5 transition cursor-pointer"
        >
          <X className="w-3.5 h-3.5" /> Close Matrix
        </button>
      </div>
    </div>
  );
};
