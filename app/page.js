import React from 'react'
import Slider from './components/Home/Slider'
import Count from './components/Home/Count'
import Notice from './components/Home/Notice'
import About from './components/Home/About'

const page = () => {
  return (
    <>
      <Slider />
      <Count />
      <Notice />
      <About />
    </>
  )
}

export default page