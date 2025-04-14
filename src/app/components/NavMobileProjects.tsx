"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavMobileProjects = ({ projectTitle }) => {
  const pathname = usePathname();

  const [menuClicked, setMenuClicked] = useState(false);
  const [currentPage] = useState(pathname);

  function menuStateChange() {
    if (menuClicked == false) {
      setMenuClicked(true);
    } else {
      setMenuClicked(false);
    }
    console.log(menuClicked);
  }

  // console.log(currentPage);

  return (
    <>
      <div
        className={`${menuClicked ? "hidden" : "inline"} `}
        onClick={menuStateChange}
      >
        <p className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[1px] text-gray-300">
          <span className="/">Menu / </span>
          <span
            className={`${currentPage !== "/" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            {projectTitle}
          </span>
        </p>
      </div>

      <div
        className={`${menuClicked ? "inline" : "hidden"} `}
        onClick={menuStateChange}
      >
        <p className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[1px] text-gray-300">
          <span className="">Menu </span>
          <span
            className={`${currentPage !== "/" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            <Link href="/">/ Portfolio</Link>
          </span>
          <span
            className={`${currentPage !== "/project-index" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            {" "}
            <Link href="/project-index"> / Index</Link>
          </span>
          <span
            className={`${currentPage !== "/news" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            {" "}
            <Link href="/news"> / News</Link>
          </span>
          <span
            className={`${currentPage !== "/about" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            <Link href="/about"> / About</Link>
          </span>
        </p>
      </div>
    </>
  );
};
