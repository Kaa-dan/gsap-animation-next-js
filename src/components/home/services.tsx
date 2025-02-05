import Image from "next/image";

// image
import brand from "../../../public/assets/services/brand.png";
import frame from "../../../public/assets/services/frame.png";
import { MoveDownLeft } from "lucide-react";
export default function Services() {
  return (
    <section className="bg-white min-h-screen w-full overflow-hidden">
      <div className="w-[90%] mx-auto">
        {/* Nestle logo pattern */}
        <div className="flex justify-around px-4 py-6 bg-[#F8F8F8] h-[15vh]">
          {[...Array(7)].map((_, i) => (
            <Image
              key={i}
              src={brand}
              alt="Nestle Logo"
              width={140}
              height={60}
              className="opacity-80"
            />
          ))}
        </div>

        {/* Main content */}
        <div className="h-screen">
          <div className="flex text-[4.5rem] h-[30%]  font-bold tracking-tight leading-none  justify-between items-center ">
            <div>
              <span>OUR</span>
              <br /> <span>SERVICES</span>
            </div>
            <div className="">
              <MoveDownLeft size={40} />
            </div>
          </div>

          <div className="grid grid-cols-1 bg-[#F8F8F8] h-[70%] lg:grid-cols-2 gap-12 rounded-xl">
            {/* Left column */}
            <div className="space-y-12 p-20">
              <div className="space-y-6">
                <div className="space-y-6">
                  <p className="text-base text-black font-semibold uppercase tracking-wider">
                    WHAT WE DO?
                  </p>
                  <h2 className="text-[4rem] relative font-bold tracking-tighter ">
                    UIUX DESIGN{" "}
                    <span className="text-black text-2xl absolute tracking-wide ml-6 font-extrabold">
                      01
                    </span>
                  </h2>
                </div>

                <p className="text-gray-700 font-medium leading-relaxed max-w-2xl tracking-wide">
                  We have the passion and skills of using design and technology
                  to solve even the most complex problems. UI/UX Design is one
                  of the most defining factors for digital products. We are
                  dedicated to delivering innovative user experiences. One that
                  will provide outstanding usability while entirely embracing
                  your brand's personality.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-8 text-xl">
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
            <div className="h-full w-full bg-green-600">
              <Image
                src={frame}
                alt="Car Marketplace Interface"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
