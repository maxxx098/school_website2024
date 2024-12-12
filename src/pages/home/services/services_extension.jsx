import React from 'react'
import { useTranslation } from 'react-i18next'
import './services_extension.css'
import './services.css'
import Loacate from './assets/svg/locate-outline.svg'
import Pricetags from './assets/svg/pricetags-outline.svg'
import Finger from './assets/svg/finger-print-outline.svg'
import Image_1 from './assets/jpg/course-2-1.jpg'
import Image_2 from './assets/jpg/course-4-1.jpg'
import Image_3 from './assets/jpg/course-5-1.jpg'

const services_extension = () => {
  const [t] = useTranslation("global");
  return (
    <section className='services_extension' data-aos="fade-zoomIn">
  <div className='services_box'>
    <h3 className='h-3_title'>{t('services_extension.how_it_works')}</h3>
    <h2 className='services_paragraph'>{t('services_extension.team_help')}</h2>
  </div>

  <section className='section_images'>
    <div className="service_images">
      <div className="service_content">
        <img className='service_icons' src={Image_1} alt="" />
      </div>
      <div className='services_sub-content'>
        <h3 className='section_header-3'>{t('services_extension.school_application.title')}</h3>
        <p className='section_paragraph'>{t('services_extension.school_application.description')}</p>
      </div>
    </div>
    <div className="service_images">
      <div className="service_content">
        <img className='service_icons' src={Image_2} alt="" />
      </div>
      <div className='services_sub-content'>
        <h3 className='section_header-3'>{t('services_extension.english_classes.title')}</h3>
        <p className='section_paragraph'>{t('services_extension.english_classes.description')}</p>
      </div>
    </div>
    <div className="service_images">
      <div className="service_content">
        <img className='service_icons' src={Image_3} alt="" />
      </div>
      <div className='services_sub-content'>
        <h3 className='section_header-3'>{t('services_extension.writing_editing.title')}</h3>
        <p className='section_paragraph'>{t('services_extension.writing_editing.description')}</p>
      </div>
    </div>
  </section>
</section>

  )
}

export default services_extension