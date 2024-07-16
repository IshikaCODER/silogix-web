import React from 'react'
import '../styles/Section1.css'
import img1 from '../assets/images/about1.jpeg';
import img2 from '../assets/images/about2.png';
import img3 from '../assets/images/about3.jpg';
import img4 from '../assets/images/about4.jpeg';

function AboutSection() {
  return (
    <>
      {/* <!-- about-section-start --> */}
      <section className="about-section-area">
          <div className="custom-container">
              <div className="about-section custom-row align-items-center">
                  {/* <!-- about-section-content-start --> */}
                  <div className="section-content">
                      {/* <!-- about-section-title-start --> */}
                      <div className="section-title">
                          <h1 className="title">Who we are</h1>
                          <div className="title-underline"></div>
                      </div>
                      {/* <!-- about-section-title-end --> */}
                      <div className="section-para">
                          <p>We are at the forefront of innovation in semiconductor chip design. At Silogix, 
                            our mission is to empower technological advancements across industries by creating 
                            cutting-edge semiconductor chips that push the boundaries of what's possible. Our 
                            expert team is dedicated to delivering high-performance, efficient, and reliable 
                            semiconductor solutions that drive progress in various industrial applications.</p>
                      </div>
                  </div>
                  {/* <!-- about-section-content-end --> */}
                  {/* <!-- about-section-img-start --> */}
                  <div className="section-img">
                      <div className="img-area">
                          <img src={img1} className="about-img" id="about-img-1" alt=""/>
                          <img src={img2} className="about-img" id="about-img-2" alt=""/>
                      </div>
                      <div className="img-area">
                          <img src={img3} className="about-img" id="about-img-3" alt=""/>
                          <img src={img4} className="about-img" id="about-img-4" alt=""/>
                      </div>
                  </div>
                  {/* <!-- about-section-img-end --> */}
              </div>
          </div>
      </section>
      {/* <!-- about-section-end --> */}
    </>
  )
}

export default AboutSection;
