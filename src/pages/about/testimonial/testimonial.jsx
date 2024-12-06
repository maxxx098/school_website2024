import React from 'react'
import './testimonial.css'
import Image_1 from './images/user-1.jpg'
const testimonial = () => {
  return (
    <>
    <section className="section__container">
      <h2>Testimonials</h2>
      <h1>What our customers say</h1>
      <div className="section__grid">
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Love the simplicity</h4>
          <p>
            They understood our brand and created a stunning website design.
            Professional, responsive, and on-time delivery. Highly recommended!
          </p>
          <img src={Image_1} alt="user" />
          <h5>Allan Collins</h5>
          <h6>Managing Director</h6>
        </div>
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Excellent Designs</h4>
          <p>
            Efficient, reliable, and results-oriented. Visually appealing
            website, improved online visibility. Highly recommended!
          </p>
          <img src={Image_1} alt="user" />
          <h5>Tanya Grant</h5>
          <h6>Ceo & Founder</h6>
        </div>
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Efficient and Reliable</h4>
          <p>
            Best decision we made. Stunning website, exceptional support. Always
            available and prompt issue resolution. Hassle-free experience!
          </p>
          <img src={Image_1} alt="user" />
          <h5>Clay Washington</h5>
          <h6>Fashion Designer</h6>
        </div>
      </div>
    </section>
    </>
  )
}

export default testimonial
