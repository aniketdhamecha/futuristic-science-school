import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAtom, FaArrowLeft, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import Button from '../components/ui/Button';

const NotFound = () => {
  // dynamic SEO Page Meta Setup with Best-Practice 404 Noindex tags
  useEffect(() => {
    document.title = '404: Quantum Disalignment | A Success School';
    
    // SEO Best Practice: Inject noindex/nofollow to prevent indexing of error pages
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');

    window.scrollTo(0, 0);

    return () => {
      // Reset default indexing when leaving page
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-neutral-bg text-slate-300 py-20 px-6 overflow-hidden">
      {/* Editorial Blueprints Grid background */}
      <div className="absolute inset-0 bg-science-grid-dark opacity-40 pointer-events-none"></div>
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-xl w-full text-center relative z-10">
        
        {/* Animated Cyber Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-36 h-36 mx-auto mb-10 flex items-center justify-center"
        >
          {/* Pulsating Orbital Rings */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-ping [animation-duration:3s]"></div>
          <div className="absolute -inset-4 rounded-full border border-cyan-500/5 animate-pulse"></div>
          
          <div className="w-24 h-24 rounded-3xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-center shadow-cyan-glow relative">
            <FaAtom className="text-cyan-400 text-5xl animate-spin [animation-duration:15s]" />
            <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-red-500 text-white font-display text-xs font-bold flex items-center justify-center shadow-lg border border-slate-950">
              !
            </span>
          </div>
        </motion.div>

        {/* Big Glitch 404 Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-[10px] font-semibold tracking-widest text-red-400 uppercase rounded-full bg-red-400/10 border border-red-400/20 font-display">
            <FaExclamationTriangle /> Spatial Anomaly Detected
          </span>
          <h1 className="text-7xl md:text-8xl font-display font-black leading-none mb-4 tracking-tighter text-white">
            4<span className="cyan-gradient-text">0</span>4
          </h1>
          <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-6 uppercase tracking-wider">
            Quantum Disalignment
          </h2>
        </motion.div>

        {/* Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base font-sans font-light text-slate-400 leading-relaxed mb-10"
        >
          The academic coordinate you requested has undergone quantum decay, drifted into a parallel timeline, or was relocated during an infrastructure sync. Let us align your trajectory back to the primary school sector.
        </motion.p>

        {/* Interactive Return Mappings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="cyan" icon={<FaArrowLeft className="text-xs" />} className="w-full sm:w-auto !py-3 px-8 text-xs tracking-widest">
              Return to Sector
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 rounded-xl border border-slate-800 hover:border-cyan-500/30 bg-slate-950/80 text-white font-display text-xs font-semibold tracking-widest uppercase hover:bg-slate-900 transition-all flex items-center justify-center gap-2">
              <FaEnvelope className="text-xs text-cyan-400" /> Support Node
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;
