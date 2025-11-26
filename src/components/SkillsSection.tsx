import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "BI & Analytics",
    skills: ["Qlik Sense", "Tableau", "Qlikview", "SAP BO"],
  },
  {
    title: "Data Infrastructure",
    skills: ["Snowflake", "Redshift", "AWS", "PostgreSQL"],
  },
  {
    title: "AI & Automation",
    skills: ["Make.com", "ChatGPT API", "Copilot", "GPT APIs"],
  },
  {
    title: "CRM & Marketing",
    skills: ["Lead Automation", "Email/SMS", "Voice AI", "Twilio"],
  },
  {
    title: "Architecture",
    skills: ["System Design", "Scalability", "Integration", "APIs"],
  },
  {
    title: "Leadership",
    skills: ["Team Building", "Strategy", "Consulting", "Mentoring"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Technical Toolbox</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 15+ years of engineering excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-5 rounded-2xl glass hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-sm font-display font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
