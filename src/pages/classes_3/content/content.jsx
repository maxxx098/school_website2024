import React from 'react'
import './content.css'
import Photo_2 from '../images/Photo_2.avif'
import { useTranslation } from 'react-i18next';
const content = () => {
  const { t } = useTranslation("global");
  return (
<section className="testimonial_section container" id="testimonials">
      <section className="testimonial_section_repeat">
        <div className="testimonial_box">
          <h3 className="testimonial_header_3">{t('testimonial.header')}</h3>
          <h2 className="testimonial_paragraph">{t('testimonial.text')}</h2>
          <div className="testimonial_button">
            <button className="testimonial_button_bottom">
              <a href="/contact">{t('testimonial.learn_more')}</a>
            </button>
          </div>
        </div>
        <div className="testimonial_box_image">
          <img src={Photo_2} alt="Story_testimonial" />
        </div>
      </section>
    </section>
  )
}

export default content
