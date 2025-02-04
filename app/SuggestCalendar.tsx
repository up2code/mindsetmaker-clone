import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const SuggestCalendar = () => {
  return (
    <section className="w-full max-w-[1080px] min-w-[360px] mx-auto my-8">
      <div className="border-solid border-0 border-black rounded-xl shadow-lg shadow-gray-400">
        <div className="bg-red-800 text-white flex justify-center rounded-t-xl py-4">
          <h1 className="text-3xl font-bold">Suggestion Calendar</h1>
        </div>
        <div className="bg-white px-12 py-8 rounded-b-xl">
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold text-2xl flex-1">
              Interesting activity
            </p>
            <div>
              <Link
                href="#"
                className="text-blue-500 hover:text-blue-600 gap-2 flex justify-center items-center"
              >
                <ChevronLeft />
                <ChevronRight />
              </Link>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <div className="flex flex-col gap-4 items-start">
              <h1 className="text-2xl font-bold">
                สานสัมพันธ์ให้ใจเราใกล้กันมากขึ้น
              </h1>
              <p className="text-[#6F7072] max-w-[460px]">
                กิจกรรมเดือนกุมภา มากับ 5 กิจกรรมที่จะทำให้คุณสนิทกันมากขึ้น
                ไม่ว่าจะเพื่อน คนรัก ครอบครัว มาสนิทกันมากขึ้นกัน!
              </p>
              <button
                className="px-8 py-2 bg-white border-solid border-[1px] border-black rounded-md
          transition-colors duration-300 hover:bg-black hover:text-white"
              >
                อ่านเพิ่มเติม
              </button>
            </div>
            <div>
              <Image
                src="/images/calendar_event_1.png"
                width={240}
                height={240}
                alt="Event 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestCalendar;
