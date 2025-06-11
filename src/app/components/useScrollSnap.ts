// import { useEffect, useRef } from "react";
// import { useMediaQuery } from "./MediaQuery";

// interface ScrollSnapOptions {
//   threshold?: number;
//   snapTo?: "start" | "center" | "end";
// }

// export function useScrollSnap(
//   containerRef: React.RefObject<HTMLElement>,
//   options: ScrollSnapOptions = {}
// ) {
//   const { threshold = 100, snapTo = "start" } = options;
//   const isDesktop = useMediaQuery("(min-width: 1280px)");

//   useEffect(() => {
//     if (!containerRef.current || !isDesktop) return;

//     const handleScroll = () => {
//       const container = containerRef.current;
//       const scrollLeft = container.scrollLeft;
//       const containerWidth = container.clientWidth;
//       const scrollWidth = container.scrollWidth;

//       // Find the closest snap point
//       const snapPoints = Array.from(container.children).map((child) => {
//         const rect = child.getBoundingClientRect();
//         const left = rect.left + window.scrollX;
//         return left;
//       });

//       let targetSnapPoint = 0;
//       let minDistance = Infinity;

//       snapPoints.forEach((point) => {
//         const distance = Math.abs(point - scrollLeft);
//         if (distance < minDistance) {
//           minDistance = distance;
//           targetSnapPoint = point;
//         }
//       });

//       // Only snap if we've moved past the threshold
//       if (minDistance > threshold) {
//         const target =
//           snapTo === "center"
//             ? targetSnapPoint - containerWidth / 2
//             : snapTo === "end"
//               ? targetSnapPoint - containerWidth
//               : targetSnapPoint;

//         container.scrollTo({
//           left: target,
//           behavior: "smooth"
//         });
//       }
//     };

//     // Add scroll listener
//     containerRef.current.addEventListener("scroll", handleScroll);

//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [containerRef, isDesktop, threshold, snapTo]);
// }
