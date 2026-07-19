import React from 'react';
import { Phone, MapPin, Mail, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-teal-900 relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl"></div>
       <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 bg-teal-700/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Start Your Journey</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-neutral-300 text-lg leading-relaxed">
            Have questions about our courses or enrollment process? We're here to help. Reach out to us directly or fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Cards - Left Side */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-teal-800 p-8 rounded-xl shadow-sm border border-teal-700 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-teal-900 rounded-full flex items-center justify-center mb-6 border border-teal-700 group-hover:border-gold-500/50 transition-colors duration-300">
                <MapPin className="text-gold-400 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Visit Campus</h3>
              <p className="text-neutral-300 mb-1">Kigali-Kanombe</p>
              <p className="text-neutral-300">KK 59 St.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-teal-800 p-8 rounded-xl shadow-sm border border-teal-700 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-teal-900 rounded-full flex items-center justify-center mb-6 border border-teal-700 group-hover:border-gold-500/50 transition-colors duration-300">
                <Phone className="text-gold-400 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Call Us</h3>
              <p className="text-neutral-300 mb-4">Mon-Sat from 8am to 5pm</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+250792066364" className="text-gold-400 font-bold hover:text-white transition-colors text-lg">
                  +250 792 066 364
                </a>
                <a href="https://wa.me/250792066364" target="_blank" rel="noopener noreferrer" className="text-gold-400 font-bold hover:text-white transition-colors text-lg flex items-center gap-2">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-teal-800 p-8 rounded-xl shadow-sm border border-teal-700 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-teal-900 rounded-full flex items-center justify-center mb-6 border border-teal-700 group-hover:border-gold-500/50 transition-colors duration-300">
                <Mail className="text-gold-400 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Email Us</h3>
              <p className="text-neutral-300 mb-4">For general inquiries</p>
              <a href="mailto:info@veramassage-nailscare-school.rw" className="text-gold-400 font-bold hover:text-white transition-colors text-lg">
                info@veramassage-nailscare-school.rw
              </a>
            </motion.div>
          </div>

          {/* Form & Map - Right Side */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-teal-800 rounded-2xl shadow-xl overflow-hidden border border-teal-700"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-neutral-300 mb-2">Full Name</label>
                      <input type="text" className="w-full bg-teal-900 border border-teal-700 text-white p-3 rounded focus:outline-none focus:border-gold-500 transition-all placeholder-neutral-400" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-300 mb-2">Email Address</label>
                      <input type="email" className="w-full bg-teal-900 border border-teal-700 text-white p-3 rounded focus:outline-none focus:border-gold-500 transition-all placeholder-neutral-400" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-300 mb-2">Message</label>
                      <textarea className="w-full bg-teal-900 border border-teal-700 text-white p-3 rounded focus:outline-none focus:border-gold-500 transition-all h-32 resize-none placeholder-neutral-400" placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="w-full bg-gold-500 text-teal-900 font-bold uppercase py-4 rounded hover:bg-gold-400 transition-colors flex items-center justify-center group">
                      <span>Send Message</span>
                      <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
                <div className="h-64 md:h-auto bg-teal-900 relative min-h-[300px] md:min-h-[400px]">
                  <iframe 
                    src="https://maps.google.com/maps?q=KK+59+St,+Kanombe,+Kigali&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Map"
                    className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
