import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBed, FaUtensils, FaWifi, FaLock, FaUserShield, FaBookReader, 
  FaHeartbeat, FaTshirt, FaWater, FaDice, FaClock, FaArrowRight, 
  FaHome, FaEye, FaUserCheck, FaMicroscope, FaGraduationCap, FaArrowLeft, 
  FaTimes, FaSun, FaPray, FaSpa, FaSchool, FaBook, FaRunning, FaMoon, 
  FaMedal, FaBrain 
} from 'react-icons/fa';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '../animations/motionVariants';

const dailyRoutineData = [
  {
    time: "6:00 AM",
    title: "Wake Up & Alignment",
    subtitle: "Prathna, Yoga & Mindfulness",
    icon: <FaSun className="text-xl text-amber-400" />,
    desc: "Scholars align their state of mind with morning prayers (Prathna) followed by rejuvenating yoga postures and exercises for active cellular energy.",
    metrics: [
      { name: "Cognitive Load", value: "Receptive (Max)" },
      { name: "Metabolic State", value: "Activated" },
      { name: "Activity", value: "Yoga & Prathna" }
    ],
    themeColor: "amber",
    gradient: "from-amber-500/10 via-amber-600/5 to-transparent border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:border-amber-400/40"
  },
  {
    time: "7:00 AM",
    title: "Preparation & Grooming",
    subtitle: "Hygienic Rituals & Uniform Dress",
    icon: <FaClock className="text-xl text-teal-400" />,
    desc: "Centralized hot water supply systems enable warm baths, fresh preparation, and prompt dressing in sanitized, ironed school uniforms.",
    metrics: [
      { name: "Hydration Status", value: "Central RO Checked" },
      { name: "Time Buffer", value: "30 Mins" },
      { name: "Discipline Index", value: "Optimal" }
    ],
    themeColor: "teal",
    gradient: "from-teal-500/10 via-teal-600/5 to-transparent border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.05)] hover:border-teal-400/40"
  },
  {
    time: "7:30 AM",
    title: "Nutritional Fueling",
    subtitle: "Scientifically Crafted Breakfast",
    icon: <FaUtensils className="text-xl text-emerald-400" />,
    desc: "A dietitian-curated, high-protein morning meal utilizing organic grains, milk, fresh nuts, and natural energy elements to sustain high-performance minds.",
    metrics: [
      { name: "Calorie Profile", value: "~480 kcal" },
      { name: "Glycemic Load", value: "Low (Sustained)" },
      { name: "Nutrition Matrix", value: "Passed" }
    ],
    themeColor: "emerald",
    gradient: "from-emerald-500/10 via-emerald-600/5 to-transparent border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-400/40"
  },
  {
    time: "8:00 AM – 1:00 PM",
    title: "Academic Synchronization",
    subtitle: "Advanced School Classes",
    icon: <FaSchool className="text-xl text-blue-400" />,
    desc: "Scholars engage in high-tech digital laboratories, core research curriculum tracks, and rigorous collaborative seminars designed to challenge intellect.",
    metrics: [
      { name: "Brain Engagement", value: "Peak Focus" },
      { name: "Lab Utilization", value: "Physics / Chemistry" },
      { name: "Instruction Efficacy", value: "High" }
    ],
    themeColor: "blue",
    gradient: "from-blue-500/10 via-blue-600/5 to-transparent border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)] hover:border-blue-400/40"
  },
  {
    time: "1:00 PM",
    title: "Midday Restoration",
    subtitle: "Nutritious Lunch & Hydro-Balance",
    icon: <FaUtensils className="text-xl text-indigo-400" />,
    desc: "Scholars convene in the sanitized dining hall for a balanced, multi-course meal rich in essential macronutrients, fresh legumes, and cooling curds.",
    metrics: [
      { name: "Digestive Index", value: "Highly Balanced" },
      { name: "Water Intake", value: "600ml Min" },
      { name: "Rest Interval", value: "45 Mins" }
    ],
    themeColor: "indigo",
    gradient: "from-indigo-500/10 via-indigo-600/5 to-transparent border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.05)] hover:border-indigo-400/40"
  },
  {
    time: "2:00 PM – 5:00 PM",
    title: "Advanced Scaffolding",
    subtitle: "JEE / NEET Prep & Mentoring Labs",
    icon: <FaGraduationCap className="text-xl text-purple-400" />,
    desc: "Custom extra hours specifically structured for competitive JEE Main/Advanced, NEET preparation, personalized doubt clearing, and peer research clubs.",
    metrics: [
      { name: "Mental Intensity", value: "High Capacity" },
      { name: "Mentor Ratio", value: "1 : 8 Focus" },
      { name: "Subject Thrust", value: "Stem Core" }
    ],
    themeColor: "purple",
    gradient: "from-purple-500/10 via-purple-600/5 to-transparent border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.05)] hover:border-purple-400/40"
  },
  {
    time: "5:00 PM – Sunset",
    title: "Kinesthetic Synergy",
    subtitle: "Playground Sports & Fitness Drills",
    icon: <FaRunning className="text-xl text-rose-400" />,
    desc: "Scholars participate in physical fitness drills and structured outdoor sports like competitive cricket and volleyball to optimize oxygen levels and blood flow.",
    metrics: [
      { name: "Oxygen Saturation", value: "Peak Aerobic" },
      { name: "Volleyball Leagues", value: "Inter-Wing Matches" },
      { name: "Endorphins Level", value: "Elevated" }
    ],
    themeColor: "rose",
    gradient: "from-rose-500/10 via-rose-600/5 to-transparent border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.05)] hover:border-rose-400/40"
  },
  {
    time: "Evening & Beyond",
    title: "Deep Rejuvenation",
    subtitle: "Dinner, Free Relaxation & Quiet Hours",
    icon: <FaMoon className="text-xl text-cyan-400" />,
    desc: "A hot, clean dinner, quiet peer readings, restricted screen hours, and restorative orthopedic rest rosters ensure standard circadian rhythms.",
    metrics: [
      { name: "Circadian Sync", value: "10:30 PM Sleep" },
      { name: "Silent Hour", value: "8:30 PM - 10:00 PM" },
      { name: "Medical Audit", value: "Passed" }
    ],
    themeColor: "cyan",
    gradient: "from-cyan-500/10 via-cyan-600/5 to-transparent border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:border-cyan-400/40"
  }
];

