import React from 'react';
import '../styles/CareerSteps.css';

function CareerSteps() {
  return (
    <>
        {/* <!-- applying-section-start --> */}
        <section className="apply-process-section ptb-100">
            <div className="container">
                {/* <!-- career-title-start --> */}
                <div className="career-section-title text-center mb-5">
                    <h2>From Applying <span className="fw-bold text-f1">To Onboarding</span></h2>
                    <p className="m-auto">Embark on the journey of professional collaboration, beginning with your application
                        submission, navigating through interviews and shortlisting, culminating in the exciting onboarding
                        process.</p>
                </div>
                {/* <!-- career-title-end --> */}
                {/* <!-- steps-card-start --> */}
                <div className="row">
                    {/* <!-- step-card-1 --> */}
                    <div className="col-lg-3 col-md-6 col-12 border">
                        <div className="card bg-transparent border-0">
                            <div className="card-body text-center">
                                <dotlottie-player
                                    src="https://lottie.host/6e0b433c-23d5-499c-bd8f-64e034c3cdd7/zHWK4tBgAC.json"
                                    background="transparent" speed="1" style={{ height:'250px' }} loop
                                    autoplay></dotlottie-player>
                                <p className="fs-6 fw-bold text-uppercase">Step 1</p>
                                <h3>Apply</h3>
                                <p>Submit your CV via our application process. We will get in touch after a screening
                                    process.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- step-card-2 --> */}
                    <div className="col-lg-3 col-md-6 col-12 border">
                        <div className="card bg-transparent border-0">
                            <div className="card-body text-center">
                                <dotlottie-player
                                    src="https://lottie.host/9b84a376-bc8e-4ec0-8f14-2049b812a4a6/pdAa8W4Cre.json"
                                    background="transparent" speed="1" style={{ height:'250px' }} loop
                                    autoplay></dotlottie-player>
                                <p className="fs-6 fw-bold text-uppercase">Step 2</p>
                                <h3>Task & Interview</h3>
                                <p>We will assign a short task for you, after which a technical interview as well as an
                                    interview with the hiring lead will be held.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- step-card-3 --> */}
                    <div className="col-lg-3 col-md-6 col-12 border">
                        <div className="card bg-transparent border-0">
                            <div className="card-body text-center">
                                <dotlottie-player
                                    src="https://lottie.host/372b997f-291b-4e2c-91f6-c34f325bf421/Pb7oN4ZdDx.json"
                                    background="transparent" speed="1" style={{ height:'250px' }} loop
                                    autoplay></dotlottie-player>
                                <p className="fs-6 fw-bold text-uppercase">Step 3</p>
                                <h3>Selection</h3>
                                <p>After verifying your references, we will present you with our offer.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- step-card-4 --> */}
                    <div className="col-lg-3 col-md-6 col-12 border">
                        <div className="card bg-transparent border-0">
                            <div className="card-body text-center">
                                <dotlottie-player
                                    src="https://lottie.host/5d12fa5b-044b-4577-a9df-baf940fb5c8f/zZkx8nVUIu.json"
                                    background="transparent" speed="1" style={{ height:'250px' }} loop
                                    autoplay></dotlottie-player>
                                <p className="fs-6 fw-bold text-uppercase">Step 4</p>
                                <h3>Onboarding</h3>
                                <p>After the offer is finalized, we will begin with the onboarding process, including HR
                                    induction, team introduction, and departmental introduction.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- steps-card-end --> */}
            </div>
        </section>
        {/* <!-- applying-section-end --> */}
    </>
  )
}

export default CareerSteps;
