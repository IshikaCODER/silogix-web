import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import Mission from '../components/Mission';
import Quote from '../components/Quote';
import AboutValues from '../components/AboutValues';
import VideoSection from '../components/VideoSection';
import AboutFounder from '../components/AboutFounder';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';


function AboutUs() {
  document.title = 'About Us';
  return (
    <>
      <Navbar/>
      <AboutHero/>
      <Mission/>
      <Quote/>
      <AboutValues/>
      <VideoSection/>
      <AboutFounder/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default AboutUs;
