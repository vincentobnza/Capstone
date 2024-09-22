import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function ChaptersLayout() {
  return (
    <div>
      <header className="w-full max-w-screen-lg mx-auto flex justify-between">
        <div>
          <Link
            to="/learn-js"
            className="flex items-center gap-2 text-md text-zinc-700 dark:text-zinc-400 text-sm font-medium"
          >
            <IoReturnDownBackSharp size={20} /> Table of Contents
          </Link>
        </div>
      </header>
      <main className="mt-8 pb-16">
        <Outlet />
      </main>
    </div>
  );
}
