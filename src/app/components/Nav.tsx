"use client";

import { useMediaQuery } from "./MediaQuery";
import { NavDesktopTwo } from "./NavDesktopTwo";
import { NavMobileTwo } from "./NavMobileTwo";
// import { NavMobile } from "./NavMobile";

export const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <div className="fixed z-100">
        {isDesktop ? <NavDesktopTwo /> : <NavMobileTwo />}
      </div>
    </>
  );
};
