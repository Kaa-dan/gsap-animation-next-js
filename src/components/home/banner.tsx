import { RocketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import globe from "../../../public/assets/banner/circle.png";
const Banner = () => {
  return (
    <section className="h-[88vh] border border-gray-100 ">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-2 text-sm font-medium mb-5">
          <span>CREATIVE SERVICES</span>
          <Image height={64} width={64} alt="globe image" src={globe} />
          <span>FOR MODERN BRANDS</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] font-black mb-8 tracking-normal">
          WE BUILD BRANDS
          <br />
          THAT {" "}
          <span
            className="relative inline-block text-black "
            style={{
              textShadow: "-7px 3px black",
              WebkitTextStroke: "4px",
              WebkitTextFillColor: "white"
            }}
          >
            STAND
          </span>{" "}
          OUT
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-lg mb-12">
          We&apos;re a creative web design and branding agency based in India
          that crafts beautiful work for brands who{" "}
          <span className="text-purple-600 font-semibold">
            refuse to blend in
          </span>.
        </p>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-[#d1ff1a] hover:bg-[#b8e617] text-black font-semibold px-10 py-5 rounded-lg transition-colors duration-200"
        >
          Get Started
          <RocketIcon className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
