import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, TrendingUp, Cog, Target } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "15+ Years Trusted Expertise",
    description: "Proven track record with enterprise and startup clients across industries.",
  },
  {
    icon: TrendingUp,
    title: "Systems That Scale",
    description: "Architecting solutions that eliminate manual effort, save money, and grow with your business.",
  },
  {
    icon: Cog,
    title: "End-to-End Solutions",
    description: "From technical strategy to hands-on build and ongoing optimization—full lifecycle support.",
  },
  {
    icon: Target,
    title: "Data-Driven ROI",
    description: "Automation-first mindset focused on measurable results and tangible business outcomes.",
  },
];

export const WhyWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">The Difference</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Work <span className="text-gradient">With Me?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
