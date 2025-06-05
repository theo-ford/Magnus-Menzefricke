// "use client";

import { FC } from "react";

import { SliceComponentProps } from "@prismicio/react";
// import { Content, isFilled, LinkField } from "@prismicio/client";
import { Content, isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
// import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import GridScale from "@/app/components/GridScale";
import Carousel from "@/app/components/Carousel";
import Link from "next/link";

/**
 * Props for `HomepageProjectsSelect`.
 */
export type HomepageProjectsSelectProps =
  SliceComponentProps<Content.HomepageProjectsSelectSlice>;

/**
 * Component for "HomepageProjectsSelect" Slices.
 */
const HomepageProjectsSelect: FC<HomepageProjectsSelectProps> = async ({
  slice
}) => {
  // WORKING SLICE USING ASYNC
  const client = createClient();
  const projectsAsync = await Promise.all(
    slice.primary.projectsgroup.map((item) => {
      if (isFilled.contentRelationship(item.project) && item.project.uid) {
        return client.getByUID("project", item.project.uid);
      }
    })
  );

  // const projects = slice.primary.projectsgroup.map((item) => {
  //   return client.getByUID("project", item.project.uid);
  // });

  // const projects2 = slice.primary.projectsgroup.map((item, index) => {
  //   return item;
  // });

  // const projects3 = slice.primary.projectsgroup.map((item, index) => {
  //   return client.getByUID("project", item.project.uid);
  // });

  // const swiperRef = useRef<any>(null);
  // const swiper = useSwiper();

  // function nextFunc() {
  //   swiperRef.current.swiper.slideNext();
  // }
  // function prevFunc() {
  //   swiperRef.current.swiper.slidePrev();
  // }

  return (
    //
    <>
      {/* <div key={slice.id}> */}

      {projectsAsync.map(
        (item, index) =>
          item && (
            <div key={index}>
              {/* <div className="relative h-[100vh] w-[100vw] float-left"> */}
              <Link href={`/project/${item.uid}`}>
                <div className="relative float-left h-[calc(100vh-20px)] w-[100vw] xl:w-[calc(75vw-20px)] xl:mr-[20px] mb-[10px]">
                  <div className="h-[calc(100vh-20px)] w-[100%] absolute top-[0] z-50 xl:w-[calc(75vw-20px)] m-[10px]">
                    <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%)]">
                      <div className="col-span-2 col-start-1 row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-2">
                        <h5 className="text-[11.5vh] p-[0px] mt-[-2.3vh] leading-none xl:text-[9.5vw] xl:mt-[-28px] font-bold">
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
                          <span className="font-bold  ">
                            Technical Architects
                          </span>
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

                  <div className="absolute z-[-40] top--[0] xl:w-[calc(75vw-20px)] m-[10px]">
                    <GridScale />
                  </div>
                  <div className="xl:w-[calc(75vw)]">
                    <Carousel>
                      <SliceZone
                        slices={item.data.slices1}
                        components={components}
                      />
                    </Carousel>
                  </div>
                </div>
              </Link>
            </div>
          )
      )}

      {/* </div> */}
    </>

    // <section
    //   data-slice-type={slice.slice_type}
    //   data-slice-variation={slice.variation}

    // >
    //   {/* Placeholder component for homepage_projects_select (variation:{" "}
    //   {slice.variation}) Slices
    //   {slice.primary.projectsgroup.map((item, index) => (
    //     <p key={index}>
    //       Hello World {item.project.uid} {item.project.title}
    //     </p>
    //   ))} */}

    // </section>
  );
};

export default HomepageProjectsSelect;
