import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Container,
  FolderKey,
  UserRound,
  Settings2,
  LogOut,
} from "lucide-react";
import CodeScriptLogo from "../assets/CodeScript_logo.png";

export default function AdminSidebar() {
  // Define nav links as an array of objects
  const navLinks = [
    {
      to: "dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    {
      to: "profiles",
      icon: <Users size={20} />,
      label: "User Profiles",
    },
    {
      to: "leaderboard",
      icon: <Trophy size={20} />,
      label: "Leaderboard",
    },
    {
      to: "assessments",
      icon: <Container size={20} />,
      label: "Assessments",
    },
  ];

  const accountLinks = [
    {
      to: "/admin/instructors",
      icon: <FolderKey size={20} />,
      label: "Instructors",
    },
    {
      to: "/admin/account-privacy",
      icon: <UserRound size={20} />,
      label: "Account Privacy",
    },
    {
      to: "/admin/settings",
      icon: <Settings2 size={20} />,
      label: "Settings",
    },
  ];

  return (
    <aside className="fixed top-0 left-0 z-30 w-64 min-h-screen bg-white border-r shadow-xl text-zinc-200 border-zinc-100 shadow-zinc-50">
      <div className="flex justify-center w-full p-5 text-center">
        <Link
          to="/admin"
          className="text-sm font-black text-center text-transparent bg-gradient-to-br from-zinc-500 to-zinc-600 dark:to-zinc-800 bg-clip-text font-Orbitron"
        >
          CodeScript Admin
        </Link>
      </div>

      {/* Navigation */}
      <nav className="w-full p-5 mt-5">
        <h1 className="text-xs font-semibold text-zinc-700">Navigation</h1>
        <ul className="flex flex-col items-center justify-center p-1 mt-3 space-y-1">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `relative flex items-center w-full gap-4 p-2 text-xs transition-colors duration-300 rounded-lg ${
                  isActive ? "text-green-600" : "text-zinc-700"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>

      {/* Account */}
      <nav className="w-full p-5 mt-1">
        <h1 className="text-xs font-semibold text-zinc-700">Account</h1>
        <ul className="flex flex-col items-center justify-center p-1 mt-3 space-y-1">
          {accountLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center w-full gap-4 p-2 text-xs transition-colors duration-300 rounded-lg ${
                  isActive ? "text-green-500" : "text-zinc-700"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>
      <nav className="w-full p-5 mt-1">
        <h1 className="text-xs font-semibold text-zinc-700">System</h1>
        <div className="flex flex-col items-center justify-center p-1 mt-3 space-y-1">
          <button className="flex items-center self-start gap-4 p-2 text-xs text-zinc-700">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}
