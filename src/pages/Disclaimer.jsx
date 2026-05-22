import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaExclamationTriangle, 
  FaBookReader, 
  FaCalculator, 
  FaCalendarAlt, 
  FaSyncAlt, 
  FaShieldAlt, 
  FaEnvelope, 
  FaAtom 
} from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

const Disclaimer = () => {
  
  // Dynamic SEO Page Meta Setup
  useEffect(() => {
    document.title = 'Institutional Disclosures & Disclaimer | A Success School';
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Read A Success School's institutional disclosures. Understand our policy on admissions criteria, fee structure adjustments, schedule updates, and information accuracy.");

    // Add or Update Open Graph tags
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', 'Disclaimer | A Success School');
    updateOGTag('og:description', 'Official institutional disclosures, fee updates, and content limitations of A Success School.');
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', window.location.href);

    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const disclaimers = [
    {
      icon: <FaShieldAlt className="text-cyan-400 text-2xl" />,
      title: "Information Accuracy",
      desc: "All scientific abstracts, hostel details, lab assets, and academic calendars are presented strictly for informative description. While verified periodically by our editors, A Success School makes no absolute claims of immediate precision, real-time sync, or perfect visual representation on this website.",
      accent: "border-cyan-500/20"
    },
    {
      icon: <FaBookReader className="text-cyan-400 text-2xl" />,
      title: "Admissions Criteria",
      desc: "Enrollment in our advanced academies remains highly competitive. Utilizing our online form coordinates, downloading catalogs, or calling deans does not create candidate registration or guarantee final enrollment. All placements are contingent upon testing and board reviews.",
      accent: "border-blue-500/20"
    },
    {
      icon: <FaCalculator className="text-cyan-400 text-2xl" />,
      title: "Fee Structures & Scholarships",
      desc: "Tuition structures, boarding costs, digital asset rents, and scholarship pools listed online represent current academic projections. The Academic Trustees reserve full administrative freedom to alter tuition tables or adjust financial aid balances based on institutional resource levels.",
      accent: "border-indigo-500/20"
    },
    {
      icon: <FaCalendarAlt className="text-cyan-400 text-2xl" />,
      title: "Schedule Shifts & Timetables",
      desc: "Classroom timetables, research symposia, circadian rhythm sync coordinates, and hostel routines undergo periodic adjustments. We reserve complete freedom to alter dates, cancel guest panels, or close facilities for mechanical upgrades without generating administrative penalties.",
      accent: "border-purple-500/20"
    },
    {
      icon: <FaSyncAlt className="text-cyan-400 text-2xl" />,
      title: "Dynamic Content Updates",
      desc: "This platform is a living cybernetic asset. We deploy continuous updates to pages, modules, styles, database paths, and scripts at any given millisecond. We assume zero accountability if old bookmarks, cached assets, or deprecated paths become non-functional after updates.",
      accent: "border-cyan-500/20"
    },
    {
      icon: <FaExclamationTriangle className="text-cyan-400 text-2xl" />,
      title: "Liability & Limitation",
      desc: "To the maximum limits permitted under state and federal law, A Success School, its academic trustees, deans, and web developers hold absolute immunity from damages or operational losses arising out of browser glitches, server pauses, database lags, or file downloads.",
      accent: "border-red-500/20"
    }
  ];

  return (
    <div className="relative min-h-screen bg-neutral-bg text-slate-300 pb-24 overflow-x-hidden">
      
      {/* Editorial Science Grid Header */}
      <section className="relative bg-science-grid-dark text-white py-24 overflow-hidden border-b border-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-400/10 border border-cyan-400/20 font-display shadow-cyan-glow">
              <FaExclamationTriangle className="animate-pulse" /> Official Disclosure Index
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Institutional <span className="cyan-gradient-text">Disclaimers</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Transparent, parent-friendly structural declarations governing A Success School website and academic representations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections: Bento Grid */}
      <section className="py-20 bg-neutral-bg relative border-t border-slate-900">
        <div className="absolute inset-0 bg-science-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {disclaimers.map((disc, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className={`p-8 glass-card border ${disc.accent} rounded-3xl flex flex-col gap-6 bento-hover`}
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800/80 flex items-center justify-center shadow-sm flex-shrink-0">
                  {disc.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-white mb-3">
                    {disc.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 font-sans leading-relaxed">
                    {disc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Important Callout & Contact Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 p-8 glass-card border border-cyan-500/10 rounded-3xl bg-slate-950/60 max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden"
          >
            {/* Glowing effect inside card */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex-1">
              <h4 className="font-display font-semibold text-white text-lg flex items-center gap-2 mb-2">
                <FaAtom className="text-cyan-400 animate-spin [animation-duration:10s]" /> Seeking official, verified documentation?
              </h4>
              <p className="text-xs md:text-sm text-slate-400 font-sans leading-relaxed max-w-xl">
                For certified physical copies of school prospectuses, verified fee invoices, or official accreditation credentials, connect straight with our Office of Registry.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link 
                to="/contact" 
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 text-white font-display text-xs font-semibold tracking-wider uppercase text-center transition-all"
              >
                Electronic Inquiry
              </Link>
              <Link 
                to="/admissions" 
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-display text-xs font-semibold tracking-wider uppercase hover:opacity-90 active:scale-95 transition-all text-center glow-cyan"
              >
                Admissions Board
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Disclaimer;
