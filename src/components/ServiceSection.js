import React from 'react';
import '../styles/ServiceSection.css';
import { Link } from 'react-router-dom';
import service1 from '../assets/images/s1.jpeg';
import service2 from '../assets/images/s2.jpg';
import service3 from '../assets/images/s3.jpg';
import service4 from '../assets/images/s4.jpeg';
import service5 from '../assets/images/s5.jpeg';

function ServiceSection() {
  return (
    <>
      {/* <!-- home-service-area-start --> */}
        <div className="home-service-area">
            <div className="container">
                <div className="service-section">
                    {/* <!-- service-section-title-start --> */}
                    <div className="service-section-title">
                        <h2 className="service-title">Services</h2>
                        {/* <div className="title-underline"></div> */}
                        <p className="service-subtitle">Tailored semiconductor design solutions to fuel your innovation.</p>
                    </div>
                    {/* <!-- service-section-title-end --> */}
                    {/* <!-- service-card-section-start --> */}
                    <div className="service-card-section">
                        {/* <!-- service-card-start --> */}
                        <div className="card service-card-1">
                            <img src={service1} className="card-img-top" id='serviceImg1' alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Custom Layout Design
                                </h5>
                                <p className="card-text">
                                    Our custom layout design service delivers optimized, performance-driven chip layouts.
                                </p>
                                <Link to="/service" className="service-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- service-card-end --> */}
                        {/* <!-- service-card-start --> */}
                        <div className="card service-card-2">
                            <img src={service2} className="card-img-top" id='serviceImg2' alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Standard Cell Design
                                </h5>
                                <p className="card-text">
                                    We provide a complete standard cell design & characterization solution for wide variety foundries
                                </p>
                                <Link to="/service" className="service-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- service-card-end --> */}
                        {/* <!-- service-card-start --> */}
                        <div className="card service-card-3">
                            <img src={service3} className="card-img-top" id='serviceImg3' alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Memory Compiler Design
                                </h5>
                                <p className="card-text">
                                    Accelerating your success with expert Foundation IP solutions and a first-pass silicon track record.
                                </p>
                                <Link to="/service" className="service-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- service-card-end --> */}
                        {/* <!-- service-card-start --> */}
                        <div className="card service-card-4">
                            <img src={service4} className="card-img-top" id='serviceImg4' alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    IO Lib. Design Capabilities.
                                </h5>
                                <p className="card-text">
                                    We provide a complete IO Lib design & characterization solution for wide variety foundries.
                                </p>
                                <Link to="/service" className="service-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- service-card-end --> */}
                        {/* <!-- service-card-start --> */}
                        <div className="card service-card-5">
                            <img src={service5} className="card-img-top" id='serviceImg5' alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    EDA Automation & Development
                                </h5>
                                <p className="card-text">
                                    Algorithm, Scripting, Debugging and Automation Support.
                                </p>
                                <Link to="/service" className="service-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- service-card-end --> */}
                    </div>
                    {/* <!-- service-card-section-end --> */}
                </div>
            </div>
        </div>
        {/* <!-- home-service-area-end --> */}
    </>
  )
}

export default ServiceSection
