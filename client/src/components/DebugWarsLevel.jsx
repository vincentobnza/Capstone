import React from "react";
import { motion } from "framer-motion";

export default function DebugWarsLevel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-screen bg-zinc-900 grid place-items-center relative overflow-hidden"
    >
      <Selector />

      <img
        src="https://cdn-icons-png.flaticon.com/128/5815/5815576.png"
        alt="quiz"
        className="absolute -top-4 -right-4 opacity-30 size-[200px]"
      />

      <img
        src="https://cdn-icons-png.flaticon.com/128/5815/5815576.png"
        alt="quiz"
        className="absolute -bottom-4 -left-4 opacity-30 size-[120px]"
      />
    </motion.div>
  );
}

const Selector = () => {
  const LEVELS = [
    {
      name: "Explorer",
      icon: "https://cdn-icons-png.flaticon.com/128/5064/5064884.png",
    },
    {
      name: "Conqueror",
      icon: "https://cdn-icons-png.flaticon.com/128/5064/5064893.png",
    },
  ];

  return (
    <div className="w-full max-w-screen-lg flex flex-col  justify-center items-center text-center mx-auto p-5 gap-6">
      <div className="flex flex-col gap-2">
        <div class="text-2xl font-bold text-green-500 text-center z-10 font-Odibee tracking-widest">
          <span class="[text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-5px_5px_0_#3f3f46,_1px_1px_0_#000]">
            <b className="text-[104px]">Debug</b>
            <br />
            Wars
          </span>
        </div>
      </div>

      <p className="text-2xl font-semibold text-zinc-200 font-Odibee tracking-widest">
        Select Level
      </p>

      {/* CARD LEVELS */}

      <div className="w-full max-w-screen-sm grid md:grid-cols-2 gap-4">
        {LEVELS.map((level, index) => (
          <div
            key={index}
            className="w-full h-[200px] p-5 rounded-lg bg-zinc-800 border-[8px] border-zinc-700 flex justify-center items-center gap-5 relative cursor-pointer hover:opacity-80 transition-all ease-in-out duration-500 overflow-hidden"
          >
            <img
              src={level.icon}
              alt="explorer"
              className="absolute -top-8 -right-8 opacity-10 size-40 grayscale"
            />
            <div className="w-full flex flex-col">
              <p className="text-4xl font-semibold text-zinc-100 font-Odibee tracking-widest">
                {level.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
