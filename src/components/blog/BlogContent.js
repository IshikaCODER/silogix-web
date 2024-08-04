import React from 'react';
import "../../styles/BlogContent.css";


function BlogContent({ title, author, content }) {
  return (
    <div className="blog-content-area">
      <div className="container">
        <div className="blog-content-section">
          {/* <div className="blog-content-title">
            <h1 className="blog-title">{title}</h1>
            <p className="blog-subtitle">
              By <span className="colored-title">{author}</span>
            </p>
          </div> */}
          <div className="blog-description">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default BlogContent;