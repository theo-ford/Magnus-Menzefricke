"use client";

import { PrismicRichText } from "@prismicio/react";
// import Logo from "./Logo";
import LogoMagnusHeight from "./Logo_MagnusHeight";
import LogoMenzefrickeHeight from "./Logo_MenzefrickeHeight";
import GridScaleHero from "./GridScaleHero";
// import GridScale from "./GridScale";

export default function Hero({ pageData }) {
  return (
    <div className="scroll-section snap-start relative w-[100vw] xl:w-[calc(75vw+15px)] bg-[#e34234] h-[100vh] xl:mr-[15px] cursor-none">
      {/* <div className="w-[calc(100vw-22px)] xl:w-[calc(75vw-15px)] h-[100%] xl:h-[calc(100vh-60px)] pt-[11px] xl:pt-[0px] xl:mt-[30px] ml-[11px] xl:ml-[30px]"> */}
      <div className="w-[calc(100vw-30px)] xl:w-[calc(75vw-15px)] h-[100%] xl:h-[calc(100vh-60px)] pt-[15px] xl:pt-[0px] xl:mt-[30px] ml-[15px] xl:ml-[30px]">
        {/* <div className="w-[calc(100vw-30px)] xl:w-[calc(75vw-16.66px)] h-[100%] xl:h-[calc(100vh-60px)] pt-[16.66px] xl:pt-[0px] xl:mt-[30px] ml-[16.66px] xl:ml-[30px]"> */}
        <div className="float-left relative z-80 grid w-[calc(100%-22px)] xl:w-[calc(100%)] h-[calc(100%)] grid-cols-4 grid-rows-12  gap-x-[15px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[100%] overflow-hidden">
          <div className="col-span-4 col-start-1 row-start-10 xl:col-start-10 xl:col-span-3 xl:row-start-1  hidden xl:inline">
            <h5 className="text-[18px] p-[0px] mt-[0px] leading-none  xl:text-[18px]">
              <p>
                MM-0002
                <br></br>
                25.06.02 17:43
              </p>
            </h5>
          </div>
          {/* <div className="hidden xl:inline xl:col-start-1 xl:row-start-2 xl:row-span-2">
            <div className="mt-[4.9px] h-[23.5vh]">
              <Logo />
            </div>
          </div> */}
          <div className="hidden xl:block col-start-1 row-start-2 col-span-4">
            <div className="mt-[0.5vh] h-[14.3vh]">
              <LogoMagnusHeight />
            </div>
          </div>
          <div className="hidden xl:block  col-start-1 row-start-3 col-span-4">
            <div className="mt-[0.5vh] h-[11.5vh]">
              <LogoMenzefrickeHeight />
            </div>
          </div>
          <div className="xl:hidden col-start-1 row-start-3 col-span-4">
            <div className="mt-[2.3vh] h-[7.1vh]">
              <LogoMagnusHeight />
            </div>
          </div>
          <div className="xl:hidden col-start-1 row-start-4 col-span-4">
            <div className="mt-[2vh] h-[5.8vh]">
              <LogoMenzefrickeHeight />
            </div>
          </div>
          <div className="col-span-4 col-start-1 row-start-10 xl:col-start-1 xl:col-span-8 xl:row-start-7">
            {/* <h5 className="text-[18px] p-[0px] mt-[-10px] xl:mt-[-6px] leading-none  xl:text-[24px]"> */}
            <h5 className="text-[18px] p-[0px] mt-[-12px] xl:mt-[-0.6vh] leading-none  xl:text-[24px]">
              <PrismicRichText field={pageData.introduction} />
            </h5>
          </div>
          <div className="col-span-4 col-start-1 row-start-10 xl:col-start-10 xl:col-span-3 xl:row-start-7 hidden xl:inline">
            {/* <h5 className="text-[18px] p-[0px] mt-[-1px] xl:mt-[-6px] leading-none  xl:text-[18px]"> */}
            <h5 className="text-[18px] p-[0px] mt-[-39px] xl:mt-[-0.6vh] leading-none  xl:text-[18px]">
              <p>
                {pageData.website_url}
                <br></br>
                {pageData.email}
                <br></br>
                {pageData.phone_number}
              </p>
            </h5>
          </div>
          <div className="col-span-4 col-start-1 row-start-10 xl:col-start-10 xl:col-span-3 xl:row-start-8  hidden xl:inline">
            <div className="h-[100%] flex items-end mt-[2px]">
              {/* <h5 className="text-[18px] p-[0px] mt-[-1px] xl:mb-[-12px] leading-none  xl:text-[14px]"> */}
              <h5 className="text-[18px] p-[0px] mt-[-5px] xl:mb-[-1vh] leading-none  xl:text-[12px]">
                <p>Magnus Menzefricke &copy;2025</p>
              </h5>
            </div>
          </div>
        </div>
        {/* <div className="absolute z-70"> */}
        <div className="absolute w-[calc(100vw-15px)] xl:w-[calc(75vw-15px)]">
          <GridScaleHero />
        </div>
      </div>
    </div>
  );
}
