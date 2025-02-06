import { ChevronRight } from "lucide-react";
import React from "react";

const Positive = () => {
  return (
    <section
      className="bg-[url('/images/home-section3-bg.png')] bg-cover bg-center 
        w-full min-h-[15vw] flex flex-col 
        gap-6 justify-center items-center p-8 text-center"
    >
      <h1 className="text-xl md:text-3xl font-bold">Positive Psychology</h1>
      <p className="text-base md:text-xl">
        ทำความเข้าใจในเรื่องของ “Positive Psychology” ให้มากยิ่งขึ้น
      </p>
      <button
        className="bg-black hover:bg-black/80 transition-colors duration-300 flex justify-center items-center gap-1 text-white
      px-8 py-2 rounded-md"
      >
        <span>เรียนรู้เพิ่มเติม</span>
        <ChevronRight />
      </button>
    </section>
  );
};

export default Positive;
