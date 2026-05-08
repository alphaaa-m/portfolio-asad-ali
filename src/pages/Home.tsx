import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Activity, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PERSONAL_DATA } from "../constants/data";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    let currentTagline = PERSONAL_DATA.taglines[taglineIndex];
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(currentTagline.slice(0, i));
      i++;
      if (i > currentTagline.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTaglineIndex((prev) => (prev + 1) % PERSONAL_DATA.taglines.length);
        }, 2500);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [taglineIndex]);

  return (
    <div className="relative min-h-screen">
      {/* Background HUD Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-10 h-[1px] w-32 bg-medical-cyan/50" />
        <div className="absolute top-1/4 left-10 w-[1px] h-32 bg-medical-cyan/50" />
        <div className="absolute bottom-1/4 right-10 h-[1px] w-32 bg-medical-cyan/50 text-right pr-4 text-[10px] font-mono whitespace-nowrap"></div>
        <div className="absolute bottom-1/4 right-10 w-[1px] h-32 bg-medical-cyan/50" />
      </div>

      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-10 h-[1px] bg-medical-cyan" />
              <span className="text-medical-cyan font-mono text-[10px] uppercase tracking-[0.4em] font-semibold">Sales & Marketing Expert</span>
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter leading-none">
              <span className="block text-white opacity-40">ASAD ALI</span>
              <span className="text-medical-cyan text-glow relative block mt-2">
                ASHRAF
              </span>
            </h1>

            <div className="min-h-[120px] md:min-h-[80px] lg:min-h-[40px] mb-8">
              <p className="text-xl md:text-2xl text-medical-teal font-display font-light">
                {displayText}<span className="inline-block w-1 h-6 bg-medical-cyan ml-1 animate-pulse" />
              </p>
            </div>

            <p className="text-xl text-medical-white/50 mb-12 max-w-xl leading-relaxed italic border-l-2 border-medical-cyan/30 pl-6">
              "Deploying precise market solutions across the pharmaceutical landscape through calculated analysis and strategic relationship management."
            </p>

            <div className="flex flex-wrap gap-6">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 194, 203, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-medical-cyan text-medical-navy font-bold rounded-2xl flex items-center gap-3 transition-shadow"
                >
                  View Profile <ArrowRight size={20} />
                </motion.button>
              </Link>
              <motion.a
                href="/CV_ASAD_ALI.pdf"
                download="CV_ASAD_ALI.pdf"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass text-medical-white font-bold rounded-2xl border border-white/10 flex items-center gap-2"
              >
                Download CV <Download size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Picture Placeholder Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full mt-12 lg:mt-0 order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[600px] aspect-[4/3] mx-auto group">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 border border-medical-cyan/10 rounded-[3rem] -m-4 md:-m-8 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-0 border border-medical-teal/5 rounded-[3rem] -m-6 md:-m-12 animate-[spin_60s_linear_infinite_reverse]" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden border-2 border-medical-cyan/50 flex items-center justify-center p-4 bg-transparent shadow-[0_0_30px_rgba(0,194,203,0.3)]">
                <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden overflow-hidden ring-1 ring-white/10">
                   {/* Professional Avatar */}
                   <div className="absolute inset-0 flex items-center justify-center transition-all duration-700">
                      <img src="/profile.png" alt="Asad Ali Ashraf" className="w-full h-full object-cover" />
                   </div>

                   {/* Scanning Glow Line */}
                   <motion.div 
                     animate={{ top: ["0%", "100%", "0%"] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                     className="absolute left-0 right-0 h-[1px] bg-medical-cyan/40 shadow-[0_0_15px_rgba(0,194,203,0.5)] z-20 pointer-events-none"
                   />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Footer Info */}
    </div>
  );
}
