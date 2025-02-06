import React from "react";
import Image from "next/image";

const services = [
  {
    name: "โรงเรียน",
    image: "/images/our_service_1.png",
  },
  {
    name: "ครอบครัว",
    image: "/images/our_service_2.png",
  },
  {
    name: "ที่ทำงาน",
    image: "/images/our_service_3.png",
  },
  {
    name: "ผู้เชี่ยวชาญจิตสิทยาเชิงบวก",
    image: "/images/our_service_4.png",
  },
];

const OursService = () => {
  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">บริการของเรา</h2>
      <ul className="flex gap-4 justify-between flex-wrap">
        {services.map((service) => (
          <li
            key={service.name}
            className="opacity-100 hover:opacity-75 hover:cursor-pointer
            transition-opacity duration-150"
          >
            <Image
              src={service.image}
              width={320}
              height={200}
              alt={service.name}
            />
            <p className="text-center mt-2">{service.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OursService;
