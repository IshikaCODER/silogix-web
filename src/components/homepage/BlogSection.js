import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "../../styles/BlogSection.css";

function truncateTitle(title, limit = 20) {
  const words = title.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return title;
}

// const blogData = [
//   {
//     date: { day: "06", month: "Jul" },
//     author: "Oliver Smith",
//     comments: 0,
//     title: "Advanced Chip Technologies",
//     imgSrc: "https://i.ibb.co/XFdT7cc/blog1.jpg",
//     link: "/blogdescription"
//   },
//   {
//     date: { day: "08", month: "Jul" },
//     author: "Oliver Smith",
//     comments: 0,
//     title: "Breakthroughs in Chip Performance",
//     imgSrc: "https://i.ibb.co/StzkdLv/blog3.jpg",
//     link: "/blogdescription"
//   },
//   {
//     date: { day: "07", month: "Jul" },
//     author: "Oliver Smith",
//     comments: 0,
//     title: "Innovative Design Solutions",
//     imgSrc: "https://i.ibb.co/PjptMqk/technology-pictures.jpg",
//     link: "/blogdescription"
//   }
// ];


function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const homePageBlogs = blogs.slice(0, 3);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://silogix-backend.vercel.app/api/blogs/");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the blog data:", error);
        setLoading(false);
      }
    };


    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
              {homePageBlogs.map((blog) => (
                <motion.div
                  className="col-lg-4 col-md-6 mb-4"
                  key={blog._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                >
                  <div className="blog-card">
                    <div className="blog-image">
                      <Link to={`/blog/${blog._id}`}>
                        <img
                          src={blog.image}
                          alt={blog.title || 'Blog Image'}
                          className="img-fluid"
                        />
                      </Link>
                      <div className="top-meta">
                        <span className="date">
                          <span>{new Date(blog.createdAt).getDate()}</span>
                          {new Date(blog.createdAt).toLocaleString('default', { month: 'short' })}
                        </span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span>
                          <i className="fa-solid fa-user"></i>
                          <Link to={`/blog/${blog._id}`}>{blog.author}</Link>
                        </span>
                        <span>
                          <i className="fa-regular fa-comments"></i>
                          {blog.comments ? blog.comments.length : 0} Comments
                        </span>
                      </div>
                      <h3 className="title">
                        <Link to={`/blog/${blog._id}`}>
                          {truncateTitle(blog.title)}
                        </Link>
                      </h3>
                      <div className="blog-btn">
                        <Link to={`/blog/${blog._id}`} className="blog-btn-link">
                          Read Full
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
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


