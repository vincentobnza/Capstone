import React from "react";
import { FaDiamond } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { IoLogoNodejs } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { IntroductionData, FundamentalsData } from "../data/Chapter1Data";

export default function Chapter1() {
  return (
    <div className="mt-8 flex flex-col space-y-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold text-zinc-700 dark:text-zinc-100">
            Chapter 1
          </h1>
          <h3 className="text-md text-yellow-600 font-semibold">
            The JavaScript Language
          </h3>
        </div>
        <p className="text-sm">
          Here we learn JavaScript, starting from scratch and go on to advanced
          concepts like OOP.
        </p>
      </div>

      <Introduction />
      <Fundamentals />
    </div>
  );
}

const Introduction = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FaDiamond className="text-yellow-600 text-sm animate-pulse" />
        <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
          Introduction
        </h1>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {IntroductionData.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16  border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800"
          >
            <IoLogoNodejs
              size={50}
              className="absolute -bottom-3 -right-3 dark:text-zinc-700 text-zinc-200"
            />

            <div className="w-full flex justify-between">
              <h1 className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 duration underline-offset-2 dark:group:hover:text-yellow-200 z-10 font-semibold">
                {item.name}
              </h1>
              <GoArrowRight className=" text-zinc-400 group:hover hover:rotate-12" />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Fundamentals = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FaDiamond className="text-green-600 text-sm animate-pulse" />
        <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
          Fundamentals of JavaScript
        </h1>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {FundamentalsData.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800"
          >
            <IoLogoNodejs
              size={50}
              className="absolute -bottom-3 -right-3 dark:text-zinc-700 text-zinc-200"
            />

            <div className="w-full flex justify-between">
              <h1 className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 duration underline-offset-2 dark:group:hover:text-yellow-200 z-10 font-semibold">
                {item.name}
              </h1>
              <GoArrowRight className=" text-zinc-400 group:hover hover:rotate-12" />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
