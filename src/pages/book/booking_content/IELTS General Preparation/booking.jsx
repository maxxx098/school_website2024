import React from 'react'
import Photo from '../../booking_page/images/photo_2.avif'
import { useTranslation } from 'react-i18next';
import { useTransition } from "../../../../common/TransitionContext";
const booking = () => {

  const { isFading } = useTransition();
  const { t } = useTranslation("global");
  // Link to One on One Call in Calendly
  const oneCall = () => {
    const url = "https://calendly.com/inkscribewriters/celpip-general-class";  
    window.open(url, "_blank");
  };

 // Link to Group Call in Calendly
  const groupCall = () => {
    const url = " https://calendly.com/inkscribewriters/celpip-general-class-1";  
    window.open(url, "_blank"); 
  };
  return (
   <>
 <section className="general_class_section">
     <div className={`fade ${isFading ? "hidden" : ""}`}>
        <div className="general_class_container">
          <div className="general_class_box">
            <div className="general_class_image_container">
              <img src={Photo} alt={t('booking_3.imageAlt')} className="general_class_image" />
            </div>
          </div>
          <div className="general_class_box">
            <div className="general_class_content">
              <h1>{t('booking_3.classTitle')}</h1>
              <span>
                <i className="ri-money-dollar-circle-fill"></i>
                {t('booking_3.price')}
              </span>
              <p>{t('booking_3.classDescription')}</p>
            </div>
            <div className="genaral_class_button">
              <button onClick={oneCall}>
                <i className="ri-user-2-fill"></i>
                <p>{t('booking_3.oneOnOneCall')}</p>
              </button>
              <button onClick={groupCall}>
                <i className="ri-user-2-fill"></i>
                <i className="ri-user-2-fill"></i>
                <p>{t('booking_3.groupCall')}</p>
              </button>
            </div>
          </div>
        </div>

        <section className="overview_section">
          <div className="overview_content">
            <i className="ri-bookmark-3-fill"></i>
            <p>{t('booking_3.overview')}</p>
          </div>
          <div className="overview_container container">
            <div className="overview_wrapper box_1">
              <div className="overiew_content_wrapper">
                <h1>{t('booking_3.classDescriptionHeader')}</h1>
                <p>{t('booking_3.descriptionIntro')}</p>
                <ul>
                  <li><i className="ri-verified-badge-fill"></i>{t('booking_3.skills.listening')}</li>
                  <li><i className="ri-verified-badge-fill"></i>{t('booking_3.skills.reading')}</li>
                  <li><i className="ri-verified-badge-fill"></i>{t('booking_3.skills.writing')}</li>
                  <li><i className="ri-verified-badge-fill"></i>{t('booking_3.skills.speaking')}</li>
                </ul>
                <p>{t('booking_3.descriptionDetails')}</p>
                <h1>{t('booking_3.objectivesHeader')}</h1>
                <ul>
                  <li><i className="ri-verified-badge-fill"></i>{t('booking_3.objectives.familiarize')}</li>
                  <li><i className="ri-verified-badge-fill"></i>{t('booking_3.objectives.applyStrategies')}</li>
                  <li><i className="ri-verified-badge-fill"></i>{t('booking_3.objectives.improveListening')}</li>
                  <li><i className="ri-verified-badge-fill"></i>{t('booking_3.objectives.developReading')}</li>
                </ul>
              </div>
            </div>
            <div className="vertical-hr" />
            <div className="overview_wrapper box_2">
              <h1>{t('booking_3.features.title')}</h1>
              <ul>
                <li>
                  <i className="ri-aed-electrodes-fill"></i>
                  {t('booking_3.features.lectures')}: <span>{t('booking_3.features.lectureCount')}</span>
                </li>
                <hr />
                <li>
                  <i className="ri-time-fill"></i>
                  {t('booking_3.features.duration')}: <span>{t('booking_3.features.durationTime')}</span>
                </li>
                <hr />
                <li>
                  <i className="ri-glasses-fill"></i>
                  {t('booking_3.features.level')}: <span>{t('booking_3.features.levelType')}</span>
                </li>
                <hr />
                <li>
                  <i className="ri-earth-fill"></i>
                  {t('booking_3.features.language')}: <span>{t('booking_3.features.languageType')}</span>
                </li>
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