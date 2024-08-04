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


function BlogCards() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;


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


  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="blog-section">
        <div className="container">
          <div className="blog-wrap">
            <div className="row">
              {currentBlogs.map((blog) => (
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
            <div className="pagination justify-content-center">
              {pageNumbers.map(number => (
                <motion.button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`page-link ${number === currentPage ? 'active' : ''}`}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {number}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default BlogCards;
