import React from 'react';
import Navbar from '../components/Navbar';
import BlogHero from '../components/BlogHero';
import BlogCards from '../components/BlogCards';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';

function Blog() {
  document.title = 'Blogs';
  return (
    <>
      <Navbar/>
      <BlogHero/>
      <BlogCards/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default Blog;
