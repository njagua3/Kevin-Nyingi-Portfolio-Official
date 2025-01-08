import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsPointer(window.getComputedStyle(e.target as Element).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div 
        className="fixed w-4 h-4 border-2 border-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: position.x - 8,
          top: position.y - 8,
          transition: 'transform 0.1s',
          transform: isPointer ? 'scale(1.5)' : 'scale(1)'
        }}
      />
      <div 
        className="fixed w-1 h-1 bg-blue-500 rounded-full pointer-events-none z-50"
        style={{ 
          left: position.x,
          top: position.y
        }}
      />
    </>
  );
}