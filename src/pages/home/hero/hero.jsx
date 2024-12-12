import React from "react";
import { IoSend } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useTransition } from "../../../common/TransitionContext";
import './hero.css';
import '../../../index.css';

const hero = () => {
  const { isFading } = useTransition();
  const [t] = useTranslation("global");

  const scrollToSection = () => {
    document.getElementById("home_section").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero">
      <div className={`fade ${isFading ? "hidden" : ""}`}>
        <div className="container hero_container">
          <div className="row">
            <span className="hero_paragraph">{t("homepage.content_1")}</span>
            <h1 className="hero_header">{t("homepage.content_2")}</h1>
            <p data-aos="fade-zoomIn">{t("homepage.content_3")}</p>
            <div className="button" data-aos="fade-zoomIn">
              <button
                style={{ cursor: "pointer" }}
                className="primary-btn"
                onClick={scrollToSection}
              >
                {t("homepage.content_4")} <IoSend size={15} />
              </button>
            </div>
          </div>
          <div className="row row_button">
            <button className="custom-button">
              <div className="icon">
                <BsFillLightningChargeFill size={25} />
              </div>
              <div className="text">
                <span className="text-primary">{t("homepage.content_7")}</span>
                <span className="text-secondary">{t("homepage.content_8")}</span>
              </div>
            </button>
            <button className="custom-button-secondary">
              <div className="icon">
                <FaGraduationCap size={25} />
              </div>
              <div className="text">
                <span className="text-primary">{t("homepage.content_5")}</span>
                <span className="text-secondary">{t("homepage.content_6")}</span>
              </div>
            </button>
            <button className="custom-button-third">
              <div className="icon">
                <FaUsers size={25} />
              </div>
              <div className="text">
                <span className="text-primary">{t("homepage.content_5")}</span>
                <span className="text-secondary">{t("homepage.content_6")}</span>
              </div>
            </button>
          </div>
        </div>
        </div>
    </section>
  );
};

export default hero;

