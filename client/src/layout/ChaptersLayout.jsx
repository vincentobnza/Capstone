import { Outlet, Link } from "react-router-dom";
import SpeechProvider from "@/context/TextToSpeech";
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
        <motion.main
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl px-8 mx-auto"
        >
          <SpeechProvider>
            <Outlet />
          </SpeechProvider>
        </motion.main>
      </div>
      <LessonNavigation />
    </div>
  );
}
