"use client";

import { CustomCursorContext } from "@/context/custom-cursor-context";
import { useState, useEffect, useContext } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -30, y: -30 });
  const [followerPosition, setFollowerPosition] = useState({ x: -30, y: -30 });
  const [isVisible, setIsVisible] = useState(false);

  const { customCursor } = useContext(CustomCursorContext)!;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setFollowerPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    customCursor && (
      <>
        {/* Cursor Outline */}
        <div
          className="fixed -top-3 -left-3 z-20 pointer-events-none w-8 h-8 -translate-x-1/2 -translate-y-1/2 border-primary border-2 rounded-full"
          style={{
            transform: `translate(${followerPosition.x}px, ${followerPosition.y}px)`,
            opacity: isVisible ? 1 : 0,
          }}
        ></div>
        {/* Cursor Dot */}
        <div
          className="fixed top-0 left-0 z-20 pointer-events-none w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full bg-blend-difference"
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            opacity: isVisible ? 1 : 0,
          }}
        ></div>
      </>
    )
  );
};

export default CustomCursor;
