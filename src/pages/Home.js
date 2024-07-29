import React from 'react';
import HomeHero from '../components/homepage/HomeHero';
import InsightSection from '../components/homepage/InsightSection';
import AboutSection from '../components/homepage/AboutSection';
import ServiceSection from '../components/homepage/ServiceSection';
import RDSection from '../components/homepage/RDSection';
import BlogSection from '../components/homepage/BlogSection';
import SubSection from '../components/layout/SubSection';

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
