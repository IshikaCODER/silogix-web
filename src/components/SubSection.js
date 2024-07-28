import React, { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import '../styles/SubSection.css';
import { Link } from 'react-router-dom';
import icon from '../assets/images/sub-icon.png';

function SubSection() {
    const [formData, setFormData] = useState({
        email: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email is invalid";
        }
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // No errors, submit form
            console.log("Subscribed successfully", formData);
            // Clear form data after successful submission
            setFormData({
                email: ""
            });
            Toastify({
                text: "Subscribed successfully",
                backgroundColor: "green",
                className: "toastify-success",
            }).showToast();
        } else {
            setErrors(formErrors);
            Toastify({
                text: "Please fill your email id",
                backgroundColor: "red",
                className: "toastify-error",
            }).showToast();
        }
    };

    return (
        <>
            {/* <!-- subscription-section-start --> */}
            <div className="section subscribe-section">
                <div className="custom-container">
                    <div className="sub-section-wrap">
                        <div className="row">
                            <div className="col-xl-5 col-lg-8">
                                <div className="sub-content">
                                    <div className="sub-icon">
                                        <img src={icon} className="sub-icon-img" alt />
                                    </div>
                                    <p>Subscribe to our newsletters</p>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-4">
                                <div className="sub-input-area">
                                    <form onSubmit={handleSubmit}>
                                        <div className="sub-input">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder='Email*'
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                            {errors.email && (
                                                <span className="error">{errors.email}</span>
                                            )}
                                            <div className="sub-btn">
                                                <button className="btn btn-blue theme-btn">Subscribe</button>
                                            </div>
                                        </div>
                                    </form>
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

