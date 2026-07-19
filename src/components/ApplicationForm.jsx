import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CalendarDays, User, Phone, Mail, MapPin, CheckCircle, Download } from 'lucide-react';

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [qualification, setQualification] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    formData.append('form-name', 'application');

    try {
      const res = await fetch('/', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-24 bg-teal-900">
      <div className="container mx-auto px-4 md:px-6">
          <div className="text-left mb-12 bg-white/5 p-6 md:p-8 rounded-lg border border-white/10">
            <h1 className="text-2xl md:text-3xl font-serif text-white text-center mb-2">Vera School of Massage Therapy & Nails Care</h1>
            <h2 className="text-lg md:text-xl text-gold-400 font-bold text-center underline mb-8 uppercase">Application Form – Apprenticeship Training</h2>
            
            <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed text-justify">
              <p>
                <strong className="text-white">Vera School of Massage Therapy & Nails Care</strong> is a premier training institution in Rwanda, offering a comprehensive short course curriculum designed to launch your career in the luxury wellness sector. We are dedicated to excellence, precision, and the art of healing.
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
              <p className="font-medium text-white pt-2">
                In this regard, the school is seeking the 1st intake of apprentices to apply for the apprenticeship training. Interested candidates are requested to fill this application form not later than <span className="text-gold-400">23rd February 2026</span>.
              </p>
            </div>
          </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-teal-800 border border-teal-700 rounded-lg shadow-xl max-w-3xl mx-auto p-6 md:p-8"
        >
          {submitted && (
            <div className="text-center py-12">
              <CheckCircle className="mx-auto text-gold-400" size={48} />
              <h3 className="text-white font-serif text-2xl mt-4">Application Submitted</h3>
              <p className="text-neutral-300 mt-2">Thank you! We will contact you shortly.</p>
            </div>
          )}
          {!submitted && (
            <form
              name="application"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="application" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl text-gold-400 font-serif mb-6 border-b border-white/10 pb-2">A. Personal Information</h3>
                  <p className="text-neutral-400 mb-4 text-sm">Please provide the below personal information:</p>
                  
                  <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-white mb-2">1. Name</label>
                        <input type="text" name="fullName" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
                      </div>
                      <div>
                        <label className="block text-sm text-white mb-2">2. ID number</label>
                        <input type="text" name="idNumber" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-white mb-2">3. Gender</label>
                        <div className="flex gap-8 mt-3 bg-white/5 border border-white/10 rounded px-4 py-3">
                          <label className="flex items-center text-white cursor-pointer">
                            <input type="radio" name="gender" value="Female" required className="mr-2 accent-gold-400 h-4 w-4" /> Female
                          </label>
                          <label className="flex items-center text-white cursor-pointer">
                            <input type="radio" name="gender" value="Male" required className="mr-2 accent-gold-400 h-4 w-4" /> Male
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-white mb-2">4. Date of birth</label>
                        <input type="date" name="dob" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-white mb-3">5. Address/Residence</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white/5 p-4 rounded border border-white/10">
                        <div>
                          <span className="text-xs text-neutral-400 block mb-1">Province</span>
                          <input type="text" name="province" className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-gold-400" />
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block mb-1">District</span>
                          <input type="text" name="district" className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-gold-400" />
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block mb-1">Sector</span>
                          <input type="text" name="sector" className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-gold-400" />
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block mb-1">Cell</span>
                          <input type="text" name="cell" className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-gold-400" />
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block mb-1">Village</span>
                          <input type="text" name="village" className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-gold-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-white mb-2">6. Phone contact</label>
                        <input type="tel" name="phone" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
                      </div>
                      <div>
                        <label className="block text-sm text-white mb-2">8. Email address</label>
                        <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm text-white">7. Parent's Information</label>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <span className="text-xs text-neutral-400 block mb-1">Name of the Father</span>
                          <input type="text" name="fatherName" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block mb-1">Mother</span>
                          <input type="text" name="motherName" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block mb-1">Parent's Phone</span>
                          <input type="tel" name="parentPhone" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl text-gold-400 font-serif mb-6 border-b border-white/10 pb-2">B. Education Information</h3>
                  
                  <div className="mb-8">
                    <label className="block text-sm text-white mb-4">9. What is your highest level of qualification?</label>
                    <div className="space-y-4 pl-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white/5 p-3 rounded border border-white/10">
                        <label className="flex items-center text-white cursor-pointer min-w-[240px]">
                          <span className="mr-2 text-gold-400">(a)</span>
                          <input 
                            type="radio" 
                            name="qualification" 
                            value="University/College Graduate" 
                            onChange={(e) => setQualification(e.target.value)}
                            className="mr-2 accent-gold-400 h-4 w-4" 
                          /> 
                          University or College Graduate
                        </label>
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-sm text-neutral-400 whitespace-nowrap">Year of graduation:</span>
                          <input 
                            type="text" 
                            name="gradYear" 
                            disabled={qualification !== 'University/College Graduate'}
                            className="flex-1 bg-black/20 border-b border-white/30 px-2 py-1 text-white text-sm focus:outline-none focus:border-gold-400 disabled:opacity-30" 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white/5 p-3 rounded border border-white/10">
                        <label className="flex items-center text-white cursor-pointer min-w-[240px]">
                          <span className="mr-2 text-gold-400">(b)</span>
                          <input 
                            type="radio" 
                            name="qualification" 
                            value="University/College Dropout" 
                            onChange={(e) => setQualification(e.target.value)}
                            className="mr-2 accent-gold-400 h-4 w-4" 
                          /> 
                          University or college dropout
                        </label>
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-sm text-neutral-400 whitespace-nowrap">Year of last year:</span>
                          <input 
                            type="text" 
                            name="dropoutYear" 
                            disabled={qualification !== 'University/College Dropout'}
                            className="flex-1 bg-black/20 border-b border-white/30 px-2 py-1 text-white text-sm focus:outline-none focus:border-gold-400 disabled:opacity-30" 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white/5 p-3 rounded border border-white/10">
                        <label className="flex items-center text-white cursor-pointer min-w-[240px]">
                          <span className="mr-2 text-gold-400">(c)</span>
                          <input 
                            type="radio" 
                            name="qualification" 
                            value="Completed Senior 6 or 12YBE" 
                            onChange={(e) => setQualification(e.target.value)}
                            className="mr-2 accent-gold-400 h-4 w-4" 
                          /> 
                          Completed Senior 6 or 12YBE
                        </label>
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-sm text-neutral-400 whitespace-nowrap">Year of completion:</span>
                          <input 
                            type="text" 
                            name="completionYear" 
                            disabled={qualification !== 'Completed Senior 6 or 12YBE'}
                            className="flex-1 bg-black/20 border-b border-white/30 px-2 py-1 text-white text-sm focus:outline-none focus:border-gold-400 disabled:opacity-30" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white mb-2">What is your field of study (where applicable)?</label>
                    <input type="text" name="fieldOfStudy" className="w-full bg-white/5 border-b border-white/30 px-2 py-3 text-white focus:outline-none focus:border-gold-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl text-gold-400 font-serif mb-6 border-b border-white/10 pb-2">C. Personal Motivation</h3>
                  <label className="block text-sm text-white mb-4">
                    Please tell us what motivated you for applying to this apprenticeship training and your post-graduation plan:
                  </label>
                  <div className="bg-white/5 p-2 rounded border border-white/10">
                    <textarea
                      name="motivation"
                      rows="12"
                      required
                      className="w-full bg-transparent border-none px-4 py-3 text-white placeholder-neutral-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" name="agree" required className="mr-3" />
                  <span className="text-neutral-300 text-sm">I confirm that the information provided is accurate.</span>
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gold-500 text-teal-900 font-bold py-3 rounded text-sm hover:bg-white hover:text-teal-900 transition-all duration-300 disabled:opacity-60"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-neutral-300 mb-4">Prefer to fill it out offline?</p>
          <a 
            href="/application-form.docx" 
            download 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-gold-400 text-gold-400 font-bold rounded hover:bg-gold-400 hover:text-teal-900 transition-all duration-300"
          >
            <Download size={18} />
            Download Application Form (DOCX)
          </a>
          <p className="text-xs text-neutral-400 mt-3 max-w-md mx-auto">
            You can download the form, fill it out, and email it to us or bring it to our campus at KK 59 St, Kanombe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
