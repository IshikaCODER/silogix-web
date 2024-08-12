import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import moment from 'moment';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import '../../styles/CareerJobs.css';
import '../../styles/CareerForm.css';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";

function truncateTitle(title, limit = 20) {
    const words = title.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    }
    return title;
}

function CareerJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [openForm, setOpenForm] = useState(false);
    const [file, setFile] = useState(null);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        skills: "",
        country: "",
        position: ""
    });
    const [errors, setErrors] = useState({});
    const jobsPerPage = 5;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("/api/jobportal/");
                setJobs(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the job data:", error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(jobs.length / jobsPerPage); i++) {
        pageNumbers.push(i);
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email is invalid";
        }
        if (!formData.skills) formErrors.skills = "Skills are required";
        if (!formData.country) formErrors.country = "Please select an option!";
        if (!file) formErrors.resume = "CV is required ";
        return formErrors;
    };



    // When a job is selected
    const handleJobSelection = (job) => {
        setSelectedJobId(job._id);
        console.log("Selected Job ID:", job._id);  // Log the selected Job ID
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {

            try {
                const formDataToSubmit = new FormData();
                formDataToSubmit.append("name", formData.name);
                formDataToSubmit.append("email", formData.email);
                formDataToSubmit.append("skills", formData.skills);
                formDataToSubmit.append("country", formData.country);
                formDataToSubmit.append("position", selectedJobId);
                formDataToSubmit.append("resume", file);  // Append file to FormData

                const response = await axios.post(
                    "https://silogix-backend.vercel.app/api/applicants",
                    formDataToSubmit, {
                    headers: {
                        'Content-Type': 'multipart/form-data'  // Set the correct content type
                    }
                }
                );

                // Log the response
                console.log(response);

                // console.log("Form submitted successfully", formData);

                if (
                    response.status === 201 &&
                    response.data.message === "Form submitted successfully"
                ) {
                    // Clear form data after successful submission
                    setFormData({
                        name: "",
                        email: "",
                        skills: "",
                        country: "",
                        // upload: ""
                    });
                    setFile(null); // Clear file input
                    console.log(resume);
                    Toastify({
                        text: "Form submitted successfully",
                        backgroundColor: "green",
                        className: "toastify-success",
                    }).showToast();
                } else {
                    throw new Error("Failed to submit form");
                }
            } catch (error) {
                // Log the error
                console.error(error);
                Toastify({
                    text: "Error submitting form. Please try again.",
                    backgroundColor: "red",
                    className: "toastify-error",
                }).showToast();
            }
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
                        {currentJobs.map((job) => (
                            <motion.div
                                className="col-lg-12"
                                key={job._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, ease: "easeIn" }}
                                onClick={() => handleJobSelection(job)} // Pass the job object here
                            >
                                <div className="find-jobs-card d-flex align-items-center">
                                    <div className="find-jobs-img col-xl-3 col-sm-4">
                                        <img className="w-75"
                                            src={job.image}
                                            alt={job.title || 'Job Image'} />
                                    </div>
                                    <div className="content col-xl-9">
                                        <ul className="content-list">
                                            <li className="time">
                                                {job.type}
                                            </li>
                                            <li className="list-two">
                                                <i className="fa-regular fa-clock"></i>
                                                {moment(job.deadline, 'DD-MM-YYYY HH:mm:ss').fromNow(true)}
                                            </li>
                                        </ul>
                                        <h3>
                                            {/* <Link to={job.link}>{job.post}</Link> */}
                                            {truncateTitle(job.title)}
                                        </h3>
                                        <ul className="content-list2">
                                            <li className="list-one">
                                                {job.company}
                                            </li>
                                        </ul>
                                        <ul className="content-list3">
                                            <li>
                                                <i className="fa-solid fa-briefcase"></i>
                                                Category : <b>{job.category.name}</b>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-location-dot"></i>
                                                Location : <b>{job.location}</b>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-clock"></i>
                                                Apply Before : <b>{job.deadline}</b>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="find-jobs-btn">
                                        <button className="default-btn theme-btn" id='applyBtn' onClick={handleOpenForm}>
                                            Apply Now<i class="fa-regular fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="pagination justify-content-center">
                            {pageNumbers.map(number => (
                                <motion.button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`page-link ${number === currentPage ? 'active' : ''}`}
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {number}
                                </motion.button>
                            ))}
                        </div>
                        {/* <!-- learn-more-btn-start--> */}
                        {/* <div className="col-lg-12 text-center mt-5">
                            <div className="browse-btn">
                                <a href="#">
                                    Load More Job Opportunity <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> */}
                        {/* <!-- learn-more-btn-end--> */}
                    </div>
                    {/* <!-- job-cards-end --> */}
                </div>
            </div>
            {/* <!-- jobs-section-start --> */}
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
                                <input type="hidden" name="position" value={selectedJobId} />
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
                                        <input
                                            type="text"
                                            id="skills"
                                            name="skills"
                                            placeholder="Skills *"
                                            value={formData.skills}
                                            onChange={handleInputChange}
                                        />
                                        {errors.skills && (
                                            <span className="error">{errors.skills}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled selected>Please Select your country</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="Canada">Canada</option>
                                            <option value="UK">UK</option>
                                        </select>
                                        {errors.country && (
                                            <span className="error">{errors.country}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <label for="resume">Upload CV*</label>
                                        <input
                                            type="file"
                                            id="resume"
                                            name="resume"
                                            // value={formData.upload}
                                            accept=".pdf,.doc,.docx,.jpg"
                                            onChange={onFileChange}
                                        />
                                        {errors.resume && (
                                            <span className="error">{errors.resume}</span>
                                        )}
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
            {/* <!-- pop-up-apply-form-start --> */}

        </>
    )
}


export default CareerJobs;
