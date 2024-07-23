import React from 'react';
import '../styles/AboutFounder.css';
import { Link } from 'react-router-dom';
import ceo from '../assets/images/ceo.png';
import vp from '../assets/images/vp.png';

function AboutFounder() {
    return (
        <>
            {/* <!-- about-founder-section-start --> */}
            <div className="about-founder-area">
                <div className="container">
                    <div className="founder-section">
                        {/* <!-- founder-section-title-start --> */}
                        <div className="founder-section-title">
                            <div className="founder-title">
                                <h1>Crafting an Exciting Future <br/><span className="colored-title">Journey Fueled by Innovation</span></h1>
                            </div>
                            <div className="founder-content">
                                <p>Embracing Tomorrow, Today <br/>Discover how our commitment to innovation is shaping a brighter
                                    future for all.
                                </p>
                            </div>
                        </div>
                        {/* <!-- founder-section-title-end --> */}
                        {/* <!-- founder-img-start --> */}
                        <div className="founder-img-area">
                            {/* <!-- img-1 --> */}
                            <div className="founder-img">
                                <div className="card">
                                    <div className='profile-img'>
                                        <img src={ceo} className="card-img-top" id='ceoImg' alt="" />
                                        <div className="top-meta">
                                            <span className="profile-tag">
                                                CEO & Founder
                                            </span>
                                        </div>
                                        <div className='img-hover-bg'></div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Daniel Moore</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur lanal incididunt ut labore
                                            et dolor aliqua.</p>
                                        <div className="card-icons">
                                            <Link to="#" className="social-icon">
                                                <i className="fa-brands fa-square-facebook"></i>
                                            </Link>
                                            <Link to="#" className="social-icon">
                                                <i className="fa-brands fa-square-twitter"></i>
                                            </Link>
                                            <Link to="#" className="social-icon">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- img-2 --> */}
                            <div className="founder-img">
                                <div className="card">
                                    <div className='profile-img'>
                                        <img src={vp} className="card-img-top" id='vpImg' alt="" />
                                        <div className="top-meta">
                                            <span className="profile-tag">
                                                VP of Product
                                            </span>
                                        </div>
                                        <div className='img-hover-bg'></div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Michael Wilson</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur lanal incididunt ut labore
                                            et dolor aliqua.</p>
                                        <div className="card-icons">
                                            <Link to="#" className="social-icon">
                                                <i className="fa-brands fa-square-facebook"></i>
                                            </Link>
                                            <Link to="#" className="social-icon">
                                                <i className="fa-brands fa-square-twitter"></i>
                                            </Link>
                                            <Link to="#" className="social-icon">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- founder-img-end --> */}
                    </div>
                </div>
            </div>
            {/* <!-- about-founder-section-end --> */}
        </>
    )
}

export default AboutFounder;
