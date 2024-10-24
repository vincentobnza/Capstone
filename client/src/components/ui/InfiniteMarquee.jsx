"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import {
  Container,
  Target,
  Braces,
  RefreshCcw,
  ToggleLeft,
  Code,
  Zap,
  CircleX,
} from "lucide-react";

const jsLessons = [
  {
    title: "Variables and Data Types",
    description: "Introduction to variables and data types in JavaScript.",
    icon: Container,
  },
  {
    title: "Functions",
    description: "Learn about functions and variable scope in JavaScript.",
    icon: Target,
  },
  {
    title: "Arrays and Objects",
    description:
      "Understanding how to work with arrays and objects in JavaScript.",
    icon: Braces,
  },
  {
    title: "Loops and Iteration",
    description: "Master different types of loops and iteration methods.",
    icon: RefreshCcw,
  },
  {
    title: "Conditional Statements",
    description: "Using conditional statements to control flow in JavaScript.",
    icon: ToggleLeft,
  },
  {
    title: "DOM Manipulation",
    description: "Learn how to interact with and manipulate the DOM.",
    icon: Code,
  },
  {
    title: "Event Handling",
    description: "Introduction to handling events in JavaScript.",
    icon: Zap,
  },
  {
    title: "Error Handling",
    description: "Learn how to handle errors and exceptions effectively.",
    icon: CircleX,
  },
];

export default function InfiniteMarquee() {
  return (
    <div className="w-full max-w-screen-lg mx-auto overflow-hidden">
      <div className="items-center justify-center w-full max-w-xl mx-auto mt-8 mb-8 text-center">
        <h1 className="mb-3 text-4xl font-semibold leading-relaxed md:text-5xl dark:bg-gradient-to-br dark:from-white dark:to-zinc-600 dark:bg-clip-text dark:text-transparent text-zinc-700">
          Lessons Just For You
        </h1>
        <p className="text-sm font-semibold text-zinc-500">
          Unlock your full potential
        </p>
      </div>
      <div className="relative w-full">
        {/* Left gradient */}
        <div className="absolute top-0 left-0 z-10 w-32 h-full bg-gradient-to-r from-white dark:from-zinc-900 to-transparent"></div>
        {/* Right gradient */}
        <div className="absolute top-0 right-0 z-10 w-32 h-full bg-gradient-to-l from-white dark:from-zinc-900 to-transparent"></div>

        <motion.div
          className="flex items-center h-full py-4"
          animate={{
            x: [0, -100 * jsLessons.length * 2], // Doubled to account for the duplicated array
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60, // Increased duration for smoother animation
              ease: "linear",
            },
          }}
        >
          {jsLessons.map((lesson, index) => (
            <motion.div key={index} className="w-full m-2">
              <Card className="p-3">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="grid bg-white border rounded-lg size-12 place-items-center dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 border-zinc-200 dark:border-zinc-800">
                      <lesson.icon size={20} className="text-green-500" />
                    </div>
                    <div className="w-[250px] p-2 flex flex-col gap-2">
                      <div className="text-zinc-700 dark:text-zinc-300">
                        {lesson.title}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {lesson.description}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
