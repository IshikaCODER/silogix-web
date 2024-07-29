import React from 'react';
import '../../styles/InsightSection.css';
import { Link } from 'react-router-dom';
import insight1 from '../../assets/images/insight1.png';
import insight2 from '../../assets/images/insight2.jpg';
import insight3 from '../../assets/images/insight3.webp';

function InsightSection() {
    return (
        <>
            {/* <!-- home-insight-area-start --> */}
            <div className="home-insight-area">
                <div className="container">
                    <div className="home-insight-section">
                        {/* <!-- insight-cards-section-start --> */}
                        <div className="insight-card-section">
                            <div className="insight-card-section-1">
                                <div className="card insight-card-1">
                                    <img src={insight1} className="card-img-top" id="cardImg1" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Compound Semiconductor</h5>
                                    </div>
                                </div>
                                <div className="card insight-card-2">
                                    <img src={insight3} className="card-img-top" id="cardImg2" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Wafer Probing and Testing</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="insight-card-section-2">
                                <div className="card insight-card-3">
                                    <img src={insight2} className="card-img-top" id="cardImg3" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Advanced Wafer Production Process</h5>
                                    </div>
                                </div>
                                <Link to="#" className="theme-btn">
                                    Show More
                                </Link>
                            </div>
                        </div>
                        {/* <!-- insight-cards-section-end --> */}
                        {/* <!-- insight-title-start --> */}
                        <div className="insight-section-title">
                            <h2 className="insight-title">Insights</h2>
                            <div className="title-underline"></div>
                        </div>
                        {/* <!-- insight-title-end --> */}
                    </div>
                </div>
            </div>
            {/* <!-- home-insight-area-end --> */}
        </>
    )
}

export default InsightSection;
