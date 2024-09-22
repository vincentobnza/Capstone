import React from "react";
import Navbar from "../components/navbar";
import { useState } from "react";

export default function Leaderboard() {
  return (
    <div className="bg-white min-h-[70vh] dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 pb-10">
      <Points />
      <Progress />
    </div>
  );
}

const Points = () => {
  const [points, setPoints] = useState(0);
  return (
    <div className="w-full max-w-screen-lg mx-auto p-5 flex flex-col gap-2 text-center justify-center items-center">
      <div className="flex flex-col gap-3">
        <h1 className="bg-gradient-to-br from-orange-500 to-yellow-500 bg-clip-text text-transparent text-7xl font-semibold">
          {points}
        </h1>
        <p className="font-semibold text-sm">Current Points</p>
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <div className="mt-5 w-full max-w-sm mx-auto flex flex-col gap-2  p-5 border border-zinc-200 dark:border-zinc-700">
      <p className="text-sm font-semibold">Progress</p>
    </div>
  );
};
