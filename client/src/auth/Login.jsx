import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
``;
export default function Login() {
  return (
    <div className="w-full h-screen bg-white dark:bg-zinc-900 grid place-items-center text-zinc-700 dark:text-zinc-400">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <h1 className="text-5xl font-semibold tracking-wide text-zinc-700 dark:text-yellow-500">
          CodeScript Login
        </h1>
        <p>Login your account with CodeScript</p>

        <div className="mt-5 flex flex-col gap-3">
          <button className="flex items-center justify-center gap-4 p-3 bg-zinc-50 border-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 w-[300px]">
            <FcGoogle />
            Login with Google
          </button>
          <button className="flex items-center justify-center gap-4 p-3 bg-zinc-50 border-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 w-[300px]">
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
}
