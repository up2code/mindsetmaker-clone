import React from "react";
import Image from "next/image";

const partners = [
  {
    image: "/images/partner1.png",
    name: "Makemoremove",
  },
  {
    image: "/images/partner2.svg",
    name: "Life Long Learning, CMU",
  },
  {
    image: "/images/partner3.svg",
    name: "TIMs",
  },
  {
    image: "/images/partner4.svg",
    name: "Life Education",
  },
  {
    image: "/images/partner5.svg",
    name: "Master Peace",
  },
  {
    image: "/images/partner6.svg",
    name: "Kiddee TV",
  },
];

const supporters = [
  {
    image: "/images/support1.png",
    name: "สสส.",
  },
  {
    image: "/images/support2.png",
    name: "depa",
  },
];

const Page = () => {
  return (
    <main>
      <section className="bg-[#F7F2EC] h-[576px] md:h-[380px] w-full">
        <div className="max-w-[1080px] min-w-[360px] w-full m-auto flex flex-col md:flex-row h-full items-center justify-around">
          <div className="text-center md:text-start">
            <h1 className="font-bold text-5xl text-blue-600 mb-8">
              Mindsetmaker
              <br />
              for happiness คือ?
            </h1>
            <p className="text-2xl">
              “Happy Life Happy Skills Solution”
              <br />
              พื้นที่แห่งการพัฒนาทักษะชีวิตเชิงบวกสำหรับทุกคน
            </p>
          </div>
          <div>
            <Image
              src="/images/aboutus-banner-top.png"
              width={280}
              height={280}
              alt="About us banner"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1080px] min-w-[360px] w-full m-auto">
        <ul className="flex flex-col md:flex-row mx-8 gap-4 my-8">
          <li className="shadow-xl p-8 flex flex-col justify-center items-center leading-loose rounded-x text-center">
            <Image
              src="/images/about-us_support.svg"
              width={120}
              height={120}
              alt="Supporting"
            />
            <h2 className="text-2xl font-bold mt-8">Supporting</h2>
            <p>ส่งเสริมการสร้างประสบการณ์ดีๆในทุกวัน</p>
          </li>
          <li className="shadow-xl p-8 flex flex-col justify-center items-center leading-loose rounded-xl text-center">
            <Image
              src="/images/about-us_sharing.svg"
              width={120}
              height={120}
              alt="Supporting"
            />
            <h2 className="text-2xl font-bold mt-8">Sharing</h2>
            <p>แชร์ชุดกิจกรรมเสริมสร้างความสุข</p>
          </li>
          <li className="shadow-xl p-8 flex flex-col justify-center items-center leading-loose rounded-xl text-center">
            <Image
              src="/images/spotting-us.svg"
              width={120}
              height={120}
              alt="Supporting"
            />
            <h2 className="text-2xl font-bold mt-8">Spotting</h2>
            <p>ชี้แนะการสร้างความสุขที่เหมาะกับคุณ</p>
          </li>
        </ul>
      </section>
      <section className="max-w-[1080px] min-w-[360px] w-full mx-auto my-24">
        <div className="flex px-12 flex-col md:flex-row">
          <div>
            <h1 className="font-bold text-5xl text-blue-600 mb-8">
              Why Mindsetmaker?
            </h1>
            <div className="leading-loose">
              <h2 className="text-[#1B3F7F] font-bold text-2xl mt-8">
                เข้าใจเรื่องจิตวิทยาเชิงบวก
              </h2>
              <p className="text-[#6F7072] text-lg">
                เรามีคลิปอธิบายเกี่ยวกับหลักการและแนวคิดของจิตวิทยาเชิงบวก
                เพื่อให้คุณเข้าใจถึงความสำคัญของการมองหาแง่บวกในชีวิตและการเสริมสร้างความสุขในทุกวัน
              </p>
            </div>
            <div className="leading-loose">
              <h2 className="text-[#1B3F7F] font-bold text-2xl mt-8">
                การพัฒนาตนเอง
              </h2>
              <p className="text-[#6F7072] text-lg">
                เรามีเครื่องมือและกิจกรรมที่ช่วยในการพัฒนาทักษะชีวิต
                และมีแรงบันดาลใจที่จะช่วยคุณก้าวข้ามอุปสรรคและเตรียมพร้อมสู่การเป็นตัวเองที่ดีขึ้น
              </p>
            </div>
          </div>
          <div className="w-400 h-400 mx-24 flex justify-center items-center">
            <Image
              className="object-contain"
              src="/images/why-mindsetmaker-1.png"
              width={540}
              height={540}
              alt="Yourself"
            />
          </div>
        </div>
        <br />
        <div className="flex mt-12 px-12 flex-col md:flex-row">
          <div className="w-400 h-400 mx-24 flex justify-center items-center">
            <Image
              src="/images/why-mindsetmaker-2.png"
              width={540}
              height={540}
              alt="Yourself"
            />
          </div>
          <div>
            <div className="leading-loose">
              <h2 className="text-[#1B3F7F] font-bold text-2xl mt-8">
                การพัฒนาสำหรับองค์กร หน่วยงาน และสถาบันการศึกษา
              </h2>
              <p className="text-[#6F7072] text-lg">
                เรามีชุดกิจกรรมพร้อมใช้ที่สามารถเข้าไปเสริมการทำงานในหน่วยงาน
                องค์กร และสถาบันการศึกษา
                ที่จะช่วยให้การสร้างสรรค์พื้นที่เชิงบวกในการเติบโตร่วมกันเป็นเรื่องง่ายขึ้น
              </p>
            </div>
            <div className="leading-loose">
              <h2 className="text-[#1B3F7F] font-bold text-2xl mt-8">
                ระบบสนับสนุน
              </h2>
              <p className="text-[#6F7072] text-lg">
                เรามี Line OA ที่สนับสนุนและส่งเสริมกัน
                ช่วยคุณในการหากิจกรรมพัฒนาและสร้างความสุขให้ตัวเองและคนรอบข้าง
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#E9F6FF]">
        <div className="max-w-[1024px] min-w-[360px] mx-auto my-12 flex flex-col md:flex-row justify-between px-8">
          <div className="m-24">
            <h1 className="text-5xl font-bold text-blue-600 text-center md:text-start">
              Mindsetmaker
              <span className="block mt-8">made you</span>
              <span className="block mt-8">more..</span>
            </h1>
          </div>
          <ul className="flex flex-col justify-center items-center md:items-start pb-24 md:pb-0 gap-12">
            <li className="flex items-center">
              <div className="mr-4">
                <Image
                  src="/images/icon-about1.png"
                  width={64}
                  height={64}
                  alt="Strenghtness"
                />
              </div>
              <div>
                <p className="text-2xl text-blue-600 font-bold">Strenghtness</p>
                <p>คุณจะมีจิตใจแข็งแรงพร้อมรับทุกสถานการณ์</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="mr-4">
                <Image
                  src="/images/icon-about2.png"
                  width={64}
                  height={64}
                  alt="Strenghtness"
                />
              </div>
              <div>
                <p className="text-2xl text-blue-600 font-bold">Awareness</p>
                <p>คุณจะมีจิตใจแข็งแรงพร้อมรับทุกสถานการณ์</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="mr-4">
                <Image
                  src="/images/icon-about3.png"
                  width={64}
                  height={64}
                  alt="Wellness"
                />
              </div>
              <div>
                <p className="text-2xl text-blue-600 font-bold">Wellness</p>
                <p>คุณจะมีจิตใจแข็งแรงพร้อมรับทุกสถานการณ์</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full max-w-[1280px] min-w-[360px] m-auto flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Our Partners</h1>
        <ul className="flex gap-4 flex-wrap justify-center mt-8">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={partner.image}
                width={120}
                height={120}
                alt={partner.name}
              />
              <p>{partner.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full max-w-[1280px] min-w-[360px] mx-auto my-12 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Our Supporters</h1>
        <ul className="flex gap-4 flex-wrap justify-center mt-8">
          {supporters.map((partner) => (
            <li
              key={partner.name}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={partner.image}
                width={120}
                height={120}
                alt={partner.name}
              />
              <p>{partner.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex justify-center">
        <p>
          ติดต่อ : 469/1 หมู่ที่ 9 ตำบลชมพู อำเภอเมืองลำปาง จ.ลำปาง 52100, LINE:
          @mindsetmaker หรือ Email: info@mindsetmaker.co
        </p>
      </section>
    </main>
  );
};

export default Page;
