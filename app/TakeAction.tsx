import React from "react";
import Image from "next/image";
// import TakeAction1 from "@/public/images/home-takeaction-1.png";
// import TakeAction2 from "@/public/images/home-takeaction-2.png";
// import TakeAction3 from "@/public/images/home-takeaction-3.jpg";
// import TakeAction4 from "@/public/images/home-takeaction-4.jpg";
// import TakeAction5 from "@/public/images/home-takeaction-5.jpg";
// import TakeAction6 from "@/public/images/home-takeaction-6.jpg";
import TakeActionPic from "@/public/images/take_action_desktop.png";
import ExpandingGrid from "./(components)/ExpandingGrid";

// const actions = [
//   {
//     image: TakeAction1,
//     name_th: "อารมณ์ดี",
//     name_en: "Good Mood",
//   },
//   {
//     image: TakeAction2,
//     name_th: "จิตใจแข็งแรงดี",
//     name_en: "Resilient Mind",
//   },
//   {
//     image: TakeAction3,
//     name_th: "ความสัมพันธ์ดี",
//     name_en: "Healthy Relationship",
//   },
//   {
//     image: TakeAction4,
//     name_th: "รู้จักตัวเองดี",
//     name_en: "Know Yourself Better",
//   },
//   {
//     image: TakeAction5,
//     name_th: "สำเร็จดี",
//     name_en: "Successful",
//   },
//   {
//     image: TakeAction6,
//     name_th: "หลับดี",
//     name_en: "Better Sleep",
//   },
// ];

const TakeAction = () => {
  return (
    <section className="bg-[#DBF0FF] w-full max-w-[1080px] min-h-[320px] rounded-2xl mx-auto mb-16 mt-44 flex relative">
      <div className="absolute mx-auto -top-[94px] left-1/2 transform -translate-x-1/2 w-64">
        <Image src={TakeActionPic} alt="Take action" />
      </div>
      <ExpandingGrid />
      {/* <ul className="w-full grid grid-cols-7 gap-4 p-4">
        {actions.map((action, i) => (
          <li
            key={action.name_en}
            className={clsx(
              "hover:cursor-pointer relative",
              i == 0 ? "col-span-2 bg-primary rounded-2xl" : ""
            )}
          >
            {i == 0 ? (
              <>
                <div className="flex justify-center mt-4">
                  <Image
                    className={clsx(
                      "size-56 object-cover rounded-2xl shadow-md"
                    )}
                    src={action.image}
                    alt={action.name_en}
                  />
                </div>
                <h2
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-bold text-white text-3xl w-full mb-4 text-wrap
                animate-fade-in"
                >
                  <span>{action.name_th}</span>
                  <br />
                  <span>{action.name_en}</span>
                </h2>
              </>
            ) : (
              <>
                <div className="relative">
                  <Image
                    className={clsx(
                      "h-[380px] object-cover rounded-2xl shadow-md"
                    )}
                    src={action.image}
                    alt={action.name_en}
                  />
                  <div className="abosulute z-10 bg-black/25 size-full top-0 z-10"></div>
                </div>
                <h2 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-bold text-white text-3xl w-full mb-4 text-wrap">
                  {action.name_th}
                </h2>
              </>
            )}
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default TakeAction;
