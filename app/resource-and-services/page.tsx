import React from "react";
import OursService from "./OursService";
import YoutubeService from "./YoutubeService";
import SelectResource from "./SelectResource";

const Page = () => {
  return (
    <main className="max-w-[1070px] m-auto pb-6">
      <SelectResource />
      <YoutubeService />
      <OursService />
    </main>
  );
};

export default Page;
