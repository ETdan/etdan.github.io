// import { AnimatedTitle } from "./AnimatedTitle";

// export function Home() {
//   return (
//     <div className="container mx-auto px-4 py-20 relative">
//       <div className=" mx-auto text-center">
//         <div>
//           <span className="">Hello!</span> my name is
//         </div>
//         <AnimatedTitle text="Daniel Asfaw" />
//         <p className="text-xl mb-8">
//           I'm passionate about building scalable backend systems and leveraging
//           AI to solve real-world problems, making technology more impactful and
//           efficient.
//         </p>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { AnimatedTitle } from "./AnimatedTitle";

// const ColorfulBlob = ({ size, position }) => {
//   return (
//     <div className={`absolute ${position} z-0`}>
//       <div
//         className={`blob bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-full ${size} `}
//       ></div>
//     </div>
//   );
// };

// export function Home() {
//   return (
//     <div className="container  px-4  relative overflow-hidden">
//       <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
//         {/* Left side content */}
//         <div className="lg:w-1/2 text-center  lg:mb-0 ">
//           <div>
//             <span className=" text-purple-500 font-semibold">Hello!</span> my
//             name is
//           </div>
//           <AnimatedTitle text="Daniel Asfaw" />
//           <p className="text-xl  max-w-2xl">
//             I'm passionate about building scalable backend systems and
//             leveraging AI to solve real-world problems, making technology more
//             impactful and efficient.
//           </p>
//         </div>

//         {/* Right side with colorful blobs animation and glass card */}
//         <div className="lg:w-1/2 relative h-[600px]">
//           <ColorfulBlob
//             size="w-80 h-80"
//             position="top-20 left-1/4 transform -translate-x-1/2"
//           />
//           <ColorfulBlob
//             size="w-64 h-64"
//             position="bottom-10 left-3/4 transform -translate-x-1/2"
//           />
//           <ColorfulBlob
//             size="w-72 h-72"
//             position="middle-20 left-1/2 transform -translate-x-1/2"
//           />

//           {/* Glass card */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg w-64 h-[450px] transform -translate-x-12  translate-x-8">
//               {/* Card is intentionally left empty */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { AnimatedTitle } from "./AnimatedTitle";

const ColorfulBlob = ({ size, position }) => {
  return (
    <div className={`absolute ${position} z-0`}>
      <div
        className={`blob bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-full ${size} `}
      ></div>
    </div>
  );
};

export function Home() {
  return (
    <div className="container relative pt-8  mx-auto">
      <div className="flex flex-col lg:flex-row  items-center justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 text-center lg:mb-0 z-10 pb-24">
          <div>
            <span className="text-purple-500 font-semibold">Hello!</span> my
            name is
          </div>
          <AnimatedTitle text="Daniel Asfaw" />
          <p className="text-xl max-w-2xl ">
            I'm passionate about building scalable backend systems and
            leveraging AI to solve real-world problems, making technology more
            impactful and efficient.
          </p>
        </div>

        {/* Right side with colorful blobs animation and glass card */}
        <div className="hidden lg:block lg:w-1/2 relative h-[550px]">
          <ColorfulBlob
            size="w-80 h-80"
            position="top-20 left-1/4 transform -translate-x-1/2"
          />
          <ColorfulBlob
            size="w-64 h-64"
            position="bottom-10 left-3/4 transform -translate-x-1/2"
          />
          <ColorfulBlob
            size="w-72 h-72"
            position="middle-20 left-1/2 transform -translate-x-1/2"
          />

          {/* Glass card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg w-64 h-[450px] transform -translate-x-12 translate-x-8">
              {/* Card is intentionally left empty */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
