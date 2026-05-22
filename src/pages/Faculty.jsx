import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaEnvelope, FaSearch, FaMicroscope } from 'react-icons/fa';
import { facultyData } from '../constants/facultyData';
import SectionHeader from '../components/ui/SectionHeader';
import { fadeInUp, staggerContainer, itemReveal } from '../animations/motionVariants';

const Faculty = () => {
  const departments = ['All', 'Physics', 'Biomedical', 'Computer Science', 'Engineering'];

  // Read initial department from URL query parameters on mount
  const getInitialDept = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const deptParam = params.get('dept');
      if (deptParam) {
        const found = departments.find(d => d.toLowerCase() === deptParam.toLowerCase());
        return found || 'All';
      }
    }
    return 'All';
  };

  const [selectedDept, setSelectedDept] = useState(getInitialDept);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle tab clicks: update state & update URL bar without page re-render
  const handleDeptChange = (dept) => {
    setSelectedDept(dept);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (dept === 'All') {
        url.searchParams.delete('dept');
      } else {
        url.searchParams.set('dept', dept);
      }
      window.history.pushState(null, '', url.pathname + url.search);
    }
  };

  // Filter faculty based on department & search query
  const filteredFaculty = facultyData.filter((teacher) => {
    const matchesDept = selectedDept === 'All' || teacher.department === selectedDept;
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          teacher.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="relative pb-24 bg-neutral-bg">
      
      {/* Editorial Header with Cyber-Grid Backdrop */}
      <section className="relative bg-science-grid-dark text-white py-24 overflow-hidden border-b border-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#06B6D4] uppercase rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 font-display shadow-cyan-glow">
              <FaMicroscope className="animate-pulse-subtle" /> Elite Mentorship & Research
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Distinguished <span className="cyan-gradient-text">Faculty</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Meet our doctorate-level researchers, neural architects, and mechatronic coaches preparing the next squad of science leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Futuristic Roster Controls Console */}
      <section className="py-12 bg-slate-950/60 border-b border-slate-900 backdrop-blur-md sticky top-[72px] z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => handleDeptChange(dept)}
                className={`px-5 py-2.5 rounded-xl font-display text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  selectedDept === dept
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-semibold shadow-cyan-glow'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-cyan-glow'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search researchers, models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 font-sans shadow-sm"
            />
            <FaSearch className="absolute left-4 top-3.5 text-slate-400 text-xs" />
          </div>

        </div>
      </section>

      {/* Faculty Roster Grid */}
      <section className="py-24 relative">
        {/* Subtle grid backdrop for roster area */}
        <div className="absolute inset-0 bg-science-grid opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <AnimatePresence mode="wait">
            {filteredFaculty.length > 0 ? (
              <motion.div
                key={selectedDept + searchQuery}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredFaculty.map((teacher) => (
                  <motion.div
                    key={teacher.id}
                    variants={itemReveal}
                    className="group flex flex-col h-full glass-card rounded-3xl border border-slate-800/80 hover:border-cyan-400/30 hover:shadow-cyan-glow transition-all duration-500 overflow-hidden"
                  >
                    {/* Visual aspect */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                       <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                      <span className="absolute bottom-4 left-4 bg-slate-950/80 text-cyan-400 text-[10px] font-display font-bold uppercase tracking-wider px-3.5 py-1 rounded-lg border border-cyan-400/20 backdrop-blur-md shadow-cyan-glow">
                        {teacher.department}
                      </span>
                    </div>
 
                    {/* Meta info */}
                    <div className="p-8 flex-grow flex flex-col justify-between gap-6">
                      <div className="flex flex-col gap-3">
                        <div>
                          <h3 className="font-display font-semibold text-xl text-white leading-tight">
                            {teacher.name}
                          </h3>
                          <span className="block text-xs font-display font-semibold text-cyan-500 uppercase tracking-widest mt-1">
                            {teacher.role}
                          </span>
                        </div>
                        <p className="text-sm font-sans font-light text-slate-300 leading-relaxed">
                          {teacher.bio}
                        </p>
                      </div>
 
                      {/* Credentials list */}
                      <div className="border-t border-slate-800 pt-6">
                        <div className="flex flex-col gap-2.5 text-xs font-sans text-slate-400">
                          <div>
                            <span className="font-semibold text-white font-display">Specialization:</span> <span className="text-slate-300">{teacher.subject}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-white font-display">Credentials:</span> <span className="text-slate-300">{teacher.qualification}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-white font-display">Mentorship:</span> <span className="text-slate-300">{teacher.experience}</span>
                          </div>
                        </div>
                        
                        {/* Social mail connectors */}
                        <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-800">
                          <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors">
                            <FaTwitter className="text-sm" />
                          </a>
                          <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors">
                            <FaLinkedin className="text-sm" />
                          </a>
                          <a href={`mailto:${teacher.socials.email}`} className="text-slate-400 hover:text-cyan-500 transition-colors flex items-center gap-1.5 text-xs font-sans ml-auto">
                            <FaEnvelope className="text-xs text-cyan-500" /> {teacher.socials.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-slate-400 font-sans"
              >
                No researchers match your search parameters. Please refine your filter options.
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
};

export default Faculty;
