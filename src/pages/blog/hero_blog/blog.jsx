import React from 'react'
import './blog.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useTransition } from "../../../common/TransitionContext";
const blog = () => {
  const { isFading } = useTransition();
  const { t } = useTranslation("global");
  return (
    <>
    <section className="hero_section">
    <div className={`fade ${isFading ? "hidden" : ""}`}>
        <div className="hero_box">
              <p className="hero_box_paragraph" data-aos="fade-zoomIn">
                {t('blog.breadcrumbs')} <span>{t('blog.breadcrumbs_span')}</span>
              </p>
              <h1 className="hero_header-1" data-aos="fade-zoomIn">
                {t('blog.welcome_title')}
              </h1>
              <p className="hero_hero_hero" data-aos="fade-zoomIn">
                {t('blog.description')}
              </p>
              <div className="banner_box"></div>
            </div>
        <div className="hero_box_button">
           <div className="hero_box_container_buuton">
           <button className='button-1'data-aos="fade-right"><a href="#blog">{t('blog.get_started')}</a></button>
           <button className='button-2'data-aos="fade-left"><NavLink to='/booking'>{t('blog.book_now')}</NavLink></button>
           </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default blog
