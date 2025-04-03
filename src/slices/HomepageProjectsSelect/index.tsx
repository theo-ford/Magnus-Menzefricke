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
  const client = createClient();
  const projects = await Promise.all(
    slice.primary.projectsgroup.map((item) => {
      if (isFilled.contentRelationship(item.project) && item.project.uid) {
        return client.getByUID("project", item.project.uid);
      }
    })
  );

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
    <div key={slice.id}>
      {projects.map(
        (item) =>
          item && (
            <>
              <div>
                <div className="h-[calc(100vh-20px)] w-[100%] m-[10px] absolute top-[0] z-50">
                  <div className="w-[calc(100%-40px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%-20px)]">
                    <div className="col-span-3 col-start-1 row-start-4">
                      <h5 className="text-[12px] p-[0px] m-[0px]">
                        {item.data.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute z-[-40] top--[0]">
                <GridScale />
              </div>
              <div className="">
                <Carousel>
                  <SliceZone
                    slices={item.data.slices1}
                    components={components}
                  />
                </Carousel>
              </div>

              {/* <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br> */}
            </>
          )
      )}
    </div>

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
