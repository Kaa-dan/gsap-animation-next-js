import { Menu, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="h-[12vh] border border-gray-100">
      <div className="border h-full  w-[90%] m-auto flex justify-between items-center border-gray-100">
        {/* LEFT SECTION  */}
        <div className="flex border border-gray-100 w-[30%] h-full items-center ">
          <div className="px-6">
            <Menu size={35} />
          </div>
          <div className="bg-black h-full w-[85%] font-bold text-2xl  text-white  text-start flex items-center justify-center">
            LOGO
          </div>
        </div>

        {/* RIGHT SECTION CONTACT */}
        <div className="flex h-full border border-gray-100 items-center justify-center gap-2 font-semibold bg-[#0D0D0D05] text-black w-[15%] ">
          <Phone />
          <span>Contact Us</span>
        </div>
      </div>
    </header>
  );
}
