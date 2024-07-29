import React from "react";
import banner from "../assets/banners/terms-banner.png";
import TermsContent from "../components/termsconditions/TermsContent";
import SubSection from "../components/layout/SubSection";
import Banner from "../components/layout/Banner";

function Terms() {
  document.title = "Terms & Conditions";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Terms & Conditions" },
  ];
  return (
    <>
      <Banner
        bannerImage={banner}
        title="Terms & Conditions"
        breadcrumbs={breadcrumbs}
      />
      <TermsContent />
      <SubSection />
    </>
  );
}

export default Terms;
