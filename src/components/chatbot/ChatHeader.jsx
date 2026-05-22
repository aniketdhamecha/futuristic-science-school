import React from 'react';
import { FaAtom, FaExpandAlt, FaCompressAlt } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';

const ChatHeader = ({ isExpanded, onToggleExpand, onClose }) => {
  return (
    <div className="px-5 py-4 border-b border-slate-900 bg-slate-950/70 backdrop-blur-md flex items-center justify-between relative select-none">
      
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="flex items-center gap-3">
        {/* Glowing pulsing avatar */}
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center glow-cyan shrink-0 relative">
          <FaAtom className="text-white text-base animate-spin [animation-duration:10s]" />
          {/* Active status pulse dot */}
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-950 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </span>
        </div>
        <div>
          <span className="font-display font-bold text-xs uppercase tracking-widest text-white block">
            EAS AI Assistant
          </span>
          <span className="text-[9px] font-mono text-cyan-400 block uppercase mt-0.5 tracking-wider">
            Online & Ready • STEM v2
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        {/* Expand/Collapse Screen Size Toggle */}
        <button
          onClick={onToggleExpand}
          className="w-7 h-7 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
          title={isExpanded ? "Minimize panel size" : "Expand panel size"}
          aria-label={isExpanded ? "Collapse chatbot" : "Expand chatbot"}
        >
          {isExpanded ? <FaCompressAlt className="text-xs" /> : <FaExpandAlt className="text-xs" />}
        </button>

        {/* Minimize chatbot altogether */}
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
          title="Minimize Chat"
          aria-label="Minimize Chat"
        >
          <HiChevronDown className="text-xl" />
        </button>
      </div>

    </div>
  );
};

export default ChatHeader;
