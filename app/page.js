import React from 'react'
import Slider from './components/Home/Slider'
import Count from './components/Home/Count'
import Notice from './components/Home/Notice'
import About from './components/Home/About'
import Speech from './components/Home/Speech'
import NoticeBorad from './components/Home/NoticeBorad'
import Academics from './components/Home/Academics'
import Fees from './components/Home/Fees'

async function getSpeeches() {
  const res = await fetch(`${process.env.BASE_URL}/speeches`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getNotices() {
  const res = await fetch(`${process.env.BASE_URL}/api/all/notice`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const page = async () => {
  //speech api
  const data = await getSpeeches();
  const schoolSpeech = data.data.find(s => s.speechBy === 'About School' && s.visibility)
  const headSpeech = data.data.filter(s => s.speechBy !== 'About School' && s.visibility)

  //notice api
  const notice_data = await getNotices();
  return (
    <>
      <Slider />
      <Count />
      <Notice />
      <About speech={schoolSpeech} />
      <Speech speeches={headSpeech} />
      <NoticeBorad notices={notice_data} />
      <Academics />
      <Fees />
    </>
  )
}

export default page