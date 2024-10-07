import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub } from "react-icons/fa6";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, signInWithGithub } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast.error("Please fill in all fields", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      });
      return;
    }

    // Start the sign-in process
    const signInPromise = new Promise(async (resolve, reject) => {
      try {
        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        resolve(data);
      } catch (error) {
        reject(error.message);
      } finally {
        setLoading(false);
      }
    });

    toast.promise(
      signInPromise,
      {
        loading: "Signing in...",
        success: () => {
          navigate("/"); // Redirect on success
          return "Signed in successfully!";
        },
        error: (err) => `Error: ${err}`,
      },
      {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      }
    );
  };

  const handleGithubLogin = async () => {
    await signInWithGithub();
  };

  return (
    <div className="w-full h-screen bg-zinc-900 grid place-items-center text-zinc-400">
      <Toaster />
      <div className="w-full max-w-md flex flex-col gap-4 justify-center items-center text-center p-10">
        <h1 className="text-4xl font-medium tracking-wide text-white">
          Welcome Back!
        </h1>
        <p className="text-md">Sign in to your account</p>

        <form
          onSubmit={handleSignIn}
          className="mt-5 w-full flex flex-col text-left justify-start gap-1"
        >
          <label htmlFor="email" className="text-xs font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full h-11 px-3 bg-zinc-800 border border-zinc-700 text-xs placeholder:text-zinc-400 mb-3 rounded-md outline-none hover:border-zinc-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="text-xs font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full h-11 px-3 bg-zinc-800 border border-zinc-700 text-xs placeholder:text-zinc-400 mb-3 rounded-md outline-none hover:border-zinc-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full text-sm h-11 rounded-md bg-green-600 hover:bg-green-500 text-white font-bold disabled:bg-blue-300"
            disabled={loading}
          >
            Sign In
          </button>

          <button
            onClick={handleGithubLogin}
            className="mt-1 w-full text-sm h-11 rounded-md bg-white text-black flex items-center justify-center text-center gap-2 font-bold"
          >
            <FaGithub />
            Sign In with Github
          </button>
        </form>

        <p className="mt-10 self-center text-sm font-semibold">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="ml-2 text-green-600 underline hover:text-green-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
