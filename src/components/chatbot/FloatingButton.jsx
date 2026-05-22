import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAtom, FaCommentDots } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const FloatingButton = ({ onClick, isOpen, showNotification, setShowNotification }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      
      {/* Floating Invite Notification Balloon */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.5 }}
            className="mb-4 mr-2 bg-[#090D1A]/95 border border-cyan-500/30 p-3.5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[240px] text-left relative group select-none shadow-[0_8px_30px_rgba(6,182,212,0.2)]"
          >
            {/* Decorative arrow pointing to the button */}
            <div className="absolute bottom-0 right-8 translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-[#090D1A] border-r border-b border-cyan-500/30"></div>
            
            {/* Direct notification dismiss button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowNotification(false);
              }}
              className="absolute top-2 right-2 text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Dismiss notification"
            >
              <HiX className="text-xs" />
            </button>

            <div className="flex gap-2.5 items-start pr-3">
              <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                <FaAtom className="text-xs animate-spin [animation-duration:8s]" />
              </div>
              <div>
                <h5 className="text-[11px] font-display font-bold text-white uppercase tracking-wider">EAS Assistant</h5>
                <p className="text-[10px] font-sans font-light text-slate-300 leading-normal mt-0.5">
                  Have questions about admissions, lab infrastructure, or hostels? Chat with me!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Dynamic Trigger Button */}
      <motion.button
        onClick={onClick}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.93 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl relative overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'bg-slate-900 border border-cyan-500/30 shadow-cyan-500/5 glow-cyan'
            : 'bg-gradient-to-br from-[#06B6D4] to-blue-600 shadow-cyan-500/20 glow-cyan'
        }`}
        aria-label="Toggle Chatbot Assistant"
      >
        {/* Pulsating background ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-25 scale-105 pointer-events-none"></span>
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiX className="text-2xl text-cyan-400" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <FaCommentDots className="text-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
};

export default FloatingButton;
