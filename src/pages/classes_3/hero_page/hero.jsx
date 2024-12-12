import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useTransition } from "../../../common/TransitionContext";
const hero = () => {
   const { isFading } = useTransition();
   const { t } = useTranslation("global");
  return (
     <section className="hero_section">
       <div className={`fade ${isFading ? "hidden" : ""}`}>
            <div className="hero_box">
            <p className="hero_box_paragraph" data-aos="fade-zoomIn">
               {t('content_3.home')} / {t('content_3.page')} / <span>{t('content_3.classes')}</span>
            </p>
            <h1 className="hero_header-1" data-aos="fade-zoomIn">
               {t('content_3.business_english_classes')}
            </h1>
            <p className="classes_paragraph" data-aos="fade-zoomIn">
               {t('content_3.communication_paragraph')}
            </p>
            <div className="banner_box"></div>
            </div>
        <div className="hero_box_button">
           <div className="hero_box_container_buuton">
           <button className='button-1'data-aos="fade-right"><a href="#classes_3">{t('content_3.get_started')}</a></button>
           <button className='button-2'data-aos="fade-left"><NavLink to='/booking'>{t('content_3.book_now')}</NavLink></button>
           </div>
        </div>
        </div>
    </section>
  )
}

export default hero
