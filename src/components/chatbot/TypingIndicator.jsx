import React from 'react';
import { motion } from 'framer-motion';

const dotVariants = {
  initial: {
    y: 0
  },
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const TypingIndicator = () => {
  return (
    <div className="flex gap-2.5 items-end justify-start max-w-[85%] select-none mb-3">
      {/* Bot Avatar Icon */}
      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0 text-cyan-400 text-xs shadow-cyan-glow">
        🤖
      </div>

      <div className="p-3.5 rounded-2xl rounded-tl-sm border border-cyan-500/10 bg-cyan-950/15 backdrop-blur-md text-slate-300">
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex items-center gap-1.5 px-1 py-1"
        >
          <motion.span variants={dotVariants} className="w-1.5 h-1.5 rounded-full bg-cyan-400 block shadow-cyan-glow" />
          <motion.span variants={dotVariants} className="w-1.5 h-1.5 rounded-full bg-cyan-400 block shadow-cyan-glow" />
          <motion.span variants={dotVariants} className="w-1.5 h-1.5 rounded-full bg-cyan-400 block shadow-cyan-glow" />
        </motion.div>
      </div>
    </div>
  );
};

export default TypingIndicator;
