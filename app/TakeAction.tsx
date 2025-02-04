import React from "react";
import Image from "next/image";

const actions = [
  {
    image: "/images/home-takeaction-1.png",
    name_th: "อารมณ์ดี",
    name_en: "Good Mood",
  },
  {
    image: "/images/home-takeaction-2.png",
    name_th: "จิตใจแข็งแรงดี",
    name_en: "Resilient Mind",
  },
  {
    image: "/images/home-takeaction-3.jpg",
    name_th: "ความสัมพันธ์ดี",
    name_en: "Healthy Relationship",
  },
  {
    image: "/images/home_takeaction_4.jpg",
    name_th: "รู้จักตัวเองดี",
    name_en: "Know Yourself Better",
  },
  {
    image: "/images/home_takeaction_5.jpg",
    name_th: "สำเร็จดี",
    name_en: "Successful",
  },
  {
    image: "/images/home_takeaction_6.jpg",
    name_th: "หลับดี",
    name_en: "Better Sleep",
  },
];

const TakeAction = () => {
  return (
    <section className="bg-[#DBF0FF] w-full max-w-[1080px] min-h-[320px] rounded-2xl mx-auto mb-16 mt-44 flex relative">
      <div className="absolute mx-auto -top-[94px] left-1/2 transform -translate-x-1/2">
        <Image
          className=""
          src="/images/take_action_desktop.png"
          width={250}
          height={250}
          alt="Take action"
        />
      </div>
      <ul className="w-full flex gap-4 justify-between px-12 py-4 ">
        {actions.map((action) => (
          <li
            key={action.name_en}
            className="flex-1 hover:cursor-pointer relative"
          >
            <Image
              className="h-[380px] object-cover rounded-2xl shadow-md"
              src={action.image}
              width={200}
              height={2000}
              alt={action.name_en}
            />
            <h2 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-bold text-white text-3xl w-full mb-4 text-wrap">
              {action.name_th}
            </h2>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TakeAction;
