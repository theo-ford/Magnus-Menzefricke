"use client";

import { useRef, useEffect, useState } from "react";
// import { useMediaQuery } from "./MediaQuery";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export default function HorizontalScroll_v2({
  children
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // const isDesktop = useMediaQuery("(min-width: 1280px)");
  // const [isScrolling, setIsScrolling] = useState(false);
  const [currentSectionState, setCurrentSectionState] = useState(0);
  const [nextSectionState, setNextSectionState] = useState(0);

  const calculateNextSection = (
    sectionsLength: number,
    direction: number,
    currentSection: number
  ) => {
    // console.log("2 calculate next");

    let nextSection = currentSection + direction;
    if (nextSection < 0) nextSection = 0;
    if (nextSection >= sectionsLength) nextSection = sectionsLength - 1;
    console.log(nextSection);
    return nextSection;
  };

  const handleScroll = (el: HTMLDivElement, nextSection: number) => {
    console.log(nextSection);
    el.children[nextSection].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });
  };

  useEffect(() => {
    const el = scrollRef.current;

    if (el) {
      const sections = scrollRef.current?.querySelectorAll(".scroll-section");
      const sectionsLength = sections?.length;

      const onWheel = (e) => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextSection = calculateNextSection(
          sectionsLength,
          direction,
          currentSectionState
        );

        setTimeout(() => setCurrentSectionState(nextSection), 2000);

        requestAnimationFrame(() => {
          handleScroll(el, nextSection);
        });
      };

      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [
    currentSectionState,
    nextSectionState,
    setCurrentSectionState,
    setNextSectionState
  ]);

  return (
    <>
      <div className="w-[100vw] xl:overflow-y-hidden ">
        <div
          ref={scrollRef}
          className="overflow-hidden xl:flex xl:flex-nowrap xl:overflow-x-scroll"
        >
          {children}
        </div>
      </div>
    </>
  );
}
