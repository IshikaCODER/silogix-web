import React from 'react';
import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import InsightSection from '../components/InsightSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import RDSection from '../components/RDSection';
import BlogSection from '../components/BlogSection';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';

function Home() {
  document.title = 'Home';
  return (
    <>
      <Navbar/>
      <HomeHero/>
      <InsightSection/>
      <AboutSection/>
      <RDSection/>
      <ServiceSection/>
      <BlogSection/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default Home;
