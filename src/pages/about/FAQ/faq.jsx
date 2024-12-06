import React, { useState } from "react";
import "./faq.css";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Why is the moon sometimes out during the day?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Why is the sky blue?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Will we ever discover aliens?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "How much does the Earth weigh?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "How do airplanes stay up?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
  ];

  return (
    <section className="faq_section" data-aos="fade-zoomIn">
      <div className="faq_container">
        <h2>FAQ</h2>
        <p>We’ve got the answers</p>
        <div className="accordion">
          {faqData.map((item, index) => (
            <div
              className={`accordion-item ${
                expandedIndex === index ? "expanded" : ""
              }`}
              key={index}
            >
              <button
                className="accordion-button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={expandedIndex === index}
              >
                <span className="accordion-title">{item.question}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              {expandedIndex === index && (
                <div className="accordion-content" >
                  <p >{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

