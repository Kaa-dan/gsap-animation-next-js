"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import finger from "../../../public/assets/footer/finger.png";
export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="bg-black text-white min-h-screen flex flex-col justify-between p-8 relative px-[10%]">
      {/* Top Section */}
      <div className="text-center mt-20">
        <p className="text-gray-500 mb-4">REVEAL YOUR THOUGHTS</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-snug max-w-5xl mx-auto">
          READY TO START YOUR PROJECT?
        </h2>
      </div>

      {/* Middle Section with Button */}
      <div className="flex justify-center items-center my-20">
        <div className="relative">
          {/* Rotating text around button */}
          <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-transparent ">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circle"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[8px]">
                <textPath href="#circle" className="fill-white">
                  Custom Design Quality • Custom Design Quality •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-24 h-24 bg-[#CCFF00] rounded-full flex items-center justify-center text-black font-medium z-10 relative hover:bg-[#b8e600] transition-colors"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8">
          {/* Explore More Section */}
          <div>
            <h3 className="text-[2rem] font-bold mb-4 text-gray-600">
              EXPLORE MORE
            </h3>
            <nav className="flex gap-6 text-gray-400">
              <Link href="/works" className="text-white transition-colors">
                Works
              </Link>
              <Link href="/services" className="text-white transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-white transition-colors">
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
            </nav>
          </div>

          {/* Get in Touch Section */}
          <div className="text-right">
            <h3 className="text-[2rem] font-bold mb-4 text-gray-600">
              GET IN TOUCH
            </h3>
            <div className="flex gap-6 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="text-gray-400">
              <p>contact@agencyname.com | +91 888 8888 888</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" pt-8 text-gray-400">
          <p>© Company Name 2024. All rights reserved.</p>
        </div>
      </div>

      {/* Placeholder for Finger Illustration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 opacity-50">
        <Image alt="finger" src={finger} />
      </div>
    </footer>
  );
}
