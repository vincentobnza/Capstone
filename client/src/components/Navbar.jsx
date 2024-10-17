import React, { useState } from "react";
import { FiMoon } from "react-icons/fi";
import {
  MdOutlineWbSunny,
  MdOutlineLeaderboard,
  MdKeyboardCommandKey,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoIosTrendingUp } from "react-icons/io";
import { useTheme } from "next-themes";
import { useAuth } from "@/context/AuthContext";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import { Search, User } from "lucide-react";
import NavbarQuickSearch from "./NavbarQuickSearch";
import { useDisclosure } from "@nextui-org/react";
import { Swords } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, signOut } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="sticky top-0 z-50 grid w-full border-b bg-white/20 dark:bg-zinc-900/40 backdrop-blur-md text-zinc-900 dark:text-zinc-300 place-items-center border-zinc-100 dark:border-zinc-800">
      <NavbarQuickSearch
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
      <div className="flex items-center justify-between w-full max-w-screen-xl p-5 mx-auto">
        <div className="flex items-center">
          <div className="relative">
            <Link
              to="/"
              className="text-lg font-black text-transparent bg-gradient-to-br from-green-500 to-green-600 dark:to-green-800 bg-clip-text font-Orbitron"
            >
              CodeScript
            </Link>
          </div>
          <Navs />
        </div>

        <div className="flex items-center gap-6">
          <div onClick={onOpen} className="relative w-[260px] cursor-pointer">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="text-gray-400 size-4" />
            </div>
            <div className="flex items-center justify-start w-full py-2 pl-10 pr-4 bg-transparent border outline-none bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600">
              <p className="text-xs">Quick Search...</p>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-3 pointer-events-none">
              <h1 className="text-xs font-semibold">Ctrl F</h1>
              <MdKeyboardCommandKey
                size={17}
                className="text-zinc-400 dark:text-zinc-500"
              />
            </div>
          </div>

          {user ? (
            <Dropdown placement="bottom-end" className="text-xs font-NotoSans">
              <DropdownTrigger>
                <div className="flex items-center gap-4">
                  <div className="grid overflow-hidden rounded-full cursor-pointer size-8 place-items-center cursor-pointe">
                    <img
                      src={
                        user.user_metadata.avatar_url || "default_profile_url"
                      }
                      alt="default profile"
                      className="object-cover"
                    />
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="settings" href="/settings">
                  Settings
                </DropdownItem>
                <DropdownItem key="signout" onClick={() => signOut()}>
                  Signout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Tooltip content="Login" radius="none" className="font-NotoSans">
              <NavLink to="/login">
                <User size={24} className="text-zinc-600 dark:text-zinc-400" />
              </NavLink>
            </Tooltip>
          )}

          <div
            className="transition duration-500 ease-in-out cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <MdOutlineWbSunny size={24} />
            ) : (
              <FiMoon size={24} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Navs = () => {
  return (
    <nav className="items-center hidden ml-24 space-x-8 md:flex">
      <NavLink
        to="learn"
        className="text-[12px] hover:text-green-500 duration-300"
      >
        Learn JS
      </NavLink>
      <NavLink
        to="leaderboard"
        className="relative gap-2 text-[12px] hover:text-green-500 duration-300"
      >
        Leaderboards
        <MdOutlineLeaderboard
          size={12}
          className="absolute top-0 -right-5 animate-pulse"
        />
      </NavLink>
      <NavLink
        to="codescript-editor"
        className="text-[12px] hover:text-green-500 duration-300"
      >
        Code Editor
      </NavLink>
      <NavLink
        to="/games"
        className="relative text-[12px] hover:text-green-500 duration-300"
      >
        Games
        <Swords size={12} className="absolute top-0 -right-5" />
      </NavLink>
      <NavLink
        to="privacy-policy"
        className="text-[12px] hover:text-green-500 duration-300"
      >
        Privacy Policy
      </NavLink>
    </nav>
  );
};
