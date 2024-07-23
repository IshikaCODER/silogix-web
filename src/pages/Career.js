import React from "react";
import banner from "../assets/banners/career-banner.png";
import CareerSteps from "../components/CareerSteps";
import CareerJobs from "../components/CareerJobs";
import SubSection from "../components/SubSection";
import Banner from "../components/Banner";

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
