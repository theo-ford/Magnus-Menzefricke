// src/app/components/ScrollSnapWrapper.tsx
"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "./MediaQuery";

interface ScrollSnapWrapperProps {
  children: React.ReactNode;
  index: number;
  totalItems: number;
}

export const ScrollSnapWrapper: React.FC<ScrollSnapWrapperProps> = ({
  children,
  index,
  totalItems
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    if (!ref.current || !isDesktop) return;

    const element = ref.current;
    const threshold = 0.2; // 20% threshold for snapping

    const handleScroll = (scrollLeft: number) => {
      // Get the parent scroll container
      const container = element.closest(".overflow-x-scroll");
      if (!container) return;

      const containerWidth = container.clientWidth;
      const elementRect = element.getBoundingClientRect();
      const elementLeft =
        elementRect.left - container.getBoundingClientRect().left;
      const elementRight = elementLeft + elementRect.width;

      // Calculate visible ratio
      const visibleLeft = Math.max(
        0,
        Math.min(elementRight, scrollLeft + containerWidth) - scrollLeft
      );
      const visibleRight = Math.max(
        0,
        Math.min(scrollLeft + containerWidth, elementRight) - elementLeft
      );
      const visibleWidth = Math.max(visibleLeft, visibleRight);
      const visibleRatio = visibleWidth / elementRect.width;

      // If we've passed the threshold and we're not at the start or end
      if (visibleRatio < 1 - threshold && index > 0 && index < totalItems - 1) {
        const targetIndex = scrollLeft > elementLeft ? index + 1 : index - 1;
        const targetElement = container.children[targetIndex] as HTMLElement;

        if (targetElement) {
          const targetRect = targetElement.getBoundingClientRect();
          const targetScroll =
            targetRect.left - container.getBoundingClientRect().left;

          container.scrollTo({
            left: targetScroll,
            behavior: "smooth"
          });
        }
      }
    };

    // Listen for scroll events on the parent container
    const container = element.closest(".overflow-x-scroll");
    if (container) {
      container.addEventListener("scroll", (e) => {
        handleScroll(container.scrollLeft);
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [index, totalItems, isDesktop]);

  return (
    <div
      ref={ref}
      style={{
        scrollSnapAlign: "center",
        minWidth: "75vw"
      }}
    >
      {children}
    </div>
  );
};
