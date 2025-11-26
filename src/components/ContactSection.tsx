import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-medium mb-4 block">Let's Connect</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Automate, Scale,</span><br />
            and Future-Proof Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Connect for a free strategy call—or message me to discuss your 
            technical or automation goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="https://calendly.com/krishnangovindan/ai" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:krishnan.govindan1@gmail.com">
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
            </Button>
          </div>

          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl glass"
          >
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Prefer a quick message?</span>
            <a 
              href="https://linkedin.com/in/krishnan-govindan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Connect on LinkedIn →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
