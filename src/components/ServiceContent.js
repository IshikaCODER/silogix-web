import React from 'react';
import '../styles/ServiceContent.css';
import { Link } from 'react-router-dom';
import img from '../assets/img11-1.jpg';
import ProgressBar from '../components/third-party/ProgressBar';

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
                                    <h2>Stay Up, Stay 
                                        <br/>Running & Protected</h2>
                                </div>
                                <div className="skill-title-para">
                                    <p>Fortune 500 enterprises and established brands trust our services.</p>
                                </div>
                            </div>
                            <section className="progress-section">
                                <ProgressBar label="EXPERIENCE" percentage={70} />
                                <ProgressBar label="DEVELOPMENT" percentage={80} />
                                <ProgressBar label="ENGINEERING" percentage={65} />
                                <ProgressBar label="ADVISORY" percentage={58} />
                            </section>
                        </div>
                        {/* <!-- services-skill-section-content-end --> */}
                        <div className="skill-img-area">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    {/* <!-- services-skill-section-end --> */}
                </div>
            </div>
            {/* <!-- services-skill-area-end --> */}


            {/* <!-- service-contact-area-start --> */}
            <div className="service-contact-area">
                <div className="service-contact-section">
                    <div className="container">
                        <div className="service-contact-title-section">
                            <div className="contact-subtitle">
                                <h4>First Impressions are Everything</h4>
                            </div>
                            <div className="contact-maintitle">
                                <h1>Transform Digital Brands</h1>
                            </div>
                        </div>
                    </div>
                    <div className="contact-btn-section">
                        <Link to="#" className="btn theme-btn">
                            Contact Us <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- service-contact-area-end --> */}
        </>
    )
}

export default ServiceContent;
