/**
 *
 * trying the night sky
 *
 */

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Moon, Sun, Code, Contact, Info, Menu, X } from "lucide-react";

// function Star({ style, color }) {
//   return (
//     <div
//       className={`${color} absolute rounded-full animate-twinkle`}
//       style={{
//         width: `${Math.random() * 2 + 1}px`,
//         height: `${Math.random() * 2 + 1}px`,
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         animationDuration: `${Math.random() * 3 + 2}s`,
//         animationDelay: `${Math.random() * 5}s`,
//         ...style,
//       }}
//     ></div>
//   );
// }

// export function Layout({ children }) {
//   const [darkMode, setDarkMode] = useState(true);
//   const location = useLocation();
//   const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

//   const icons = {
//     about: <Info className="w-5 h-5 text-orange-500" />,
//     projects: <Code className="w-5 h-5 text-orange-500" />,
//     contact: <Contact className="w-5 h-5 text-orange-500" />,
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const toggleSidePanel = () => {
//     setIsSidePanelOpen(!isSidePanelOpen);
//   };

//   return (
//     <div
//       className={`min-h-screen pb-16 ${
//         darkMode ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* Starry Night Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(200)].map((_, i) => (
//           <Star
//             key={i}
//             color={!darkMode ? "bg-black" : "bg-white"}
//             style={{ opacity: Math.random() * 0.7 + 0.3 }}
//           />
//         ))}
//       </div>

//       {/* Header for larger screens */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-40 backdrop-filter backdrop-blur-lg">
//         <nav className="container mx-auto px-4 md:px-10 lg:px-40 py-4 flex justify-between items-center">
//           <Link
//             to="/"
//             className="text-xl md:text-2xl font-bold hover:text-gray-300 transition-colors duration-300"
//           >
//             daniel.dev
//           </Link>

//           {/* Mobile hamburger menu */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleSidePanel}
//               className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors "
//               // className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
//             >
//               {isSidePanelOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Navigation for larger screens */}
//           <ul className="hidden md:flex space-x-6 items-center">
//             {["about", "projects", "contact"].map((item) => (
//               <li key={item}>
//                 <Link
//                   to={`/${item}`}
//                   className={`relative overflow-hidden group ${
//                     location.pathname === `/${item}` ? "text-orange-500" : ""
//                   }`}
//                 >
//                   {/* Icon and Text on Hover */}
//                   <span className="relative group cursor-pointer">
//                     <span className="absolute top-0 left-0 flex items-center opacity-0 translate-y-0 group-hover:opacity-80 group-hover:-translate-y-5 transition-all  z-10">
//                       {icons[item]}
//                       <span className="text-orange-500 text-xs ml-1">
//                         {item.charAt(0).toUpperCase() + item.slice(1)}
//                       </span>
//                     </span>
//                   </span>

//                   <span className="text-lg">{item}</span>
//                   {/* Underline animation */}
//                   <span className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 opacity-0 group-hover:h-[80%] group-hover:opacity-50 transition-all "></span>
//                 </Link>
//               </li>
//             ))}

//             {/* Dark Mode Toggle */}
//             <li>
//               <button
//                 onClick={toggleDarkMode}
//                 className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors "
//               >
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* Side Panel for smaller screens */}
//       <div
//         className={`fixed inset-y-0 left-0 w-64 z-50 transform transition-transform ease-in-out md:hidden ${
//           isSidePanelOpen ? "translate-x-0" : "-translate-x-full"
//         } ${darkMode ? "bg-black text-white" : " bg-gray-100 text-black"}`}
//       >
//         <div className="p-6">
//           <Link
//             to="/"
//             className="text-2xl font-bold hover:text-gray-300 transition-colors"
//             onClick={toggleSidePanel}
//           >
//             daniel.dev
//           </Link>
//           <ul className="mt-8 space-y-6">
//             {["about", "projects", "contact"].map((item) => (
//               <li key={item}>
//                 <Link
//                   to={`/${item}`}
//                   className={`block relative overflow-hidden group ${
//                     location.pathname === `/${item}` ? "text-orange-500" : ""
//                   }`}
//                   onClick={toggleSidePanel}
//                 >
//                   <span className="flex items-center">
//                     {icons[item]}
//                     <span className="ml-2 text-lg">{item}</span>
//                   </span>
//                 </Link>
//               </li>
//             ))}

