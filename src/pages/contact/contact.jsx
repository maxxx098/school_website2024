import React from 'react';
import './contact.css';

const Contact = () => {
  const generateWhatsAppLink = (phoneNumber, message) => {
    const formattedNumber = phoneNumber.replace(/\D/g, ''); 
    const encodedMessage = encodeURIComponent(message);  
    return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
  };

  const handleChatRedirect = () => {
    const phoneNumber = "+1 778 522 0966";  
    const message = "Hello! I need assistance.";
    const whatsappLink = generateWhatsAppLink(phoneNumber, message);

    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="hero_section">
      <div className="hero_box container">
        <p className='hero_box_paragraph' data-aos="fade-zoomIn">HOME / PAGE / <span>CONTACT US</span></p>
        <h1 className='hero_header-1' data-aos="fade-zoomIn">
          Reach us instantly on WhatsApp <br /> for support!
        </h1>
        <p className='classes_paragraph' data-aos="fade-zoomIn">
          Learn how to communicate effectively in the workplace.
        </p>
      </div>
      <div className="hero_box_button">
        <button className='contact_button' onClick={handleChatRedirect}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className='contact_image'
          />
          Chat with Us on WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Contact;

