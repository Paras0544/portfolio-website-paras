import { motion } from 'framer-motion';
import { TypewriterEffect } from '../ui/TypewriterEffect';

export const HeroSection = () => {
  return (
    <section id="home" className="section-container">
      <div className="text-center space-y-8 z-10 relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold sharp-text tracking-wide leading-tight">
            Paras Miglani
          </h1>
          
          <div className="text-lg md:text-xl font-inter font-light text-muted-foreground">
            <TypewriterEffect 
              text="Full Stack Web Developer & Data Science Enthusiast"
              speed={50}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8"
        >
          <div className="w-24 h-1 professional-gradient mx-auto rounded" />
        </motion.div>
      </div>
    </section>
  );
};