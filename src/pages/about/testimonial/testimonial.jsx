import React from 'react'
import './testimonial.css'
import Image_1 from './assets/jpg/Image.jpg'


const testimonial = () => {
  return (
    <>
    <section className="testimonial_section_content">
    <div className="wrapper_testimonial">
      <div className="title">
          <h4>Our Team Section</h4>
          <p>Hi, we're InkScribe Writers, a team of experts helping you succeed.</p>
      </div>
          <div className="card_Container">
            <div className='team_line'></div>
              <div className="card_testimonial">
                  <div className="imbBx">
                      <img src={Image_1} alt=""/>
                  </div>
                  <div className="content">
                      <div className="contentBx">
                          <h3> Sharon <br/><span>Certified English Instructor</span></h3>
                      </div>
                      <ul className="sci">
                            <li >
                            <a href="#"><i className="ri-facebook-line"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="ri-instagram-line"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="ri-twitter-x-fill"></i></a>
                        </li>
                      </ul>
                  </div>
              </div>
              <div className="card_testimonial">
          <div className="imbBx">
              <img src={Image_1} alt=""/>
          </div>

          <div className="content">
              <div className="contentBx">
                  <h3>Amie <br/><span>Psychology Major & Biology Minor</span></h3>
              </div>
              <ul className="sci">
                  <li >
                      <a href="#"><i className="ri-facebook-line"></i></a>
                  </li>
                  <li >
                      <a href="#"><i className="ri-instagram-line"></i></a>
                  </li>
                  <li >
                      <a href="#"><i className="ri-twitter-x-fill"></i></a>
                  </li>
              </ul>
          </div>
          </div>
          <div className="card_testimonial">
          <div className="imbBx">
              <img src={Image_1} alt=""/>
          </div>
          <div className="content">
              <div className="contentBx">
                  <h3>Lou<br/><span>Art History and Philosophy Major</span></h3>
              </div>
              <ul className="sci">
                  <li >
                      <a href="#"><i className="ri-facebook-line"></i></a>
                  </li>
                  <li >
                      <a href="#"><i className="ri-instagram-line"></i></a>
                  </li>
                  <li >
                      <a href="#"><i className="ri-twitter-x-fill"></i></a>
                  </li>
              </ul>
          </div>
          </div> 
          </div>
          </div>
    </section>
    </>
  )
}

export default testimonial
