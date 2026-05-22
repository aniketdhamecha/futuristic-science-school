import React from 'react';
import { motion } from 'framer-motion';
import { FaAtom, FaDna, FaMicroscope, FaAward, FaCrown, FaStar, FaCogs } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import SectionHeader from '../components/ui/SectionHeader';
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/motionVariants';

const About = () => {
  const milestones = [
    {
      year: "2012",
      title: "Founding & Core Vision",
      desc: "A Success School was established by computational scholars and STEM mentors to create a dedicated secondary academy for scientific careers."
    },
    {
      year: "2016",
      title: "Advanced Placement & Robotics Arena",
      desc: "Accredited under premium AP guidelines, launching our autonomous robotics rings and physics labs."
    },
    {
      year: "2021",
      title: "Biotechnology & GPU server Core",
      desc: "Inaugurated our Class 100 bio-genetics cleanrooms, molecular simulation suites, and high-performance server clusters."
    },
    {
      year: "2025",
      title: "Olympiad & Global Placement Record",
      desc: "Recognized as the premier International Science Academy, securing 100% placements at elite MIT, Ivy League, and STEM programs."
    }
  ];

  const values = [
    {
      icon: <FaAtom className="text-cyan-500 text-xl animate-spin [animation-duration:15s]" />,
      title: "Scientific Rigor",
      desc: "Students execute college-level research, analyze spectrographic outputs, and solve complex differential equations."
    },
    {
      icon: <FaDna className="text-blue-500 text-xl" />,
      title: "CRISPR & Bio-Medical Ethics",
      desc: "We ensure rigorous computational gene-editing experiments are balanced with deep ethical frameworks and philosophical research."
    },
    {
      icon: <FaCogs className="text-indigo-500 text-xl" />,
      title: "Autonomous Mechatronics",
      desc: "Promoting cybernetic navigation, embedded firmware design, and autonomous robotics inside our custom netting arenas."
    }
  ];

  return (
    <div className="relative pb-24 bg-neutral-bg">
      {/* Editorial Header */}
      <section className="relative bg-[#020617] text-white py-24 overflow-hidden border-b border-slate-900 bg-science-grid-dark">
        <div className="absolute inset-0 opacity-15 bg-science-grid"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-400/10 border border-cyan-400/20 font-display shadow-cyan-glow">
              Success School Scientific Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Our Vision & <span className="cyan-gradient-text">Milestones</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Explore the timeline, core pillars, and elite academic frameworks driving A Success School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-neutral-bg relative bg-science-grid border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Story text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase font-display font-semibold">
                Historical Directive
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-semibold mb-2 text-white">
                Nurturing the Next Wave of Global Researchers
              </h2>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                A Success School was conceived from a clear directive: secondary education must transition beyond simple textbook learning to meet the demands of advanced scientific careers. We designed a premium sandbox that functions like a premier research university.
              </p>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                Our classes cross-reference multiple fields. When cohorts program mechatronic paths, they master mathematical vector fields and linear algebra. When studying biotechnology, they run CRISPR sequences and debate the bio-ethics of cell modification.
              </p>
              <p className="text-cyan-400 font-sans font-light leading-relaxed font-semibold">
                At A Success School, we cultivate precision, cognitive stamina, and advanced analytical research capacity.
              </p>
            </motion.div>
 
            {/* Collated Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" 
                alt="EAS Student Lab Inquiry" 
                className="w-full h-full object-cover"
              />
            </motion.div>
 
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-neutral-bg border-t border-slate-900 relative bg-science-dots">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            badge="The Foundation" 
            title="Our Core Directives" 
            subtitle="The scientific parameters driving every lecture, research seminar, and robotics cup project."
          />
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="glass-card p-10 hover:-translate-y-1.5 hover:shadow-cyan-glow hover:border-cyan-400/30 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 shadow-cyan-glow">
                  {val.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {val.title}
                </h3>
                <p className="text-sm font-sans font-light text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Vertical Timeline */}
      <section className="py-24 bg-neutral-bg border-t border-slate-900 relative bg-science-grid">
        <div className="max-w-4xl mx-auto px-6 relative">
          <SectionHeader 
            badge="The Timeline" 
            title="EAS Milestones" 
            subtitle="Tracing our timeline from the founding assembly to global academic achievements."
          />

          {/* Timeline Center Line */}
          <div className="absolute top-[280px] bottom-10 left-1/2 -translate-x-1/2 w-[2px] bg-cyan-500/10 hidden md:block"></div>

          <div className="flex flex-col gap-16 relative">
            {milestones.map((stone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`flex flex-col md:flex-row items-center gap-8 relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline cyan circle dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 shadow shadow-cyan-glow hidden md:block z-10"></div>

                  {/* Left Column (or right depending on even) */}
                  <div className="w-full md:w-1/2 text-center md:text-right px-4 flex flex-col justify-center">
                    <span className="block text-3xl font-display font-bold text-cyan-500">
                      {stone.year}
                    </span>
                  </div>

                  {/* Right Column */}
                  <div className={`w-full md:w-1/2 px-6 py-8 glass-card rounded-3xl border border-slate-800/80 text-center md:text-left ${
                    isEven ? 'md:text-right' : ''
                  }`}>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {stone.title}
                    </h3>
                    <p className="text-sm font-sans font-light text-slate-400 leading-relaxed">
                      {stone.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Showcase */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden bg-science-grid-dark border-t border-slate-900">
        <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            badge="Prestige Credits" 
            title="Scientific Accreditations" 
            subtitle="Representing cognitive research wins and robotics trophies on international scales."
            className="!text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCrown className="text-cyan-400 text-2xl" />,
                title: "Curriculum Excellence Cup",
                org: "International Science Council",
                year: "2025"
              },
              {
                icon: <FaStar className="text-cyan-400 text-2xl" />,
                title: "Robotics Arena Champion",
                org: "Global Mechatronics Olympiad",
                year: "2024"
              },
              {
                icon: <FaAtom className="text-cyan-400 text-2xl animate-spin [animation-duration:12s]" />,
                title: "Spectroscopy Pioneers Award",
                org: "Quantum Physics Alliance",
                year: "2025"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-8 bg-slate-900 border border-cyan-500/10 rounded-3xl hover:border-cyan-400/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 shadow-cyan-glow">
                  {award.icon}
                </div>
                <h4 className="font-display font-semibold text-lg text-white mb-2">{award.title}</h4>
                <p className="text-sm font-sans text-slate-400">{award.org}</p>
                <span className="block text-xs font-display font-bold text-cyan-400 uppercase tracking-wider mt-4">
                  Accredited in {award.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
