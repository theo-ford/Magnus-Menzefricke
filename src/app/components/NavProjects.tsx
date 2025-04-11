"use client";

import { useMediaQuery } from "./MediaQuery";
import { NavDesktopProjects } from "./NavDesktopProjects";
import { NavMobileProjects } from "./NavMobileProjects";

// import { NavMobile } from "./NavMobile";

export const NavProjects = ({ projectTitle }) => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <div className="fixed z-100">
        {isDesktop ? (
          <NavDesktopProjects projectTitle={projectTitle} />
        ) : (
          <NavMobileProjects projectTitle={projectTitle} />
        )}
      </div>
    </>
  );
};
