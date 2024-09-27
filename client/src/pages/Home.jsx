import React from "react";
import { Link } from "react-router-dom";

import { IoIosTrendingUp } from "react-icons/io";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 relative overflow-hidden">
      <Hero />
      {/* 
      <img
        src="https://moniquemidio.github.io/clone_interface_github/assets/mundo.png"
        alt="globe"
        className="absolute size-[700px] rounded-full -bottom-[320px] left-1/2 transform -translate-x-1/2"
      /> */}
    </div>
  );
}

const Hero = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto flex flex-col justify-center items-center gap-6 text-center p-5 md:p-8">
      <h1 className="text-[42px] dark:bg-gradient-to-br dark:from-white dark:to-zinc-600 dark:bg-clip-text dark:text-transparent text-zinc-700 leading-snug font-semibold">
        Learn, Build, and Excel in{" "}
        <span className="bg-gradient-to-br from-yellow-400 to-orange-600 bg-clip-text text-transparent">
          JavaScript
        </span>{" "}
        Programming
      </h1>
      <p className="text-md">
        Interactive lessons designed to sharpen your JavaScript skills 🚀
      </p>
      <Link
        to="/learn-js"
        className="flex items-center gap-2 text-md  mt-14 py-3 px-6 rounded-full bg-gradient-to-br from-blue-600 to-sky-700 border-2 border-blue-500 text-white font-bold z-10"
      >
        Start Reading
        <IoIosTrendingUp size={20} />
      </Link>
    </div>
  );
};
