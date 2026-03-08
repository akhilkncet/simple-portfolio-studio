'use client';

import { useEffect } from 'react';

export const useCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const hoverElements = document.querySelectorAll('.cursor-hover, a, button, input, textarea');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.transform = `translate(-50%, -50%)`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.backgroundColor = '#FBFF48';
        cursor.style.mixBlendMode = 'normal';
        cursor.style.border = '2px solid black';
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.backgroundColor = '#fff';
        cursor.style.mixBlendMode = 'difference';
        cursor.style.border = 'none';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};
