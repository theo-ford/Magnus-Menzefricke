"use client";

// import HeroContentScale from "./HeroContentScale";

import GridScale from "./GridScale";
import { PrismicRichText } from "@prismicio/react";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default function ZZ_Hero({ pageData }) {
  return (
    <>
      <div className="bg-[#e34234] float-left relative xl:w-[calc(75vw-5px)] xl:mr-[0px]">
        <div className="m-[10px] xl:w-[calc(75vw-25px)] ">
          <div className="h-[calc(100vh-20px)] w-[calc(100%-20px)] mt-[10px] absolute top-[0] z-50 xl:w-[calc(75vw-20px)] xl:mt-[10px]">
            <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%)]">
              <div className="col-span-4 col-start-1 row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-2">
                <h5 className="text-[8.8vh] p-[0px] m-[0px] ml-[-6px] mt-[0px] leading-none tracking-[-6px] xl:text-[9.3vw] xl:mt-[-25px] font-bold xl:tracking-[-12px] xl:ml-[-13px]">
                  Magnus
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-4 xl:col-span-1 xl:col-start-1 xl:row-start-3">
                <h5 className="text-[8.8vh] p-[0px] m-[0px] ml-[-6px] mt-[0px] leading-none tracking-[-6px] xl:text-[9.3vw] xl:mt-[-25px] font-bold xl:tracking-[-12px] xl:ml-[-13px]">
                  Menzefricke
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-9 xl:col-start-1 xl:col-span-6 xl:row-start-6">
                <h5 className="text-[18px] font-bold p-[0px] m-[0px] mt-[4vh] leading-none  xl:text-[22px] xl:mt-[8vh]">
                  Introduction
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-10 xl:col-start-1 xl:col-span-6 xl:row-start-7">
                <h5 className="text-[18px] p-[0px] m-[0px] leading-none  xl:text-[22px]">
                  <PrismicRichText field={pageData.introduction} />
                </h5>
              </div>
            </div>
          </div>
          <GridScale />
        </div>
      </div>
    </>
  );
}
