import React from 'react';
import { motion } from 'framer-motion';

const defaultQuestions = [
  "Admissions Process",
  "Hostel Facilities",
  "Daily Hostel Routine",
  "JEE/NEET Preparation",
  "Fees Structure & Scholarships",
  "Science Labs Standards",
  "Campus Safety Protocols",
  "Bus Facilities & Routes",
  "Contact School Information"
];

const QuickQuestions = ({ onSelectQuestion }) => {
  return (
    <div className="flex flex-col gap-2 my-2 py-1 select-none">
      <span className="text-[10px] uppercase font-display font-semibold tracking-wider text-slate-500 block mb-1">
        Select a quick topic:
      </span>
      <div className="flex flex-wrap gap-2">
        {defaultQuestions.map((q, idx) => (
          <motion.button
            key={idx}
            onClick={() => onSelectQuestion(q)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.04, type: 'spring', stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.03, borderColor: 'rgba(6,182,212,0.5)', backgroundColor: 'rgba(6,182,212,0.08)' }}
            whileTap={{ scale: 0.97 }}
            className="px-3 py-1.5 rounded-full border border-slate-800 bg-slate-950/40 text-[11px] text-slate-300 font-sans font-light hover:text-cyan-400 transition-all duration-300 cursor-pointer text-left"
          >
            ⚡ {q}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickQuestions;