const hostelFeatures = [
  {
    icon: <FaHome className="text-xl text-cyan-400" />,
    title: "Separate Boys & Girls Campus",
    desc: "Completely secure, independent residential blocks with strict access parameters and specialized warden staff."
  },
  {
    icon: <FaUserShield className="text-xl text-cyan-400" />,
    title: "24/7 Security Patrols",
    desc: "Round-the-clock professional security details patrolling entry points, walkways, and perimeter shields."
  },
  {
    icon: <FaEye className="text-xl text-cyan-400" />,
    title: "CCTV Surveillance",
    desc: "Comprehensive smart visual monitoring covering all hallways, dining hubs, common rooms, and outdoor fields."
  },
  {
    icon: <FaUserCheck className="text-xl text-cyan-400" />,
    title: "Experienced Wardens",
    desc: "Doctorate-level mentors and resident wardens providing disciplined oversight and academic scaffolding."
  },
  {
    icon: <FaUtensils className="text-xl text-cyan-400" />,
    title: "Hygienic Dining Hall",
    desc: "State-of-the-art culinary pavilions serving scientifically balanced nutritional profiles on pristine metal tables."
  },
  {
    icon: <FaHeartbeat className="text-xl text-cyan-400" />,
    title: "Nutritious Diet Chart",
    desc: "Daily changing menu formulated by pediatric nutritionists to boost memory, stamina, and intellectual endurance."
  },
  {
    icon: <FaWater className="text-xl text-cyan-400" />,
    title: "RO Water Treatment",
    desc: "Multi-stage reverse osmosis filtration systems ensuring 100% clean drinking water grids across every wing."
  },
  {
    icon: <FaWifi className="text-xl text-cyan-400" />,
    title: "High-Speed Wi-Fi Facility",
    desc: "Secure educational cybernet connection with direct access limits, content filters, and restricted study timings."
  },
  {
    icon: <FaBookReader className="text-xl text-cyan-400" />,
    title: "Silent Study Chambers",
    desc: "Soundproofed reading galleries open for evening study rosters with ready references and peer mentoring logs."
  },
  {
    icon: <FaTshirt className="text-xl text-cyan-400" />,
    title: "Professional Laundry Service",
    desc: "Bi-weekly centralized washing, drying, and ironing cycles to keep uniforms and personal wardrobes pristine."
  },
  {
    icon: <FaHeartbeat className="text-xl text-cyan-400" />,
    title: "On-Call Medical Support",
    desc: "24/7 designated sick-bay chambers with licensed nursing staff and immediate emergency tie-ups with apex hospitals."
  },
  {
    icon: <FaDice className="text-xl text-cyan-400" />,
    title: "Recreational Lounges",
    desc: "Premium common halls equipped with board game panels, chess boards, and digital projection suites for weekends."
  },
  {
    icon: <FaClock className="text-xl text-cyan-400" />,
    title: "Structured Routines",
    desc: "Disciplined hourly rosters balancing active laboratory times, digital study sessions, physical drills, and rests."
  },
  {
    icon: <FaBed className="text-xl text-cyan-400" />,
    title: "Ergonomic Living Suites",
    desc: "Spacious layout plans complete with personal storage chambers, orthopedic beds, and scientific airflow."
  }
];

