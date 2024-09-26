import React from "react";
import { AnimatedTitle } from "./AnimatedTitle";

// Import your technology icons here
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGo,
  SiFlutter,
  SiPostgresql,
  SiFirebase,
  SiLinux,
  SiPostman,
  SiExpress,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiNodedotjs, // Node.js import
  SiDart, // Dart import
} from "react-icons/si";

export function About() {
  return (
    <div className="container mx-auto p-6">
      <AnimatedTitle text="About Me" />

      {/* Introduction Section */}
      <section className="mt-6">
        <p className="mt-4">
          I am a passionate Software Engineer with a strong foundation in
          developing scalable applications and a keen interest in machine
          learning and data science. My experience includes backend development
          in Go, frontend development using React, and hands-on work with
          various data-driven projects. I thrive in collaborative environments
          where I can contribute to innovative solutions and grow alongside my
          peers.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold">Skills</h3>

        {/* Programming Languages */}
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Programming Languages</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
            <div className="flex flex-col items-center">
              <SiJavascript className="text-4xl text-yellow-500" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <SiPython className="text-4xl text-blue-500" />
              <p>Python</p>
            </div>
            <div className="flex flex-col items-center">
              <SiGo className="text-4xl text-blue-700" />
              <p>Go</p>
            </div>
            <div className="flex flex-col items-center">
              <SiDart className="text-4xl text-teal-500" /> {/* Dart added */}
              <p>Dart</p>
            </div>

            <div className="flex flex-col items-center">
              <SiHtml5 className="text-4xl text-red-600" />
              <p>HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 className="text-4xl text-blue-600" />
              <p>CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs className="text-4xl text-green-600" />{" "}
              {/* Node.js */}
              <p>Node.js</p>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold">Frameworks</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
            <div className="flex flex-col items-center">
              <SiExpress className="text-4xl text-green-700" />
              <p>Express</p>
            </div>
            <div className="flex flex-col items-center">
              <SiReact className="text-4xl text-blue-500" />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center">
              <SiFlutter className="text-4xl text-blue-400" />
              <p>Flutter</p>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold">Databases</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
            <div className="flex flex-col items-center">
              <SiPostgresql className="text-4xl text-blue-800" />
              <p>PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center">
              <SiFirebase className="text-4xl text-orange-500" />
              <p>Firebase</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-4xl text-green-600" />
              <p>MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-4xl text-blue-700" />
              <p>MySQL</p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold">Tools</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
            <div className="flex flex-col items-center">
              <SiGithub className="text-4xl text-gray-800" />
              <p>Git</p>
            </div>
            <div className="flex flex-col items-center">
              <SiDocker className="text-4xl text-blue-500" />
              <p>Docker</p>
            </div>
            <div className="flex flex-col items-center">
              <SiLinux className="text-4xl text-black" />
              <p>Linux</p>
            </div>
            <div className="flex flex-col items-center">
              <SiPostman className="text-4xl text-red-500" />
              <p>Postman</p>
            </div>
            <div className="flex flex-col items-center">
              <SiFigma className="text-4xl text-purple-500" />
              <p>Figma</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
