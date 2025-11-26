import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "krishnan.govindan1@gmail.com", href: "mailto:krishnan.govindan1@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 737-529-5585", href: "tel:+17375295585" },
    { icon: MapPin, label: "Location", value: "Seattle, WA", href: null },
    { icon: Linkedin, label: "LinkedIn", value: "Connect", href: "https://linkedin.com/in/krishnan-govindan" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Engineering Leader & <span className="text-gradient">AI Pioneer</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Krishnan Govindan, an engineering leader with 15+ years experience building 
                scalable data platforms, business intelligence solutions, and automation systems 
                for global enterprises and startups.
              </p>
              <p>
                As Founder & CEO of <span className="text-foreground font-medium">FullSuccess</span> and{" "}
                <span className="text-foreground font-medium">India Therapist</span>, I specialize in 
                designing and deploying AI-driven workflows, CRM automation, and technical solutions 
                that help businesses eliminate manual work, improve reporting, and scale efficiently.
              </p>
              <p>
                Global clients trust me to architect seamless, automated solutions—from marketing 
                and sales systems to data analytics platforms—that consistently deliver measurable results.
              </p>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block p-5 rounded-xl glass hover:border-primary/50 transition-all duration-300 glow-card"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-foreground font-medium text-sm truncate">{item.value}</div>
                  </a>
                ) : (
                  <div className="p-5 rounded-xl glass">
                    <item.icon className="w-6 h-6 text-primary mb-3" />
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-foreground font-medium text-sm">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">Servicing clients worldwide</div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
