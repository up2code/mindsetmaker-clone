"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface GridItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    title: "อารมณ์ดี",
    description: "Good Mood",
    imageUrl: "/images/home-takeaction-1.png",
  },
  {
    id: 2,
    title: "จิตใจแข็งแรงดี",
    description: "Resilient Mind",
    imageUrl: "/images/home-takeaction-2.png",
  },
  {
    id: 3,
    title: "ความสัมพันธ์ดี",
    description: "Healthy Relationship",
    imageUrl: "/images/home-takeaction-3.jpg",
  },
  {
    id: 4,
    title: "รู้จักตัวเองดี",
    description: "Know Yourself Better",
    imageUrl: "/images/home-takeaction-4.jpg",
  },
  {
    id: 5,
    title: "สำเร็จดี",
    description: "Successful",
    imageUrl: "/images/home-takeaction-5.jpg",
  },
  {
    id: 6,
    title: "หลับดี",
    description: "Better Sleep",
    imageUrl: "/images/home-takeaction-6.jpg",
  },
];

export default function ExpandingGrid() {
  const [activeId, setActiveId] = useState(1);

  return (
    <ul className="flex w-full h-96 space-x-2 lg:space-x-4 px-8 py-8 rounded-b-2xl">
      {gridItems.map((item) => (
        <li
          key={item.id}
          className={`relative hover:cursor-pointer transition-all duration-500 ease-in-out rounded-b-2xl ${
            activeId === item.id ? "w-2/6 rounded-2xl" : "w-1/6"
          }`}
          onMouseEnter={() => setActiveId(item.id)}
        >
          <div className={clsx("relative w-full h-full rounded-b-2xl")}>
            <Image
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.title}
              fill
              className={clsx("object-cover rounded-2xl")}
            />
            <div
              className={`absolute rounded-b-2xl inset-0 bottom-0 top-3/4 bg-gradient-to-t from-black/55 to-transparent bg-opacity-50 transition-opacity duration-500 ${
                activeId === item.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 text-white text-center transition-all duration-500 ${
                  activeId === item.id ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-xl font-bold">{item.description}</p>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "absolute bottom-0 py-4 text-center text-white w-full bg-gradient-to-t from-black/75 to-transparent rounded-b-2xl",
              activeId === item.id ? "hidden" : "hidden"
            )}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
