import React from 'react'
import '../../styles/ServiceCards.css'
import service1 from '../../assets/images/s1.jpeg';
import service2 from '../../assets/images/s2.jpeg';
import service3 from '../../assets/images/s3.jpg';
import service4 from '../../assets/images/s4.jpeg';
import service5 from '../../assets/images/s5.jpeg';

const images = [
    { id: 1, src: service1, alt_title: "img1" },
    { id: 2, src: service2, alt_title: "img2" },
    { id: 3, src: service3, alt_title: "img3" },
    { id: 4, src: service4, alt_title: "img4" },
    { id: 5, src: service5, alt_title: "img5" },
    { id: 6, src: service5, alt_title: "img5" }
];

const cardData = [
    {
        id: "serviceCard1",
        imgSrc: "",
        iconClass: "fa-solid fa-gear card-icon-top",
        cardTitle: "Memory Compiler",
        cardText: "Our design services: SRAM, ROM, Reg. File, DPRAM, 2PRAM & Special ROM."
    },
    {
        id: "serviceCard2",
        imgSrc:  "",
        iconClass: "fa-solid fa-gear card-icon-top",
        cardTitle: "Standard Cell Design",
        cardText: " Services: UHD, HD, HP, Low Leakage, Voltage Scaling, and Back Gate Biasing."
    },
    {
        id: "serviceCard3",
        imgSrc: "",
        iconClass: "fa-solid fa-gear card-icon-top",
        cardTitle: "IO Lib. Design",
        cardText: "We ensures compatibility & optimization across various manufacturing processes."
    },
    {
        id: "serviceCard4",
        imgSrc: "",
        iconClass: "fa-solid fa-gear card-icon-top",
        cardTitle: "Custom Layout Design",
        cardText: "With expertise in advanced nodes including 40nm, 28nm, 22nm, 16nm, 7nm, and 5nm."
    },
    {
        id: "serviceCard5",
        imgSrc: "",
        iconClass: "fa-solid fa-gear card-icon-top",
        cardTitle: "EDA Automation & Dev.",
        cardText: "We expertise in PLs such as Python, Perl, Skill, C++, and Tcl/Tk."
    },
    {
        id: "serviceCard6",
        imgSrc: "",
        iconClass: "fa-solid fa-gear card-icon-top",
        cardTitle: "EDA Automation & Dev.",
        cardText: "We expertise in PLs such as Python, Perl, Skill, C++, and Tcl/Tk."
    }
];

// Assign images to cardData
cardData.forEach((card, index) => {
    if (index < images.length) {
      card.imgSrc = images[index].src;
    }
  });

function ServiceCards() {
    return (
        <>
            {/* <!-- services-area-start --> */}
            <div className="services-area">
                <div className="container">
                    {/* <!-- services-section-wrapper-start --> */}
                    <div className="services-section-wrapper">
                        {/* <!-- services-section-title-start --> */}
                        <div className="services-section-title">
                            <div className="services-maintitle">
                                <h5 className="section-subtitle">Our Services</h5>
                                <h2>What We Offer</h2>
                            </div>
                            <div className="services-title-para">
                                <p>We are dedicated to delivering exceptional services that drive innovation
                                    & excellence.</p>
                            </div>
                        </div>
                        {/* <!-- services-section-title-end --> */}
                        {/* <!-- services-card-section-start --> */}
                        <div className="service-cards-section">
                            {/* <!-- service-card-start --> */}
                            {cardData.map((card, index) => (
                            <div className="card" id={card.id}  key={index}>
                                <div className="slider-items">
                                    <img src={card.imgSrc} className="silder-img" alt />
                                    <button className="btn theme-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <i className={card.iconClass}></i>
                                <div className="card-body">
                                    <h5 className="card-title">{card.cardTitle}</h5>
                                    <p className="card-text">{card.cardText}</p>
                                </div>
                            </div>
                            ))}
                            {/* <!-- service-card-end --> */}
                        </div>
                        {/* <!-- services-card-section-end --> */}
                    </div>
                    {/* <!-- services-section-wrapper-end --> */}
                </div>
            </div>
            {/* <!-- service-card-area-end --> */}
        </>
    )
}

export default ServiceCards;
