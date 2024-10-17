import { Outlet, Link } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import DynamicSidebar from "@/components/DynamicSidebar";
import LessonNavigation from "@/components/LessonNavigation";
import PointsCoin from "@/components/PointsCoin";
import { motion } from "framer-motion";
export default function ChaptersLayout() {
  return (
    <div className="flex mb-10">
      <PointsCoin />
      <DynamicSidebar />
      <div className="flex-1 ml-0 space-y-8 md:mx-64">
        <header className="max-w-5xl px-8 mx-auto ">
          <div className="self-start">
            <Link
              to="/content-map"
              className="flex items-center gap-2 text-sm text-md text-zinc-700 dark:text-zinc-400"
            >
              <IoReturnDownBackSharp size={20} /> Content Map
            </Link>
          </div>
        </header>
        <motion.main
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl px-8 mx-auto"
        >
          <Outlet />
        </motion.main>
      </div>
      <LessonNavigation />
    </div>
  );
}
