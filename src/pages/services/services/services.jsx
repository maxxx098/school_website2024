import React from 'react';
import './services.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const services = () => {
  const { t } = useTranslation('global'); 

  return (
    <>
      <section className="hero_section">
        <div className="hero_box">
          <p className='hero_box_paragraph' data-aos="fade-zoomIn">
          {t('hero_section.breadcrumb')}<span>{t('services.page_title')}</span>
          </p>
          <h1 className='hero_header-1' data-aos="fade-zoomIn">
            {t('services.hero_title')}
          </h1>
          <p className='hero_hero_hero' data-aos="fade-zoomIn">
            {t('services.hero_subtitle')}
          </p>
          <div className="banner_box"></div>
        </div>
        <div className="hero_box_button">
          <div className="hero_box_container_button">
          <div className="hero_box_container_buuton">
          <button className='button-1' data-aos="fade-right">
            <a href="#service">{t('hero_section.get_started')}</a>
          </button>
          <button className='button-2' data-aos="fade-left">
            <NavLink to='/booking'>{t('hero_section.book_now')}</NavLink>
          </button>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default services;

