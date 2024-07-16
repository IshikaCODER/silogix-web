import React from 'react';
import '../styles/ContactInfo.css';
import info1 from '../assets/images/info-1.png';
import info2 from '../assets/images/info-2.png';
import info3 from '../assets/images/info-3.png';

function ContactInfo() {
  return (
    <>
        {/* <!-- Contact Info Start --> */}
        <div className="contact-info-section section-padding-02">
            <div className="container">
                {/* <!-- Contact Info Wrap Start --> */}
                <div className="contact-info-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            {/* <!--Single Contact Info Start --> */}
                            <div className="single-contact-info text-center">
                                <div className="info-icon">
                                    <img src={info1} alt=""/>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Give us a call</h5>
                                    <p>+91 8040998499</p>
                                    <p>+91 8040998499</p>
                                </div>
                            </div>
                            {/* <!--Single Contact Info End --> */}
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            {/* <!--Single Contact Info Start --> */}
                            <div className="single-contact-info text-center">
                                <div className="info-icon">
                                    <img src={info2} alt=""/>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Drop us a line</h5>
                                    <p>info@silogixnano.com</p>
                                    <p>mail@silogixnano.com</p>
                                </div>
                            </div>
                            {/* <!--Single Contact Info End --> */}
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            {/* <!--Single Contact Info Start --> */}
                            <div className="single-contact-info text-center">
                                <div className="info-icon">
                                    <img src={info3} alt=""/>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Visit our office</h5>
                                    <p>Bengaluru, 560077, Karnataka, India</p>
                                </div>
                            </div>
                            {/* <!--Single Contact Info End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Contact Info Wrap End --> */}
            </div>
        </div>
        {/* <!-- Contact Info End --> */}
    </>
  )
}

export default ContactInfo;
