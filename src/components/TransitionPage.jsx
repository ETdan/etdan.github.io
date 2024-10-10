import React from "react";
import { motion } from "framer-motion";

export function TransitionPage({ isVisible, darkMode }) {
  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        daniel.dev
      </motion.h1>
    </motion.div>
  );
}
