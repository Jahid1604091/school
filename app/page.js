import { Suspense } from "react";
import NoticeBorad from "./components/Home/NoticeBorad";
import Slider from "./components/Home/Slider";
import Count from "./components/Home/Count";
import Notice from "./components/Home/Notice";
import Academics from "./components/Home/Academics";
import Fees from "./components/Home/Fees";

async function getNotices() {
  try {
    const res = await fetch(`https://stam.backend.khanmashrur.com/api/all/notice`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  } catch (error) {
    console.error("Error in Notice API Fetch:", error);
    return { data: [] };
  }
}

export default async function Homepage() {
  const noticeData = await getNotices();
  return (
    <>
      <Slider />
      <Count />
      <Notice />
      <Suspense fallback={<p>Loading Notices...</p>}>
        <NoticeBorad notices={noticeData} />
      </Suspense>
      <Academics />
      <Fees />
    </>
  );
}