const roomFeatures = [
  { title: "Spacious Layouts", desc: "Optimized floor space (250 sq.ft. per wing) designed to host two cohorts comfortably without clutter." },
  { title: "Personal Study Desks", desc: "Crafted maple-wood study tables with integrated power sockets and adjustable scientific lighting nodes." },
  { title: "Orthopedic Bedding", desc: "Premium dust-mite-resistant mattresses engineered to promote optimal deep sleep patterns." },
  { title: "Biometric Storage", desc: "Centralized wardrobe compartments with secured lock systems for personal academic gear." },
  { title: "Cross Ventilation", desc: "Symmetrical window setups ensuring continuous flow of clean air and beautiful natural light." },
  { title: "Pristine Interiors", desc: "Modern anti-bacterial slate walls and dust-free laminated flooring to support premium hygiene." }
];

const galleryItems = [
  {
    category: "rooms",
    title: "Dual Cohort Living Suite",
    desc: "Clean minimal layout with custom study desks and orthopedic beds.",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "dining",
    title: "Culinary Pavilion",
    desc: "Highly hygienic dining hall serving nutritionally balanced meal profiles.",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "study",
    title: "Silent Reading Chamber",
    desc: "Soundproofed workspace with direct digital references and study logs.",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "recreation",
    title: "Leisure & Game Zone",
    desc: "Indoor gaming boards, robotic test arenas, and chess tables.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "building",
    title: "Modern Residential Bloc",
    desc: "Futuristic architectural exterior surrounded by dense green shields.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    category: "rooms",
    title: "Cozy Living Area Overview",
    desc: "Optimized ventilation with panoramic views of the campus fields.",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800"
  }
];

