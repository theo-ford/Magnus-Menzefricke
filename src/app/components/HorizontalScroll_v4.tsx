// Windsurf responding to v1
// jumping all the way to the end
// read most recent windsurf

"use client";

import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "./MediaQuery";
// import next from "next";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default function HorizontalScroll_v4({
  children
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  // const [isScrolling, setIsScrolling] = useState(false);
  const [currentSectionState, setCurrentSectionState] = useState(0);
  const [nextSectionState, setNextSectionState] = useState(0);

  const calculateNextSection = (
    sectionsLength: number,
    direction: number,
    currentSection: number
  ) => {
    let nextSection = currentSection + direction;
    if (nextSection < 0) nextSection = 0;
    if (nextSection >= sectionsLength) nextSection = sectionsLength - 1;
    console.log(nextSection);
    return nextSection;
  };

  const handleScroll = (el: HTMLDivElement, nextSection: number) => {
    if (!el) return;

    const sectionWidth = window.innerWidth;
    console.log(sectionWidth);
    const targetScroll = nextSection * sectionWidth;
    console.log(targetScroll);

    // Use CSS transforms for smoother animations
    // el.style.transform = `translateX(-${targetScroll}px)`;
    // el.style.transition = "transform 0.5s ease-out";
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const sections = scrollRef.current?.querySelectorAll(".scroll-section");
      const sectionsLength = sections?.length;

      let isScrolling = false;

      const onWheel = (e: WheelEvent) => {
        if (isScrolling) return;
        e.preventDefault();

        const direction = e.deltaY > 0 ? 1 : -1;
        const nextSection = calculateNextSection(
          sectionsLength,
          direction,
          currentSectionState
        );

        // Start scroll animation
        handleScroll(el, nextSection);

        // Debounce the scroll
        isScrolling = true;

        // Reset after animation
        setTimeout(() => {
          isScrolling = false;
          setCurrentSectionState(nextSection);
        }, 2000); // Match the transition duration
      };

      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [
    isDesktop,
    currentSectionState,
    nextSectionState,
    setCurrentSectionState,
    setNextSectionState
    // isScrolling
  ]);

  return (
    <>
      <div className="w-[100vw] xl:overflow-y-hidden relative">
        <div
          ref={scrollRef}
          className="overflow-hidden xl:flex xl:flex-nowrap xl:overflow-x-scroll relative w-[100vw]"
        >
          {/* <div className="w-full">{children}</div> */}
          {children}
        </div>
      </div>
    </>
  );
}
