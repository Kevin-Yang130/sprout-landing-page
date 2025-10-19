import React from "react";
import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section id="get_app" className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app sm:w-[76%] sm:rounded-4xl sm:mt-4">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-5">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Coming Soon</h2>
          <p className="regular-16 text-gray-10">
            Available on IOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Image
            src="/get_app_img.png"
            alt="phones"
            width={1100}
            height={1740}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
