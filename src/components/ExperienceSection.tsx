import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Director of Analytics",
    company: "iSpot.tv",
    location: "Seattle, WA",
    period: "05/2018 – Present",
    highlights: [
      "Leading real-time TV ad analytics platform engineering initiatives",
      "Built self-service reporting platform and BI team from scratch (Qlik Sense)",
      "Designed standardized, automated reports for CMOs of Fortune 500 brands",
    ],
  },
  {
    title: "Senior BI Engineer",
    company: "Expedia Group",
    location: "Bellevue, WA",
    period: "10/2016 – 04/2018",
    highlights: [
      "Architected and managed BI platforms (Tableau, Qlik Sense, Qlikview, SAP Business Objects)",
      "Delivered enterprise dashboards for multiple Expedia brands",
    ],
  },
  {
    title: "Senior BI Engineer",
    company: "3M",
    location: "Austin, TX",
    period: "10/2015 – 09/2016",
    highlights: [
      "Developed complex SAP BO Universes, reports, and Qlikview dashboards",
      "Led data quality initiatives and report optimization",
    ],
  },
  {
    title: "Senior BI Developer",
    company: "Cognizant Technology Solutions",
    location: "Chennai, India",
    period: "07/2010 – 09/2015",
    highlights: [
      "Led a team of 10 engineers—financial reporting, HR, and cross-departmental dashboarding",
      "Managed end-to-end life cycle of BI platforms and migrations",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Career Journey</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building data platforms and leading engineering teams at some of the world's 
            most innovative companies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>

              <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-muted-foreground">• {exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
