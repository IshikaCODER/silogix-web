import React from "react";
import banner from "../assets/banners/blog-banner2.png";
import BlogContent from "../components/blog/BlogContent";
import SubSection from "../components/layout/SubSection";
import Banner from "../components/layout/Banner";

function BlogDescription() {
  document.title = "Blog Description";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Blog Title Page" },
  ];
  return (
    <>
      <Banner
        bannerImage={banner}
        title="Blog Title Page"
        breadcrumbs={breadcrumbs}
      />
      <BlogContent />
      <SubSection />
    </>
  );
}

export default BlogDescription;
