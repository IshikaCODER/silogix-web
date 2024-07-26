import React from 'react'
import '../styles/ServiceCards.css'
import img1 from '../assets/img11-1.jpg';
import img2 from '../assets/img11-2.jpeg';
import img3 from '../assets/img11-3.jpg';
import img4 from '../assets/img11-4.jpg';
import img5 from '../assets/img11-5.webp';

// const cardData = [
//     {
//         id = "";
//         imgSrc = "";
//         iconClass = "";
//         cardTitle = "";
//         cardText = ""
//     }
// ]

function ServiceCards() {
  return (
    <>
      {/* <!-- services-area-start --> */}
        <div className="services-area">
            <div className="container">
                {/* <!-- services-section-wrapper-start --> */}
                <div className="services-section-wrapper">
                    {/* <!-- services-section-title-start --> */}
                    <div className="services-section-title">
                        <div className="services-maintitle col-sm-4">
                            <h5 className="section-subtitle">Our Services</h5>
                            <h2>What We Offer</h2>
                        </div>
                        <div className="services-title-para col-sm-8">
                            <p>We are dedicated to delivering exceptional services that drive innovation
                                & excellence in the semiconductor industry.</p>
                        </div>
                    </div>
                    {/* <!-- services-section-title-end --> */}
                    {/* <!-- services-card-section-start --> */}
                    <div className="service-cards-section">
                        {/* <!-- row-start --> */}
                        <div className="row">
                            {/* <!-- service-card-start --> */}
                            <div className="card" id="serviceCard1">
                                <div className="slider-items">
                                    <img src={img1} className="silder-img" alt/>
                                    <button className="btn theme-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <i className="fa-solid fa-gear card-icon-top"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Memory Compiler Design</h5>
                                    <p className="card-text">Our memory design services cover SRAM, ROM, Reg.
                                        File, DPRAM, 2PRAM & Special ROM.</p>
                                </div>
                            </div>
                            {/* <!-- service-card-end --> */}
                            {/* <!-- service-card-start --> */}
                            <div className="card" id="serviceCard2">
                                <div className="slider-items">
                                    <img src={img2} className="silder-img" alt/>
                                    <button className="btn theme-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <i className="fa-solid fa-gear card-icon-top"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Standard Cell Design</h5>
                                    <p className="card-text">We specialize in UHD, HD, HP, Low Leakage, Voltage Scaling, and
                                        Back Gate Biasing libraries.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- service-card-end --> */}
                            {/* <!-- service-card-start --> */}
                            <div className="card" id="serviceCard3">
                                <div className="slider-items">
                                    <img src={img3} className="silder-img" alt/>
                                    <button className="btn theme-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <i className="fa-solid fa-gear card-icon-top"></i>
                                <div className="card-body">
                                    <h5 className="card-title">IO Lib. Design </h5>
                                    <p className="card-text">We ensures compatibility & optimization across various
                                        manufacturing processes. </p>
                                </div>
                            </div>
                            {/* <!-- service-card-end --> */}
                        </div>
                        {/* <!-- row-end --> */}
                        {/* <!-- row-start --> */}
                        <div className="row">
                            {/* <!-- service-card-start --> */}
                            <div className="card" id="serviceCard4">
                                <div className="slider-items">
                                    <img src={img4} className="silder-img" alt/>
                                    <button className="btn theme-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <i className="fa-solid fa-gear card-icon-top"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Custom Layout Design</h5>
                                    <p className="card-text">With expertise in advanced nodes including 40nm, 28nm, 22nm, 16nm,
                                        7nm, and 5nm.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- service-card-end --> */}
                            {/* <!-- service-card-start --> */}
                            <div className="card" id="serviceCard5">
                                <div className="slider-items">
                                    <img src={img5} className="silder-img" alt/>
                                    <button className="btn theme-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <i className="fa-solid fa-gear card-icon-top"></i>
                                <div className="card-body">
                                    <h5 className="card-title">EDA Automation & Development</h5>
                                    <p className="card-text">We expertise in programming languages such as Python, Perl, Skill,
                                        C++, and Tcl/Tk.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- service-card-end --> */}
                            {/* <!-- service-card-start --> */}
                            <div className="card" id="serviceCard6">
                                <div className="slider-items">
                                    <img src={img5} className="silder-img" alt/>
                                    <button className="btn theme-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <i className="fa-solid fa-gear card-icon-top"></i>
                                <div className="card-body">
                                    <h5 className="card-title">EDA Automation & Development</h5>
                                    <p className="card-text">We expertise in programming languages such as Python, Perl, Skill,
                                        C++, and Tcl/Tk.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- service-card-end --> */}
                        </div>
                        {/* <!-- row-end --> */}
                    </div>
                    {/* <!-- services-card-section-end --> */}
                </div>
                {/* <!-- services-section-wrapper-end --> */}
            </div>
        </div>
        {/* <!-- service-card-area-end --> */}
    </>
  )
}

export default ServiceCards;
