import Link from "next/link";
import Hero from "./Hero";
import TakeAction from "./TakeAction";
import SubscribeBox from "./SubscribeBox";
import Testimonial from "./Testimonial";
import Event from "./Event";
import Positive from "./Positive";
import SuggestCalendar from "./SuggestCalendar";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <div
        className="flex justify-between max-w-[1080px] mx-auto py-8 
      border-solid border-gray-200 border-b-2 px-4"
      >
        <h2 className="text-2xl font-bold">Let&apos;s do it!</h2>
        <Link
          href="/take-action"
          className="text-primary flex items-center justify-center hover:text-blue-700"
        >
          <span>See all</span>
          <ChevronRight />
        </Link>
      </div>

      <TakeAction />
      <SuggestCalendar />
      <Positive />
      <Event />
      <Testimonial />
      <SubscribeBox />
    </main>
  );
}
