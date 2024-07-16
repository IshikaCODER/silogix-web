import React from 'react';
import Navbar from '../components/Navbar';
import BlogHero from '../components/BlogHero';
import BlogContent from '../components/BlogContent';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';

function Blog() {
  document.title = 'Blogs';
  return (
    <>
      <Navbar/>
      <BlogHero/>
      <BlogContent/>
      <SubSection/>
      <Footer/>
    </>
  )
}

export default Blog;
