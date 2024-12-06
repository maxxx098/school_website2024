import React from 'react'
import './booking.css'


const booking = () => {
  return (
    <>
    <section className="hero_section">
        <div className="hero_box">
           <p className='hero_box_paragraph' data-aos="fade-zoomIn">HOME / PAGE / <span>BOOKING</span></p>
            <h1 className='hero_header-1'data-aos="fade-zoomIn">Find the Best Classes for you
            </h1>
            <p className='classes_paragraph'data-aos="fade-zoomIn" >Learn how to communicate effectively in the workplace.</p>
            <div className="banner_box">
            </div>
        </div>
        <div className="hero_box_button">
           <div className="hero_box_container_buuton">
           <button className='button-1'data-aos="fade-right"><a href='#booking'>GET STARTED</a></button>
           <button className='button-2'data-aos="fade-left"><a href="#booking">CLASSES</a></button>
           </div>
        </div>
    </section>
    
    </>
  )
}

export default booking
