import React from "react";
import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";
const Page = () => {
  return (
    <section className="flex justify-center flex-col">
      <h1 className="text-center font-bold text-3xl m-8">
        อีเวนท์น่าสนใจประจำเดือนนี้
      </h1>
      <article
        className="flex flex-col bg-red w-[960px] m-auto bg-white
      rounded-lg shadow-xl pb-4 mt-4"
      >
        <div>
          <Image
            className="rounded-t-xl"
            src="/images/event_1.png"
            width={1070}
            height={260}
            alt="Event 1"
          />
        </div>

        <h2 className="my-4 font-bold text-xl ml-4 pb-8">
          “Play day” Happy version of me พื้นที่สร้างสรรค์เรื่องใจ ๆ
          สำหรับการให้เวลากับตัวเราเอง
        </h2>
        <div className="flex pr-8">
          <div className="flex flex-1 justify-between">
            <div className="px-4 flex gap-2 items-center justify-center">
              <Clock />
              <p>28 มกราคม 2567</p>
            </div>
            <div className="px-4 border-l-2 border-gray-300 border-solid flex gap-2 items-center justify-center">
              <CalendarDays />
              <p>10:00-20:00 น.</p>
            </div>
            <div className="px-4 border-l-2 border-gray-300 border-solid flex gap-2 items-center justify-center">
              <MapPin />
              <p>ณ หอศิลป กรุงเทพมหานคร ชั้น 1</p>
            </div>
          </div>
          <button className="bg-[#3367DB] text-white font-bold px-4 py-2 ml-8 rounded-md opacity-100 hover:opacity-75 transition-opacity duration-150">
            รายละเอียด
          </button>
        </div>
      </article>
    </section>
  );
};

export default Page;
