"use client";

// import HeroContentScale from "./HeroContentScale";

import GridScale from "./GridScale";
import { PrismicRichText } from "@prismicio/react";
import Logo from "./Logo";
import LogoMagnusHeight from "./Logo_MagnusHeight";
import LogoMagnusWidth from "./Logo_MagnusWidth";
import LogoMenzefrickeHeight from "./Logo_MenzefrickeHeight";
import LogoMenzefrickeWidth from "./Logo_MenzefrickeWidth";
import GridScaleHero from "./GridScaleHero";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default function Hero({ pageData }) {
  return (
    <>
      <div className="bg-[#e34234] float-left relative xl:w-[calc(75vw+30px)] xl:mr-[-2px] h-[100vh]">
        <div className="m-[30px] w-[calc(100vw-60px)] xl:m-[30px] xl:w-[calc(75vw-90px)] ">
          <div className="h-[calc(100vh-64px)] mt-[30px] absolute top-[0] z-50 xl:w-[calc(75vw-36px)] xl:mt-[45px]">
            {/* <div className="h-[calc(100vh-20px)] w-[calc(100%)] absolute top-[0] h-[calc(100vh-20px]">
              <div className="mt-[16.67vh] h-[calc(16.67vh-10px)] xl:mt-[12.5vh] xl:h-[calc(25vh-10px)] w-auto">
                <div className="h-[101%] w-auto">
                  <Logo />
                </div>
              </div>
            </div> */}
            <div className="w-[calc(100%-30px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[15px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%-36px)] overflow-hidden">
              {/* <div className="col-start-1 row-start-3 row-span-2 xl:col-start-1 xl:row-start-2 xl:row-span-2 xl:col-span-8 bg-green-800"> */}
              <div className="hidden xl:inline xl:col-start-1 xl:row-start-2 xl:row-span-2">
                <div className="mt-[-0.3vh] h-[100.5%]">
                  <Logo />
                </div>
              </div>
              <div className="xl:hidden col-start-1 row-start-3 col-span-4">
                <div className="mt-[0.3vh] h-[7.6vh]">
                  <LogoMagnusHeight />
                </div>
              </div>
              <div className="xl:hidden col-start-1 row-start-4 col-span-4">
                <div className="mt-[0.3vh] h-[6.1vh]">
                  <LogoMenzefrickeHeight />
                </div>
              </div>

              <div className="col-span-4 col-start-1 row-start-9 xl:col-start-1 xl:col-span-6 xl:row-start-6">
                <h5 className="text-[18px] font-bold p-[0px] m-[0px] mt-[4vh] leading-none  xl:text-[22px] xl:mt-[8vh]">
                  Introduction
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-10 xl:col-start-1 xl:col-span-6 xl:row-start-7">
                <h5 className="text-[18px] p-[0px] mt-[5px] leading-none  xl:text-[22px]">
                  <PrismicRichText field={pageData.introduction} />
                </h5>
              </div>
            </div>
          </div>
          <GridScaleHero />
        </div>
      </div>
    </>
  );
}
