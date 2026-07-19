import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const CourseCard = ({ title, description, image, features, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group bg-teal-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-teal-700"
  >
    <div className="h-64 overflow-hidden relative">
      <div className="absolute inset-0 bg-teal-900/40 group-hover:bg-teal-900/0 transition-all duration-500 z-10"></div>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{title}</h3>
      <p className="text-neutral-300 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-neutral-300">
            <Check size={16} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full py-3 border-2 border-gold-400 text-gold-400 font-bold uppercase tracking-wider text-sm hover:bg-gold-400 hover:text-teal-900 transition-all duration-300">
        Learn More
      </button>
    </div>
  </motion.div>
);

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-teal-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Our Professional Courses</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Designed for aspiring therapists and professionals seeking to upgrade their skills.
          </p>
        </div>

        {/* General Introduction Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20 bg-teal-800 p-6 md:p-12 rounded-lg shadow-sm border-l-4 border-gold-400"
        >
          <h3 className="text-2xl font-serif text-white mb-6">General Introduction</h3>
          <div className="space-y-4 text-neutral-300 leading-relaxed text-justify font-sans">
            <p>
              The short course curriculum offers a cohesive and significant set of skills necessary for becoming a Massage Therapy and Nail Care (MTN). It has been carefully crafted, considering the training requirements, work environment, goals, and methods for implementing the training.
            </p>
            <p>
              Each module within the curriculum outlines the expected outcomes upon completion of the training, directly influencing the selection of both theoretical and practical learning activities. These competencies serve as the focal points for training, as each one must be acquired to attain certification.
            </p>
            <p>
              Moreover, the curriculum serves as the basis for evaluating learning. The tools for assessing progress and understanding are developed based on this document.
            </p>
            <p>
              Comprising three parts, the curriculum begins with a section of general interest, explaining the program's nature, objectives, key concepts, and definitions used throughout the document. The second part details the program, purpose, rationale, and the modules it includes. The third part focuses on the training package, encompassing the module sequencing, descriptions, and course structure.
            </p>
            <p>
              The core of the curriculum lies in the pages that describe each module. These pages provide information such as the module's title, duration of training, credit allocation, the context in which the competency is applied, prerequisite competencies, learning outcomes, and performance criteria.
            </p>
            <p>
              Within each module, a course structure is outlined, specifying the learning outcomes in terms of knowledge, skills, and attitude, along with the related learning content for each unit. Additionally, suggested learning activities and resources are provided to aid in the learning process. Lastly, each module incorporates assessment specifications and guidelines, ensuring a comprehensive evaluation of the acquired knowledge and skills.
            </p>
            <div className="my-6 border-t border-teal-700"></div>
            <p>
              Stress at the workplace has become an increasing phenomenon due to external factors such as technological advancement, changes in the economy of a country which might lead to becoming redundant. Pressure at the workplace is unavoidable due to the demands of the contemporary work environment. Pressure perceived as acceptable by an individual, may even keep workers alert, motivated, able to work and learn, depending on the available resources and personal characteristics. However, when that pressure becomes excessive or otherwise unmanageable it may lead to stress. Stress can damage an employees' health and the business performance.
            </p>
            <p>
              The above problem has created an increased need for well qualified professional massage therapists in our country although many sports and entertainment clubs have already been providing massage services to their clients who are in need. Recently many unethical behavior and incidents caused by inadequate training of these professionals have been reported by clients attending various sports and wellbeing clubs.
            </p>
            <p>
              Many of the current massage professionals practicing in Rwanda have not acquired proper training to allow them to offer appropriate and safe services. Currently, there is no formal and well-structured training school for massage therapy in Rwanda. It is on this basis that, we are proposing to initiate this programme which will offer middle professional cadres ready to respond to the needs of our country. The same school will also provide refresher courses to the existing massage practitioners to upgrade their skills and ensure the regulation of that profession which has a direct impact on people’s health.
            </p>
          </div>
        </motion.div>

        {/* Minimum Entry Requirements Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20 bg-teal-800 text-white p-8 md:p-12 rounded-lg shadow-xl border border-teal-700"
        >
          <h3 className="text-2xl font-serif text-gold-400 mb-6">Minimum Entry Requirements</h3>
          <div className="space-y-6 font-sans leading-relaxed">


            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Competency Goals</h4>
              <p className="text-neutral-300">
                This curriculum provides the skills, knowledge, and attitudes for a learner to be competent in a range of routine tasks and activities that require the application of a limited range of basic practical skills in a defined context.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Senior 6 Certificate (A’ Level Certificate)</h4>
              <p className="text-neutral-300">
                This qualification ensures that candidates have completed their secondary education at a level equivalent to the end of high school. In many educational systems, Senior 6 or A’ Level is the final stage of pre-university education.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Program Schedule Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20 bg-teal-800 p-6 md:p-12 rounded-lg shadow-sm border-l-4 border-gold-400"
        >
          <h3 className="text-2xl font-serif text-white mb-8 text-center uppercase tracking-wide">Programs Available</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Day Program */}
            <div className="bg-teal-900/50 p-6 rounded-lg border border-teal-700 hover:border-gold-400/50 transition-colors">
              <h4 className="text-lg font-bold text-gold-400 mb-3 uppercase font-serif border-b border-teal-700 pb-2">Day Program</h4>
              <div className="text-neutral-300 space-y-1">
                <p className="font-medium text-white">Monday to Friday</p>
                <p>8:00 AM – 1:00 PM</p>
              </div>
            </div>

            {/* Evening Program */}
            <div className="bg-teal-900/50 p-6 rounded-lg border border-teal-700 hover:border-gold-400/50 transition-colors">
              <h4 className="text-lg font-bold text-gold-400 mb-3 uppercase font-serif border-b border-teal-700 pb-2">Evening Program</h4>
              <div className="text-neutral-300 space-y-1">
                <p className="font-medium text-white">Monday to Friday</p>
                <p>5:00 PM – 9:00 PM</p>
              </div>
            </div>

            {/* Weekend Program */}
            <div className="bg-teal-900/50 p-6 rounded-lg border border-teal-700 hover:border-gold-400/50 transition-colors">
              <h4 className="text-lg font-bold text-gold-400 mb-3 uppercase font-serif border-b border-teal-700 pb-2">Weekend Program</h4>
              <div className="text-neutral-300 space-y-1">
                <p className="font-medium text-white">Saturday</p>
                <p>8:00 AM – 12:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Job Related Information Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20 bg-teal-800 p-6 md:p-12 rounded-lg shadow-sm border-t-4 border-gold-400"
        >
          <h3 className="text-2xl font-serif text-white mb-6">Job Related Information</h3>
          <p className="text-neutral-300 font-sans leading-relaxed mb-6">
            This qualification prepares individuals to integrate the healthcare sector with the professionalization of Massage Therapy and Nail Care.
          </p>
          
          <h4 className="text-lg font-bold text-gold-400 mb-4 font-serif">Key Skills & Opportunities:</h4>
          <ul className="grid md:grid-cols-2 gap-4 text-neutral-300 font-sans">
            {[
              "Apply basics of Anatomy and Physiology to MTN",
              "Provide Safety and Health for Massage Therapy and Nail Care",
              "Provide manicures and pedicures services",
              "Perform aromatherapy",
              "Carry out Swedish massage",
              "Perform sports and deep tissues massage",
              "Integrate the workplace while ensuring regulation compliance"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <Check size={18} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Employability Skills and Life Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-white mb-4">Employability Skills and Life Skills</h3>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Through the generic modules, individuals with this qualification have acquired the life and employability skills to meet the following industry or enterprise requirements:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Communication",
                items: [
                  "Documenting technical work in plain English",
                  "Questioning, clarifying and evaluating information",
                  "Reading and reviewing a range of reports",
                  "Using specialist language in written and oral communication",
                  "Writing in a range of styles to suit different audiences"
                ],
                color: "bg-gold-500"
              },
              {
                title: "Teamwork",
                items: [
                  "Working collaboratively with team members",
                  "Referring matters to nominated person as required",
                  "Working as a member of a team and applying knowledge of one's own role to achieve team goals",
                  "Working with diverse persons and groups"
                ],
                color: "bg-teal-950"
              },
              {
                title: "Health, hygiene and safety",
                items: [
                  "Know the standard health and safety practices and regulations in the workplace",
                  "Maintain hygiene and personal cleanliness",
                  "Identify unsafe situations",
                  "Prevent communicable diseases",
                  "Rwanda environmental protection, practices rules and regulations"
                ],
                color: "bg-gold-500"
              },
              {
                title: "Problem solving",
                items: [
                  "Checking reports for accuracy and correcting errors as required",
                  "Collecting, comparing and contrasting data for informed decision making",
                  "Using problem solving tools and techniques to solve reconciling problems"
                ],
                color: "bg-teal-950"
              },
              {
                title: "Computer skills",
                items: [
                  "Operate a computer",
                  "Use word processing applications in the production of workplace or personal documents",
                  "Create and use spreadsheets and charts through the use of spreadsheet software",
                  "Send, receive and manage electronic mail (email), as well as to collaborate online using chat rooms, intranets and instant messaging"
                ],
                color: "bg-teal-950"
              },
              {
                title: "Integration of the workplace",
                items: [
                  "Know how to apply for and present themselves for employment",
                  "Demonstrate behaviour and attitudes that are appropriate for the workplace",
                  "Take initiative and responsibility for own work and know how to work under and respect supervision",
                  "Know the rights and responsibilities of workers and employers and explore ways to exercise rights in the workplace"
                ],
                color: "bg-gold-500"
              },
              {
                title: "Initiative and enterprise",
                items: [
                  "Contributing to solutions to workplace challenges",
                  "Designing reports to effectively present workplace information"
                ],
                color: "bg-teal-950"
              },
              {
                title: "Self-management",
                items: [
                  "Managing own time and priorities and dealing with contingencies",
                  "Operating within industry standards, legislation and regulations",
                  "Taking responsibility as required by work role and ensuring all organisational policies and procedures are followed"
                ],
                color: "bg-gold-500"
              },
              {
                title: "Learning",
                items: [
                  "Acquiring and applying knowledge of products, services and organisational policies and procedures",
                  "Learning new ideas, skills and techniques",
                  "Seeking appropriate technical help with stand-alone and online computerised systems"
                ],
                color: "bg-teal-950"
              }
            ].map((skill, idx) => (
              <div key={idx} className="bg-teal-800 rounded-lg shadow-md overflow-hidden border border-teal-700 flex flex-col">
                <div className={`${skill.color} py-3 px-6`}>
                  <h4 className="text-white font-serif font-bold text-center tracking-wide">{skill.title}</h4>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-neutral-300">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0 ${skill.color === 'bg-gold-500' ? 'bg-gold-500' : 'bg-teal-950'}`}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <CourseCard
            title="Massage Therapy"
            description="Master the art of therapeutic touch with our comprehensive massage therapy program. From anatomy to advanced techniques, become a certified expert."
            image="/massage therapy.png"
            features={[
              "Swedish & Deep Tissue Techniques",
              "Aromatherapy",
              "Anatomy & Physiology",
              "Client Care & Ethics",
              "Hands-on Clinical Practice"
            ]}
            delay={0.2}
          />
          <CourseCard
            title="Manicure & Pedicure"
            description="Learn professional nail care, hygiene standards, and artistic techniques. Build a career in high-end salons and spas."
            image="/pedicure & manicure.png"
            features={[
              "Nail Anatomy & Health",
              "Spa Manicure & Pedicure Procedures",
              "Gel Application & Nail Art",
              "Hygiene & Sterilization Standards"
            ]}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
