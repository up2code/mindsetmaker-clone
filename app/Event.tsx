import React from "react";
import Image from "next/image";
import { CalendarDays, ChevronRight } from "lucide-react";
import Link from "next/link";

const Event = () => {
  return (
    <section className="w-full max-w-[1080px] mx-auto my-8 flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">อีเวนต์ที่น่าสนใจจาก Mindsetmaker</h1>
      <div className="bg-[#ED9254] rounded-xl p-8 border-r-8 border-b-8 border-solid border-[#A34F16] m-4">
        <div>
          <Image
            src="/images/event_1.png"
            width={1070}
            height={260}
            alt="Event 1"
          />
        </div>
        <div className="bg-white p-4 leading-loose">
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">
              “Play day” Happy version of me พื้นที่สร้างสรรค์เรื่องใจ ๆ
              สำหรับการให้เวลากับตัวเราเอง
            </h2>
            <button
              className="border-black border-solid border-[1px] align-top rounded-md bg-white px-8 py-2
            transition-colors duration-300 hover:bg-black hover:text-white hidden md:block"
            >
              Register
            </button>
          </div>
          <span className="flex items-center gap-2 font-bold">
            <CalendarDays />
            <span className="text-xl">28 มกราคม 2567</span>
          </span>
          <p className="min-h-[84px] mt-4 text-[#6F7072]">
            ณ หอศิลปกรุงเทพมหานคร ชั้น 1 และลานด้านหน้า เวลา 10:00-20:00 น.{" "}
          </p>
          <Link
            href="/event"
            className="flex justify-start items-center gap-0 text-blue-600 hover:text-blue-800"
          >
            <span>รายละเอียด</span>
            <ChevronRight />
          </Link>

          <button
            className="border-black border-solid border-[1px] align-top rounded-md bg-white px-8 py-2
            transition-colors duration-300 hover:bg-black hover:text-white mt-4 block md:hidden"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Event;
