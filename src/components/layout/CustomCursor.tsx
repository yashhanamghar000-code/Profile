import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor], a, button, [role="button"]');
      if (interactive) {
        setIsHovered(true);
        const customType = interactive.getAttribute('data-cursor');
        if (customType) {
          setCursorText(customType);
        } else if (interactive.tagName === 'A' || interactive.getAttribute('href')) {
          setCursorText('OPEN ↗');
        } else if (interactive.classList.contains('cursor-grab') || interactive.classList.contains('cursor-move')) {
          setCursorText('DRAG');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `translate(-50%, -50%)`
      }}
    >
      {cursorText ? (
        <div className="px-2.5 py-1 rounded-full bg-emerald-500 text-[#050505] font-mono text-[10px] font-bold tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.5)] flex items-center justify-center animate-in fade-in zoom-in-75 duration-150">
          {cursorText}
        </div>
      ) : (
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? 'w-6 h-6 bg-emerald-400/20 border border-emerald-400/80 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
              : 'w-2.5 h-2.5 bg-emerald-400 shadow-[0_0_10px_#10b981]'
          }`}
        />
      )}
    </div>
  );
};
