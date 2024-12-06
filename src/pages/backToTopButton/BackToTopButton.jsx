import React, { useEffect, useState } from 'react';
import './BackToTopButton.css'; 
import { Link } from 'react-scroll'; 
import { useLocation } from 'react-router-dom';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return (
    <Link
      to="top" 
      smooth={true}
      offset={-200} 
      duration={400} 
      className={`home_scroll ${isVisible ? 'show' : ''}`}
    >
      {/* Button Content */}
      <svg width="32px" height="32px" className="home__scroll-mouse" viewBox="0 0 247 390" xmlns="http://www.w3.org/2000/svg">
        <path className="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: 'var(--title-color)', strokeWidth: '20px' }} />
        <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: 'var(--title-color)', strokeWidth: '20px' }} />
      </svg>
      <i className="uil uil-arrow-up home-scroll-arrow"></i>
    </Link>
  );
};

export default BackToTopButton;

