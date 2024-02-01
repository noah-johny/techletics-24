"use client";

import { useContext, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { CustomCursorContext } from "@/context/custom-cursor-context";
import "@/app/globals.css";

const Cursor = () => {
  const { cursorVariant, showCursor } = useContext(CustomCursorContext)!;

  const [mousePosition, setMousePosition] = useState({
    x: -30,
    y: -30,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      height: 16,
      width: 16,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "#dfff1b",
    },
    title: {
      height: 36,
      width: 36,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
    highlightedTitle: {
      height: 96,
      width: 96,
      x: mousePosition.x - 48,
      y: mousePosition.y - 48,
      backgroundColor: "#dfff1b",
      mixBlendMode: "difference",
    },
    text: {
      height: 36,
      width: 36,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
  };

  return (
    showCursor && (
      <motion.div
        className="rounded-full fixed top-0 left-0 pointer-events-none z-20"
        variants={variants}
        animate={cursorVariant}
      />
    )
  );
};

export default Cursor;
