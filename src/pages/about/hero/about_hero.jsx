import React from 'react'
import './about_hero.css'

const about_hero = () => {
  return (
    <>
    <section className="hero_section">
        <div className="hero_box">
           <p className='hero_box_paragraph' data-aos="fade-zoomIn">HOME / PAGE / <span>ABOUT US</span></p>
            <h1 className='hero_header-1'data-aos="fade-zoomIn"> Where expertise meets your success.</h1>
            <p className='hero_hero_hero'data-aos="fade-zoomIn" >Our mission is to offer classes, expert writing services, and support to empower individuals to reach their full potential in academic and professional environments.</p>
            <div className="banner_box">
            </div>
        </div>
        <div className="hero_box_button">
           <div className="hero_box_container_buuton">
           <button className='button-1'data-aos="fade-right"><a href="#aboutHome">  GET STARTED</a></button>
           <button className='button-2'data-aos="fade-left"><a href="/booking">BOOK NOW</a></button>
           </div>
        </div>
    </section>
    </>
  )
}

export default about_hero
