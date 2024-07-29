import React from "react";
import banner from "../assets/banners/blog-banner.png";
import BlogCards from "../components/blog/BlogCards";
import SubSection from "../components/layout/SubSection";
import Banner from "../components/layout/Banner";

function Blog() {
  document.title = "Blog";
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Blogs" }];
  return (
    <>
      <Banner bannerImage={banner} title="Blogs" breadcrumbs={breadcrumbs} />
      <BlogCards />
      <SubSection />
    </>
  );
}

export default Blog;
