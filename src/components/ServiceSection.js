import React from 'react'
import '../styles/ServiceSection.css'
import img2 from '../assets/img2.jpg';

function ServiceSection() {
  return (
    <>
      <div className="service">
            <h1 className="white-heading heading-center">Services</h1>
            <h4 className="white-heading heading-center">Tailored semiconductor design solutions 
                <br/>
                to fuel your innovation.</h4>
            <div className="s-cards">
                <div className="card service-card card-1">
                    <img src={img2} alt="image" className="card-img"/>                    
                    <h6 className="card-title">Custom Layout <br/>Design</h6>
                    <p className="card-text para-small card-para">
                        Our custom layout design service delivers optimized, performance... 
                    </p>
                    <a href="#">
                        <svg className="arrow-icon arrow-1" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="58px" fill="#5409c6"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </a>
                </div>
                <div className="card service-card card-2">
                    <img src={img2} alt="image" className="card-img"/>                  
                    <h5 className="card-title">Standard Cell <br/> Design </h5>
                    <p className="card-text para-small card-para">
                        We provide a complete standard cell design & characterization solution for wide variety foundries.
                    </p>
                    <a href="#">
                        <svg className="arrow-icon arrow-2" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="68px" fill="#5409c6"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </a>
                </div>
                <div className="card service-card card-3">
                    <img src={img2} alt="image" className="card-img"/>                   
                    <h4 className="card-title">Memory Compiler <br/> Design</h4>
                    <p className="card-text para-display card-para">
                        Accelerating your success with expert Foundation IP solutions and a first-pass silicon track record.
                    </p>
                    <a href="#">
                        <svg className="arrow-icon arrow-3" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="78px" fill="#5409c6"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </a>
                </div>
                <div className="card service-card card-4">
                    <img src={img2} alt="image" className="card-img"/>                    
                    <h5 className="card-title">IO Lib. Design</h5>
                    <p className="card-text para-small card-para">
                        We provide a complete IO Lib design & characterization solution for wide variety foundries.
                    </p>
                    <a href="#">
                        <svg className="arrow-icon arrow-4" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="68px" fill="#5409c6"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </a>
                </div>
                <div className="card service-card card-5">
                    <img src={img2} alt="image" className="card-img"/>                    
                    <h6 className="card-title">EDA Automation & Development </h6>
                    <p className="card-text para-small card-para">
                        Algorithm, Scripting, Debugging and Automation Support.
                    </p>
                    <a href="#">
                        <svg className="arrow-icon arrow-5" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="58px" fill="#5409c6"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceSection
