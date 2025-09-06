import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
