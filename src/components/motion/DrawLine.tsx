"use client";

import { motion } from "motion/react";

export default function DrawLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={`origin-left ${className ?? ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
    />
  );
}
