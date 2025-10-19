import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative w-full flex justify-between items-center">
        <div className="flex flex-1 lg:min-h-[900px] -ml-80">
          <Image
            src="/monthly2.png"
            alt="phone"
            width={680}
            height={1500}
            className="feature-phone md:-translate-x-20 xl:-translate-x-40"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%] justify-center gap-8">
          <div className="relative justify-center">
            <h2 className="bold-40 lg:bold-64 mb-100">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-xl p-20 lg:p-20 ">
        <Image src={icon} alt="map" width={80} height={80} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
