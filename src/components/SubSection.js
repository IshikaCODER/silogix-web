import React from 'react';
import '../styles/SubSection.css';
import { Link } from 'react-router-dom';
import icon from '../assets/images/sub-icon.png';

function SubSection() {
  return (
    <>
      {/* <!-- subscription-section-start --> */}
        <div className="section subscribe-section">
            <div className="container">
                <div className="sub-section-wrap">
                    <div className="row">
                        <div className="col-xl-5 col-lg-8">
                            <div className="sub-content">
                                <div className="sub-icon">
                                    <img src={icon} className="sub-icon-img" alt/>
                                </div>
                                <p>Subscribe to our newsletters</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-4">
                            <div className="sub-input-area">
                                <div className="sub-input">
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Your Email' required/>
                                    <div className="sub-btn">
                                        <Link to="/" className="btn btn-blue theme-btn">Subscribe</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- subscription-section-end --> */}
    </>
  )
}

export default SubSection;

