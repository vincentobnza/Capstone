import React from "react";
import { Link } from "react-router-dom";
import VideoHero from "../assets/video_hero.mp4";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CodeEditor_LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full pb-10 space-y-10 bg-white dark:bg-zinc-900"
    >
      <Hero />
      <Video />
    </motion.div>
  );
}

const Hero = () => {
  const handleNewTab = () => {
    const newTab = window.open();
    newTab.location.href = "/code-editor";
  };
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-md gap-4 mx-auto text-center">
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

      <div className="flex items-center gap-3 mt-16">
        <button
          onClick={handleNewTab}
          className="py-3 w-[140px] grid place-items-center bg-green-800  text-white font-bold  border-2 border-green-500 text-sm hover:opacity-90"
        >
          Start Coding
        </button>
        <Link
          to="/learn"
          className="py-3 w-[140px] grid place-items-center bg-zinc-50 dark:bg-zinc-700  border-zinc-200 border-2 dark:border-zinc-500 font-bold text-sm hover:opacity-90"
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
      <div className="flex items-center justify-between w-full h-10 p-4 border-b border-zinc-700">
        <div className="w-[80px] grid grid-cols-3 gap-1">
          <div className="bg-red-500 rounded-full size-4"></div>
          <div className="bg-yellow-500 rounded-full size-4"></div>
          <div className="bg-green-500 rounded-full size-4"></div>
        </div>
      </div>
      {/* Video element */}
      <div className="w-full">
        <video
          src={VideoHero}
          className="object-cover opacity-60" // Added border for visibility
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};
