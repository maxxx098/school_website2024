import React from 'react'
import './services.css'
import { NavLink } from 'react-router-dom'
const services = () => {
  return (
    <>
    <section className="hero_section">
        <div className="hero_box">
           <p className='hero_box_paragraph' data-aos="fade-zoomIn">HOME / PAGE / <span>SERVICES</span></p>
            <h1 className='hero_header-1' data-aos="fade-zoomIn">Writing Services </h1>
            <p className='hero_hero_hero' data-aos="fade-zoomIn">Our experts understand the criteria that schools are looking for.  </p>
            <div className="banner_box">
            </div>
        </div>
        <div className="hero_box_button">
           <div className="hero_box_container_buuton">
           <button className='button-1'data-aos="fade-right"><a href="#service">  GET STARTED</a></button>
           <button className='button-2'data-aos="fade-left"><NavLink to='/booking'>BOOK NOW</NavLink></button>
           </div>
        </div>
    </section>
    </>
  )
}

export default services
