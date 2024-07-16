import React from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <>
        {/* <!-- Contact Start --> */}
        <div className="section contact-section contact-section-02 contact-section-03 section-padding-02">
            <div className="container">
                {/* <!-- Contact Wrap Start --> */}
                <div className="contact-wrap">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* <!-- Contact Form Start --> */}
                            <div className="contact-form">
                                <div className="contact-form-wrap">
                                    <div className="heading-wrap text-center">
                                        <span className="sub-title"> request a quote</span>
                                        <h3 className="title">How May We Help You!</h3>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* <!-- Single Form Start --> */}
                                                <div className="single-form">
                                                    <input type="text" placeholder="Name *"/>
                                                </div>
                                                {/* <!-- Single Form End --> */}
                                            </div>
                                            <div className="col-sm-6">
                                                {/* <!-- Single Form Start --> */}
                                                <div className="single-form">
                                                    <input type="email" placeholder="Email *"/>
                                                </div>
                                                {/* <!-- Single Form End --> */}
                                            </div>
                                            <div className="col-sm-12">
                                                {/* <!-- Single Form Start --> */}
                                                <div className="single-form">
                                                    <input type="text" placeholder="Subject *"/>
                                                </div>
                                                {/* <!-- Single Form End --> */}
                                            </div>
                                            <div className="col-sm-12">
                                                {/* <!-- Single Form Start --> */}
                                                <div className="single-form">
                                                    <textarea placeholder="Write A Message"></textarea>
                                                </div>
                                                {/* <!-- Single Form End --> */}
                                            </div>
                                            <div className="col-sm-12">
                                                {/* <!--  Single Form Start --> */}
                                                <div className="form-btn">
                                                    <button className="btn theme-btn" type="submit">Send Message</button>
                                                </div>
                                                {/* <!--  Single Form End --> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- Contact Form End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Contact Wrap End --> */}
            </div>
        </div>
        {/* <!-- Contact End --> */}

        {/* <!-- Contact Map Start --> */}
        <div className="section contact-map-section">
            <div className="contact-map-wrap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5356849996506!2d77.6243469753733!3d13.065200212818608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae194869d21979%3A0xa7bcaef0b5048b08!2sPrakruthi%20Akshara%20Apartment!5e0!3m2!1sen!2snp!4v1720715170431!5m2!1sen!2snp" 
                scrolling="no" marginheight="0" marginwidth="0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe> 
                {/* <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=New%20York%20University%20&t=m&z=10&output=embed&iwloc=near" title="Bengaluru" aria-label="Bengaluru" frameborder="0"></iframe> */}
            </div>
        </div>
        {/* <!-- Contact Map End --> */}
    </>
  )
}

export default ContactForm;
