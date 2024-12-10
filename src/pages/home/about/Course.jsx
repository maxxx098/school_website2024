import React, { useState } from 'react';
import Photo_1 from './images/Photo_1.avif';
import Photo_2 from './images/Photo_2.avif';
import Photo_3 from './images/Photo_3.avif';
import { NavLink } from 'react-router-dom';
export const Course = () => {
 
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3; 
    
    const booking = [
      {
        id:'1',
        title: " CELPIP General Class ",
        image: Photo_1,
        price: 'CA$20.00',
        route: './celpip_general_class',
        content: 'The CELPIP General Class helps individuals improve English skills for everyday communication, work, and immigration through targeted practice.',
      },
      {
        id:'2',
        title: "IELTS General Preparation",
        image: Photo_2,
        price: 'CA$20.00',
        edition: " (Academic Edition)",
        route: '/ielts_general_preparation',
        content: 'Designed to help individuals prepare for the IELTS Academic test, focusing on English proficiency for academic and professional purposes.',
      },
      {
        id:'3',
        title: " IELTS General Prep Class ",
        image: Photo_3,
        price: 'CA$20.00',
        edition: " (General Edition)",
        route: '/ielts_general_pre_class',
        content: 'The IELTS General Prep Class helps individuals improve English for everyday communication, work, and migration through focused practice and strategies.',
      },
      
    ];
  
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = booking.slice(firstPostIndex, lastPostIndex);
  
    return (
      <>
       <section style={{width:`90%`, margin:`auto`}} className="course_section">
       <div className="booking_page_section " id='booking' data-aos="zoomIn">
        <h1 className='course_section_h'>Find The Right
            Online Course For You</h1>
            <p className='course_section_p'>Uou don't have to struggle alone, you've got our assistance and help.</p>
          <div className="booking_page_container container">
            {currentPosts.map((item) => (
              <div key={item.id} id={`booking-${item.id}`}  className="booking_page_box">
                <div className="booking_page_content">
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
                      <NavLink className='booking_button_a' to={item.route}> READ MORE
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