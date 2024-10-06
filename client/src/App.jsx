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
import ContentMap from "./pages/ContentMap";

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

// LESSONS
import Lesson1_Topic1 from "./content/Lesson1/Lesson1.1";
import Lesson1_Topic2 from "./content/Lesson1/Lesson1.2";
import Lesson1_Topic3 from "./content/Lesson1/Lesson1.3";

import Lesson2_Topic1 from "./content/Lesson2/Lesson2.1";
import Lesson2_Topic2 from "./content/Lesson2/Lesson2.2";
import Lesson2_Topic3 from "./content/Lesson2/Lesson2.3";

import Lesson3_Topic1 from "./content/Lesson3/Lesson3.1";
import Lesson3_Topic2 from "./content/Lesson3/Lesson3.2";
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
            element: <Lesson1_Topic1 />,
          },
          {
            path: "development-environment",
            element: <Lesson1_Topic2 />,
          },
          {
            path: "adding-javascript-to-page",
            element: <Lesson1_Topic3 />,
          },
          {
            path: "variables-data-types",
            element: <Lesson2_Topic1 />,
          },
          {
            path: "operators",
            element: <Lesson2_Topic2 />,
          },
          {
            path: "comments-code-structure",
            element: <Lesson2_Topic3 />,
          },
          {
            path: "conditionals",
            element: <Lesson3_Topic1 />,
          },
          {
            path: "switch-statements",
            element: <Lesson3_Topic2 />,
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

  {
    path: "content-map",
    element: <ContentMap />,
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
