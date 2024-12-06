import React from 'react'
import './content.css'
import Photo_2 from '../images/Photo_2.avif'
const content = () => {
  return (
    <section className='testimonial_section container' id='testimonials'>
    <section className='testimonial_section_repeat'>
    <div className='testimonial_box'>
    <h3 className='testimonial_header_3'>What's Up?</h3>
    <h2 className='testimonial_paragraph'>“Need help updating your resume and cover letters? Need help updating your resume and cover letters? ”</h2>
    <div className='testimonial_button'>
      <button className='testimonial_button_bottom'><a  href="/contact">LEARN MORE</a></button>
    </div>
    </div>
    <div className='testimonial_box_image'>
      <img  src={Photo_2} alt="Story_testimonial" />
    </div>
    </section>
</section>
  )
}

export default content
