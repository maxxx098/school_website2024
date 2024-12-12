import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Photo_1 from './images/Photo_1.avif';
import Photo_2 from './images/Photo_2.avif';
import Photo_3 from './images/Photo_3.avif';
import { NavLink } from 'react-router-dom';
export const Course = () => {
    
    const [t] = useTranslation("global");

    const [currentPage] = useState(1);
    const postsPerPage = 3; 
    const booking = [
      {
        id: '1',
        title: t('course.celpip_general_class'), 
        image: Photo_1,
        price: t('course.price'),
        route: './celpip_general_class',
        content: t('course.content.celpip_general_class'),
      },
      {
        id: '2',
        title: t('course.ielts_general_preparation'),
        image: Photo_2,
        price: t('course.price'),
        route: '/ielts_general_preparation',
        content: t('course.content.ielts_general_preparation'),
      },
      {
        id: '3',
        title: t('course.ielts_general_prep_class'),
        image: Photo_3,
        price: t('course.price'),
        route: '/ielts_general_pre_class',
        content: t('course.content.ielts_general_prep_class'),
      },
    ];
  
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = booking.slice(firstPostIndex, lastPostIndex);
  
    return (
      <>
       <section style={{width:`90%`, margin:`auto`}} className="course_section">
       <div className="booking_page_section " id='booking' data-aos="zoomIn">
        <h1 className='course_section_h'>{t("homepage.content_19")}</h1>
            <p className='course_section_p'>{t("homepage.content_20")}</p>
          <div className="booking_page_container container" >
            {currentPosts.map((item) => (
              <div data-aos="zoom-out-up"key={item.id} id={`booking-${item.id}`}  className="booking_page_box">
                <div className="booking_page_content" >
                  <div className="booking_page_image_container">
                    <img className='booking_image' src={item.image} alt="" />
                  </div>
                  <div className="booking_page_i_container">
                    <i className="ri-money-dollar-circle-fill"></i>
                    <span>{item.price}</span>
                  </div>
                  <div className="booking_content">
                    <h1>{item.title}</h1>
                    <span className='booking_paragraph'>{item.edition}</span>
                    <p>{item.content}</p>
                    <div className="booking_button">
                      <NavLink className='booking_button_a' to={item.route}> {t("homepage.content_21")}
                      <i className="ri-arrow-right-fill"></i></NavLink> 
                    </div>
                  </div>
                </div>              
              </div>
            ))} 
          </div>      
        </div>
       </section>
      </>
    );
  };