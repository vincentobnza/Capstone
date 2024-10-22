import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
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
import { Swords, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, signOut } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [mobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobile(!mobile);
  };

  useEffect(() => {
    setIsMobile(false);
  }, [location]);

  return (
    <div className="sticky top-0 z-50 grid w-full border-b bg-white/20 dark:bg-zinc-900/70 backdrop-blur-md text-zinc-900 dark:text-zinc-300 place-items-center border-zinc-100 dark:border-zinc-800">
      <NavbarQuickSearch
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
      <div className="flex items-center justify-between w-full max-w-screen-xl p-5 mx-auto">
        {/* Mobile Menu Toggle Button */}
        <div
          className="grid duration-300 border rounded cursor-pointer md:hidden place-items-center bg-zinc-200 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:opacity-80 size-8"
          onClick={toggleMobileMenu}
        >
          <Menu size={20} />
        </div>

        <MobileMenu mobile={mobile} setIsMobile={setIsMobile} />

        {/* Desktop Links */}
        <div className="flex items-center">
          <div className="relative">
            <Link
              to="/"
              className="hidden text-lg font-black text-transparent md:flex bg-gradient-to-br from-green-500 to-green-600 dark:to-green-800 bg-clip-text font-Orbitron"
            >
              CodeScript
            </Link>
          </div>
          <Navs />
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <div
            onClick={onOpen}
            className="hidden md:flex relative w-[260px] cursor-pointer"
          >
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
            <Dropdown placement="bottom-end" className="font-sans text-xs">
              <DropdownTrigger>
                <div className="items-center gap-4">
                  <div className="grid overflow-hidden rounded-full cursor-pointer size-8 place-items-center">
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
        Code Playground
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

const MobileMenu = ({ mobile, setIsMobile }) => {
  const menuRef = useRef(null);

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobile(false);
      }
    };

    if (mobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobile, setIsMobile]);

  // Animation variants for Framer Motion
  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <>
      <AnimatePresence>
        {mobile && (
          <div className="fixed inset-0 z-10 flex md:hidden bg-zinc-900/50">
            <motion.div
              ref={menuRef}
              className="relative top-0 left-0 z-50 h-screen p-8 border-r w-60 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 md:hidden"
              initial="closed"
              animate={mobile ? "open" : "closed"}
              exit="closed"
              variants={variants}
              transition={{ type: "tween", duration: 0.2 }} // Add smooth sliding effect
            >
              <Link
                to="/"
                className="text-lg font-black text-transparent bg-gradient-to-br from-green-500 to-green-600 dark:to-green-800 bg-clip-text font-Orbitron"
              >
                CodeScript
              </Link>
              <nav className="flex flex-col justify-start gap-2 mt-20 space-y-4 items-left">
                <NavLink
                  to="learn"
                  className="font-semibold duration-300 text-md hover:text-green-500"
                >
                  Learn JS
                </NavLink>
                <NavLink
                  to="leaderboard"
                  className="relative gap-2 font-semibold duration-300 text-md hover:text-green-500"
                >
                  Leaderboards
                </NavLink>
                <NavLink
                  to="codescript-editor"
                  className="font-semibold duration-300 text-md hover:text-green-500"
                >
                  Code Playground
                </NavLink>
                <NavLink
                  to="/games"
                  className="relative font-semibold duration-300 text-md hover:text-green-500"
                >
                  Games
                </NavLink>
                <NavLink
                  to="privacy-policy"
                  className="font-semibold duration-300 text-md hover:text-green-500"
                >
                  Privacy Policy
                </NavLink>
              </nav>

              <div className="absolute left-0 w-full p-5 bottom-5">
                <button className="w-full px-4 py-2 text-xs font-semibold border rounded py- border-zinc-200 dark:border-zinc-700 ">
                  Sign out
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
