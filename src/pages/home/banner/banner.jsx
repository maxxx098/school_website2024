import React from 'react';
import './banner.css'
const banner = () => {

  
  return (
    <section className="banner_section" data-aos="fade-zoomIn">
        <div className="banner_container">
            <div className="banner_box">
            <h1 className="banner_header-1">
            Connect with educators to <br /> enhance learning.
            </h1>
            <p className="banner_paragraph">
            Subscribe to our monthly newsletter for tips, free learning <br />resources and promotions
            </p>
            <div className='banner'>
            <div className="banner_newsletter">
                <input 
                placeholder='Put your message here'
                className="banner_input"
                id='newsletter'
                type="email" />
                <button className='banner_button'>
                 Subscribe
                </button>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default banner