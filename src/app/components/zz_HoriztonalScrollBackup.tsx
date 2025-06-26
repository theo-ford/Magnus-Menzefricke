"use client";

import { useRef, useEffect } from "react";
import { useMediaQuery } from "./MediaQuery";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
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

  const wrappedChildren = Array.isArray(children) ? children : [children];
  // console.log(wrappedChildren);
  return (
    <>
      <div className="w-[100vw] xl:overflow-y-hidden ">
        <div
          ref={scrollRef}
          className="overflow-hidden xl:flex xl:flex-nowrap xl:overflow-x-scroll"
          // style={{
          //   scrollSnapType: "x proximity",
          //   scrollBehavior: "smooth"
          // }}
        >
          {wrappedChildren}
          {/* <div className="flex">
            {wrappedChildren.map((child, index) => (
              <div key={index}>{child}</div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
