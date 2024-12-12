import React, { useState, useEffect } from 'react';
import "./about_us.css"
import Image_1 from './assets/avif/photo.avif'
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import { GiEvilBook, GiWorld } from "react-icons/gi"
import { useTranslation } from "react-i18next";
import { useTransition } from "../../../common/TransitionContext";
const about_us = () => {
  const { isFading } = useTransition();
  const [t] = useTranslation("global");
  return (
    <>
      <section className='aboutHome' id="home_section" >
      <div className={`fade ${isFading ? "hidden" : ""}`}>
        <div className='about_container '>
           <div className="about_box" data-aos="zoom-in-right" >
            <div className="box"></div>
            <div className="box_box"></div>
            <img className="about_image"  src={Image_1} alt="photo" />
           </div>
            <div className="about_box" data-aos="zoom-in-left">
              <div className="about_content">
              <h1>{t("homepage.content_9")}</h1>
              <h2 className="about_header-2">{t("homepage.content_10")}</h2>
              <p>{t("homepage.content_11")}</p>
               <div className="about_button">
               <button className='primary-btn '>
               {t("homepage.content_12")} <i className='fa fa-long-arrow-alt-right'></i>
              </button>
               </div>
              </div>
           </div>
        </div>    
        </div>      
      </section>
      
      <section className="about_card_content_section" data-aos="zoomIn">
          <h1>{t("homepage.content_13")}</h1>
          <span>{t("homepage.content_14")}</span>
      <AboutCardContent/>
     </section>

    </>
  )
}



export const AboutCardContent = () => {
  const [t] = useTranslation("global");
  return (
    <div className='about_card_content_container container' data-aos="zoomIn">
    <InstructorCard color='#EF4444' icon={<FaUsers size={40} />} title={<Counter endValue={63} />} desc={t("homepage.content_15")} />
    <InstructorCard color='#F97316' icon={<GiEvilBook size={40} />} title={<Counter endValue={20} />} desc={t("homepage.content_16")} />
    <InstructorCard color='#A855F7' icon={<FaGraduationCap size={40} />} title={<Counter endValue={4} />} desc={t("homepage.content_17")} />
    <InstructorCard color='#6366F1' icon={<GiWorld size={40} />} title={<Counter endValue={3} />} desc={t("homepage.content_18")} />
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


export default about_us

