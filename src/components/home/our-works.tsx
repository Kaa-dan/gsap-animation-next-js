"use client";

import { useState } from "react";
import frame1 from "../../../public/assets/our-works/frame1.png";
import frame2 from "../../../public/assets/our-works/frame2.png";
import frame3 from "../../../public/assets/our-works/frame3.png";
import frame4 from "../../../public/assets/our-works/frame4.png";
import Image from "next/image";
export default function OurWorks() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Online Video Calls, Meetings and Conferencing",
      category: "Product Design",
      size: "large",
      image: frame1,
    },
    {
      id: 2,
      title: "Hexlytic Branding",
      category: "Branding",
      size: "small",
      image: frame2,
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Design",
      size: "small",
      image: frame3,
    },
    {
      id: 4,
      title: "Product Design",
      category: "UI/UX",
      size: "large",
      image: frame4,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white  md:p-12">
      <div className="max-w-[90%] mx-auto mb-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center  h-[25vh] my-[5%]">
          <h1 className="text-[4rem] leading-snug font-bold ">
            OUR
            <br />
            WORKS
          </h1>
          <div className="max-w-md flex flex-col h-full justify-center gap-3 ">
            <h2 className="text-xl md:text-[2.5rem] leading-snug font-medium mb-2">
              Making brands a damn site better.
            </h2>
            <p className="text-gray-400 text-sm">
              Let’s face it, first impressions matter. Your website’s an
              opportunity to wow your audience, so why choose bad design? Brands
              win over fans when they’re brave enough to go beyond their
              creative comfort zone.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-zinc-900 
                ${
                  project.size === "large"
                    ? "md:col-span-2 aspect-[16/9]"
                    : "aspect-square"
                }`}
              onMouseEnter={() => setIsHovered(project.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Placeholder for project image */}
              <div className="w-full h-full bg-zinc-800 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={project?.image}
                  alt="project_image"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/60 p-6 flex flex-col justify-between transition-opacity duration-300
                ${isHovered === project.id ? "opacity-100" : "opacity-0"}`}
              >
                <div>
                  <span className="text-sm text-gray-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium mt-2">
                    {project.title}
                  </h3>
                </div>
                <button
                  className="self-start px-6 py-2 bg-white text-black rounded-full text-sm font-medium 
                  hover:bg-gray-200 transition-colors"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button
            className="px-16   py-6 bg-[#CCFF00] text-black  font-medium 
            hover:bg-[#B8E600] transition-colors"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
