import React from 'react';
import './content.css';
import Photo_1 from '../images/Photo_1.avif';
import Photo_2 from '../images/Photo_2.avif';
import Photo_3 from '../images/Photo_3.avif';
import { useNavigate } from 'react-router-dom';
const content = () => {
 const navigate = useNavigate(true);

 const handleNavigate = () => {
  navigate('/contact');
 };
  const content = [
    {
      image: Photo_1,
      header: 'General Writing & Editing',
      paragraph: 'Need a quick editing for your paper? Or assistance with an academic paper or essay?',
      content_1: 'Academic Editing',
      content_2: 'Academic Writing',
      content_3: 'General Editing',
      price_1: '$25/hr',
      price_2: '$30/hr',
      price_3: '$20/hr',
    },
    {
      image: Photo_2,
      header: 'Resume & CV Services',
      paragraph: 'Elevate your resume to stand out and secure your ideal job.',
      content_1: 'Resume & CV Editing',
      content_2: 'Commercial Resumes & CV',
      content_3: 'Executive Resumes & CV',
      price_1: '$100',
      price_2: '$300',
      price_3: '$500',
    },
    {
      image: Photo_3,
      header: 'Application Letters',
      paragraph: 'Craft a compelling application letter to stand out from the competition.',
      content_1: 'Private School Application Letter',
      content_2: 'University Application Letter',
      content_3: 'Advanced University Application',
      price_1: '$800 CAD',
      price_2: '$1500 CAD',
      price_3: '$2500 CAD',
    },
  ];

  return (
    <section className="service_section" id='service'>
      <div className="service_container container" >
        {content.map((item, index) => (
          <div
            data-aos="zoomIn"
            key={index}
            className={`service_box ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
          >
            <div className="service_image_box">
              <img src={item.image} alt="Service" className="service_image" />
            </div>
            <div className="service_content_content">
              <h1 className="service_header">{item.header}</h1>
              <p className="service_paragraph">{item.paragraph}</p>
              <div className="service_content_box">
                <div className="service_ul">
                  <div className="service_ul_content">
                    <div className='content'><i class="ri-shield-check-fill"></i>
                    {item.content_1}
                    </div>
                    <div className="content_2">
                      {item.price_1}
                    </div>
                  </div>
                  <div className="service_ul_content">
                    <div className='content'><i class="ri-shield-check-fill"></i>
                    {item.content_2}
                    </div>
                    <div className="content_2">
                      {item.price_2}
                    </div>
                  </div>
                  <div className="service_ul_content">
                    <div className='content'><i class="ri-shield-check-fill"></i>
                    {item.content_3}
                    </div>
                    <div className="content_2">
                      {item.price_3}
                    </div>
                  </div>
                </div>
                <button className='service_button' onClick={handleNavigate}>
                <i className="ri-phone-line"></i>Book a free a consult
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default content;

