import React from 'react';
import '../styles/PageBanner.css';
import { Link } from 'react-router-dom';
import banner from '../assets/banners/about-banner.png';

function AboutHero() {
  return (
    <>
      {/* <!-- Page Banner Start --> */}
      <div className="page-banner-section flow" style={{backgroundImage: `url(${banner})`}}>
            <div className="container">
                <div className="page-banner-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- Page Banner Content Start --> */}
                            <div className="page-banner text-center">
                                <h2 className="title">About Us</h2>
                                <ul className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Company</li>
                                </ul>
                            </div>
                            {/* <!-- Page Banner Content End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Page Banner End --> */}
    </>
  )
}

export default AboutHero;
