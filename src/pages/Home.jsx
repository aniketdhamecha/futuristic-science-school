import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowRight, FaAward, FaAtom, FaMicroscope, FaDna, FaTerminal, FaGraduationCap } from 'react-icons/fa';
import { HiSparkles, HiShieldCheck } from 'react-icons/hi';
import { navLinks } from '../constants/navLinks';
import { schoolStats } from '../data/schoolStats';
import { testimonials } from '../constants/testimonials';
import { eventsData } from '../data/eventsData';
import { facultyData } from '../constants/facultyData';
import { fadeInUp, scaleIn, fadeInLeft, fadeInRight } from '../animations/motionVariants';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom Count-Up Statistics Component using Intersection Observer
const Counter = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const end = value;
        const totalSteps = 50;
        const stepTime = duration / totalSteps;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          const progress = step / totalSteps;
          const currentCount = Math.floor(end * (progress * (2 - progress))); // Ease out
          setCount(currentCount);

          if (step >= totalSteps) {
            setCount(end);
            clearInterval(timer);
          }
        }, stepTime);
      }
    }, { threshold: 0.1 });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [value, duration, hasAnimated]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
};

const Home = () => {
  // Map icons based on metadata
  const getStatIcon = (name) => {
    switch (name) {
      case 'Microscope': return <FaMicroscope className="text-cyan-400 text-xl animate-pulse" />;
      case 'Teacher': return <FaGraduationCap className="text-cyan-400 text-xl" />;
      case 'Award': return <FaAward className="text-cyan-400 text-xl" />;
      case 'Atom': return <FaAtom className="text-cyan-400 text-xl animate-spin [animation-duration:10s]" />;
      default: return <HiShieldCheck className="text-cyan-400 text-xl" />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-bg">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center dark-gradient text-white overflow-hidden -mt-[88px] pt-[88px] bg-science-grid-dark">
        {/* Glow and Scientific Accents */}
        <div className="absolute inset-0 z-0 bg-science-grid opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=2000" 
            alt="A Success School Futuristic Research Center" 
            className="w-full h-full object-cover opacity-15 scale-105 animate-float"
            style={{ animationDuration: '25s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/70 to-[#020617]"></div>
          <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-400/10 border border-cyan-400/20 font-display shadow-cyan-glow">
              <FaAtom className="text-sm animate-spin [animation-duration:8s]" /> A Success School
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight mb-8 tracking-tight text-white">
              Nurturing Scientific Minds, <br />
              <span className="cyan-gradient-text">Engineering the Future</span>
            </h1>
            <p className="text-lg md:text-xl font-sans font-light text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              A Success School prepares exceptional secondary scholars (Grades 9–12) for advanced careers in quantum engineering, bio-medicine, and computational artificial intelligence through college-level inquiry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/admissions">
                <Button variant="cyan" icon={<FaArrowRight />}>
                  Explore Admissions
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outlineWhite">
                  Research Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase font-display tracking-widest text-slate-400">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[20px] h-[32px] rounded-full border border-slate-500/50 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400 shadow-cyan-glow"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. SCHOOL STATISTICS */}
      <section className="py-16 bg-[#020617] border-b border-slate-900 text-white relative bg-science-dots">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolStats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left border-l border-cyan-500/20 pl-6"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/20 flex items-center justify-center mb-4 shadow-cyan-glow bg-opacity-70">
                  {getStatIcon(stat.iconName)}
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <span className="block text-sm font-semibold text-cyan-400 font-display mt-2">
                  {stat.label}
                </span>
                <span className="block text-xs text-slate-500 font-sans mt-0.5">
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Bento Grid) */}
      <section className="py-24 relative bg-science-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            badge="Advanced Curriculum Foundations" 
            title="The Scientific Paradigm" 
            subtitle="Explore how A Success School integrates rigorous computational research and pre-professional bio-medical tracks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Large Bento Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:col-span-2 glass-card p-10 flex flex-col justify-between min-h-[350px] relative overflow-hidden bento-hover"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 border border-cyan-500/20 shadow-cyan-glow">
                  <FaAtom className="text-xl animate-spin [animation-duration:15s]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-white">Advanced Core Tracks: Engineering & Medical</h3>
                <p className="text-slate-400 font-sans font-light leading-relaxed max-w-xl">
                  We prepare our cohort for high-tier STEM fields by offering specialized career pathways. Under scientific mentorship, students run molecular simulations, construct blockchain models, and master quantum mathematics.
                </p>
              </div>
              <Link to="/academics" className="inline-flex items-center gap-2 text-sm font-display font-bold text-cyan-500 hover:text-cyan-600 transition-colors mt-6">
                Learn Methodology <FaArrowRight />
              </Link>
            </motion.div>

            {/* Card 2: Standard Bento Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-card p-10 flex flex-col justify-between min-h-[350px] bento-hover"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                  <FaMicroscope className="text-xl" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Biotech Cleanrooms</h3>
                <p className="text-slate-500 font-sans font-light leading-relaxed">
                  Performing cellular separation, DNA isolation, and gene sequencing using medical-grade equipment and advanced bio-informatics software.
                </p>
              </div>
              <Link to="/facilities" className="inline-flex items-center gap-2 text-sm font-display font-bold text-cyan-500 hover:text-cyan-600 transition-colors mt-6">
                Explore Cleanrooms <FaArrowRight />
              </Link>
            </motion.div>

            {/* Card 3: Standard Bento Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-card p-10 flex flex-col justify-between min-h-[350px] bento-hover"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 border border-indigo-500/20">
                  <FaTerminal className="text-xl" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Neural AI Simulation</h3>
                <p className="text-slate-500 font-sans font-light leading-relaxed">
                  Students study tensor calculus, compile deep neural networks, and execute machine learning regression models on private GPU servers.
                </p>
              </div>
              <Link to="/academics" className="inline-flex items-center gap-2 text-sm font-display font-bold text-cyan-500 hover:text-cyan-600 transition-colors mt-6">
                Explore Computing <FaArrowRight />
              </Link>
            </motion.div>

            {/* Card 4: Large Bento Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:col-span-2 glass-card p-10 flex flex-col justify-between min-h-[350px] relative overflow-hidden bento-hover"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 border border-cyan-500/20">
                  <HiShieldCheck className="text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-primary">Preeminent Ivy & Tech Admissions</h3>
                <p className="text-slate-500 font-sans font-light leading-relaxed max-w-xl">
                  Our rigorous scientific curriculum ensures our graduates earn placements at top engineering and medical universities, including MIT, Stanford, Johns Hopkins, Harvard, and Cambridge.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-display font-bold text-cyan-500 hover:text-cyan-600 transition-colors mt-6">
                View University Placements <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>      {/* 4. DEAN'S DIRECTIVE */}
      <section className="py-24 bg-neutral-bg overflow-hidden relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Portrait */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-3xl -rotate-3 translate-x-3 translate-y-3 pointer-events-none"></div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Evelyn Vance" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="font-display font-bold text-lg">Dr. Evelyn Vance</span>
                  <span className="text-xs text-cyan-400 font-display uppercase tracking-widest mt-0.5">Dean of Academics & STEM Chair</span>
                </div>
              </div>
            </motion.div>
 
            {/* Right Column: Narrative */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase font-display font-semibold">
                Dean's Directive
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-semibold mb-2 text-white">
                Scaffolding Pre-eminent Scientific Minds
              </h2>
              <blockquote className="text-lg text-white font-display font-light italic border-l-4 border-cyan-400 pl-6 leading-relaxed my-4">
                "We do not expect our secondary students to simply memorize textbook formulas. We provide the scaffolding so they can publish real research, model physics fields, and engineer autonomous code."
              </blockquote>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                Welcome to A Success School. Our secondary school model is calibrated around high-fidelity science: **quantum astrophysics, microbiological CRISPR manipulation, and deep hardware cybernetics**. By structuring our high-tech laboratories on par with leading research institutes, we give our cohort squads a headstart in scientific research.
              </p>
              <p className="text-slate-300 font-sans font-light leading-relaxed">
                Whether our cohort graduates design high-performance solar wings or simulate neural pathway matrices, they leave our grounds with the ultimate analytical agency needed to shape future tech.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div>
                  <h4 className="font-display font-semibold text-white">Dr. Evelyn Vance</h4>
                  <p className="text-xs text-slate-400 font-sans">Dean of Academics, A Success School</p>
                </div>
              </div>
            </motion.div>
 
          </div>
        </div>
      </section>
 
      {/* 5. FACILITIES PREVIEW */}
      <section className="py-24 bg-neutral-bg border-t border-slate-900 relative bg-science-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeader 
              badge="State-of-the-Art Spaces" 
              title="Modern Science Facilities" 
              subtitle="Calibrated for deep inquiry, experimental safety, and collaborative simulations."
              align="left"
              className="!mb-0"
            />
            <Link to="/facilities" className="mt-6 md:mt-0">
              <Button variant="outline" icon={<FaArrowRight />}>
                All Facilities
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CRISPR & Bio-Genetics Cleanrooms",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
                desc: "Equipped with positive pressure air controls, thermal cyclers, and genetic sequencers."
              },
              {
                title: "Supercomputing & Neural Core",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
                desc: "A massive central GPU server rack allowing cohorts to run predictive and thermodynamic models."
              },
              {
                title: "Astrophysics Observatory Tower",
                image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&q=80&w=800",
                desc: "Housing our solar filter dome and reflecting telescope to track spectrographic orbits."
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden shadow-premium glass-card border border-slate-800/80 flex flex-col h-full hover:border-cyan-500/40 hover:shadow-cyan-glow transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                      {facility.title}
                    </h4>
                    <p className="text-sm font-sans font-light text-slate-400 leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* 6. FACULTY PREVIEW */}
      <section className="py-24 bg-neutral-bg border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeader 
              badge="Expert Scientific Investigators" 
              title="Acclaimed STEM Mentors" 
              subtitle="Empowering top international researchers, molecular biologists, and physicists to direct our cohort squads."
              align="left"
              className="!mb-0"
            />
            <Link to="/faculty" className="mt-6 md:mt-0">
              <Button variant="outline" icon={<FaArrowRight />}>
                Meet All Faculty
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyData.slice(0, 3).map((teacher) => (
              <motion.div
                key={teacher.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center p-8 glass-card rounded-3xl border border-slate-800/80 relative overflow-hidden transition-all duration-300 hover:bg-slate-900/40"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-cyan-400 transition-transform duration-500 group-hover:scale-110 shadow-cyan-glow">
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-1 text-white group-hover:text-cyan-400 transition-colors">
                  {teacher.name}
                </h4>
                <span className="text-xs text-cyan-400 font-display uppercase tracking-widest font-semibold mb-3">
                  {teacher.role}
                </span>
                <p className="text-xs text-slate-400 font-sans mb-4 line-clamp-2 px-2">
                  {teacher.bio}
                </p>
                <span className="text-xs text-slate-500 font-sans border-t border-slate-800 pt-3 w-full block">
                  {teacher.qualification}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Swiper.js slider) */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow Accents */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            badge="Voices of Success Scholars" 
            title="Scientific Excellence Testimonials" 
            subtitle="Reflections from researchers, alumni, and parents regarding our advanced science ecosystems."
            className="!text-white"
          />

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className="pb-16 text-center"
          >
            {testimonials.map((testi) => (
              <SwiperSlide key={testi.id}>
                <div className="flex flex-col items-center max-w-3xl mx-auto px-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 mb-6 shadow-cyan-glow">
                    <img src={testi.avatar} alt={testi.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-lg md:text-xl font-display font-light italic leading-relaxed text-slate-300 mb-8">
                    "{testi.quote}"
                  </p>
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">{testi.name}</h4>
                    <span className="text-xs text-cyan-400 font-display uppercase tracking-widest mt-1 block font-semibold">
                      {testi.role}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>      {/* 8. EVENTS PREVIEW */}
      <section className="py-24 bg-neutral-bg border-t border-slate-900 relative bg-science-dots">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeader 
              badge="Academy Symposia" 
              title="Upcoming Research Symposia & Exhibitions" 
              subtitle="Stay briefed with upcoming molecular summits, cybersecurity hackathons, and physics colloquia."
              align="left"
              className="!mb-0"
            />
            <Link to="/events" className="mt-6 md:mt-0">
              <Button variant="outline" icon={<FaArrowRight />}>
                All Research Events
              </Button>
            </Link>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventsData.slice(0, 2).map((event) => (
              <motion.div
                key={event.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl border border-slate-800/80 hover:border-cyan-500/20 hover:shadow-cyan-glow glass-card transition-all duration-300"
              >
                <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-cyan-400 text-[10px] font-display font-bold uppercase px-3 py-1 rounded-full backdrop-blur-md border border-cyan-500/20">
                    {event.tag}
                  </span>
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-between py-2">
                  <div>
                    <span className="text-xs font-display font-semibold text-cyan-500 uppercase tracking-wider block mb-2">
                      {event.date}
                    </span>
                    <h4 className="font-display font-semibold text-lg text-white leading-tight mb-2 hover:text-cyan-500 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs font-sans font-light text-slate-400 leading-relaxed line-clamp-2">
                      {event.excerpt}
                    </p>
                  </div>
                  <Link to="/events" className="text-xs font-display font-bold text-white inline-flex items-center gap-1.5 hover:text-cyan-500 transition-colors mt-4">
                    Details <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PREMIUM CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-[#0F172A] to-[#020617] text-white relative overflow-hidden bg-science-grid-dark">
        <div className="absolute inset-0 z-0 opacity-10 bg-science-grid"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase rounded-full bg-cyan-400/10 border border-cyan-400/20 font-display shadow-cyan-glow">
              Admissions Open 2026/27
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6 leading-tight">
              Begin Your Advanced Scientific Journey. <br />
              <span className="cyan-gradient-text">Apply Today.</span>
            </h2>
            <p className="text-base md:text-lg font-sans font-light text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Unlock specialized biomedical cleanrooms, mechatronic research nets, and dedicated Ivy-League portfolio support. Inquire about entry details.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/admissions">
                <Button variant="cyan" icon={<FaArrowRight />}>
                  Start Digital Inquiry
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outlineWhite">
                  Schedule Lab Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
