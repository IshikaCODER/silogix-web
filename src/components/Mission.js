import React from 'react'
import '../styles/Mission.css'
import img1 from '../assets/img1.jpg';

function Mission() {
  return (
    <div>
      <div className="main-box">
            <div className="sub-box up">
                <img src={img1} alt="image" className="img-box" id="img1"/>
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>To fuel progress through innovative semiconductor design, empowering partners and 
                        driving positive change.</p>
                </div>
            </div>
            <div className="sub-box down">
                <div className="content">
                    <h2>Our Vision</h2>
                    <p>To lead in providing cutting-edge chips, powering transformative breakthroughs for a more 
                        connected, efficient, and sustainable world.</p>
                </div>
                <img src={img1} alt="image" className="img-box" id="img2"/>
            </div>
        </div>
    </div>
  )
}

export default Mission;
