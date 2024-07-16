import React from 'react';
import Navbar from '../components/Navbar';
import ServiceHero from '../components/ServiceHero';
import ServiceCards from '../components/ServiceCards';
import ServiceContent from '../components/ServiceContent';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';

function Service() {
  document.title = 'Services';
  return (
    <>
      <Navbar/>
      <ServiceHero/>
      <ServiceCards/>
      <ServiceContent/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default Service;
