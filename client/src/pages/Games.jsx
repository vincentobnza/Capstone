import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Games() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full p-5 space-y-8 pb-24"
    >
      <Header />
      <GamesCard />
    </motion.div>
  );
}

const Header = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex justify-center items-center text-center">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          Explore
        </p>
        <h1 className="text-zinc-800 dark:text-zinc-100 text-2xl font-semibold">
          Explore Games
        </h1>
      </div>
    </div>
  );
};

const GamesCard = () => {
  return (
    <div className="w-full max-w-screen-sm mx-auto grid md:grid-cols-2 gap-4">
      <div className="w-full flex flex-col items-center text-center gap-6 p-8 h-[270px] rounded-lg bg-gradient-to-br from-yellow-600 to-orange-600 border-2 border-orange-500 relative overflow-hidden text-white">
        <img
          src="https://cdn-icons-png.flaticon.com/128/14668/14668122.png"
          alt="quiz"
          className="absolute -top-4 -right-4 opacity-20 size-40"
        />

        <div class="text-2xl font-bold text-white text-center z-10">
          <span class="[text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-5px_5px_0_#000,_1px_1px_0_#000]">
            <b className="text-6xl font-Odibee tracking-widest">Quiz</b>
            <br />
            Game
          </span>
        </div>
        <div class="text-md font-bold text-white">
          <span class="[text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-2px_2px_0_#000,_1px_1px_0_#000]">
            Multiplayer Game
          </span>
        </div>

        <div className="flex items-center">
          <Link
            to="/quiz-game"
            className="py-3 w-[140px] grid place-items-center bg-orange-700  text-white font-medium rounded-lg border-2 border-orange-500 text-sm hover:opacity-90"
          >
            Play Now
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-center gap-6 p-8 h-[270px] rounded-lg bg-gradient-to-br from-green-600 to-green-600 border-2 border-green-500 relative overflow-hidden text-white">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5815/5815576.png"
          alt="quiz"
          className="absolute -top-4 -right-4 opacity-40 size-40"
        />

        <div class="text-2xl font-bold text-white text-center z-10">
          <span class="[text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-5px_5px_0_#000,_1px_1px_0_#000]">
            <b className="text-6xl font-Odibee tracking-widest">Debug</b>
            <br />
            Wars
          </span>
        </div>

        <div class="text-md font-bold text-white">
          <span class="[text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-2px_2px_0_#000,_1px_1px_0_#000]">
            Multiplayer Game
          </span>
        </div>

        <div className="flex items-center">
          <Link
            to="/debug-wars/select-level"
            className="py-3 w-[140px] grid place-items-center bg-green-700 text-white font-medium rounded-lg border-2 border-green-500 text-sm hover:opacity-90"
          >
            Start Game
          </Link>
        </div>
      </div>
    </div>
  );
};
