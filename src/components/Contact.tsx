import React from "react";
import { motion } from "motion/react";
import { PERSONAL_DATA } from "../constants/data";
import { SectionHeading } from "./UI";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <SectionHeading title="Connect with Excellence" subtitle="Get in Touch" />
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <p className="text-xl text-medical-white/70 max-w-md leading-relaxed">
              I am always open to discussing new opportunities, strategic partnerships, and healthcare innovations.
            </p>
            
            <div className="space-y-6">
              <ContactInfoItem 
                icon={<Mail size={20} />} 
                label="Digital Communication" 
                value={PERSONAL_DATA.email} 
                href={`mailto:${PERSONAL_DATA.email}`}
              />
              <ContactInfoItem 
                icon={<Phone size={20} />} 
                label="Direct Transmission" 
                value={PERSONAL_DATA.phone} 
                href={`tel:${PERSONAL_DATA.phone}`}
              />
              <ContactInfoItem 
                icon={<MapPin size={20} />} 
                label="Base Operations" 
                value={PERSONAL_DATA.location} 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border-medical-cyan/20"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <FloatingInput label="Your Name" type="text" />
                <FloatingInput label="Email Address" type="email" />
              </div>
              <FloatingInput label="Subject" type="text" />
              <div className="relative pt-6">
                <textarea 
                  required
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-medical-cyan outline-none transition-colors peer min-h-[120px] resize-none"
                />
                <label className="absolute left-0 top-0 text-xs font-mono text-medical-cyan uppercase tracking-widest pointer-events-none transform -translate-y-4 transition-all peer-placeholder-shown:translate-y-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40">
                  Message Content
                </label>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-medical-cyan text-medical-navy font-bold rounded-xl flex items-center justify-center gap-3 border-glow"
              >
                Initiate Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  return (
    <a href={href} className={`flex items-center gap-4 group ${href ? 'cursor-pointer' : 'cursor-default'}`}>
      <div className="p-3 rounded-xl glass border-medical-cyan/10 group-hover:border-medical-cyan/40 transition-all text-medical-cyan">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-mono text-medical-cyan/60 uppercase tracking-widest">{label}</p>
        <p className="text-lg font-medium group-hover:text-medical-cyan transition-colors">{value}</p>
      </div>
    </a>
  );
}

function FloatingInput({ label, type }: { label: string, type: string }) {
  return (
    <div className="relative pt-6">
      <input 
        required
        type={type}
        placeholder=" "
        className="w-full bg-transparent border-b border-white/20 py-2 focus:border-medical-cyan outline-none transition-colors peer"
      />
      <label className="absolute left-0 top-0 text-xs font-mono text-medical-cyan uppercase tracking-widest pointer-events-none transform -translate-y-4 transition-all peer-placeholder-shown:translate-y-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40">
        {label}
      </label>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 px-6 relative z-10 bg-medical-navy">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <Link to="/" className="flex items-center justify-center md:justify-start gap-4">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
            ASAD<span className="text-medical-cyan">ALI</span>
          </h2>
        </Link>
        <p className="text-xs font-mono text-medical-white/40 uppercase tracking-tighter md:mt-0">
          © 2026 Asad Ali Ashraf | All Rights Reserved
        </p>

        <div className="flex gap-4">
          <SocialLink icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/asad-ali-7298912a1/" />
          <SocialLink icon={<Twitter size={20} />} href="#" />
          <SocialLink icon={<Github size={20} />} href="#" />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href?: string }) {
  return (
    <motion.a
      whileHover={{ y: -5, color: "#00C2CB" }}
      className="p-3 glass rounded-full text-white/60 transition-colors"
      href={href || "#"}
      target={href && href !== "#" ? "_blank" : undefined}
      rel={href && href !== "#" ? "noopener noreferrer" : undefined}
    >
      {icon}
    </motion.a>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] px-4 py-6 md:px-8 border-b border-white/5 glass-dark pointer-events-auto">
         <div className="container mx-auto flex justify-between items-center">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-3 group">
                 <img src="/logo.png" alt="Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain group-hover:scale-105 transition-transform duration-300" />
                 <span className="font-display font-bold text-xl md:text-2xl tracking-tighter uppercase">ASAD<span className="text-medical-cyan">ALI</span></span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name} 
                  to={item.path}
                  className={({ isActive }) => 
                    `text-xs uppercase tracking-[0.2em] font-mono transition-all hover:text-medical-cyan ${
                      isActive ? 'text-medical-cyan' : 'text-medical-white/60'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-3 sm:p-4 rounded-full glass border-medical-cyan/20 z-[70] flex flex-col justify-center items-center w-12 h-12 gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
            >
               <span className={`block w-5 h-0.5 bg-medical-cyan transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
               <span className={`block w-5 h-0.5 bg-medical-cyan transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
               <span className={`block w-5 h-0.5 bg-medical-cyan transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </motion.button>
         </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-medical-navy/98 backdrop-blur-2xl z-[50] lg:hidden transition-all duration-300 pointer-events-auto ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-2xl uppercase tracking-[0.2em] font-mono transition-all hover:text-medical-cyan ${
                    isActive ? 'text-medical-cyan font-bold' : 'text-medical-white/60'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
         </div>
      </div>
    </>
  );
}

