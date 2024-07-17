import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CareerHero from '../components/CareerHero';
import CareerSteps from '../components/CareerSteps';
import CareerJobs from '../components/CareerJobs';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';

function Career() {
  return (
    <>
      <Navbar/>
      <CareerHero/>
      <CareerSteps/>
      <CareerJobs/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default Career;
