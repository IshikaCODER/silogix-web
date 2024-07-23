import React from "react";
import banner from "../assets/banners/about-banner.png";
import AboutGoals from "../components/AboutGoals";
import AboutQuote from "../components/AboutQuote";
import AboutValues from "../components/AboutValues";
import AboutNumbers from "../components/AboutNumbers";
import AboutFounder from "../components/AboutFounder";
import SubSection from "../components/SubSection";
import Banner from "../components/Banner";

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
