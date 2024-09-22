import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { RiRoadMapLine } from "react-icons/ri";
import { FaCircleNodes } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import { FaDiamond } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import {
  IntroductionData,
  FundamentalsData,
  Function,
  Object,
  DataType,
} from "../data/Chapter1Data";
export default function Learn() {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 space-y-16  dark:text-zinc-400 pb-10">
      <LearnJs />
    </div>
  );
}

const LearnJs = () => {
  return (
    <>
      <Header />
      <div className="space-y-4">
        <Content />
        <Chapters />
      </div>
    </>
  );
};
const Header = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex justify-between gap-4 items-start">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">{"#JavaScript | #Learn"}</h3>
        <h1 className="text-4xl font-semibold text-zinc-700 dark:text-zinc-50">
          Learn the Modern JavaScript
        </h1>
        <p>
          From the basics to advanced topics with simple, but detailed
          explanations.
        </p>

        {/* SEARCH FOR LESSONS */}
        <div className="mt-10 flex items-center gap-1">
          <input
            type="text"
            className="w-[300px] h-10 bg-zinc-100 border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 px-2 text-sm outline-none hover:border-zinc-300 dark:hover:border-zinc-500"
            placeholder="Search for lessons"
          />
          <button className="bg-yellow-500 text-black h-10 px-4 text-sm font-semibold">
            Search
          </button>
        </div>
      </div>

      <div className="flex">
        <button className="py-2 px-3 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold rounded">
          View Progress
        </button>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h1 className="text-xl text-zinc-700 dark:text-zinc-50">Roadmaps</h1>
          <RiRoadMapLine size={20} />
        </div>

        <div className="w-full p-5 text-sm bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 space-y-4">
          <h1 className="text-lg font-medium dark:text-zinc-100">
            The JavaScript curriculum is structured into two main parts:
          </h1>

          <ul className="mt-8 flex flex-col gap-2">
            <li className="list-decimal list-inside">
              <span className="text-black dark:text-yellow-600 underline">
                Core JavaScript
              </span>
              : Covers the fundamentals of JavaScript as a programming language.
            </li>
            <li className="list-decimal list-inside">
              <span className="text-black dark:text-emerald-600 underline">
                Browser JavaScript
              </span>
              : Focuses on working with JavaScript in web browsers.
            </li>
          </ul>

          <p className="text-zinc-700 dark:text-zinc-300">
            This structure provides a comprehensive approach to learning
            JavaScript, starting with its core concepts and progressing to its
            practical application in web development. The supplementary modules
            allow for further specialization in areas of interest.
          </p>
        </div>
      </div>
    </div>
  );
};

const Chapters = () => {
  const chapters = [
    {
      name: "Chapter 1",
      description: "The JavaScript Language",
      icon: FaNodeJs,
    },
    {
      name: "Chapter 2",
      description: "Browser: Document, Events, Interfaces",
      icon: RiJavascriptLine,
    },
  ];
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h1 className="text-xl text-zinc-700 dark:text-zinc-50">Chapters</h1>

      <div className="w-full mt-5 grid grid-cols-2 gap-2">
        {chapters.map((item, idx) => (
          <div
            key={idx}
            className="w-full flex  justify-start gap-6 p-5 border border-zinc-200 dark:border-zinc-700 cursor-pointer relative overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-600 transition duration-700 ease-in-out group"
          >
            <item.icon
              size={100}
              className="absolute -right-2 -bottom-2 -rotate-[30deg] text-zinc-200 dark:text-zinc-800 group:hover:text-zinc-300 dark:group-hover:text-zinc-700 duration-700 ease-in-out"
            />
            <div className="h-full">
              <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-300">
                <FaCircleNodes size={16} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl text-zinc-700 dark:text-zinc-200 font-semibold">
                {item.name}
              </h1>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Chapter1 />
    </div>
  );
};

const Chapter1 = () => {
  return (
    <div className="mt-8 flex flex-col space-y-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="w-[400px] border-l-4 border-zinc-400 bg-zinc-100 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900 p-3 mb-8 ">
            <h1 className="text-lg font-bold text-zinc-700 dark:text-zinc-100">
              Chapter 1
            </h1>
          </div>

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
      <Functions />
      <Objects />
      <DataTypes />
    </div>
  );
};

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
            preventScrollReset={false}
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16  border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <IoLogoNodejs
              size={50}
              className="absolute -bottom-3 -right-3 dark:text-zinc-700 text-zinc-200 group:hover:text-zinc-300 dark:group-hover:text-zinc-500 duration-300 ease-in-out"
            />
            <div className="w-full flex justify-between">
              <h1 className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 duration underline-offset-2 dark:group:hover:text-yellow-200 z-10 font-semibold">
                {item.name}
              </h1>
              <GoArrowRight className=" text-zinc-400 group:hover:text-zinc-300 dark:group-hover:text-zinc-200" />
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
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <IoLogoNodejs
              size={50}
              className="absolute -bottom-3 -right-3 dark:text-zinc-700 text-zinc-200 group:hover:text-zinc-300 dark:group-hover:text-zinc-500 duration-300 ease-in-out"
            />

            <div className="w-full flex justify-between">
              <h1 className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 duration underline-offset-2 dark:group:hover:text-yellow-200 z-10 font-semibold">
                {item.name}
              </h1>
              <GoArrowRight className=" text-zinc-400 group:hover:text-zinc-300 dark:group-hover:text-zinc-200" />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Functions = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FaDiamond className="text-indigo-600 text-sm animate-pulse" />
        <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
          Functions
        </h1>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Function.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <IoLogoNodejs
              size={50}
              className="absolute -bottom-3 -right-3 dark:text-zinc-700 text-zinc-200 group:hover:text-zinc-300 dark:group-hover:text-zinc-500 duration-300 ease-in-out"
            />

            <div className="w-full flex justify-between">
              <h1 className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 duration underline-offset-2 dark:group:hover:text-yellow-200 z-10 font-semibold">
                {item.name}
              </h1>
              <GoArrowRight className=" text-zinc-400 group:hover:text-zinc-300 dark:group-hover:text-zinc-200" />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Objects = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FaDiamond className="text-orange-600 text-sm animate-pulse" />
        <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
          JavaScript Objects
        </h1>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Object.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <IoLogoNodejs
              size={50}
              className="absolute -bottom-3 -right-3 dark:text-zinc-700 text-zinc-200 group:hover:text-zinc-300 dark:group-hover:text-zinc-500 duration-300 ease-in-out"
            />

            <div className="w-full flex justify-between">
              <h1 className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 duration underline-offset-2 dark:group:hover:text-yellow-200 z-10 font-semibold">
                {item.name}
              </h1>
              <GoArrowRight className=" text-zinc-400 group:hover:text-zinc-300 dark:group-hover:text-zinc-200" />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const DataTypes = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FaDiamond className="text-purple-600 text-sm animate-pulse" />
        <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
          JavaScript Data Types
        </h1>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {DataType.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <IoLogoNodejs
              size={50}
              className="absolute -bottom-3 -right-3 dark:text-zinc-700 text-zinc-200 group:hover:text-zinc-300 dark:group-hover:text-zinc-500 duration-300 ease-in-out"
            />

            <div className="w-full flex justify-between">
              <h1 className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 duration underline-offset-2 dark:group:hover:text-yellow-200 z-10 font-semibold">
                {item.name}
              </h1>
              <GoArrowRight className=" text-zinc-400 group:hover:text-zinc-300 dark:group-hover:text-zinc-200" />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
