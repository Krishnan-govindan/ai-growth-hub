import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Heart, Users } from "lucide-react";

const ventures = [
  {
    icon: Rocket,
    name: "FullSuccess",
    period: "2025 – Present",
    description: "Architected AI-powered automation using Make.com, GPT APIs, and custom tech stacks—cutting 10–20 manual hours per week for clients.",
    highlights: [
      "Plug-and-play automation kits",
      "AI receptionists",
      "Automated sales & reporting systems for SMBs",
    ],
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Heart,
    name: "India Therapist & Indian Life Coaches",
    period: "2022 – Present",
    description: "Founded a global online therapy/coaching platform for Indian expats with culturally aligned, fully-automated mental health delivery.",
    highlights: [
      "Automated intake & CRM",
      "AI-generated content",
      "Email nurturing sequences",
    ],
    gradient: "from-accent-purple to-accent-purple/60",
  },
  {
    icon: Users,
    name: "India's First Divorce Coach",
    period: "2023 – Present",
    description: "Created India's first divorce recovery coaching programs with webinars, digital products, and automated funnels.",
    highlights: [
      "100+ clients served",
      "AI-powered nurture sequences",
      "Resilience frameworks",
    ],
    gradient: "from-primary to-accent-purple",
  },
];

export const VenturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ventures" className="py-24 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Entrepreneurial Ventures</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Building <span className="text-gradient">Impactful</span> Businesses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From AI automation for SMBs to mental health platforms, creating solutions 
            that make a real difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 glow-card flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${venture.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <venture.icon className="w-7 h-7 text-background" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {venture.name}
                  </h3>
                </div>
                
                <span className="text-xs text-primary font-medium mb-3 block">
                  {venture.period}
                </span>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {venture.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {venture.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
