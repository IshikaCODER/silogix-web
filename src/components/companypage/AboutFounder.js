import React from 'react';
import '../../styles/AboutFounder.css';
import { Link } from 'react-router-dom';
import ceo from '../../assets/images/ceo.png';
import vp from '../../assets/images/vp.png';

const images = [
    { id: 1, src: ceo, alt_title: "ceo" },
    { id: 2, src: vp, alt_title: "vp" },
];

const founderData = [
    {
        imgSrc: "",
        alt: "",
        imgId: "ceoImg",
        tag: "CEO & Founder",
        name: "Daniel Moore",
        content: "Lorem ipsum dolor sit amet, consectetur lanal incididunt ut labore et dolor aliqua."
    },
    {
        imgSrc: "",
        alt: "",
        imgId: "vpImg",
        tag: "VP of Product",
        name: "Michael Wilson",
        content: "Lorem ipsum dolor sit amet, consectetur lanal incididunt ut labore et dolor aliqua."
    }
];

founderData.forEach((founder, index) => {
    if (index < images.length) {
        founder.imgSrc = images[index].src;
        founder.alt = images[index].alt_title;
    }
});

const iconClass = [
    {
        class: "fa-brands fa-square-facebook"
    },
    {
        class: "fa-brands fa-square-twitter"
    },
    {
        class: "fa-brands fa-linkedin"
    }
];

function AboutFounder() {
    return (
        <>
            {/* <!-- about-founder-section-start --> */}
            <div className="about-founder-area">
                <div className="container">
                    <div className="founder-section">
                        {/* <!-- founder-section-title-start --> */}
                        <div className="founder-section-title">
                            <div className="founder-title">
                                <h1>Crafting an Exciting Future <br /><span className="colored-title">Journey Fueled by Innovation</span></h1>
                            </div>
                            <div className="founder-content">
                                <p>Embracing Tomorrow, Today <br />Discover how our commitment to innovation is shaping a brighter
                                    future for all.
                                </p>
                            </div>
                        </div>
                        {/* <!-- founder-section-title-end --> */}
                        {/* <!-- founder-img-start --> */}
                        <div className="founder-img-area">
                            {/* <!-- img-1 --> */}
                            {founderData.map((founder, index) => (
                                <div className="founder-img" key={index}>
                                    <div className="card">
                                        <div className='profile-img'>
                                            <img src={founder.imgSrc} className="card-img-top" id={founder.imgId} alt={founder.alt_title || 'Founder Image'} />
                                            <div className="top-meta">
                                                <span className="profile-tag">
                                                    {founder.tag}
                                                </span>
                                            </div>
                                            <div className='img-hover-bg'></div>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{founder.name}</h4>
                                            <p className="card-text">{founder.content}</p>
                                            <div className="card-icons">
                                                {iconClass.map((icon, index) => (
                                                    <Link to="#" className="social-icon" key={index}>
                                                        <i className={icon.class}></i>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <!-- founder-img-end --> */}
                    </div>
                </div>
            </div>
            {/* <!-- about-founder-section-end --> */}
        </>
    )
}

export default AboutFounder;
