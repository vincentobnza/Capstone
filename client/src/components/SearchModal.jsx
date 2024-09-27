import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchModal({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-zinc-900/70 backdrop-blur-lg grid place-items-center z-50 p-10"
        >
          {/* SEARCH MODAL */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="w-full max-w-lg dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-800 border dark:border-zinc-700 bg-white rounded-lg flex justify-center flex-col"
          >
            <div className="w-full h-14 border-b border-zinc-200 dark:border-zinc-700 grid place-items-center px-2">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="size-4 text-gray-400" />
                </div>
                <input
                  autoFocus={true}
                  type="text"
                  className="w-full pl-10 pr-4 py-2 bg-transparent rounded-md outline-none"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="grid place-items-center p-8">
              <h1>No recent searches</h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
