import React from 'react';
import Slider from './components/Home/Slider';
import Count from './components/Home/Count';
import Notice from './components/Home/Notice';
import About from './components/Home/About';
import Speech from './components/Home/Speech';
import NoticeBorad from './components/Home/NoticeBorad';
import Academics from './components/Home/Academics';
import Fees from './components/Home/Fees';

async function fetchWithTimeout(url, timeout = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return res.json();
  } catch (error) {
    console.error(`API Fetch Error (${url}):`, error);
    return { data: [] }; // Return default empty data to prevent crashes
  }
}

const page = async () => {
  // Fetch speech data
  const speechData = await fetchWithTimeout(`${process.env.BASE_URL}/speeches`);
  const schoolSpeech = speechData.data.find(s => s.speechBy === 'About School' && s.visibility);
  const headSpeech = speechData.data.filter(s => s.speechBy !== 'About School' && s.visibility);

  // Fetch notice data
  const noticeData = await fetchWithTimeout(`${process.env.BASE_URL}/api/all/notice`);

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
export const dynamic = 'force-dynamic'; // Ensure fresh data in Next.js App Router
