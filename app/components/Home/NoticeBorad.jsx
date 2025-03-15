"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import dayjs from "dayjs";

export default async function NoticeBoard({notices}) {

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
        modules={[Autoplay, Navigation]}
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
        className="w-full mx-auto"
      >
        {notices.map((notice, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center min-h-[250px] md:h-[300px] text-black text-lg md:text-xl font-semibold p-6 rounded-lg shadow-lg text-center border-2 border-slate-950 bg-white">
              <span className="text-sm md:text-base text-gray-500">
                {dayjs(notice.date).format('DD-MMM-YYYY hh:mm a')}
              </span>
              <h3 className="text-lg md:text-2xl font-bold text-blue-700 mt-2 break-words max-w-full">
                {notice.noticeTitle}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mt-2">
                {notice.noticeDetails.slice(0,200)}
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
