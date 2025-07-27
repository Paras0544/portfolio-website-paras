import { motion } from 'framer-motion';
import { TypewriterEffect } from '../ui/TypewriterEffect';

export const HeroSection = () => {
  return (
    <section id="home" className="section-container">
      <div className="text-center space-y-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold glow-text animate-glow">
            Paras Miglani
          </h1>
          
          <div className="text-xl md:text-2xl text-accent font-light">
            <TypewriterEffect 
              text="Full Stack Web Developer & Data Science Enthusiast"
              speed={50}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="stellar-glow w-32 h-32 rounded-full animate-float" />
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: 1.2 + i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 2
              }}
              className={`absolute w-2 h-2 bg-primary/60 rounded-full animate-twinkle`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};