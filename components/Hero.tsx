import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-28 xl:flex-row border-2 border-red-500">
      <div className="hero-map" />

      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Think less, save more.</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Take control of your finances with ease. Our app helps you track
          spending, set goals, and save effortlessly all in one place. Simple,
          smart, and designed to help you make every dollar count.
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
