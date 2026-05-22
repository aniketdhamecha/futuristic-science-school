import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAtom } from 'react-icons/fa';
import { facilitiesData } from '../data/facilitiesData';
import SectionHeader from '../components/ui/SectionHeader';
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/motionVariants';

const Facilities = () => {
  return (
    <div className="relative pb-24 bg-neutral-bg">
      
      {/* Editorial Header with Science Grid */}
      <section className="relative bg-science-grid-dark text-white py-24 overflow-hidden border-b border-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#06B6D4] uppercase rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 font-display shadow-cyan-glow">
              <FaAtom className="animate-spin text-xs" style={{ animationDuration: '8s' }} /> Advanced Infrastructures
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Our Modern <span className="cyan-gradient-text">Installations</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Explore our collegiate biotech cleanrooms, astrophysics solar domes, supercomputer core racks, and premium coding suites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Asymmetric Sections */}
      <section className="py-24 bg-neutral-bg relative border-t border-slate-900">
        <div className="absolute inset-0 bg-science-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col gap-24">
            {facilitiesData.map((facility, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={facility.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center`}
                >
                  
                  {/* Image Column */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={isEven ? fadeInLeft : fadeInRight}
                    className={`lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[16/10] shadow-2xl border border-slate-800 hover:border-cyan-400/20 hover:shadow-cyan-glow transition-all duration-500 ${
                      isEven ? 'lg:order-first' : 'lg:order-last'
                    }`}
                  >
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={isEven ? fadeInRight : fadeInLeft}
                    className="lg:col-span-6 flex flex-col gap-6"
                  >
                    <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase font-display">
                      Premium Facility Spec
                    </span>
                    <h3 className="text-2xl md:text-4xl font-display font-semibold text-white">
                      {facility.title}
                    </h3>
                    <p className="text-slate-400 font-sans font-light leading-relaxed">
                      {facility.description}
                    </p>

                    {/* Highlights Checkmark Grid */}
                    <div className="pt-4 border-t border-slate-800">
                      <h4 className="font-display font-semibold text-xs tracking-wider text-white uppercase mb-4">
                        Facility Highlights & Specs
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {facility.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2.5 text-xs md:text-sm font-sans text-slate-400">
                            <FaCheckCircle className="text-cyan-500 text-sm flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Facilities;
