import React from 'react';
import '../styles/ServiceSection.css';
import { Link } from 'react-router-dom';
import service1 from '../assets/images/s1.jpeg';
import service2 from '../assets/images/s2.jpeg';
import service3 from '../assets/images/s3.jpg';
import service4 from '../assets/images/s4.jpeg';
import service5 from '../assets/images/s5.jpeg';

const cardData = [
    {
        cardId: "serviceCard1",
        imgSrc: service1,
        imgId: "serviceImg1",
        alt: "service1",
        title: "Custom Layout Design",
        content: "Our custom layout design service delivers optimized, performance-driven chip layouts."
    },
    {
        cardId: "serviceCard2",
        imgSrc: service2,
        imgId: "serviceImg2",
        alt: "service2",
        title: "Standard Cell Design",
        content: "We provide a complete standard cell design & characterization solution for wide variety foundries."
    },
    {
        cardId: "serviceCard3",
        imgSrc: service3,
        imgId: "serviceImg3",
        alt: "service3",
        title: "Memory Compiler Design",
        content: "Accelerating your success with expert Foundation IP solutions and a first-pass silicon track record."
    },
    {
        cardId: "serviceCard4",
        imgSrc: service4,
        imgId: "serviceImg4",
        alt: "service4",
        title: "IO Lib. Design Capabilities.",
        content: "We provide a complete IO Lib design & characterization solution for wide variety foundries."
    },
    {
        cardId: "serviceCard5",
        imgSrc: service5,
        imgId: "serviceImg5",
        alt: "service5",
        title: "EDA Automation & Development",
        content: "Algorithm, Scripting, Debugging and Automation Support."
    }
]

function ServiceSection() {
    return (
        <>
            {/* <!-- home-service-area-start --> */}
            <div className="home-service-area">
                <div className="custom-container">
                    <div className="service-section">
                        {/* <!-- service-section-title-start --> */}
                        <div className="service-section-title">
                            <h2 className="service-title">Services</h2>
                            {/* <div className="title-underline"></div> */}
                            <p className="service-subtitle">Tailored semiconductor design solutions to fuel your innovation.</p>
                        </div>
                        {/* <!-- service-section-title-end --> */}
                        {/* <!-- service-card-section-start --> */}
                        <div className="service-card-section">
                            {/* <!-- service-card-start --> */}
                            {cardData.map((card, index) => (
                                <div className="card" id={card.cardId} key={index}>
                                    <img src={card.imgSrc} className="card-img-top" id={card.imgId} alt={card.alt} />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {card.title}
                                        </h5>
                                        <p className="card-text">
                                            {card.content}
                                        </p>
                                        <Link to="/service" className="service-icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            {/* <!-- service-card-end --> */}
                        </div>
                        {/* <!-- service-card-section-end --> */}
                    </div>
                </div>
            </div>
            {/* <!-- home-service-area-end --> */}
        </>
    )
}

export default ServiceSection
