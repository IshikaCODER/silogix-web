import React from 'react';
import Navbar from '../components/Navbar';
import TermsHero from '../components/TermsHero';
import TermsContent from '../components/TermsContent';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';

function Terms() {
  document.title = 'Terms & Conditions';
  return (
    <>
      <Navbar/>
      <TermsHero/>
      <TermsContent/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default Terms;
