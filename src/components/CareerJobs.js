import React, { useState } from 'react';
import '../styles/CareerJobs.css';
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/logo.png';
import logo2 from '../assets/images/logo192.png';
import logo3 from '../assets/images/node.png';

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
    return (
        <>
            {/* <!-- jobs-section-start --> */}
            <div className="find-jobs-area pt-100 pb-70">
                <div className="container">
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
                                    <div className="find-jobs-img col-xl-3">
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
                                        <Link to={job.link} className="default-btn theme-btn" id='applyBtn'>
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
        </>
    )
}


export default CareerJobs;
