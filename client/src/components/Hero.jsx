import React from "react";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <div
      className="flex h-screen flex-col items-start justify-center bg-center bg-cover bg-no-repeat px-6 text-white md:px-16 lg:px-24 xl:px-32"
      style={{ backgroundImage: `url(${assets.heroImage})` }}
    >
      <p className="mt-20 rounded-full bg-[#49B9FF]/50 px-3.5 py-1">
        The Ultimate Hotel Experience{" "}
      </p>
      <h1 className="font-playfair mt-4 max-w-xl text-2xl font-bold md:text-[56px]">
        Discover Your Perfect Gateway Destination
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Unparalled luxury and comfort await at the world's most exclusive hotels
        and resorts. Start your journey today.
      </p>
    </div>
  );
};

export default Hero;
