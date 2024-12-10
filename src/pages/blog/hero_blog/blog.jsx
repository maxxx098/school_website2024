import React from 'react'
import './blog.css'
import { NavLink } from 'react-router-dom'
const blog = () => {
  return (
    <>
    <section className="hero_section">
        <div className="hero_box">
           <p className='hero_box_paragraph' data-aos="fade-zoomIn">HOME / PAGE / <span>BLOG</span></p>
            <h1 className='hero_header-1'data-aos="fade-zoomIn">Welcome to the InkScribe Writers Blog!</h1>
            <p className='hero_hero_hero'data-aos="fade-zoomIn" >We are a passionate team of writing experts committed to inspiring and empowering individuals on their journey to success. </p>
            <div className="banner_box">
            </div>
        </div>
        <div className="hero_box_button">
           <div className="hero_box_container_buuton">
           <button className='button-1'data-aos="fade-right"><a href="#blog">  GET STARTED</a></button>
           <button className='button-2'data-aos="fade-left"><NavLink to='/booking'>BOOK NOW</NavLink></button>
           </div>
        </div>
    </section>
    </>
  )
}

export default blog
