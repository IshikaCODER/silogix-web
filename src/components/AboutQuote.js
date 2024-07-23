import React from 'react'
import '../styles/AboutQuote.css'

function AboutQuote() {
  return (
    <>
      {/* about-quote-area-start */}
      <div className="about-quote-area">
        <div className="container-lg">
          {/* about-quote-section-start */}
          <div className="about-quote-section">
            <h3>"I would say that hardware is the bone of the head, the skull. The semiconductor is the brain
              within the head. The software is the wisdom and data is the knowledge"
            </h3>
            <h5><i>-Masayoshi Son</i></h5>
          </div>
          {/* about-quote-section-end */}
        </div>
      </div>
      {/* about-quote-area-end */}
    </>
  )
}

export default AboutQuote;
