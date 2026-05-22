import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFileContract, 
  FaGlobe, 
  FaInfoCircle, 
  FaAward, 
  FaBookReader, 
  FaBan, 
  FaExternalLinkAlt, 
  FaExclamationTriangle, 
  FaEnvelope,
  FaAtom,
  FaGavel
} from 'react-icons/fa';
import { fadeInUp, staggerContainer, itemReveal } from '../animations/motionVariants';

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  // Dynamic SEO Page Meta Setup
  useEffect(() => {
    document.title = 'Terms & Conditions | A Success School - Advanced Scientific Academy';
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Read our official Terms & Conditions. Access guidelines for website usage, intellectual property rights, student admission policies, user responsibilities, and legal disclaimers.');

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

    updateOGTag('og:title', 'Terms & Conditions | A Success School');
    updateOGTag('og:description', 'Official A Success School Terms & Conditions governing our academic web platform usage and student agreements.');
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', window.location.href);

    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'acceptance', label: '1. Acceptance of Terms', icon: <FaInfoCircle /> },
    { id: 'website-usage', label: '2. Website Usage Terms', icon: <FaGlobe /> },
    { id: 'school-disclaimer', label: '3. Institutional Disclaimer', icon: <FaExclamationTriangle /> },
    { id: 'admission-notice', label: '4. Admission Policy Notice', icon: <FaBookReader /> },
    { id: 'intellectual-property', label: '5. Intellectual Property Rights', icon: <FaAward /> },
    { id: 'user-responsibilities', label: '6. User Conduct Rules', icon: <FaBan /> },
    { id: 'external-links', label: '7. External Connections', icon: <FaExternalLinkAlt /> },
    { id: 'content-accuracy', label: '8. Accuracy of Content', icon: <FaExclamationTriangle /> },
    { id: 'governing-law', label: '9. Governing Jurisdiction', icon: <FaGavel /> },
    { id: 'contact-info', label: '10. Institutional Support', icon: <FaEnvelope /> }
  ];

  const handleScrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
              <FaFileContract className="animate-pulse" /> Legal Framework Node
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Terms & <span className="cyan-gradient-text">Conditions</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Effective Date: May 22, 2026 | Version 1.9.2 (Compliance Certified)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-neutral-bg relative border-t border-slate-900">
        <div className="absolute inset-0 bg-science-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar Table of Contents */}
            <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28 lg:h-[calc(100vh-140px)] overflow-y-auto pr-2 custom-scrollbar">
              
              {/* Navigation list */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800/80 bg-slate-950/40">
                <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6 border-b border-slate-800 pb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Table of Contents
                </h3>
                <nav className="flex flex-col gap-1.5">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => handleScrollTo(sec.id)}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-sans transition-all duration-300 ${
                        activeSection === sec.id
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold shadow-cyan-glow/5'
                          : 'hover:bg-slate-900 hover:text-white border border-transparent'
                      }`}
                    >
                      <span className={`text-sm transition-colors ${
                        activeSection === sec.id ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'
                      }`}>
                        {sec.icon}
                      </span>
                      <span className="truncate">{sec.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Legal Badges */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-cyan-950/10 to-blue-950/10">
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FaGavel className="text-cyan-400" /> Administrative Info
                </h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Usage of A Success School's portal forms a binding contract. By exploring pages, databases, or digital catalogs, you explicitly endorse all regulatory sections.
                </p>
              </div>

            </div>

            {/* Right Side Terms Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              
              {/* Acceptance of Terms */}
              <section id="acceptance" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaInfoCircle size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">1. Acceptance of Terms</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    By accessing, loading, browsing, or utilizing the official portals, portals sub-domains, database portals, and research directories under the <strong>A Success School</strong> ecosystem, you fully declare that you have read, understood, and consented to these Terms & Conditions.
                  </p>
                  <p>
                    If you represent a minor under 18 years, you declare that you have fully acquired the active supervision and formal approval of a parent or legal guardian who hereby assumes joint liability under these structural guidelines. If you do not accept these sections, you are immediately required to terminate all active connections to our server frameworks.
                  </p>
                </div>
              </section>

              {/* Website Usage Terms */}
              <section id="website-usage" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaGlobe size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">2. Website Usage Terms</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Users are granted a limited, revocable, non-exclusive, and non-transferable license to access intellectual content, schedules, gallery pictures, and curriculum catalogs for non-commercial personal reference.
                  </p>
                  <p>
                    You agree that you shall not deploy automated web scraping tools, crawling algorithms, payload injectors, or load-stress scripts against our server blocks. System resources are strictly prioritized to serve prospective families, active researchers, and academic stakeholders.
                  </p>
                </div>
              </section>

              {/* School Information Disclaimer */}
              <section id="school-disclaimer" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaExclamationTriangle size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">3. Institutional Disclaimer</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    All details and figures presented across A Success School website—including science curriculum syllabi, boarding hostel specifications, robotics laboratory inventories, and staff credentials—are hosted strictly for descriptive purposes.
                  </p>
                  <p>
                    These details do not represent legally binding offers of enrollment, guaranteed scholarship provisions, or strict operational guarantees. The school administration reserves complete rights to reorganize tracks, close labs, or reassign faculty deans without maintaining prior legal notifications.
                  </p>
                </div>
              </section>

              {/* Admission Policy Notice */}
              <section id="admission-notice" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaBookReader size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">4. Admission Policy Notice</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Inquiries submitted via our admissions sub-portals do not establish immediate candidateship, registration rights, or educational guarantees.
                  </p>
                  <p>
                    Final student admissions are strictly contingent upon the complete validation of original grade sheets, satisfactory performance inside quantum/biotech screening assessments, structured face-to-face parent interviews, and the absolute verification of clean disciplinary logs at prior school platforms. Any form of falsification of submitted data triggers immediate disqualification.
                  </p>
                </div>
              </section>

              {/* Intellectual Property Notice */}
              <section id="intellectual-property" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaAward size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">5. Intellectual Property Rights</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    All structural visual elements (including glassmorphic vectors, logos, color codes, cyber grids, custom graphics), proprietary science curriculums, and research abstracts are the exclusive intellectual property of A Success Academic Trust.
                  </p>
                  <p>
                    No user holds the authorization to copy, distribute, modify, mirror, or republish intellectual files, robotics illustrations, or codebases without obtaining explicit, written institutional licensing credentials from the A Success Office of Communication.
                  </p>
                </div>
              </section>

              {/* User Responsibilities */}
              <section id="user-responsibilities" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaBan size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">6. User Conduct Rules</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    While interacting with forms, chat components, or registration dashboards, you agree that you shall NOT:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
                    <li>Submit hostile, defamatory, racist, or structurally abusive language regarding any educator, parent, or student cohort.</li>
                    <li>Upload files containing computer viruses, trojans, ransomware, or malicious server-bypass libraries.</li>
                    <li>Falsify identification parameters, disguise server addresses via anonymous relays, or impersonate school board members.</li>
                  </ul>
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-xs md:text-sm text-slate-300 leading-relaxed font-sans mt-4">
                    <strong>Warning:</strong> Violating security rules triggers immediate network bans and, where applicable, immediate legal reporting to law enforcement agencies.
                  </div>
                </div>
              </section>

              {/* External Links Policy */}
              <section id="external-links" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaExternalLinkAlt size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">7. External Connections</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Our portal points out to external platforms, research clusters, educational apps, and federal accreditation registries.
                  </p>
                  <p>
                    A Success School does not endorse, validate, or assume any operational responsibility for the accuracy of tools, files, or statements found on external domains. Users jump to third-party nodes at their own voluntary risk and discretion.
                  </p>
                </div>
              </section>

              {/* Content Accuracy Disclaimer */}
              <section id="content-accuracy" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaExclamationTriangle size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">8. Accuracy of Content</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    While we deploy strict copy editors to verify school timetables, laboratory files, research schedules, and boarding layouts, minor structural typographical errors, outdated course references, or computational delays can occur.
                  </p>
                  <p>
                    The school portal and its contained data lists are provided on an <strong>"As Is"</strong> and <strong>"As Available"</strong> footing. A Success School makes no absolute guarantees of mathematical precision, zero page glitches, or constant 100% server uptime.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaGavel size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">9. Governing Jurisdiction</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    These Terms & Conditions are governed and constructed in accordance with the laws of the State of California, United States, without giving effect to any principles of conflict of laws.
                  </p>
                  <p>
                    You agree that any formal dispute, action, or arbitration arising from website usage or registration applications shall be submitted exclusively to state or federal tribunals located in San Francisco County, California.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact-info" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaEnvelope size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">10. Institutional Support</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    For formal legal inquiries, contract validations, copyright permission slips, or school policy clarifications, contact our office:
                  </p>
                  
                  <div className="p-6 rounded-2xl glass-card border border-cyan-500/10 mt-6 bg-slate-950/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h4 className="font-display font-bold text-white text-base">Office of Legal Counsel</h4>
                      <p className="text-xs text-slate-400 font-sans mt-1">A Success School Governance Board</p>
                      <p className="text-xs text-slate-500 font-sans mt-2">700 Aetheria Parkway, Suite 10, San Francisco, CA 94107</p>
                    </div>
                    <Link 
                      to="/contact" 
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-display text-xs font-semibold tracking-wider uppercase hover:opacity-90 active:scale-95 transition-all text-center glow-cyan flex-shrink-0"
                    >
                      Legal Contact Node
                    </Link>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default TermsConditions;