//             {/* Dark Mode Toggle */}
//             <li>
//               <button
//                 onClick={() => {
//                   toggleDarkMode();
//                   toggleSidePanel();
//                 }}
//                 className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors "
//               >
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main content */}
//       {/* <main className="pt-24 px-6 md:px-20 lg:px-40 z-10 relative"> */}
//       <main className=" pt-12 px-8">{children}</main>
//     </div>
//   );
// }

import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Code, Contact, Info, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { TransitionPage } from "./TransitionPage";

function Star({ style, color }) {
  return (
    <div
      className={`${color} absolute rounded-full animate-twinkle`}
      style={{
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
        ...style,
      }}
    ></div>
  );
}

const StarryBackground = React.memo(({ darkMode }) => {
  const stars = useMemo(() => {
    return [...Array(200)].map((_, i) => (
      <Star
        key={i}
        color={!darkMode ? "bg-black" : "bg-white"}
        style={{ opacity: Math.random() * 0.7 + 0.3 }}
      />
    ));
  }, [darkMode]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars}
    </div>
  );
});

export function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const icons = {
    about: <Info className="w-5 h-5 text-orange-500" />,
    projects: <Code className="w-5 h-5 text-orange-500" />,
    contact: <Contact className="w-5 h-5 text-orange-500" />,
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  useEffect(() => {
    setIsTransitioning(true);
    setShowContent(false);
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
      setShowContent(true);
    }, 1000); // Adjust this value to control how long the transition page is shown

    return () => clearTimeout(transitionTimer);
  }, [location.pathname]);

  return (
    <div
      className={`min-h-screen pb-16 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <AnimatePresence>
        {isTransitioning && (
          <TransitionPage isVisible={isTransitioning} darkMode={darkMode} />
        )}
      </AnimatePresence>

      <StarryBackground darkMode={darkMode} />

      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <nav className="container mx-auto px-4 md:px-10 lg:px-40 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold hover:text-gray-300 transition-colors duration-300"
          >
            daniel.dev
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleSidePanel}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
            >
              {isSidePanelOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <ul className="hidden md:flex space-x-6 items-center">
            {["about", "projects", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  className={`relative overflow-hidden group ${
                    location.pathname === `/${item}` ? "text-orange-500" : ""
                  }`}
                >
                  <span className="relative group cursor-pointer">
                    <span className="absolute top-0 left-0 flex items-center opacity-0 translate-y-0 group-hover:opacity-80 group-hover:-translate-y-5 transition-all duration-300 z-10">
                      {icons[item]}
                      <span className="text-orange-500 text-xs ml-1">
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </span>
                    </span>
                  </span>

                  <span className="text-lg">{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 opacity-0 group-hover:h-[80%] group-hover:opacity-50 transition-all duration-300"></span>
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`fixed inset-y-0 left-0 w-64 z-50 transform transition-transform ease-in-out duration-300 md:hidden ${
          isSidePanelOpen ? "translate-x-0" : "-translate-x-full"
        } ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}
      >
        <div className="p-6">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-gray-300 transition-colors"
            onClick={toggleSidePanel}
          >
            daniel.dev
          </Link>
          <ul className="mt-8 space-y-6">
            {["about", "projects", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  className={`block relative overflow-hidden group ${
                    location.pathname === `/${item}` ? "text-orange-500" : ""
                  }`}
                  onClick={toggleSidePanel}
                >
                  <span className="flex items-center">
                    {icons[item]}
                    <span className="ml-2 text-lg">{item}</span>
                  </span>
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={() => {
                  toggleDarkMode();
                  toggleSidePanel();
                }}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {showContent && (
          <motion.main
            className="pt-12 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
