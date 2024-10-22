import React from "react";
import { Menu } from "lucide-react";
import { useAdmin } from "@/context/AdminContext";

export default function AdminNavbar() {
  const { admin } = useAdmin();
  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white border-b border-zinc-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-end h-[3.7rem]">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="grid rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 place-items-center size-9">
                <h1 className="font-bold text-white text-md ">IM</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-semibold">Instructor Mode</h1>
                <p className="text-xs text-zinc-400">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
