import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserPen, PencilLine } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import supabase from "../config/supabaseClient";

export default function Settings() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg pb-10 mx-auto space-y-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300">
      <Header />

      <Main />
    </div>
  );
}

const Header = () => (
  <div className="flex items-start justify-between w-full max-w-screen-lg gap-4 p-5 mx-auto">
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
        Manage your account settings
      </p>
    </div>
  </div>
);

const Main = () => (
  <div className="w-full h-[70vh] flex gap-2">
    <Sidebar />
    <Content />
  </div>
);

const Sidebar = () => (
  <div className="inset-y-0 p-5 border-r w-80 border-zinc-200 dark:border-zinc-800 ">
    <h3 className="text-xs font-bold text-zinc-500 dark:text-zinc-500">
      Information Details
    </h3>

    <ul className="mt-5 ">
      <Link
        to="/settings"
        className="flex items-center gap-6 px-3 py-2 text-sm font-semibold rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 bg-zinc-100 dark:bg-zinc-800"
      >
        <UserPen size={15} />
        Profile Settings
      </Link>
    </ul>
  </div>
);

const Content = () => {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    const fetchUser = () => {
      try {
        const { data, error } = supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id);

        if (error) throw error;

        setUserDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex-1 p-5 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Email, Username</h1>
        <p className="text-sm font-semibold dark:text-zinc-500 text-zinc-500 ">
          Edit and save your profile information.
        </p>
        <div className="w-full max-w-lg mt-5">
          <div className="flex items-center w-full gap-3">
            <input
              type="text"
              className="w-full h-10 px-4 bg-transparent border-b rounded-md outline-none border-zinc-200 dark:border-zinc-800"
              value={userDetails?.username}
            />
            <button className="flex items-center justify-center h-10 gap-2 p-3 text-sm font-semibold border rounded border-zinc-200 dark:border-zinc-700">
              Edit
              <PencilLine size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
