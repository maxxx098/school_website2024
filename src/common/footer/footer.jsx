import React from 'react'
import { NavLink } from "react-router-dom";
import './footer.css'
import { useTranslation } from 'react-i18next';
const footer = () => {
  const [t] = useTranslation("global");
  return (
    <>
    <footer data-aos="zoomIn">
  <div className='footer_row'>
    <div className="col">
      <div className="footer_image">
        <h1>{t('footer_section.brand_name')}</h1>
        <p>{t('footer_section.tagline')}</p>
      </div>
      <p className='footer_paragraph'>
        {t('footer_section.description')}
      </p>
    </div>
    <div className="col">
      <h3>{t('footer_section.office.title')} <div className="underline"><span className="footer_span"></span></div></h3>
      <ul className="footer_ul">
        {t('footer_section.office.address', { returnObjects: true }).map((item, index) => (
          <li className="footer_list" key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="col">
      <h3>{t('footer_section.links.title')} <div className="underline"><span className="footer_span"></span></div></h3>
      <ul className="footer_ul">
        <li className="footer_list">
          <NavLink className='footer_nav' to="/">{t('footer_section.links.home')}</NavLink>
        </li>
        <li className="footer_list">
          <NavLink className='footer_nav' to="/privacy_page">{t('footer_section.links.privacy_policy')}</NavLink>
        </li>
        <li className="footer_list">
          <NavLink className='footer_nav' to="/services">{t('footer_section.links.services')}</NavLink>
        </li>
        <li className="footer_list">
          <NavLink className='footer_nav' to="/contact">{t('footer_section.links.contact_us')}</NavLink>
        </li>
        <li className="footer_list">
          <NavLink className='footer_nav' to="/terms_and_conditions">{t('footer_section.links.terms_conditions')}</NavLink>
        </li>
      </ul>
    </div>
    <div className="col">
      <h3>{t('footer_section.newsletter.title')} <div className="underline"><span className="footer_span"></span></div></h3>
      <form className='footer_form'>
        <div className="footer_form_box">
          <i className='far fa-envelope'></i>
          <input className='footer_input' type="email" placeholder={t('footer_section.newsletter.placeholder')} required />
        </div>
        <div className='footer_form_line'></div>
        <button className='footer_button' type='submit'>{t('footer_section.newsletter.button')}</button>
      </form>
    </div>
  </div>
  <div className="hr"></div>
  <div className="footer_container">
    <p className='footer_bottom'>{t('footer_section.footer_bottom')}</p>
  </div>
</footer>

    </>
  )
}

export default footer
