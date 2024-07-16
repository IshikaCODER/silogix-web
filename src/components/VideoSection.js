import React from 'react'
import '../styles/VideoSection.css'
import videoUrl from '../assets/Video.mp4';

function VideoSection() {
  return (
    <>
      <div id="numbers">
            <div className="num-card right-border">
                <h1>10+</h1>
                <p>Years Experience</p>
            </div>
            <div className="num-card right-border">
                <h1>99%</h1>
                <p>Accuracy Rate</p>
            </div>
            <div className="num-card right-border">
                <h1>500+</h1>
                <p>Positive Reviews</p>
            </div>
            <div className="num-card">
                <h1>700+</h1>
                <p>Trusted Partners</p>
            </div>
        </div>

        <div id="video-container">
            <h1>Take A Vital Look At <br/>Our Working</h1>
            <video src={videoUrl} controls loop muted id="video-1"></video>
        </div>

    </>
  )
}

export default VideoSection;
