import React, { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import '../styles/CareerJobs.css';
import '../styles/CareerForm.css';
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/logo.png';
import logo2 from '../assets/images/logo192.png';
import logo3 from '../assets/images/node.png';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";

const logos = [
    { id: 1, src: logo1, title: 'Silogix' },
    { id: 2, src: logo2, title: 'React' },
    { id: 3, src: logo1, title: 'Silogix' },
    { id: 4, src: logo3, title: 'nodejs' },
    { id: 5, src: logo1, title: 'Silogix' }
]

const jobData = [
    {
        imgSrc: { src: "", alt: "" },
        time: " 3 weeks ago",
        link: "#",
        post: "Senior Associate Engineer-System",
        company: "Silogix Nanosystems (OPC) Pvt. Ltd.",
        category: "IT/Tech Support/System Support",
        location: "RK Hedge Nagar, Bengaluru, 560077, Karnataka, India",
        date: "2024-07-15"
    },
    {
        imgSrc: { src: "", alt: "" },
        time: " 1 month ago",
        link: "#",
        post: "Senior Software Engineer - REACT",
        company: "Silogix Nanosystems (OPC) Pvt. Ltd.",
        category: "Software Development",
        location: "RK Hedge Nagar, Bengaluru, 560077, Karnataka, India",
        date: "2024-07-18"
    },
    {
        imgSrc: { src: "", alt: "" },
        time: " 1 month ago",
        link: "#",
        post: "QA Engineer",
        company: "Silogix Nanosystems (OPC) Pvt. Ltd.",
        category: "Quality Assurance (QA)",
        location: "RK Hedge Nagar, Bengaluru, 560077, Karnataka, India",
        date: "2024-07-18"
    },
    {
        imgSrc: { src: "", alt: "" },
        time: " 1 month ago",
        link: "#",
        post: "Software Engineer - Node JS",
        company: "Silogix Nanosystems (OPC) Pvt. Ltd.",
        category: "Software Development",
        location: "RK Hedge Nagar, Bengaluru, 560077, Karnataka, India",
        date: "2024-07-18"
    },
    {
        imgSrc: { src: "", alt: "" },
        time: " 1 month ago",
        link: "#",
        post: "Senior Software Engineer - Java",
        company: "Silogix Nanosystems (OPC) Pvt. Ltd.",
        category: "Software Engineer",
        location: "RK Hedge Nagar, Bengaluru, 560077, Karnataka, India",
        date: "2024-07-18"
    }
]

jobData.forEach((job, index) => {
    job.imgSrc.src = logos[index].src;
    job.imgSrc.alt = logos[index].title;
});

function CareerJobs() {
    const [openForm, setOpenForm] = useState(false);

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [errors, setErrors] = useState({});

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
            {/* <!-- jobs-section-start --> */}
            <div className="find-jobs-area pt-45 pb-70">
                <div className="container-md">
                    {/* <!-- career-title-start --> */}
                    <div className="career-section-title text-center">
                        <h2>Find <span className="fw-bold text-f1">Your Dream Job</span></h2>
                        <p className="m-auto">31 jobs available.</p>
                    </div>
                    {/* <!-- career-title-end --> */}
                    {/* <!-- job-cards-start --> */}
                    <div className="row pt-45">
                        {/* <!-- job-card-1 --> */}
                        {jobData.map((job, index) => (
                            <div className="col-lg-12" key={index}>
                                <div className="find-jobs-card d-flex align-items-center">
                                    <div className="find-jobs-img col-xl-3 col-sm-4">
                                        <img className="w-75"
                                            src={job.imgSrc.src}
                                            alt={job.imgSrc.alt} />
                                    </div>

                                    <div className="content col-xl-9">
                                        <ul className="content-list">
                                            <li className="time">Full Time</li>
                                            <li className="list-two"><i className="fa-regular fa-clock"></i>{job.time}</li>
                                        </ul>
                                        <h3>
                                            <Link to={job.link}>{job.post}</Link>
                                        </h3>
                                        <ul className="content-list2">
                                            <li className="list-one">{job.company}</li>
                                        </ul>

                                        <ul className="content-list3">
                                            <li><i className="fa-solid fa-briefcase"></i> Category : <b>{job.category}</b></li>
                                            <li><i className="fa-solid fa-location-dot"></i> Location : <b>{job.location}</b></li>
                                            <li><i className="fa-regular fa-clock"></i>Apply Before : <b>{job.date}</b></li>
                                        </ul>
                                    </div>

                                    <div className="find-jobs-btn">
                                        <Link to={job.link} className="default-btn theme-btn" id='applyBtn' onClick={handleOpenForm}>
                                            Apply Now<i class="fa-regular fa-paper-plane"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <!-- learn-more-btn-start--> */}
                        <div className="col-lg-12 text-center mt-5">
                            <div className="browse-btn">
                                <a href="#">
                                    Load More Job Opportunity <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- learn-more-btn-end--> */}
                    </div>
                    {/* <!-- job-cards-end --> */}
                </div>
            </div>
            {/* <!-- jobs-section-start --> */}

            {/* <!-- pop-up-apply-form-start --> */}
            <Dialog open={openForm} onClose={() => setOpenForm(false)} fullWidth>
                <div id="formPopup" className="form-popup">
                    <form onSubmit={handleSubmit} className="form-container">
                        {/* <!-- form-upper-part-start --> */}
                        <DialogTitle>
                            <div className="form-title">
                                <h2>Apply for this Role</h2>
                            </div>
                            <div className="close-icon" id='closeIcon' onClick={handleCloseForm}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </DialogTitle>
                        {/* <!-- form-upper-part-end --> */}
                        {/* <!-- form-fields-start --> */}
                        <DialogContent sx={{ paddingLeft: '10px', paddingRight: '10px', overflow: 'hidden' }}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="name"
                                            placeholder="Full Name *"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                        {errors.name && (
                                            <span className="error">{errors.name}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <input
                                            type="email"
                                            id="email"
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
                                        <select id="country" name="country">
                                            <option value="" disabled selected>Please Select your country</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="Canada">Canada</option>
                                            <option value="UK">UK</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <label for="cv">Upload CV*</label>
                                        <input
                                            type="file"
                                            id="cv"
                                            name="cv"
                                        />
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions sx={{ justifyContent: 'center' }}>
                            <div className="col-sm-12">
                                <div className="form-btn">
                                    <button type="submit" class="btn theme-btn">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </DialogActions>
                        {/* <!-- form-fields-start --> */}
                    </form>
                </div>
                {/* <!-- pop-up-apply-form-end --> */}
            </Dialog >
        </>
    )
}


export default CareerJobs;
