import React from "react";
import { motion } from "motion/react";
import { PERSONAL_DATA } from "../constants/data";
import { SectionHeading } from "./UI";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <SectionHeading title="Connect with Excellence" subtitle="Get in Touch" />
        
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 w-full"
          >
            <p className="text-xl text-medical-white/70 leading-relaxed">
              I am always open to discussing new opportunities, strategic partnerships, and healthcare innovations.
            </p>
            
            <div className="flex flex-col gap-4 w-full">
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
              <ContactInfoItem 
                icon={<Linkedin size={20} />} 
                label="Professional Network" 
                value="Asad Ali Ashraf" 
                href="https://www.linkedin.com/in/asad-ali-7298912a1/"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  return (
    <a href={href} className={`flex items-center gap-6 p-6 rounded-2xl glass border-medical-cyan/10 group-hover:border-medical-cyan/40 transition-all ${href ? 'cursor-pointer hover:bg-white/5' : 'cursor-default'}`}>
      <div className="p-4 rounded-xl glass text-medical-cyan">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-xs font-mono text-medical-cyan/60 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-xl font-medium group-hover:text-medical-cyan transition-colors">{value}</p>
      </div>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 px-6 relative z-10 bg-medical-navy">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <Link to="/" className="flex items-center justify-center md:justify-start gap-4">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
            ASAD<span className="text-medical-cyan">ALI</span>
          </h2>
        </Link>
        <p className="text-xs font-mono text-medical-white/40 uppercase tracking-tighter md:mt-0">
          © 2026 Asad Ali Ashraf | All Rights Reserved
        </p>

        <div className="flex gap-4">
          <SocialLink icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/asad-ali-7298912a1/" />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href?: string }) {
  return (
    <motion.a
      whileHover={{ y: -5, color: "#00C2CB" }}
      className="p-3 glass rounded-full text-white/60 transition-colors cursor-pointer"
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
      <nav className="fixed top-0 left-0 right-0 z-[60] px-4 h-20 md:h-24 border-b border-white/5 glass-dark pointer-events-auto flex items-center">
         <div className="container mx-auto flex justify-between items-center w-full">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-3 group relative">
                 <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" className="w-[250%] h-[250%] max-w-none object-contain group-hover:scale-110 transition-transform duration-300" />
                 </div>
                 <span className="font-display font-bold text-xl md:text-2xl tracking-tighter uppercase relative z-10">ASAD<span className="text-medical-cyan">ALI</span></span>
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

