import React from 'react';
import '../styles/AboutValues.css';

function Values() {
  return (
    <>
      {/* <!-- about-values-section-start --> */}
        <div className="about-values-area">
            <div className="container">
                <div className="values-section">
                    {/* <!-- values-section-title-start --> */}
                    <div className="values-section-title">
                        <div className="values-title">
                            <h1>Driving Innovation with Values in <span className="colored-title">Our Startup World</span></h1>
                        </div>
                        <div className="values-content">
                            <p>We're driven by a set of core values that shape our culture, guide 
                                our decisions, and inspire our actions. These principles are the foundation 
                                of our organization, and they influence everything we do.
                            </p>
                        </div>
                    </div>
                    {/* <!-- values-section-title-end --> */}
                    {/* <!-- values-section-content-start --> */}
                    <div className="values-section-content">
                        {/* <!-- icon-box-start --> */}
                        <div className="row justify-content-center">
                            <div className="icon-box-wrapper col-xl-6 col-lg-6" id="icon-box-1">
                                <div className="icon-box">
                                    <div className="icon-color-style">
                                        <i class="fa-solid fa-lightbulb"></i>
                                    </div>
                                </div>
                                <div className="icon-body">
                                    <div className="icon-title">
                                        <h3>Innovation</h3>
                                    </div>
                                    <div className="icon-description">
                                        <p> We foster a culture of continuous innovation, constantly seeking new 
                                            ways to push technological boundaries and deliver groundbreaking solutions.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- icon-box-end --> */}
                            {/* <!-- icon-box-start --> */}
                            <div className="icon-box-wrapper col-xl-6 col-lg-6" id="icon-box-2">
                                <div className="icon-box">
                                    <div className="icon-color-style">
                                        <i className="fa-solid fa-puzzle-piece"></i>
                                    </div>
                                </div>
                                <div className="icon-body">
                                    <div className="icon-title">
                                        <h3>Excellence</h3>
                                    </div>
                                    <div className="icon-description">
                                        <p>We strive for excellence in everything we do, from chip design to 
                                            customer service, ensuring the highest standards of quality and performance.</p>
                                    </div>
                                </div>
                            </div>
                        {/* <!-- icon-box-end --> */}
                        </div>
                        {/* <!-- icon-box-start --> */}
                        <div className="row justify-content-center">
                            <div className="icon-box-wrapper col-xl-6 col-lg-6" id="icon-box-3">
                                <div className="icon-box">
                                    <div className="icon-color-style">
                                        <i class="fa-solid fa-handshake"></i>
                                    </div>
                                </div>
                                <div className="icon-body">
                                    <div className="icon-title">
                                        <h3>Collaboration</h3>
                                    </div>
                                    <div className="icon-description">
                                        <p>We believe in the power of collaboration, working closely with 
                                            our partners, clients, and stakeholders to achieve shared goals and drive 
                                            collective success.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- icon-box-end --> */}
                            {/* <!-- icon-box-start --> */}
                            <div className="icon-box-wrapper col-xl-6 col-lg-6" id="icon-box-4">
                                <div className="icon-box">
                                    <div className="icon-color-style">
                                        <i className="fa-solid fa-hand-holding-heart"></i>
                                    </div>
                                </div>
                                <div className="icon-body">
                                    <div className="icon-title">
                                        <h3>Integrity</h3>
                                    </div>
                                    <div className="icon-description">
                                        <p>We conduct business with honesty, transparency, and integrity, 
                                            upholding the highest ethical standards in all our interactions and decisions.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- icon-box-end --> */}
                        </div>
                    </div>
                    {/* <!-- values-section-content-end --> */}
                </div>
            </div>
        </div>
        {/* <!-- about-values-section-end --> */}
    </>
  )
}

export default Values;
