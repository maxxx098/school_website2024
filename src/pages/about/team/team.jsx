import React from "react";
import './team.css';
import Image_1 from './assets/jpeg/proxy-image.jpeg'
import { useTranslation } from "react-i18next";
const Team = () => {
  const [t] = useTranslation("global");
  return (
    <section className="team__section" data-aos="fade-zoomIn">
    <div className="section___container">
      <div className="team__header">
        <p>{t('testimonials_section.header.subtitle')}</p>
        <h1>{t('testimonials_section.header.title')}</h1>
      </div>
      <div className="testimonials__grid">
        {t('testimonials_section.testimonials', { returnObjects: true }).map((testimonial, index) => (
          <div className="card__team" key={index} data-aos="fade-zoomIn">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>{testimonial.quote}</p>
            <hr />
            <img src={Image_1} alt="user" />
            <p className="name">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="footer__team">
        <h4>{t('testimonials_section.footer.title')}</h4>
        <p>{t('testimonials_section.footer.description')}</p>
        <button>{t('testimonials_section.footer.button')}</button>
      </div>
    </div>
  </section>
  );
};

export default Team;

