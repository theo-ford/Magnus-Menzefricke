"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function Carousel({ children }: { children: any }) {
  const swiperRef = useRef<any>(null);

  // function nextFunc() {
  //   swiperRef.current.swiper.slideNext();
  // }
  // function prevFunc() {
  //   swiperRef.current.swiper.slidePrev();
  // }
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
        {children.map((child: any, id: React.Key | null | undefined) => (
          <SwiperSlide key={id}>
            <div className="w-full h-[110vh] grid grid-cols-48 justify-items-center items-center">
              {/* <div className={ImageOrientation(child)}>{child}</div> */}
              {/* <div className="col-[13_/_span_24]">{child}</div> */}
              {child}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <p onClick={nextFunc}>Next</p>
      <p onClick={prevFunc}>Prev</p> */}
    </>
  );
}
