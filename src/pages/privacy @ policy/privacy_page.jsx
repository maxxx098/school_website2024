import React from 'react'
import './privacy_page.css'
import { FaCheck } from "react-icons/fa6";


const privacy_page = () => {
  return (
    <>
    <Privacy_hero_page/>
    <Privacy_page_content/>
    </>
  )
}


export const Privacy_hero_page = () => {
  return (
    <section className="hero_section">
        <div className="hero_box">
           <p className='hero_box_paragraph' data-aos="fade-zoomIn">HOME / PAGE / <span>PRIVACY & POLICY</span></p>
            <h1 className='hero_header-1'data-aos="fade-zoomIn">Your Privacy, Our Priority.</h1>
            <p className='hero_hero_hero'data-aos="fade-zoomIn" >Committed to safeguarding your privacy with transparency and care.</p>
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

export const Privacy_page_content = () => {
  return (
    <section className="privacy_page_section">
        <div className="privacy_page_container container">
             <div className="privacy_page_box">
                <h1>What information do we ask for and how do we use it?</h1>             
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>At GRUPO AGUDELO URIBE SAS, we request information from our clients in an effort to improve the experience and communication of products, services and promotions. We collect data such as your name, email and address, which you provide us when you register on our site or when you make a payment. For security reasons, we do not request information about your payment methods directly and it remains private between you and our providers of electronic payment systems. </p>
                </div>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>At GRUPO AGUDELO URIBE SAS we can use the information collected online to process and complete your request. We also use email addresses in various places within the site, in order to send email communications related to your request. In addition, we keep a record of your purchases and anything else that allows us to improve and personalize your shopping experience. We also monitor the site for traffic patterns in order to improve its design and the products and services we offer. At GRUPO AGUDELO URIBE SAS we recognize that we must use your information responsibly.At GRUPO AGUDELO URIBE SAS we can use the information collected online to process and complete your request. We also use email addresses in various places within the site, in order to send email communications related to your request. In addition, we keep a record of your purchases and anything else that allows us to improve and personalize your shopping experience. We also monitor the site for traffic patterns in order to improve its design and the products and services we offer. At GRUPO AGUDELO URIBE SAS we recognize that we must use your information responsibly.</p>              
                </div>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>To give you a better service, we can cross-check the information you give us through various means such as our site tatiuribe.com and our social networks. We could also cross this data with public information or with some allied or subsidiary establishments. By crossing this information we will be able to make you a better communication about our products, events, promotions or personalizing your shopping experience. </p>
                </div>
               <div className="privacy_page_content">
               <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>Your personal data will not be rented or sold for any reason, but it could be shared when you participate in a raffle that is carried out with any other company with which we have partnered to do so that may be of interest to you.</p>
               </div>
                <h1>Security</h1>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>When placing an order with us, we want you to feel confident that your personal information and credit card details are completely safe. At tatiuribe.com, in order to provide maximum security to the payment system, we use SECURE PAYMENT systems of leading financial institutions in electronic commerce. In this sense, the confidential data of the payment are transmitted directly and in encrypted form to the corresponding financial institution. </p>
                </div>
                <div className="privacy_page_content">
                <div className="privacy_custom_icon"><FaCheck size={15} /></div><p>Any additional questions in this regard, write to administrativo@grupoagudelouribe.com and it will be gladly answered.</p>
                </div>
             </div>
        </div>
    </section>
  )
}


export default privacy_page
