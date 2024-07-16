import React from 'react'
import '../styles/AboutGoals.css'
import img1 from '../assets/img1.jpg';

function AboutGoals() {
  return (
    <>
      {/* <!-- about-mission-vission-area-start --> */}
      <div className="about-goal-area">
          <div className="container">
              <div className="about-goal-section">
                  {/* <!-- mission-section-start --> */}
                  <div className="mission-section goal-section">
                      <div className="mission-img col-xl-6 col-lg-6">
                          <img src={img1} className="goal-img" alt=""/>
                      </div>
                      <div className="goal-content col-xl-6 col-lg-6">
                          <h2 className="mission-title">Our Mission</h2>
                          <p>To fuel progress through innovative semiconductor design, empowering partners and 
                              driving positive change.</p>
                      </div>
                  </div>
                  {/* <!-- mission-section-end --> */}
                  {/* <!-- vision-section-start --> */}
                  <div className="vision-section goal-section">
                      <div className="goal-content col-xl-6 col-lg-6">
                          <h2 className="vision-title">Our Vision</h2>
                          <p>To lead in providing cutting-edge chips, powering transformative breakthroughs for a more 
                              connected, efficient, and sustainable world.</p>
                      </div>
                      <div className="vision-img col-xl-6 col-lg-6">
                          <img src={img1} className="goal-img" alt=""/>
                      </div>
                  </div>
                  {/* <!-- vision-section-end --> */}
              </div>
          </div>
      </div>
      {/* <!-- about-mission-vission-area-start --> */}
    </>
  )
}

export default AboutGoals;
