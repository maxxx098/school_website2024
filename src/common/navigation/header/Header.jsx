import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoExit } from "react-icons/io5";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
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
        <nav className="flexSB">
          {/* Mobile Navigation Menu */}
          <ul className={`mobile-nav ${click ? "open " : ""}`} onClick={() => setClick(false)}>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/">
                Home
              </NavLink>
            </li>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/about_us">
                About Us
              </NavLink>
            </li>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/services">
                Services
              </NavLink>
            </li>
            <li className={`dropdown list ${dropdownOpen ? "open" : ""}`}>
                <NavLink className="nav_link" onClick={toggleDropdown}>
                  Classes <i className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line dropdown-icon`} />
                </NavLink>
                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <li>
                    <NavLink onClick={handleOptionClick} className="dropdown-item" to="/classes">
                      English Standardize Test Prep
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleOptionClick} className="dropdown-item" to="/classes_1">
                      General English Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleOptionClick} className="dropdown-item" to="/classes_2">
                      Business English
                    </NavLink>
                  </li>
                </ul>
              </li>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="list">
              <NavLink onClick={handleOptionClick} className={({ isActive }) => (isActive ? "nav_link_active" : "nav_link")} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          
          {/* Start Button */}
          <div className="start">
            <div className="just_button">
              <NavLink className="nav_link" to="/booking">
                <i className="ri-phone-line"></i>Book a Class 
              </NavLink>
            </div>
          </div>

          {/* Toggle Button for Mobile */}
          <button className="toggle" onClick={toggleMobileMenu}>
            {click ? <IoExit style={{ marginTop: "5px" }} size={25} /> : <HiOutlineMenuAlt1 style={{ marginTop: "5px" }} size={25} />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;

