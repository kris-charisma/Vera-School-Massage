import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Lightbulb, BrainCircuit, Settings, BookOpen, Target, CheckCircle, Briefcase } from 'lucide-react';

const SkillAccordion = ({ title, content, icon: Icon, isOpen, onClick }) => (
  <div className="border border-teal-700 rounded-lg overflow-hidden mb-4 bg-teal-800 shadow-sm hover:shadow-md transition-shadow">
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
        isOpen ? 'bg-teal-700' : 'bg-teal-800'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-full ${isOpen ? 'bg-gold-500 text-white' : 'bg-teal-900 text-neutral-300'}`}>
          <Icon size={24} />
        </div>
        <h4 className="text-lg font-serif font-bold text-white">{title}</h4>
      </div>
      {isOpen ? <ChevronUp className="text-gold-500" /> : <ChevronDown className="text-neutral-400" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 pt-0 border-t border-teal-700 text-neutral-300 font-sans leading-relaxed">
            {content}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const EntrepreneurialSkills = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const skills = [
    {
      title: "1. Basic Aspects of Entrepreneurship",
      icon: Lightbulb,
      content: (
        <div className="space-y-6">
          <div>
            <h5 className="font-bold text-white mb-2">Key Concepts</h5>
            <div className="flex flex-wrap gap-2">
              {['Business', 'Entrepreneurship', 'Intrapreneurship', 'Enterprise', 'Invention', 'Innovation', 'Creativity'].map((item, i) => (
                <span key={i} className="bg-teal-900 text-neutral-300 px-3 py-1 rounded-full text-sm border border-teal-700">{item}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-white mb-2">Characteristics of Good Entrepreneurs</h5>
            <ul className="grid md:grid-cols-2 gap-2">
              {[
                'Creativity & Curiosity', 
                'Responsibility & Independence', 
                'Goal Oriented', 
                'Risk Taker', 
                'Action Oriented', 
                'Positive Attitude'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm">
                  <CheckCircle size={14} className="text-gold-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Importance</h5>
            <ul className="list-disc list-inside text-sm space-y-1 text-neutral-300">
              <li>Acceleration of economic growth</li>
              <li>Promoting innovation and social changes</li>
              <li>Promoting research and development</li>
              <li>Developing and improving existing enterprises</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2. Generate Business Idea",
      icon: BrainCircuit,
      content: (
        <div className="space-y-6">
          <div>
            <h5 className="font-bold text-white mb-2">Business Environment Analysis Tools</h5>
            <ul className="list-disc list-inside text-sm space-y-1 text-neutral-300">
              <li><strong>SWOT Analysis:</strong> Strengths, Weaknesses, Opportunities, Threats</li>
              <li><strong>PESTEL:</strong> Political, Economic, Social, Technological, Environmental, Legal</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Idea Generation Methods</h5>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-1">
                <li className="font-semibold text-gold-400">Techniques:</li>
                <li>• Focus groups & Brainstorming</li>
                <li>• Creative problem-solving</li>
                <li>• Role-playing & Storyboarding</li>
                <li>• Questioning assumptions</li>
              </ul>
              <ul className="space-y-1">
                <li className="font-semibold text-gold-400">SCAMPER Model:</li>
                <li>• Substitute, Combine, Adapt</li>
                <li>• Modify, Put to another use</li>
                <li>• Eliminate, Reverse</li>
              </ul>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Feasibility Analysis</h5>
            <p className="text-sm mb-2">Analyzing Product, Market, Organizational, and Financial feasibility.</p>
            <ol className="list-decimal list-inside text-sm bg-teal-900 p-3 rounded border border-teal-700">
              <li>Conduct a preliminary analysis</li>
              <li>Prepare a projected income statement</li>
              <li>Conduct a market survey</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "3. Perform Business Operations - Part 1: The Business Plan",
      icon: Settings,
      content: (
        <div className="space-y-6">
          <div>
            <h5 className="font-bold text-white mb-2">The Business Plan Structure</h5>
            <p className="text-sm mb-3">Comprehensive definition of business concepts, internal/external needs, and core elements.</p>
            
            <div className="space-y-3">
              <div className="bg-teal-900 border border-teal-700 p-3 rounded">
                <h6 className="font-bold text-gold-400 text-sm mb-1">1. Structure & Identity</h6>
                <p className="text-xs text-neutral-400">Title page, Logo, Business Name, Owner Contact, Location, Executive Summary.</p>
              </div>
              
              <div className="bg-teal-900 border border-teal-700 p-3 rounded">
                <h6 className="font-bold text-gold-400 text-sm mb-1">2. Business Description</h6>
                <p className="text-xs text-neutral-400">History, Mission/Vision, Goals, Competitive Advantage, Market Needs, SWOT Analysis.</p>
              </div>
              
              <div className="bg-teal-900 border border-teal-700 p-3 rounded">
                <h6 className="font-bold text-gold-400 text-sm mb-1">3. Production & Operations</h6>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400 mt-1">
                  <span>• Premises & Location</span>
                  <span>• Equipment & Machinery</span>
                  <span>• Production Process</span>
                  <span>• Raw Materials</span>
                  <span>• Quality Control</span>
                  <span>• Labour Requirements</span>
                  <span>• Packaging & Suppliers</span>
                </div>
              </div>

              <div className="bg-teal-900 border border-teal-700 p-3 rounded">
                <h6 className="font-bold text-gold-400 text-sm mb-1">4. Marketing Plan</h6>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400 mt-1">
                  <span>• Market Research & Analysis</span>
                  <span>• Target Market & Competition</span>
                  <span>• 5Ps of Marketing Mix</span>
                  <span>• Marketing Strategies & Budget</span>
                </div>
              </div>

              <div className="bg-teal-900 border border-teal-700 p-3 rounded">
                <h6 className="font-bold text-gold-400 text-sm mb-1">5. Financial & Implementation Plans</h6>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400 mt-1">
                  <span>• Start-up & Operating Costs</span>
                  <span>• Source of Funds & Cash Flow</span>
                  <span>• Income Statement & Balance Sheet</span>
                  <span>• Implementation Plan & Appendices</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Contingency & Presentation</h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-teal-900 p-3 rounded border border-teal-700">
                <h6 className="font-bold text-gold-400 text-xs mb-1 uppercase">Business Contingency Plan</h6>
                <p className="text-xs text-neutral-300 mb-1">Reduces risk, ensures continuity, and prevents panic.</p>
                <ul className="list-disc list-inside text-xs text-neutral-400">
                  <li>Identification of business risks</li>
                  <li>Risk control measures</li>
                </ul>
              </div>
              <div className="bg-teal-900 p-3 rounded border border-teal-700">
                <h6 className="font-bold text-gold-400 text-xs mb-1 uppercase">Business Plan Presentation</h6>
                <p className="text-xs text-neutral-300 mb-1">Strategies to attract investors and financing.</p>
                <ul className="list-disc list-inside text-xs text-neutral-400">
                  <li>Connect with audience</li>
                  <li>Use visualization & key points</li>
                  <li>Keep it short (max 10 min)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "4. Perform Core Business Operations",
      icon: Briefcase,
      content: (
        <div className="space-y-6">
          <div>
            <h5 className="font-bold text-white mb-2">Core Operations Setup</h5>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-neutral-300">
              <li className="flex items-start"><CheckCircle size={14} className="text-gold-500 mr-2 mt-1" /> Legal Structure (Sole Proprietorship, Partnership, LLC)</li>
              <li className="flex items-start"><CheckCircle size={14} className="text-gold-500 mr-2 mt-1" /> Physical Operations (Location, Equipment, Employees)</li>
              <li className="flex items-start"><CheckCircle size={14} className="text-gold-500 mr-2 mt-1" /> Financial Operations (Accounting System, Bookkeeping)</li>
              <li className="flex items-start"><CheckCircle size={14} className="text-gold-500 mr-2 mt-1" /> Day-to-Day Management (Inventory, Billing, Production)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Pre-Launch Activities</h5>
            <div className="bg-teal-900 p-3 rounded text-sm text-neutral-300 border border-teal-700">
              <ul className="grid grid-cols-2 gap-2">
                <li>• Legalize the business</li>
                <li>• Determine raw materials & storage</li>
                <li>• Working place layout</li>
                <li>• Estimate start-up finances</li>
                <li>• Identify location requirements</li>
                <li>• Allocate financial resources</li>
              </ul>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Ethics & Work Environment</h5>
            <div className="space-y-3">
              <div>
                <h6 className="font-semibold text-sm text-gold-400">Creating a Conducive Environment</h6>
                <p className="text-xs text-neutral-400 mb-1">Establishing code of conduct, rules, and positive attitude.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-2 border-red-400 pl-3">
                  <h6 className="font-semibold text-xs text-red-400">Addressing Unethical Behavior</h6>
                  <p className="text-xs text-neutral-400">Mistreating employees, financial misconduct, misrepresentation. Addressed by clear policies, consequences, and leading by example.</p>
                </div>
                <div className="border-l-2 border-green-400 pl-3">
                  <h6 className="font-semibold text-xs text-green-400">Encouraging Positive Conduct</h6>
                  <p className="text-xs text-neutral-400">Rewards, training, clear expectations, and assigning responsibilities (RACI Matrix).</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Customer & Supplier Relationships</h5>
            <p className="text-sm text-neutral-300 mb-2">Methods to maintain good relationships: Communication, Exceeding Expectations, Feedback, and Loyalty.</p>
            <div className="flex gap-2 mb-4">
               <span className="bg-gold-500/10 text-gold-400 px-2 py-1 rounded text-xs border border-gold-500/20">Increase Customer Lifetime Value</span>
               <span className="bg-gold-500/10 text-gold-400 px-2 py-1 rounded text-xs border border-gold-500/20">Reduce Churn</span>
               <span className="bg-gold-500/10 text-gold-400 px-2 py-1 rounded text-xs border border-gold-500/20">Improve Loyalty</span>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Monitoring & Evaluation</h5>
            <div className="space-y-3">
              <div className="bg-teal-900 p-3 rounded border border-teal-700">
                <h6 className="font-bold text-gold-400 text-xs mb-1">Daily Reporting</h6>
                <ul className="list-disc list-inside text-xs text-neutral-400">
                   <li>Preparation of daily report of business activities</li>
                   <li>Format of daily report</li>
                   <li>Importance for business tracking</li>
                </ul>
              </div>
              
              <div className="bg-teal-900 p-3 rounded border border-teal-700">
                <h6 className="font-bold text-gold-400 text-xs mb-1">Employees' Meeting Organization</h6>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-xs text-neutral-400">
                    <li>Setting meeting objectives</li>
                    <li>Running meetings effectively</li>
                    <li>Facilitate brainstorming</li>
                  </ul>
                  <ul className="list-disc list-inside text-xs text-neutral-400">
                    <li>Set clear framework in advance</li>
                    <li>Offer incentives and rewards</li>
                    <li>Set meeting goals together</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-teal-900 p-3 rounded border border-teal-700">
                <h6 className="font-bold text-gold-400 text-xs mb-1">Business Plan Consultation</h6>
                <p className="text-xs text-neutral-300 mb-2">Used as a tool for internal communication and attracting investors.</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
                   <span>• Create effective strategy for growth</span>
                   <span>• Determine future financial needs</span>
                   <span>• Attract investors and leaders</span>
                   <span>• Internal communication with partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Resources & Assessment Methods",
      icon: BookOpen,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-bold text-white mb-3 flex items-center">
              <Target size={18} className="mr-2 text-gold-500" /> 
              Learning Resources
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="bg-neutral-50 p-2 rounded">
                <span className="font-bold block text-teal-700 text-xs uppercase tracking-wide">Equipment & Tools</span>
                <span className="text-neutral-700">Computer, Projector, Internet, Reference books, Case studies, Risk analysis template, Business plan.</span>
              </li>
              <li className="bg-neutral-50 p-2 rounded">
                <span className="font-bold block text-teal-700 text-xs uppercase tracking-wide">Materials</span>
                <span className="text-neutral-700">Flipchart, Marker pens, Internet.</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-3 flex items-center">
              <CheckCircle size={18} className="mr-2 text-gold-500" /> 
              Methodology
            </h5>
            <div className="space-y-4">
              <div>
                <h6 className="font-semibold text-sm text-neutral-700 mb-1">Facilitation Techniques</h6>
                <div className="flex flex-wrap gap-1">
                  {['Brainstorming', 'Oral Presentation', 'Group Discussion', 'Documentary Research', 'Internet Research', 'Practical Exercises'].map((t, i) => (
                    <span key={i} className="text-xs bg-gold-50 text-gold-700 px-2 py-1 rounded border border-gold-100">{t}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h6 className="font-semibold text-sm text-neutral-700 mb-1">Assessment Methods</h6>
                <ul className="list-disc list-inside text-sm text-neutral-600">
                  <li>Written Assessment</li>
                  <li>Oral Presentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="entrepreneurial-skills" className="py-20 bg-teal-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Entrepreneurial Development</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Our curriculum goes beyond technical skills to include comprehensive business training, empowering graduates to launch and manage successful wellness enterprises.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillAccordion
              key={index}
              title={skill.title}
              content={skill.content}
              icon={skill.icon}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurialSkills;
