import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Settings,
  TramFront,
  Trophy,
  Loader,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="fixed top-0 left-0 z-10 w-64 min-h-screen bg-white border-r text-zinc-700 border-zinc-200">
      <div className="flex justify-center w-full p-5 text-center">
        <Link
          to="/admin"
          className="text-sm font-black text-center text-transparent bg-gradient-to-br from-green-500 to-green-600 dark:to-green-800 bg-clip-text font-Orbitron"
        >
          CodeScript Admin
        </Link>
      </div>
      <nav className="w-full p-5 mt-4">
        <ul className="flex flex-col items-center justify-center p-1 space-y-1">
          <NavLink
            to="/admin"
            className="flex flex-col items-center justify-center w-3/4 gap-4 p-4 text-xs font-semibold transition-colors duration-300 rounded-lg hover:text-indigo-300 hover:bg-indigo-900/30"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>
          <NavLink
            to="manage-users"
            className="flex flex-col items-center justify-center w-3/4 gap-4 p-4 text-xs font-semibold transition-colors duration-300 rounded-lg hover:text-green-300 hover:bg-green-900/30"
          >
            <Users size={20} />
            Profiles
          </NavLink>
          <NavLink
            to="leaderboards"
            className="flex flex-col items-center justify-center w-3/4 gap-4 p-4 text-xs font-semibold transition-colors duration-300 rounded-lg hover:text-amber-300 hover:bg-amber-900/30"
          >
            <Trophy size={20} />
            Leaderboard
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}
