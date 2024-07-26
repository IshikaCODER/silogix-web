import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ label, percentage }) => {
    const [inViewRef, inView] = useInView({ triggerOnce: true });
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (inView) {
            setWidth(percentage);
        }
    }, [inView, percentage]);

    return (
        <>
            <style>
                {`
                .progress-bar {
                margin: 20px 0;
                }

                .bar-content{
                display: flex;
                justify-content: space-between;
                }
                
                .label {
                    font-size: 0.9em;
                    margin-bottom: 5px;
                     font-weight: 600;
                }
                
                .bar-container {
                    width: 100%;
                    background-color: #e0e0e0;
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .bar {
                    height: 5px;
                    background-color: #3b82f6;
                    width: 0;
                    border-radius: 10px;
                    transition: width 2s ease-in-out;
                }
                
                .percentage {
                    font-size: 0.9em;
                    font-weight: 600;
                    margin-left: 10px;
                }
                `}
            </style>
            <div className="progress-bar" ref={inViewRef}>
                <div className='bar-content'>
                    <div className="label">{label}</div>
                    <div className="percentage">{percentage}%</div>
                </div>
                <div className="bar-container">
                    <div className="bar" style={{ width: `${width}%` }}></div>
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
