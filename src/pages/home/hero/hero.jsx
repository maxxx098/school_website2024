import React from "react";
import './hero.css'
import '../../../index.css'
import { IoSend } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs"
import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa"

const hero = () => {
  const scrollToSection = () => {
    document.getElementById("home_section").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className='hero' >
        <div className='container hero_container'>
          <div className='row'>
             <span className="hero_paragraph">
              Welcome to Inckscribe
             </span>
             <h1 className="hero_header">
             Unlock Your Academic Potential with InkScribe.
             </h1>
            <p data-aos="fade-zoomIn">Our expert writers and tutors are dedicated to your success.We provide the guidance and tools you need to achieve your goals.</p>
            <div className='button' data-aos="fade-zoomIn">
              <button style={{cursor: `pointer`}}  className='primary-btn ' onClick={scrollToSection}>
                GET STARTED NOW <IoSend size={15} />
              </button>
            </div>
          </div>
          <div className='row row_button'>
          <button class="custom-button">
            <div class="icon">
            <BsFillLightningChargeFill size={25} />
            </div>
            <div class="text">
              <span class="text-primary">Congratulations</span>
              <span class="text-secondary">Your admission completed</span>
            </div>
          </button>
            <button class="custom-button-secondary">
            <div class="icon">
            <FaGraduationCap size={25} />
            </div>
            <div class="text">
              <span class="text-primary">450K</span>
              <span class="text-secondary">Assisted Student</span>
            </div>
          </button>
          <button class="custom-button-third">
            <div class="icon">
            <FaUsers size={25} />
            </div>
            <div class="text">
              <span class="text-primary">450K</span>
              <span class="text-secondary">Assisted Student</span>
            </div>
          </button>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default hero
