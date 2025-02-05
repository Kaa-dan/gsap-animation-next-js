"use client";

import { ArrowLeft, ArrowRight, MousePointerClick } from "lucide-react";
import frame1 from "../../../public/assets/results/frame1.png";
import Image from "next/image";
export default function ResultsSection() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-[90%] mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between h-[20vh] leading-loose items-end mb-10  ">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight leading-relaxed">
            OUR
            <br />
            RESULTS
          </h1>
          <div className="flex gap-4">
            <button className="p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Results Card */}
        <div className="bg-black rounded-3xl overflow-hidden h-[65vh]">
          <div className="flex flex-col md:flex-row  h-full">
            {/* Left Content */}
            <div className=" flex flex-col justify-around w-1/2 h-full p-10 px-20">
              <div className=" flex  text-white">
                <MousePointerClick className="w-10 h-10" />
                <span className="text-[4rem] font-bold tracking-tight">
                  ClickBooster
                </span>
              </div>
              <div className="flex flex-col">
                {" "}
                <button className="px-10 py-3 w-[30%] rounded-full border border-[#FFE147] text-[#FFE147] hover:bg-[#FFE147] hover:text-[#FF3B3B] transition-colors mb-2">
                  View Project →
                </button>
                <div className=" flex flex-col justify-evenly">
                  <h2 className="text-[#FFE147] text-[6rem] font-bold">
                    70.8%
                  </h2>
                  <p className="text-gray-400 text-2xl">
                    Increase in average engagement time after 03 months.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Pattern */}
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <Image
                alt="img"
                src={frame1}
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
