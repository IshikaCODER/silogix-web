import React from 'react';
import '../styles/CareerJobs.css';
import { Link } from 'react-router-dom';
// import logo1 from '../assets/images/logo.png';
// import logo2 from '../assets/images/logo192.png';
// import logo3 from '../assets/images/blog1.jpg';
// import logo4 from '../assets/images/blog2.jpg';
// import logo5 from '../assets/images/blog3.jpg';

// const images = [
//     { id: 1, src: logo1, title: 'logo1' },
//     { id: 2, src: logo2, title: 'logo2' },
//     { id: 3, src: logo1, title: 'logo3' },
//     { id: 4, src: logo2, title: 'logo4' },
//     { id: 5, src: logo5, title: 'logo5' }
// ]

const jobData = [
    {
        imgSrc: { src: "", alt:"Senior Associate Engineer-System - Job Image"},
        time: " 3 weeks ago",
        link: "#",
        post: "Senior Associate Engineer-System",
        company: "Fonepay Payment Service Ltd.",
        category: "IT/Tech Support/System Support",
        location: "Fonepay Payment Service Ltd., Pulchowk, Lalitpur-3, Lalitpur, Nepal",
        date: "2024-07-15"
    },
    {
        imgSrc: { src: "", alt:"QA Engineer - Job Image"},
        time: " 1 month ago",
        link: "#",
        post: "QA Engineer",
        company: "FoneNxt Pvt. Ltd.",
        category: "Quality Assurance (QA)",
        location: "F1Soft Tower, Pulchowk, Lalitpur",
        date: "2024-07-18"
    },
    {
        imgSrc: { src: "", alt:"Senior Software Engineer - JAVA (FoneInvest) - Job Image"},
        time: " 1 month ago",
        link: "#",
        post: "Senior Software Engineer - JAVA (FoneInvest)",
        company: "F1Soft International Pvt. Ltd.",
        category: "Software Development",
        location: "F1Soft Tower, Pulchowk, Lalitpur",
        date: "2024-07-18"
    },
    {
        imgSrc: { src: "", alt:"Software Engineer - JAVA - Job Image"},
        time: " 1 month ago",
        link: "#",
        post: "Software Engineer - JAVA",
        company: "F1Soft International Pvt. Ltd.",
        category: "Software Development",
        location: "F1Soft Tower, Pulchowk, Lalitpur",
        date: "2024-07-18"
    },
    {
        imgSrc: { src: "", alt:"Senior Software Engineer - Java - Job Image"},
        time: " 1 month ago",
        link: "#",
        post: "Senior Software Engineer - Java",
        company: "F1Soft International Pvt. Ltd.",
        category: "Software Engineer",
        location: "F1Soft Tower, Pulchowk, Lalitpur",
        date: "2024-07-18"
    }
]

// jobData.forEach((job, index) => {
//     job.imgSrc = images[index].src;
//   });

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
                            <div className="find-jobs-img">
                                <img className="w-75"
                                    src={job.imgSrc.src}
                                    alt={job.imgSrc.alt} />
                            </div>

                            <div className="content">
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
                                <Link to={job.link} className="default-btn theme-btn">
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
