import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function ParticleBackground() {
  const [dots, setDots] = useState<{ x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,203,0.05),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(79,209,197,0.05),transparent_40%)]" />
      
      {/* Floating Particles */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-medical-cyan/20"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
    </div>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="h-[1px] w-12 bg-gradient-to-r from-medical-cyan to-transparent" />
        <span className="text-medical-cyan font-mono text-xs uppercase tracking-[0.3em] font-medium">{subtitle || "Professional Profile"}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        {title}<span className="text-medical-cyan">.</span>
      </motion.h2>
    </div>
  );
}
