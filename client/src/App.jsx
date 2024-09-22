import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./private/ProtectedRoute";

// AUTH
import Login from "./auth/Login";

// PAGES
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Learn from "./pages/Learn";
import Developers from "./pages/Developers";

// CONTENT PAGES

//CHAPTER 1`
import Introduction from "./content/Chapter1.1";
import DevelopersConsole from "./content/Chapter1.2";

//LAYOUT
import RootLayout from "./layout/RootLayout";
import ChaptersLayout from "./layout/ChaptersLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "developers",
        element: <Developers />,
      },
      {
        path: "learn-js",
        element: <Learn />,
      },
      {
        path: "learn-js",
        element: <ChaptersLayout />,
        children: [
          {
            path: "intro",
            element: <Introduction />,
          },
          {
            path: "developers-console",
            element: <DevelopersConsole />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="App text-zinc-900 dark:text-zinc-300 font-Inter">
      <RouterProvider router={router} />
    </div>
  );
}
