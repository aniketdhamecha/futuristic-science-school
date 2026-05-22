import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaAtom } from 'react-icons/fa';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/motionVariants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
      }, 5000);
    }
  };

  const details = [
    {
      icon: <FaMapMarkerAlt className="text-cyan-500 text-lg" />,
      title: "Success School Main Campus",
      info: "700 Aetheria Parkway, Suite 10, San Francisco, CA 94107"
    },
    {
      icon: <FaPhoneAlt className="text-cyan-500 text-lg" />,
      title: "Telephonic Credentials",
      info: "+1 (800) 555-SUCCESS / +1 (415) 555-9080"
    },
    {
      icon: <FaEnvelope className="text-cyan-500 text-lg" />,
      title: "Electronic Mail",
      info: "admissions@asuccess.edu / registrar@asuccess.edu"
    },
    {
      icon: <FaClock className="text-cyan-500 text-lg" />,
      title: "Working Hours",
      info: "Mon - Fri: 08:00 AM - 05:00 PM (GMT -8)"
    }
  ];

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
              <FaAtom className="animate-pulse-subtle" /> Connect With Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Connect with <span className="cyan-gradient-text">Success School</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Find our physical address coordinates, telephonic nodes, and digital messaging portals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid: Details & Form */}
      <section className="py-24 bg-neutral-bg relative border-t border-slate-900">
        <div className="absolute inset-0 bg-science-grid opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              <div>
                <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase font-display">
                  Corporate Offices
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mt-2 mb-4">
                  Information Channels
                </h3>
                <p className="text-sm font-sans font-light text-slate-400 leading-relaxed">
                  Have questions regarding term schedules, academic transcripts, or laboratory equipment sponsors? Reach out directly.
                </p>
              </div>

              {/* Detail Items */}
              <div className="flex flex-col gap-6">
                {details.map((detail, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white text-base">
                        {detail.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-400 font-sans mt-0.5 leading-relaxed">
                        {detail.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Right: Message Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-7 p-8 glass-card border border-slate-800/80 rounded-3xl relative"
            >
              <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2">
                Digital Message Portal
              </h3>
              <p className="text-xs font-sans text-slate-400 mb-8 leading-relaxed">
                Complete the query form and our administrative staff will respond to you within 24 business hours.
              </p>

              <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-display text-white uppercase">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Catherine Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10 transition-all font-sans"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-display text-white uppercase">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. c.vance@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold font-display text-white uppercase">Subject Focus</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all font-sans"
                  >
                    <option className="bg-slate-950">General Inquiry</option>
                    <option className="bg-slate-950">Admissions & Enrollment</option>
                    <option className="bg-slate-950">Careers & Employment</option>
                    <option className="bg-slate-950">Registrar & Transcripts</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold font-display text-white uppercase">Inquiry Message</label>
                  <textarea
                    rows="4"
                    placeholder="Describe your query in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10 transition-all font-sans resize-none"
                  />
                </div>

                <Button type="submit" variant="cyan" icon={<FaPaperPlane />} className="w-full mt-2">
                  Send Message
                </Button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 text-emerald-300 rounded-xl border border-emerald-500/20 text-xs font-sans text-center mt-2 leading-relaxed"
                  >
                    Your message has been sent successfully. Thank you for connecting with A Success School.
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Styled Interactive Canvas satellite Map mock */}
      <section className="py-12 bg-neutral-bg border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full h-96 bg-[#020617] rounded-3xl overflow-hidden relative border border-slate-900 shadow-2xl flex flex-col items-center justify-center p-8 text-center"
          >
            {/* Dark Stylized Map Mock Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#06B6D4_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1500" alt="Map outline" className="w-full h-full object-cover" />
            </div>

            {/* Map Info Pin Widget */}
            <div className="relative z-10 p-8 glass-card-dark max-w-sm rounded-2xl flex flex-col items-center gap-4 border border-cyan-500/25">
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-cyan-glow animate-bounce">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white">A Success School Campus</h4>
                <p className="text-xs text-slate-400 font-sans mt-1">700 Aetheria Parkway, San Francisco, CA</p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] font-display font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors shadow-cyan-glow"
              >
                Get Directions
              </a>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
