import React from 'react'
import Hero from './hero/hero'
import About from './about/AboutCard'
import Services from './services/services.jsx'
import Banner from './banner/banner.jsx'
import { Course } from './about/Course.jsx'
import Team from './team/team.jsx'

const home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Course/>
    <Services/>
    <Team/>
    <Banner/>
    </>
  )
}

export default home