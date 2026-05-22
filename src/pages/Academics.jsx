import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAtom, FaFlask, FaMicroscope, FaLaptopCode, FaCogs, FaTerminal, FaDna } from 'react-icons/fa';
import SectionHeader from '../components/ui/SectionHeader';
import { fadeInUp, scaleIn } from '../animations/motionVariants';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('Physics');

  const curriculums = [
    {
      level: "9th Grade: Foundational Scientific Rigor",
      focus: "Empirical Core & Scripting Mechanics",
      desc: "Introducing formal scientific methods, coordinate scripting in Python, algebraic vectors, cellular biology bases, and classical mechatronic physics.",
      list: ["Python Core & Command Syntax", "Vector Geometry & Coordinate Mechanics", "Introductory DNA Separation", "Scientific Documentation Writing"]
    },
    {
      level: "10th-11th Grade: Advanced Placement Pathways",
      focus: "Specialized Research Pre-Tracks",
      desc: "Rigorous research tracks tailored for elite engineering and pre-med prospects. Cohorts execute chemical spectrometry and design autonomous algorithms.",
      list: ["CRISPR Gene Editing Protocols", "Particle Spectroscopy Sandbox", "Kinematics & Autonomous ROS Systems", "AP Chemistry & Advanced Calculus"]
    },
    {
      level: "12th Grade: Pre-Professional Capstone",
      focus: "Independent Peer-Reviewed Defenses",
      desc: "Every senior compiles a student-led research paper or design patent blueprint which they defend in front of an expert STEM university review committee.",
      list: ["AP Physics C & Quantum Mechanics", "Capstone Research Thesis Defense", "High Performance multi-GPU Simulations", "Ivy-League STEM Portfolio Mentorship"]
    }
  ];

  const departmentData = {
    Physics: {
      title: "Theoretical Physics & Quantum Cosmology",
      tagline: "Unlocking empirical laws and cosmological mechanics.",
      desc: "Our Physics program bridges classical relativity with modern high-energy kinetics. Cohorts use high-filter telescopes to track stellar spectrum bands and perform collision data analysis inside simulated tabletop accelerators.",
      features: [
        { icon: <FaAtom className="text-cyan-400 animate-spin [animation-duration:15s]" />, title: "Quantum Spectroscopy Core", info: "Analyze cosmic microwave background grids and perform spectrographic alignment studies." },
        { icon: <FaMicroscope className="text-cyan-400" />, title: "Tabletop Collision Simulation", info: "Simulate particle collisions and measure energy dispersal matrices under clean conditions." },
        { icon: <FaFlask className="text-cyan-400" />, title: "Advanced Relativistic Calculations", info: "Master differential equations, gravitational bending formulas, and stellar kinematics." }
      ],
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800"
    },
    BioMedical: {
      title: "CRISPR Bio-Genetics & Pre-Medical Track",
      tagline: "Engineering molecular edits and cellular dynamics.",
      desc: "Focused on preparing future surgical, microbiological, and bio-engineering leaders. Cohorts isolation sequence DNA, run cellular incubators, and perform computational drug-discovery calculations.",
      features: [
        { icon: <FaDna className="text-blue-400" />, title: "CRISPR Genomeric Splicing", info: "Model molecular bonds and isolate genetic parameters inside positive-pressure clean chambers." },
        { icon: <FaMicroscope className="text-blue-400" />, title: "Automated PCR Thermocycling", info: "Verify transcription layers and measure biological adaptation rates under expert medical mentorship." },
        { icon: <FaFlask className="text-blue-400" />, title: "Bio-Medical Ethics Seminaries", info: "Dissect original biomedical studies, exploring neural implant limitations and gene therapies." }
      ],
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
    },
    ComputerScience: {
      title: "Supercomputing & Mechatronic Engineering",
      tagline: "Designing neural networks and autonomous systems.",
      desc: "Designed for engineering minds who aim to master embedded mechatronics. Cohorts compile deep learning models, write drone telemetry code, and study automated control loops.",
      features: [
        { icon: <FaTerminal className="text-indigo-400" />, title: "Deep Neural Network Modeling", info: "Train image classification pipelines and master regression networks on multi-GPU server pools." },
        { icon: <FaCogs className="text-indigo-400" />, title: "Autonomous Control & Robotics", info: "Write firmware loops, map autonomous drone rings, and master kinematic mechatronics." },
        { icon: <FaLaptopCode className="text-indigo-400" />, title: "Cryptographic Database Systems", info: "Understand advanced encryption algorithms, ledger protocols, and cybernetic network defense." }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    }
  };

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
              Success School Science Cohorts
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Our Academic <span className="cyan-gradient-text">Tracks</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Explore our core STEM curriculum paths, advanced AP schedules, and collegiate capstone publications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section: Departments */}
      <section className="py-24 bg-neutral-bg border-t border-slate-900 relative bg-science-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            badge="The Focus Pathways" 
            title="Advanced Specializations" 
            subtitle="Curriculum parameters designed to prepare cohorts for elite Ivy and MIT science tracks."
          />
 
          {/* Department Tabs Selector */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-16 border-b border-slate-800 pb-4">
            {Object.keys(departmentData).map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`font-display font-semibold text-sm tracking-widest uppercase pb-4 relative transition-colors duration-300 ${
                  activeTab === dept ? 'text-cyan-500 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {dept === 'ComputerScience' ? 'Computer Science' : dept === 'BioMedical' ? 'Bio-Medical' : dept}
                {activeTab === dept && (
                  <motion.span 
                    layoutId="activeDeptTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 shadow-cyan-glow"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
 
          {/* Department Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              {/* Left Column: Image with gradient */}
              <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
                <img 
                  src={departmentData[activeTab].image} 
                  alt={departmentData[activeTab].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
              </div>
 
              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase font-display font-semibold">
                  {departmentData[activeTab].tagline}
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-semibold mb-2 text-white">
                  {departmentData[activeTab].title}
                </h3>
                <p className="text-slate-300 font-sans font-light leading-relaxed mb-4">
                  {departmentData[activeTab].desc}
                </p>
 
                {/* Sub Features */}
                <div className="flex flex-col gap-5">
                  {departmentData[activeTab].features.map((feat, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-sm flex-shrink-0 mt-0.5 shadow-cyan-glow">
                        {feat.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white text-base">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-sans mt-0.5 leading-relaxed">
                          {feat.info}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* Grade Level Hierarchy */}
      <section className="py-24 bg-neutral-bg border-t border-slate-900 relative bg-science-dots">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            badge="The Secondary Spectrum" 
            title="Grades 9–12 Curricular Flow" 
            subtitle="Scaffolding analytical discovery and mechatronic design across secondary levels."
          />
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculums.map((curr, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="glass-card p-10 flex flex-col justify-between h-full border border-slate-800/80 relative overflow-hidden group hover:shadow-cyan-glow hover:border-cyan-500/30 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <span className="block text-xs font-display font-semibold text-cyan-500 uppercase tracking-wider mb-2">
                    {curr.focus}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-4 leading-tight">
                    {curr.level}
                  </h3>
                  <p className="text-sm font-sans font-light text-slate-400 leading-relaxed mb-6">
                    {curr.desc}
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs tracking-wider text-white uppercase mb-4 border-t border-slate-800/80 pt-6">
                    Specialized Research Target
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-sans">
                    {curr.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-cyan-glow"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone Research Banner */}
      <section className="py-24 bg-[#020617] text-white relative overflow-hidden bg-science-grid-dark border-t border-slate-900">
        <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-400/10 border border-cyan-400/20 font-display shadow-cyan-glow">
              Capstone Research Thesis
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6 leading-tight">
              Peer-Reviewed Cohort Publications
            </h2>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Every Success School senior constructs a formal Capstone Thesis which they defend in front of active university reviewers. Our advanced program matches collegiate expectations, preparing students to lead the scientific landscape.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Academics;
