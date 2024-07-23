import React from 'react';
import HomeHero from '../components/HomeHero';
import InsightSection from '../components/InsightSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import RDSection from '../components/RDSection';
import BlogSection from '../components/BlogSection';
import SubSection from '../components/SubSection';

function Home() {
  document.title = 'Home';
  return (
    <>
      <HomeHero/>
      <InsightSection/>
      <AboutSection/>
      <RDSection/>
      <ServiceSection/>
      <BlogSection/>
      <SubSection/>
    </>
  )
}

export default Home;
