"use client";

import { useMediaQuery } from "./MediaQuery";
export default function GridNewsMobileNavSpacerIPad() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 1150px)");

  const GridSpacerIpad = () => {
    return (
      <>
        <div className="w-[calc(100vw-15px)] h-[calc(8.33vh)] block ipadGrid">
          <div className="inline float-left relative h-[calc(8.33vh)] w-[calc(50%-15px)]  opacity-[.6] xl:w-[calc(25vw)] ml-[15px] mt-[15px] xl:h-[calc(100vh-20px)] ">
            <div className="w-[calc(100%)] border-t-[1px] border-[#d6d6d6] float-left relative xl:w-[calc(100%)]"></div>
            <div className="w-[calc(100%)] h-[calc((100%)-1px)] float-left grid grid-cols-4 relative gap-[9px] xl:h-[calc((100%/8)-1px)] xl:w-[calc(100%)]">
              <div className="border-r-[1px] border-l-[1px] border-[#d6d6d6] w-[100%] h-[100%]"></div>
              <div className="border-r-[1px] border-l-[1px] border-[#d6d6d6] w-[100%] h-[100%]"></div>
              <div className="border-r-[1px] border-l-[1px] border-[#d6d6d6] w-[100%] h-[100%]"></div>
              <div className="border-r-[1px] border-l-[1px] border-[#d6d6d6] w-[100%] h-[100%]"></div>
              {/* ROW */}
            </div>
            <div className="w-[calc(100%)] border-t-[1px] border-[#d6d6d6] float-left relative xl:w-[calc(100%)]"></div>
          </div>
          <div className="inline float-left relative  h-[calc(8.33vh)] w-[calc(50%-15px)]  opacity-[.6] xl:w-[calc(25vw)] ml-[15px] mt-[15px] xl:h-[calc(100vh-20px)] ">
            <div className="w-[calc(100%)] border-t-[1px] border-[#d6d6d6] float-left relative xl:w-[calc(100%)]"></div>
            <div className="w-[calc(100%)] h-[calc((100%)-1px)] float-left grid grid-cols-4 relative gap-[9px] xl:h-[calc((100%/8)-1px)] xl:w-[calc(100%)]">
              <div className="border-r-[1px] border-l-[1px] border-[#d6d6d6] w-[100%] h-[100%]"></div>
              <div className="border-r-[1px] border-l-[1px] border-[#d6d6d6] w-[100%] h-[100%]"></div>
              <div className="border-r-[1px] border-l-[1px] border-[#d6d6d6] w-[100%] h-[100%]"></div>
              <div className="border-r-[1px] border-l-[1px] border-[#d6d6d6] w-[100%] h-[100%]"></div>
              {/* ROW */}
            </div>
            <div className="w-[calc(100%)] border-t-[1px] border-[#d6d6d6] float-left relative xl:w-[calc(100%)]"></div>
          </div>
        </div>
      </>
    );
  };
  return <>{isMobile || isDesktop ? "" : <GridSpacerIpad />}</>;
}
