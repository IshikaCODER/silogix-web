import React from 'react';
import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';

function Contact() {
  document.title = 'Contact Us';
  return (
    <>
      <Navbar/>
      <ContactHero/>
      <ContactInfo/>
      <ContactForm/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default Contact;
