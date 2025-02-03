"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="overflow-hidden m-auto" ref={emblaRef}>
      <div
        className="flex bg-red w-[960px] m-auto bg-white
      rounded-md"
      >
        <div className="flex-none basis-full">
          <div>
            <Image
              src="/images/event_1.png"
              width={1070}
              height={260}
              alt="Event 1"
            />
          </div>

          <h2>
            “Play day” Happy version of me พื้นที่สร้างสรรค์เรื่องใจ ๆ
            สำหรับการให้เวลากับตัวเราเอง
          </h2>
          <div className="flex pr-8">
            <div className="flex flex-1 justify-between">
              <div className="px-4">
                <p>28 มกราคม 2567</p>
              </div>
              <div className="px-4 border-l-2 border-gray-600 border-solid">
                <p>10:00-20:00 น.</p>
              </div>
              <div className="px-4 border-l-2 border-gray-600 border-solid">
                <p>ณ หอศิลป กรุงเทพมหานคร ชั้น 1</p>
              </div>
            </div>
            <button className="bg-[#3367DB] text-white font-bold px-4 py-2 ml-8 rounded-md">
              รายละเอียด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
