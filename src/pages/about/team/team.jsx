import React, { useState } from "react";
import Image_1 from './assets/png/profile-img.png'
import './team.css';

const Team = () => {
  const [activeCard, setActiveCard] = useState(null);
  const handleToggle = (cardIndex) => {
    if (activeCard === cardIndex) {
      setActiveCard(null);
    } else {
     
      setActiveCard(cardIndex);
    }
  };

  const teamMembers = [
    { name: "Sharon", profession: "Certified English Instructor", image: Image_1,},
    { name: "Amie", profession: "Psychology Major & Biology Minor", image: Image_1, },
    { name: "Lou ", profession: "Art History and Philosophy Major", image: Image_1, },
  ];

  return (
    <section className="team_section" data-aos="fade-zoomIn">
      <div className="team_content">
        <h1 className="team_header" >OUR TEAM</h1>
        <p className="team_paragraph" data-aos="fade-zoomIn">Hi, we're InkScribe Writers, a team of experts helping you succeed. </p>
      
        <div className="team_container container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <div className="card__border">
            <img src={member.image} alt="card image" className="card__img"/>
            </div>
            <h3 className="card__name">{member.name}</h3>
            <span className="card__profession">{member.profession}</span>
             
            <div
              className={`card__social ${
                activeCard === index ? "animation" : ""
              }`}
            >
              <div className="card__social-control">
                <div
                  className="card__social-toggle"
                  onClick={() => handleToggle(index)}
                >
                  <i className="ri-add-line"></i> 
                </div>

                <span className="card__social-text">Social networks</span>

                <ul className="card__social-list">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__social-link"
                  >
                    <i className="ri-facebook-line"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__social-link"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>

                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__social-link"
                  >
                    <i className="ri-twitter-line"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Team;
