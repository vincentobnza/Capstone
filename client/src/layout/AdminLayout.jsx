import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@/components/AdminSidebar";
import AdminNavbar from "@/components/AdminNavbar";

export default function AdminLayout() {
  return (
    <div className="flex flex-col w-full bg-white font-Inter text-zinc-700">
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />
        <main className="flex-1 mt-12 ml-64 overflow-x-hidden overflow-y-auto bg-white text-zinc-800">
          <AdminNavbar />
          <div className="p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
