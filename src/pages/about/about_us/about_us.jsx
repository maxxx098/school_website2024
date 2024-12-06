import React from 'react'
import './about_us.css'
import Image_1 from './assets/avif/photo.avif'
const about_us = () => {
  return (
   <>
   <section className='aboutHome' id='aboutHome'>
        <div className='about_container '>
           <div className="about_box" data-aos="fade-right">
            <div className="box"></div>
            <div className="box_box"></div>
            <img className="about_image" src={Image_1} alt="photo" />
           </div>
            <div className="about_box" data-aos="fade-left">
              <div className="about_content">
              <h1>Learn About Us</h1>
              <h2 className="about_header-2">10 + YEARS OF <br /> EXPERIENCE</h2>
              <p>As passionate educators and writers, we have over 10 years of experience teaching English to students of 
                all levels and abilities. Our expertise has helped students gain admission to schools, and we have assisted
                professionals in writing research papers and translating their knowledge in the workplace.</p>
               <div className="about_button">
               <button className='primary-btn '>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
               </div>
              </div>
           </div>
        </div>
      </section>
   </>
  )
}

export default about_us
