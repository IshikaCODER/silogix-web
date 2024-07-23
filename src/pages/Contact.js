import React, { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import banner from "../assets/banners/cta-banner.png";
import "../styles/ContactForm.css";
import ContactInfo from "../components/ContactInfo";
import SubSection from "../components/SubSection";
import Banner from "../components/Banner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Contact Us" }];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // No errors, submit form
      console.log("Form submitted successfully", formData);
      // Clear form data after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      Toastify({
        text: "Form submitted successfully",
        backgroundColor: "green",
        className: "toastify-success",
      }).showToast();
    } else {
      setErrors(formErrors);
      Toastify({
        text: "Please fill in all required fields",
        backgroundColor: "red",
        className: "toastify-error",
      }).showToast();
    }
  };

  return (
    <>
      <Banner
        bannerImage={banner}
        title="Contact Us"
        breadcrumbs={breadcrumbs}
      />
      <ContactInfo />
      <div className="section contact-section contact-section-02 contact-section-03 section-padding-02">
        <div className="container">
          <div className="contact-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-form">
                  <div className="contact-form-wrap">
                    <div className="heading-wrap text-center">
                      <span className="sub-title">request a quote</span>
                      <h3 className="title">How May We Help You!</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="single-form">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name *"
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                            {errors.name && (
                              <span className="error">{errors.name}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="single-form">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email *"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                            {errors.email && (
                              <span className="error">{errors.email}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-form">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject *"
                              value={formData.subject}
                              onChange={handleInputChange}
                            />
                            {errors.subject && (
                              <span className="error">{errors.subject}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-form">
                            <textarea
                              name="message"
                              placeholder="Write A Message"
                              value={formData.message}
                              onChange={handleInputChange}
                            ></textarea>
                            {errors.message && (
                              <span className="error">{errors.message}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-btn">
                            <button className="btn theme-btn" type="submit">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section contact-map-section">
        <div className="contact-map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5356849996506!2d77.6243469753733!3d13.065200212818608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae194869d21979%3A0xa7bcaef0b5048b08!2sPrakruthi%20Akshara%20Apartment!5e0!3m2!1sen!2snp!4v1720715170431!5m2!1sen!2snp"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <SubSection />
    </>
  );
}

export default Contact;
