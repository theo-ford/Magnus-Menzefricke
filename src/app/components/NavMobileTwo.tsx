"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavMobileTwo = () => {
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
        className={`${menuClicked ? "hidden" : "inline"} cursor-none`}
        onClick={menuStateChange}
      >
        <p className="font-bold text-[24px] tracking-[-1px] m-[15px] mt-[7px] text-gray-300 ">
          <span className="cursor-none">Menu </span>
          <span
            className={`${currentPage == "/" ? "inline" : "hidden"} opacity-50 `}
          >
            <Link href="/" className="cursor-none">
              / Portfolio
            </Link>
          </span>
          <span
            className={`${currentPage == "/about" ? "inline" : "hidden"} opacity-50`}
          >
            <Link href="/about" className="cursor-none">
              / About
            </Link>
          </span>
          <span
            className={`${currentPage == "/news" ? "inline" : "hidden"} opacity-50`}
          >
            <Link href="/news" className="cursor-none">
              / News
            </Link>
          </span>
          <span
            className={`${currentPage == "/project-index" ? "inline" : "hidden"} opacity-50`}
          >
            <Link href="/project-index" className="cursor-none">
              / Index
            </Link>
          </span>
        </p>
      </div>

      <div
        className={`${menuClicked ? "inline" : "hidden"} cursor-none`}
        onClick={menuStateChange}
      >
        <p className="font-bold text-[24px] tracking-[-1px] m-[15px] mt-[7px] text-gray-300">
          <span className="cursor-none">Menu </span>
          <span
            className={`${currentPage !== "/" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            <Link href="/" className="cursor-none">
              / Portfolio
            </Link>
          </span>
          <span
            className={`${currentPage !== "/project-index" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            {" "}
            <Link href="/project-index" className="cursor-none">
              {" "}
              / Index
            </Link>
          </span>
          <span
            className={`${currentPage !== "/news" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            {" "}
            <Link href="/news" className="cursor-none">
              {" "}
              / News
            </Link>
          </span>
          <span
            className={`${currentPage !== "/about" ? "inline" : "hidden"} opacity-50 hover:opacity-100`}
          >
            <Link href="/about" className="cursor-none">
              {" "}
              / About
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};
