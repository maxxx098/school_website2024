import React from 'react'
import Hero from './hero/hero'
import About from './about/AboutCard'
import Services from './services/services.jsx'
import Banner from './banner/banner.jsx'

const home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Banner/>
    </>
  )
}

export default home