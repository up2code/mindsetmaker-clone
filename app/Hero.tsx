import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center bg-[#F7F2EC] h-[380px]">
      <div
        className="flex-1 flex justify-center items-start flex-col leading-8 text-[#3367DB]
      font-bold gap-4"
      >
        <h1 className="text-4xl ">“Happy life Happy Skills”</h1>
        <p className="text-xl self-start">สร้างสุขได้ ในสไตล์ของเราเอง</p>
        <button
          className="bg-black rounded-md text-white px-[8px] py-[4px]
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
        mt-8 self-start"
        >
          ดูกิจกรรม
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src="/images/hero.png" width={500} height={500} alt="branding" />
      </div>
    </section>
  );
};

export default Hero;
