import React from 'react';
import '../styles/PageBanner.css';
import { Link } from 'react-router-dom';

function Banner({ bannerImage, title, breadcrumbs }) {
  return (
    <>
      {/* Page Banner Start */}
      <div className="page-banner-section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="container">
          <div className="page-banner-wrap">
            <div className="row">
              <div className="col-lg-12">
                {/* Page Banner Content Start */}
                <div className="page-banner text-center">
                  <h2 className="title">{title}</h2>
                  <ul className="breadcrumb justify-content-center">
                    {breadcrumbs.map((breadcrumb, index) => (
                      <li key={index} className="breadcrumb-item">
                        {breadcrumb.link ? (
                          <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
                        ) : (
                          <span className="active" aria-current="page">{breadcrumb.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Page Banner Content End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}
    </>
  );
}

export default Banner;
