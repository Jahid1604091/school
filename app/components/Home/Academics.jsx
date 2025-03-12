"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const notices = [
  "Teacher/Stuff",
  "Alumni",
  "Syllabus",
  "Lab",
  "Notes",
  "Textbooks",
];

export default function Academics() {
  return (
    <div className="relative overflow-hidden w-full p-16 bg-gray-300">
      <div className="flex items-center justify-between md:border-b-4 border-green-700 mb-6 ">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
          Academics
        </h2>
        <Link className="text-lg text-green-700 font-semibold" href="/">All</Link>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 }, 
          640: { slidesPerView: 3 }, 
          1024: { slidesPerView: 5 }, 
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        className="w-full mx-auto"
      >
        {notices.map((title, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center h-[200px] md:h-[250px] text-black text-lg md:text-xl font-semibold p-6 rounded-lg shadow-lg text-center border-2 border-slate-950 bg-white">
              <h3 className="text-lg md:text-2xl font-bold text-blue-700">
                {title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
