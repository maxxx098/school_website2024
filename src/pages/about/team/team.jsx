import React from "react";
import './team.css';
import Image_1 from './assets/jpeg/proxy-image.jpeg'
const Team = () => {
  

  return (
   <section className="team__section" data-aos="fade-zoomIn">
     <div className="section___container ">
    <div className="team__header">
      <p>TESTIMONIALS</p>
      <h1>What our clients say about us.</h1>
    </div>
    <div className="testimonials__grid">
      <div className="card__team" data-aos="fade-zoomIn">
        <span><i className="ri-double-quotes-l"></i></span>
        <p>
        My gratitude goes out to you - an incredible tutor - for the wonderful lessons you have taught me. Also, thank you so much for your kindness and assistance.
        </p>
        <hr />
        <img src={Image_1} alt="user" />
        <p className="name">Camille C. </p>
      </div>
      <div className="card__team" data-aos="fade-zoomIn">
        <span><i className="ri-double-quotes-l"></i></span>
        <p>
        At the beginning of 2024, I attempted the IELTS exam and passed it with flying colours with her assistance. I highly recommend Inkscribe.  I consider myself very lucky to have Inkscribe assist me on my journey.
        </p>
        <hr />
        <img src={Image_1} alt="user" />
        <p className="name">Aneta M.</p>
      </div>
      <div className="card__team" data-aos="fade-zoomIn">
        <span><i className="ri-double-quotes-l"></i></span>
        <p>
        Inkscribe has the best teacher I have ever met. I took lessons with Sharon in preparation for the FCT exam. The course was incredibly organized, and I exceeded my target score.
        </p>
        <hr />
        <img src={Image_1} alt="user" />
        <p className="name">Chris Z.</p>
      </div>
    </div>
    <div className="footer__team">
      <h4>No two learning paths are the same!</h4>
      <p>
      Inkscribe, combined with your unique learning goals, enables us to craft a personalized study plan tailored just for you.
      </p>
      <button>GET A QUOTE</button>
    </div>
  </div>
   </section>
  );
};

export default Team;

