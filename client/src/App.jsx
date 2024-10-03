import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./private/ProtectedRoute";

// AUTH
import Login from "./auth/Login";
import Signup from "./auth/Signup";

// PAGES
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Learn from "./pages/Learn";
import Developers from "./pages/Developers";
import CodeEditor from "./pages/CodeEditor";
import CodeEditor_LandingPage from "./pages/CodeEditor_LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Learn_LandingPage from "./pages/Learn_LandingPage";
import Games from "./pages/Games";
import Quiz from "./pages/Quiz";

// LAYOUT
import RootLayout from "./layout/RootLayout";
import ChaptersLayout from "./layout/ChaptersLayout";
import AdminLayout from "./layout/AdminLayout";

// ADMIN PAGES
import Dashboard from "./admin/Dashboard";
import User_Management from "./admin/User_Management";
import User_Leaderboard from "./admin/User_Leaderboard";
import User_Progress from "./admin/User_Progress";

// COMPONENTS
import DebugWarsLevel from "./components/DebugWarsLevel";

// CONTENT PAGES

// CHAPTER 1
import Introduction from "./content/Chapter1.1";
import DevelopmentEnvironment from "./content/Chapter1.2";
import JavaScriptToPage from "./content/Chapter1.3";
import HelloWorld from "./content/Chapter2.1";
import CodeStructure from "./content/Chapter2.2";
import Variables from "./content/Chapter2.3";
import DataTypes from "./content/Chapter2.4";
import Operators from "./content/Chapter2.5";

// PROVIDER
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./components/ThemeProvider";

// Combine routes
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
        element: (
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "codescript-editor",
        element: <CodeEditor_LandingPage />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/learn",
        element: <Learn_LandingPage />,
      },
      {
        path: "developers",
        element: <Developers />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
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
            path: "development-environment",
            element: <DevelopmentEnvironment />,
          },
          {
            path: "adding-javascript-to-page",
            element: <JavaScriptToPage />,
          },
          {
            path: "fundamentals",
            children: [
              {
                path: "hello-world",
                element: <HelloWorld />,
              },
              {
                path: "code-structure",
                element: <CodeStructure />,
              },
              {
                path: "variables",
                element: <Variables />,
              },
              {
                path: "data-types",
                element: <DataTypes />,
              },
              {
                path: "operators",
                element: <Operators />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "code-editor",
    element: <CodeEditor />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "manage-users",
        element: <User_Management />,
      },
      {
        path: "users-leaderboard",
        element: <User_Leaderboard />,
      },
      {
        path: "users-progress",
        element: <User_Progress />,
      },
    ],
  },

  // QUIZ
  {
    path: "/quiz/:quizType",
    element: (
      <ThemeProvider>
        <Quiz />
      </ThemeProvider>
    ),
  },
  // GAMES
  {
    path: "debug-wars/select-level",
    element: <DebugWarsLevel />,
  },
]);

export default function App() {
  return (
    <div className="App text-zinc-900 dark:text-zinc-300 font-sans">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}
