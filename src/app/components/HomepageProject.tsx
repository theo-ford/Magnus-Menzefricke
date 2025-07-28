"use client";

import { useRef } from "react";
import { Content } from "@prismicio/client";
import GridScale from "@/app/components/GridScale";
import Link from "next/link";

interface HomepageProjectProps {
  item: Content.ProjectDocument;
  index: number;
  children: React.ReactNode;
}

export const HomepageProject: React.FC<HomepageProjectProps> = ({
  item,
  index,
  children
}) => {
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        key={index}
        ref={projectRef}
        className="w-[100vw] xl:w-[calc(75vw-30px)] h-[calc(100vh-245x)] xl:h-[100vh] xl:mr-[15px] relative scroll-section"
      >
        <Link href={`/project/${item.uid}`} className="cursor-none">
          {/* <div className="relative float-left h-[calc(100vh-22px)] xl:h-[calc(100vh)] w-[calc(100vw-44px)] xl:w-[calc(75vw-15px)] xl:ml-[15px]"> */}
          <div className="w-[calc(100vw-30px)] xl:w-[calc(100%)] h-[calc(100%)] xl:h-[calc(100vh)]  ml-[15px] xl:ml-[0px] mt-[11px] xl:mt-[30px]">
            {/* <div className="absolute top-[0] z-50 w-[100%] h-[calc(100vh-44px)] xl:h-[calc(100vh-60px)] m-[22px] xl:ml-[30px] xl:mt-[30px] xl:w-[100%]"> */}
            {/* <div className="absolute top-[0] z-50 w-[calc(100%-22px)] xl:w-[100%] h-[calc(100vh-44px)] xl:h-[calc(100vh-60px)] "> */}
            <div className="absolute top-[0] z-50 w-[calc(100%-31px)] xl:w-[100%] h-[calc(100%-5px)] xl:h-[calc(100vh-60px)] xl:mt-[30px]">
              <div className="float-left relative w-[100%] h-[calc(100%)]  grid grid-cols-4 grid-rows-12  gap-x-[11px] xl:gap-x-[15px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 ">
                <div className="col-span-2 col-start-1 row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-2">
                  <h5 className="text-[8.4vh] p-[0px] mt-[0.3vh] ml-[-2px] leading-none font-bold tracking-[-0.02em] xl:mt-[-3.2vh] xl:text-[16.4vh]">
                    {"0" + (index + 1)}
                  </h5>
                </div>

                <div className="col-span-2 col-start-1 row-start-11 xl:col-start-1 xl:col-span-3 xl:row-start-7">
                  <h5 className="text-[18px] p-[0px] m-[0px] mt-[-3px] leading-none  xl:text-[24px]">
                    {/* <Link href={`/project/${item.uid}`} className=""> */}
                    <span className="font-bold">{item.data.title}</span>
                    {/* </Link> */}
                  </h5>
                </div>
                <div className="col-span-2 col-start-3 row-start-11  xl:col-start-4 xl:col-span-2 xl:row-start-7">
                  <h5 className="text-[18px] p-[0px] m-[0px] mt-[-3px] leading-none xl:text-[24px]">
                    {item.data.location}
                    <br></br>
                    {item.data.completion_date}
                  </h5>
                </div>
                <div className="col-span-2 col-start-1 row-start-12 xl:col-span-3 xl:col-start-1 xl:row-start-8">
                  <p className="text-[12px] xl:text-[12px] p-[0px] m-[0px] mt-[-3px] leading-[110%]">
                    Net Internal Area: {item.data.net_internal_area}
                    <br></br>
                    Construction Value: {item.data.construction_value}
                    <br></br>
                    Client: {item.data.client}
                    <br></br>
                  </p>
                </div>
                <div className="col-span-2 col-start-3 row-start-12  xl:col-span-2 xl:col-start-4 xl:row-start-8 ">
                  <p className="text-[12px] xl:text-[12px] p-[0px] m-[0px] mt-[-3px] leading-[110%]">
                    Role: {item.data.role}
                    <br></br>
                    Type: {item.data.project_type}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="absolute z-[-40] top--[0] w-[calc(100vw-44px)] m-[22px] xl:m-[30px] xl:w-[calc(75vw-15px)]"> */}
            <div className="absolute z-[-40] w-[calc(100%-30px)] xl:w-[100%]">
              <GridScale />
            </div>
            {/* <div className="w-[calc(100vw-22px)] xl:w-[calc(75vw)] xl:ml-[15px]"> */}
            {/* <div className="w-[100%] xl:w-[100%] xl:ml-[1px] ">{children}</div> */}
            <div className="w-[calc(100%)] xl:w-[100%] ml-[1px] xl:ml-[1px]">
              {children}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
