import React from "react";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny, MdOutlineLeaderboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoIosTrendingUp } from "react-icons/io";
import { useTheme } from "next-themes";
import { useAuth } from "@/context/AuthContext";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, signOut } = useAuth();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  async function handleSignOut() {
    await signOut();
  }

  return (
    <div className="sticky top-0 w-full bg-white/20 dark:bg-zinc-900/40 backdrop-blur text-zinc-900 dark:text-zinc-300 grid place-items-center z-50">
      <div className="w-full max-w-screen-xl mx-auto p-5 flex justify-between items-center">
        <Link
          to="/"
          className="font-bold text-zinc-600 dark:text-zinc-400 text-lg"
        >
          {"{ CodeScript }"}
        </Link>

        <Navs />

        <div className="flex items-center gap-6">
          {user ? (
            <Dropdown placement="bottom-end" className="text-xs">
              <DropdownTrigger>
                <div className="flex items-center gap-4">
                  <div className="size-8 grid place-items-center cursor-pointe rounded-full overflow-hidden cursor-pointer">
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
                <DropdownItem key="profile" className="h-14 gap-4">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.user_metadata.name}</p>
                </DropdownItem>
                <DropdownItem href="/settings" key="settings">
                  My Settings
                </DropdownItem>
                <DropdownItem key="feedback">Send Feedback</DropdownItem>

                <DropdownItem key="signout" onClick={handleSignOut}>
                  Signout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavLink
              to="/login"
              className="text-sm font-semibold text-black py-2 px-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg hover:opacity-80 duration-400 transition ease-in"
            >
              Login
            </NavLink>
          )}

          <div
            className="cursor-pointer duration-500 transition ease-in-out"
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
    <nav className="hidden md:flex items-center space-x-10">
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
        to="codescript-editor"
        className="text-[13px] hover:text-yellow-500 duration-300"
      >
        Code Editor
      </NavLink>
      <NavLink
        to="privacy-policy"
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
