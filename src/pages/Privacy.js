import React from "react";
import banner from "../assets/banners/privacy-banner.png";
import PrivacyContent from "../components/PrivacyContent";
import SubSection from "../components/SubSection";
import Banner from "../components/Banner";

function Privacy() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Policy Policy" },
  ];
  return (
    <>
    {/* Banner Components */}
      <Banner
        bannerImage={banner}
        title="Privacy Policy"
        breadcrumbs={breadcrumbs}
      />
      <PrivacyContent />
      <SubSection />
    </>
  );
}

export default Privacy;
