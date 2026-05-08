import React from "react";
import { motion } from "motion/react";
import { PERSONAL_DATA } from "../constants/data";
import { SectionHeading } from "./UI";
import * as LucideIcons from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto">
        <SectionHeading title="Skills & Expertise" subtitle="Capability" />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Skills */}
          <div className="glass p-10 rounded-3xl border-medical-cyan/10">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <LucideIcons.ShieldCheck className="text-medical-cyan" size={20} />
              Professional Proficiency
            </h3>
            <div className="space-y-8">
              {PERSONAL_DATA.skills.professional.map((skill, i) => (
                <SkillBar key={i} skill={skill} index={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Soft Skills Chips */}
            <div className="glass p-10 rounded-3xl border-medical-teal/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <LucideIcons.Cpu className="text-medical-teal" size={20} />
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_DATA.skills.soft.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0,194,203,0.15)" }}
                    className="px-4 py-2 glass rounded-lg text-sm font-medium border-medical-cyan/20 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Technical Skills List */}
            <div className="glass p-10 rounded-3xl border-white/5 flex-grow">
               <h3 className="text-xl font-bold mb-6">Software Proficiency</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {PERSONAL_DATA.skills.technical.map((tool, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="font-mono text-sm tracking-tight">{tool.name}</span>
                      <span className="text-xs text-medical-cyan font-bold">{tool.level}%</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: { name: string, level: number }, index: number, key?: React.Key }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-medical-white/80">{skill.name}</span>
        <span className="text-sm font-mono text-medical-cyan">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "circOut" }}
          className="h-full bg-gradient-to-r from-medical-cyan to-medical-teal border-glow"
        />
      </div>
    </div>
  );
}

export function Interests() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
         <SectionHeading title="Interests & Passions" subtitle="Life Outside Work" />
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
           {PERSONAL_DATA.interests.map((interest, i) => {
             const IconComponent = (LucideIcons as any)[interest.icon];
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 whileHover={{ y: -10 }}
                 className="flex flex-col items-center gap-4 p-8 glass rounded-3xl border-medical-cyan/10 group cursor-default"
               >
                 <div className="p-4 rounded-2xl bg-medical-cyan/5 text-medical-cyan group-hover:bg-medical-cyan group-hover:text-medical-navy transition-all duration-300">
                    <IconComponent size={32} />
                 </div>
                 <span className="text-sm font-bold text-center tracking-tight">{interest.name}</span>
               </motion.div>
             );
           })}
         </div>
      </div>
    </section>
  );
}
