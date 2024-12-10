import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { GiEvilBook, GiWorld } from "react-icons/gi";
import "./about.css";
import Image_1 from './assets/avif/photo.avif';


const AboutCard = () => {

  return (
    <>
      <section className='aboutHome' id="home_section" >
        <div className='about_container '>
           <div className="about_box" data-aos="fade-right">
            <div className="box"></div>
            <div className="box_box"></div>
            <img className="about_image"  src={Image_1} alt="photo" />
           </div>
            <div className="about_box" data-aos="fade-left">
              <div className="about_content">
              <h1>Learn About Us</h1>
              <h2 className="about_header-2">10 + YEARS OF <br /> EXPERIENCE</h2>
              <p>As passionate educators and writers, we have over 10 years of experience teaching English to students of 
                all levels and abilities. Our expertise has helped students gain admission to schools, and we have assisted
                professionals in writing research papers and translating their knowledge in the workplace.</p>
               <div className="about_button">
               <button className='primary-btn '>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
               </div>
              </div>
           </div>
        </div>        
      </section>
      
      <section className="about_card_content_section" data-aos="zoomIn">
          <h1>We Are Proud</h1>
          <span>You don't have to struggle alone, you've got our assistance and help.</span>
      <AboutCardContent/>
     </section>

    </>
  )
}



export const AboutCardContent = () => {
  return (
    <div className='about_card_content_container container' data-aos="zoomIn">
    <InstructorCard color='#EF4444' icon={<FaUsers size={40} />} title={<Counter endValue={63} />} desc='Students Enrolled' />
    <InstructorCard color='#F97316' icon={<GiEvilBook size={40} />} title={<Counter endValue={20} />} desc='Total Courses' />
    <InstructorCard color='#A855F7' icon={<FaGraduationCap size={40} />} title={<Counter endValue={4} />} desc='Online Learners' />
    <InstructorCard color='#6366F1' icon={<GiWorld size={40} />} title={<Counter endValue={3} />} desc='Online Teachers' />
  </div>
  )
}
export const InstructorCard = (props) => {
  return (
    <div className="box_content_about">
    <div className='color' style={{ color: props.color }}>{props.icon}</div>
    <div className="text_content">
    <div>{props.title}</div>
    <p>{props.desc}</p>
    </div>
   </div>
  )
}


export const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(endValue / 100); 

    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(interval); 
      }
      setCount(start);
    }, 100); 

    return () => clearInterval(interval); 
  }, [endValue]);

  return (
    <h4>{count}</h4> 
  )
}


export default AboutCard
