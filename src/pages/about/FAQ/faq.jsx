import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./faq.css";

const Faq = () => {
  const { t } = useTranslation("global");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: t("faq.what_is_inkscribe"),
      answer: t("faq.inkscribe_description"),
    },
    {
      question: t("faq.who_can_benefit"),
      answer: t("faq.benefit_description"),
    },
    {
      question: t("faq.how_to_enroll"),
      answer: t("faq.enroll_description"),
    },
    {
      question: t("faq.online_or_inperson"),
      answer: t("faq.online_inperson_description"),
    },
    {
      question: t("faq.payment_methods"),
      answer: t("faq.payment_description"),
    },
  ];

  return (
    <section className="faq_section" data-aos="fade-zoomIn">
      <div className="faq_container" data-aos="fade-zoomIn">
        <h2>{t("faq.title")}</h2>
        <p>{t("faq.subtitle")}</p>
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
                <div className="accordion-content">
                  <p>{item.answer}</p>
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


