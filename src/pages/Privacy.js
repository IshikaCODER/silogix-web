import React from "react";
import banner from "../assets/banners/privacy-banner.png";
import PrivacyContent from "../components/privacypolicy/PrivacyContent";
import SubSection from "../components/layout/SubSection";
import Banner from "../components/layout/Banner";

function Privacy() {
  document.title = "Privacy Policy";
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
