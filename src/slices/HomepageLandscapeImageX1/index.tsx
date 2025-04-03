"use client";
// @ts-nocheck

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `HomepageLandscapeImageX1`.
 */
export type HomepageLandscapeImageX1Props =
  SliceComponentProps<Content.HomepageLandscapeImageX1Slice>;

/**
 * Component for "HomepageLandscapeImageX1" Slices.
 */
const HomepageLandscapeImageX1: FC<HomepageLandscapeImageX1Props> = ({
  slice
}) => {
  return (
    <>
      <>
        <div className="h-[calc(100vh-20px)] w-[100vw] m-[10px] absolute top-[0]">
          <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%-20px)] ml-[10px]">
            <div className="col-span-4 col-start-1 row-start-5 row-span-4 overflow-hidden">
              <PrismicNextImage field={slice.primary.image} alt="" />
            </div>
          </div>
        </div>
      </>
    </>

    // <section
    //   data-slice-type={slice.slice_type}
    //   data-slice-variation={slice.variation}
    // >
    //   Placeholder component for homepage_landscape_image_x1 (variation:{" "}
    //   {slice.variation}) Slices
    //   <div className="h-[calc(100vh-20px)] w-[100%] m-[10px] absolute">
    //     <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px]">
    //       {/* ROW */}
    //       <div className="col-span-4 col-start-1 row-start-6 bg-green-800">
    //         <PrismicNextImage field={slice.primary.image} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HomepageLandscapeImageX1;
