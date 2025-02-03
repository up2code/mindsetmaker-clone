import React from "react";
import Image from "next/image";
import { Flag } from "lucide-react";

const ResourceCard = () => {
  return (
    <article
      className="flex flex-col w-[250px] border-[1px] rounded-md border-solid hover:cursor-pointer
    transition delay-75 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105"
    >
      <Image
        src="/images/resource_1.png"
        width={250}
        height={250}
        alt="Resource 1"
      />
      <div className="px-4 pt-4 pb-4">
        <h3 className="flex mb-6 text-[#3367DB] font-bold">
          <span>
            <Flag />
          </span>
          &nbsp; Good Mood อารมณ์ดี
        </h3>
        <p className="font-bold text-[#546172]">
          ขยายวิธีการมองโลก ด้วยวิดิโอที่ตื่นตะลึง Awe video{" "}
        </p>
      </div>
    </article>
  );
};

export default ResourceCard;
