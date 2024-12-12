import React from "react"
import { HiViewGrid } from "react-icons/hi"
import { BiShoppingBag } from "react-icons/bi"
import { useTranslation } from "react-i18next"
const Head = () => {
  const [t, i18n] = useTranslation("global");
  
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1> {t("head.header_1")} </h1>
            <span>{t("content.span")}</span>
          </div>

          <div className='social'>
            <HiViewGrid size={25}></HiViewGrid>
            {t("nav.content_12")}
            <BiShoppingBag size={25}></BiShoppingBag>
            {t("nav.content_13")}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
