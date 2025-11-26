import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Bot, 
  BarChart3, 
  Workflow, 
  Phone, 
  Settings2, 
  Puzzle 
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI-driven Automation",
    description: "Leverage Make.com, GPT APIs, Copilot, and ChatGPT API to create intelligent workflows that work around the clock.",
  },
  {
    icon: Workflow,
    title: "CRM & Sales Automation",
    description: "Plug-and-play AI kits, automated email/SMS sequences, and sales funnels that convert leads on autopilot.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description: "Enterprise-grade solutions using Qlik Sense, Tableau, Snowflake, Redshift, and AWS for data-driven decisions.",
  },
  {
    icon: Settings2,
    title: "Technical Architecture",
    description: "Design scalable systems that grow with your business—from startups to Fortune 500 enterprises.",
  },
  {
    icon: Phone,
    title: "Voice & SMS Automation",
    description: "Custom Twilio integrations and APIs for AI receptionists, appointment scheduling, and customer engagement.",
  },
  {
    icon: Puzzle,
    title: "Integration Consulting",
    description: "End-to-end solutions for SMBs, founders, and solopreneurs—streamlining operations and communication.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Expertise & Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Solutions That <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From AI automation to enterprise data analytics, I deliver end-to-end solutions 
            that transform how businesses operate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 glow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
