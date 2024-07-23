import React from "react";
import banner from "../assets/banners/blog-banner2.png";
import BlogContent from "../components/BlogContent";
import SubSection from "../components/SubSection";
import Banner from "../components/Banner";

function BlogDescription() {
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
