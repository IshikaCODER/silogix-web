import React from 'react';
import '../styles/CareerSteps.css';

const stepsData = [
    {
        playerSrc: "https://lottie.host/6e0b433c-23d5-499c-bd8f-64e034c3cdd7/zHWK4tBgAC.json",
        number: "Step 1",
        title: "Apply",
        content: "Submit your CV via our application process. We will get in touch after a screening process."
    },
    {
        playerSrc: "https://lottie.host/9b84a376-bc8e-4ec0-8f14-2049b812a4a6/pdAa8W4Cre.json",
        number: "Step 2",
        title: "Task & Interview",
        content: "We will assign a short task for you, after which a technical interview as well as an interview with the hiring lead will be held."
    },
    {
        playerSrc: "https://lottie.host/372b997f-291b-4e2c-91f6-c34f325bf421/Pb7oN4ZdDx.json",
        number: "Step 3",
        title: "Selection",
        content: "After verifying your references, we will present you with our offer."
    },
    {
        playerSrc: "https://lottie.host/5d12fa5b-044b-4577-a9df-baf940fb5c8f/zZkx8nVUIu.json",
        number: "Step 4",
        title: "Onboarding",
        content: "After the offer is finalized, we will begin with the onboarding process, including HR induction, team introduction, and departmental introduction."
    }
]

function CareerSteps() {
    return (
        <>
            {/* <!-- applying-section-start --> */}
            <section className="apply-process-section ptb-90">
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
                        {stepsData.map((step, index) => (
                            <div className="col-lg-3 col-md-6 col-12 border" key={index}>
                                <div className="card bg-transparent border-0">
                                    <div className="card-body text-center">
                                        <dotlottie-player
                                            src={step.playerSrc}
                                            background="transparent" speed="1" style={{ height: '250px' }} loop
                                            autoplay></dotlottie-player>
                                        <p className="fs-6 fw-bold text-uppercase">{step.number}</p>
                                        <h3>{step.title}</h3>
                                        <p>{step.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <!-- steps-card-end --> */}
                </div>
            </section>
            {/* <!-- applying-section-end --> */}
        </>
    )
}

export default CareerSteps;
