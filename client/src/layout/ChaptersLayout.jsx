import { Outlet, Link } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import DynamicSidebar from "@/components/DynamicSidebar";
export default function ChaptersLayout() {
  return (
    <div className="flex mb-10">
      <DynamicSidebar />
      <div className="flex-1 ml-0 md:ml-64 space-y-8">
        <header className="max-w-5xl mx-auto ">
          <div>
            <Link
              to="/learn-js"
              className="flex items-center gap-2 text-md text-zinc-700 dark:text-zinc-400 text-sm"
            >
              <IoReturnDownBackSharp size={20} /> Timeline
            </Link>
          </div>
        </header>
        <main className="max-w-5xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
