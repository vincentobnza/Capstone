import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, Settings, TramFront, Trophy, Loader } from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="fixed top-0 left-0 bg-gradient-to-b from-zinc-800 to-gray-950 text-white w-64 min-h-screen z-10">
      <div className="w-full flex p-5 ">
        <div className="flex items-center gap-2 text-zinc-400">
          <TramFront size={20} />
          <h1 className="text-sm font-bold">CodeScript Admin</h1>
        </div>
      </div>
      <nav className="mt-10 p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin"
              className="flex items-center space-x-5 p-2 rounded hover:bg-zinc-800 text-sm hover:text-orange-400"
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="manage-users"
              className="flex items-center space-x-5 p-2 rounded hover:bg-zinc-800 text-sm hover:text-orange-400"
            >
              <Users size={20} />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="users-leaderboard"
              className="flex items-center space-x-5 p-2 rounded hover:bg-zinc-800 text-sm hover:text-orange-400"
            >
              <Trophy size={20} />
              <span>Leaderboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="users-progress"
              className="flex items-center space-x-5 p-2 rounded hover:bg-zinc-800 text-sm hover:text-orange-400"
            >
              <Loader size={20} />
              <span>Track Progress</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className="flex items-center space-x-5 p-2 rounded hover:bg-zinc-800 text-sm hover:text-orange-400"
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
