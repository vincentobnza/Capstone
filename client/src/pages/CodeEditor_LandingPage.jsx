import React from "react";
import { Link } from "react-router-dom";
import VideoHero from "../assets/video_hero.mp4";
import { motion } from "framer-motion";

export default function CodeEditor_LandingPage() {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 space-y-10 pb-10">
      <Hero />
      <Video />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto flex flex-col justify-center items-center gap-4 text-center">
      <h1 className="text-[48px] dark:bg-gradient-to-br dark:from-white dark:to-zinc-400 dark:bg-clip-text dark:text-transparent text-zinc-700 leading-snug font-semibold ">
        CodeScript Online Editor
      </h1>

      <h1 className="text-lg font-medium">
        <span className="text-orange-500">Code, </span>
        <span className="text-green-500">Learn, </span>
        <span className="text-blue-500">Swift & Simple</span>
      </h1>

      <p className="mt-3 text-zinc-700 dark:text-zinc-400">
        Experience a user-friendly and rapid JavaScript compiler. <br /> Write
        and run JavaScript code online effortlessly.
      </p>

      <div className="flex mt-16 items-center gap-3">
        <Link
          to="/code-editor"
          className="py-3 w-[140px] grid place-items-center bg-blue-700  text-white font-bold rounded-lg border-2 border-blue-500 text-sm hover:opacity-90"
        >
          Start Coding
        </Link>
        <Link
          to="/learn-js"
          className="py-3 w-[140px] grid place-items-center bg-zinc-50 dark:bg-zinc-700 rounded-lg border-zinc-200 border-2 dark:border-zinc-600 font-bold text-sm hover:opacity-90"
        >
          Learn JavaScript
        </Link>
      </div>
    </div>
  );
};

const Video = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto h-[580px] bg-zinc-100 dark:bg-[#252525] border border-zinxc-200 dark:border-zinc-700 rounded-2xl overflow-hidden">
      <div className="w-full h-10 border-b border-zinc-700 p-4 flex justify-between items-center">
        <div className="w-[80px] grid grid-cols-3 gap-1">
          <div className="size-4 rounded-full bg-red-500"></div>
          <div className="size-4 rounded-full bg-yellow-500"></div>
          <div className="size-4 rounded-full bg-green-500"></div>
        </div>
      </div>
      {/* Video element */}
      <div className="w-full">
        <video
          src={VideoHero}
          className="object-cover" // Added border for visibility
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};
