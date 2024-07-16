import React from 'react'
import '../styles/ServiceContent.css'
import img1 from '../assets/img11-1.jpg';
import img2 from '../assets/img11-2.jpeg';
import img3 from '../assets/img11-3.jpg';
import img4 from '../assets/img11-4.jpg';
import img5 from '../assets/img11-5.webp';

function ServiceContent() {
  return (
    <>
      <div id="components">
            <div className="service-part up">
                <img src={img1} alt="image" className="service-img"/>
                <div className="service-part-content left-padding1 space">
                    <h5>Memory Compiler Design Services</h5>
                    <p>Silogix Nanosystems accelerates success with expert Foundation IP solutions and a proven first-pass 
                        silicon track record. Our comprehensive memory design services cover SRAM, ROM, Reg. File, DPRAM, 
                        2PRAM, Special ROM, and Customized ROM, supported by Verilog modeling, schematic design, layout 
                        verification, extensive reliability checks, and thorough characterization. Partner with us for 
                        tailored, reliable memory solutions.</p>
                </div>
            </div>
            <div className="service-part down">
                <div className="service-part-content right-padding1 space">
                    <h5>Standard Cell Design Services</h5>
                    <p>Silogix Nanosystems delivers complete standard cell design and characterization solutions for 
                        various foundries. We specialize in UHD, HD, HP, Low Leakage, Voltage Scaling, and Back Gate 
                        Biasing libraries. Our expertise includes modeling, schematic design, characterization, layout,
                        physical verification, and quality checks, ensuring high-quality, reliable results.</p>
                    </div> 
                <img src={img2} alt="image" className="service-img"/>       
            </div>
            <div className="service-part up">
                <img src={img3} alt="image" className="service-img"/>
                <div className="service-part-content left-padding1 space">
                    <h5>IO Lib. Design Service Capabilities</h5>
                    <p>Silogix Nanosystems offers complete IO Library design and characterization solutions for diverse 
                        foundries. Our expertise ensures compatibility and optimization across various manufacturing 
                        processes. From initial design to validation, we deliver high-quality, reliable IO interfaces 
                        tailored to your needs.</p>
                </div>
            </div>
            <div className="service-part down">
                <div className="service-part-content right-padding1 space">
                    <h5>Custom Layout Design Service</h5>
                    <p>Silogix Nanosystems provides custom layout design services tailored to optimize chip performance 
                        and accelerate time to market. With expertise in advanced nodes including 40nm, 28nm, 22nm, 16nm, 
                        7nm, and 5nm, we deliver compact, power-efficient designs using Cadence Virtuoso XL. Our verification 
                        tools include Caliber, and we utilize languages such as Skill, Python, Perl, Shell, TCL, and C++. 
                        From DRC and LVS to ESD and Antenna checks, we ensure thorough physical verification for reliable chip layouts.</p>
                    </div>
                <img src={img4} alt="image" className="service-img"/>
            </div>
            <div className="service-part up">
                <img src={img5} alt="image" className="service-img"/>
                <div className="service-part-content left-padding1 space">
                    <h5>EDA Automation & Development</h5>
                    <p>Silogix Nanosystems specializes in EDA automation and development, offering expertise in programming 
                        languages such as Python, Perl, Skill, C++, and Tcl/Tk. Our team excels in algorithm development, 
                        scripting, and debugging, providing automation support for both existing flows and new flow development. 
                        Whether optimizing current processes or creating innovative solutions, we ensure efficient and reliable 
                        automation tailored to your specific needs.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceContent;
