import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

import { IoIosTrendingUp } from "react-icons/io";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 relative overflow-hidden">
      <Hero />

      <div className="absolute size-[550px] bg-gradient-to-b from-yellow-500 via-yellow-700 to-orange-600 shadow-2xl shadow-yellow-800 rounded-full -bottom-[280px] left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto flex flex-col justify-center items-center gap-6 text-center p-5 md:p-8">
      <h1 className="text-4xl text-zinc-700 dark:text-zinc-50 leading-snug font-semibold">
        Learn, Build, and Excel in JavaScript Programming
      </h1>
      <p className="text-md">
        Interactive lessons designed to sharpen your JavaScript skills 🚀
      </p>
      <Link
        to="/learn-js"
        className="flex items-center gap-2 text-md  mt-14 text-yellow-600 font-bold"
      >
        Start Reading
        <IoIosTrendingUp size={20} />
      </Link>
    </div>
  );
};
