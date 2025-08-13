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
      <div className="mt-[16.66vh] xl:mt-[12.5vh] float-left relative w-[100%]">
        {slice.variation == "1XLandscapeImage" && (
          <>
            <div className="w-[100%] h-[calc(33.33vh-20px)] sm:h-[100vh] md:h-[calc(25vh-20px)] ml-[15px] xl:ml-[30px] mt-[18px] xl:!h-[calc(50vh-20px)]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-2 md:grid-rows-3 relative gap-x-[9px] xl:gap-x-[15px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-2 min-h-[75px] md:!min-h-[200px] xl:min-h-[250px]">
                {slice.primary.position == "Left" ? (
                  <div className="md:col-span-2 col-span-4 col-start-1 row-start-1 row-span-4 overflow-hidden md:row-start-1 md:row-span-3 md:col-span-2 md:col-start-1 xl:row-span-6 xl:!col-start-1 xl:!col-span-8 flex items-center">
                    <PrismicNextImage field={slice.primary.image} alt="" />
                  </div>
                ) : (
                  <div className="md:col-span-2 col-span-4 col-start-1 row-start-1 row-span-4 overflow-hidden md:row-start-1 md:row-span-3 md:col-span-2 md:col-start-3 xl:row-span-6 xl:!col-start-9 xl:!col-span-8 flex items-center">
                    <PrismicNextImage field={slice.primary.image} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="h-auto w-[100%] mt-[6px]  m-[15px] xl:m-[30px] xl:h-auto xl:mt-[10px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 md:grid-cols-16 relative gap-x-[12.5px] xl:gap-x-[15px] gap-y-[12.5px] xl:grid-cols-16 w-[calc(100%)] text-gray-400">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 md:col-span-8 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
                    <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                      {slice.primary.caption}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-4 md:col-span-8 col-start-1 row-start-1 row-span-1 md:col-start-9 xl:col-span-8 xl:col-start-9  flex items-center">
                    <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                      {slice.primary.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {slice.variation == "1XPortraitImage" && (
          <>
            <div className="w-[100%] h-[calc(66.65vh-20px)]   m-[15px] xl:m-[30px] sm:h-[100vh] md:h-[calc(62.5vh-20px)] min-h-[40px] md:min-h-[400px] xl:min-h-[400px]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-8 relative gap-x-[9px] xl:gap-x-[15px] gap-y-[0px] md:grid-cols-16 md:grid-rows-5 md:w-[100%] ">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-8 overflow-hidden md:col-span-8 md:row-start-1 md:row-span-5 md:col-start-1 xl:!col-start-1 xl:!col-span-4 flex items-center">
                    <PrismicNextImage field={slice.primary.image} alt="" />
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-8 overflow-hidden md:col-span-8 md:row-start-1 md:row-span-5 md:col-start-9 xl:!col-start-9 xl:!col-span-4  flex items-center">
                    <PrismicNextImage field={slice.primary.image} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="h-auto w-[100%] mt-[-6px]  ml-[15px] xl:ml-[30px]  xl:h-auto xl:mt-[-20px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 md:grid-cols-16 relative gap-x-[9px] xl:gap-x-[15px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)] text-gray-400">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 md:col-span-8 xl:!col-span-4 xl:col-start-1 flex items-center">
                    <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                      {slice.primary.caption}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1  md:col-span-8 md:col-start-9  xl:!col-span-4 xl:!col-start-9  flex items-center">
                    <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                      {slice.primary.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {slice.variation == "fullBleedImage" && (
          <>
            <div className="h-[calc(91.63vh+20px)] w-[calc(100%+30px)] xl:w-[calc(100%+60px)] ml-[0px] xl:h-[calc(112.5vh-20px)] min-h-[600px]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-11 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-9 ">
                <div className="col-start-1 row-start-1  overflow-hidden  col-span-4 row-span-11 xl:col-span-16 xl:row-span-9  flex items-center  justify-center">
                  <PrismicNextImage
                    field={slice.primary.image}
                    alt=""
                    className="w-auto h-[100%] max-w-none xl:max-w-auto xl:w-[100%] xl:h-auto  md:min-h-[1100px]"
                  />
                </div>
              </div>
            </div>
            <div className="h-auto w-[calc(100%-20px)] mt-[8px] ml-[15px] xl:ml-[30px] xl:h-auto xl:mt-[10px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 relative gap-x-[12.5px] xl:gap-x-[15px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)] text-gray-400">
                <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
                  <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                    {slice.primary.caption}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {slice.variation == "2XLandscapeImage" && (
          <>
            <div className="h-[calc(16.66vh-20px)] sm:h-[100vh] md:h-[calc(25vh-20px)] w-[100%]  m-[15px] xl:m-[30px]  xl:h-[calc(25vh-20px)]">
              <div className="w-[calc(100%)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-2 md:!grid-rows-3 relative gap-x-[9px] xl:gap-x-[15px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-2  min-h-[75px] md:!min-h-[200px] xl:min-h-[250px]">
                {slice.primary.position == "Left" ? (
                  <>
                    <div className="col-span-2 col-start-1 row-start-1 row-span-2 md:row-span-3 xl:col-span-4 xl:row-start-1 xl:row-span-2 xl:col-start-1 overflow-hidden flex items-center">
                      <PrismicNextImage field={slice.primary.image_1} alt="" />
                    </div>
                    <div className="col-span-2 col-start-3 row-start-1  row-span-2 md:row-span-3 xl:col-span-4 xl:row-start-1 xl:row-span-2  xl:col-start-5 overflow-hidden flex items-center">
                      <PrismicNextImage field={slice.primary.image_2} alt="" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-2 col-start-1 row-start-1 row-span-2 xl:col-span-4 md:row-span-3 xl:row-start-1 xl:row-span-2 xl:col-start-9 overflow-hidden flex items-center">
                      <PrismicNextImage field={slice.primary.image_1} alt="" />
                    </div>
                    <div className="col-span-2 col-start-3 row-start-1 row-span-2 xl:col-span-4 md:row-span-3 xl:row-start-1 xl:row-span-2  xl:col-start-13 overflow-hidden flex items-center">
                      <PrismicNextImage field={slice.primary.image_2} alt="" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="h-auto w-[calc(100%)] mt-[-6px]  ml-[15px] xl:m-[30px]  xl:h-auto xl:mt-[-20px] absolute">
              <div className="float-left grid grid-cols-4 grid-rows-1 relative gap-x-[9px] xl:gap-x-[15px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)] text-gray-400">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
                    <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                      {slice.primary.caption_1 &&
                        `Left: ${slice.primary.caption_1} `}
                      {slice.primary.caption_2 &&
                        `Right: ${slice.primary.caption_2}`}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-9  flex items-center">
                    <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                      {slice.primary.caption_1 &&
                        `Left: ${slice.primary.caption_1} `}
                      {slice.primary.caption_2 &&
                        `Right: ${slice.primary.caption_2}`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {slice.variation == "2XPortraitImage" && (
          <>
            <div className="w-[100%] mt-[-4px] m-[15px] xl:m-[30px] sm:h-[100vh] h-[calc(33.32vh-20px)]  md:h-[calc(62.5vh-20px)] xl:h-[calc(62.5vh-20px)] min-h-[40px] md:min-h-[400px] xl:min-h-[400px]">
              <div className="w-[100%] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-10 relative gap-x-[9px] xl:gap-x-[15px] gap-y-[0px] md:grid-rows-5 xl:grid-cols-16 xl:grid-rows-5 ">
                {slice.primary.position == "Left" ? (
                  <>
                    <div className="col-span-2 col-start-1 row-start-1 row-span-10 overflow-hidden md:row-span-5 xl:col-span-4 xl:row-start-1 xl:row-span-5 xl:col-start-1 flex items-center">
                      <PrismicNextImage field={slice.primary.image_1} alt="" />
                    </div>
                    <div className="col-span-2 col-start-3 row-start-1 row-span-10 overflow-hidden md:row-span-5 xl:col-span-4  xl:row-start-1 xl:row-span-5 xl:col-start-5 flex items-center">
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
            <div className="h-auto w-[100%] mt-[-6px] ml-[15px] xl:ml-[30px]  xl:h-auto xl:mt-[-20px] absolute">
              <div className="float-left w-[100%] grid grid-cols-4 grid-rows-1 relative gap-x-[9px] xl:gap-x-[15px] gap-y-[0px] xl:grid-cols-16 text-gray-400">
                {slice.primary.position == "Left" ? (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
                    <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                      {slice.primary.caption_1 &&
                        `Left: ${slice.primary.caption_1} `}
                      {slice.primary.caption_2 &&
                        `Right: ${slice.primary.caption_2}`}
                    </p>
                  </div>
                ) : (
                  <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-9  flex items-center">
                    <p className="leading-[110%] m-[0] p-[0] text-[12px] xl:text-[12px]">
                      {slice.primary.caption_1 &&
                        `Left: ${slice.primary.caption_1} `}
                      {slice.primary.caption_2 &&
                        `Right: ${slice.primary.caption_2}`}
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