const Hostel = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);
  const [activeRoutineIdx, setActiveRoutineIdx] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  const filteredGallery = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
              <FaHome className="animate-pulse-subtle" /> A Home Away From Home
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-white">
              Modern Residential <span className="cyan-gradient-text">Campus Life</span>
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Discover a safe, highly disciplined, and comfortable academic cocoon tailored to empower secondary scholars through focused residential learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BENTO FEATURES GRID */}
      <section className="py-24 relative bg-science-grid border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            badge="The Infrastructure" 
            title="Premium Amenities" 
            subtitle="Explore our meticulously structured system of services designed to simplify life so scholars can focus 100% on learning."
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {hostelFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col p-6 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-sm font-display font-semibold text-white mb-2 tracking-wide uppercase">
                  {feat.title}
                </h3>
                <p className="text-xs font-sans font-light text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ROOM SHOWCASE */}
      <section className="py-24 relative overflow-hidden bg-science-dots border-b border-slate-900">
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
                The Living Suites
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                Cinematic Room <br />
                <span className="cyan-gradient-text">Showcase & Design</span>
              </h2>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                Our dormitories provide a sanctuary for deep mental recovery. Symmetrically partitioned to encourage positive peer relationships, rooms feature warm natural light, orthopedic setups, and private biometric compartments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {roomFeatures.map((room, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-cyan-glow mt-1.5 shrink-0" />
                    <div>
                      <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-1">{room.title}</h4>
                      <p className="text-[11px] font-sans font-light text-slate-400 leading-normal">{room.desc}</p>
                    </div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200" 
                  alt="A Success School Modern Room Design" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 p-4 rounded-xl glass-card border border-cyan-500/20 bg-slate-950/60 max-w-xs">
                  <span className="text-[10px] uppercase font-display tracking-widest text-cyan-400 font-semibold mb-1 block">Room Protocol</span>
                  <p className="text-[11px] font-sans font-light text-slate-300 leading-normal">
                    Two scholars per wing to promote balanced socialization and optimal quiet times.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. ACADEMIC STUDY ENVIRONMENT */}
      <section className="py-24 relative bg-science-grid border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-6 order-2 lg:order-1 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Silent Study Area" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 p-4 rounded-xl glass-card border border-cyan-500/20 bg-slate-950/60 max-w-xs">
                  <span className="text-[10px] uppercase font-display tracking-widest text-cyan-400 font-semibold mb-1 block">Study Hours</span>
                  <p className="text-[11px] font-sans font-light text-slate-300 leading-normal">
                    Supervised evening study grids (6:30 PM - 9:30 PM) under doctorate mentors.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6"
            >
              <span className="text-xs font-semibold tracking-widest text-[#06B6D4] uppercase font-display">
                The Intellectual Cocoon
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                Quiet Atmosphere & <br />
                <span className="cyan-gradient-text">Academic Mentoring</span>
              </h2>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                At A Success School, our residences function like premium research retreats. The living schedule actively supports evening learning clusters, giving students direct personal tutoring for advanced competitive exams.
              </p>

              <div className="flex flex-col gap-5 mt-2">
                <div className="flex gap-4 p-4 rounded-xl border border-slate-800/80 bg-slate-950/30 hover:border-cyan-500/20 transition-all duration-300">
                  <div className="p-2 bg-cyan-500/10 rounded-lg shrink-0">
                    <FaBookReader className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-semibold text-xs uppercase tracking-wide mb-1">Evening Prep Circles</h4>
                    <p className="text-[11px] font-sans font-light text-slate-400 leading-relaxed">Dedicated JEE / NEET / Advanced Placement preparation groups with peers and in-house subject experts.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-slate-800/80 bg-slate-950/30 hover:border-cyan-500/20 transition-all duration-300">
                  <div className="p-2 bg-cyan-500/10 rounded-lg shrink-0">
                    <FaMicroscope className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-semibold text-xs uppercase tracking-wide mb-1">Scholastic Discipline</h4>
                    <p className="text-[11px] font-sans font-light text-slate-400 leading-relaxed">Strict internet-off schedules after 10:30 PM to maintain healthy neural sleep cycles and cognitive stamina.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. SAFETY & SECURITY MATRIX */}
      <section className="py-24 relative bg-science-dots border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            badge="The Shield" 
            title="Ironclad Safety Parameters" 
            subtitle="Parental peace of mind is built into our core protocols. Every residential sector is locked behind double biometric matrices and constant vigilance."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-slate-800/80 bg-slate-950/30 hover:border-cyan-500/20 hover:shadow-cyan-glow transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <FaUserShield className="text-xl text-cyan-400" />
              </div>
              <h3 className="text-base font-display font-semibold text-white mb-3">24/7 Wardens & Guard Shield</h3>
              <p className="text-xs font-sans font-light text-slate-400 leading-relaxed">
                Armed perimeter guard posts and dedicated warden shifts patrolling hallways ensure active physical protection at all hours.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl border border-slate-800/80 bg-slate-950/30 hover:border-cyan-500/20 hover:shadow-cyan-glow transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <FaEye className="text-xl text-cyan-400" />
              </div>
              <h3 className="text-base font-display font-semibold text-white mb-3">Continuous Smart Monitoring</h3>
              <p className="text-xs font-sans font-light text-slate-400 leading-relaxed">
                AI-integrated high-definition cameras capture all corridors, common yards, and gates, sending real-time security alerts to control rooms.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl border border-slate-800/80 bg-slate-950/30 hover:border-cyan-500/20 hover:shadow-cyan-glow transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <FaHeartbeat className="text-xl text-cyan-400" />
              </div>
              <h3 className="text-base font-display font-semibold text-white mb-3">Licensed Sick-Bay Chambers</h3>
              <p className="text-xs font-sans font-light text-slate-400 leading-relaxed">
                Resident medical officers on watch with a fully-equipped medical clinic and a standby ambulance vehicle for emergency transits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. DINING & NUTRITION SHOWCASE */}
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
                Nutritional Precision
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                Pristine Dining Halls & <br />
                <span className="cyan-gradient-text">Balanced Gastronomy</span>
              </h2>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                High-performance minds require high-performance nutrition. The Success School culinary team serves four freshly prepared, nutritionist-approved meals daily in a sanitized steel setting.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <span className="text-xs font-sans text-slate-300">100% RO-purified central water coolers with monthly particulate audits.</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <span className="text-xs font-sans text-slate-300">Strict weekly sanitary steam cycles across all cooking utensils and preparation pads.</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <span className="text-xs font-sans text-slate-300">Curated nutrient menus rich in proteins, trace minerals, and cognitive-boosting fats.</span>
                </div>
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
                  src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=1200" 
                  alt="Nutritious Student Cafeteria" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 p-4 rounded-xl glass-card border border-cyan-500/20 bg-slate-950/60 max-w-xs">
                  <span className="text-[10px] uppercase font-display tracking-widest text-cyan-400 font-semibold mb-1 block">Sanitary Shield</span>
                  <p className="text-[11px] font-sans font-light text-slate-300 leading-normal">
                    Fully automated washing cycles and clinical sanitation standard operating procedures.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6.5. INTERACTIVE DAILY ROUTINE TIMELINE */}
      <section id="routine" className="py-24 relative overflow-hidden bg-science-grid border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <SectionHeader 
            badge="Residential Schedule" 
            title="A Perfect Balance of Discipline, Learning & Growth" 
            subtitle="Explore our scientifically optimized residential roster balancing rigorous mental training, spiritual centering, athletic drills, and deep biological recovery."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
            
            {/* Left Column: Futuristic Cosmic Clock / Dashboard Panel (Sticky) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-cyan-500/20 bg-slate-950/70 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-cyan-500/5 group"
              >
                {/* Visual grid accent */}
                <div className="absolute inset-0 bg-science-dots opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                
                {/* Active schedule display header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800 relative z-10">
                  <span className="text-[10px] uppercase font-display tracking-[0.2em] text-cyan-400 font-semibold flex items-center gap-2">
                    <FaClock className="animate-spin [animation-duration:12s]" /> Cognitive Roster State
                  </span>
                  <span className="px-2 py-0.5 text-[9px] uppercase font-mono tracking-wider bg-cyan-500/10 border border-cyan-400/20 rounded-full text-cyan-300">
                    Live Sync
                  </span>
                </div>

                {/* Big Time Block & Icon */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center glow-cyan shrink-0">
                    {dailyRoutineData[activeRoutineIdx].icon}
                  </div>
                  <div>
                    <span className="text-2xl font-display font-bold text-white tracking-tight">
                      {dailyRoutineData[activeRoutineIdx].time}
                    </span>
                    <span className="block text-[11px] font-sans font-light text-slate-400">
                      Active Time Block
                    </span>
                  </div>
                </div>

                {/* Core Title & Sub */}
                <div className="mb-6 relative z-10">
                  <h4 className="text-lg font-display font-bold text-white leading-snug uppercase tracking-wide">
                    {dailyRoutineData[activeRoutineIdx].title}
                  </h4>
                  <p className="text-[11px] font-sans font-semibold text-cyan-400/90 tracking-wide mt-0.5">
                    {dailyRoutineData[activeRoutineIdx].subtitle}
                  </p>
                </div>

                {/* Scientifically formulated metrics progress indicators */}
                <div className="flex flex-col gap-4 mb-6 relative z-10">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono tracking-wide">
                      <span className="text-slate-400 uppercase">Cognitive Focus Efficiency</span>
                      <span className="text-cyan-400 font-bold">
                        {activeRoutineIdx === 0 ? "98%" : activeRoutineIdx === 3 ? "99%" : activeRoutineIdx === 5 ? "95%" : activeRoutineIdx === 7 ? "Restoring" : "85%"}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ 
                          width: activeRoutineIdx === 0 ? "98%" : activeRoutineIdx === 3 ? "99%" : activeRoutineIdx === 5 ? "95%" : activeRoutineIdx === 7 ? "20%" : "85%" 
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-glow"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono tracking-wide">
                      <span className="text-slate-400 uppercase">Physical Activity Intensity</span>
                      <span className="text-cyan-400 font-bold">
                        {activeRoutineIdx === 0 ? "Yoga Mode" : activeRoutineIdx === 6 ? "Aerobic peak" : activeRoutineIdx === 7 ? "Low (Relax)" : "Academic"}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ 
                          width: activeRoutineIdx === 0 ? "50%" : activeRoutineIdx === 6 ? "98%" : activeRoutineIdx === 7 ? "5%" : "30%" 
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-glow"
                      />
                    </div>
                  </div>
                </div>

                {/* Dynamic Cyber Parameters Grid */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/60 rounded-2xl border border-slate-900 text-center relative z-10">
                  {dailyRoutineData[activeRoutineIdx].metrics.map((met, mIdx) => (
                    <div key={mIdx} className="flex flex-col items-center">
                      <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider block">{met.name}</span>
                      <span className="text-[10px] font-display font-bold text-white tracking-tight mt-0.5">{met.value}</span>
                    </div>
                  ))}
                </div>

                {/* Holographic backdrop pulse */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700"></div>
              </motion.div>
            </div>

            {/* Right Column: Detailed Interactive Timeline Progression */}
            <div className="lg:col-span-8 flex flex-col relative pl-4 md:pl-10">
              
              {/* Vertical timeline progress track line */}
              <div className="absolute left-[19px] md:left-[35px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500/40 to-slate-900 shadow-cyan-glow"></div>
              
              {/* Routine list mapping */}
              {dailyRoutineData.map((routine, idx) => {
                const isActive = activeRoutineIdx === idx;
                
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    onViewportEnter={() => setActiveRoutineIdx(idx)}
                    onClick={() => setActiveRoutineIdx(idx)}
                    className="relative mb-10 last:mb-0 pl-10 md:pl-16 group cursor-pointer"
                  >
                    {/* Animated Timeline Node Icon Bubble */}
                    <div 
                      className={`absolute left-0 md:left-4 top-1.5 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all duration-500 z-10 ${
                        isActive 
                          ? `bg-slate-950 border-cyan-400 text-cyan-400 shadow-cyan-glow scale-110` 
                          : `bg-slate-950/80 border-slate-800 text-slate-500 hover:border-cyan-500/40 hover:text-cyan-300`
                      }`}
                    >
                      {routine.icon}
                    </div>

                    {/* Timeline Item Description Card */}
                    <div 
                      className={`p-6 md:p-8 rounded-3xl border backdrop-blur-md transition-all duration-500 bg-slate-950/40 hover:bg-slate-950/60 ${
                        isActive 
                          ? `border-cyan-500/40 shadow-cyan-glow shadow-[rgba(6,182,212,0.06)]` 
                          : `border-slate-800/80 hover:border-slate-700/60`
                      }`}
                    >
                      {/* Top Time Badge & Metric Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider font-display uppercase ${
                          isActive 
                            ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400' 
                            : 'bg-slate-900 border border-slate-800 text-slate-400'
                        }`}>
                          <FaClock className="text-[10px]" /> {routine.time}
                        </span>
                        
                        {/* Interactive glow sync */}
                        {isActive && (
                          <span className="text-[9px] uppercase font-mono tracking-widest text-cyan-400/80 flex items-center gap-1.5 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-cyan-glow"></span> Focus Active
                          </span>
                        )}
                      </div>

                      {/* Header Title */}
                      <h3 className={`text-base md:text-lg font-display font-bold transition-colors duration-300 tracking-wide ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {routine.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="text-[11px] font-sans font-medium text-cyan-400/90 tracking-wide uppercase mt-0.5">
                        {routine.subtitle}
                      </p>

                      {/* Paragraph Description */}
                      <p className="text-[12px] font-sans font-light text-slate-400 leading-relaxed mt-3 group-hover:text-slate-300 transition-colors">
                        {routine.desc}
                      </p>

                      {/* Microchip Parameters Row (Only shown clearly on hover/focus) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-900">
                        {routine.metrics.map((met, mIdx) => (
                          <div key={mIdx} className="flex flex-col">
                            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">{met.name}</span>
                            <span className="text-[11px] font-display font-semibold text-slate-300 tracking-tight mt-0.5">{met.value}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* 6.6. PREMIUM STUDENT LIFESTYLE BENTO SECTION */}
      <section id="lifestyle" className="py-24 relative overflow-hidden bg-science-dots border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.06),transparent_50%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <SectionHeader 
            badge="The Lifestyle" 
            title="Life at Our Residential Campus" 
            subtitle="Explore our integrated lifestyle ecosystem. We cultivate sharp minds in high-performance bodies, balancing strict intellectual disciplines with recreational joy."
          />

          {/* Premium Modern Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-16">
            
            {/* Box 1: Mind & Soul Alignment (Yoga, Meditation, Prayer) - 8 Cols (Wide) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-8 md:col-span-2 relative overflow-hidden group rounded-3xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md p-8 flex flex-col justify-between aspect-auto min-h-[350px] hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all duration-500"
            >
              {/* Background graphic image with cyber tint mask overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Student morning yoga and meditation" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700 opacity-20 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>

              {/* Top Tag & Icon */}
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <FaPray className="text-xl text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  Spiritual Synchronicity
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-12">
                <span className="text-[10px] uppercase font-display font-semibold tracking-widest text-[#D4AF37] block mb-2">
                  Morning alignment protocol
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                  Mindfulness, Prathna & Morning Yoga
                </h3>
                <p className="text-xs md:text-sm font-sans font-light text-slate-400 leading-relaxed max-w-xl">
                  Every resident morning starts with a clean slate. Central assembly halls coordinate silent meditation tracks and collective hymns (Prathna). Following spiritual alignment, certified physical yogis lead respiratory techniques and muscle-toning sequences to oxygenate student blood for long laboratory rosters.
                </p>
                
                {/* Stats grid */}
                <div className="flex gap-6 mt-6 pt-4 border-t border-slate-900">
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Active Roster</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">30 Mins Daily</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Stress Reduction</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">Clinical Grade</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Hormonal Sync</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">99% Circadian Alignment</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Body & Physical Endurance (Playground & Drills) - 4 Cols (Tall/Square) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 md:col-span-1 relative overflow-hidden group rounded-3xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md p-8 flex flex-col justify-between aspect-square hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all duration-500"
            >
              {/* Background graphic image with cyber tint mask overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1592656094267-764a45068526?auto=format&fit=crop&q=80&w=800" 
                  alt="Volleyball game on campus" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700 opacity-15 group-hover:opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>

              {/* Top Tag & Icon */}
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <FaRunning className="text-xl text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  Kinesthetics
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-8">
                <span className="text-[10px] uppercase font-display font-semibold tracking-widest text-[#D4AF37] block mb-2">
                  Aerobic and sports training
                </span>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2">
                  Playground Sports & Fitness
                </h3>
                <p className="text-xs font-sans font-light text-slate-400 leading-relaxed">
                  We balance coding blocks with physical combat. Evening fields activate structured cricket tourneys, volleyball leagues, and cardio drills to relieve mental load.
                </p>
                <div className="flex gap-4 mt-4 pt-3 border-t border-slate-900">
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Outdoor Fields</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">3 Acres Grass</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Coaching</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">BCCI/Volleyball Experts</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 3: Intellectual Synergy (Study & Mentoring) - 4 Cols (Tall/Square) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-4 md:col-span-1 relative overflow-hidden group rounded-3xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md p-8 flex flex-col justify-between aspect-square hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all duration-500"
            >
              {/* Background graphic image with cyber tint mask overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="Student mentoring circles" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700 opacity-15 group-hover:opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>

              {/* Top Tag & Icon */}
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <FaBrain className="text-xl text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  Cognition
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-8">
                <span className="text-[10px] uppercase font-display font-semibold tracking-widest text-[#D4AF37] block mb-2">
                  Academic incubation rosters
                </span>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2">
                  Intellectual & Mentor Scaffolds
                </h3>
                <p className="text-xs font-sans font-light text-slate-400 leading-relaxed">
                  Residential blocks contain quiet reading zones. From 2 PM, IIT-JEE and NEET exam mentoring circles and peer study clinics operate with research-level mentors.
                </p>
                <div className="flex gap-4 mt-4 pt-3 border-t border-slate-900">
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Mentor Ratio</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">1 : 8 Dedicated</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Doubt Solver Labs</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">24/7 Portal Sync</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 4: Nutrition & Diet (Gastronomy) - 8 Cols (Wide) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8 md:col-span-2 relative overflow-hidden group rounded-3xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md p-8 flex flex-col justify-between aspect-auto min-h-[350px] hover:border-cyan-500/30 hover:shadow-cyan-glow transition-all duration-500"
            >
              {/* Background graphic image with cyber tint mask overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200" 
                  alt="Student nutrition and dining layout" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700 opacity-20 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>

              {/* Top Tag & Icon */}
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <FaUtensils className="text-xl text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  Biology & Diet
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-12">
                <span className="text-[10px] uppercase font-display font-semibold tracking-widest text-[#D4AF37] block mb-2">
                  Scientific dietary architecture
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                  Scientifically Curated Diet & Clean Hydration
                </h3>
                <p className="text-xs md:text-sm font-sans font-light text-slate-400 leading-relaxed max-w-xl">
                  Biological endurance is critical. Our pediatric nutritionists formulate daily menus rich in complex carbohydrates, clean protein matrices, Omega-3 fats, and fresh plant-based vitamins. High-pressure steam sanitizers maintain 100% sterile metal tables, and double RO systems deliver multi-stage drinking water.
                </p>
                
                {/* Stats grid */}
                <div className="flex gap-6 mt-6 pt-4 border-t border-slate-900">
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Meals Roster</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">4 Fresh Servings Daily</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Steam Sanitation</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">Daily Audited</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Central Filtration</span>
                    <span className="text-xs font-display font-bold text-slate-300 block mt-0.5">RO with monthly particulate tests</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. MASONRY HOSTEL GALLERY */}
      <section className="py-24 relative bg-science-dots border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            badge="The Visuals" 
            title="Hostel Campus Gallery" 
            subtitle="Take a visual tour inside our safe living quarters, pristine dining halls, quiet libraries, and recreation areas."
          />

          {/* Dynamic Category Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            {['all', 'rooms', 'dining', 'study', 'recreation', 'building'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-display text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-cyan-glow'
                    : 'bg-slate-950/40 text-slate-300 border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, idx) => (
                <motion.div
                  layout
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActivePhoto(item)}
                  className="group relative rounded-2xl overflow-hidden border border-slate-800 shadow-lg aspect-square cursor-pointer"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] uppercase font-display tracking-widest text-cyan-400 font-bold mb-1">{item.category}</span>
                    <h4 className="text-white font-display font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-[11px] font-sans font-light text-slate-300 leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActivePhoto(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-950/60 border border-slate-800/80 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-colors"
              >
                <FaTimes />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square bg-slate-950">
                  <img src={activePhoto.img} alt={activePhoto.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center gap-4 text-left">
                  <span className="text-xs uppercase font-display tracking-widest text-[#06B6D4] font-bold border-l-2 border-[#06B6D4] pl-3">
                    {activePhoto.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight">
                    {activePhoto.title}
                  </h3>
                  <p className="text-slate-300 font-sans font-light leading-relaxed">
                    {activePhoto.desc}
                  </p>
                  <p className="text-xs font-sans font-light text-slate-500 leading-normal">
                    This installation conforms to strict sanitation, surveillance audits, and cohort guidelines to guarantee maximum safety.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 8. CALL TO ACTION BANNER */}
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
              Experience Safe & Modern <br />
              <span className="cyan-gradient-text">Residential Learning</span>
            </h2>
            <p className="text-sm font-sans font-light text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Give your child the supreme academic focus of a premier scientific academy, surrounded by doctoral mentors and elite peers. Security gates are open for session inquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/contact">
                <Button variant="cyan" icon={<FaArrowRight />}>
                  Explore Campus Tour
                </Button>
              </Link>
              <Link to="/admissions">
                <Button variant="outlineWhite">
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Hostel;
