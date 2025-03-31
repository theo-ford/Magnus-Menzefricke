// @ts-nocheck
"use client";

import { useRef, useEffect } from "react";
import GridScale from "./GridScale";
import HeroContentScale from "./HeroContentScale";
// import { horizontalFuncOne } from "./HorizontalFuncOne";

export default function HorizontalOne() {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        console.log(e.deltaY);
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          // doesn't do anything
          // window.scrollTo({
          // produces a little nudge
          top: 0,
          left: el.scrollLeft + e.deltaY
          // for el
          // left: window.scrollLeft + e.deltaY * 5,
          // for window
          // when you scroll right horizontally, you scan scroll back using vertical scroll
          // why can't you go forward?
          // behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  // useEffect(() => {
  //   const onWheel = (e) => {
  //     console.log(e.deltaY);
  //     if (e.deltaY == 0) return;
  //     // e.preventDefault();
  //     window.scrollTo({
  //       top: 0,
  //       left: e.deltaY,
  //       behavior: "smooth"
  //     });
  //     // window.scrollBy(window.scrollLeft + e.deltaY, 0);
  //     // doesn't work
  //   };
  //   window.addEventListener("wheel", onWheel);
  //   return () => window.removeEventListener("wheel", onWheel);
  // }, []);

  return (
    <>
      <div className="xl:w-[100vw] overflow-y-hidden">
        <div
          ref={scrollRef}
          // className="w-[100vw] xl:w-[160vw] flex flex-nowrap overflow-x-scroll"
          className="w-[100vw] flex flex-nowrap overflow-x-scroll"
          // onWheel={handleScroll}
        >
          <div className="bg-[#e34234]  float-left relative h-screen xl:w-[calc(75vw+20px)]">
            <GridScale />
          </div>
          <div className="float-left relative h-screen xl:w-[calc(75vw+20px)]">
            <GridScale />
          </div>

          {/* <GridScale />

        <GridScale /> */}
        </div>
      </div>
    </>
  );
}
