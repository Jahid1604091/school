import React from 'react'
import Slider from './components/Home/Slider'
import Count from './components/Home/Count'

const page = () => {
  return (
    <section className='relative'>
      <Slider/>
      <Count/>
    </section>
  )
}

export default page