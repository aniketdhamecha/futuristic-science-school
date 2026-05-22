import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaUserShield, 
  FaInfoCircle, 
  FaLock, 
  FaDatabase, 
  FaCookieBite, 
  FaExternalLinkAlt, 
  FaEnvelope, 
  FaFileSignature, 
  FaAtom,
  FaCheckCircle
} from 'react-icons/fa';
import { fadeInUp, staggerContainer, itemReveal } from '../animations/motionVariants';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Dynamic SEO Page Meta Setup
  useEffect(() => {
    document.title = 'Privacy Policy | A Success School - Advanced Scientific Academy';
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Read our comprehensive student and parent Privacy Policy. Learn how A Success School collects, utilizes, and protects admission queries, contact data, and analytical files.');

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

    updateOGTag('og:title', 'Privacy Policy | A Success School');
    updateOGTag('og:description', 'Official A Success School Privacy Policy detailing our student and parent data protection standards.');
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', window.location.href);

    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', label: '1. Introduction & Scope', icon: <FaInfoCircle /> },
    { id: 'information-collection', label: '2. Information We Collect', icon: <FaDatabase /> },
    { id: 'contact-form-data', label: '3. Contact Form Submission', icon: <FaEnvelope /> },
    { id: 'admissions-inquiry', label: '4. Admission Inquiries', icon: <FaFileSignature /> },
    { id: 'email-phone-usage', label: '5. Communication Usage', icon: <FaCheckCircle /> },
    { id: 'student-parent-privacy', label: '6. Student & Parent Privacy', icon: <FaUserShield /> },
    { id: 'data-protection', label: '7. Security & Encryption', icon: <FaLock /> },
    { id: 'web-analytics', label: '8. Web Analytics Systems', icon: <FaAtom /> },
    { id: 'cookies-usage', label: '9. Cookies & Trackers', icon: <FaCookieBite /> },
    { id: 'third-party-links', label: '10. External Web Nodes', icon: <FaExternalLinkAlt /> },
    { id: 'contact-info', label: '11. Regulatory Contact', icon: <FaEnvelope /> }
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
              <FaShieldAlt className="animate-pulse" /> Privacy Protection Node
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Institutional <span className="cyan-gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Effective Date: May 22, 2026 | Version 2.4.0 (Security Compliant)
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

              {/* Trust Badge Indicators */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-cyan-950/10 to-blue-950/10">
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FaUserShield className="text-cyan-400" /> Security Standards
                </h4>
                <div className="flex flex-col gap-3 text-xs text-slate-400 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>COPPA Child Safe Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>GDPR Compliant Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>AES-256 Encryption Encrypted Transmissions</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side Policy Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              
              {/* Introduction Section */}
              <section id="introduction" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaInfoCircle size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">1. Introduction & Scope</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Welcome to the <strong>A Success School</strong> official portal, operated by A Success Academic Trust. We are fully committed to protecting the integrity, confidentiality, and security of all personal and academic data shared by our prospective, current, and graduated student cohorts, parents, educators, and general visitors.
                  </p>
                  <p>
                    As an elite science-centric educational platform nurturing quantum researchers, advanced biomedical pioneers, and cyberneticists, we implement state-of-the-art information governance systems. This Privacy Policy governs our primary digital nodes under the <code className="text-cyan-400 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">asuccess.edu</code> domain and describes how we gather, process, transfer, and store user credentials, admission inquires, and online tracking records.
                  </p>
                </div>
              </section>

              {/* Information Collection */}
              <section id="information-collection" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaDatabase size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">2. Information We Collect</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    A Success School acts under high integrity standards to only collect data necessary for functional academic admissions, curriculum engagement, communication syncing, and user portal security. We collect the following main categories:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
                    <li><strong>Directly Supplied Credentials:</strong> Names, residential coordinates, email addresses, parental career fields, and student mathematical/science accomplishments.</li>
                    <li><strong>Academic History Dossiers:</strong> Transcripts, school affiliations, specialized coding profiles, Olympiad records, and teacher evaluation uploads.</li>
                    <li><strong>Network & Machine Log Files:</strong> IP coordinates, browser layouts, referral URL records, system operating parameters, and clickstream timelines.</li>
                  </ul>
                </div>
              </section>

              {/* Contact Form Submission */}
              <section id="contact-form-data" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaEnvelope size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">3. Contact Form Submission</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    When a parent, industry sponsor, or academic visitor uses our interactive <strong>Digital Message Portal</strong>, the inputs are parsed, protected via Secure Socket Layer (SSL), and routed straight to corresponding school departments.
                  </p>
                  <p>
                    We store your submitted name, email, chosen subject field, and message log on our secure institutional firewall. These inputs are strictly used to formulate comprehensive administrative responses and are not shared with commercial lists or third-party telemarketing firms.
                  </p>
                </div>
              </section>

              {/* Admissions Inquiry */}
              <section id="admissions-inquiry" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaFileSignature size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">4. Admission Inquiries</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Prospective students initiating an enrollment inquiry submit critical structural profiles. Our Admissions Board requires full parental transparency to verify academic alignment. Information collected at this phase includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
                    <li>Student birth parameters, proof of legal residence, and family emergency contact numbers.</li>
                    <li>Scientific project submissions, computational portfolios, and school reference letters.</li>
                    <li>Scholarship support requests, fee structure waivers, and auxiliary residency needs.</li>
                  </ul>
                  <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-xs md:text-sm text-slate-300 leading-relaxed font-sans mt-4">
                    <strong>Notice:</strong> All admission inquiries remain fully confidential. If the candidate cohort does not gain final registration, their digital transcripts and profiles are safely purged within 12 months after the enrollment cycle terminates.
                  </div>
                </div>
              </section>

              {/* Email and Phone Number Usage */}
              <section id="email-phone-usage" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaCheckCircle size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">5. Communication Usage</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Submitted phone numbers and digital mail addresses are deployed solely for institutional syncing, emergency notices, research seminar announcements, and curriculum updates.
                  </p>
                  <p>
                    By checking our consent forms, parents and students authorize A Success School to send critical text messages, email newsletters, and emergency circadian scheduling logs. You hold the ultimate right to immediately opt-out of newsletter communications by using the <em>"Unsubscribe"</em> link located at the bottom of all administrative emails.
                  </p>
                </div>
              </section>

              {/* Student/Parent Privacy */}
              <section id="student-parent-privacy" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaUserShield size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">6. Student & Parent Privacy</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    As an educational institution catering to elite minds, including minors under the age of 18, we adhere strictly to the <strong>Family Educational Rights and Privacy Act (FERPA)</strong> and the <strong>Children's Online Privacy Protection Act (COPPA)</strong> regulations.
                  </p>
                  <p>
                    We never allow minors to open independent public discussion platforms on our main institutional portal, nor do we collect direct geolocation logs from children without direct parental written consent. Parents reserve complete rights to inspect their child's submitted records, request corrections, or mandate the immediate purging of structural academic credentials.
                  </p>
                </div>
              </section>

              {/* Data Protection */}
              <section id="data-protection" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaLock size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">7. Security & Encryption</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    All personal data streams are treated as highly confidential. We deploy <strong>AES-256 secure transport protocols</strong> for all online submissions, database architectures, and internal school intranets.
                  </p>
                  <p>
                    Physical files are stored inside restricted biometric data modules, while digital logs are secured on cloud clusters protected by active anti-intrusion AI algorithms. Access to files is strictly limited to authorized registrars, admission deans, and certified computer security personnel.
                  </p>
                </div>
              </section>

              {/* Web Analytics */}
              <section id="web-analytics" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaAtom size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">8. Web Analytics Systems</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    To optimize our responsive interface and improve search visibility, A Success School deploys secure analytics trackers (including certified Google Analytics configurations).
                  </p>
                  <p>
                    These analytical frameworks capture anonymous behavioral streams, such as average screen durations, loading speeds of laboratory pages, and link usage logs. All gathered data points are instantly hashed, anonymized, and processed without linking back to actual parent or student identities.
                  </p>
                </div>
              </section>

              {/* Cookies Usage */}
              <section id="cookies-usage" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaCookieBite size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">9. Cookies & Trackers</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    We deploy fundamental, secure cookies to remember interface preferences (such as dark mode preferences and active dashboard states) and verify active login sessions for parents.
                  </p>
                  <p>
                    You have full authority to command your browser framework to reject all tracking cookies or signal warning triggers before accepting cookies. However, blocking foundational session cookies may degrade advanced academic interactive simulations or portal login functions.
                  </p>
                </div>
              </section>

              {/* Third-Party Links */}
              <section id="third-party-links" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaExternalLinkAlt size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">10. External Web Nodes</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Our scientific pages and event updates link out to external research centers, Ivy League directories, science journals, and state compliance boards.
                  </p>
                  <p>
                    A Success School holds zero administrative power over the privacy frameworks, data collection schedules, or digital architectures of those third-party web entities. We strongly recommend reading the privacy policies of external sites before feeding them any personal credentials.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact-info" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FaEnvelope size={14} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">11. Regulatory Contact</h2>
                </div>
                <div className="prose prose-slate prose-invert max-w-none text-slate-400 font-sans text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    For inquiries regarding data records, student privacy rights, or FERPA compliance status, connect directly with our Security & Privacy Commission:
                  </p>
                  
                  <div className="p-6 rounded-2xl glass-card border border-cyan-500/10 mt-6 bg-slate-950/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h4 className="font-display font-bold text-white text-base">Office of the Registrar & Compliance Officer</h4>
                      <p className="text-xs text-slate-400 font-sans mt-1">A Success Academic Board</p>
                      <p className="text-xs text-slate-500 font-sans mt-2">700 Aetheria Parkway, Suite 10, San Francisco, CA 94107</p>
                    </div>
                    <Link 
                      to="/contact" 
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-display text-xs font-semibold tracking-wider uppercase hover:opacity-90 active:scale-95 transition-all text-center glow-cyan flex-shrink-0"
                    >
                      Electronic Support Portal
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

export default PrivacyPolicy;
