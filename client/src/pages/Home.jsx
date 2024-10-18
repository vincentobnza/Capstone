import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero_dark.png";
import HeroImage_Light from "../assets/hero_light.png";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { IoIosTrendingUp } from "react-icons/io";

export default function Home() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full overflow-hidden bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400"
    >
      <Hero />

      <div className="mt-2 w-full mx-auto h-[550px] grid place-items-center">
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="w-full max-w-screen-lg [background:linear-gradient(45deg,#172033,theme(colors.green.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.green.600/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.green.300)_90%,_theme(colors.green.500)_94%,_theme(colors.green.600/.48))_border-box] rounded-[50px] border border-transparent animate-border"
        >
          <img
            src={theme === "dark" ? HeroImage : HeroImage_Light}
            alt="hero"
            className="object-cover rounded-tr-[50px] rounded-tl-[50px] transition ease-linear duration-900 "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg gap-6 p-5 mx-auto text-center md:p-8">
      <h1 className="text-[48px] dark:bg-gradient-to-br dark:from-white dark:to-zinc-600 dark:bg-clip-text dark:text-transparent text-zinc-700 leading-snug font-bold">
        Learn, Build, and Excel in{" "}
        <span className="text-transparent bg-gradient-to-br from-yellow-400 to-orange-600 bg-clip-text">
          JavaScript
        </span>{" "}
        Programming
      </h1>
      <p className="text-md">
        Interactive lessons designed to sharpen your JavaScript skills 🚀
      </p>
      <Link
        to="/learn"
        className="z-10 flex items-center gap-2 px-6 py-3 mt-10 font-medium text-white bg-green-800 border-2 border-green-500 rounded-full text-md animate-pulse"
      >
        Start Learning
        <IoIosTrendingUp size={20} />
      </Link>
      <p className="text-sm">From Zero to Hero 🦸🏻</p>
    </div>
  );
};
