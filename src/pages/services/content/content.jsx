import React from 'react';
import './content.css';
import Photo_1 from '../images/Photo_1.avif';
import Photo_2 from '../images/Photo_2.avif';
import Photo_3 from '../images/Photo_3.avif';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const content = () => {
  const [t] = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
  };

  const content = [
    {
      image: Photo_1,
      header: t('service.general_writing_editing'),
      paragraph: t('service.general_writing_paragraph'),
      content_1: t('service.academic_editing'),
      content_2: t('service.academic_writing'),
      content_3: t('service.general_editing'),
      price_1: t('service.price_1'),
      price_2: t('service.price_2'),
      price_3: t('service.price_3'),
    },
    {
      image: Photo_2,
      header: t('service.resume_cv_services'),
      paragraph: t('service.resume_paragraph'),
      content_1: t('service.resume_editing'),
      content_2: t('service.commercial_resumes'),
      content_3: t('service.executive_resumes'),
      price_1: t('service.price_4'),
      price_2: t('service.price_5'),
      price_3: t('service.price_6'),
    },
    {
      image: Photo_3,
      header: t('service.application_letters'),
      paragraph: t('service.application_paragraph'),
      content_1: t('service.private_school_application'),
      content_2: t('service.university_application'),
      content_3: t('service.advanced_university_application'),
      price_1: t('service.price_7'),
      price_2: t('service.price_8'),
      price_3: t('service.price_9'),
    },
  ];

  return (
    <section className="service_section" id="service">
      <div className="service_container container">
        {content.map((item, index) => (
          <div
            data-aos="zoomIn"
            key={index}
            className={`service_box ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
          >
            <div className="service_image_box">
              <img src={item.image} alt="Service" className="service_image" />
            </div>
            <div className="service_content_content">
              <h1 className="service_header">{item.header}</h1>
              <p className="service_paragraph">{item.paragraph}</p>
              <div className="service_content_box">
                <div className="service_ul">
                  <div className="service_ul_content">
                    <div className="content">
                      <i className="ri-shield-check-fill"></i>
                      {item.content_1}
                    </div>
                    <div className="content_2">{item.price_1}</div>
                  </div>
                  <div className="service_ul_content">
                    <div className="content">
                      <i className="ri-shield-check-fill"></i>
                      {item.content_2}
                    </div>
                    <div className="content_2">{item.price_2}</div>
                  </div>
                  <div className="service_ul_content">
                    <div className="content">
                      <i className="ri-shield-check-fill"></i>
                      {item.content_3}
                    </div>
                    <div className="content_2">{item.price_3}</div>
                  </div>
                </div>
                <button className="service_button" onClick={handleNavigate}>
                  <i className="ri-phone-line"></i>{t('service.book_free_consult')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default content;
