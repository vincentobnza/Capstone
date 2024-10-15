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
      className="w-full h-screen grid place-items-center bg-zinc-900"
    >
      <div className="w-full max-w-screen-lg mx-auto bg-zinc-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-zinc-300">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="text-center">
          <h2 className="mt-6 text-center text-6xl font-semibold text-white">
            Setup Your Username
          </h2>
          <p className="mt-5 text-lg">
            Please set up your username before starting
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                    className="appearance-none block w-full h-14 px-3 py-2 border bg-zinc-900 border-zinc-800 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-2 focus:border-green-500 sm:text-sm placeholder:text-lg placeholder:text-zinc-500 transition ease-in-out duration-500"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading || !username.trim()}
                  className="w-full flex h-14 justify-center items-center border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
