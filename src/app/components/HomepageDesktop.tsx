"use client";

import GridDesktop from "./GridDesktop";
// import { useRef, useEffect } from "react";
// import HugeParagrah from "./HugeParagraph";
import HeroContentDesktop from "./HeroContentDesktop";
// import { Scrollbar } from "react-scrollbars-custom";

export default function HorizontalScroll() {
  // const scrollRef = useRef();

  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (el) {
  //     const onWheel = (e) => {
  //       if (e.deltaY == 0) return;
  //       console.log("testing");
  //       e.preventDefault();
  //       el.scrollTo({
  //         left: el.scrollLeft + e.deltaY * 2
  //         // behavior: "smooth"
  //       });
  //     };
  //     el.addEventListener("wheel", onWheel);
  //     return () => el.removeEventListener("wheel", onWheel);
  //   }
  //   // if(el) {
  //   //   e.preventDefault();
  //   //   var containerScrollPosition = el.scrollLeft;
  //   //   el.scrollTo({
  //   //     top: 0,
  //   //     left
  //   //   })
  //   // }
  // }, []);

  return (
    <>
      <div
        // ref={scrollRef}
        // className="h-screen w-[200vw] bg-red-800  float-left relative overflow-auto"
        // className="h-screen bg-red-800 w-[2000px] float-left relative overflow-auto flex flex-nowrap "
        className="h-screen bg-red-800  md:w-(100%) w-[235vw] float-left relative overflow-auto"
        // style={{ overflow: "auto" }}
      >
        {/* <div style={{ whiteSpace: "nowrap" }}> */}
        {/* <div className="bg-blue-800 w-[75vw] h-screen whitespace-nowrap float-left relative"> */}
        {/* <div className="bg-blue-800 w-[50%] h-screen  flex-[0_0_auto] "> */}
        <div className="bg-[#e34234]  md:w-(100%) w-[calc(75vw+20px)] float-left relative h-screen whitespace-nowrap ">
          {/* <HugeParagrah /> */}
          <HeroContentDesktop />
          <GridDesktop />
        </div>
        {/* <div className="bg-green-800 w-[75vw] h-screen whitespace-nowrap  float-left"> */}
        {/* <div className="bg-green-800 w-[50%] h-screen flex-[0_0_auto] "> */}
        <div className="bg-white  md:w-(100%) w-[75vw] float-left relative h-screen whitespace-nowrap">
          <GridDesktop />
        </div>
        <div className="bg-white  md:w-(100%) w-[75vw] float-left relative h-screen whitespace-nowrap">
          <GridDesktop />
        </div>
      </div>
      {/* <Scrollbar
        style={{ width: 3000, height: 750 }}
        rtl={false}
        noScrollY={true}
      >
        <div className="bg-blue-800 w-[1000px] float-left relative h-screen inline-block ">
          <GridTwelve />
        </div>
        <div className="bg-green-800 w-[1000px] float-left relative h-screen inline-block">
          <GridTwelve />
        </div>
      </Scrollbar> */}
    </>
  );
}
