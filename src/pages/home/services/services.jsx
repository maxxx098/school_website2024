import React from 'react'
import './services.css'
import Services_Extension from './services_extension'
import Image_1 from './assets/png/join1.png'
const services = () => {
  return (
    <section className='services_container' >
        <Services_Extension/>
        <Services_content/>
    </section>
  )
}



export const Services_content = () => {
  return (
    <div className='section_images' data-aos="fade-zoomIn">
      <div className="service_images">
      <div className="service_content_image">  
    <img className='service_icon_image' src={Image_1} alt="" />
    </div>
    <div className='services_sub-content'>
    <h3 className='section_header-3'>School Application</h3>
    <p  className='section_paragraph' >Apply now for a seamless school application process—simple, fast, and secure.</p>
    </div>
  </div>
  <div className="service_images">
    <div className="service_content_image">  
    <img className='service_icon_image' src={Image_1} alt="" />
    </div>
    <div className='services_sub-content'>
    <h3 className='section_header-3'>School Application</h3>
    <p  className='section_paragraph' >Apply now for a seamless school application process—simple, fast, and secure.</p>
    </div>
  </div>
    </div>
  )
}


export default services
