import React from 'react'
import './conditions.css'
import { FaCheck } from "react-icons/fa6";
const Conditions = () => {
  return (
    <>
    <ConditionsHero/>
    <ConditionsContent/>  {/* The css property is in privacy and policy */}
    </>
  )
}


export const ConditionsHero = () => {
  return (
    <section className="hero_section">
        <div className="hero_box">
           <p className='hero_box_paragraph' data-aos="fade-zoomIn">HOME / PAGE / <span>TERMS & CONDITIONS</span></p>
            <h1 className='hero_header-1'data-aos="fade-zoomIn">Your Trust, Our Commitment.</h1>
            <p className='hero_hero_hero'data-aos="fade-zoomIn" >Dedicated to protecting your privacy with openness and care.</p>
            <div className="banner_box">
            </div>
        </div>
        <div className="hero_box_button">
           <div className="hero_box_container_buuton">
           <button className='button-1'data-aos="fade-right"><a href="/">  GET STARTED</a></button>
           </div>
        </div>
    </section>
  )
}


export const ConditionsContent = () => {
  return (
    <section className="privacy_page_section">
        <div className="privacy_page_container container">
             <div className="privacy_page_box">
                <h1>Restrictions of use</h1>             
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>Tati All the content you see and hear on the tatiuribestudio.com site including, for example, images, site design, illustrations, graphics are the intellectual property of EL GRUPO AGUDELO URIBE SAS. The content of the tatiuribestudio.com site is intended for the personal, non-commercial use of the users of this site. You will be able to download, print or save selected portions of the content that we provide you with the following conditions: </p>
                </div>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>That the use is personal, without any commercial purpose. Do not copy or reproduce the content in any medium. Do not alter or modify in any way any registered trademark. Tati Uribe is a registered trademark. No right, title or interest in any content or material is transferred to you as a result of the aforementioned activities.</p>              
                </div>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>GRUPO AGUDELO URIBE SAS has complete intellectual property of any content that you download, reproduce, print, redistribute or save from this site. All the contents of the tatiuribestudio.com website are the exclusive and worldwide property of EL GRUPO AGUDELO URIBE SAS including, without limitation, reproductions of articles, graphic design, logos, images, texts, illustrations, photographs, trademarks and other distinctive signs, in any of the programming languages ​​used or usable, as well as all the operation and development software of the website. The reproduction, distribution, communication to the public, making available to the public, transformation, transfer and any other act or mode of exploitation. </p>
                </div>
               <div className="privacy_page_content">
               <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>Your personal data will not be rented or sold for any reason, but it could be shared when you participate in a raffle that is carried out with any other company with which we have partnered to do so that may be of interest to you.</p>
               </div>
                <h1>Pricing policy</h1>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>THE AGUDELO URIBE SAS GROUP, our commitment is to offer convenience, service and availability of products online every day and at attractive prices, with some merchandise offers, for a limited time and at promotional prices. The merchandise offered online in tatiuribestudio.com could present variations compared to the prices offered in other sales channels. </p>
                </div>
                <h1>Colors</h1>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>THE AGUDELO URIBE SAS GROUP has made an effort to display the colors of the products as closely as possible to reality. However, the color of the products that appear on the screen may be subject to variations depending on the quality of your computer monitor. In this sense, THE AGUDELO URIBE SAS GROUP cannot guarantee that the colors that appear on your monitor will faithfully match reality.</p>
                </div>
                <h1>Typographical errors</h1>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>In the event that a product in tatiuribestudio.com appears with an incorrect price due to a typographical error or error in the systems, THE AGUDELO URIBE SAS GROUP will have the right to deny or cancel any order placed for said products. If your credit card has already been charged for the purchase and your order is canceled, GRUPO AGUDELO URIBE SAS will issue a credit to your credit or debit card account for the amount of the canceled price, or will reverse said transaction.In the event that a product in tatiuribestudio.com appears with an incorrect price due to a typographical error or error in the systems, THE AGUDELO URIBE SAS GROUP will have the right to deny or cancel any order placed for said products. If your credit card has already been charged for the purchase and your order is canceled, GRUPO AGUDELO URIBE SAS will issue a credit to your credit or debit card account for the amount of the canceled price, or will reverse said transaction.</p>
                </div>
             </div>
        </div>
    </section>
  )
}


export default Conditions
