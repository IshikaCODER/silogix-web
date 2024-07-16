import React from "react";
import "../styles/BlogSection.css";
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/bl2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import blog4 from '../assets/images/blog4.jpg';
import blog5 from '../assets/images/blog5.jpg';
import blog6 from '../assets/images/blog6.jpg';
import blog7 from '../assets/images/blog7.png';
import blog8 from '../assets/images/blog8.jpg';
import blog9 from '../assets/images/blog9.jpg';
import blog10 from '../assets/images/blog10.jpg';
import blog11 from '../assets/images/blog11.jpg';
import blog12 from '../assets/images/blog12.jpg';

const images = [
  { id: 1, src: blog1, title: 'blog1' },
  { id: 2, src: blog2, title: 'blog2' },
  { id: 3, src: blog3, title: 'blog3' },
  { id: 4, src: blog4, title: 'blog4' },
  { id: 5, src: blog5, title: 'blog5' },
  { id: 6, src: blog6, title: 'blog6' },
  { id: 7, src: blog7, title: 'blog7' },
  { id: 8, src: blog8, title: 'blog8' },
  { id: 9, src: blog9, title: 'blog9' },
  { id: 10, src: blog10, title: 'blog10' },
  { id: 11, src: blog11, title: 'blog11' },
  { id: 12, src: blog12, title: 'blog12' },
];

const blogData = [
  {
    date: { day: "06", month: "Jul" },
    author: "Oliver Smith",
    comments: 0,
    title: "Advanced Chip Technologies",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "07", month: "Jul" },
    author: "Oliver Smith",
    comments: 0,
    title: "Innovative Design Solutions",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "08", month: "Jul" },
    author: "Oliver Smith",
    comments: 0,
    title: "Breakthroughs in Chip Performance",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "09", month: "Jul" },
    author: "Noah Wright",
    comments: 0,
    title: "Pioneering Power Efficiency",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "10", month: "Jul" },
    author: "Noah Wright",
    comments: 0,
    title: "Wearable Tech Integration",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "11", month: "Jul" },
    author: "Noah Wright",
    comments: 0,
    title: "Cutting-Edge Memory Solutions",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "12", month: "Jul" },
    author: "Emily Walsh",
    comments: 0,
    title: "High-Speed Connectivity Chips",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "13", month: "Jul" },
    author: "Emily Walsh",
    comments: 0,
    title: "Automotive Semiconductor Solutions",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "14", month: "Jul" },
    author: "Emily Walsh",
    comments: 0,
    title: "High-Performance Computing",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "15", month: "Jul" },
    author: "Lauren Evans",
    comments: 0,
    title: "Quantum Computing Innovations",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "16", month: "Jul" },
    author: "Lauren Evans",
    comments: 0,
    title: "IoT and Edge Computing Chips",
    imgSrc: "",
    link: "#"
  },
  {
    date: { day: "17", month: "Jul" },
    author: "Lauren Evans",
    comments: 0,
    title: "Security and Encryption Technologies",
    imgSrc: "",
    link: "#"
  }
];

blogData.forEach((blog, index) => {
  blog.imgSrc = images[index].src;
});

function BlogContent() {
  return (
    <>
      {/* blog-section-start */}
      <div className="blog-section">
        <div className="container">
          {/* blog-title */}
          {/* <div className="blog-title text-center">
            <h4 className="sub-title">Latest Blog</h4>
            <h2 className="title">From the news room</h2>
          </div> */}
          {/* blog-cards */}
          <div className="blog-wrap">
            <div className="row">
              {blogData.map((blog, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="blog-card">
                    <div className="blog-image">
                      <Link to={blog.link}>
                        <img src={blog.imgSrc} alt="" />
                      </Link>
                      <div className="top-meta">
                        <span className="date">
                          <span>{blog.date.day}</span>
                          {blog.date.month}
                        </span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span>
                          <i className="fa-solid fa-user"></i>
                          <Link to="#">{blog.author}</Link>
                        </span>
                        <span>
                          <i className="fa-regular fa-comments"></i>
                          {blog.comments} Comments
                        </span>
                      </div>
                      <h3 className="title">
                        <Link to={blog.link}>{blog.title}</Link>
                      </h3>
                      <div className="blog-btn">
                        <Link to={blog.link} className="blog-btn-link">
                          Read Full
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* blog-section-end */}
    </>
  );
}


export default BlogContent;


