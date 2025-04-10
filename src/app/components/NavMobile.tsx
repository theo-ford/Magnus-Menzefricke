"use client";

import { useState } from "react";
import Link from "next/link";

export const NavMobile = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  function menuStateChange() {
    if (menuClicked == false) {
      setMenuClicked(true);
    } else {
      setMenuClicked(false);
    }
    console.log(menuClicked);
  }
  return (
    <>
      <div className="fixed z-100">
        {/* <div className="{{ menuClicked ? 'inline' : 'hidden }}"> */}
        <div className={`${menuClicked ? "hidden" : "inline"} `}>
          <p
            className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[1px] text-gray-300  cursor-pointer"
            onClick={menuStateChange}
          >
            <span className="">Menu / </span>
            <span className="opacity-50">
              {" "}
              <Link href="/news"> News</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="fixed z-100 ">
        {/* <div className="{{ menuClicked ? 'hidden' : 'inline }}"> */}
        <div className={`${menuClicked ? "inline" : "hidden"} `}>
          <p
            className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[7px] text-gray-300 leading-none cursor-pointer"
            onClick={menuStateChange}
          >
            <span className="">Menu / </span>
            <span className="opacity-50">
              {" "}
              <Link href="/"> Portfolio</Link>{" "}
            </span>
            <span className="opacity-50"> / Index</span>
            <span className="opacity-50">
              {" "}
              <Link href="/about">/ About</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
