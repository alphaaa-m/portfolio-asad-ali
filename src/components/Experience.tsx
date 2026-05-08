import React from "react";
import { motion } from "motion/react";
import { PERSONAL_DATA } from "../constants/data";
import { SectionHeading } from "./UI";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-medical-navy/50">
      <div className="container mx-auto">
        <SectionHeading title="Experience" subtitle="Work History" />
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-medical-cyan/50 via-medical-teal/20 to-transparent transform md:-translate-x-1/2" />
          
          <div className="flex flex-col gap-12">
            {PERSONAL_DATA.experience.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }: { exp: any, index: number, key?: React.Key }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Central Node */}
      <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full glass border-medical-cyan flex items-center justify-center transform -translate-x-[11.5px] md:-translate-x-3 z-10">
        <div className="w-2 h-2 rounded-full bg-medical-cyan animate-pulse" />
      </div>

      <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} pl-10 md:pl-0`}>
        <div className={`glass p-8 rounded-3xl border-medical-cyan/10 hover:border-medical-cyan/30 transition-all group`}>
          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="p-2 rounded-lg bg-medical-cyan/10 text-medical-cyan">
              <Briefcase size={20} />
            </span>
            <span className="text-xs font-mono text-medical-cyan uppercase tracking-wider">{exp.period}</span>
          </div>

          <h3 className="text-2xl font-bold mb-1 group-hover:text-medical-cyan transition-colors">{exp.role}</h3>
          <p className="text-medical-teal font-medium mb-4">{exp.company}</p>
          
          <p className="text-medical-white/70 mb-6 leading-relaxed">
            {exp.description}
          </p>

          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            {exp.achievements?.map((ach: string, j: number) => (
              <span key={j} className="text-[10px] px-2 py-1 rounded border border-white/5 bg-white/5 text-medical-white/40 uppercase tracking-tighter">
                {ach}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}
