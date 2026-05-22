import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaSchool, FaMicroscope, FaFireExtinguisher, FaUserShield, 
  FaUserCheck, FaHeartbeat, FaGraduationCap, FaCertificate, FaBookReader, 
  FaRunning, FaClipboardList, FaExclamationTriangle, FaCheckCircle, FaExclamationCircle, 
  FaStethoscope, FaUserFriends, FaLaptopCode, FaClock
} from 'react-icons/fa';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '../animations/motionVariants';


const boardAffiliations = [
  {
    board: "Gujarat Secondary & Higher Secondary Education Board (GSEB)",
    standard: "Science Stream Affiliation",
    code: "GSEB-REG-8742-SCI",
    status: "Fully Compliant",
    desc: "Rigorous curriculum compliance mapped under secondary education parameters, providing full eligibility for state-level entrance exams and standard board scoring."
  },
  {
    board: "Central Board of Secondary Education (CBSE) Syllabus Mapping",
    standard: "National STEM Standard Alignment",
    code: "CBSE-ALIGN-9021-STEM",
    status: "Mapped & Synchronized",
    desc: "Syllabi for JEE/NEET are synchronized with national curriculum frameworks, allowing scholars to navigate both national entrance standards and board assessments."
  }
];

const infrastructureSpecs = [
  {
    icon: <FaSchool className="text-cyan-400" />,
    title: "Smart Classrooms",
    spec: "Digital Interactive Boards & Acoustic Enclosures",
    desc: "Ergonomic furniture layouts combined with 4K touch display panels and dual high-fidelity stereo systems for rich scientific animations."
  },
  {
    icon: <FaMicroscope className="text-cyan-400" />,
    title: "Physics Research Lab",
    spec: "Advanced Spectrographs & Optical Benches",
    desc: "Equipped with high-precision laser prisms, mechatronic simulations, and computerized differential tracking systems."
  },
  {
    icon: <FaMicroscope className="text-cyan-400" />,
    title: "Molecular Chemistry Lab",
    spec: "High-Sanitation Fume Hoods & Centrifuges",
    desc: "Fully equipped with chemical exhaust channels, double eyewash stations, and high-speed fractional distillers."
  },
  {
    icon: <FaMicroscope className="text-cyan-400" />,
    title: "Biotechnology & Specimen Lab",
    spec: "Tissue Incubation & Class 100 Isolation Zones",
    desc: "Hosts laminar airflow hoods, specimen incubation chambers, and multi-lens cellular projection microscopes."
  },
  {
    icon: <FaLaptopCode className="text-cyan-400" />,
    title: "Supercomputing & AI Lab",
    spec: "Multi-Node GPU Server Access",
    desc: "Workstations equipped with dedicated gigabit local networks to compile molecular models, CAD designs, and autonomous firmware."
  },
  {
    icon: <FaBookReader className="text-cyan-400" />,
    title: "Central Reference Library",
    spec: "20,000+ Physical Catalog Volumes",
    desc: "Quiet individual study capsules with comprehensive indexing of global science journals, competitive rosters, and reference logs."
  },
  {
    icon: <FaRunning className="text-cyan-400" />,
    title: "Aerobic Athletic Fields",
    spec: "3-Acre Turf Playing Grounds",
    desc: "Professional grass volleyball courts, standard cricket net pitches, and athletic sprinting tracks designed for stamina calibration."
  }
];

const securityParameters = [
  {
    title: "24/7 AI-Integrated CCTV",
    desc: "Comprehensive smart camera coverage across every corridor, entrance yard, dining hub, and perimeter shield with automated warning triggers.",
    metric: "180+ High-Def Feeds"
  },
  {
    title: "Armed Boundary Guards",
    desc: "Centralized entry gates require dual biometric check-ins. Certified security guards patrol the grounds in continuous shifts.",
    metric: "3-Tier Boundary Patrol"
  },
  {
    title: "Evacuation Protocol Roster",
    desc: "Every floor features wide fireproof concrete stairwells. Glowing emergency exit indicators highlight structural pathways.",
    metric: "45-Second Evacuation Roster"
  },
  {
    title: "Active Fire Sprinklers",
    desc: "Smoke sensors and digital heat monitors trigger immediate centralized alarm rings and targeted high-pressure water grids.",
    metric: "Central Monitored Shield"
  },
  {
    title: "Semester Disaster Drills",
    desc: "Mandatory campus-wide evacuation timing trials and mock fire drills are held every semester under state safety oversight.",
    metric: "100% Mandatory Drill"
  },
  {
    title: "Biometric Visitor Logging",
    desc: "All campus visits require official clearance codes verified in real-time by parent-dashboard authentication.",
    metric: "Biometric Gate Checks"
  }
];

