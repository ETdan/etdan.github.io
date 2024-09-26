import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { AnimatedTitle } from "./AnimatedTitle";

export function Contact() {
  return (
    <div className="container mx-auto p-4">
      <AnimatedTitle text="Contact Me" />
      <div className="contact-info shadow-md rounded p-6 mb-6">
        {/* Grid is responsive, adjusting columns based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <a
            href="mailto:daniel@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Mail size={48} className="mb-2" />
            <span className="text-blue-500 hover:underline">
              daniel@example.com
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-asfaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Linkedin size={48} className="mb-2" />
            <span className="text-blue-500 hover:underline">
              linkedin.com/in/daniel-asfaw
            </span>
          </a>
          <a
            href="https://github.com/daniel-asfaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Github size={48} className="mb-2" />
            <span className="text-blue-500 hover:underline">
              github.com/daniel-asfaw
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
