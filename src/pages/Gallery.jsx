import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand, FaAtom } from 'react-icons/fa';
import { galleryData } from '../constants/galleryData';
import SectionHeader from '../components/ui/SectionHeader';
import { fadeInUp, staggerContainer, itemReveal } from '../animations/motionVariants';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Campus', 'Labs', 'Facilities', 'Innovations'];

  // Filter gallery items based on category selection
  const filteredGallery = galleryData.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="relative pb-24 bg-neutral-bg">
      
      {/* Editorial Header with Cyber Grid */}
      <section className="relative bg-science-grid-dark text-white py-24 overflow-hidden border-b border-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#06B6D4] uppercase rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 font-display shadow-cyan-glow">
              <FaAtom className="animate-spin text-xs" style={{ animationDuration: '6s' }} /> Immersive Canvas
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Our Visual <span className="cyan-gradient-text">Chronicle</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Explore the daily life, elite installations, research simulations, and autonomous drone arenas at A Success School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs Console */}
      <section className="py-12 bg-slate-950/60 border-b border-slate-900 backdrop-blur-md sticky top-[72px] z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-display text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-semibold shadow-cyan-glow'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-cyan-glow'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-science-grid opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemReveal}
                  className="group relative rounded-3xl overflow-hidden shadow-premium glass-card border border-slate-800/80 aspect-[4/3] cursor-pointer flex flex-col justify-end hover:border-cyan-400/30 hover:shadow-cyan-glow transition-all duration-500"
                  onClick={() => setLightboxImage(item)}
                >
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Black visual gradient and details layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="relative z-10 p-8 text-white flex flex-col gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-display font-bold uppercase tracking-widest text-cyan-400">
                      {item.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg md:text-xl leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans font-light text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Top Expansion Icon Overlay */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-slate-950/60 backdrop-blur-md flex items-center justify-center text-white border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                    <FaExpand className="text-xs text-cyan-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX COMPONENT */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
          >
            {/* Close trigger overlay background */}
            <div className="absolute inset-0" onClick={() => setLightboxImage(null)}></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] bg-slate-900 border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 text-white"
            >
              
              {/* Floating Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-slate-950/80 border border-cyan-400/20 flex items-center justify-center text-white hover:text-cyan-400 focus:outline-none hover:scale-105 active:scale-95 transition-all duration-300 shadow-cyan-glow"
                aria-label="Close Lightbox"
              >
                <FaTimes className="text-sm" />
              </button>

              {/* Aspect Visual Content */}
              <div className="w-full flex-grow overflow-hidden flex items-center justify-center bg-black/50 p-4">
                <img 
                  src={lightboxImage.image} 
                  alt={lightboxImage.title} 
                  className="max-w-full max-h-[55vh] object-contain rounded-2xl border border-cyan-500/10"
                />
              </div>

              {/* Details strip */}
              <div className="p-8 bg-[#0F172A] border-t border-cyan-500/10 flex flex-col gap-2.5">
                <span className="text-xs font-display font-semibold text-cyan-400 uppercase tracking-wider">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white">
                  {lightboxImage.title}
                </h3>
                <p className="text-sm font-sans font-light text-slate-400 leading-relaxed">
                  {lightboxImage.description}
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;
