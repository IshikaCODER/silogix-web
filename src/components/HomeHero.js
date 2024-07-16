import React from 'react';
import '../styles/HomeHero.css';
import { Link } from 'react-router-dom';
import bg1 from '../assets/banners/home-hero.png';
import logo from '../assets/images/logo.png';
import team1 from '../assets/banners/small-img-1.png';
import team2 from '../assets/banners/small-img-2.png';
import team3 from '../assets/banners/small-img-3.png';
import team4 from '../assets/banners/small-img-4.png';
import icon2 from '../assets/images/icon2.svg';



function HomeHero() {
  return (
    <>
        {/* <!-- Hero-section-start --> */}
        <section className="hero-empowerment-area">
            <div className="custom-container">
                <div className="custom-row align-items-center">
                    {/* <!-- hero-section-left-start --> */}
                    <div className="hero-empowerment-left-content">
                        {/* <h5 className="section-subtitle">EMPOWERMENT</h5> */}
                        <h1 className="section-title fade-in">Empowering Future Technology, One Chip at a Time</h1>
                        <p>Silogix Nanosystems designs cutting-edge semiconductor chips, powering innovation across 
                            industries and shaping the technological landscape.</p>
                        <div className="btns-group d-flex">
                            <Link to="#" className="theme-btn">Get Quotation</Link>
                            <Link to="/contact" className="theme-btn2">Let's Talk
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- hero-section-left-end --> */}
                    {/* <!-- hero-section-right-start --> */}
                    <div className="hero-empowerment-right-content">
                        <div className="top-content">
                            <img className="desktop fade-in" src={bg1} alt="banner" />
                            <img className="mobile" src={bg1} alt="banner" />

                            <div className="experience-box simple-shadow bounce-in">
                                <div className="experience-body d-flex align-items-center">
                                    <img src={logo} alt="Icon" />

                                    <div className="experience-content d-flex align-items-center">
                                        <h1>+8</h1>
                                        <p>
                                            Years
                                            <span>Experience</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- bottom-content-start --> */}
                        <div className="bottom-content d-flex">
                            <Link to="#" className="our-expert-team-box simple-shadow bounce-in delay-2">
                                <div className="our-expert-team-box-inner d-flex align-items-center">
                                    <div className="imgs imgs1 d-flex align-items-center">
                                        <img src={team1} alt="team" />
                                        <img src={team2} alt="team" />
                                        <img src={team3} alt="team" />
                                        <img src={team4} alt="team" />
                                    </div>
                                    <p>
                                        Meet
                                        <span> Our Experts</span>
                                    </p>
                                </div>
                            </Link>

                            <div className="google-reviews-box simple-shadow bounce-in delay-3">
                                <div className="left">
                                    <span>Verified by</span>
                                    <img src={icon2} alt="Google" />
                                </div>
                                <div className="right">
                                    <div className="stars d-flex align-items-center">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p>
                                        3245
                                        <span> Reviews</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- bottom-content-end --> */}
                    </div>
                    {/* <!-- hero-section-right-end --> */}
                </div>
            </div>
        </section>
        {/* <!-- Hero-section-end --> */}
    </>
  )
}

export default HomeHero;