const welfareStructures = [
  {
    category: "Supervision",
    icon: <FaUserShield className="text-xl text-cyan-400" />,
    title: "Doctorate-Level Wardens",
    desc: "Resident PhD mentors supervise our separate boys and girls residential blocks, overseeing nightly check sheets and disciplined evening library study hours."
  },
  {
    category: "Welfare",
    icon: <FaStethoscope className="text-xl text-cyan-400" />,
    title: "24/7 Certified Sick-Bay",
    desc: "Designated clinic cabins staffed with licensed nursing officers. Direct emergency hospital tie-ups and an active standby ambulance vehicle."
  },
  {
    category: "Welfare",
    icon: <FaUserFriends className="text-xl text-cyan-400" />,
    title: "Psychological Counseling",
    desc: "Certified student therapists offer mental well-being assistance, stress management, and anonymous peer-support hotlines."
  },
  {
    category: "Supervision",
    icon: <FaClock className="text-xl text-cyan-400" />,
    title: "Circadian Sync Schedules",
    desc: "A strictly balanced sleep-study cycle enforces internet-off rosters at 10:30 PM to maintain optimal neuro-cognitive health."
  }
];

const academicsAccelerators = [
  {
    title: "Competitive JEE / NEET Clusters",
    desc: "Highly challenging, curriculum-aligned preparatory groups led by IIT/AIIMS graduates with curated daily question sets.",
    metric: "Daily Core Grids"
  },
  {
    title: "Remedial Doubt-Solver Halls",
    desc: "One-on-one doubt sessions and peer learning circles held every evening from 2 PM to 5 PM with subject specialists.",
    metric: "1 : 8 Student Ratio"
  },
  {
    title: "Doctorate Research Mentorship",
    desc: "Every scholar is assigned a doctoral research mentor to guide creative STEM initiatives and coordinate board assessments.",
    metric: "Personal Portfolios"
  }
];

