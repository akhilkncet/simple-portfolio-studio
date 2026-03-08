import { useEffect } from 'react';

const HOVER_SELECTOR = '.cursor-hover, a, button, input, textarea';

export const useCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.transform = 'translate(-50%, -50%)';
    };

    const handleMouseEnter = () => {
      cursor.style.width = '60px';
      cursor.style.height = '60px';
      cursor.style.backgroundColor = '#FBFF48';
      cursor.style.mixBlendMode = 'normal';
      cursor.style.border = '2px solid black';
    };

    const handleMouseLeave = () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.backgroundColor = '#fff';
      cursor.style.mixBlendMode = 'difference';
      cursor.style.border = 'none';
    };

    // Use event delegation on document instead of binding to individual elements
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) {
        handleMouseEnter();
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      const related = e.relatedTarget as Element | null;
      if (target?.closest?.(HOVER_SELECTOR) && !related?.closest?.(HOVER_SELECTOR)) {
        handleMouseLeave();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
};
