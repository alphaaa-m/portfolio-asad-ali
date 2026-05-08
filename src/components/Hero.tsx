import { motion } from "motion/react";
import { Download, Mail, ChevronRight } from "lucide-react";
import { PERSONAL_DATA } from "../constants/data";
import { useEffect, useState } from "react";

export function Hero() {
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
        }, 2000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [taglineIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 border-medical-cyan/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-cyan"></span>
            </span>
            <span className="text-xs font-mono text-medical-cyan uppercase tracking-wider">Active in Market Operations</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block opacity-40">ASAD ALI</span>
            <span className="text-medical-cyan text-glow block">ASHRAF</span>
          </h1>

          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-medical-teal font-light">
              {displayText}<span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-medical-white/70 text-lg mb-10 max-w-lg leading-relaxed">
            Leading excellence in pharmaceutical sales with over 15 years of dedication to healthcare partnerships and market expansion.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-medical-cyan text-medical-navy font-bold rounded-lg flex items-center gap-2 border-glow transition-all"
            >
              View Experience <ChevronRight size={18} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-medical-white font-bold rounded-lg flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative perspective-1000 hidden lg:block"
        >
          <div className="relative w-[600px] h-[400px] mx-auto">
            {/* Geometric Pharma Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-medical-cyan/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-medical-teal/10 rounded-full"
            />
            
            {/* Central Profile "Container" */}
            <div className="absolute inset-20 glass rounded-3xl overflow-hidden border-medical-cyan/30 flex items-center justify-center group bg-medical-navy">
               <img src="/profile.png" alt="Profile Picture" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
               
               {/* Overlay Data Streams */}
               <div className="absolute inset-0 pointer-events-none opacity-30">
                  <div className="absolute top-4 left-4 h-[1px] w-12 bg-medical-cyan" />
                  <div className="absolute top-4 left-4 w-[1px] h-12 bg-medical-cyan" />
                  <div className="absolute bottom-4 right-4 h-[1px] w-12 bg-medical-cyan" />
                  <div className="absolute bottom-4 right-4 w-[1px] h-12 bg-medical-cyan" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
