import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="w-full h-12 dark:bg-gradient-to-b dark:from-blue-950 dark:to-zinc-900 border dark:border-zinc-800 grid place-items-center p-2">
      <div className="flex items-center gap-3">
        <h1 className="text-xs">
          🔥 Master JavaScript with
          <b className="text-zinc-800 dark:text-sky-400"> 50+</b> Essential
          Topics – All in One Place
        </h1>

        <Link
          to="/learn-js"
          className="py-[2px] px-4 rounded-full text-xs border dark:border-blue-400 text-blue-400"
        >
          Try it now
        </Link>
      </div>
    </div>
  );
}
