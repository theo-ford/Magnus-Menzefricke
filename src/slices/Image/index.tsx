"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image: FC<ImageProps> = ({ slice }) => {
  return (
    // <section
    //   data-slice-type={slice.slice_type}
    //   data-slice-variation={slice.variation}
    // >
    //   Placeholder component for image (variation: {slice.variation}) Slices
    // </section>
    <>
      {slice.variation == "1XLandscapeImage" && (
        <div className="h-[calc(100vh-20px)] w-[100%]">
          <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-20px)]">
            <div className="col-span-4 col-start-1 row-start-5 row-span-4 overflow-hidden xl:row-start-4 xl:row-span-2 xl:col-start-1 flex items-center bg-red-800">
              <PrismicNextImage field={slice.primary.image} alt="" />
            </div>
          </div>
        </div>
      )}
      {slice.variation == "2XLandscapeImage" && (
        <div className="h-[calc(100vh-20px)] w-[100%]">
          <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-20px)] ">
            <div className="col-span-2 col-start-1 row-start-6 row-span-2 xl:col-span-4 xl:row-start-4 xl:row-span-2 xl:col-start-1 overflow-hidden bg-red-800 flex items-center">
              <PrismicNextImage field={slice.primary.image_1} alt="" />
            </div>
            <div className="col-span-2 col-start-3 row-start-6  row-span-2 xl:col-span-4 xl:row-start-4 xl:row-span-2  xl:col-start-5 overflow-hidden bg-red-800 flex items-center">
              <PrismicNextImage field={slice.primary.image_2} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
