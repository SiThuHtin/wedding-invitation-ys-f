import Image from "next/image";
import HeroImage from "../public/heroimage.jpg";

import Contact from "../public/contact.jpeg";
import One from "../public/1.jpeg";
import Two from "../public/2.jpg";
import Three from "../public/3.jpeg";
import Four from "../public/4.jpeg";
import ColorPalette from "./components/colorpalette";
import FormSection from "./components/formsection";
import Attending from "../public/attending.jpeg";
import { motion } from "framer-motion";
import WeddingSection from "./components/letter";





export default function Home() {
  return (
    <main className="bg-white">
<div className="h-screen w-full flex flex-col md:flex-row overflow-hidden">
  {/* Left Section - Text */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-6 md:p-12 overflow-y-auto">
    <div className="text-3xl md:text-5xl font-satisfy pb-6 md:pb-12 text-yellow-700 text-center">
      Shun & Ye's Wedding
    </div>

    <p className="text-base md:text-xl italic text-yellow-900 mt-2 text-center">
      "A Great Marriage is not when the perfect couple comes together.
      <br />
      It is when an imperfect couple learns to enjoy their differences"
    </p>
    <div className="py-3 font-light italic text-center">-Dave Meurer</div>
  </div>

  {/* Right Section - Image */}
  <div className="w-full md:w-1/2 h-[40vh] md:h-full flex-none">
    <Image
      src={HeroImage}
      alt="Wedding Rings"
      className="w-full h-full object-contain"
    />
  </div>
</div>
      {/* Wedding Events */}
      <div className="h-screen w-full flex items-center justify-center bg-[#F5D9B1]">
        <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between p-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#3F4A37] leading-tight">
              Wedding Celebration Details
            </h1>
            <p className="text-lg text-[#3F4A37] mt-4">March 05, 2025</p>
          </div>

          <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
            <div className="border-t border-[#3F4A37] pt-3 text-[#3F4A37] text-lg flex justify-between">
              <span>5:30 PM</span> <span>SIGNING CEREMONY</span>
            </div>
            <div className="border-t border-[#3F4A37] pt-3 text-[#3F4A37] text-lg flex justify-between">
              <span>6:6 PM</span> <span>BEER TIME</span>
            </div>
            <div className="border-t border-[#3F4A37] pt-3 text-[#3F4A37] text-lg flex justify-between">
              <span>6:45 PM</span> <span>WELCOME NEWLYWEDS</span>
            </div>
            <div className="border-t border-[#3F4A37] pt-3 text-[#3F4A37] text-lg flex justify-between">
              <span>7:30 PM</span> <span>DINNER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Formsection */}
      {/* <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-olive p-6">
        <div className="md:w-1/2 text-center space-y-6 ">
          <div className="text-left">
            <p className="text-xl md:text-2xl font-serif  text-white">
              Save the date! Shun & Ye are getting married on
              <br />
              <span className="text-yellow-600 italic font-light">
                March 05, 2025 at 5:30 PM.
              </span>
              <br />
              See You at
              <br />{" "}
              <span className="text-yellow-600 italic font-light">
                Golden Inya,Yangon
              </span>
            </p>
          </div>

          <div className="space-y-4 font-serif">
            <div>
              <h2 className="text-lg font-semibold text-yellow-600 font-serif">
                DATE:
              </h2>
              <p className="text-white font-serif">March 05, 2025 at 5:30 PM</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-yellow-600 font-serif">
                VENUE:
              </h2>
              <p className="text-white font-serif">Golden Inya,Yangon</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-yellow-600 font-serif">
                DRESS CODE & COLOR:
              </h2>
              <p className="text-white font-serif">Formal</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src={Contact}
            alt="Couple Photo"
            className="w-72 md:w-96 rounded-lg shadow-md"
          />
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#3C3D37] p-6">
        {/* Wedding Info Section */}
        <div className="md:w-1/2 text-center space-y-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-left font-serif text-white leading-relaxed">
              <div className="pb-6 font-satisfy">
                Save the date! <br/> Shun & Ye are getting married on
              </div>
              <div className="text-left pb-11">
                <span className="text-yellow-500 text-xl  italic font-light">
                  March 05, 2025 at 5:30 PM
                </span>
                <br />
                <span className="text-yellow-500 text-xl italic font-light">
                  Golden Inya, Yangon
                </span>
                <br />
                <span className="text-yellow-500 text-xl italic font-light">
                  Dress code : formal attire
                </span>
              </div>
           
              <ColorPalette />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src={Contact}
            alt="Couple Photo"
            className="w-72 md:w-96 rounded-xl shadow-lg border-4 border-yellow-500"
          />
        </div>
      </div>




      <FormSection />
            {/* Gallery Section */}
            <div className="bg-[#F5D9B1] h-auto">
        <div className="max-w-4xl mx-auto p-6 ">
          <div className="grid grid-cols-3 gap-4">
            <Image
              src={One}
              alt="Window Photo 1"
              className=" col-span-1 h-64 object-cover rounded-lg shadow-md"
            />
            <Image
              src={Two}
              alt="Window Photo 2"
              className="col-span-2 h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <h2 className="text-center text-2xl font-satisfy tracking-widest font-bold my-4">
            Love is like a movie,a journey of heartbeats & timeless memories
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <Image
              src={Four}
              alt="Tree Photo"
              className="col-span-2 h-64 object-cover rounded-lg shadow-md"
            />
            <Image
              src={Three}
              alt="Picnic Photo"
              className="col-span-1 h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <WeddingSection />
    
    </main>
  );
}
