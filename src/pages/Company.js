import React from "react";
import banner from "../assets/banners/about-banner.png";
import AboutGoals from "../components/companypage/AboutGoals";
import AboutQuote from "../components/companypage/AboutQuote";
import AboutValues from "../components/companypage/AboutValues";
import AboutNumbers from "../components/companypage/AboutNumbers";
import AboutFounder from "../components/companypage/AboutFounder";
import SubSection from "../components/layout/SubSection";
import Banner from "../components/layout/Banner";

function Company() {
  document.title = "Company";
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Company" }];
  return (
    <>
      <Banner bannerImage={banner} title="About Us" breadcrumbs={breadcrumbs} />
      <AboutGoals />
      <AboutQuote />
      <AboutValues />
      <AboutNumbers />
      <AboutFounder />
      <SubSection />
    </>
  );
}

export default Company;
