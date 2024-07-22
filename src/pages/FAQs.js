import React, { useState } from 'react';
import '../styles/Faqs.css';
import Banner from '../components/Banner';
import banner from "../assets/banners/privacy-banner.png";
import SubSection from '../components/SubSection';

const FAQItem = ({ question, answer, isCollapsible, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <div
        className={`faq-question ${isCollapsible ? 'collapsible' : 'non-collapsible'}`}
        onClick={isCollapsible ? onToggle : null}
      >
        <h3>{question}</h3>
        {isCollapsible && (
          <svg
            className={`faq-icon ${isOpen ? 'open' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
      {(isCollapsible && isOpen) || !isCollapsible ? (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      ) : null}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // Data for FAQs
    { question: 'Q. What is Silogix Nanosystems?', answer: 'Silogix Nanosystems is a leading company in semiconductor chip design and manufacturing, specializing in cutting-edge technology for various industries.', isCollapsible: false },
    { question: 'Q. What products does Silogix Nanosystems offer?', answer: 'We offer a range of semiconductor chips and automation solutions designed to enhance efficiency and innovation in manufacturing processes.', isCollapsible: true },
    { question: 'Q. How can I get in touch with Silogix Nanosystems?', answer: 'You can contact us via our website contact form, email, or by phone. Visit our Contact Us page for more details.', isCollapsible: true },
    { question: 'Q. Where is Silogix Nanosystems located?', answer: 'Our headquarters is based in India, with facilities and partners across the globe.', isCollapsible: true },
    { question: 'Q. What industries does Silogix Nanosystems serve?', answer: 'We serve a wide range of industries including electronics, automotive, telecommunications, and industrial automation.', isCollapsible: true },
  ];

  const breadcrumbs = [
    // For Breadcrubs i.e Home/FAQs
    { label: "Home", link: "/" },
    { label: "FAQs" },
  ];

  return (
    <>
    {/* Banner Components */}
    <Banner
        bannerImage={banner}
        title="Frequently Asked Questions"
        breadcrumbs={breadcrumbs}
      />
    <div className="faq-container">
      <div>
      {/* Product Mapping For FAQs */}
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isCollapsible={faq.isCollapsible}
            isOpen={index === openIndex}
            onToggle={() => setOpenIndex(index === openIndex ? null : index)}
          />
        ))}
      </div>
    </div>
    <SubSection />
    </>
  );
};

export default FAQ;
