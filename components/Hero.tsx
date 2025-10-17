import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-8 py-10 pb-32 lg:py-28 xl:flex-row xl:gap-0 ">
      {/* LEFT */}

      <div className="relative z-20 flex flex-1 gap-2 flex-col xl:w-1/2  justify-center items-center">
        <h1 className="bold-52 lg:bold-88">Think less, save more.</h1>
        <p className="regular-16 py-6 text-gray-30 xl:max-w-[520px]">
          Take control of your finances with ease. Our app helps you track
          spending, set goals, and save effortlessly all in one place. Simple,
          smart, and designed to help you make every dollar count.
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row justify-center">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* RIGHT*/}
      <div className="relative z-10 flex-1 xl:w-1/2 w-full h-[260px] md:h-[360px] lg:h-[700px] rounded-5xl overflow-hidden  xl:-translate-x-25 ">
        <Image
          src="/t6.png"
          alt="Sprout app preview"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
