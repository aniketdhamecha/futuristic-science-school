import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/motionVariants';

const SectionHeader = ({ 
  title, 
  subtitle, 
  badge, 
  align = 'center',
  className = '' 
}) => {
  const isLeft = align === 'left';
  
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={`max-w-3xl mb-16 ${isLeft ? 'text-left mr-auto' : 'text-center mx-auto'} ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-[#06B6D4] uppercase rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 font-display">
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6 tracking-tight leading-tight text-white">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-slate-300 font-sans font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      
      {/* Editorial Decorative Line */}
      <div className={`mt-6 flex items-center gap-1.5 ${isLeft ? 'justify-start mr-auto' : 'justify-center mx-auto'}`}>
        <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-gold glow-gold"></div>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
