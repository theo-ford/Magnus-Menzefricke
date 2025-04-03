"use client";

import { useRef, useEffect } from "react";
import GridScale from "./GridScale";
// import HeroContentScale from "./HeroContentScale";
import { useMediaQuery } from "./MediaQuery";

export default function HorizontalOne() {
  const scrollRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const el: any = scrollRef.current;
    if (el && isDesktop) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          top: 0,
          left: el.scrollLeft + e.deltaY
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [isDesktop]);

  return (
    <>
      {/* <div className="xl:w-[100vw] overflow-y-hidden"> */}
      <div className="w-[100vw] xl:overflow-y-hidden">
        {/* <div ref={scrollRef} className="flex flex-nowrap overflow-x-scroll"> */}
        <div
          ref={scrollRef}
          className="overflow-hidden xl:flex xl:flex-nowrap xl:overflow-x-scroll"
        >
          <div className="bg-[#e34234] float-left relative h-screen xl:w-[calc(75vw+20px)]">
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
