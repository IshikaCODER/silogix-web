import React from 'react';
import Navbar from '../components/Navbar';
import PrivacyHero from '../components/PrivacyHero';
import PrivacyContent from '../components/PrivacyContent';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer'

function Privacy() {
    document.title = 'Privacy Policy';
  return (
    <>
      <Navbar/>
      <PrivacyHero/>
      <PrivacyContent/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default Privacy;





