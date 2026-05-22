import React from 'react';
import { motion } from 'framer-motion';
import TypingIndicator from './TypingIndicator';
import QuickQuestions from './QuickQuestions';
import { FaAtom } from 'react-icons/fa';

const ChatMessages = ({ messages, isTyping, messagesEndRef, onSelectQuestion }) => {
  
  // Checking if only the welcome message is present to display the full welcome screen layout
  const isFreshSession = messages.length <= 1;

  return (
    <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
      
      {/* 1. PREMIUM INTRODUCTORY WELCOME DASHBOARD */}
      {isFreshSession && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-5 rounded-2xl border border-cyan-500/10 bg-cyan-950/5 relative overflow-hidden select-none mb-2"
        >
          {/* Subtle back glowing accent */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FaAtom className="animate-spin [animation-duration:15s]" />
            </div>
            <div>
              <h2 className="text-sm md:text-base font-display font-bold text-white leading-normal">
                Welcome to A Success Science School 👋
              </h2>
              <p className="text-[10px] font-sans font-light text-slate-400">
                Authorized Regulatory STEM Assistant
              </p>
            </div>
          </div>
          
          <p className="text-[11px] font-sans font-light leading-relaxed text-slate-300 mb-4">
            How can we help you today? Explore hosteling rules, synchronized CBSE/GSEB STEM preparatories, advanced laboratories specifications, and fee schedules directly.
          </p>

          <QuickQuestions onSelectQuestion={onSelectQuestion} />
        </motion.div>
      )}

      {/* 2. LOG OF PREVIOUS CONVERSATIONS */}
      {messages.map((msg, index) => {
        const isBot = msg.sender === 'bot';

        // Skip rendering default initial welcome in active conversation to save screen real estate
        if (msg.isWelcome && !isFreshSession) return null;

        return (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex gap-2.5 items-end max-w-[85%] ${
              isBot ? 'self-start justify-start' : 'self-end justify-end ml-auto'
            }`}
          >
            {/* Bot Avatar Icon */}
            {isBot && (
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0 text-cyan-400 text-xs shadow-cyan-glow select-none">
                🤖
              </div>
            )}

            <div className="flex flex-col gap-1">
              <div
                className={`p-3.5 rounded-2xl text-xs md:text-sm font-sans font-light leading-relaxed ${
                  isBot
                    ? 'rounded-tl-sm border border-cyan-500/10 bg-cyan-950/15 backdrop-blur-md text-slate-300'
                    : 'rounded-tr-sm border border-slate-800 bg-slate-900 text-white'
                }`}
              >
                {msg.text}
              </div>
              <span className={`text-[8px] font-mono text-slate-500 select-none ${
                isBot ? 'self-start pl-1' : 'self-end pr-1'
              }`}>
                {msg.timestamp}
              </span>
            </div>

            {/* User Avatar Initial */}
            {!isBot && (
              <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-200 text-xs select-none">
                👤
              </div>
            )}
          </motion.div>
        );
      })}

      {/* 3. SIMULATED ACTIVE BOT COMPUTATION LOG */}
      {isTyping && <TypingIndicator />}

      {/* 4. AUTO-SCROLL ANCHOR TARGET */}
      <div ref={messagesEndRef} />

    </div>
  );
};

export default ChatMessages;
