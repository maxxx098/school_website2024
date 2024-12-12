import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoExit } from "react-icons/io5";
import Head from "./Head";
import "./header.css";
import { useTranslation } from "react-i18next";
import { useTransition } from "../../TransitionContext";

const Header = () => {

  const [t, i18n] = useTranslation("global");
  const { isFading, setIsFading } = useTransition();

  const handleChangeLanguage = (lang) => {
    setIsFading(true); 
    setSecondDropdownOpen(false);
    setTimeout(() => {
      i18n.changeLanguage(lang); 
      setIsFading(false); 
    }, 500); 
  };

  {/* Dropdown Menu */}
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
  e.stopPropagation();
  setDropdownOpen(!dropdownOpen);
  };

  const toggleSecondDropdown = (e) => {
  e.stopPropagation();
  setSecondDropdownOpen(!secondDropdownOpen);
  };

  const handleOptionClick = () => {
  setDropdownOpen(false);
  };

 const toggleMobileMenu = () => {
  setClick(!click);
 };

  return (
    <>
      <Head />
      <header>
       <div className={`fade ${isFading ? "hidden" : ""}`}>
       <nav className="flexSB">
          {/* Mobile Navigation Menu */}
          <ul className={`mobile-nav ${click ? "open " : ""}`} onClick={() => setClick(false)}>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/">
              {t("nav.content_1")}
              </NavLink>
            </li>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/about_us">
              {t("nav.content_2")}
              </NavLink>
            </li>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/services">
              {t("nav.content_3")}
              </NavLink>
            </li>
            <li className={`dropdown list ${dropdownOpen ? "open" : ""}`}>
                <NavLink className="nav_link" onClick={toggleDropdown}>
                {t("nav.content_4")} <i className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line dropdown-icon`} />
                </NavLink>
                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <li>
                    <NavLink onClick={handleOptionClick} className="dropdown-item" to="/classes">
                    {t("nav.content_5")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleOptionClick} className="dropdown-item" to="/classes_1">
                    {t("nav.content_6")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleOptionClick} className="dropdown-item" to="/classes_2">
                    {t("nav.content_7")}
                    </NavLink>
                  </li>
                </ul>
              </li>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/blog">
              {t("nav.content_8")}
              </NavLink>
            </li>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/contact">
              {t("nav.content_9")}
              </NavLink>
            </li>
            <li className={`dropdown list ${secondDropdownOpen ? "open" : ""}`}>
                <NavLink className="nav_link" onClick={toggleSecondDropdown}>
                {t("nav.content_10")} <i className={`ri-arrow-${secondDropdownOpen ? "up" : "down"}-s-line dropdown-icon`} />
                </NavLink>
                <ul className={`dropdown-menu ${secondDropdownOpen ? "show" : ""}`}>
                  <li>
                    <button onClick={()=> handleChangeLanguage("en")} className="dropdown-item" >
                     English
                    </button>
                  </li>
                  <li>
                    <button onClick={()=> handleChangeLanguage("zh")} className="dropdown-item" >
                    中文
                    </button>
                  </li>
                </ul>
              </li>
          </ul>
          
          {/* Start Button */}
          <div className="start">
            <div className="just_button">
              <NavLink className="nav_link" to="/booking">
                <i className="ri-phone-line"></i>{t("nav.content_11")}
              </NavLink>
            </div>
          </div>

          {/* Toggle Button for Mobile */}
          <button className="toggle" onClick={toggleMobileMenu}>
            {click ? <IoExit style={{ marginTop: "5px" }} size={25} /> : <HiOutlineMenuAlt1 style={{ marginTop: "5px" }} size={25} />}
          </button>
        </nav>
       </div>
      </header>
    </>
  );
};



export default Header;

