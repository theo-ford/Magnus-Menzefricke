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
      {/* <ScrollSnapWrapper index={index} totalItems={children.length}> */}
      <div key={index} ref={projectRef} className="snap-center">
        <Link href={`/project/${item.uid}`} className="">
          {/* <div className="relative float-left h-[calc(100vh-20px)] w-[100vw] xl:w-[calc(75vw-20px)] xl:mr-[20px] mb-[10px]"> */}
          <div className="relative float-left h-[calc(100vh-25px)] w-[calc(100vw-50px)] xl:w-[calc(75vw-45px)] xl:mr-[15px]">
            <div className="absolute top-[0] z-50 w-[100%] h-[calc(100vh-50px)] m-[26px] xl:w-[100%]">
              <div className="float-left relative w-[100%] h-[calc(100%)]  grid grid-cols-4 grid-rows-12  gap-x-[15px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 ">
                <div className="col-span-2 col-start-1 row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-2">
                  <h5 className="text-[8.7vh] p-[0px] mt-[-0.1vh] ml-[-2px] leading-none font-bold tracking-[-0.02em] xl:mt-[-3.2vh] xl:text-[17vh]">
                    {"0" + (index + 1)}
                  </h5>
                </div>

                <div className="col-span-2 col-start-1 row-start-11 xl:col-start-1 xl:col-span-3 xl:row-start-7">
                  <h5 className="text-[18px] p-[0px] m-[0px] mt-[-3px] leading-none  xl:text-[24px]">
                    <span className="font-bold">{item.data.title}</span>
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
                  <p className="text-[12px] xl:text-[16px] p-[0px] m-[0px] mt-[-3px] leading-[120%]">
                    Net Internal Area: {item.data.net_internal_area}
                    <br></br>
                    Construction Value: {item.data.construction_value}
                    <br></br>
                    Client: {item.data.client}
                    <br></br>
                  </p>
                </div>
                <div className="col-span-2 col-start-3 row-start-12  xl:col-span-2 xl:col-start-4 xl:row-start-8 ">
                  <p className="text-[12px] xl:text-[16px] p-[0px] m-[0px] mt-[-3px] leading-[120%]">
                    Role: {item.data.role}
                    <br></br>
                    Type: {item.data.project_type}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="absolute z-[-40] top--[0] xl:w-[calc(75vw-20px)] m-[10px]"> */}
            {/* <div className="absolute z-[-40] top--[0] xl:w-[calc(75vw-108px)] m-[24px] xl:m-[36px]"> */}
            <div className="absolute z-[-40] top--[0] w-[calc(100vw-50px)] m-[25px] xl:m-[30px] xl:w-[calc(75vw-45px)]">
              {/* <div className="absolute z-[-40] top--[0] xl:w-[calc(75vw-60px)] m-[30px]"> */}
              <GridScale />
            </div>
            <div className="w-[calc(100vw-25px)] xl:w-[calc(75vw)]">
              {children}
            </div>
          </div>
        </Link>
      </div>
      {/* </ScrollSnapWrapper> */}
    </>
  );
};
