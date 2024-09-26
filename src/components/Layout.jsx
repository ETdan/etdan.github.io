// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Moon, Sun, Code, Contact, Info } from "lucide-react";

// export function Layout({ children }) {
//   const [darkMode, setDarkMode] = useState(true);
//   const location = useLocation();

//   const icons = {
//     about: <Info className="w-5 h-5 text-orange-500" />,
//     projects: <Code className="w-5 h-5 text-orange-500" />,
//     contact: <Contact className="w-5 h-5 text-orange-500" />,
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const moveShape = (xMultiplier, yMultiplier) => {
//     return {
//       transform: `translate(${mousePosition.x * xMultiplier}px, ${
//         mousePosition.y * yMultiplier
//       }px)`,
//       transition: "transform 0.1s ease-out",
//     };
//   };

//   return (
//     <>
//       <div className="sticky  top-1/2  -z-5">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gray-700 opacity-20"
//             style={{
//               transform: `translate(-50%, -50%) rotate(${i * 10}deg)`,
//             }}
//           ></div>
//         ))}
//       </div>
//       <div
//         className={`min-h-screen pb-16 ${
//           darkMode ? "bg-black text-white" : "bg-white text-black"
//         }`}
//       >
//         <header className="top-4 fixed left-0 right-0 z-50 bg-opacity-40 backdrop-filter backdrop-blur-lg">
//           <nav className="container mx-auto px-40 py-4 flex justify-between items-center">
//             <Link
//               to="/"
//               className="text-2xl font-bold hover:text-gray-300 transition-colors duration-300"
//             >
//               daniel.dev
//             </Link>
//             <ul className="flex space-x-6 items-center">
//               {["about", "projects", "contact"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to={`/${item}`}
//                     className={`relative overflow-hidden group ${
//                       location.pathname === `/${item}` ? "text-orange-500" : ""
//                     }`}
//                   >
//                     {/* Icon and Text on Hover */}
//                     <span className="relative group cursor-pointer">
//                       <span className="absolute top-0 left-0 flex items-center opacity-0 translate-y-0 group-hover:opacity-80 group-hover:-translate-y-5 transition-all duration-300 z-10">
//                         {icons[item]} {/* Dynamic icon based on the item */}
//                         <span className="text-orange-500 text-xs ml-1">
//                           {item.charAt(0).toUpperCase() + item.slice(1)}
//                         </span>
//                       </span>
//                     </span>

//                     <span className=" text-lg">{item}</span>
//                     {/* Underline animation */}
//                     <span className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 opacity-0 group-hover:h-[80%] group-hover:opacity-50 transition-all duration-300"></span>
//                   </Link>
//                 </li>
//               ))}

//               {/* Dark Mode Toggle */}
//               <li>
//                 <button
//                   onClick={toggleDarkMode}
//                   className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         <div className=" sticky top-1/2">
//           <div
//             className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-600 rounded-full opacity-50"
//             style={moveShape(-0.03, -0.05)}
//           ></div>
//           <div
//             className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-orange-500 rounded-full opacity-50"
//             style={moveShape(0.04, 0.03)}
//           ></div>
//           <div
//             className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-600 rounded-full opacity-50"
//             style={moveShape(-0.05, 0.02)}
//           ></div>
//         </div>
//         <main className="pt-20 px-40 z-10 ">{children}</main>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Code, Contact, Info, Menu, X } from "lucide-react";

export function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const icons = {
    about: <Info className="w-5 h-5 text-orange-500" />,
    projects: <Code className="w-5 h-5 text-orange-500" />,
    contact: <Contact className="w-5 h-5 text-orange-500" />,
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const moveShape = (xMultiplier, yMultiplier) => {
    return {
      transform: `translate(${mousePosition.x * xMultiplier}px, ${
        mousePosition.y * yMultiplier
      }px)`,
      transition: "transform 0.1s ease-out",
    };
  };

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <>
      {/* Background grid effect */}
      <div className="sticky top-1/2 -z-5 hidden md:block">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gray-700 opacity-20"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 10}deg)`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`min-h-screen pb-16 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Header for larger screens */}
        <header className="top-4 fixed left-0 right-0 z-50 bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <nav className="container mx-auto px-4 md:px-10 lg:px-40 py-4 flex justify-between items-center">
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold hover:text-gray-300 transition-colors duration-300"
            >
              daniel.dev
            </Link>

            {/* Mobile hamburger menu */}
            <div className="md:hidden">
              <button
                onClick={toggleSidePanel}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                {isSidePanelOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Navigation for larger screens */}
            <ul className="hidden md:flex space-x-6 items-center">
              {["about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item}`}
                    className={`relative overflow-hidden group ${
                      location.pathname === `/${item}` ? "text-orange-500" : ""
                    }`}
                  >
                    {/* Icon and Text on Hover */}
                    <span className="relative group cursor-pointer">
                      <span className="absolute top-0 left-0 flex items-center opacity-0 translate-y-0 group-hover:opacity-80 group-hover:-translate-y-5 transition-all duration-300 z-10">
                        {icons[item]} {/* Dynamic icon based on the item */}
                        <span className="text-orange-500 text-xs ml-1">
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </span>
                      </span>
                    </span>

                    <span className="text-lg">{item}</span>
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 opacity-0 group-hover:h-[80%] group-hover:opacity-50 transition-all duration-300"></span>
                  </Link>
                </li>
              ))}

              {/* Dark Mode Toggle */}
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

        {/* Side Panel for smaller screens */}
        <div
          className={`fixed inset-y-0 left-0 w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isSidePanelOpen ? "translate-x-0" : "-translate-x-full"
          } ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
        >
          <div className="p-6">
            <Link
              to="/"
              className="text-2xl font-bold hover:text-gray-300 transition-colors duration-300"
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

              {/* Dark Mode Toggle */}
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

        {/* Shapes that move with mouse */}
        <div className="sticky top-1/2 hidden lg:block">
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-full opacity-50"
            style={moveShape(-0.03, -0.05)}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-24 h-24 md:w-32 md:h-32 bg-orange-500 rounded-full opacity-50"
            style={moveShape(0.04, 0.03)}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full opacity-50"
            style={moveShape(-0.05, 0.02)}
          ></div>
        </div>

        {/* Main content */}
        <main className="pt-24 px-6 md:px-20 lg:px-40 z-10">{children}</main>
      </div>
    </>
  );
}
