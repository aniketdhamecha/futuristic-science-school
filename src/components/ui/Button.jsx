import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  disabled = false,
  icon
}) => {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-display font-medium text-sm tracking-wider uppercase transition-all duration-300 select-none overflow-hidden outline-none";
  
  const variants = {
    primary: "bg-white text-slate-950 hover:bg-slate-200 shadow-premium font-semibold",
    secondary: "bg-secondary text-white hover:bg-blue-800 shadow-premium",
    cyan: "text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 shadow-cyan-glow font-semibold",
    royal: "bg-secondary text-white hover:bg-blue-700 shadow-blue-glow font-semibold",
    gold: "text-primary bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:from-[#BFA030] hover:to-[#BFA030] glow-gold shadow-md font-semibold",
    outline: "border border-cyan-500/30 text-primary hover:bg-cyan-500/5 hover:border-cyan-500/60",
    outlineWhite: "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
    dark: "bg-slate-900/90 text-white hover:bg-black border border-cyan-500/20 shadow-2xl backdrop-blur-md"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`${baseStyle} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="text-base transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
};

export default Button;
