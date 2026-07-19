import React from 'react';
import { MapPin, Phone, Mail, Instagram, ArrowRight } from 'lucide-react';

// Custom Icons (Duplicated for portability)
const XIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const TiktokIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-neutral-300 pt-20 pb-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Vera School" 
                className="h-24 object-contain bg-white/5 p-2 rounded"
              />
              <div>
                <h3 className="text-gold-400 font-serif text-xl font-bold leading-none">Vera School</h3>
                <p className="text-white text-xs tracking-wide uppercase mt-1">of Massage Therapy & Nails Care</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Empowering future therapists with world-class training in massage therapy and nail care. Your journey to a professional career starts here.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.instagram.com/vera.school.massage.nails?igsh=MWhrcGRkOThmZWVlZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 group">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@veramassage2?_r=1&_t=ZM-92gDzWxz3EK" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 group">
                <TiktokIcon size={18} />
              </a>
              <a href="https://x.com/veraskulmassage?s=21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 group">
                <XIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-gold-400 transition-colors flex items-center"><ArrowRight size={14} className="mr-2 text-gold-500/50" /> Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors flex items-center"><ArrowRight size={14} className="mr-2 text-gold-500/50" /> About Us</a></li>
              <li><a href="#courses" className="hover:text-gold-400 transition-colors flex items-center"><ArrowRight size={14} className="mr-2 text-gold-500/50" /> Our Courses</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors flex items-center"><ArrowRight size={14} className="mr-2 text-gold-500/50" /> Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <span>Kigali-Kanombe<br/>KK 59 St.</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold-500 mr-3 flex-shrink-0" />
                <span>+250 792 066 364</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@veramassage-nailscare-school.rw" className="hover:text-gold-400 transition-colors">
                  info@veramassage-nailscare-school.rw
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-xs text-neutral-400 mb-4">Subscribe to our newsletter for the latest updates and course announcements.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors text-white placeholder-neutral-500"
              />
              <button className="w-full bg-gold-500 text-teal-900 font-bold py-3 rounded text-sm hover:bg-white hover:text-teal-900 transition-all duration-300">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center text-center text-sm text-neutral-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Vera School of Massage Therapy & Nails Care. All rights reserved.</p>
          <div className="flex items-center justify-center">
            <span className="mr-1">Designed and developed by</span>
            <a 
              href="https://wa.me/250788800813" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold-400 font-medium hover:text-white transition-colors flex items-center group"
            >
              Chris Charisma
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
