import React from "react"
import { HiViewGrid } from "react-icons/hi"
import { BiShoppingBag } from "react-icons/bi"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>INKSCRIBE</h1>
            <span>WRITING & EDUCATION</span>
          </div>

          <div className='social'>
            <HiViewGrid size={25}></HiViewGrid>
            Category
            <BiShoppingBag size={25}></BiShoppingBag>
            Log In
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
