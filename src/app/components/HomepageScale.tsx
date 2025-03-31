"use client";

import GridScale from "./GridScale";
import HeroContentScale from "./HeroContentScale";

export default function HomepageScale() {
  return (
    <>
      <div className="w-[100vw] xl:w-[235vw] overflow-hidden">
        <div className="bg-[#e34234]  float-left relative h-screen">
          {/* <HeroContentMobile /> */}
          <HeroContentScale />
          <GridScale />
        </div>
        <div className="float-left relative h-screen">
          <GridScale />
        </div>
      </div>
    </>
  );
}
