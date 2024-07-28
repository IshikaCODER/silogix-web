import React, { useEffect, useState } from 'react';
import '../styles/AboutNumbers.css';
import videoUrl from '../assets/Video.mp4';

function AboutNumbers() {
    const [numbers, setNumbers] = useState([
        { value: 0, target: 10, label: 'Years Experience' },
        { value: 0, target: 99, label: 'Accuracy Rate' },
        { value: 0, target: 500, label: 'Positive Reviews' },
        { value: 0, target: 700, label: 'Trusted Partners' },
    ]);

    useEffect(() => {
        const duration = 2000; // animation duration in ms
        const startTime = Date.now();
        const frameRate = 1000 / 60;

        function animate() {
            const currentTime = Date.now();
            const progress = (currentTime - startTime) / duration;
            numbers.forEach((number) => {
                const value = Math.min(number.target, Math.round(number.target * progress));
                setNumbers((prevNumbers) =>
                    prevNumbers.map((num) => {
                        if (num.label === number.label) {
                            return { ...num, value };
                        }
                        return num;
                    })
                );
            });
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    }, []);

    return (
        <>
            <div className="about-section-wrapper">
                <div className="about-number-area">
                    <div className="number-section">
                        {numbers.map((number) => (
                            <div key={number.label} className="num-card col-sm-3">
                                <h1>{number.value}+</h1>
                                <p>{number.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="video-section">
                    <h1 className="video-title">Take A Vital Look At <br /><span className="colored-title">Our Working</span></h1>
                    <video src={videoUrl} controls loop muted className="about-video"></video>
                </div>
            </div>
        </>
    );
}

export default AboutNumbers;
