import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero_image.png";
import HeroImage_Light from "../assets/hero_image_light.png";
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
      className="w-full bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 relative overflow-hidden"
    >
      <Hero />

      <div className="mt-2 w-full mx-auto h-[400px] grid place-items-center">
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="w-full max-w-screen-lg [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-[50px] border border-transparent animate-border"
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
    <div className="w-full max-w-screen-lg mx-auto flex flex-col justify-center items-center gap-6 text-center p-5 md:p-8">
      <h1 className="text-[48px] dark:bg-gradient-to-br dark:from-white dark:to-zinc-600 dark:bg-clip-text dark:text-transparent text-zinc-700 leading-snug font-semibold">
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
        to="/learn"
        className="flex items-center gap-2 text-md  mt-10 py-3 px-6 rounded-full bg-gradient-to-br from-blue-600 to-sky-700 border-2 border-blue-500 text-white font-medium z-10"
      >
        Start Learning
        <IoIosTrendingUp size={20} />
      </Link>
      <p className="text-sm">From Zero to Hero 🦸🏻</p>
    </div>
  );
};
