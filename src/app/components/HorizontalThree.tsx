// @ts-nocheck
"use client";

import { useRef, useEffect } from "react";
import GridScale from "./GridScale";
import HeroContentScale from "./HeroContentScale";
import "react-horizontal-vertical/rhv.css";
// import { Rhv } from "react-horizontal-vertical";
// import { horizontalFuncOne } from "./HorizontalFuncOne";

export default function HorizontalThree() {
  const scrollRef = useRef();

  // const onWheel = (e) => {
  //   const el = scrollRef.current;
  //   // e.preventDefault();
  //   console.log("hello");
  //   console.log(e.deltaY);
  //   el.scrollTo({
  //     top: 0,
  //     left: el.scrollLeft + e.deltaY,
  //     behaviour: "smooth" //if you want smooth scrolling
  //   });
  // };
  // produces deltaY

  const onWheel = (e: UIEvent) => {
    const element = scrollRef.current;
    if (element) {
      if (e.deltaY == 0) return;
      console.log(e.deltaY);
      element.scrollTo({
        left: element.scrollLeft + e.deltaY
      });
    }
  };

  return (
    <>
      <>
        <div
          className="w-[100vw] xl:w-[160vw] flex flex-nowrap overflow-x-scroll"
          onWheel={onWheel}
          ref={scrollRef}
        >
          <div className="bg-[#e34234]  float-left relative h-screen xl:w-[calc(75vw+20px)]">
            <HeroContentScale />
            <GridScale />
          </div>
          <div className="float-left relative h-screen xl:w-[calc(75vw+20px)]">
            <GridScale />
          </div>
        </div>
      </>
    </>
  );
}
