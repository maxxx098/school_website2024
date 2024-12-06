import React from 'react'
import Photo from '../../booking_page/images/photo_3.avif'

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
         <h1>IELTS General Prep Class</h1>
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
            <p>The IELTS General Class is tailored for individuals aiming to succeed in the International English Language Testing System (IELTS) General Training module. This test is a vital requirement for those pursuing immigration, work opportunities, or secondary education in English-speaking countries.</p>
            <ul>
              <li><i className="ri-verified-badge-fill"></i>Listening</li>
              <li><i className="ri-verified-badge-fill"></i>Reading</li>
              <li><i className="ri-verified-badge-fill"></i>Writing</li>
              <li><i className="ri-verified-badge-fill"></i>Speaking</li>
            </ul>
            <p>By the end of the class, students will:</p>
            <h1>Class Objectives:</h1>
            <ul>
              <li><i className="ri-verified-badge-fill"></i>Master the IELTS General Training test format, band descriptors, and scoring criteria.</li>
              <li><i className="ri-verified-badge-fill"></i>Apply effective strategies for each test section to optimize time and accuracy.</li>
              <li><i className="ri-verified-badge-fill"></i>Improve listening skills to understand spoken English in a variety of accents and contexts.</li>
              <li><i className="ri-verified-badge-fill"></i>Develop reading techniques to quickly analyze and respond to workplace and general interest texts.</li>
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