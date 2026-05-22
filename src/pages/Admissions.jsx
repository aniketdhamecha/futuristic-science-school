import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheck, FaFileAlt, FaCalendarCheck, FaUserCheck, FaAward, FaAtom } from 'react-icons/fa';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { fadeInUp, scaleIn, fadeInLeft, fadeInRight } from '../animations/motionVariants';

const Admissions = () => {
  const [inquiryData, setInquiryData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: 'Grade 9',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Interactive Checklist State
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Official transcripts from last 2 academic terms", checked: false },
    { id: 2, text: "Letters of recommendation (1 STEM, 1 Research/Math mentor)", checked: false },
    { id: 3, text: "Standardized research portfolio or coding repository link (Optional)", checked: false },
    { id: 4, text: "Photocopy of Student Passport or residency credentials", checked: false },
    { id: 5, text: "Two recent passport-sized digital color portraits", checked: false }
  ]);

  const toggleChecklist = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (inquiryData.parentName && inquiryData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setInquiryData({
          parentName: '',
          studentName: '',
          email: '',
          phone: '',
          grade: 'Grade 9',
          message: ''
        });
      }, 5000);
    }
  };

  const steps = [
    {
      num: "01",
      icon: <FaFileAlt className="text-white text-base" />,
      title: "Digital Portfolio Submission",
      desc: "Complete the online application. Upload prior transcript reports and optional research blueprints or code repositories."
    },
    {
      num: "02",
      icon: <FaCalendarCheck className="text-white text-base" />,
      title: "Lab Tour & Socratic Interview",
      desc: "Families tour our advanced cleanrooms, observatory dome, and supercomputing grids, followed by a socratic scientific dialogue."
    },
    {
      num: "03",
      icon: <FaUserCheck className="text-white text-base" />,
      title: "Diagnostic Evaluation",
      desc: "An analytical diagnostic evaluation focusing on logical variables, algorithmic puzzles, and mathematical physics concepts."
    },
    {
      num: "04",
      icon: <FaAward className="text-white text-base" />,
      title: "Station Offer & Registration",
      desc: "Successful portfolios receive final admissions letters to reserve their station spaces and finalize term enrollment."
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
              <FaAtom className="animate-pulse-subtle" /> Join the Squad
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Admissions & <span className="cyan-gradient-text">Inquiries</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Explore our scholastic tracks, tuition fee structures, and diagnostic review protocols to secure your research station.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step by Step process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-science-grid opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            badge="The Process" 
            title="Pathway to Success" 
            subtitle="Scientific parameters and milestone reviews for joining our elite research cohorts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col items-start p-8 glass-card border border-slate-800/80 rounded-3xl relative h-full hover:border-cyan-400/30 hover:shadow-cyan-glow transition-all duration-500"
              >
                <span className="absolute top-6 right-6 font-display font-bold text-3xl text-cyan-500/10">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center mb-6 shadow-cyan-glow">
                  {step.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs font-sans font-light text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Table */}
      <section className="py-24 bg-neutral-bg border-t border-b border-slate-900 relative bg-science-dots">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            badge="Scholastic Investment" 
            title="Tuition & Pathway Structures" 
            subtitle="Providing full access to biotechnology cleanrooms, supercomputing server pools, and collegiate mentoring."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="glass-card border border-slate-800 rounded-3xl overflow-hidden shadow-premium hover:border-cyan-400/20 transition-all duration-500"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white font-display text-xs tracking-wider uppercase">
                    <th className="py-5 px-8">High School Pathway Track</th>
                    <th className="py-5 px-8">Billing Cycle</th>
                    <th className="py-5 px-8 text-right">Amount per Term</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm font-sans text-slate-300">
                  <tr>
                    <td className="py-5 px-8 font-semibold text-white font-display">9th Grade Foundation Track (STEM Core)</td>
                    <td className="py-5 px-8">Per Academic Term (3 terms/yr)</td>
                    <td className="py-5 px-8 text-right font-semibold text-white">$14,500</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-8 font-semibold text-white font-display">10th Grade Development Track (Pre-Med / Pre-Eng / Pre-AI)</td>
                    <td className="py-5 px-8">Per Academic Term (3 terms/yr)</td>
                    <td className="py-5 px-8 text-right font-semibold text-white">$15,200</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-8 font-semibold text-white font-display">11th Grade Research Track (Advanced AP & Lab Placements)</td>
                    <td className="py-5 px-8">Per Academic Term (3 terms/yr)</td>
                    <td className="py-5 px-8 text-right font-semibold text-white">$16,000</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-8 font-semibold text-white font-display">12th Grade Thesis Track (Capstone Defense & Ivy Pre-Track)</td>
                    <td className="py-5 px-8">Per Academic Term (3 terms/yr)</td>
                    <td className="py-5 px-8 text-right font-semibold text-white">$16,800</td>
                  </tr>
                  <tr className="bg-cyan-500/5">
                    <td className="py-5 px-8 font-semibold text-white font-display">Bio-Equipment & Computation Lab Reserve</td>
                    <td className="py-5 px-8">Annual Deposit (Refundable)</td>
                    <td className="py-5 px-8 text-right font-semibold text-cyan-400">$2,400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
          
          <div className="mt-6 flex items-start gap-3 text-xs text-slate-400 font-sans leading-relaxed">
            <span className="font-semibold text-white font-display uppercase tracking-wider block mt-0.5">Note:</span>
            <p>Tuition fees include smart resources access, athletic coaching, and laboratory tools. Sibling discounts and academic excellence scholarships (up to 50% tuition waiver) are evaluated during step 3.</p>
          </div>
        </div>
      </section>

      {/* Double Column: Checklist and Form */}
      <section className="py-24 bg-neutral-bg border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Required Checklist */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#06B6D4] uppercase font-display">
                  Preparations
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mt-2 mb-4">
                  Document Checklist
                </h3>
                <p className="text-sm font-sans font-light text-slate-400 leading-relaxed mb-6">
                  Family checklist for admissions submission (Click items to track your progress):
                </p>
              </div>

              {/* Checklist Widgets */}
              <div className="flex flex-col gap-3.5">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer select-none transition-all duration-300 ${
                      item.checked
                        ? 'bg-cyan-500/5 border-cyan-400/55 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                      item.checked
                        ? 'bg-cyan-500 border-cyan-500 text-white shadow-cyan-glow'
                        : 'bg-slate-950 border-slate-800'
                    }`}>
                      {item.checked && <FaCheck className="text-[10px]" />}
                    </div>
                    <span className="text-xs md:text-sm font-sans font-light leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Digital inquiry Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-7 p-8 glass-card border border-slate-800/80 rounded-3xl relative"
            >
              <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2">
                Digital Admission Inquiry
              </h3>
              <p className="text-xs font-sans text-slate-400 mb-8 leading-relaxed">
                Complete this formal request and the academic board will contact you with diagnostic slot details.
              </p>

              <form onSubmit={handleInquirySubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-display text-white uppercase">Parent Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Richard Kim"
                      value={inquiryData.parentName}
                      onChange={(e) => setInquiryData({ ...inquiryData, parentName: e.target.value })}
                      required
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-550 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10 transition-all font-sans"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-display text-white uppercase">Student Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Nathan Kim"
                      value={inquiryData.studentName}
                      onChange={(e) => setInquiryData({ ...inquiryData, studentName: e.target.value })}
                      required
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-550 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-display text-white uppercase">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. r.kim@example.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      required
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-550 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10 transition-all font-sans"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-display text-white uppercase">Grade of Interest</label>
                    <select
                      value={inquiryData.grade}
                      onChange={(e) => setInquiryData({ ...inquiryData, grade: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all font-sans"
                    >
                      <option className="bg-slate-950">Grade 9</option>
                      <option className="bg-slate-950">Grade 10</option>
                      <option className="bg-slate-950">Grade 11</option>
                      <option className="bg-slate-950">Grade 12</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold font-display text-white uppercase">Research Background & Achievements</label>
                  <textarea
                    rows="4"
                    placeholder="Provide details regarding the student's science Olympiads, coding achievements, research portfolios, or related STEM skills..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-550 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/10 transition-all font-sans resize-none"
                  />
                </div>

                <Button type="submit" variant="cyan" icon={<FaPaperPlane />} className="w-full mt-2">
                  Submit Formal Inquiry
                </Button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 text-emerald-300 rounded-xl border border-emerald-500/20 text-xs font-sans text-center mt-2 leading-relaxed"
                  >
                    Inquiry submitted. The Success School Admissions Board will review your credentials and contact you within 48 business hours with diagnostic schedules.
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Admissions;
