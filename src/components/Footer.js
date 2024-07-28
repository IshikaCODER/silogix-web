import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* <!-- footer-start --> */}
      <footer>
        <div className="section footer-section">
          <div className="container">
            <div className="footer-wrap">
              <div className="row">
                {/* <!-- col-1 --> */}
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-about">
                    <Link
                      to="/"
                      className="footer-logo"
                      onClick={handleScrollToTop}
                    >
                      <img src={logo} alt="" id="logo" />
                      SiLogix
                    </Link>
                    <p>
                      Accelerate innovation with world-class tech teams We'll
                      match you to an entire remote team of incredible freelance
                      talent.
                    </p>
                    <div className="footer-socialmedia">
                      <ul className="social-media d-flex">
                        <li
                          className="socialmedia-icon"
                          onClick={handleScrollToTop}
                        >
                          <Link to="/">
                            <i className="fa-brands fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li className="socialmedia-icon">
                          <Link to="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li className="socialmedia-icon">
                          <Link
                            to="https://www.linkedin.com/company/silogixnano/about/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- col-2 --> */}
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-col">
                    <h4 className="footer-col-title">Useful Links</h4>
                    <div className="col-link">
                      <ul className="link" onClick={handleScrollToTop}>
                        <li>
                          <Link to="/terms">Terms & Conditions</Link>
                        </li>
                        <li>
                          <Link to="/company">About Company</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/faqs">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- col-3 --> */}
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-col">
                    <h4 className="footer-col-title">Our Services</h4>
                    <div className="col-link">
                      <ul className="link" onClick={handleScrollToTop}>
                        <li>
                          <Link to="/service">Memory Compiler Design</Link>
                        </li>
                        <li>
                          <Link to="/service">Std. Cell Design</Link>
                        </li>
                        <li>
                          <Link to="/service">IO Lib. Design</Link>
                        </li>
                        <li>
                          <Link to="/service">Custom Layout Design</Link>
                        </li>
                        <li>
                          <Link to="/service">EDA Automation</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- col-4 --> */}
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-col">
                    <h4 className="footer-col-title">Contact Information</h4>
                    <div className="col-info">
                      <ul>
                        <li className="d-flex">
                          <div className="info-icon">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <div className="info-text">+91 8040998499</div>
                        </li>
                        <li className="d-flex">
                          <div className="info-icon">
                            <i className="fa-solid fa-envelope"></i>
                          </div>
                          <div className="info-text">info@silogixnano.com</div>
                        </li>
                        <li className="d-flex">
                          <div className="info-icon">
                            <i className="fa-solid fa-location-dot"></i>
                          </div>
                          <div className="info-text">
                            Bengaluru, 560077, Karnataka, India
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer-copyright --> */}
          <div className="footer-copyright">
            <div className="container">
              <div className="footer-copyright-wrap">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="copyright-text text-center">
                      <p>&copy; Copyrights 2024 Silogix All rights reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer-ends -->   */}
    </>
  );
}

export default Footer;
