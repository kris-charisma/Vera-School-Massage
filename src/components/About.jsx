import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star, Shield, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-teal-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 border-2 border-gold-400 translate-x-4 translate-y-4 rounded-sm"></div>
              <img
                src="/About.jpg"
                alt="Massage Therapy Training"
                className="relative z-10 w-full h-auto rounded-sm shadow-xl"
              />
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">About Vera School</h2>
              <div className="w-20 h-1 bg-gold-400 mb-8"></div>
              
              <div className="space-y-6 text-neutral-300 font-sans leading-relaxed text-lg">
                <p>
                  Vera School of Massage Therapy & Nails Care is a premier training institution in Rwanda, offering a comprehensive short course curriculum designed to launch your career in the luxury wellness sector. We are dedicated to excellence, precision, and the art of healing.
                </p>
                <p>
                  In our modern society, workplace stress and lifestyle pressures have created an unprecedented need for qualified wellness professionals. However, the industry in Rwanda has historically faced challenges with inadequate training and a scarcity of formal educational establishments.
                </p>
                <p>
                  Vera School stands as the solution to this gap. We provide specialized training that equips students with world-class skills, ensuring they are ready to meet the demands of the growing wellness market.
                </p>
                <p>
                  Beyond foundation training, we are committed to elevating the industry standards by offering refresher courses for practicing professionals, facilitating skill upgrading, and ensuring compliance with international best practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-teal-600"
          >
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <Target className="text-teal-600" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-teal-900 mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              To train professional cadres who possess not only technical skills but also the theoretical knowledge and ethical grounding required by top-tier spas and hotels, bridging the gap in the wellness industry.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-teal-800 p-8 rounded-lg shadow-lg border-t-4 border-gold-400"
          >
            <div className="w-14 h-14 bg-teal-900 rounded-full flex items-center justify-center mb-6 border border-gold-500/30">
              <Eye className="text-gold-400" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Our Vision</h3>
            <p className="text-neutral-300 leading-relaxed">
              To be the premier institution in Rwanda for wellness education, setting the benchmark for excellence and empowering a new generation of skilled professionals to transform the industry.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-teal-600"
          >
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <Star className="text-teal-600" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-teal-900 mb-4">Core Values</h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-center gap-3">
                <Shield size={20} className="text-gold-500" />
                <span className="font-medium">Professional Excellence</span>
              </li>
              <li className="flex items-center gap-3">
                <Heart size={20} className="text-gold-500" />
                <span className="font-medium">Ethical Integrity</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap size={20} className="text-gold-500" />
                <span className="font-medium">Innovation & Creativity</span>
              </li>
              <li className="flex items-center gap-3">
                <Target size={20} className="text-gold-500" />
                <span className="font-medium">Student Empowerment</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
