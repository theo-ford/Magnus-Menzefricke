"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default function Carousel({ children }: { children: any }) {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  function nextFunc() {
    swiperRef.current.swiper.slideNext();
  }
  function prevFunc() {
    swiperRef.current.swiper.slidePrev();
  }
  return (
    <>
      {/* <Swiper
        // autoplay={{ delay: 0 }}
        loop={true}
        modules={[Navigation, Autoplay]}
        ref={swiperRef}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper> */}

      <Swiper
        autoplay={{ delay: 1000 }}
        speed={1}
        loop={true}
        modules={[Navigation, Autoplay]}
        ref={swiperRef}
      >
        {/* {children} */}
        {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
        {children.map((child: any, id: React.Key | null | undefined) => (
          <SwiperSlide key={id}>
            <div className="w-full ">{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <p onClick={nextFunc}>Next</p>
      <p onClick={prevFunc}>Prev</p> */}
    </>
  );
}
