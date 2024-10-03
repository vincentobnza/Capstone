import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { RiRoadMapLine } from "react-icons/ri";
import { FaDiamond } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import {
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson7,
  Lesson8,
} from "../data/Chapter1Data";
import { Search } from "lucide-react";
import { MdKeyboardCommandKey } from "react-icons/md";
import SearchModal from "@/components/SearchModal";
import { useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import { RiJavascriptLine } from "react-icons/ri";
export default function Learn() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full bg-white dark:bg-zinc-900 space-y-16  dark:text-zinc-400 pb-24"
    >
      <LearnJs />
    </motion.div>
  );
}

const LearnJs = () => {
  return (
    <>
      <Header />
      <div className="space-y-8">
        <Content />
        <Lessons />
      </div>
    </>
  );
};
const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // CTRL K TO OPEN MODAL

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
        <div className="mt-8 flex items-center gap-1">
          <div
            className="relative w-full max-w-md cursor-pointer"
            onClick={onOpen}
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="size-4 text-gray-400" />
            </div>
            <div className="w-full bg-zinc-50 dark:bg-zinc-800 pl-10 pr-4 py-3 bg-transparent rounded-md outline-none flex justify-start items-center border border-zinc-200 dark:border-zinc-700 hover:border-zinxc-300 dark:hover:border-zinc-600">
              <p className="text-sm">Quick Search for Lessons</p>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none gap-2">
              <h1 className="text-xs font-semibold">Ctrl K</h1>
              <MdKeyboardCommandKey
                size={17}
                className="text-zinc-400 dark:text-zinc-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* search lessons */}
      <SearchModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />

      <Link to="/leaderboard" className="flex">
        <button className="py-2 px-3 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold rounded">
          View Progress
        </button>
      </Link>
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
            The JavaScript curriculum is structured in this:
          </h1>

          <ul className="mt-8 flex flex-col gap-2">
            <li className="list-decimal list-inside">
              <span className="text-black dark:text-yellow-600 underline">
                JavaScript
              </span>
              : Covers the fundamentals of JavaScript as a programming language.
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

const Lessons = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex flex-col space-y-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-md text-yellow-600 font-semibold">
            The JavaScript Language
          </h3>
        </div>
        <p className="text-sm">
          Here we learn JavaScript, starting from scratch and go on to advanced
          concepts like OOP.
        </p>
      </div>

      <div className="space-y-6">
        <Lesson1Data />
        <Lesson2Data />
        <Lesson3Data />
        <Lesson4Data />
        <Lesson5Data />
        <Lesson6Data />
        <Lesson7Data />
        <Lesson8Data />
      </div>
    </div>
  );
};

const Lesson1Data = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <FaDiamond className="text-yellow-600 text-sm animate-pulse" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Lesson 1</p>
          <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            Introduction to JavaScript
          </h1>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Lesson1.map((item, idx) => (
          <Link
            preventScrollReset={false}
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16  border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <RiJavascriptLine
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

const Lesson2Data = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <FaDiamond className="text-green-600 text-sm animate-pulse" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Lesson 2</p>
          <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            JavaScript Basics
          </h1>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Lesson2.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <RiJavascriptLine
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

const Lesson3Data = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <FaDiamond className="text-indigo-600 text-sm animate-pulse" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Lesson 3</p>
          <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            Control Structure
          </h1>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Lesson3.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <RiJavascriptLine
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

const Lesson4Data = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <FaDiamond className="text-orange-600 text-sm animate-pulse" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Lesson 4</p>
          <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            Functions in JavaScript
          </h1>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Lesson4.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <RiJavascriptLine
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

const Lesson5Data = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <FaDiamond className="text-sky-600 text-sm animate-pulse" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Lesson 5</p>
          <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            JavaScript Objects and Arrays
          </h1>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Lesson5.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <RiJavascriptLine
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
const Lesson6Data = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <FaDiamond className="text-purple-600 text-sm animate-pulse" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Lesson 6</p>
          <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            DOM Manipulation
          </h1>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Lesson6.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <RiJavascriptLine
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

const Lesson7Data = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <FaDiamond className="text-zinc-600 text-sm animate-pulse" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Lesson 7</p>
          <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            JavaScript Events
          </h1>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Lesson7.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <RiJavascriptLine
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

const Lesson8Data = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <FaDiamond className="text-cyan-600 text-sm animate-pulse" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Lesson 8</p>
          <h1 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            Error Handling
          </h1>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {Lesson8.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-200 p-3 h-16 border dark:border-zinc-700 border-zinc-200 relative overflow-hidden group bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 transition duration-300 ease-in-out group"
          >
            <RiJavascriptLine
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
