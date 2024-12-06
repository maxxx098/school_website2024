import React from 'react'
import './pricing.css'
import 'animate.css';
const pricing = () => {

  return (
    <>
    <section className="pricing_section">
     <h3 className='h-3_title'data-aos="fade-zoomIn" >Pricing Plan</h3>
     <h2 className='services_paragraph'data-aos="fade-zoomIn">Find the best way for you 
    </h2>
      <div className="wrapper" data-aos="fade-zoomIn">
        <div className="card " >
            <h3>Intro</h3>
            <h1>$25 <span>/Starts</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>One-on-one call</li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Group Call Classes</li>
            </ul>
            <a href="/booking">Choose Plan</a>

        </div>
        <div className="card ">
            <h3>Popular</h3>
            <h1>$30 <span>/Starts</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <ul>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>One-on-one call</li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Group Call Classes</li>
            </ul>
            </ul>
            <a href="/booking">Choose Plan</a>

        </div>


        <div className="card">
            <h3>Premium</h3>
            <h1>$30 <span>/Starts</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>One-on-one call</li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Group Call Classes</li>
            </ul>
            <a href="/booking">Choose Plan</a>

        </div>
    </div>
    </section>
    </>
  )
}

export default pricing
