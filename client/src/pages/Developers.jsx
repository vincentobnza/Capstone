import React from "react";
import { motion } from "framer-motion";

export default function Developers() {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 space-y-16  dark:text-zinc-400 pb-10">
      <div className="w-full max-w-screen-lg mx-auto pb-10 space-y-8">
        <Header />
        <TeamImage />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="w-full space-y-6">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium text-zinc-800 dark:text-zinc-300">
            Team Developers
          </h1>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Meet the team behind CodeScript
          </p>
        </div>
      </div>

      <hr class="h-px mt-3 bg-zinc-300 dark:bg-zinc-800 border-0" />
    </div>
  );
};

const TeamImage = () => {
  return (
    <div className="w-full h-[540px] bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-5 grid place-items-center ">
      <motion.img
        initial={{ filter: "blur(10px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        src="https://images.pexels.com/photos/6913299/pexels-photo-6913299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="team-developers"
        className="w-full h-[500px] object-cover rounded-2xl border border-zinc-200 dark:border-zinc-800"
      />
    </div>
  );
};
