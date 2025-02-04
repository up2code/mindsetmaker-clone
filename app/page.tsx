import Link from "next/link";
import Hero from "./Hero";
import TakeAction from "./TakeAction";
import SubscribeBox from "./SubscribeBox";
import Testimonial from "./Testimonial";
import Event from "./Event";
import Positive from "./Positive";
import SuggestCalendar from "./SuggestCalendar";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        className="flex justify-between max-w-[1080px] m-auto py-8 
      border-solid border-gray-200 border-b-2"
      >
        <h2 className="text-2xl font-bold">Let's do it!</h2>
        <Link href="/take-action">See all</Link>
      </div>
      <TakeAction />
      <SuggestCalendar />
      <Positive />
      <Event />
      <Testimonial />
      <SubscribeBox />
    </>
  );
}
