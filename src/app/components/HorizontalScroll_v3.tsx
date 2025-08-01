// // Windsurf responding to v1
// // jumping all the way to the end
// // read most recent windsurf

// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useMediaQuery } from "./MediaQuery";

// interface HorizontalScrollProps {
//   children: React.ReactNode;
// }

// // eslint-disable-next-line  @typescript-eslint/no-explicit-any
// export default function HorizontalScroll_v3({
//   children
// }: HorizontalScrollProps) {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const isDesktop = useMediaQuery("(min-width: 1280px)");
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [currentSectionState, setCurrentSectionState] = useState(0);
//   const [nextSectionState, setNextSectionState] = useState(0);

//   // useEffect(() => {
//   //   // eslint-disable-next-line  @typescript-eslint/no-explicit-any
//   //   const el: any = scrollRef.current;
//   //   if (el && isDesktop) {
//   //     const onWheel = (e) => {
//   //       console.log(e.deltaY);
//   //       if (e.deltaY == 0) return;
//   //       e.preventDefault();
//   //       el.scrollTo({
//   //         top: 0,
//   //         left: el.scrollLeft + e.deltaY
//   //       });
//   //     };
//   //     el.addEventListener("wheel", onWheel);
//   //     return () => el.removeEventListener("wheel", onWheel);
//   //   }
//   // }, [isDesktop]);

//   // useEffect(() => {
//   //   const el = scrollRef.current;
//   //   if (el && isDesktop) {
//   //     const sections = el.querySelectorAll(".scroll-section");

//   //     const observer = new IntersectionObserver(
//   //       (entries) => {
//   //         entries.forEach((entry) => {
//   //           if (entry.isIntersecting) {
//   //             // Get the index of the currently visible section
//   //             const index = Array.from(sections).indexOf(entry.target);
//   //             setCurrentSectionState(index);
//   //           }
//   //         });
//   //       },
//   //       {
//   //         threshold: 1, // When 50% of the section is visible
//   //         root: el
//   //       }
//   //     );

//   //     // Observe each section
//   //     sections.forEach((section) => observer.observe(section));

//   //     return () => {
//   //       sections.forEach((section) => observer.unobserve(section));
//   //     };
//   //   }
//   // }, [isDesktop, children]);

//   // useEffect(() => {
//   //   const el = scrollRef.current;
//   //   if (el && isDesktop) {
//   //     // Get all scrollable sections
//   //     // console.log(el);

//   //     const sections = el.querySelectorAll(".scroll-section");
//   //     // console.log(sections);

//   //     const sectionCount = sections.length;
//   //     // console.log(sectionCount);

//   //     // Track current section
//   //     // const currentSection = 0;

//   //     // console.log(currentSectionState);

//   //     const onWheel = (e) => {
//   //       e.preventDefault();

//   //       // setIsScrolling(true);

//   //       // Determine scroll direction
//   //       const direction = e.deltaY > 0 ? 1 : -1;

//   //       // Calculate next section
//   //       let nextSection = currentSectionState + direction;
//   //       // console.log(nextSection);
//   //       // console.log(currentSection);

//   //       // Ensure we stay within bounds
//   //       if (nextSection < 0) nextSection = 0;
//   //       if (nextSection >= sectionCount) nextSection = sectionCount - 1;

//   //       // Calculate target scroll position
//   //       const sectionWidth = window.innerWidth;
//   //       const targetScroll = nextSection * sectionWidth;
//   //       // const targetScroll = (currentSection + 1) * sectionWidth;

//   //       // Smooth scroll to target section
//   //       el.scrollTo({
//   //         top: 0,
//   //         left: targetScroll - 700,
//   //         behavior: "smooth"
//   //       });

//   //       // return currentSection;

//   //       // Update current section
//   //       // currentSection = nextSection;
//   //       // return;

//   //       // setCurrentSectionState(nextSection);
//   //       return nextSection;
//   //     };

//   //     // setCurrentSectionState(onWheel(e));
//   //     // var newCurrentSection = currentSection;

//   //     el.addEventListener("wheel", onWheel);
//   //     return () => el.removeEventListener("wheel", onWheel);
//   //   }
//   // }, [isDesktop, currentSectionState]);

//   // Move scroll logic outside of useEffect

//   // Inside useEffect

//   const calculateNextSection = (
//     sectionsLength: number,
//     direction: number,
//     currentSection: number
//   ) => {
//     console.log("2 calculate next");

//     let nextSection = currentSection + direction;
//     if (nextSection < 0) nextSection = 0;
//     if (nextSection >= sectionsLength) nextSection = sectionsLength - 1;
//     console.log(nextSection);
//     return nextSection;
//   };

//   const handleScroll = (el: HTMLDivElement, nextSection: number) => {
//     console.log("3 handle scroll");
//     // setNextSectionState(calculateNextSection(sectionsLength, direction));
//     const sectionWidth = window.innerWidth;
//     const targetScroll = nextSection * sectionWidth;
//     el.scrollTo({
//       top: 0,
//       // left: targetScroll - 700,
//       left: targetScroll,
//       behavior: "smooth"
//     });
//   };

//   useEffect(() => {
//     const el = scrollRef.current;

//     if (el && isDesktop) {
//       const sections = scrollRef.current?.querySelectorAll(".scroll-section");
//       const sectionsLength = sections?.length;

//       const onWheel = (e) => {
//         // if (isScrolling) return;

//         console.log("1 wheel");
//         console.log(currentSectionState);
//         // e.preventDefault();
//         // setIsScrolling(true);

//         const direction = e.deltaY > 0 ? 1 : -1;
//         // const nextSection = calculateNextSection(
//         //   sectionsLength,
//         //   direction,
//         //   currentSectionState
//         // );
//         // setCurrentSectionState(nextSection);

//         // function myGreeting() {
//         //   setCurrentSectionState(nextSection);
//         // }

//         // const myTimeout = setTimeout(myGreeting, 2000);

//         // handleScroll(el, nextSection);
//         el.addEventListener(
//           "scrollend",
//           () => {
//             // setIsScrolling(false);
//           },
//           { once: true }
//         );
//         // setCurrentSectionState(nextSection);
//         // el.addEventListener(
//         //   "scrollend",
//         //   () => {
//         //     setCurrentSectionState(nextSectionState);
//         //   },
//         //   { once: true }
//         // );
//         // el.addEventListener(
//         //   "scrollend",
//         //   () => {
//         //     // handleScroll(el, direction);
//         //     setCurrentSectionState(nextSectionState);
//         //     // setCurrentSectionState(
//         //     //   calculateNextSection(sectionsLength, direction)
//         //     // );
//         //     // console.log("useEffect");
//         //   },
//         //   { once: true }
//         // );
//       };

//       el.addEventListener("wheel", onWheel);
//       return () => el.removeEventListener("wheel", onWheel);
//     }
//   }, [
//     isDesktop,
//     currentSectionState,
//     nextSectionState,
//     setCurrentSectionState,
//     setNextSectionState
//   ]);

//   // const wrappedChildren = Array.isArray(children) ? children : [children];

//   return (
//     <>
//       <div className="w-[100vw] xl:overflow-y-hidden ">
//         <div
//           ref={scrollRef}
//           className="overflow-hidden xl:flex xl:flex-nowrap xl:overflow-x-scroll"
//           style={
//             {
//               // scrollBehavior: "smooth"
//             }
//           }
//         >
//           {/* {wrappedChildren} */}
//           {/* {children} */}
//           <div className="flex xl:flex-nowrap snap-x snap-mandatory">
//             {children}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
