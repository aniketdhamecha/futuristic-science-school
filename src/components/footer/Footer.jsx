import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAtom, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPaperPlane } from 'react-icons/fa';

const linksAcademic = [
  { name: 'Mission & Milestones', path: '/about' },
  { name: 'Curriculum & Tracks', path: '/academics' },
  { name: 'Expert Faculty Roster', path: '/faculty' },
  { name: 'Smart Classrooms & Labs', path: '/facilities' },
  { name: 'Symposia & News', path: '/events' }
];

const linksResidential = [
  { name: 'Modern Hostel Life', path: '/hostel' },
  { name: 'Structured Routine', path: '/hostel#routine' },
  { name: 'Student Lifestyle', path: '/hostel#lifestyle' },
  { name: 'Admissions Portal', path: '/admissions' },
  { name: 'Campus Gallery Log', path: '/gallery' }
];

const linksSafety = [
  { name: 'Board Accreditation', path: '/protocols' },
  { name: 'Infrastructure Specs', path: '/protocols' },
  { name: 'Safety & Security Shield', path: '/protocols' },
  { name: 'Circadian Sync Clocks', path: '/protocols' },
  { name: 'Direct Inquiries', path: '/contact' }
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-slate-900 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Light Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
          
          {/* Column 1: School Branding */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center glow-cyan">
                <FaAtom className="text-white text-2xl animate-spin [animation-duration:15s]" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-wider text-white uppercase">
                  A Success
                </span>
                <span className="block text-[8px] text-cyan-400 font-display tracking-[0.22em] uppercase -mt-0.5 font-semibold">
                  School
                </span>
              </div>
            </Link>
            <p className="text-xs md:text-sm font-sans font-light leading-relaxed text-slate-500">
              Nurturing advanced scientific minds, quantum researchers, and biomedical pioneers. Empowering exceptional student cohorts to engineer the future.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-950 transition-all duration-300">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-950 transition-all duration-300">
                <FaLinkedin className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-950 transition-all duration-300">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-950 transition-all duration-300">
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Academic Hub */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-display font-semibold text-white tracking-widest text-xs uppercase mb-6 border-l-2 border-cyan-500/40 pl-2">
              Academic Hub
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs md:text-sm">
              {linksAcademic.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400 scale-0 group-hover:scale-100 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Residential Campus */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white tracking-widest text-xs uppercase mb-6 border-l-2 border-cyan-500/40 pl-2">
              Residential
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs md:text-sm">
              {linksResidential.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400 scale-0 group-hover:scale-100 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Safety & Protocols */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white tracking-widest text-xs uppercase mb-6 border-l-2 border-cyan-500/40 pl-2">
              Safety & Trust
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs md:text-sm">
              {linksSafety.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400 scale-0 group-hover:scale-100 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter & Inquiry */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-display font-semibold text-white tracking-widest text-xs uppercase mb-1 border-l-2 border-cyan-500/40 pl-2">
              Disclosures
            </h4>
            <p className="text-xs md:text-sm font-sans font-light text-slate-500 leading-relaxed">
              Subscribe to obtain scientific disclosures, research papers, and robotics symposium invites.
            </p>
            <form onSubmit={handleSubscribe} className="relative w-full max-w-md flex items-center">
              <input
                type="email"
                placeholder="Enter your academic email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-5 pr-14 py-3 rounded-full bg-slate-950/80 border border-slate-900 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 font-sans"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white hover:opacity-90 active:scale-95 transition-all duration-300 glow-cyan"
              >
                <FaPaperPlane className="text-[10px]" />
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] text-cyan-400 font-sans font-medium animate-pulse">
                Subscription successful. Welcome to our elite scientific list!
              </span>
            )}
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 text-xs text-slate-600 font-sans tracking-wide">
          <p>&copy; {new Date().getFullYear()} A Success School. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors duration-300">Terms & Conditions</Link>
            <Link to="/disclaimer" className="hover:text-slate-400 transition-colors duration-300">Disclaimer</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

