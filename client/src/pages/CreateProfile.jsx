import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import supabase from "../config/supabaseClient";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function CreateProfile() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const createProfilePromise = new Promise(async (resolve, reject) => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) throw new Error("No user logged in");

        const { error } = await supabase.from("profiles").upsert({
          id: user.id,
          username,
          updatedAt: new Date(),
        });

        if (error) throw error;

        localStorage.setItem("hasProfile", "true");
        resolve("Profile created successfully!");

        setTimeout(() => {
          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        }, 3000);
      } catch (error) {
        reject(error.message);
      } finally {
        setLoading(false);
      }
    });

    toast.promise(
      createProfilePromise,
      {
        loading: "Creating profile...",
        success: (message) => message,
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid w-full h-screen place-items-center bg-zinc-900"
    >
      <div className="flex flex-col justify-center w-full max-w-screen-lg py-12 mx-auto bg-zinc-900 sm:px-6 lg:px-8 text-zinc-300">
        <div className="text-center">
          <h2 className="mt-6 text-6xl font-semibold text-center text-white">
            Setup Your Username
          </h2>
          <p className="mt-5 text-lg">
            Please set up your username before starting
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoFocus={true}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-500 ease-in-out border shadow-sm appearance-none h-14 bg-zinc-900 border-zinc-800 focus:outline-none focus:ring-green-500 focus:border-2 focus:border-green-500 sm:text-sm placeholder:text-lg placeholder:text-zinc-500"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading || !username.trim()}
                  className="flex items-center justify-center w-full text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm h-14 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating..." : "Create Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
