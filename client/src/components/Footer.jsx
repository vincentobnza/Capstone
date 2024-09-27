import React from "react";

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
    <div className="w-full bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 h-[300px] flex flex-col gap-2 justify-center text-zinc-700 dark:text-zinc-200 relative">
      <div className="w-full max-w-screen-xl mx-auto p-5 flex justify-between ">
        <div className="flex flex-col justify-start p-4 gap-6 basis-1/3">
          <h1 className="text-2xl">{`{ CodeScript }`}</h1>
          <p className="text-sm  text-zinc-700 dark:text-zinc-200">
            Resources used in this project are sourced from various online
            platforms and are subject to their respective licenses.
          </p>
          <p className="text-zinc-700 dark:text-zinc-200 text-xs">
            @Copyright 2024. All Rights Reserved
          </p>
        </div>

        <div className="basis-1/2 z-10 grid grid-cols-3 gap-2">
          <div className="flex flex-col justify-start items-start gap-2 p-4">
            <h1 className="text-md font-bold mb-2">Site</h1>
            {Site.map((item, index) => (
              <div>
                <a
                  className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-500 "
                  href={item.link}
                  key={index}
                >
                  {item.item}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start gap-2 p-4">
            <h1 className="text-md font-bold mb-2">Navigation</h1>
            {Navigation.map((item, index) => (
              <div>
                <a
                  className="text-sm  text-zinc-700 dark:text-zinc-300 hover:text-zinc-500"
                  href={item.link}
                  key={index}
                >
                  {item.item}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-start items-start gap-2 p-4">
            <h1 className="text-md font-bold mb-2">Legal</h1>
            <a
              className="text-sm  text-zinc-700 dark:text-zinc-300 hover:text-zinc-500"
              href="/"
            >
              Privacy and Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
