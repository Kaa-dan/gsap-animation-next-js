"use client";

import Image from "next/image";
import { useState } from "react";

// image
import frame from "../../../public/assets/services/frame.png";
export default function Services() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white min-h-screen w-full overflow-hidden">
      {/* Nestle logo pattern */}
      <div className="flex justify-between px-4 py-6">
        {[...Array(7)].map((_, i) =>
          <Image
            key={i}
            src={frame}
            alt="Nestle Logo"
            width={50}
            height={20}
            className="opacity-80"
          />
        )}
      </div>

      {/* Main content */}
      <div className="px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              OUR
              <br />
              SERVICES
            </h1>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  WHAT WE DO?
                </p>
                <h2 className="text-4xl font-bold">
                  UI/UX DESIGN <span className="text-gray-400">01</span>
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed max-w-xl">
                We have the passion and skills of using design and technology to
                solve even the most complex problems. UI/UX Design is one of the
                most defining factors for digital products. We are dedicated to
                delivering innovative user experiences. One that will provide
                outstanding usability while entirely embracing your brand's
                personality.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="font-medium">WEBSITE DESIGN</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="font-medium">UI/UX DESIGN</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="font-medium">MOTION DESIGN</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="font-medium">RESPONSIVE WEB DESIGN</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="font-medium">ILLUSTRATIONS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-500">
                      AND MORE...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Interface mockup */}
          <div className="relative">
            <div
              className="relative transform transition-transform duration-500"
              style={{
                transform: isHovered ? "rotate3d(1, 1, 1, 5deg)" : "none"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={frame}
                alt="Car Marketplace Interface"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />

              {/* Decorative circles */}
              <div className="absolute -right-4 top-1/4 w-4 h-4 bg-purple-600 rounded-full" />
              <div className="absolute right-8 top-1/3 w-2 h-2 bg-gray-300 rounded-full" />
              <div className="absolute -right-2 bottom-1/4 w-3 h-3 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
