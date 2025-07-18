// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useMediaQuery } from "./MediaQuery";
// import React from "react";
// // import ReactDOM from "react-dom/client";
// import ReactFullpage from "@fullpage/react-fullpage";

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
//         render={({ state, fullpageApi }) => {
//           return (
//             <ReactFullpage.Wrapper>
//               {/* <div className="section">
//                 <p>Section 1 (welcome to fullpage.js)</p>
//                 <button onClick={() => fullpageApi.moveSectionDown()}>
//                   Click me to move down
//                 </button>
//               </div>
//               <div className="section">
//                 <p>Section 2</p>
//               </div> */}
//               {children}
//             </ReactFullpage.Wrapper>
//           );
//         }}
//       />
//     </>
//   );
// }
