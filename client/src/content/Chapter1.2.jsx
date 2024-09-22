import React from "react";

export default function DevelopersConsole() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-zinc-700 dark:text-zinc-100">
          Developer console
        </h1>
        <p className="text-sm">
          Most developers lean towards Chrome or Firefox for development because
          those browsers have the best developer tools. Other browsers also
          provide developer tools, sometimes with special features, but are
          usually playing “catch-up” to Chrome or Firefox. So most developers
          have a “favorite” browser and switch to others if a problem is
          browser-specific.
        </p>
      </div>
    </div>
  );
}
