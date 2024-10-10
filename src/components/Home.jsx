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
/**
 *
 * temp
 *
 */

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
//     <div className="container relative pt-8  mx-auto">
//       <div className="flex flex-col lg:flex-row  items-center justify-between">
//         {/* Left side content */}
//         <div className="lg:w-1/2 text-center lg:mb-0 z-10 pb-24">
//           <div>
//             <span className="text-purple-500 font-semibold">Hello!</span> my
//             name is
//           </div>
//           <AnimatedTitle text="Daniel Asfaw" />
//           <p className="text-xl max-w-2xl ">
//             I'm passionate about building scalable backend systems and
//             leveraging AI to solve real-world problems, making technology more
//             impactful and efficient.
//           </p>
//         </div>

//         {/* Right side with colorful blobs animation and glass card */}
//         <div className="hidden lg:block lg:w-1/2 relative h-[550px]">
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
//             <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg w-64 h-[450px] transform -translate-x-12 translate-x-8">
//               {/* Card is intentionally left empty */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/**
 *
 *
 *
 *
 *
 *
 */

import React from "react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "./AnimatedTitle";

const ColorfulBlob = ({ size, initialPosition, color }) => {
  return (
    <motion.div
      className="absolute  cursor-grab active:cursor-grabbing"
      initial={initialPosition}
      drag
      dragMomentum={false}
      whileDrag={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
    >
      <div
        className={`blob ${size} rounded-full transition-all duration-300`}
        style={{
          background: `linear-gradient(to right, ${color})`,
        }}
      ></div>
    </motion.div>
  );
};

export function Home() {
  return (
    <div className="container relative pt-8 mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 text-center lg:mb-0 z-10 pb-24">
          <div>
            <span className="text-purple-500 font-semibold">Hello!</span> my
            name is
          </div>
          <AnimatedTitle text="Daniel Asfaw" />
          <p className="text-xl max-w-2xl">
            I'm passionate about building scalable backend systems and
            leveraging AI to solve real-world problems, making technology more
            impactful and efficient.
          </p>
        </div>

        {/* Right side with colorful blobs animation */}
        <div className="hidden lg:block lg:w-1/2 relative h-[550px] ">
          <ColorfulBlob
            size="w-60 h-60"
            initialPosition={{ x: 0, y: 0 }}
            color="#9333ea, #ec4899, #f97316"
          />
          <ColorfulBlob
            size="w-44 h-44"
            initialPosition={{ x: 200, y: 300 }}
            color="#8b5cf6, #ec4899, #f97316"
          />
          <ColorfulBlob
            size="w-52 h-52"
            initialPosition={{ x: 100, y: 150 }}
            color="#6366f1, #ec4899, #f97316"
          />

          <motion.div
            className="absolute  cursor-grab active:cursor-grabbing"
            initial={{ x: 150, y: 150 }}
            drag
            dragMomentum={false}
            whileDrag={{
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            <div
              className={`blob w-72 h-72 rounded-full transition-all duration-300`}
              style={{
                background: `transparent`,
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg w-64 h-[450px] ">
                {/* Card is intentionally left empty */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/**
 *
 *
 *
 *
 */
// import React from "react";
// import { motion } from "framer-motion";
// import { AnimatedTitle } from "./AnimatedTitle";

// const ColorfulBlob = ({ size, initialPosition, color }) => {
//   return (
//     <motion.div
//       className="absolute z-0 cursor-grab active:cursor-grabbing"
//       initial={initialPosition}
//       drag
//       dragMomentum={false}
//       whileDrag={{
//         scale: 0.9,
//       }}
//       transition={{
//         type: "spring",
//         damping: 10,
//         stiffness: 100,
//       }}
//     >
//       <div
//         className={`blob ${size} rounded-full transition-all duration-300`}
//         style={{
//           background: `radial-gradient(circle, ${color})`,
//         }}
//       ></div>
//     </motion.div>
//   );
// };

// const generateRandomPosition = (maxX, maxY) => {
//   return {
//     x: Math.random() * maxX,
//     y: Math.random() * maxY,
//   };
// };

// const generateRandomColor = () => {
//   const hue1 = Math.floor(Math.random() * 360);
//   const hue2 = (hue1 + 30) % 360;
//   const hue3 = (hue1 + 60) % 360;
//   return `hsl(${hue1}, 70%, 50%), hsl(${hue2}, 70%, 50%), hsl(${hue3}, 70%, 50%)`;
// };

// export function Home() {
//   const blobConfigs = React.useMemo(() => {
//     return Array.from({ length: 100 }, (_, i) => ({
//       size: `w-${8 + Math.floor(Math.random() * 16)} h-${
//         8 + Math.floor(Math.random() * 16)
//       }`,
//       initialPosition: generateRandomPosition(300, 400),
//       color: generateRandomColor(),
//     }));
//   }, []);

//   return (
//     <div className="container relative pt-8 mx-auto overflow-hidden">
//       <div className="flex flex-col lg:flex-row items-center justify-between">
//         {/* Left side content */}
//         <div className="lg:w-1/2 text-center lg:mb-0 z-10 pb-24">
//           <div>
//             <span className="text-purple-500 font-semibold">Hello!</span> my
//             name is
//           </div>
//           <AnimatedTitle text="Daniel Asfaw" />
//           <p className="text-xl max-w-2xl">
//             I'm passionate about building scalable backend systems and
//             leveraging AI to solve real-world problems, making technology more
//             impactful and efficient.
//           </p>
//         </div>

//         {/* Right side with colorful blobs animation */}
//         <div className="hidden lg:block lg:w-1/2 relative h-[550px]">
//           {blobConfigs.map((config, index) => (
//             <ColorfulBlob
//               key={index}
//               size={config.size}
//               initialPosition={config.initialPosition}
//               color={config.color}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
