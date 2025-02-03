import React from "react";
import Image from "next/image";

const YoutubeService = () => {
  return (
    <section className="relative flex justify-center items-center pb-6">
      <Image
        className="flex-1"
        src="/images/youtube_service.png"
        width={300}
        height={300}
        alt="Youtube service"
      />
      <div className="flex-1 bg-blue-100 p-[32px] rounded-sm">
        <p className="text-2xl font-bold">แวะชมสื่อจิตวิทยาเชิงบวก</p>
        <p className="mb-4 text-2xl font-bold">Youtube : The Mindset Maker</p>
        <p>
          มาร่วมเรียนรู้และเข้าใจจิตวิทยาเชิงบวกแบบง่าย ๆ ผ่านสื่อละครสั้น,
          Animation และอื่น ๆ อีกมากมายได้เลย !
          อย่ารอช้าแวะมาเติมทักษะทางใจไปด้วยกัน
        </p>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded-md mt-4
        transition-opacity duration-150 ease-in-out opacity-100 hover:opacity-80"
        >
          Youtube
        </button>
      </div>
    </section>
  );
};

export default YoutubeService;
