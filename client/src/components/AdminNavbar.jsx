import React from "react";
import { Menu } from "lucide-react";

export default function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white border-b border-zinc-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-end h-11">
          <div className="flex items-center">
            <button className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
