import React from 'react'
import './services_extension.css'
import './services.css'
import Loacate from './assets/svg/locate-outline.svg'
import Pricetags from './assets/svg/pricetags-outline.svg'
import Finger from './assets/svg/finger-print-outline.svg'
import Image_1 from './assets/jpg/course-2-1.jpg'
import Image_2 from './assets/jpg/course-4-1.jpg'
import Image_3 from './assets/jpg/course-5-1.jpg'
const services_extension = () => {
  return (
    <section  className='services_extension'data-aos="fade-zoomIn">
        <div className='services_box'>
           <h3 className='h-3_title'>How it Works ?</h3>
           <h2 className='services_paragraph'>Our experienced team of writers and tutors <br /> is here to help you succeed. 
            </h2>
        </div>

        <section className='section_images'>
          <div className="service_images">
            <div className="service_content">
                
            <img className='service_icons' src={Image_1} alt="" />
            </div>
            <div className='services_sub-content'>
            <h3 className='section_header-3'>School Application</h3>
            <p  className='section_paragraph' >Apply now for a seamless school application process—simple, fast, and secure.</p>
            </div>
          </div>
          <div className="service_images">
           <div className="service_content">
           <img className='service_icons'  src={Image_2} alt="" />

            </div>
            <div className='services_sub-content'>
            <h3 className='section_header-3'>English Classes</h3>
            <p  className='section_paragraph' >Master English with interactive classes at an affordable price.</p>
            </div>
          </div>
          <div className="service_images">
           <div className="service_content">
           <img className='service_icons'  src={Image_3} alt="" />

           </div>
           <div className='services_sub-content'>
            <h3 className='section_header-3'>Writing Editing</h3>
            <p  className='section_paragraph' >Elevate your writing with professional editing at an affordable price.</p>
            </div>
          </div>
        </section>
    </section>
  )
}

export default services_extension