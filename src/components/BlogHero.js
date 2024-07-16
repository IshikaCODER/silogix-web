import React from 'react';
import '../styles/PageBanner.css';
import { Link } from 'react-router-dom';
import banner from '../assets/banners/blog-banner.png';

function BlogHero() {
  return (
    <>
        {/* <!-- Page Banner Start --> */}
        <div className="page-banner-section" style={{backgroundImage: `url(${banner})`}}>
            <div className="container">
                <div className="page-banner-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- Page Banner Content Start --> */}
                            <div className="page-banner text-center">
                                <h2 className="title">Blogs</h2>
                                <ul className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
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

export default BlogHero;
