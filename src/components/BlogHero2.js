import React from 'react';
import '../styles/PageBanner.css';
import { Link } from 'react-router-dom';
import banner from '../assets/banners/blog-banner2.png';

function BlogHero2() {
  return (
    <>
      {/* <!-- Page Banner Start --> */}
      <div className="page-banner-section" id='blog-hero-2' style={{backgroundImage: `url(${banner})`}}>
            <div className="container">
                <div className="page-banner-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- Page Banner Content Start --> */}
                            <div className="page-banner text-center">
                                <h2 className="title">Blog Description</h2>
                                <ul className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">6 Jul</li>
                                    <li className="breadcrumb-item active" aria-current="page">Blog Description</li>
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

export default BlogHero2
