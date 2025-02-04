import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#F7F2EC] h-[576px] md:h-[380px] w-full">
      <div className="m-auto max-w-[980px] flex flex-col md:flex-row md:items-center text-center md:text-start justify-between">
        <div className="self-center space-y-6">
          <h1 className="text-4xl text-[#3367DB] font-bold md:mt-[32px]">
            “Happy life Happy Skills”
          </h1>
          <p className="text-xl">สร้างสุขได้ ในสไตล์ของเราเอง</p>
          <button
            className="bg-black rounded-md text-white px-[24px] py-[8px]
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
        mt-8 self-start"
          >
            ดูกิจกรรม
          </button>
        </div>
        <div className="flex justify-center mt-12 md:mt-0 align-bottom items-end">
          <Image
            src="/images/hero.png"
            width={500}
            height={500}
            alt="branding"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
