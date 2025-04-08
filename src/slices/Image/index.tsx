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
    <>
      {slice.variation == "1XLandscapeImage" && (
        <div className="h-[calc(100vh-20px)] w-[100%-20px] m-[10px]">
          <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-20px)]">
            {slice.primary.position == "Left" ? (
              <div className="col-span-4 col-start-1 row-start-5 row-span-4 overflow-hidden xl:row-start-4 xl:row-span-2 xl:col-start-1 flex items-center">
                <PrismicNextImage field={slice.primary.image} alt="" />
              </div>
            ) : (
              <div className="col-span-4 col-start-1 row-start-5 row-span-4 overflow-hidden xl:row-start-4 xl:row-span-2 xl:col-start-9  flex items-center">
                <PrismicNextImage field={slice.primary.image} alt="" />
              </div>
            )}
          </div>
        </div>
      )}
      {slice.variation == "2XLandscapeImage" && (
        <div className="h-[calc(100vh-20px)] w-[100%] m-[10px]">
          <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-20px)] ">
            {slice.primary.position == "Left" ? (
              <>
                <div className="col-span-2 col-start-1 row-start-6 row-span-2 xl:col-span-4 xl:row-start-4 xl:row-span-2 xl:col-start-1 overflow-hidden flex items-center">
                  <PrismicNextImage field={slice.primary.image_1} alt="" />
                </div>
                <div className="col-span-2 col-start-3 row-start-6  row-span-2 xl:col-span-4 xl:row-start-4 xl:row-span-2  xl:col-start-5 overflow-hidden flex items-center">
                  <PrismicNextImage field={slice.primary.image_2} alt="" />
                </div>
              </>
            ) : (
              <>
                <div className="col-span-2 col-start-1 row-start-6 row-span-2 xl:col-span-4 xl:row-start-4 xl:row-span-2 xl:col-start-5 overflow-hidden flex items-center">
                  <PrismicNextImage field={slice.primary.image_1} alt="" />
                </div>
                <div className="col-span-2 col-start-3 row-start-6  row-span-2 xl:col-span-4 xl:row-start-4 xl:row-span-2  xl:col-start-9 overflow-hidden flex items-center">
                  <PrismicNextImage field={slice.primary.image_2} alt="" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {slice.variation == "1XPortraitImage" && (
        <div className="h-[calc(100vh)] w-[75vw+20px] xl:h-[calc(100vh-20px)] xl:w-[100%] xl:m-[10px]">
          <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-20px)]">
            {slice.primary.position == "Top" ? (
              <div className="col-span-4 col-start-1 row-start-1 row-span-12 overflow-hidden xl:col-span-4 xl:row-start-1 xl:row-span-5 xl:col-start-9 flex items-center">
                <PrismicNextImage
                  field={slice.primary.image}
                  alt=""
                  className="w-auto h-[100%] max-w-none xl:max-w-auto xl:w-[100%] xl:h-auto"
                />
              </div>
            ) : (
              <div className="col-span-4 col-start-1 row-start-1 row-span-12 overflow-hidden xl:col-span-4 xl:row-start-4 xl:row-span-5 xl:col-start-9  flex items-center">
                <PrismicNextImage field={slice.primary.image} alt="" />
              </div>
            )}
          </div>
        </div>
      )}
      {slice.variation == "2XPortraitImage" && (
        <div className="h-[calc(100vh-20px)] w-[100%-20px] m-[10px]">
          <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-20px)]">
            {slice.primary.position == "Top" ? (
              <>
                <div className="col-span-2 col-start-1 row-start-5 row-span-4 overflow-hidden xl:col-span-4 xl:row-start-1 xl:row-span-5 xl:col-start-5 flex items-center">
                  <PrismicNextImage field={slice.primary.image_1} alt="" />
                </div>
                <div className="col-span-2 col-start-3 row-start-5 row-span-4 overflow-hidden xl:col-span-4 xl:row-start-1 xl:row-span-5 xl:col-start-9 flex items-center">
                  <PrismicNextImage field={slice.primary.image_2} alt="" />
                </div>
              </>
            ) : (
              <>
                <div className="col-span-2 col-start-1 row-start-5 row-span-4  overflow-hidden xl:col-span-4 xl:row-start-4 xl:row-span-5 xl:col-start-5  flex items-center">
                  <PrismicNextImage field={slice.primary.image_1} alt="" />
                </div>
                <div className="col-span-2 col-start-3 row-start-5 row-span-4 overflow-hidden xl:col-span-4 xl:row-start-4 xl:row-span-5 xl:col-start-9  flex items-center">
                  <PrismicNextImage field={slice.primary.image_2} alt="" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {slice.variation == "fullBleedImage" && (
        <div className="h-[calc(100vh)] w-[75vw+20px]">
          <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8">
            <div className="col-span-4 col-start-1 row-start-1 row-span-12 overflow-hidden xl:row-span-8 xl:col-span-12 xl:col-start-1 l:row-start-1 flex items-center ">
              <PrismicNextImage
                field={slice.primary.image}
                alt=""
                className="w-auto h-[100%] max-w-none xl:max-w-auto xl:w-[100%] xl:h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
