import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";

export default function Signup() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      await signUp(email, password);
      navigate("/"); // Redirect to dashboard after successful signup
    } catch (error) {
      setError(error.message || "Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-screen bg-white dark:bg-gradient-to-b dark:from-zinc-900 dark:to-gray-950 grid place-items-center text-zinc-700 dark:text-zinc-400">
      <div className="w-full max-w-md flex flex-col gap-4 justify-center items-center text-center p-10">
        <h1 className="text-4xl font-bold tracking-wide text-zinc-700 dark:text-white">
          Create your account
        </h1>
        <p className="text-sm">Build your foundation with CodeScript</p>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form
          onSubmit={handleSignup}
          className="mt-5 w-full flex flex-col text-left justify-start gap-1"
        >
          <label htmlFor="email" className="text-xs font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full h-11 px-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs placeholder:text-zinc-400 mb-3 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password" className="text-xs font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full h-11 px-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs placeholder:text-zinc-400 mb-3 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
          Already have an account?
          <Link to="/login" className="ml-2 text-blue-600 hover:text-blue-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
