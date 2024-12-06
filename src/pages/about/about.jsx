import React from 'react'
import Hero from './hero/about_hero'
import About_us from './about_us/about_us'
import Team from './team/team'
import Testimonial from './testimonial/testimonial'
import FAQ from './FAQ/faq'
import Banner from '../home/banner/banner'
const about = () => {
  return (
    <>
    <Hero/>
    <About_us/>
    <Team/>
    <FAQ/>
    <Banner/>
    </>
  )
}

export default about
