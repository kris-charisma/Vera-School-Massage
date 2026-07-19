import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
          alt="Spa Wellness Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-transparent to-teal-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        {/* Large Logo in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-10"
        >
           <img 
            src="/logo.png" 
            alt="Vera School" 
            className="h-32 md:h-48 lg:h-56 object-contain drop-shadow-lg mx-auto"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden text-gold-400 font-serif text-5xl md:text-7xl font-bold tracking-widest border-2 border-gold-400 p-4 rounded-lg">
            VERA
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl"
        >
          Your Pathway to a Career in <span className="text-gold-400 italic">Wellness</span> and <span className="text-gold-400 italic">Beauty</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-lg md:text-xl max-w-2xl mb-10 font-medium drop-shadow-md bg-black/20 p-4 rounded-lg backdrop-blur-sm"
        >
          We specialize in comprehensive, hands-on training for professional massage therapy and expert nail care. Gain the skills, certification, and confidence to succeed in the luxury spa industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold tracking-wider uppercase rounded-sm transition-all shadow-lg hover:shadow-gold-500/20"
          >
            Enroll Now
          </a>
          <a
            href="#courses"
            className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-teal-900 font-sans font-bold tracking-wider uppercase rounded-sm transition-all"
          >
            View Courses
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
