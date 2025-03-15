import React from 'react';
import Slider from './components/Home/Slider';
import Count from './components/Home/Count';
import Notice from './components/Home/Notice';
import About from './components/Home/About';
import Speech from './components/Home/Speech';
import NoticeBorad from './components/Home/NoticeBorad';
import Academics from './components/Home/Academics';
import Fees from './components/Home/Fees';

async function getSpeeches() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/speeches`);
    if (!res.ok) throw new Error("Failed to fetch speeches");
    return await res.json();
  } catch (error) {
    console.error("Speech API Fetch Error:", error);
    return { data: [] }; // Return default data to prevent crashes
  }
}

async function getNotices() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/all/notice`);
    if (!res.ok) throw new Error("Failed to fetch notices");
    return await res.json();
  } catch (error) {
    console.error("Notice API Fetch Error:", error);
    return { data: [] }; // Return default data to prevent crashes
  }
}

const page = async () => {
  // Fetch speech data
  const speechData = await getSpeeches();
  const schoolSpeech = speechData.data.find(s => s.speechBy === 'About School' && s.visibility);
  const headSpeech = speechData.data.filter(s => s.speechBy !== 'About School' && s.visibility);

  // Fetch notice data
  const noticeData = await getNotices();

  return (
    <>
      <Slider />
      <Count />
      <Notice />
      <About speech={schoolSpeech} />
      <Speech speeches={headSpeech} />
      <NoticeBorad notices={noticeData} />
      <Academics />
      <Fees />
    </>
  );
};

export default page;

