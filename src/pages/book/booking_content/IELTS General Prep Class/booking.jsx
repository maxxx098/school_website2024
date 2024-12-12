import React from 'react'
import Photo from '../../booking_page/images/photo_3.avif'
import { useTranslation } from 'react-i18next';
import { useTransition } from "../../../../common/TransitionContext";

const booking = () => {

  const { isFading } = useTransition();
  const { t } = useTranslation("global");
  
  // Link to One on One Call in Calendly
  const oneCall = () => {
    const url = "https://calendly.com/inkscribewriters/ielts-general-prep-class-general-edition";  
    window.open(url, "_blank");
  };

 // Link to Group Call in Calendly
  const groupCall = () => {
    const url = "https://calendly.com/inkscribewriters/ielts-general-prep-class-general-edition-1";  
    window.open(url, "_blank"); 
  };
  return (
   <>
   <section className="general_class_section">
   <div className={`fade ${isFading ? "hidden" : ""}`}>
     <div className="general_class_container ">
       <div className="general_class_box">
       <div className="general_class_image_container">
        <img src={Photo} alt="Photo" className="general_class_image" />
       </div>
       </div>
       <div className="general_class_box">
       <div className="general_class_content">
        <h1> {t('booking_2.ieltsClassTitle')} </h1>
         <span><i className="ri-money-dollar-circle-fill"></i>{t('booking_2.classPrice')}</span>
         <p>{t('booking_2.classDescription')}</p>
         
       </div>
       <div className="genaral_class_button">
       <button onClick={oneCall}><i class="ri-user-2-fill"></i><p>{t('booking_2.oneOnOneCall')}</p></button>
       <button onClick={groupCall}><i class="ri-user-2-fill"></i><i class="ri-user-2-fill"></i><p>{t('booking_2.groupCall')}</p></button>
       </div>
       </div>
       </div>

       <section className="overview_section">
       <div className="overview_content">
            <i className="ri-bookmark-3-fill"></i>
            <p>{t('booking_2.overview')}</p>
            </div>
        <div className="overview_container container">
            <div className="overview_wrapper box_1">
            <div className="overiew_content_wrapper">
            <h1>{t('booking_2.classDescriptionTitle')}</h1>
            <p>{t('booking_2.classDetailedDescription')}</p>
            <ul>
              <li><i className="ri-verified-badge-fill"></i>{t('booking_2.listening')}</li>
              <li><i className="ri-verified-badge-fill"></i>{t('booking_2.reading')}</li>
              <li><i className="ri-verified-badge-fill"></i>{t('booking_2.writing')}</li>
              <li><i className="ri-verified-badge-fill"></i>{t('booking_2.speaking')}</li>
            </ul>
            <p>{t('booking_2.classObjectives')}</p>
            <h1>{t('booking_2.classObjectivesTitle')}</h1>
            <ul>
              <li><i className="ri-verified-badge-fill"></i>{t('booking_2.objective1')}</li>
              <li><i className="ri-verified-badge-fill"></i>{t('booking_2.objective2')}</li>
              <li><i className="ri-verified-badge-fill"></i>{t('booking_2.objective3')}</li>
              <li><i className="ri-verified-badge-fill"></i>{t('booking_2.objective4')}</li>
            </ul>
            </div>
            </div>
            <div className="vertical-hr" />
            <div className="overview_wrapper box_2">
            <h1>{t('booking_2.classFeaturesTitle')}</h1>
             <ul>
              <li><i class="ri-aed-electrodes-fill"></i>{t('booking_2.lectures')} <span>3</span></li>
              <hr />
              <li><i class="ri-time-fill"></i>{t('booking_2.duration')} <span>1 {t('booking_2.hour')}</span> </li>
              <hr />
              <li><i class="ri-glasses-fill"></i>{t('booking_2.level')}<span>{t('booking_2.beginner')}</span></li>
              <hr />
              <li><i class="ri-earth-fill"></i>{t('booking_2.language')} <span>{t('booking_2.english')}</span></li>
              <hr />
             </ul>
            </div>
        </div>
       </section>
       </div>
   </section>
   </>
  )
}

export default booking