import React, { useState } from 'react';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  // WhatsApp helper escalation redirect
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "917923248700";
    const message = encodeURIComponent("Hello! I am inquiring about admissions, infrastructure standards, or residential hostel routine life at A Success Science School. Please connect me with a student advisor.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="px-4 py-4 border-t border-slate-900 bg-slate-950/60 backdrop-blur-md">
      <form onSubmit={handleSubmit} className="flex gap-2.5 items-center">
        
        {/* WhatsApp escalation button */}
        <button
          type="button"
          onClick={handleWhatsAppRedirect}
          className="w-10 h-10 rounded-xl border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shrink-0 cursor-pointer"
          title="Direct WhatsApp Chat"
          aria-label="Direct WhatsApp Chat"
        >
          <FaWhatsapp className="text-lg" />
        </button>

        {/* Dynamic Text field input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your inquiry..."
            className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 font-sans"
          />
          
          <button
            type="submit"
            disabled={!text.trim()}
            className={`absolute right-1.5 top-1.5 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
              text.trim()
                ? 'bg-gradient-to-br from-[#06B6D4] to-blue-600 text-white cursor-pointer glow-cyan'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
            aria-label="Submit Prompt"
          >
            <FaPaperPlane className="text-[10px]" />
          </button>
        </div>

      </form>
    </div>
  );
};

export default ChatInput;
