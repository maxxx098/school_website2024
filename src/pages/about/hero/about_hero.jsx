import React from 'react'
import './about_hero.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useTransition } from "../../../common/TransitionContext";
const about_hero = () => {
  const { isFading } = useTransition();
  const [t] = useTranslation("global");
  return (
    <>
    <section className="hero_section">
    <div className={`fade ${isFading ? "hidden" : ""}`}>
      <div className="hero_box">
        <p className='hero_box_paragraph' data-aos="fade-zoomIn">
          {t('hero_section.breadcrumb')} <span>{t('hero_section.span')}</span>
        </p>
        <h1 className='hero_header-1' data-aos="fade-zoomIn">
          {t('hero_section.header')}
        </h1>
        <p className='hero_hero_hero' data-aos="fade-zoomIn">
          {t('hero_section.description')}
        </p>
        <div className="banner_box">
        </div>
      </div>
      <div className="hero_box_button">
        <div className="hero_box_container_buuton">
          <button className='button-1' data-aos="fade-right">
            <a href="#home_section">{t('hero_section.get_started')}</a>
          </button>
          <button className='button-2' data-aos="fade-left">
            <NavLink to='/booking'>{t('hero_section.book_now')}</NavLink>
          </button>
        </div>
      </div>
  </div>
</section>

    </>
  )
}

export default about_hero
