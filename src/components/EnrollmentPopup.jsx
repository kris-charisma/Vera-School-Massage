import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';

const EnrollmentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      // Check if already dismissed in this session
      const dismissed = sessionStorage.getItem('enrollmentPopupDismissed');
      
      // Check if deadline has passed
      const deadline = new Date('2026-02-23T23:59:59');
      const now = new Date();
      const isExpired = now > deadline;

      if (!dismissed && !isExpired) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('enrollmentPopupDismissed', 'true');
  };

  const handleApplyNow = () => {
    setIsVisible(false);
    sessionStorage.setItem('enrollmentPopupDismissed', 'true');
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-teal-900 border border-gold-500 rounded-xl max-w-lg w-full shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-3 right-3 text-neutral-400 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-500/30">
                <Calendar className="text-gold-400" size={32} />
              </div>
              
              <h3 className="text-2xl font-serif text-white mb-4">
                Enrollment is Open!
              </h3>
              
              <p className="text-neutral-200 text-lg mb-6 leading-relaxed">
                Take the next step now, enrollment is open and seats are filling fast. <br/>
                Applications close on <span className="text-gold-400 font-bold">February 23, 2026</span>. <br/>
                Join the 1st intake.
              </p>
              
              <button
                onClick={handleApplyNow}
                className="w-full bg-gold-500 text-teal-900 font-bold py-3 rounded text-base hover:bg-white hover:text-teal-900 transition-all duration-300 uppercase tracking-wide shadow-lg"
              >
                Apply Now
              </button>
            </div>
            
            {/* Decorative bottom bar */}
            <div className="h-2 bg-gradient-to-r from-teal-800 via-gold-500 to-teal-800"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentPopup;
