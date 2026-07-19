import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Star, MapPin, RefreshCw } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center text-center p-6 bg-teal-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="w-16 h-16 rounded-full bg-teal-900 flex items-center justify-center mb-6 text-gold-400">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
    <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "A well-structured syllabus covering theory and practicals to ensure complete mastery."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from seasoned professionals with years of experience in the wellness industry."
    },
    {
      icon: Star,
      title: "Hands-on Training",
      description: "Emphasis on practical skills to build confidence and competence for real-world scenarios."
    },
    {
      icon: Award,
      title: "Recognized Certification",
      description: (
        <>
          Receive a certification that opens doors to employment in top spas and hotels. <span className="font-bold text-gold-400">(Rwanda TVET Board (RTB))</span>
        </>
      )
    },
    {
      icon: MapPin,
      title: "Pioneering Institution",
      description: "Proud to be the first formal massage therapy school established in Rwanda."
    },
    {
      icon: RefreshCw,
      title: "Refresher Courses",
      description: "Specialized programs for practicing therapists to upgrade their skills and stay current."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-teal-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Why Choose Vera School</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
