import { Outlet, Link } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import DynamicSidebar from "@/components/DynamicSidebar";
import LessonNavigation from "@/components/LessonNavigation";
import { motion } from "framer-motion";
export default function ChaptersLayout() {
  return (
    <div className="flex mb-10">
      <DynamicSidebar />
      <div className="flex-1 ml-0 md:mx-64 space-y-8">
        <header className="px-8 max-w-5xl mx-auto ">
          <div className="self-start">
            <Link
              to="/content-map"
              className="flex items-center gap-2 text-md text-zinc-700 dark:text-zinc-400 text-sm"
            >
              <IoReturnDownBackSharp size={20} /> Content Map
            </Link>
          </div>
        </header>
        <motion.main
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="px-8 max-w-5xl mx-auto"
        >
          <Outlet />
        </motion.main>
      </div>
      <LessonNavigation />
    </div>
  );
}
