import React from "react";
import "../../styles/BlogSection.css";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog5 from "../../assets/images/blog5.jpg";
import blog6 from "../../assets/images/blog6.jpg";
import blog7 from "../../assets/images/blog7.png";
import blog8 from "../../assets/images/blog8.jpg";
import blog9 from "../../assets/images/blog9.jpg";
import blog10 from "../../assets/images/blog10.jpg";
import blog11 from "../../assets/images/blog11.jpg";
import blog12 from "../../assets/images/blog12.jpg";

const images = [
  { id: 1, src: blog1, alt_title: "blog1" },
  { id: 2, src: blog2, alt_title: "blog2" },
  { id: 3, src: blog3, alt_title: "blog3" },
  { id: 4, src: blog4, alt_title: "blog4" },
  { id: 5, src: blog5, alt_title: "blog5" },
  { id: 6, src: blog6, alt_title: "blog6" },
  { id: 7, src: blog7, alt_title: "blog7" },
  { id: 8, src: blog8, alt_title: "blog8" },
  { id: 9, src: blog9, alt_title: "blog9" },
  { id: 10, src: blog10, alt_title: "blog10" },
  { id: 11, src: blog11, alt_title: "blog11" },
  { id: 12, src: blog12, alt_title: "blog12" },
];

const blogData = [
  { date: { day: "06", month: "Jul" }, author: "Oliver Smith", comments: 0, title: "Advanced Chip Technologies", imgSrc: "", link: "/blogdescription" },
  { date: { day: "07", month: "Jul" }, author: "Oliver Smith", comments: 0, title: "Innovative Design Solutions", imgSrc: "", link: "/blogdescription" },
  { date: { day: "08", month: "Jul" }, author: "Oliver Smith", comments: 0, title: "Breakthroughs in Chip Performance", imgSrc: "", link: "/blogdescription" },
  { date: { day: "09", month: "Jul" }, author: "Noah Wright", comments: 0, title: "Pioneering Power Efficiency", imgSrc: "", link: "/blogdescription" },
  { date: { day: "10", month: "Jul" }, author: "Noah Wright", comments: 0, title: "Wearable Tech Integration", imgSrc: "", link: "/blogdescription" },
  { date: { day: "11", month: "Jul" }, author: "Noah Wright", comments: 0, title: "Cutting-Edge Memory Solutions", imgSrc: "", link: "/blogdescription" },
  { date: { day: "12", month: "Jul" }, author: "Emily Walsh", comments: 0, title: "High-Speed Connectivity Chips", imgSrc: "", link: "/blogdescription" },
  { date: { day: "13", month: "Jul" }, author: "Emily Walsh", comments: 0, title: "Automotive Semiconductor Solutions", imgSrc: "", link: "/blogdescription" },
  { date: { day: "14", month: "Jul" }, author: "Emily Walsh", comments: 0, title: "High-Performance Computing", imgSrc: "", link: "/blogdescription" },
  { date: { day: "15", month: "Jul" }, author: "Lauren Evans", comments: 0, title: "Quantum Computing Innovations", imgSrc: "", link: "/blogdescription" },
  { date: { day: "16", month: "Jul" }, author: "Lauren Evans", comments: 0, title: "IoT and Edge Computing Chips", imgSrc: "", link: "/blogdescription" },
  { date: { day: "17", month: "Jul" }, author: "Lauren Evans", comments: 0, title: "Security and Encryption Technologies", imgSrc: "", link: "/blogdescription" },
];

// Assign images to blogData
blogData.forEach((blog, index) => {
  if (index < images.length) {
    blog.imgSrc = images[index].src;
  }
});

// For limiting the words
function truncateTitle(title, limit = 20) {
  const words = title.split(' ');
  if (words.length > limit) {
    const truncated = words.slice(0, limit).join(' ') + '...';
    console.log(`Original: ${title}, Truncated: ${truncated}`); // Debugging
    return truncated;
  }
  return title;
}


function BlogCards() {
  return (
    <>
      {/* Blog Section Start */}
      <div className="blog-section">
        <div className="container">
          {/* Blog Cards */}
          <div className="blog-wrap">
            <div className="row">
              {blogData.map((blog, index) => (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <div className="blog-card">
                    <div className="blog-image">
                      <Link to={blog.link}>
                        <img src={blog.imgSrc} alt={blog.alt_title || 'Blog Image'} className="img-fluid" />
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
                        <Link to={blog.link}>{truncateTitle(blog.title)}</Link>
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
      {/* Blog Section End */}
    </>
  );
}

export default BlogCards;
