import React from "react";
import banner from "../assets/banners/service-banner.png";
import ServiceCards from "../components/ServiceCards";
import ServiceContent from "../components/ServiceContent";
import SubSection from "../components/SubSection";
import Banner from "../components/Banner";

function Service() {
  document.title = "Services";
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Our Services" }];
  return (
    <>
      <Banner
        bannerImage={banner}
        title="Our Services"
        breadcrumbs={breadcrumbs}
      />
      <ServiceCards />
      <ServiceContent />
      <SubSection />
    </>
  );
}

export default Service;
