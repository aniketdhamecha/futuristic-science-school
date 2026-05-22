import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaAtom, FaChevronDown } from 'react-icons/fa';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import Button from '../ui/Button';

const navigationItems = [
  { type: 'single', name: 'Home', path: '/' },
  { 
    type: 'dropdown', 
    name: 'About Success', 
    items: [
      { name: 'Our Mission & Timeline', path: '/about', description: 'Vision, values and historical milestones' },
      { name: 'Protocols & Safety', path: '/protocols', description: 'Accreditation, credentials & safety standards' },
      { name: 'Campus Gallery Log', path: '/gallery', description: 'Explore our laboratories and cleanrooms' }
    ] 
  },
  { 
    type: 'dropdown', 
    name: 'Academics', 
    items: [
      { name: 'Curriculum & Tracks', path: '/academics', description: '9th-12th advanced academic pathways' },
      { name: 'Distinguished Faculty', path: '/faculty', description: 'Expert research mentors' },
      { name: 'Smart Facilities', path: '/facilities', description: 'Robotics nets and cleanrooms' },
      { name: 'Events & Symposia', path: '/events', description: 'Announcements and hackathons' }
    ] 
  },
  { 
    type: 'dropdown', 
    name: 'Residency', 
    items: [
      { name: 'Modern Hostel Life', path: '/hostel', description: 'Premium modern student residential hosting' },
      { name: 'Daily Hostel Routine', path: '/hostel#routine', description: 'Disciplined and balanced circadian study roster' },
      { name: 'Student Lifestyle', path: '/hostel#lifestyle', description: 'Community sports, dining & yoga wellness' }
    ] 
  },
  { 
    type: 'dropdown', 
    name: 'Resources', 
    items: [
      { name: 'Admissions Portal', path: '/admissions', description: 'Fee structures, checklists & forms' },
      { name: 'Connect With Us', path: '/contact', description: 'Physical address nodes and messages' },
      { name: 'Privacy Policy', path: '/privacy', description: 'Student and parent privacy rules' },
      { name: 'Terms & Conditions', path: '/terms', description: 'Operational terms and agreements' },
      { name: 'Legal Disclaimer', path: '/disclaimer', description: 'Fee updates & institutional disclaimers' }
    ] 
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const isScrolled = useNavbarScroll(40);
  const location = useLocation();

  // Close mobile drawer on route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveMobileDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isDropdownActive = (items) => {
    return items.some(item => location.pathname === item.path || (item.path.includes('#') && location.pathname === item.path.split('#')[0]));
  };

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const navListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 glass-navbar ${
          isScrolled 
            ? 'py-4 shadow-lg' 
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Brand Signature */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center glow-cyan">
              <FaAtom className="text-white text-xl animate-spin [animation-duration:12s]" />
            </div>
            <div>
              <span className="font-display font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors duration-300 uppercase">
                A Success
              </span>
              <span className="block text-[8px] text-cyan-400 font-display tracking-[0.22em] uppercase -mt-1 font-semibold">
                School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <motion.ul 
              variants={navListVariants} 
              initial="hidden" 
              animate="visible"
              className="flex items-center gap-7"
            >
              {navigationItems.map((item) => {
                if (item.type === 'single') {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.li key={item.path} variants={navItemVariants}>
                      <Link
                        to={item.path}
                        className={`relative font-sans text-[13px] font-medium tracking-wider uppercase transition-colors duration-300 py-2 hover:text-cyan-400 block ${
                          isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                        }`}
                      >
                        {item.name}
                        {isActive && (
                          <motion.span
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-cyan-glow"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                } else {
                  // Dropdown item
                  const isActive = isDropdownActive(item.items);
                  const isHovered = activeDropdown === item.name;

                  return (
                    <motion.li 
                      key={item.name} 
                      variants={navItemVariants}
                      className="relative py-2 group cursor-pointer"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div
                        className={`flex items-center gap-1.5 font-sans text-[13px] font-medium tracking-wider uppercase transition-colors duration-300 hover:text-cyan-400 ${
                          isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                        }`}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown className={`text-[9px] transition-transform duration-300 ${isHovered ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
                        {isActive && (
                          <motion.span
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-cyan-glow"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </div>

                      {/* Dropdown Menu Container */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#090D1A]/95 border border-cyan-500/15 rounded-2xl p-3 shadow-2xl backdrop-blur-xl z-50 shadow-[0_10px_40px_rgba(6,182,212,0.15)]"
                          >
                            {/* Decorative Triangle pointer */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#090D1A] border-t border-l border-cyan-500/15 rotate-45 z-0"></div>
                            
                            <div className="relative z-10 flex flex-col gap-1">
                              {item.items.map((subItem) => {
                                const isSubActive = location.pathname === subItem.path || (subItem.path.includes('#') && location.pathname === subItem.path.split('#')[0]);
                                return (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    className={`group/sub hover:bg-cyan-500/10 rounded-xl p-2.5 transition-all duration-300 block text-left ${
                                      isSubActive ? 'bg-cyan-500/5' : ''
                                    }`}
                                  >
                                    <span className={`font-display font-semibold text-[13px] block transition-colors duration-300 ${
                                      isSubActive ? 'text-cyan-400' : 'text-slate-200 group-hover/sub:text-cyan-400'
                                    }`}>
                                      {subItem.name}
                                    </span>
                                    <span className="font-sans text-[11px] text-slate-400 block mt-0.5 font-light group-hover/sub:text-slate-300 transition-colors">
                                      {subItem.description}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }
              })}
            </motion.ul>

            {/* CTA Admission Button */}
            <div className="pl-4">
              <Link to="/admissions">
                <Button variant="cyan" className="!px-6 !py-2.5 !text-xs tracking-widest">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none hover:text-cyan-400 transition-colors duration-300 z-50 relative"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-out Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[310px] sm:w-[360px] max-w-[85vw] bg-[#090D1A]/98 border-l border-cyan-500/10 backdrop-blur-xl z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              {/* Drawer Top Branding */}
              <div className="flex flex-col gap-6 mt-6 overflow-y-auto pr-1 flex-grow custom-scrollbar">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 border-b border-slate-900 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center glow-cyan">
                    <FaAtom className="text-white text-xl animate-spin [animation-duration:10s]" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-lg tracking-wider text-white uppercase block">
                      A Success
                    </span>
                    <span className="block text-[8px] text-cyan-400 font-display tracking-[0.2em] uppercase font-semibold -mt-1">
                      School
                    </span>
                  </div>
                </Link>

                {/* Collapsible Accordion Mappings */}
                <ul className="flex flex-col gap-4 text-left">
                  {navigationItems.map((item) => {
                    if (item.type === 'single') {
                      const isActive = location.pathname === item.path;
                      return (
                        <li key={item.path} className="border-b border-slate-900/50 pb-2">
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm font-display font-bold tracking-wider uppercase transition-colors duration-300 block py-1.5 ${
                              isActive ? 'text-cyan-400' : 'text-slate-200 hover:text-cyan-400'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    } else {
                      // Dropdown Accordion
                      const isActive = isDropdownActive(item.items);
                      const isExpanded = activeMobileDropdown === item.name;

                      return (
                        <li key={item.name} className="border-b border-slate-900/50 pb-2">
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className={`w-full flex items-center justify-between font-display font-bold tracking-wider uppercase py-1.5 transition-colors text-left ${
                              isExpanded || isActive ? 'text-cyan-400' : 'text-slate-200'
                            }`}
                          >
                            <span className="text-sm">{item.name}</span>
                            <FaChevronDown className={`text-[9px] transition-transform duration-300 ${isExpanded ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} />
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <ul className="flex flex-col gap-2.5 pl-3.5 mt-2 border-l border-cyan-500/10">
                                  {item.items.map((subItem) => {
                                    const isSubActive = location.pathname === subItem.path || (subItem.path.includes('#') && location.pathname === subItem.path.split('#')[0]);
                                    return (
                                      <li key={subItem.path}>
                                        <Link
                                          to={subItem.path}
                                          onClick={() => setIsOpen(false)}
                                          className={`flex flex-col text-left py-1 group/item transition-colors ${
                                            isSubActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'
                                          }`}
                                        >
                                          <span className="text-xs font-semibold font-display tracking-wide">{subItem.name}</span>
                                          <span className="text-[10px] text-slate-500 font-sans font-light mt-0.5 leading-relaxed group-hover/item:text-slate-400">
                                            {subItem.description}
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="border-t border-slate-900 pt-4 flex flex-col gap-4 mt-auto">
                <Link to="/admissions" onClick={() => setIsOpen(false)}>
                  <Button variant="cyan" className="w-full !py-3 tracking-widest !text-xs font-semibold">
                    Apply Now
                  </Button>
                </Link>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-sans px-1">
                  <span>Inquiries: admissions@asuccess.edu</span>
                  <span>v2.4.0</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
