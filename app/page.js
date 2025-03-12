import React from 'react'
import Slider from './components/Home/Slider'
import Count from './components/Home/Count'
import Notice from './components/Home/Notice'
import About from './components/Home/About'
import Speech from './components/Home/Speech'

const page = () => {
  return (
    <>
      <Slider />
      <Count />
      <Notice />
      <About />
      <Speech />
    </>
  )
}

export default page