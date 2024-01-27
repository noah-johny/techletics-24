"use client";

import { motion, Transition } from "framer-motion";
export default function AnimatedSectionLayout({
  initial,
  transition,
  children,
  whileInView,
  viewPort,
  noanimation = true,
}: {
  initial: any;
  transition: Transition;
  children: React.ReactNode;
  whileInView?: any;
  viewPort?: any;
  noanimation?: boolean;
}) {
  if (noanimation) {
    return <section>{children}</section>;
  }
  return (
    <motion.section
      className="section"
      initial={initial}
      transition={transition}
      whileInView={whileInView}
      viewport={viewPort}
    >
      {children}
    </motion.section>
  );
}
