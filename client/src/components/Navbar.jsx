import React from "react";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="sticky top-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-zinc-300 grid place-items-center z-50">
      <div className="w-full max-w-screen-xl mx-auto p-5 flex justify-between items-center">
        <Link to="/" className="font-bold text-yellow-600 dark:text-yellow-500">
          {"{ CodeScript }"}
        </Link>

        <Navs />

        {/* TOGGLE DARK AND LIGHT MODE */}

        <div className="flex items-center gap-6">
          <NavLink
            to="/login"
            className="text-sm font-semibold text-black py-2 px-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg hover:opacity-80 duration-400 transition ease-in"
          >
            Login
          </NavLink>

          <div
            className="tooltip tooltip-bottom bg-white dark:bg-zinc-800 font-semibold"
            data-tip="Change Theme"
          >
            <div
              className="cursor-pointer duration-500 transition ease-in-out"
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <MdOutlineWbSunny size={24} />
              ) : (
                <FiMoon size={24} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Navs = () => {
  return (
    <nav className="hidden md:flex items-center space-x-10 ">
      <NavLink
        to="learn-js"
        className="text-[13px] hover:text-yellow-500 duration-300"
      >
        Learn JS
      </NavLink>
      <NavLink
        to="leaderboard"
        className="relative gap-2 text-[13px] hover:text-yellow-500 duration-300"
      >
        Leaderboards
        <MdOutlineLeaderboard
          size={12}
          className="absolute top-0 -right-5 animate-pulse"
        />
      </NavLink>
      <NavLink
        to="privacy"
        className="text-[13px] hover:text-yellow-500 duration-300"
      >
        Privacy Policy
      </NavLink>
      <NavLink
        to="developers"
        className="relative text-[13px] hover:text-yellow-500 duration-300"
      >
        Developers
        <IoIosTrendingUp className="absolute top-0 -right-5" />
      </NavLink>
    </nav>
  );
};
