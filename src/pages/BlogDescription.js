import React from 'react'
import Navbar from '../components/Navbar';
import BlogHero2 from '../components/BlogHero2';
import BlogContent from '../components/BlogContent';
import SubSection from '../components/SubSection';
import Footer from '../components/Footer';

function BlogDescription() {
    document.title = 'Blog Description';
    return (
        <>
            <Navbar />
            <BlogHero2 />
            <BlogContent />
            <SubSection />
            <Footer />
        </>
    )
}

export default BlogDescription;
