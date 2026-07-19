import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import EntrepreneurialSkills from './components/EntrepreneurialSkills';
import SchoolPolicies from './components/SchoolPolicies';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ApplicationForm from './components/ApplicationForm';
import EnrollmentPopup from './components/EnrollmentPopup';

function App() {
  return (
    <div className="bg-teal-900 min-h-screen font-sans selection:bg-gold-400 selection:text-white text-neutral-300">
      <EnrollmentPopup />
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <EntrepreneurialSkills />
        <SchoolPolicies />
        <WhyChooseUs />
        <ApplicationForm />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
