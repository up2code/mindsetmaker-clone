import React from "react";
import OursService from "./OursService";
import YoutubeService from "./YoutubeService";
import SelectResource from "./SelectResource";

const Page = () => {
  return (
    <main className="w-full max-w-5xl min-w-[360px] mx-auto pb-6">
      <SelectResource />
      <YoutubeService />
      <OursService />
    </main>
  );
};

export default Page;
