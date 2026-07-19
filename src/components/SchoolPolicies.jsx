import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  GraduationCap, 
  UserCheck, 
  AlertCircle, 
  CheckCircle,
  ShieldCheck,
  BookOpen,
  Gavel,
  Clock,
  CreditCard,
  Lock,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';

const PolicyCard = ({ title, icon: Icon, children }) => (
  <div className="bg-teal-800 p-6 rounded-lg shadow-sm border border-teal-700 mb-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-teal-900 rounded-full text-gold-400 border border-teal-700">
        <Icon size={20} />
      </div>
      <h4 className="text-lg font-serif font-bold text-white">{title}</h4>
    </div>
    <div className="text-neutral-300 text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const SchoolPolicies = () => {
  const [activeTab, setActiveTab] = useState('admission');

  const tabs = [
    { id: 'admission', label: 'Admission', icon: FileText },
    { id: 'academic', label: 'Academic', icon: BookOpen },
    { id: 'conduct', label: 'Conduct', icon: Scale },
    { id: 'attendance', label: 'Attendance', icon: Clock },
    { id: 'financial', label: 'Financial', icon: CreditCard },
    { id: 'privacy', label: 'Privacy & FERPA', icon: Lock },
    { id: 'grievance', label: 'Grievance', icon: MessageCircle },
  ];

  return (
    <section id="policies" className="py-20 bg-teal-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">School Policies</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Our policies are designed to ensure a professional, safe, and effective learning environment for all students at Vera School.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-gold-500 text-teal-900 shadow-lg scale-105'
                  : 'bg-teal-800 text-neutral-300 hover:bg-teal-700'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'admission' && (
              <motion.div
                key="admission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <PolicyCard title="Admission Requirements" icon={UserCheck}>
                    <p>To be considered for admission to Vera School of Massage Therapy & Nails Care, applicants must meet the following requirements:</p>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-gold-500 mt-1 shrink-0" />
                        <span>Be at least 18 years of age at the time of enrollment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-gold-500 mt-1 shrink-0" />
                        <span>Possess a high school diploma or equivalent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-gold-500 mt-1 shrink-0" />
                        <span>Complete the admissions application & interview</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-gold-500 mt-1 shrink-0" />
                        <span>Pass a background check</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-gold-500 mt-1 shrink-0" />
                        <span>Provide proof of immunizations</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-teal-900 p-3 rounded border border-teal-700">
                      <p className="text-xs text-gold-400 font-semibold">Important Note:</p>
                      <p className="text-xs text-neutral-300">Meeting minimum requirements does not guarantee admission. All applications are reviewed holistically.</p>
                    </div>
                  </PolicyCard>

                  <PolicyCard title="Non-Discrimination Policy" icon={ShieldCheck}>
                    <p>
                      Vera School does not discriminate on the basis of race, color, national origin, sex, disability, age, religion, sexual orientation, gender identity, or veteran status in its programs and activities.
                    </p>
                    <p className="mt-2">
                      We are committed to fostering an inclusive and welcoming environment for all students, staff, and faculty.
                    </p>
                  </PolicyCard>
                </div>
              </motion.div>
            )}

            {activeTab === 'academic' && (
              <motion.div
                key="academic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <PolicyCard title="Grading System" icon={GraduationCap}>
                    <p className="mb-3">Vera School uses the following grading scale to evaluate student performance:</p>
                    <div className="overflow-x-auto rounded border border-teal-700">
                      <table className="w-full text-xs min-w-[300px]">
                        <thead className="bg-teal-900">
                          <tr>
                            <th className="p-2 text-left text-neutral-300">Grade</th>
                            <th className="p-2 text-left text-neutral-300">Percentage</th>
                            <th className="p-2 text-left text-neutral-300">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-teal-700">
                          <tr><td className="p-2 font-bold text-gold-400">A</td><td className="p-2 text-neutral-300">93-100%</td><td className="p-2 text-green-400">Excellent</td></tr>
                          <tr><td className="p-2 font-bold text-gold-400">B</td><td className="p-2 text-neutral-300">85-92%</td><td className="p-2 text-teal-400">Good</td></tr>
                          <tr><td className="p-2 font-bold text-gold-400">C</td><td className="p-2 text-neutral-300">78-84%</td><td className="p-2 text-blue-400">Satisfactory</td></tr>
                          <tr><td className="p-2 font-bold text-gold-400">D</td><td className="p-2 text-neutral-300">70-77%</td><td className="p-2 text-orange-400">Below Standard</td></tr>
                          <tr><td className="p-2 font-bold text-gold-400">F</td><td className="p-2 text-neutral-300">Below 70%</td><td className="p-2 text-red-400">Failing</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </PolicyCard>

                  <div className="space-y-6">
                    <PolicyCard title="Academic Progress (SAP)" icon={BookOpen}>
                      <p>
                        Students must maintain a minimum cumulative GPA of 2.0 and complete at least 67% of attempted coursework to remain in good academic standing.
                      </p>
                    </PolicyCard>
                    
                    <PolicyCard title="Academic Probation & Support" icon={AlertCircle}>
                      <p className="mb-2">
                        Students who fail to meet SAP requirements will be placed on academic probation and must meet with an academic advisor to develop an improvement plan.
                      </p>
                      <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wide mt-3">
                        <CheckCircle size={14} /> Free Tutoring Available
                      </div>
                    </PolicyCard>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'conduct' && (
              <motion.div
                key="conduct"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <PolicyCard title="Code of Conduct" icon={ShieldCheck}>
                    <p className="mb-4">All students are expected to conduct themselves professionally and ethically. Key expectations include:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-teal-500 mt-1 shrink-0" />
                          <span>Treating everyone with respect and dignity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-teal-500 mt-1 shrink-0" />
                          <span>Maintaining strict client confidentiality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-teal-500 mt-1 shrink-0" />
                          <span>Arriving on time and prepared</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-teal-500 mt-1 shrink-0" />
                          <span>Dressing in professional attire</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-teal-500 mt-1 shrink-0" />
                          <span>Maintaining personal hygiene</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-teal-500 mt-1 shrink-0" />
                          <span>Zero tolerance for substance abuse</span>
                        </li>
                      </ul>
                    </div>
                  </PolicyCard>

                  <div className="grid md:grid-cols-2 gap-6">
                    <PolicyCard title="Professional Boundaries" icon={UserCheck}>
                      <p className="mb-2">Students must maintain appropriate professional boundaries with clients at all times:</p>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-center gap-2 text-red-400 font-medium">
                          <AlertCircle size={14} /> No sexual misconduct or harassment
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-gold-500" /> No dual relationships with clients
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-gold-500" /> No exchange of personal contact info
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-gold-500" /> Proper draping techniques always
                        </li>
                      </ul>
                    </PolicyCard>

                    <PolicyCard title="Disciplinary Actions" icon={Gavel}>
                      <p className="mb-3">Violations of the Code of Conduct may result in the following actions, depending on severity:</p>
                      <ol className="list-decimal list-inside space-y-2 font-medium text-neutral-300">
                        <li>Verbal or written warning</li>
                        <li>Suspension from clinical activities</li>
                        <li>Academic probation</li>
                        <li className="text-red-400">Dismissal from the program</li>
                      </ol>
                    </PolicyCard>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'attendance' && (
              <motion.div
                key="attendance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <PolicyCard title="Attendance Requirements" icon={Clock}>
                    <p className="mb-3">Consistent attendance is crucial for skill development in massage therapy.</p>
                    <ul className="space-y-3">
                      <li className="bg-teal-900 p-3 rounded border-l-4 border-gold-400">
                        <span className="block font-bold text-white text-xs uppercase mb-1">Minimum Attendance</span>
                        Students must maintain at least <span className="font-bold text-gold-400">90% attendance</span> to be eligible for graduation.
                      </li>
                      <li className="bg-teal-900 p-3 rounded border-l-4 border-gold-400">
                        <span className="block font-bold text-white text-xs uppercase mb-1">Tardiness</span>
                        Arriving more than 15 minutes late constitutes a partial absence. Three partial absences equal one full absence.
                      </li>
                    </ul>
                  </PolicyCard>

                  <div className="space-y-6">
                    <PolicyCard title="Reporting Absences" icon={MessageCircle}>
                      <p>
                        Unexpected absences must be reported to the administration office via phone or email at least <strong>1 hour prior</strong> to the scheduled class start time.
                      </p>
                    </PolicyCard>
                    
                    <PolicyCard title="Make-up Policy" icon={CheckCircle}>
                      <p>
                        Missed hours must be made up within 14 days. Students are responsible for coordinating with instructors to schedule make-up sessions, which may incur an additional fee.
                      </p>
                    </PolicyCard>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'financial' && (
              <motion.div
                key="financial"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <PolicyCard title="Tuition & Payments" icon={CreditCard}>
                    <p className="mb-4">
                      Tuition fees must be paid in accordance with the signed enrollment agreement.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-teal-500" /> Full payment due before start date
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-teal-500" /> Approved installment plans available
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-teal-500" /> Late fees apply after 5-day grace period
                      </li>
                    </ul>
                  </PolicyCard>

                  <PolicyCard title="Refund Policy" icon={AlertTriangle}>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-teal-700 pb-2">
                        <span>Cancellation within 5 days of signing</span>
                        <span className="font-bold text-gold-400">100% Refund</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-teal-700 pb-2">
                        <span>Withdrawal in 1st week</span>
                        <span className="font-bold text-gold-400">50% Refund</span>
                      </div>
                      <div className="flex justify-between items-center pb-2">
                        <span>Withdrawal after 1st week</span>
                        <span className="font-bold text-red-400">No Refund</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2 italic">* Application fees are non-refundable.</p>
                  </PolicyCard>

                  <div className="md:col-span-2">
                    <PolicyCard title="Additional Costs" icon={FileText}>
                      <div className="flex flex-wrap gap-4">
                         <span className="bg-teal-900 px-3 py-1 rounded text-xs font-bold text-neutral-300 border border-teal-700">Textbooks</span>
                         <span className="bg-teal-900 px-3 py-1 rounded text-xs font-bold text-neutral-300 border border-teal-700">Uniforms</span>
                         <span className="bg-teal-900 px-3 py-1 rounded text-xs font-bold text-neutral-300 border border-teal-700">Massage Kits</span>
                         <span className="bg-teal-900 px-3 py-1 rounded text-xs font-bold text-neutral-300 border border-teal-700">Licensing Exam Fees</span>
                      </div>
                      <p className="mt-2 text-xs">These items are sold separately and are required for clinical practice.</p>
                    </PolicyCard>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'privacy' && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <PolicyCard title="Student Privacy (FERPA)" icon={Lock}>
                    <p className="mb-4">
                      Vera School adheres to the Family Educational Rights and Privacy Act (FERPA), which protects the privacy of student education records.
                    </p>
                    <div className="bg-teal-900 p-4 rounded-lg border border-teal-700">
                      <h5 className="font-bold text-gold-400 mb-2 text-sm">Student Rights Include:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                        <li>The right to inspect and review their education records</li>
                        <li>The right to request amendment of records believed to be inaccurate</li>
                        <li>The right to consent to disclosures of personally identifiable information</li>
                        <li>The right to file a complaint concerning alleged failures to comply</li>
                      </ul>
                    </div>
                  </PolicyCard>
                  
                  <PolicyCard title="Record Retention" icon={FileText}>
                    <p>
                       Academic records are maintained permanently. Financial records are kept for at least 5 years after the student's last date of attendance.
                    </p>
                  </PolicyCard>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'grievance' && (
              <motion.div
                key="grievance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <PolicyCard title="Grievance Procedure" icon={MessageCircle}>
                    <p className="mb-4">
                      We are committed to resolving student concerns fairly and promptly.
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-teal-900 flex items-center justify-center text-gold-400 font-bold shrink-0 border border-teal-700">1</div>
                        <div>
                          <h5 className="font-bold text-white">Informal Resolution</h5>
                          <p className="text-sm">Attempt to resolve the issue directly with the instructor or staff member involved.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-teal-900 flex items-center justify-center text-gold-400 font-bold shrink-0 border border-teal-700">2</div>
                        <div>
                          <h5 className="font-bold text-white">Formal Complaint</h5>
                          <p className="text-sm">Submit a written complaint to the School Director within 10 days of the incident.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-teal-900 flex items-center justify-center text-gold-400 font-bold shrink-0 border border-teal-700">3</div>
                        <div>
                          <h5 className="font-bold text-white">Investigation & Decision</h5>
                          <p className="text-sm">The Director will investigate and provide a written decision within 15 days.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-teal-900 flex items-center justify-center text-gold-400 font-bold shrink-0 border border-teal-700">4</div>
                        <div>
                          <h5 className="font-bold text-white">Appeal</h5>
                          <p className="text-sm">Decisions may be appealed to the state licensing board if not resolved internally.</p>
                        </div>
                      </div>
                    </div>
                  </PolicyCard>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SchoolPolicies;
