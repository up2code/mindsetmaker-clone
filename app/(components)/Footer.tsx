import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-[220px] w-full bg-[#08449B] mt-4 text-white">
      <div className="m-auto max-w-[1080px] h-full flex flex-wrap justify-evenly items-start relative">
        <div>
          <ul className="mt-14 leading-loose">
            <li>
              <Link
                href="#"
                className="opacity-100 transition-opacity duration-300 hover:opacity-70"
              >
                About use
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-100 transition-opacity duration-300 hover:opacity-70"
              >
                Take action
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-100 transition-opacity duration-300 hover:opacity-70"
              >
                Resource & services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-100 transition-opacity duration-300 hover:opacity-70"
              >
                Positive Psychology
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 justify-end mt-14 leading-loose">
          <p>Social</p>
          <ul className="flex gap-4">
            <li className="p-[8px] bg-white rounded-full hover:cursor-pointer">
              <Image
                src="/images/logo-facebook.svg"
                width={24}
                height={24}
                alt="Facebook"
              />
            </li>
            <li className="p-[8px] bg-white rounded-full hover:cursor-pointer">
              <Image
                src="/images/logo-youtube.svg"
                width={24}
                height={24}
                alt="Youtube"
              />
            </li>
            <li className="p-[8px] bg-white rounded-full hover:cursor-pointer">
              <Image
                src="/images/logo-instagram.svg"
                width={24}
                height={24}
                alt="Instagram"
              />
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/images/footer.png"
            width={460}
            height={460}
            alt="Footer image"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
