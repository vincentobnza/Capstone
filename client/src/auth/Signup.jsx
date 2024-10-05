import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient"; // Make sure this import is correct
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Sign up the user
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
            },
          },
        });

      if (signUpError) throw signUpError;

      if (signUpData.user) {
        // Step 2: Immediately sign in the user
        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });

        if (signInError) throw signInError;

        if (signInData.user) {
          toast.success("Account created and signed in successfully!");
          navigate("/dashboard"); // Navigate to the dashboard or home page
        } else {
          throw new Error("Failed to sign in after registration");
        }
      } else {
        throw new Error("Failed to create account");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-900 grid place-items-center text-zinc-400">
      <Toaster />
      <div className="w-full max-w-md flex flex-col gap-4 justify-center items-center text-center p-10">
        <h1 className="text-4xl font-medium tracking-wide text-white">
          Create Account
        </h1>
        <p className="text-md">Sign up for a new account</p>

        <form
          onSubmit={handleSignUp}
          className="mt-5 w-full flex flex-col text-left justify-start gap-1"
        >
          <label htmlFor="username" className="text-xs font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full h-11 px-3 bg-zinc-800 border border-zinc-700 text-xs placeholder:text-zinc-400 mb-3 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email" className="text-xs font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full h-11 px-3 bg-zinc-800 border border-zinc-700 text-xs placeholder:text-zinc-400 mb-3 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="text-xs font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full h-11 px-3 bg-zinc-800 border border-zinc-700 text-xs placeholder:text-zinc-400 mb-3 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full text-sm h-11 rounded-md bg-blue-600 hover:bg-blue-500 text-white disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-10 self-center text-sm font-semibold">
          Already have an account?{" "}
          <Link to="/login" className="ml-2 text-blue-600 hover:text-blue-300">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
