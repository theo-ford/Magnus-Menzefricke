"use client";

import { useRef, useEffect } from "react";

// import HeroContentScale from "./HeroContentScale";
import { useMediaQuery } from "./MediaQuery";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default function HomepageProjects({ children }: { children: any }) {
  const scrollRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const el: any = scrollRef.current;
    if (el && isDesktop) {
      const onWheel = (e) => {
        console.log(e.deltaY);
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
      <div className="w-[100vw] xl:overflow-y-hidden">
        {/* <div className=""> */}
        <div
          ref={scrollRef}
          // className="overflow-hidden xl:flex xl:flex-nowrap xl:overflow-x-scroll xl:w-[calc(160vw+40px)]"
          className="overflow-hidden xl:flex xl:flex-nowrap xl:overflow-x-scroll "
        >
          {children}
        </div>
      </div>
    </>
  );
}
