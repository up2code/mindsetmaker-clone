import React from "react";
import Image from "next/image";
import HeroImage from "@/public/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-secondary">
      <div className="flex m-auto max-w-screen-xl flex-col md:flex-row justify-evenly">
        <div className="space-y-6 self-center text-center md:text-start my-8 md:text-nowrap">
          <h1 className=" text-4xl text-primary font-bold">
            “Happy life Happy Skills”
          </h1>
          <p className="text-xl">สร้างสุขได้ ในสไตล์ของเราเอง</p>
          <button className="bg-black rounded-md text-white px-8 py-2">
            ดูกิจกรรม
          </button>
        </div>
        <div className="self-center lg:self-end max-w-[380px] px-8 md:min-w-[180px] lg:flex-1 animate-fade-in lg:animate-slide-in-right">
          <Image src={HeroImage} alt="branding" priority />
        </div>
      </div>
    </section>
  );
};

export default Hero;
