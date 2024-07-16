import React from 'react'
import '../styles/ServiceCards.css'

function ServiceCards() {
  return (
    <>
      <div className="center">
            <h1>We Provide Awesome Services</h1>
            <p>At Silogix Nanosystems, we are dedicated to delivering exceptional services that drive innovation 
                and excellence in the semiconductor industry. Our commitment to innovation, excellence, and 
                collaboration ensures that you receive top-notch services that propel your business forward and 
                help you achieve your technological goals.</p>
        </div>

        <div id="service-section">
            <div className="service-cards">
                <div className="icon-circle">
                    <i className="fa-solid fa-memory"></i>
                </div>
                <h6>Memory Compiler Design</h6>
            </div>
            <div className="service-cards">
                <div className="icon-circle">
                    <i className="fa-solid fa-table-cells"></i>
                </div>
                <h6>Standard Cell Design</h6>
            </div>
            <div className="service-cards">
                <div className="icon-circle">
                    <i className="fa-solid fa-bookmark"></i>
                </div>
                <h6>IO Lib. Design </h6>
            </div>
            <div className="service-cards">
                <div className="icon-circle">
                    <i className="fa-solid fa-layer-group"></i>
                </div>
                <h6>Custom Layout Design</h6>
            </div>
            <div className="service-cards">
                <div className="icon-circle c5">
                    <i className="fa-brands fa-connectdevelop"></i>
                </div>
                <h6>EDA Automation & Development</h6>
            </div>
        </div>

    </>
  )
}

export default ServiceCards;
