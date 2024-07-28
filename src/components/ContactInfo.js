import React from 'react';
import '../styles/ContactInfo.css';
import info1 from '../assets/images/info-1.png';
import info2 from '../assets/images/info-2.png';
import info3 from '../assets/images/info-3.png';

const contactData = [
    {
        iconSrc: info1,
        alt: "phone",
        title: "Give us a call",
        content1: "+91 8040998499",
        content2: "+91 8040998499"
    },
    {
        iconSrc: info2,
        alt: "mail",
        title: "Drop us a line",
        content1: "info@silogixnano.com",
        content2: "mail@silogixnano.com"
    },
    {
        iconSrc: info3,
        alt: "location",
        title: "Visit our office",
        content1: "Bengaluru, 560077, Karnataka, India",
        // content2: ""
    }
]

function ContactInfo() {
    return (
        <>
            {/* <!-- Contact Info Start --> */}
            <div className="contact-info-section section-padding-02">
                <div className="container">
                    {/* <!-- Contact Info Wrap Start --> */}
                    <div className="contact-info-wrap">
                        <div className="row">
                            {contactData.map((info, index) => (
                                <div className="col-lg-4 col-sm-6" key={index}>
                                    {/* <!--Single Contact Info Start --> */}
                                    <div className="single-contact-info text-center">
                                        <div className="info-icon">
                                            <img src={info.iconSrc} alt={info.alt} />
                                        </div>
                                        <div className="info-content">
                                            <h5 className="title">{info.title}</h5>
                                            <p>{info.content1}</p>
                                            <p>{info.content2}</p>
                                        </div>
                                    </div>
                                    {/* <!--Single Contact Info End --> */}
                                </div>
                            ))}
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
