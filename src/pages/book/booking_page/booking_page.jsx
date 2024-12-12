import React, { useState } from 'react';
import './booking_page.css';
import Photo_1 from './images/Photo_1.avif';
import Photo_2 from './images/Photo_2.avif';
import Photo_3 from './images/Photo_3.avif';
import Photo_4 from './images/Photo_4.avif';
import Photo_5 from './images/Photo_5.avif';
import Photo_6 from './images/Photo_6.avif';
import Photo_7 from './images/Photo_7.avif';
import Photo_8 from './images/Photo_8.avif';
import Pagination from './booking_page_2.jsx';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const booking_page = () => {

  const { t } = useTranslation("global");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; 
  
  const booking = [
    {
      title: t('booking.celpipGeneralClass'),
      image: Photo_1,
      price: 'CA$20.00',
      route: '/celpip_general_class',
      content: t('booking.celpipGeneralClassContent'),
    },
    {
      title: t('booking.ieltsGeneralPreparation'),
      image: Photo_2,
      price: 'CA$20.00',
      edition: t('booking.academicEdition'),
      route: '/ielts_general_preparation',
      content: t('booking.ieltsGeneralPreparationContent'),
    },
    {
      title: t('booking.ieltsGeneralPrepClass'),
      image: Photo_3,
      price: 'CA$20.00',
      edition: t('booking.generalEdition'),
      route: '/ielts_general_pre_class',
      content: t('booking.ieltsGeneralPrepClassContent'),
    },
    {
      title: t('booking.ieltsListeningReadingMasterClass'),
      image: Photo_4,
      price: 'CA$20.00',
      route: '/ielts_listening_class',
      content: t('booking.ieltsListeningReadingMasterClassContent'),
    },
    {
      title: t('booking.ieltsWritingMasterClass'),
      image: Photo_5,
      price: 'CA$20.00',
      edition: t('booking.academicEdition'),
      route: '/ielts_writing_master_class',
      content: t('booking.ieltsWritingMasterClassContent'),
    },
    {
      title: t('booking.toeflGeneralClass'),
      image: Photo_6,
      price: 'CA$20.00',
      route: '/toefl_general_class',
      content: t('booking.toeflGeneralClassContent'),
    },
    {
      title: t('booking.toeflSpeakingListeningMasterClass'),
      image: Photo_7,
      price: 'CA$20.00',
      route: '/ielts_listening_class',
      content: t('booking.toeflSpeakingListeningMasterClassContent'),
    },
  ];

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = booking.slice(firstPostIndex, lastPostIndex);

  return (
    <>
       <section className="booking_page_section" id="booking" data-aos="zoomIn">
        <div className="booking_page_container container">
          {currentPosts.map((item, index) => (
            <div key={index} className="booking_page_box">
              <div className="booking_page_content">
                <div className="booking_page_image_container">
                  <img className="booking_image" src={item.image} alt="" />
                </div>
                <div className="booking_page_i_container">
                  <i className="ri-money-dollar-circle-fill"></i>
                  <span>{item.price}</span>
                </div>
                <div className="booking_content">
                  <h1>{item.title}</h1>
                  <span className="booking_paragraph">{item.edition}</span>
                  <p>{item.content}</p>
                  <div className="booking_button">
                    <NavLink className="booking_button_a" to={item.route}>
                      {t('booking.readMore')}
                      <i className="ri-arrow-right-fill"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          totalPosts={booking.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </>
  );
};

export default booking_page;
