"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import hero1 from "@/app/assets/images/banner1.jpg";
import hero2 from "@/app/assets/images/banner2.jpg";
import hero3 from "@/app/assets/images/banner3.jpg";

const slides = [hero1, hero2, hero3];

export default function HeroSlider() {
  return (
    <div className="relative overflow-hidden w-full ">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
