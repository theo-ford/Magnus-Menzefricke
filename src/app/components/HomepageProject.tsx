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
        <Link href={`/project/${item.uid}`}>
          {/* <div className="relative float-left h-[calc(100vh-20px)] w-[100vw] xl:w-[calc(75vw-20px)] xl:mr-[20px] mb-[10px]"> */}
          <div className="relative float-left h-[calc(100vh-36px)] w-[100vw] xl:w-[calc(75vw-36px)] xl:mr-[36px] mb-[10px] ">
            <div className=" h-[calc(100vh-72px)] w-[100%] absolute top-[0] z-50 xl:w-[calc(75vw-36px)] m-[36px]">
              <div className="w-[calc(100%-px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[15px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%)]">
                <div className="col-span-2 col-start-1 row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-2">
                  <h5 className="text-[9.3vh] p-[0px] mt-[-0.4vh] leading-none xl:text-[9.3vw] xl:mt-[-37px] font-bold tracking-[-0.02em]">
                    {"0" + (index + 1)}
                  </h5>
                </div>

                <div className="col-span-2 col-start-1 row-start-11 xl:col-start-1 xl:col-span-2 xl:row-start-7">
                  <h5 className="text-[18px] p-[0px] m-[0px] leading-none  xl:text-[22px]">
                    <span className="font-bold">{item.data.title}</span>
                  </h5>
                </div>
                <div className="col-span-2 col-start-3 row-start-11  xl:col-start-3 xl:col-span-2 xl:row-start-7">
                  <h5 className="text-[18px] p-[0px] m-[0px] leading-none xl:text-[22px]">
                    {item.data.subtitle}
                  </h5>
                </div>
                <div className="col-span-2 col-start-1 row-start-12 xl:col-span-2 xl:col-start-1 xl:row-start-8">
                  <p className="text-[12px] p-[0px] m-[0px] leading-none">
                    <span className="font-bold">Design Architects</span>
                    <br></br>
                    {item.data.design_architects}
                    <br></br>
                  </p>
                  <p className="text-[12px] p-[0px] m-[0px] leading-none xl:mt-[12px]">
                    <span className="font-bold  ">Technical Architects</span>
                    <br></br>
                    {item.data.technical_architects}
                  </p>
                </div>
                <div className="col-span-2 col-start-3 row-start-12  xl:col-span-2 xl:col-start-3 xl:row-start-8">
                  <p className="text-[12px] p-[0px] m-[0px] leading-none">
                    <span className="font-bold">Net Internal Area</span>
                    <br></br>
                    {item.data.net_internal_area}
                  </p>
                  <p className="text-[12px] p-[0px] m-[0px] leading-none xl:mt-[12px]">
                    <span className="font-bold">Completion</span>
                    <br></br>

                    {item.data.completion_date}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="absolute z-[-40] top--[0] xl:w-[calc(75vw-20px)] m-[10px]"> */}
            {/* <div className="absolute z-[-40] top--[0] xl:w-[calc(75vw-108px)] m-[24px] xl:m-[36px]"> */}
            <div className="absolute z-[-40] top--[0] xl:w-[calc(75vw-36px)] m-[24px] xl:m-[36px]">
              {/* <div className="absolute z-[-40] top--[0] xl:w-[calc(75vw-60px)] m-[30px]"> */}
              <GridScale />
            </div>
            <div className="xl:w-[calc(75vw)]">{children}</div>
          </div>
        </Link>
      </div>
      {/* </ScrollSnapWrapper> */}
    </>
  );
};
