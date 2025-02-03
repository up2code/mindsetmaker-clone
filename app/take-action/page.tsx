import React from "react";
import Image from "next/image";

const actions = [
  {
    image: "/images/better_sleep.png",
    name: "Better Sleep",
    name_th: "หลับดี",
  },
  {
    image: "/images/know_yourself_better.png",
    name: "Know Yourself Better",
    name_th: "รู้จักตัวเองดี",
  },
  {
    image: "/images/successful.png",
    name: "Successful",
    name_th: "สำเร็จดี",
  },
  {
    image: "/images/healthy_relationship.png",
    name: "Healthy Relationship",
    name_th: "ความสัมพันธ์ดี",
  },
  {
    image: "/images/resilient_mind.png",
    name: "Resilient Mind",
    name_th: "จิตใจแข็งแรงดี",
  },
  {
    image: "/images/good_mood.png",
    name: "Good Mood",
    name_th: "อารมณ์ดี",
  },
];

const Page = () => {
  return (
    <section className="h-full flex-col">
      <div className="relative min-h-[500px] flex flex-col justify-top items-center">
        <Image
          className="top-0 -z-10 left-0 right-0 hidden md:block min-h-[500px] object-contain object-top"
          src="/images/banner-takeaction.png"
          width={2000}
          height={1000}
          alt="Banner take action"
        />
        <Image
          className="top-0 -z-10 left-0 right-0 block md:hidden"
          src="/images/banner-takeaction-m.png"
          width={2000}
          height={1000}
          alt="Banner take action"
        />
        <div className="absolute top-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-medium text-[#3367DB] leading-loose">
            เลือกหมวดหมู่ที่คุณอยากพัฒนา
          </h1>
          <h2>พร้อมทำแบบประเมินและจัดกิจกรรมที่เหมาะกับเรา!</h2>
        </div>
      </div>
      <ul className="flex-1 px-32 flex gap-8 flex-wrap justify-center pb-8">
        {actions.map((action) => (
          <li
            key={action.name}
            className="flex flex-col justify-center items-center border-[5px] border-[#2F8EED]
          rounded-xl bg-white max-w-[250px] max-h-[240px] p-4 hover:cursor-pointer
          transition delay-75 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <Image
              src={action.image}
              width={240}
              height={240}
              alt={action.name}
            />
            <p>{action.name}</p>
            <p>{action.name_th}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Page;
