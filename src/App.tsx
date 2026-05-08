/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components/Contact";
import { ParticleBackground } from "./components/UI";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-medical-cyan z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="w-full">
          <Routes location={location}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><SkillsPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative selection:bg-medical-cyan/30 overflow-x-hidden min-h-screen">
        <Navbar />
        <ParticleBackground />
        <ScrollToTop />
        
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

