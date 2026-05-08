import React from "react";
import { motion } from "motion/react";
import { PERSONAL_DATA } from "../constants/data";
import { SectionHeading } from "../components/UI";
import { Award, Target, Users, Zap, Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <SectionHeading title="About Asad Ali" subtitle="About Me" />
        
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-12 rounded-[3rem] border-medical-cyan/20 relative">
               <Quote className="absolute -top-6 -left-6 text-medical-cyan opacity-20" size={80} />
               <p className="text-2xl leading-relaxed text-medical-white/90 italic font-light">
                 "{PERSONAL_DATA.about}"
               </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              {PERSONAL_DATA.stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-5xl font-bold text-medical-cyan tracking-tighter mb-1">{stat.value}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-medical-teal/60 font-mono">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            <FeatureCard 
              icon={<Award className="text-medical-cyan" />}
              title="Excellence"
              description="Consistent high-performance record in top-tier pharmaceutical organizations."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Target className="text-medical-teal" />}
              title="Strategy"
              description="Execution of complex market penetration strategies in competitive territories."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Users className="text-medical-cyan" />}
              title="Relations"
              description="Deep-rooted professional networks within the healthcare community of Punjab."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Zap className="text-medical-teal" />}
              title="Operations"
              description="Mastery of pharmaceutical supply chain and field force management."
              delay={0.4}
            />
          </div>
        </div>

        {/* Education Section in About */}
        <div className="max-w-4xl mx-auto">
           <SectionHeading title="Educational Foundation" subtitle="Academics" />
           <div className="space-y-6">
              {PERSONAL_DATA.education.map((edu, i) => (
                <div key={i} className="glass p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between border-white/5 hover:border-medical-cyan/20 transition-all">
                   <div>
                     <h3 className="text-xl font-bold">{edu.degree}</h3>
                     <p className="text-medical-teal">{edu.institution}</p>
                   </div>
                   <span className="text-medical-white/40 font-mono mt-2 md:mt-0">{edu.year}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="glass rounded-3xl p-8 hover:bg-white/10 transition-all border-medical-cyan/10"
    >
      <div className="mb-6 p-4 rounded-xl bg-medical-cyan/5 w-fit group-hover:bg-medical-cyan transition-colors">
        {React.cloneElement(icon as React.ReactElement, { size: 28 })}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-medical-white/50 leading-relaxed">{description}</p>
    </motion.div>
  );
}
