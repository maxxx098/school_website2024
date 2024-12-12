import React from 'react';
import './contact.css';
import { useTranslation } from 'react-i18next';
import { useTransition } from "../../common/TransitionContext";

const Contact = () => {

  const { isFading } = useTransition();

  const { t } = useTranslation("global");

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
      <div className={`fade ${isFading ? "hidden" : ""}`}>
      <div className="hero_box container">
        <p className='hero_box_paragraph' data-aos="fade-zoomIn">
          {t('contact.breadcrumbs')} <span>{t('contact.breadcrumbs_span')}</span>
        </p>
        <h1 className='contact_header' data-aos="fade-zoomIn">
          {t('contact.title')}
        </h1>
        <p className='classes_paragraph' data-aos="fade-zoomIn">
          {t('contact.description')}
        </p>
      </div>
      <div className="hero_box_button">
        <button className='contact_button' onClick={handleChatRedirect}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className='contact_image'
          />
          {t('contact.chat_button')}
        </button>
      </div>
      </div>
    </section>
  );
};

export default Contact;

