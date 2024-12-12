import React from 'react'
import './classes.css'
import Photo_2 from '../images/Photo_2.avif'
import { useTranslation } from 'react-i18next'
const content = () => {
    const { t } = useTranslation("global");

  return (
    <section className="classes_content_section">
    <div className="classes_container container">
      <div className="classes_content_wrapper">
        <div className="classes_content_image_box">
          <div className="custom_border"></div>
          <img src={Photo_2} alt="" className="classes_content_image" />
        </div>
      </div>
      <div className="classes_content_wrapper">
        <h1>{t('content_2.header')}</h1>
        <p>{t('content_2.paragraph')}</p>
        <button className="classes_content_button">
          <i className="ri-bookmark-3-fill"></i>{t('content_2.button')}
        </button>
      </div>
    </div>
  </section>
  )
}

export default content
