import React from 'react';
import '../styles/HighlightSection.css';
import { Link } from 'react-router-dom';
import img2 from '../assets/img2.jpg';

function HighlightSection() {
  return (
    <>
      <div className="highlights">
            <div className="box">
                <div className="box-1">
                    <div className="h1 card">
                        <img src={img2} className="card-img-top" alt="image"/>
                        <div className="card-body">
                          <p className="card-text">First Highlight</p>
                        </div>
                    </div>
                    <div className="h2 card">
                        <img src={img2} className="card-img-top" alt="image"/>
                        <div className="card-body">
                          <p className="card-text">Second Highlight</p>
                        </div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="h3 card">
                        <img src={img2} className="card-img-top" alt="image"/>
                        <div className="card-body">
                          <p className="card-text">Third Highlight</p>
                        </div>
                    </div>
                    <button className="btn-wrapper">
                      <Link to="/" className="btn-link">Show more</Link>
                    </button>
                </div>
            </div>  
            <h1 className="white-heading heading">Highlights</h1>          
        </div>
    </>
  )
}

export default HighlightSection;
