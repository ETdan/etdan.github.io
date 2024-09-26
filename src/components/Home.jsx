import React, { useState, useEffect } from "react";
import { AnimatedTitle } from "./AnimatedTitle";

export function Home() {
  return (
    <div className="container mx-auto px-4 py-20 relative">
      <div className=" mx-auto text-center">
        <div> Hello! my name is</div>
        <AnimatedTitle text="Daniel Asfaw" />
        <p className="text-xl mb-8">
          I am a software engineer who loves to work on the web. I am passionate
          about building simple and elegant solutions to complex problems.
        </p>
      </div>
    </div>
  );
}
