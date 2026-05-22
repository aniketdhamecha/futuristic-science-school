import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ChatBot from '../components/chatbot/ChatBot';

const MainLayout = () => {
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();

  // Scroll detection for "Back to Top" button
  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-neutralBg selection:bg-[#D4AF37]/30 selection:text-primary">
      {/* Premium Navbar */}
      <Navbar />

      {/* Main Content Area with Routing transitions */}
      <main className="flex-grow pt-[88px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Global AI Chatbot Assistant */}
      <ChatBot />

      {/* Animated Floating Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-28 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-white flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 glow-gold hover:opacity-90 transition-all focus:outline-none cursor-pointer"
            aria-label="Scroll to Top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
