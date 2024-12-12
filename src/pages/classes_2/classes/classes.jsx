import React from 'react';
import './classes.css';
import { useTranslation } from 'react-i18next';

const classes = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section className="pricing_section" id="classes_2">
        <h3 className="h-3_title" data-aos="fade-zoomIn">{t('pricing.classes_plan')}</h3>
        <h2 className="services_paragraph" data-aos="fade-zoomIn">{t('pricing.best_plan')}</h2>
        <div className="wrapper" data-aos="fade-zoomIn">
          <div className="card_pricing">
            <h3>{t('pricing.beginner')}</h3>
            <h1>${t('pricing.price_1')} <span>/ {t('pricing.starts')}</span></h1>
            <p>{t('pricing.beginner_description')}</p>
            <ul>
              <li><i id="fontawesome" className="ri-checkbox-fill"></i>{t('pricing.one_on_one_lesson')}</li>
              <li><i id="fontawesome" className="ri-checkbox-fill"></i>{t('pricing.group_call_lesson')}</li>
            </ul>
            <a href="/">{t('pricing.choose_plan')}</a>
          </div>

          <div className="card_pricing">
            <h3>{t('pricing.intermediate')}</h3>
            <h1>${t('pricing.price_2')} <span>/ {t('pricing.starts')}</span></h1>
            <p>{t('pricing.intermediate_description')}</p>
            <ul>
              <li><i id="fontawesome" className="ri-checkbox-fill"></i>{t('pricing.one_on_one_lesson')}</li>
              <li><i id="fontawesome" className="ri-checkbox-fill"></i>{t('pricing.group_call_lesson')}</li>
            </ul>
            <a href="/">{t('pricing.choose_plan')}</a>
          </div>

          <div className="card_pricing">
            <h3>{t('pricing.advanced')}</h3>
            <h1>${t('pricing.price_3')} <span>/ {t('pricing.starts')}</span></h1>
            <p>{t('pricing.advanced_description')}</p>
            <ul>
              <li><i id="fontawesome" className="ri-checkbox-fill"></i>{t('pricing.one_on_one_lesson')}</li>
              <li><i id="fontawesome" className="ri-checkbox-fill"></i>{t('pricing.group_call_lesson')}</li>
            </ul>
            <a href="/">{t('pricing.choose_plan')}</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default classes;

