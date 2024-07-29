import React from "react";
import banner from "../assets/banners/career-banner.png";
import CareerSteps from "../components/careerpage/CareerSteps";
import CareerJobs from "../components/careerpage/CareerJobs";
import SubSection from "../components/layout/SubSection";
import Banner from "../components/layout/Banner";

function Career() {
  document.title = "Career";
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Careers" }];
  return (
    <>
      <Banner bannerImage={banner} title="Careers" breadcrumbs={breadcrumbs} />
      <CareerSteps />
      <CareerJobs />
      <SubSection />
    </>
  );
}

export default Career;
