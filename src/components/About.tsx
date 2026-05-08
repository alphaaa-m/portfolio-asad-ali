import React from "react";
import { motion } from "motion/react";
import { PERSONAL_DATA } from "../constants/data";
import { SectionHeading } from "./UI";
import { Award, Target, Users, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <SectionHeading title="Systematic Approach" subtitle="About Me" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 border-medical-cyan/20 relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} className="text-medical-cyan" />
            </div>
            
            <p className="text-xl leading-relaxed text-medical-white/90 mb-8">
              {PERSONAL_DATA.about}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {PERSONAL_DATA.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-medical-cyan tracking-tighter">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-medical-teal/60 font-mono">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Award className="text-medical-cyan" />}
              title="Recognized Excellence"
              description="Multiple 'Top Performer' accolades across 15+ years in various pharma giants."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Target className="text-medical-teal" />}
              title="Growth Centric"
              description="Focused on market expansion and therapeutic category leadership."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Users className="text-medical-cyan" />}
              title="Relationship Driven"
              description="Building trust with top-tier healthcare professionals through integrity."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Zap className="text-medical-teal" />}
              title="Field Expertise"
              description="Hands-on experience in territory management and sales operations."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors border-medical-cyan/10"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-medical-white/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}
