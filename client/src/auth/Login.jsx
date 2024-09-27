import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";
export default function Login() {
  const { signInWithGoogle, signInWithGithub, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };

  const handleGithubLogin = async () => {
    await signInWithGithub();
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-white grid place-items-center text-zinc-700 ">
      <div className="w-full max-w-md flex flex-col gap-4 justify-center items-center text-center p-10">
        <h1 className="text-4xl font-bold tracking-wide text-zinc-700 ">
          CodeScript Login
        </h1>
        <p className="text-sm">Login your account with CodeScript</p>

        <form
          onSubmit={handleSignIn}
          className="mt-5 w-full flex flex-col text-left justify-start gap-1"
        >
          <label htmlFor="email" className="text-xs font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-11 px-3 bg-white border border-zinc-200 text-xs placeholder:text-zinc-400 mb-3 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className="text-xs font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-11 px-3 bg-white border border-zinc-200 text-xs placeholder:text-zinc-400 mb-3 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className=" w-full text-sm h-11 rounded-md bg-blue-600 hover:bg-blue-500 text-white">
            Login
          </button>
        </form>

        <div className="w-full grid grid-cols-2 gap-2">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-4 p-3 bg-zinc-50 border-zinc-200 text-sm font-semibold border"
          >
            <FcGoogle size={20} />
            Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="w-full flex items-center justify-center gap-4 p-3 bg-zinc-50 border-zinc-200 text-sm font-semibold border"
          >
            <FaGithub size={20} />
            Github
          </button>
        </div>

        <p className="mt-10 self-center text-sm font-semibold">
          Don't have an account ?
          <Link to="/signup" className="ml-2 text-blue-600 hover:text-blue-300">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
