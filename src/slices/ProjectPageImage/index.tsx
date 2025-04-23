import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ProjectPageImage`.
 */
export type ProjectPageImageProps =
  SliceComponentProps<Content.ProjectPageImageSlice>;

/**
 * Component for "ProjectPageImage" Slices.
 */
const ProjectPageImage: FC<ProjectPageImageProps> = ({ slice }) => {
  return (
    <>
      <div className="mt-[16.66vh] xl:mt-[25vh] float-left relative w-[100vw]">
        {slice.variation == "fullBleedImage" && (
          <>
            <div className="h-[calc(108vh+20px)] w-[100%+20px] xl:h-[calc(112.5vh-20px)]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-13 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-9 ">
                <div className="col-start-1 row-start-1  overflow-hidden  col-span-4 row-span-13 xl:col-span-16 xl:row-span-9  flex items-center  justify-center">
                  <PrismicNextImage
                    field={slice.primary.image}
                    alt=""
                    className="w-auto h-[100%] max-w-none xl:max-w-auto xl:w-[100%] xl:h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="h-auto w-[calc(100%-20px)] mt-[6px] ml-[10px] xl:h-auto xl:mt-[4px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)]">
                <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
                  <p className="leading-none m-[0] p-[0] text-[12px] xl:text-[16px]">
                    {slice.primary.caption}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {slice.variation == "1XLandscapeImage" && (
          <>
            <div className="h-[calc(33.33vh-20px)] w-[100%-20px] m-[10px] xl:h-[calc(50vh-20px)]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-4 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-4 xl:w-[calc(100vw-20px)]">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-8 col-start-1 row-start-1 row-span-4 overflow-hidden xl:row-start-1 xl:row-span-4 xl:col-start-1 flex items-center">
                    <PrismicNextImage field={slice.primary.image} alt="" />
                  </div>
                ) : (
                  <div className="col-span-8 col-start-1 row-start-1 row-span-5 overflow-hidden xl:row-start-1 xl:row-span-4 xl:col-start-9  flex items-center">
                    <PrismicNextImage field={slice.primary.image} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="h-auto w-[calc(100%-20px)] mt-[-4px] ml-[10px] xl:h-auto xl:mt-[-6px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)]">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
                    <p className="leading-none m-[0] p-[0] text-[12px] xl:text-[16px]">
                      {slice.primary.caption}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-9  flex items-center">
                    <p className="leading-none m-[0] p-[0] text-[12px] xl:text-[16px]">
                      {slice.primary.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {slice.variation == "2XLandscapeImage" && (
          <>
            <div className="h-[calc(16.66vh-20px)] w-[100%-20px] m-[10px] xl:h-[calc(25vh-20px)]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-2 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-2 xl:w-[calc(100vw-20px)]">
                {slice.primary.position == "Left" ? (
                  <>
                    <div className="col-span-2 col-start-1 row-start-1 row-span-2 xl:col-span-4 xl:row-start-1 xl:row-span-2 xl:col-start-1 overflow-hidden flex items-center">
                      <PrismicNextImage field={slice.primary.image_1} alt="" />
                      <div className="absolute z-100  xl:bottom-[-25px]">
                        <p>{slice.primary.caption_1}</p>
                      </div>
                    </div>
                    <div className="col-span-2 col-start-3 row-start-1  row-span-2 xl:col-span-4 xl:row-start-1 xl:row-span-2  xl:col-start-5 overflow-hidden flex items-center">
                      <PrismicNextImage field={slice.primary.image_2} alt="" />
                      <div className="absolute z-100 xl:bottom-[-25px] ">
                        <p>{slice.primary.caption_2}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-2 col-start-1 row-start-1 row-span-2 xl:col-span-4 xl:row-start-1 xl:row-span-2 xl:col-start-9 overflow-hidden flex items-center">
                      <PrismicNextImage field={slice.primary.image_1} alt="" />
                    </div>
                    <div className="col-span-2 col-start-3 row-start-1  row-span-2 xl:col-span-4 xl:row-start-1 xl:row-span-2  xl:col-start-13 overflow-hidden flex items-center">
                      <PrismicNextImage field={slice.primary.image_2} alt="" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="h-auto w-[calc(100%-20px)] mt-[-4px] ml-[10px] xl:h-auto xl:mt-[-6px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)]">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
                    <p className="leading-none m-[0] p-[0] text-[12px] xl:text-[16px]">
                      Left: {slice.primary.caption_1}. Right:{" "}
                      {slice.primary.caption_2}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-9  flex items-center">
                    <p className="leading-none m-[0] p-[0] text-[12px] xl:text-[16px]">
                      Left: {slice.primary.caption_1}. Right:{" "}
                      {slice.primary.caption_2}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {slice.variation == "1XPortraitImage" && (
          <>
            <div className="h-[calc(83.33vh-20px)] w-[100%-20px] m-[10px] xl:h-[calc(62.5vh-20px)]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-10 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-5 xl:w-[calc(100vw-20px)]">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-10 overflow-hidden xl:row-start-1 xl:row-span-5 xl:col-start-1 flex items-center">
                    <PrismicNextImage field={slice.primary.image} alt="" />
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-10 overflow-hidden xl:row-start-1 xl:row-span-5 xl:col-start-9  flex items-center">
                    <PrismicNextImage field={slice.primary.image} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="h-auto w-[calc(100%-20px)] mt-[-4px] ml-[10px] xl:h-auto xl:mt-[-6px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)]">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-4 xl:col-start-1 flex items-center">
                    <p className="leading-none m-[0] p-[0] text-[12px] xl:text-[16px]">
                      {slice.primary.caption}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-4 xl:col-start-9  flex items-center">
                    <p className="leading-none m-[0] p-[0] text-[12px] xl:text-[16px]">
                      {slice.primary.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {slice.variation == "2XPortraitImage" && (
          <>
            <div className="h-[calc(33.32vh-20px)] w-[100%-20px] ] mt-[-4px] m-[10px] xl:h-[calc(62.5vh-20px)]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-10 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-5 xl:w-[calc(100vw-20px)]">
                {slice.primary.position == "Left" ? (
                  <>
                    <div className="col-span-2 col-start-1 row-start-1 row-span-10 overflow-hidden xl:col-span-4 xl:row-start-1 xl:row-span-5 xl:col-start-1 flex items-center">
                      <PrismicNextImage field={slice.primary.image_1} alt="" />
                    </div>
                    <div className="col-span-2 col-start-3 row-start-1 row-span-10 overflow-hidden xl:col-span-4  xl:row-start-1 xl:row-span-5 xl:col-start-5 flex items-center">
                      <PrismicNextImage field={slice.primary.image_2} alt="" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-2 col-start-1 row-start-1 row-span-10 overflow-hidden xl:col-span-4  xl:row-start-1 xl:row-span-5 xl:col-start-9 flex items-center">
                      <PrismicNextImage field={slice.primary.image_1} alt="" />
                    </div>
                    <div className="col-span-2 col-start-3 row-start-1 row-span-10 overflow-hidden xl:col-span-4  xl:row-start-1 xl:row-span-5 xl:col-start-13 flex items-center">
                      <PrismicNextImage field={slice.primary.image_2} alt="" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="h-auto w-[calc(100%-20px)] ml-[10px] xl:h-auto xl:mt-[-6px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)]">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
                    <p className="leading-none m-[0] p-[0] text-[12px] xl:text-[16px]">
                      Left: {slice.primary.caption_1}. Right:{" "}
                      {slice.primary.caption_2}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-9  flex items-center">
                    <p className="leading-none m-[0] p-[0] text-[14px] xl:text-[16px]">
                      Left: {slice.primary.caption_1}. Right:{" "}
                      {slice.primary.caption_2}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectPageImage;
