"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
// import { useMediaQuery } from "../../app/components/MediaQuery";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */

const Image: FC<ImageProps> = ({ slice }) => {
  // const isPageWide = useMediaQuery("(max-width: 667px)");
  // console.log("WIDE =" + isPageWide);
  return (
    <>
      {slice.variation == "1XLandscapeImage" && (
        <div className="h-[calc(100vh-0px)] xl:h-[calc(100vh-60px)] w-[calc(100%)] xl:w-[calc(100%)] xl:mt-[0px]">
          <div className="w-[calc(100%)] xl:w-[calc(100%-2px)] h-[calc(100%)] xl:h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] xl:gap-x-[17px] gap-y-[2px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-15px)]">
            {slice.primary.position == "Left" ? (
              <div className="col-span-4 col-start-1 row-start-5 row-span-4 md:col-span-2 xl:!col-span-4 xl:row-start-4 xl:row-span-2 xl:!col-start-1 flex items-center justify-center overflow-hidden">
                <PrismicNextImage
                  field={slice.primary.image}
                  alt=""
                  priority={true}
                />
              </div>
            ) : (
              <div className="col-span-4 col-start-1 row-start-5 row-span-4 md:col-span-2  md:col-start-3 xl:!col-span-4 xl:row-start-4 xl:row-span-2 xl:!col-start-9 flex items-center justify-center overflow-hidden">
                <PrismicNextImage
                  field={slice.primary.image}
                  alt=""
                  priority={true}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {slice.variation == "2XLandscapeImage" && (
        // <div className="w-[calc(100%-2px)] h-[calc(100vh-52px)] xl:h-[calc(100vh-63px)] xl:w-[calc(100%-1.5px)] xl:mt-[0px]">
        // <div className="w-[calc(100%)] xl:w-[calc(100%)] h-[calc(100vh-28px)] xl:h-[calc(100vh-63px)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[11.5px] xl:gap-x-[17px] gap-y-[2px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-15px)]">
        <div className="h-[calc(100vh-0px)] xl:h-[calc(100vh-60px)] w-[calc(100%)] xl:w-[calc(100%)] xl:mt-[0px]">
          <div className="w-[calc(100%)] xl:w-[calc(100%-2px)] h-[calc(100%)] xl:h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] xl:gap-x-[17px] gap-y-[2px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-15px)]">
            {slice.primary.position == "Left" ? (
              <>
                <div className="col-span-2 col-start-1 row-start-6 row-span-2 md:row-span-4 md:row-start-5 xl:col-span-4 xl:!row-start-4 xl:!row-span-2 xl:col-start-1 overflow-hidden flex items-center">
                  <PrismicNextImage
                    field={slice.primary.image_1}
                    alt=""
                    priority={true}
                  />
                </div>
                <div className="col-span-2 col-start-3 row-start-6  row-span-2 md:row-span-4 md:row-start-5 xl:col-span-4 xl:!row-start-4 xl:!row-span-2  xl:col-start-5 overflow-hidden flex items-center">
                  <PrismicNextImage
                    field={slice.primary.image_2}
                    alt=""
                    priority={true}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="col-span-2 col-start-1 row-start-6 row-span-2 md:row-span-4 md:row-start-5 xl:col-span-4 xl:!row-start-4 xl:!row-span-2 xl:col-start-5 overflow-hidden flex items-center">
                  <PrismicNextImage
                    field={slice.primary.image_1}
                    alt=""
                    priority={true}
                  />
                </div>
                <div className="col-span-2 col-start-3 row-start-6  row-span-2 md:row-span-4 md:row-start-5 xl:col-span-4 xl:!row-start-4 xl:!row-span-2  xl:col-start-9 overflow-hidden flex items-center">
                  <PrismicNextImage
                    field={slice.primary.image_2}
                    alt=""
                    priority={true}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {slice.variation == "2XPortraitImage" && (
        // <div className="w-[100%] h-[calc(100vh-52px)] xl:h-[calc(100vh-63px)] xl:w-[calc(100%-1.5px)] xl:mt-[0px]">
        //   <div className="w-[calc(100%)] xl:w-[calc(100%)] h-[calc(100vh-28px)] xl:h-[calc(100vh-63px)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] xl:gap-x-[17px] gap-y-[2px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-15px)]">
        <div className="h-[calc(100vh-0px)] xl:h-[calc(100vh-60px)] w-[calc(100%)] xl:w-[calc(100%)] xl:mt-[0px]">
          <div className="w-[calc(100%)] xl:w-[calc(100%-2px)] h-[calc(100%)] xl:h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] xl:gap-x-[17px] gap-y-[2px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-15px)]">
            {slice.primary.position == "Top" ? (
              <>
                <div className="col-span-2 col-start-1 row-start-5 row-span-4 md:row-span-6 md:row-start-4 xl:col-span-4 xl:!row-start-1 xl:!row-span-5 xl:col-start-5 flex items-center overflow-hidden">
                  <PrismicNextImage
                    field={slice.primary.image_1}
                    alt=""
                    priority={true}
                  />
                </div>
                <div className="col-span-2 col-start-3 row-start-5 row-span-4 md:row-span-6 md:row-start-4 xl:col-span-4 xl:!row-start-1 xl:!row-span-5 xl:col-start-9 flex items-center overflow-hidden">
                  <PrismicNextImage
                    field={slice.primary.image_2}
                    alt=""
                    priority={true}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="col-span-2 col-start-1 row-start-5 row-span-4 md:row-span-6 md:row-start-4 xl:col-span-4 xl:!row-start-4 xl:!row-span-5 xl:col-start-5  flex items-center overflow-hidden">
                  <PrismicNextImage
                    field={slice.primary.image_1}
                    alt=""
                    priority={true}
                  />
                </div>
                <div className="col-span-2 col-start-3 row-start-5 row-span-4 md:row-span-6 md:row-start-4 xl:col-span-4 xl:!row-start-4 xl:!row-span-5 xl:col-start-9  flex items-center overflow-hidden">
                  <PrismicNextImage
                    field={slice.primary.image_2}
                    alt=""
                    priority={true}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {slice.variation == "1XPortraitImage" && (
        // <div className="w-[calc(100%)] h-[calc(100vh-52px)] xl:h-[calc(100vh-63px)] xl:w-[calc(100%-1.5px)] xl:mt-[0px]">
        //   <div className="w-[calc(100%)] xl:w-[calc(100%)] h-[calc(100vh-28px)] xl:h-[calc(100vh-63px)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] xl:gap-x-[17px] gap-y-[2px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-15px)]">
        <div className="h-[calc(100vh-0px)] xl:h-[calc(100vh-60px)] w-[calc(100%)] xl:w-[calc(100%)] xl:mt-[0px]">
          <div className="w-[calc(100%)] xl:w-[calc(100%-2px)] h-[calc(100%)] xl:h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] xl:gap-x-[17px] gap-y-[2px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(75vw-15px)]">
            {slice.primary.position == "Top" ? (
              // <div className="col-span-4 col-start-1 row-start-1 row-span-12 overflow-hidden xl:col-span-4 xl:row-start-1 xl:row-span-5 xl:col-start-9 flex items-center">
              <div className="col-span-2 col-start-1 row-start-5 row-span-4 overflow-hidden xl:col-span-4 xl:!row-start-1 xl:row-span-5 xl:col-start-9 flex items-center">
                <PrismicNextImage
                  field={slice.primary.image}
                  alt=""
                  priority={true}
                  // className="min-h-[100%] w-auto xl:max-w-auto xl:w-[100%] xl:h-auto"
                />
              </div>
            ) : (
              <div className="col-span-2 col-start-1 row-start-5 row-span-4 overflow-hidden xl:col-span-4 xl:!row-start-4 xl:row-span-5 xl:col-start-9  flex items-center">
                <PrismicNextImage
                  field={slice.primary.image}
                  alt=""
                  priority={true}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {/* {slice.variation == "fullBleedImage" && (
        <div className="w-[100%] h-[calc(100vh-44px)] m-[0px] xl:mt-[0px] xl:h-[calc(100vh-60px)] overflow-hidden xl:w-[calc(75vw)]">
          <div className="w-[calc(100%)] h-[calc(100%-0px)] xl:h-[calc(100%+0px)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] xl:gap-x-[15px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 ">
            <div className="col-span-4 col-start-1 row-start-1 row-span-12 overflow-hidden xl:row-span-8 xl:col-span-12 xl:col-start-1 l:row-start-1 flex items-center justify-center">
              <PrismicNextImage
                field={slice.primary.desktop_image}
                alt=""
                className="hidden xl:inline max-w-auto w-[100%] h-auto"
                priority={true}
              />
              <PrismicNextImage
                field={slice.primary.mobile_ipad_image}
                alt=""
                className="block xl:hidden w-auto h-[100%] max-w-none"
                priority={true}
              />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Image;
