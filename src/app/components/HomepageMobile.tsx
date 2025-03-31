"use client";

import GridMobile from "./GridMobile";
import HeroContentMobile from "./HeroContentMobile";

export default function MobileHomepage() {
  return (
    <>
      <div className="bg-[#e34234]  float-left relative h-screen">
        <HeroContentMobile />
        <GridMobile />
      </div>
      <div className="float-left relative h-screen">
        <GridMobile />
      </div>
    </>
  );
}
