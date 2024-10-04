import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Robot from "../assets/robot.png";
import { X } from "lucide-react";

export default function QuizStartModal({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer font-sans"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="h-[250px] p-6 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden "
          >
            {/* CLOSE ICON */}

            <X
              onClick={() => setIsOpen(false)}
              size={18}
              className="absolute top-3 right-3 cursor-pointer text-zinc-400"
            />
            <img
              src={Robot}
              alt="robot"
              className="w-[200px] absolute -bottom-12 -right-2 grayscale opacity-50"
            />

            <div className="flex flex-col">
              <h1 className="text-zinc-900 dark:text-zinc-100 text-xl mb-5 font-semibold">
                Important Quiz Rules
              </h1>

              <div className="w-[80%] text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                  Please note: Once you select your answer, you cannot go back
                  and change it. Think carefully before making your choice. Good
                  luck!
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="self-start mt-10 py-2 px-3 bg-zinc-200 text-black text-xs font-bold rounded"
              >
                Okay, Let's Go!
              </button>
            </div>

            <div className="w-full flex flex-col gap-2 p-6"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
