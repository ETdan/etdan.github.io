import React from "react";

export function AnimatedTitle({ text }) {
  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-6 flex flex-wrap justify-center">
      {text.split("").map((char, index) => {
        // Randomly determine rotation direction (left or right)

        const rotateDirection =
          Math.random() > 0.5 ? "hover:rotate-6" : "hover:-rotate-6";

        return (
          <span
            key={index}
            className={`inline-block transition-transform duration-300 ease-in-out hover:scale-110 ${rotateDirection}`}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
}
