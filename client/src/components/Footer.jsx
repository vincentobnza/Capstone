import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const Site = [
    {
      item: "Home",
      link: "/",
    },
    {
      item: "Learn",
      link: "/learn",
    },
    {
      item: "Leaderboards",
      link: "/leaderboard",
    },
    {
      item: "Developers",
      link: "/developers",
    },
  ];

  const Navigation = [
    {
      item: "Learn JavaScript",
      link: "/student-dashboard",
    },
  ];
  return (
    <div className="w-full grid place-items-center bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 f gap-2 text-zinc-700 dark:text-zinc-200 relative p-4">
      <footer>
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" class="hover:underline">
              CodeScript™
            </Link>
            . All Rights Reserved.
          </span>
          <ul class="ml-8 flex flex-wrap items-center mt-3 text-sm  text-zinc-400 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Developers
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
