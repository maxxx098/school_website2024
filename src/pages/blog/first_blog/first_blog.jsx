import React from 'react'
import './first_blog.css'
import Blog_1 from './images/b3.webp'
import Blog_2 from './images/b4.webp'
import Blog_3 from './images/b6.webp'
const first_blog = () => {
  return (
    <>
    <section className="first_blog_section" data-aos="fade-zoomIn" id='blog'>
        <h1>Info Blog</h1>
        <p className='blog_paragraph'> Join us as we explore the art and craft of writing, one post at a time.</p>
        <div className="first_blog_container container">

            <div className="first_blog_box">
               <div className="blog_image_box">
                <img className='blog_image' src={Blog_1} alt="" />
               </div>
               <div className="icon_box">
               <div className='blog_icon'>
               <i className="ri-calendar-fill"></i>
               <p>3 / 20 / 21</p>
               </div>
               <div className='blog_icon'>
               <i className="ri-chat-1-fill"></i>
               <p>2 min read</p>
               </div>
               <div className='blog_icon'>
               <i className="ri-home-fill"></i>
               <p>2 </p>
               </div>
               </div>
               <div className="blog_box">
               <h2>MIT Supplemental Essay</h2>
               <span>Your key to writing an impressivve essay</span>
               </div>
               <button className="btn-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Explore</span>
            <span className="circle"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-1"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
            </div>
          
            <div className="first_blog_box">
               <div className="blog_image_box">
                <img className='blog_image' src={Blog_2} alt="" />
               </div>
               <div className="icon_box">
               <div className='blog_icon'>
               <i className="ri-calendar-fill"></i>
               <p>3 / 20 / 21</p>
               </div>
               <div className='blog_icon'>
               <i className="ri-chat-1-fill"></i>
               <p>2 min read</p>
               </div>
               <div className='blog_icon'>
               <i className="ri-home-fill"></i>
               <p>2 </p>
               </div>
               </div>
               <div className="blog_box">
               <h2>Application Portals</h2>
               <span>The different application portals that can be </span>
               </div>
               <button className="btn-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Explore</span>
            <span className="circle"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-1"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
            </div>

            <div className="first_blog_box">
               <div className="blog_image_box">
                <img className='blog_image' src={Blog_3} alt="" />
               </div>
               <div className="icon_box">
               <div className='blog_icon'>
               <i className="ri-calendar-fill"></i>
               <p>3 / 20 / 21</p>
               </div>
               <div className='blog_icon'>
               <i className="ri-chat-1-fill"></i>
               <p>2 min read</p>
               </div>
               <div className='blog_icon'>
               <i className="ri-home-fill"></i>
               <p>2 </p>
               </div>
               </div>
               <div className="blog_box">
               <h2>MIT Supplemental Essay</h2>
               <span>Your key to writing an impressivve essay</span>
               </div>
               <button className="btn-1">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-2"
              viewBox="0 0 24 24"
              >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Explore</span>
            <span className="circle"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-1"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
            </div>

        </div>
    </section>
    </>
  )
}

export default first_blog
