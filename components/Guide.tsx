import React from "react";
import Image from "next/image";
import LoopingVideo from "./LoopingVideo";

const Guide = () => {
  return (
    <section id="guide" className="flexCenter flex-col gap-10">
      <div className=" max-container padding-container w-full pb-24">
        <Image src="/root.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap gap-5 justify-between lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-width-390px">
            Turn Goals into Progress
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-520px">
            Sprout makes tracking what you spend simple. Open the app, add a
            purchase in seconds, and see a clean view of where your money goes.
            There are no complicated graphs, no acronyms, and no finance terms
            that get in the way. You get clear totals, gentle reminders, and
            straightforward guidance so you can notice patterns, set easy goals,
            and keep more of what you earn.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full gap-20">
        <div className="p-100 rounded-4xl">
          <Image src="/business-12.svg" alt="boat" width={300} height={300} />
        </div>
        <Image src="/money-42.svg" alt="boat" width={300} height={300} />
      </div>
    </section>
  );
};

export default Guide;
