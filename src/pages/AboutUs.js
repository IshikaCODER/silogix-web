import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutGoals from '../components/AboutGoals';
import AboutQuote from '../components/AboutQuote';
import AboutValues from '../components/AboutValues';
import AboutNumbers from '../components/AboutNumbers';
import AboutFounder from '../components/AboutFounder';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';


function AboutUs() {
  document.title = 'About Us';
  return (
    <>
      <Navbar/>
      <AboutHero/>
      <AboutGoals/>
      <AboutQuote/>
      <AboutValues/>
      <AboutNumbers/>
      <AboutFounder/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default AboutUs;