const Protocols = () => {
  return (
    <div className="relative pb-24 bg-neutral-bg text-slate-300">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-science-grid-dark text-white py-28 overflow-hidden border-b border-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#06B6D4] uppercase rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 font-display shadow-cyan-glow">
              <FaShieldAlt className="animate-pulse-subtle" /> Official Regulatory Compliance
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Safety, Standards & <span className="cyan-gradient-text">Academic Discipline</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Explore the rigorous safety parameters, academic affiliations, state-of-the-art laboratory specifications, and student welfare structures built to cultivate absolute parent confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. REGULATORY & AFFILIATION BOARD COMPLIANCE */}
      <section className="py-24 relative bg-science-grid border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <span className="text-xs font-semibold tracking-widest text-[#06B6D4] uppercase font-display">
                Statutory Status
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                School Recognition <br />
                <span className="cyan-gradient-text">& Official Affiliations</span>
              </h2>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                A Success School functions under strict state and national educational guidelines. Our secondary educational frameworks guarantee smooth board conversions, comprehensive credential validations, and premium academic standards compliant with apex ministries.
              </p>
              
              <div className="flex gap-4 items-center p-4 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                <FaCertificate className="text-2xl text-[#D4AF37] shrink-0" />
                <div>
                  <h4 className="text-xs font-display font-bold text-[#D4AF37] uppercase tracking-wider">Acredited Academic Sandbox</h4>
                  <p className="text-[11px] font-sans text-slate-400 mt-0.5 leading-normal">
                    Recognized as a premier residential institution under comprehensive board guidelines, ensuring full validity for all national examinations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              {boardAffiliations.map((aff, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl border border-slate-800 bg-slate-950/40 backdrop-blur-md hover:border-cyan-500/20 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-sm font-display font-bold text-white uppercase tracking-wide">
                      {aff.board}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[9px] uppercase font-mono tracking-wider rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <FaCheckCircle className="text-[8px]" /> {aff.status}
                    </span>
                  </div>
                  <p className="text-[11px] font-sans font-medium text-cyan-400/90 uppercase tracking-wide">
                    {aff.standard} — Code: <span className="font-mono text-slate-300">{aff.code}</span>
                  </p>
                  <p className="text-xs font-sans font-light text-slate-400 leading-relaxed mt-2.5">
                    {aff.desc}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. LABORATORY & INFRASTRUCTURE STANDARDS */}
      <section className="py-24 relative bg-science-dots border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <SectionHeader 
            badge="The Blueprints" 
            title="Infrastructure & Science Labs Standards" 
            subtitle="Our educational sandbox operates at research-level scale. We maintain pristine laboratories, computerized server clusters, and deep reading libraries."
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16"
          >
            {infrastructureSpecs.map((spec, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col p-6 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0">
                  {spec.icon}
                </div>
                <h3 className="text-sm font-display font-semibold text-white mb-1 tracking-wide uppercase">
                  {spec.title}
                </h3>
                <span className="text-[10px] font-sans font-medium text-cyan-400/90 tracking-wide uppercase block mb-3">
                  {spec.spec}
                </span>
                <p className="text-xs font-sans font-light text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {spec.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SECURITY & FIRE SHIELD BENTO GRID */}
      <section className="py-24 relative bg-science-grid border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.06),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <SectionHeader 
            badge="The Shield" 
            title="Ironclad Safety & Emergency Safety Matrix" 
            subtitle="Parental confidence is anchored in continuous physical oversight. We protect every building wing with double biometric systems, automated fire grids, and mock drills."
          />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            
            {securityParameters.map((param, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl border border-slate-800/80 bg-slate-950/30 hover:border-cyan-500/20 hover:shadow-cyan-glow transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[220px]"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors"></div>
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-base font-display font-semibold text-white tracking-wide uppercase">
                      {param.title}
                    </h3>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-cyan-glow mt-1.5" />
                  </div>
                  <p className="text-xs font-sans font-light text-slate-400 leading-relaxed">
                    {param.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-900 flex justify-between items-center relative z-10">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Active Standard</span>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">{param.metric}</span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 5. RESIDENTIAL SUPERVISION & STUDENT WELFARE */}
      <section className="py-24 relative bg-science-dots border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-6 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Student campus mentorship and support" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 p-4 rounded-xl glass-card border border-cyan-500/20 bg-slate-950/60 max-w-xs">
                  <span className="text-[10px] uppercase font-display tracking-widest text-cyan-400 font-semibold mb-1 block">Welfare Grid</span>
                  <p className="text-[11px] font-sans font-light text-slate-300 leading-normal">
                    Certified student therapists, nurses, and resident doctorates executing nightly rounds.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <span className="text-xs font-semibold tracking-widest text-[#06B6D4] uppercase font-display">
                Campus Care
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                Residential Welfare <br />
                <span className="cyan-gradient-text">& Active Supervision</span>
              </h2>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                Maintaining a safe scientific academy goes beyond hardware locks. We build a balanced student lifestyle under resident doctorate supervisors, supporting cognitive focus with certified sick-bays, anonymized counseling, and RO dietary guidelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {welfareStructures.map((structure, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-950/40 backdrop-blur-md">
                    <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 shrink-0 h-10 w-10 flex items-center justify-center">
                      {structure.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-1">{structure.title}</h4>
                      <p className="text-[11px] font-sans font-light text-slate-400 leading-relaxed">{structure.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. ACADEMIC EXCELLENCE CATALYST */}
      <section className="py-24 relative bg-science-grid border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <span className="text-xs font-semibold tracking-widest text-[#06B6D4] uppercase font-display">
                Cognitive Growth
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                Academic Rigor & <br />
                <span className="cyan-gradient-text">NEET / JEE Incubators</span>
              </h2>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                Disciplined schedules create top academic placements. A Success School offers core JEE Main/Advanced, NEET, and Advanced Placement preparatory rosters built into the daily resident life, minimizing travel friction so scholars stay fresh.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                {academicsAccelerators.map((acc, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 rounded-xl border border-slate-800/80 bg-slate-950/30 hover:border-cyan-500/20 transition-all duration-300">
                    <div className="max-w-md">
                      <h4 className="text-white font-display font-bold text-xs uppercase tracking-wide mb-1">{acc.title}</h4>
                      <p className="text-[11px] font-sans font-light text-slate-400 leading-relaxed">{acc.desc}</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full shrink-0">
                      {acc.metric}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-6 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Silent Study Area and Mentorship" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 p-4 rounded-xl glass-card border border-cyan-500/20 bg-slate-950/60 max-w-xs">
                  <span className="text-[10px] uppercase font-display tracking-widest text-cyan-400 font-semibold mb-1 block">Rigor Shield</span>
                  <p className="text-[11px] font-sans font-light text-slate-300 leading-normal">
                    Advanced AP syllabus structures paired with custom question grids.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION TRUST SHIELD */}
      <section className="py-20 relative overflow-hidden bg-science-grid border-t border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="p-12 md:p-16 rounded-3xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-cyan-500/5 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight max-w-2xl mx-auto">
              Secure a Disciplined & Safe <br />
              <span className="cyan-gradient-text">Academic Future</span>
            </h2>
            <p className="text-sm font-sans font-light text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Place your child in an environment governed by absolute academic compliance, 24/7 security shields, premium bio-nutrition dining halls, and dedicated doctorates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/contact">
                <Button variant="cyan" icon={<FaClipboardList />}>
                  Inquire Admissions
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outlineWhite">
                  Read Core Vision
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Protocols;
