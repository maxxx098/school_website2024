import React from 'react'
import './first_blog.css'
import Blog_1 from './images/b3.webp'
import Blog_2 from './images/b4.webp'
import Blog_3 from './images/b6.webp'
import { useTranslation } from 'react-i18next'
const first_blog = () => {
  const { t } = useTranslation("global");
  return (
    <>
   <section className="first_blog_section" data-aos="fade-zoomIn" id="blog">
        <h1>{t('blog.title')}</h1>
        <p className="blog_paragraph">{t('blog.subtitle')}</p>
        <div className="first_blog_container container">
          {[Blog_1, Blog_2, Blog_3].map((blogImage, index) => (
            <div key={index} className="first_blog_box">
              <div className="blog_image_box">
                <img className="blog_image" src={blogImage} alt={`Blog ${index + 1}`} />
              </div>
              <div className="icon_box">
                <div className="blog_icon">
                  <i className="ri-calendar-fill"></i>
                  <p>{t('blog.date')}</p>
                </div>
                <div className="blog_icon">
                  <i className="ri-chat-1-fill"></i>
                  <p>{t('blog.read_time')}</p>
                </div>
                <div className="blog_icon">
                  <i className="ri-home-fill"></i>
                  <p>{t('blog.comments')}</p>
                </div>
              </div>
              <div className="blog_box">
                <h2>{t(`blog.post_${index + 1}.title`)}</h2>
                <span>{t(`blog.post_${index + 1}.subtitle`)}</span>
              </div>
              <button className="btn-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                  <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                  ></path>
                </svg>
                <span className="text">{t('blog.explore')}</span>
                <span className="circle"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                  <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default first_blog
