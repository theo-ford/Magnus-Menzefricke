// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useMediaQuery } from "./MediaQuery";
// import React from "react";
// // import ReactDOM from "react-dom/client";
// import ReactFullpage from "@fullpage/react-fullpage";
// // import "@fullpage/react-fullpage/dist/fullpage.css";

// interface HorizontalScrollProps {
//   children: React.ReactNode;
// }

// export default function HorizontalScroll_v6({
//   children
// }: HorizontalScrollProps) {
//   return (
//     <>
//       {/* <div className="w-[100vw] xl:overflow-y-hidden ">
//         <div className="overflow-hidden xl:flex xl:flex-nowrap xl:overflow-x-scroll">
//           {children}
//         </div>
//       </div> */}
//       <ReactFullpage
//         //fullpage options
//         credits={{
//           enabled: true,
//           href: "https://fullpage.js.org",
//           text: "Fullpage.js"
//         }}
//         scrollingSpeed={1000} /* Options here */
//         direction="horizontal"
//         touchSensitivity={5}
//         normalScrollElements={".normal-scroll"}
//         autoScrolling={true}
//         fitToSection={true}
//         scrollOverflowOptions={{
//           touch: true,
//           touchSensitivity: 5,
//           touchMove: true,
//           touchStart: true,
//           touchEnd: true,
//           touchThreshold: 5
//         }}
//         render={({ state, fullpageApi }) => {
//           return (
//             <ReactFullpage.Wrapper>
//               <div className="section w-[100vw] h-[100vh] bg-[#e34234]">
//                 <div className="slide w-[75vw] h-[100%] bg-[#45e334]"></div>
//                 <div className="slide w-[75vw] h-[100%] bg-[#e33434]"></div>
//                 <div className="slide w-[75vw] h-[100%] bg-[#7734e3]"></div>
//               </div>
//             </ReactFullpage.Wrapper>
//           );
//         }}
//       />
//     </>
//   );
// }
