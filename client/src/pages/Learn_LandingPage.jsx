import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io5";
export default function Learn_LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-screen pb-10 space-y-10 overflow-hidden bg-white dark:bg-zinc-900"
    >
      <Hero />
    </motion.div>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-md gap-4 mx-auto text-center">
      <h1 className="text-[48px] dark:bg-gradient-to-br dark:from-white dark:to-zinc-400 dark:bg-clip-text dark:text-transparent text-zinc-700 leading-snug font-bold ">
        Start Building With JavaScript
      </h1>

      <p className="mt-3 text-zinc-700 dark:text-zinc-400">
        Learn JavaScript step by step with our interactive lessons, <br />
        practical examples, and expert guidance.
      </p>

      <div className="mt-16 w-full h-[500px] flex flex-col items-center space-y-10 max-w-screen-md rounded-lg bg-white dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950 border border-zinc-3 00 dark:border-zinc-800 relative">
        {/* BOOK  */}
        <div className="w-[160px] h-[190px] -mt-10 bg-zinc-100 dark:bg-white rounded relative before:absolute before:content-[''] before:left-0 before:h-full before:w-[10px] before:bg-zinc-600 before:rounded-tl before:rounded-bl shadow-none dark:shadow-2xl dark:shadow-zinc-800 border border-zinc-300 dark:border-none">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11166/11166597.png"
            alt="award"
            className="absolute top-0 right-0 size-9"
          />

          <IoLogoJavascript
            className="absolute right-2 bottom-2 text-zinc-700"
            size={30}
          />
          <div className="flex flex-col gap-4 px-8 py-5 text-left">
            <h1 className="font-bold text-md text-zinc-900">
              Learn <br />
              JavaScript
            </h1>
            <p className="text-[10px] text-zinc-800 font-medium">
              Chapter 1 Getting Started
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Learn JavaScript
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Explore Topics on JavaScript Mastery
          </p>

          <Link
            to="/learn-js"
            className="flex items-center self-center gap-4 px-6 py-3 mt-10 text-sm font-bold text-white dark:text-black bg-zinc-900 dark:bg-white"
          >
            Learn Now
            <MoveRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
