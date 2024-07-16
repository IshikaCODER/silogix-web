import React from 'react';
import '../styles/AboutFounder.css';
import { Link } from 'react-router-dom';
import ceo from '../assets/images/blog3.jpg';
import vp from '../assets/images/blog4.jpg';

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
                            <h1>Crafting an Exciting Future Journey Fueled by Innovation</h1>
                        </div>
                        <div className="founder-content">
                            <p>Embracing Tomorrow, Today Discover how our commitment to innovation is shaping a brighter
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
                                <img src={ceo} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
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
                                <img src={vp} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
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
