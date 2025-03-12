import React from 'react'
import Slider from './components/Home/Slider'
import Count from './components/Home/Count'
import Notice from './components/Home/Notice'
import About from './components/Home/About'
import Speech from './components/Home/Speech'
import NoticeBorad from './components/Home/NoticeBorad'
import Academics from './components/Home/Academics'
import Fees from './components/Home/Fees'

const page = () => {
  return (
    <>
      <Slider />
      <Count />
      <Notice />
      <About />
      <Speech />
      <NoticeBorad />
      <Academics />
      <Fees />
    </>
  )
}

export default page