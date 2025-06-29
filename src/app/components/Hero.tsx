"use client";

import { PrismicRichText } from "@prismicio/react";
import Logo from "./Logo";
import LogoMagnusHeight from "./Logo_MagnusHeight";
import LogoMenzefrickeHeight from "./Logo_MenzefrickeHeight";
import GridScaleHero from "./GridScaleHero";

export default function Hero({ pageData }) {
  return (
    <>
      <div className="bg-[#e34234] float-left relative xl:w-[calc(75vw+15px)] xl:mr-[-15px] h-[100vh] scroll-section">
        <div className="m-[21px] w-[calc(100vw-38px)] xl:m-[30px] xl:mr[0px] xl:w-[calc(75vw-15px)] ">
          <div className="h-[calc(100vh-38px)] mt-[21px] absolute top-[0] z-50 xl:w-[calc(75vw-0px)] xl:mt-[25px]">
            <div className=" float-left relative grid w-[calc(100%-25px)] h-[calc(100%)] grid-cols-4 grid-rows-12  gap-x-[15px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%-12.5px)] overflow-hidden">
              <div className="col-span-4 col-start-1 row-start-10 xl:col-start-10 xl:col-span-3 xl:row-start-1  hidden xl:inline">
                <h5 className="text-[18px] p-[0px] mt-[4px] leading-none  xl:text-[14px]">
                  <p>
                    MM-0002
                    <br></br>
                    25.06.02 17:43
                  </p>
                </h5>
              </div>
              <div className="hidden xl:inline xl:col-start-1 xl:row-start-2 xl:row-span-2">
                <div className="mt-[0.8vh] h-[23.7vh]">
                  <Logo />
                </div>
              </div>
              <div className="xl:hidden col-start-1 row-start-3 col-span-4">
                <div className="mt-[2.3vh] h-[7.1vh]">
                  <LogoMagnusHeight />
                </div>
              </div>
              <div className="xl:hidden col-start-1 row-start-4 col-span-4">
                <div className="mt-[1.9vh] h-[5.8vh]">
                  <LogoMenzefrickeHeight />
                </div>
              </div>
              <div className="col-span-4 col-start-1 row-start-10 xl:col-start-1 xl:col-span-8 xl:row-start-7">
                <h5 className="text-[18px] p-[0px] mt-[-10px] xl:mt-[0px] leading-none  xl:text-[24px]">
                  <PrismicRichText field={pageData.introduction} />
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-10 xl:col-start-10 xl:col-span-3 xl:row-start-7 hidden xl:inline">
                <h5 className="text-[18px] p-[0px] mt-[-1px] xl:mt-[0px] leading-none  xl:text-[18px]">
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
                  <h5 className="text-[18px] p-[0px] mt-[-1px] xl:mb-[-15px] leading-none  xl:text-[14px]">
                    <p>Magnus Menzefricke &copy;2025</p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <GridScaleHero />
        </div>
      </div>
    </>
  );
}
