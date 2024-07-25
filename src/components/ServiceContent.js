import React from 'react';
import '../styles/ServiceContent.css';
import img from '../assets/img11-1.jpg';

function ServiceContent() {
  return (
    <>
      {/* <!-- services-skill-area-start --> */}
        <div className="services-skill-area">
            <div className="services-skill-wrapper">
                {/* <!-- services-skill-section-start --> */}
                <div className="services-skill-section">
                    {/* <!-- services-skill-section-content-start --> */}
                    <div className="services-skill-section-content">
                        <div className="service-skill-title">
                            <div className="skill-maintitle">
                                <h5 className="section-subtitle">Our Skills</h5>
                                <h2>Stay Up, Stay Running & Protected</h2>
                            </div>
                            <div className="skill-title-para">
                                <p>Fortune 500 enterprises and established brands trust our services.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- services-skill-section-content-end --> */}
                    <div className="skill-img-area">
                        <img src={img} alt=""/>
                    </div>
                </div>
                {/* <!-- services-skill-section-end --> */}
            </div>
        </div>
        {/* <!-- services-skill-area-end --> */}
    </>
  )
}

export default ServiceContent;
