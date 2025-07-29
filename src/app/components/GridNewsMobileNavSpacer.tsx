"use client";

export default function GridNewsMobileNavSpacer() {
  return (
    <>
      {/* <div className="h-[calc(100vh-20px)] w-[100vw]  opacity-[.3] xl:w-[calc(75vw-20px)]"> */}
      {/* <div className="h-[calc(100vh-20px)] w-[calc(100%-20px)]  opacity-[.3] xl:w-[calc(25vw)] m-[10px]"> */}
      <div className="h-[calc(8.33vh)] w-[calc(100vw-30px)]  opacity-[.6] xl:w-[calc(25vw)] ml-[15px] mt-[15px] xl:h-[calc(100vh-20px)] xl:hidden">
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
    </>
  );
}
