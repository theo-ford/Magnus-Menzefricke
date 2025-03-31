// @ts-nocheck
"use client";

import { useRef, useEffect } from "react";
import GridScale from "./GridScale";
import HeroContentScale from "./HeroContentScale";
// import { horizontalFuncOne } from "./HorizontalFuncOne";

export default function HorizontalTwo() {
  // Using the window
  // https://stackoverflow.com/questions/70322886/react-force-horizontal-scrolling-as-vertical-scroll-when-reaching-element-view

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll(e) {
    console.log(e.deltaY);
    window.scrollTo(e.deltaY, 0);
  }

  return (
    <>
      <div
        className="w-[100vw] xl:w-[160vw] flex flex-nowrap overflow-x-scroll"
        // onWheel={handleScroll}
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
  );
}
