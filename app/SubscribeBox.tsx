import React from "react";

const SubscribeBox = () => {
  return (
    <section className="w-full max-w-[960px] min-w-[320px] m-auto">
      <div className="bg-blue-950 w-full text-white md:rounded-xl flex gap-4 p-6 md:flex-row flex-col items-center">
        <p className="font-bold text-2xl">รับข้อมูลจิตวิทยาเชิงบวก</p>
        <input
          className="min-h-[34px] flex-1 min-w-0 w-[360px] text-black px-2"
          type="email"
          aria-label="email"
        />
        <button className="bg-[#B53633] px-8 py-2 rounded-md">Subscribe</button>
      </div>
    </section>
  );
};

export default SubscribeBox;
