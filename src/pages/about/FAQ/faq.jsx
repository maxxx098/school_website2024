import React, { useState } from "react";
import "./faq.css";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: " What is Inkscribe Writers?",
      answer:
        "Inkscribe Writers is an educational platform dedicated to helping individuals improve their English proficiency and writing skills. We offer courses, tutorials, and resources tailored to learners of all levels.",
    },
    {
      question: "Who can benefit from your services?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Are the courses online or in-person?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
  ];

  return (
    <section className="faq_section" data-aos="fade-zoomIn">
      <div className="faq_container" data-aos="fade-zoomIn">
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

