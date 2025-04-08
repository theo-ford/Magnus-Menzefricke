"use client";

// import HeroContentScale from "./HeroContentScale";

import GridScale from "./GridScale";
import { PrismicRichText } from "@prismicio/react";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default function Hero({ pageData }) {
  return (
    <>
      <div className="bg-[#e34234] float-left relative h-screen  xl:w-[calc(75vw-5px)] xl:mr-[0px]">
        <div className="m-[10px] xl:w-[calc(75vw-25px)] ">
          <div className="h-[calc(100vh-20px)] w-[100%] absolute top-[0] z-50 xl:w-[calc(75vw-20px)] xl:mt-[10px]">
            <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%)]">
              <div className="col-span-2 col-start-1 row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-2">
                <h5 className="text-[48px] p-[0px] m-[0px] leading-none xl:text-[9.3vw] xl:mt-[-25px] font-bold tracking-[-12px] ml-[-13px]">
                  Magnus
                </h5>
              </div>
              <div className="col-span-2 col-start-1 row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-3">
                <h5 className="text-[48px] p-[0px] m-[0px] leading-none xl:text-[9.3vw] xl:mt-[-25px] font-bold tracking-[-12px] ml-[-13px]">
                  Menzefricke
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-11 xl:col-start-1 xl:col-span-6 xl:row-start-6">
                <h5 className="text-[18px] font-bold p-[0px] m-[0px] leading-none  xl:text-[22px] mt-[8vh]">
                  Introduction
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-11 xl:col-start-1 xl:col-span-6 xl:row-start-7">
                <h5 className="text-[18px] p-[0px] m-[0px] leading-none  xl:text-[22px]">
                  <PrismicRichText field={pageData.introduction} />
                </h5>
              </div>
              <div className="col-span-4 col-start-6 row-start-11 xl:col-start-8 xl:col-span-5 xl:row-start-6 mt-[8vh]">
                <h5 className="text-[18px] p-[0px] m-[0px] leading-none  xl:text-[22px] font-bold">
                  Contact
                </h5>
              </div>
              <div className="col-span-4 col-start-6 row-start-11 xl:col-start-8 xl:col-span-5 xl:row-start-7">
                <h5 className="text-[12px] p-[0px] m-[0px] leading-none  xl:text-[18px]">
                  {pageData.email}
                  <br></br>
                  {pageData.phone_number}
                  <br></br>
                  {pageData.website_url}
                  <br></br>
                </h5>
              </div>
              {/* <div className="col-span-4 col-start-6 row-start-11 xl:col-start-11 xl:col-span-2 xl:row-start-6 mt-[8vh]">
                <h5 className="text-[18px] p-[0px] m-[0px] leading-none  xl:text-[22px] font-bold">
                  Social
                </h5>
              </div>
              <div className="col-span-4 col-start-6 row-start-11 xl:col-start-11 xl:col-span-2 xl:row-start-7">
                <h5 className="text-[12px] p-[0px] m-[0px] leading-none  xl:text-[18px]">
                  Linked In
                  <br></br>
                  Twitter
                  <br></br>
                  Instagram
                  <br></br>
                </h5>
              </div> */}

              {/* <div className="col-span-2 col-start-5 row-start-12 xl:col-span-2 xl:col-start-1 xl:row-start-8">
                <p className="text-[12px] p-[0px] m-[0px] leading-none">
                  <span className="font-bold">Design Architects</span>
                </p>
                <p className="text-[12px] p-[0px] m-[0px] leading-none xl:mt-[12px]">
                  <span className="font-bold  ">Technical Architects</span>
                  <br></br>
                </p>
              </div>
              <div className="col-span-2 col-start-3 row-start-12  xl:col-span-2 xl:col-start-3 xl:row-start-8">
                <p className="text-[12px] p-[0px] m-[0px] leading-none">
                  <span className="font-bold">Net Internal Area</span>
                  <br></br>
                </p>
                <p className="text-[12px] p-[0px] m-[0px] leading-none xl:mt-[12px]">
                  <span className="font-bold">Completion</span>
                  <br></br>
                </p>
              </div> */}
            </div>
          </div>
          <GridScale />
        </div>
      </div>
    </>
  );
}
