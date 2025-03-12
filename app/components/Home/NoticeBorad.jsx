"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const notices = [
  {
    date: "১৫ মার্চ, ২০২৫",
    title: "স্কুল বন্ধ থাকার নোটিশ",
    description:
      "📢 রক্ষণাবেক্ষণের কারণে শুক্রবার স্কুল বন্ধ থাকবে। অনুগ্রহ করে পরিকল্পনা অনুযায়ী চলুন।",
  },
  {
    date: "৫ এপ্রিল, ২০২৫",
    title: "ফাইনাল পরীক্ষার সময়সূচী প্রকাশিত",
    description:
      "📌 ফাইনাল পরীক্ষার সময়সূচী প্রকাশ করা হয়েছে। বিস্তারিত জানতে নোটিশ বোর্ড দেখুন।",
  },
  {
    date: "১০ এপ্রিল, ২০২৫",
    title: "নতুন আইসিটি ক্লাস শুরু",
    description:
      "🚀 দারুণ খবর! আগামী সপ্তাহ থেকে নতুন আইসিটি ক্লাস শুরু হচ্ছে। এখনই নিবন্ধন করুন!",
  },
  {
    date: "২০ এপ্রিল, ২০২৫",
    title: "ভর্তি প্রক্রিয়া শুরু",
    description:
      "🎓 আগামী শিক্ষাবর্ষের ভর্তি প্রক্রিয়া শুরু হয়েছে। আজই আবেদন করুন এবং আপনার আসন নিশ্চিত করুন!",
  },
  {
    date: "১৫ মে, ২০২৫",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    description:
      "🏆 আগামী ১৫ অক্টোবর বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে। প্রস্তুত হন এবং অংশগ্রহণ করুন!",
  },
  {
    date: "২৫ মে, ২০২৫",
    title: "অভিভাবক-শিক্ষক সভা",
    description:
      "📝 ২০ সেপ্টেম্বর অভিভাবক-শিক্ষক সভার আয়োজন করা হয়েছে। সকল অভিভাবককে উপস্থিত থাকার অনুরোধ জানানো হচ্ছে।",
  },
];

export default function NoticeBoard() {
  return (
    <div className="relative overflow-hidden w-full p-16">
      <div className="flex items-center justify-between md:border-b-4 border-green-700 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
          Notice Board
        </h2>
        <Link
          className="text-lg text-green-700 font-semibold "
          href="/"
        >
          All
        </Link>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile - 1 slide
          640: { slidesPerView: 2 }, // Tablet - 2 slides
          1024: { slidesPerView: 3 }, // Desktop - 3 slides
        }}
        // slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full mx-auto"
      >
        {notices.map((notice, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center min-h-[250px] md:h-[300px] text-black text-lg md:text-xl font-semibold p-6 rounded-lg shadow-lg text-center border-2 border-slate-950 bg-white">
              <span className="text-sm md:text-base text-gray-500">
                {notice.date}
              </span>
              <h3 className="text-lg md:text-2xl font-bold text-blue-700 mt-2">
                {notice.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mt-2">
                {notice.description}
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
