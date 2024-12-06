import React from 'react'
import Photo from './images/Photo_1.avif'
import './booking.css'
const booking = () => {
  
  // Link to One on One Call in Calendly
  const oneCall = () => {
    const url = "https://calendly.com/inkscribewriters/celpip-general-class";  
    window.open(url, "_blank");
  };

 // Link to Group Call in Calendly
  const groupCall = () => {
    const url = " https://calendly.com/inkscribewriters/celpip-general-class-1";  
    window.open(url, "_blank"); 
  };
  return (
   <>
   <section className="general_class_section">
     <div className="general_class_container ">
       <div className="general_class_box">
       <div className="general_class_image_container">
        <img src={Photo} alt="Photo" className="general_class_image" />
       </div>
       </div>
       <div className="general_class_box">
       <div className="general_class_content">
         <h1>CELPIP General Class</h1>
         <span><i className="ri-money-dollar-circle-fill"></i>30 CAD</span>
         <p>The CELPIP General Class helps individuals improve English skills for everyday communication, work, and immigration through targeted practice.</p>
         
       </div>
       <div className="genaral_class_button">
       <button onClick={oneCall}><i class="ri-user-2-fill"></i><p>One on One Call</p></button>
       <button onClick={groupCall}><i class="ri-user-2-fill"></i><i class="ri-user-2-fill"></i><p>Group Call</p></button>
       </div>
       </div>
       </div>

       <section className="overview_section">
       <div className="overview_content">
            <i className="ri-bookmark-3-fill"></i>
            <p>OVERVIEW</p>
            </div>
        <div className="overview_container container">
            <div className="overview_wrapper box_1">
            <div className="overiew_content_wrapper">
            <h1>CLASS DESCRIPTION</h1>
            <p>Designed to assess English language skills for individuals applying for permanent residency in Canada or other immigration programs. It evaluates the four key language skills:</p>
            <ul>
              <li><i className="ri-verified-badge-fill"></i>Listening</li>
              <li><i className="ri-verified-badge-fill"></i>Reading</li>
              <li><i className="ri-verified-badge-fill"></i>Writing</li>
              <li><i className="ri-verified-badge-fill"></i>Speaking</li>
            </ul>
            <p>A CELPIP General Class would typically prepare students to excel in these sections. If you're organizing or attending such a class, here’s an outline of what it might include:</p>
            <h1>Class Objectives:</h1>
            <ul>
              <li><i className="ri-verified-badge-fill"></i>Familiarize students with the CELPIP test format and scoring.</li>
              <li><i className="ri-verified-badge-fill"></i>Develop skills specific to CELPIP’s tasks and question types.</li>
              <li><i className="ri-verified-badge-fill"></i>Enhance overall English language proficiency.</li>
              <li><i className="ri-verified-badge-fill"></i>Build confidence for test day.</li>
            </ul>
            </div>
            </div>
            <div className="vertical-hr" />
            <div className="overview_wrapper box_2">
            <h1>CLASS FEATURES</h1>
             <ul>
              <li><i class="ri-aed-electrodes-fill"></i>Lectures: <span>3</span></li>
              <hr />
              <li><i class="ri-time-fill"></i>Duration: <span>1 Hour</span> </li>
              <hr />
              <li><i class="ri-glasses-fill"></i>Level: <span>Beginner</span></li>
              <hr />
              <li><i class="ri-earth-fill"></i>Language: <span>English</span></li>
              <hr />
             </ul>
            </div>
        </div>
       </section>
   </section>
   </>
  )
}

export default booking
