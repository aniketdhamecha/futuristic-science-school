import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTimes, FaArrowRight, FaSearch, FaAtom } from 'react-icons/fa';
import { eventsData } from '../data/eventsData';
import SectionHeader from '../components/ui/SectionHeader';
import { fadeInUp, staggerContainer, itemReveal } from '../animations/motionVariants';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = ['All', 'Physics', 'Biomedical', 'Computer Science', 'Engineering'];

  // Filter events based on category and search query
  const filteredEvents = eventsData.filter((event) => {
    const matchesCat = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative pb-24 bg-neutral-bg">
      
      {/* Editorial Header */}
      <section className="relative bg-science-grid-dark text-white py-24 overflow-hidden border-b border-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#06B6D4] uppercase rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 font-display shadow-cyan-glow">
              <FaAtom className="animate-spin text-xs" style={{ animationDuration: '6s' }} /> Science Pulse
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Events & <span className="cyan-gradient-text">Symposia</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Advanced research colloquia, biomedical forums, autonomous mechatronics showcases, and coding cups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roster Controls */}
      <section className="py-12 bg-slate-950/60 border-b border-slate-900 backdrop-blur-md sticky top-[72px] z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
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

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search symposia, venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 font-sans shadow-sm"
            />
            <FaSearch className="absolute left-4 top-3.5 text-slate-400 text-xs" />
          </div>

        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-science-grid opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <AnimatePresence mode="wait">
            {filteredEvents.length > 0 ? (
              <motion.div
                key={selectedCategory + searchQuery}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemReveal}
                    className="group flex flex-col justify-between p-6 glass-card rounded-3xl border border-slate-800/80 hover:border-cyan-400/30 hover:shadow-cyan-glow transition-all duration-500"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden relative border border-slate-850">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <span className="absolute top-4 left-4 bg-slate-950/80 text-cyan-400 text-[10px] font-display font-bold uppercase tracking-wider px-3.5 py-1 rounded-lg border border-cyan-400/20 backdrop-blur-md shadow-cyan-glow">
                          {event.tag}
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <span className="text-xs font-display font-semibold text-cyan-500 uppercase tracking-widest block">
                          {event.date}
                        </span>
                        <h3 className="font-display font-semibold text-xl text-white leading-tight group-hover:text-cyan-500 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-sm font-sans font-light text-slate-400 leading-relaxed">
                          {event.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-800 mt-6 pt-5 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-sans text-slate-400">
                        <FaMapMarkerAlt className="text-cyan-500" />
                        <span className="text-slate-400">{event.venue}</span>
                      </div>
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="text-xs font-display font-bold text-white inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                      >
                        Read Details <FaArrowRight />
                      </button>
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
                No upcoming events found matching your criteria.
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* FULL EVENT DETAILS MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
          >
            {/* Close trigger overlay background */}
            <div className="absolute inset-0" onClick={() => setSelectedEvent(null)}></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full max-h-[85vh] bg-[#090D1A] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 text-white"
            >
              
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-slate-950/80 border border-cyan-400/20 flex items-center justify-center text-white hover:text-cyan-400 focus:outline-none hover:scale-105 active:scale-95 transition-all duration-300 shadow-cyan-glow"
                aria-label="Close Modal"
              >
                <FaTimes className="text-sm" />
              </button>

              {/* Banner Image */}
              <div className="w-full aspect-[21/9] overflow-hidden relative">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-6 bg-cyan-500 text-white text-[10px] font-display font-bold uppercase tracking-wider px-3.5 py-1 rounded-lg border border-cyan-400/20 shadow-cyan-glow">
                  {selectedEvent.tag}
                </span>
              </div>

              {/* Scrolling Content area */}
              <div className="p-8 overflow-y-auto flex flex-col gap-6">
                <div>
                  <span className="text-xs font-display font-semibold text-cyan-400 uppercase tracking-widest">
                    {selectedEvent.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mt-2">
                    {selectedEvent.title}
                  </h3>
                </div>

                {/* Event specs grid */}
                <div className="grid grid-cols-3 gap-4 bg-slate-950 border border-slate-900 rounded-2xl p-4 text-xs font-sans text-slate-350">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white font-display flex items-center gap-1.5">
                      <FaCalendarAlt className="text-cyan-500" /> Date
                    </span>
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white font-display flex items-center gap-1.5">
                      <FaClock className="text-cyan-500" /> Timing
                    </span>
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white font-display flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-cyan-500" /> Venue
                    </span>
                    <span>{selectedEvent.venue}</span>
                  </div>
                </div>

                {/* Detailed descriptions */}
                <div className="text-slate-400 font-sans font-light leading-relaxed flex flex-col gap-4">
                  <p className="font-semibold text-white">{selectedEvent.excerpt}</p>
                  <p>{selectedEvent.content}</p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Events;
