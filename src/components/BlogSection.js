import React from "react";
import "../styles/BlogSection.css";
import { Link } from 'react-router-dom';
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const blogData = [
  {
    date: { day: "06", month: "Jul" },
    author: "Oliver Smith",
    comments: 0,
    title: "Advanced Chip Technologies",
    imgSrc: blog1,
    link: "/blogdescription"
  },
  {
    date: { day: "07", month: "Jul" },
    author: "Oliver Smith",
    comments: 0,
    title: "Innovative Design Solutions",
    imgSrc: blog2,
    link: "/blogdescription"
  },
  {
    date: { day: "08", month: "Jul" },
    author: "Oliver Smith",
    comments: 0,
    title: "Breakthroughs in Chip Performance",
    imgSrc: blog3,
    link: "/blogdescription"
  }
];


function BlogSection() {
  return (
    <>
      {/* blog-section-start */}
      <div className="blog-section">
        <div className="container">
          {/* blog-title */}
          <div className="blog-title text-center">
            <h4 className="sub-title">Latest Blog</h4>
            <h2 className="title">From the news room</h2>
          </div>
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
                          <Link to="/blogdescription">{blog.author}</Link>
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


export default BlogSection;


