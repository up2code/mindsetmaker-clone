import React from "react";
import Image from "next/image";

const testimonialList = [
  {
    image: "/images/testimonial01.jpg",
    name: "มิ้นท์",
    role: "นักเขียนฟรีแลนซ์",
    text: '"เกิดประโยชน์เพราะหากให้เรานั่งทบทวนตัวเองหรือเขียนไดอารี่เฉยๆ เราคงไม่ได้สำรวจตนเองมากมายเท่าไหร่ แต่การมีข้อคำถามที่ช่วยไกด์ก็พาเราให้ไปรู้จักกับตนเองได้มากขึ้น เร้าให้เราได้มองถึงประสบการณ์ที่ผ่านมาหรือกำลังเผชิญอยู่ ด้วยทิศทางที่เป็นบวกมากขึ้น - ตัวเรา 9 ชีวิต"',
  },
  {
    image: "/images/testimonial02.jpg",
    name: "แองจี้",
    role: "นักศึกษา",
  },
  {
    image: "/images/testimonial03.jpg",
    name: "ดิว",
    role: "นักศึกษา",
  },
  {
    image: "/images/testimonial04.jpg",
    name: "ต้า",
    role: "พนักงานเอกชน",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full max-w-[1080px] min-w-[360px] min-h-[600px] mx-auto my-4 relative flex flex-col items-center gap-8 justify-center py-8">
      <h1 className="font-bold text-3xl">Praise for Mindset Maker</h1>
      <div className="flex justify-around gap-8 mb-20">
        <Image
          src="/images/preview_1.jpg"
          width={360}
          height={360}
          alt="Preview 1"
        />
        <Image
          src="/images/preview_2.jpg"
          width={360}
          height={360}
          alt="Preview 2"
        />
        <Image
          src="/images/preview_3.jpg"
          width={360}
          height={360}
          alt="Preview 3"
        />
      </div>
      <div>
        <ul className="flex gap-4">
          {testimonialList.map((item) => (
            <li
              key={item.name}
              className="relative hover:group bg-[#1B3F7F] w-[220px] h-auto max-h-[500px] flex flex-col items-center rounded-xl
              hover:bg-[#3367DB] hover:border-r-8 hover:border-solid hover:border-white hover:w-[300px]
              transition-all duration-300 text-black"
            >
              <Image
                className="rounded-full mt-4"
                src={item.image}
                width={96}
                height={96}
                alt="Testimonial avatar"
              />
              <div className="relative">
                <div className="flex flex-col m-4 p-4 items-center rounded-xl">
                  <span className="text-[#6F7072] hidden group-hover:block leading-8 text-sm">
                    {item.text}
                  </span>
                  <p className="text-white">{item.name}</p>
                  <p className="text-white">{item.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
