import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import banner from "../assets/banners/blog-banner2.png";
import BlogContent from "../components/blog/BlogContent";
import SubSection from "../components/layout/SubSection";
import Banner from "../components/layout/Banner";


function BlogDescription() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://silogix-backend.vercel.app/api/blogs/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the blog data:", error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };
 
    fetchBlog();
  }, [id]);


  if (loading) {
    return <div>Loading...</div>;
  }


  if (!blog) {
    return <div>Blog not found</div>;
  }


  document.title = blog.title;


  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Blog Title Page" },
  ];


  return (
    <>
      <Banner
        bannerImage={banner}
        title={blog.title}
        breadcrumbs={breadcrumbs}
      />
      <BlogContent
        title={blog.title}
        author={blog.author}
        content={blog.content}
      />
      <SubSection />
    </>
  );
}


export default BlogDescription;
