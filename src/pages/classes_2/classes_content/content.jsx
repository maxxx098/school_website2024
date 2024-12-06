import React from 'react'
import './classes.css'
import Photo_2 from '../images/Photo_2.avif'
import Content from '../images/svg/star.svg'
const content = () => {

  return (
   <section className="classes_content_section">
    <div className="classes_container container">
        <div className="classes_content_wrapper">
        <div className="classes_content_image_box">
        <div className='custom_border'></div>
            <img src={Photo_2} alt="" className="classes_content_image" />
        </div>
        </div>
        <div className="classes_content_wrapper">
            <h1>ENGLISH CLASSES</h1>
            <img src={Content} alt="star" className="classes_content_star" />
           <p>Our General English course will help you with daily talks, academic growth, and career advancement.
            You'll improve speaking, listening, reading, and writing skills through interactive lessons. Experienced instructors will support you,
            building confidence and fluency. Whether you're a beginner or want to improve, our course is tailored to your needs. Start reaching your language goals now.
        </p>
        <button className='classes_content_button'><i className="ri-bookmark-3-fill"></i>Get Yours Now</button>
        </div>
    </div>
   </section>
  )
}

export default content
