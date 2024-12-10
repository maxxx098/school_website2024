import React from 'react'
import { NavLink } from "react-router-dom";
import './footer.css'
const footer = () => {
  return (
    <>
    <footer data-aos="zoomIn">
        <div className='footer_row' >
             <div className="col">
                <div className="footer_image">
                    <h1 >INKSCRIBE</h1>
                    <p>WRTING & EDUCATION</p>
                </div>
                <p className='footer_paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </p>
             </div>
             <div className="col">
                <h3 >Office <div className="underline"><span className="footer_span"></span></div></h3>
                <ul className="foter_ul">
                    <li className="footer_list">Canada</li>
                    <li className="footer_list">123 ST. Road</li>
                    <li className="footer_list">+123456</li>
                    <li className="footer_list">sharon@inkscribewriters.com</li>
                    <li className="footer_list">Ohio </li>
                </ul>
             </div>
             <div className="col">
             <h3>Links  <div className="underline"><span className="footer_span"></span></div></h3>
                <ul className="foter_ul">
                <li className="footer_list">
                      
                      <NavLink className='footer_nav' to="/">
                        Home
                       </NavLink>
                     
                    </li>
                    <li className="footer_list">
                      
                      <NavLink className='footer_nav' to="/privacy_page">
                        Privacy @ Policy
                       </NavLink>
                       
                    </li>
                    <li className="footer_list">
                    
                      <NavLink className='footer_nav' to="/services">
                        Services
                       </NavLink>
                      
                    </li>
                    <li className="footer_list">
                     
                      <NavLink className='footer_nav' to="/contact">
                        Contact Us
                       </NavLink>
                       
                    </li>
                    <li className="footer_list">
                     
                      <NavLink className='footer_nav' to="/terms_and_conditions">
                        Terms & Conditions
                       </NavLink>
                     
                    </li>
                </ul>
             </div>
             <div className="col">
             <h3>Newsletter  <div className="underline"><span className="footer_span"></span></div></h3>
               <form className='footer_form'>
                <div className="footer_form_box">
                <i className='far fa-envelope'></i>
                <input className='footer_input' type="email" placeholder='Enter your email' required/>
                </div>
                <div className='footer_form_line'></div>
                <button className='footer_button' type='submit'>SUBSCRIBE</button>
               </form>
               
             </div>
        </div>
        <div className="hr"></div>
        <div className="footer_container">
        <p className='footer_bottom'>Inkscribe @ 2024 - All Rights Reserved</p>
        
        </div>
    </footer>
    </>
  )
}

export default footer
