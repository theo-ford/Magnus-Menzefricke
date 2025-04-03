"use client";

import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function Carousel({ children }: { children: any }) {
  return (
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      // autoplay={true}
      loop={true}
      className="mySwiper"
      modules={[Navigation]}
    >
      {children}
    </Swiper>
  );
}
