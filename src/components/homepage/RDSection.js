import React from 'react'
import '../../styles/Section1.css'
import img1 from '../../assets/images/rd1.jpg';
import img2 from '../../assets/images/rd2.jpeg';
import img3 from '../../assets/images/rd3.jpg';


function RDSection() {
    return (
        <>
            {/* <!-- research-section-start --> */}
            <section className="research-section-area">
                <div className="custom-container">
                    <div className="research-section custom-row align-items-center">
                        {/* <!-- research-section-img-start --> */}
                        <div className="section-img">
                            <div className="rd-img-area">
                                <img src={img1} className="rd-img" id="rdImg1" alt="img1" />
                            </div>
                            <div className="rd-img-area">
                                <img src={img2} className="rd-img" id="rdImg2" alt="img2" />
                                <img src={img3} className="rd-img" id="rdImg3" alt="img3" />
                            </div>
                        </div>
                        {/* <!-- research-section-img-end --> */}
                        {/* <!-- research-section-content-start --> */}
                        <div className="section-content">
                            {/* <!-- research-section-title-start --> */}
                            <div className="section-title">
                                <h1 className="title">Research & Development</h1>
                                <div className="title-underline"></div>
                            </div>
                            {/* <!-- research-section-title-end --> */}
                            <div className="section-para">
                                <p>With a commitment to excellence and a passion for innovation, we continuously invest in research
                                    and development to stay ahead in a rapidly evolving technological landscape. Our dedicated team of
                                    researchers and engineers relentlessly explores new frontiers, harnessing cutting-edge tools and
                                    methodologies to develop chips that redefine industry standards and address evolving market demands. </p>
                            </div>
                        </div>
                        {/* <!-- research-section-content-end --> */}
                    </div>
                </div>
            </section>
            {/* <!-- research-section-end --> */}
        </>
    )
}

export default RDSection;
