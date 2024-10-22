import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/dark.png";
import HeroImage_Light from "../assets/light.png";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import MainPicture from "../assets/MainPicture.png";

import { IoIosTrendingUp } from "react-icons/io";
import { Zap } from "lucide-react";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

export default function Home() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full pb-10 space-y-4 overflow-hidden bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 md:space-y-16"
    >
      <Hero />

      <div className="mt-2 w-full mx-auto h-[350px] md:h-[550px] grid place-items-center">
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="w-full max-w-screen-lg [background:linear-gradient(45deg,#172033,theme(colors.green.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.800/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.green.300)_90%,_theme(colors.green.500)_94%,_theme(colors.green.600/.48))_border-box] border border-transparent animate-border"
        >
          <img
            src={theme === "dark" ? HeroImage : HeroImage_Light}
            alt="hero"
            className="object-cover transition ease-linear duration-900"
          />
        </motion.div>
      </div>

      <Main />

      <InfiniteMarquee />

      <Content />
    </motion.div>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg gap-6 p-4 mx-auto text-center md:p-8 lg:p-8">
      <h1 className="text-4xl md:text-[48px] dark:bg-gradient-to-br dark:from-white dark:to-zinc-600 dark:bg-clip-text dark:text-transparent text-zinc-700 leading-snug font-semibold">
        Learn, Build, and Excel in{" "}
        <span className="text-transparent bg-gradient-to-br from-yellow-400 to-orange-600 bg-clip-text">
          JavaScript
        </span>{" "}
        Programming
      </h1>
      <p className="text-xs md:text-[15px] lg:text-md">
        Interactive lessons designed to sharpen your JavaScript Skills
      </p>
      <Link
        to="/learn"
        className="z-10 flex items-center gap-2 px-4 py-2 mt-10 text-xs font-semibold text-white bg-green-800 border border-green-500 rounded-full md:px-6 md:py-3 md:text-sm animate-pulse"
      >
        Start Learning
        <IoIosTrendingUp size={20} />
      </Link>
      <p className="text-xs md:text-sm">From Zero to Hero</p>
    </div>
  );
};

const Main = () => {
  return (
    <div className="grid w-full max-w-screen-lg p-5 mx-auto md:grid-cols-2 md:p-0">
      <div className="flex flex-col w-full mt-4 md:mt-16">
        <div className="flex items-center self-start justify-center gap-2 px-3 py-1 mb-4 font-medium text-green-300 border border-green-700 rounded-full bg-green-800/20 animate-pulse">
          <Zap size={14} />
          <h1 className="text-xs">Test Your Skills</h1>
        </div>
        <h1 className="text-4xl font-semibold leading-snug md:text-5xl dark:bg-gradient-to-br dark:from-white dark:to-zinc-600 dark:bg-clip-text dark:text-transparent text-zinc-700">
          Enhance your Coding Skills
        </h1>
        <p className="mt-5 text-zinc-500">
          Test your skills with small coding exercises, specially crafted by
          developers to help you improve your JavaScript coding abilities.
        </p>
        <Link
          to="/code-editor"
          className="self-start px-10 py-3 mt-8 text-sm font-bold duration-500 ease-in-out border rounded-full shadow-2xl text-zinc-300 bg-zinc-800 border-zinc-700 hover:bg-transparent transition-opacit hover:text-green-400 hover:border-green-600"
        >
          Get Started
        </Link>
      </div>

      <div className="w-full p-8 mt-16 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <img
          src={MainPicture}
          alt="main picture"
          className="w-full border border-zinc-800 opacity-60"
        />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-8 h-[300px] rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 flex flex-col justify-center items-center text-center border border-zinc-800 relative overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-xl">
        <h1 className="text-2xl font-semibold leading-snug md:text-4xl dark:bg-gradient-to-br dark:from-zinc-200 dark:to-zinc-400 dark:bg-clip-text dark:text-transparent text-zinc-700">
          Why Choose Our JavaScript Lessons?
        </h1>
        <p className="mt-8 text-zinc-500">
          Tackle various challenges and then explore how others approached the
          same problems.{" "}
        </p>
        {/* 
        <Link className="px-4 py-2 mt-8 font-bold text-black bg-white rounded">
          Explore
        </Link> */}
      </div>
    </div>
  );
};
