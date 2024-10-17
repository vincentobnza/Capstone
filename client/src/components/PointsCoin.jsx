import React, { useState, useEffect, useCallback, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { CircularProgress } from "@nextui-org/react";

export default function PointsCoin() {
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const toastShownRef = useRef(false);

  const handleScroll = useCallback(() => {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastScrollTime;

    setPoints((prevPoints) => {
      let newPoints;
      if (timeDiff > 500) {
        // Slow scroll (> 0.5 seconds)
        newPoints = Math.min(prevPoints + 10, 100);
      } else if (timeDiff > 100) {
        // Fast scroll (0.1 to 0.5 seconds)
        newPoints = Math.min(prevPoints + 2, 100);
      } else {
        newPoints = prevPoints;
      }

      if (newPoints >= 100) {
        setIsLoading(false);
      }

      return newPoints;
    });

    setLastScrollTime(currentTime);
  }, [lastScrollTime]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = useCallback(() => {
    setPoints((prevPoints) => {
      if (prevPoints >= 100) {
        if (!toastShownRef.current) {
          toastShownRef.current = true;
          toast.success("You earned 5 points!", {
            duration: 2000,
            position: "top-center",
            style: {
              borderRadius: "5px",
              background: "#fff",
              color: "#161616",
              fontSize: "12px",
              fontWeight: "bold",
            },
          });
          setTimeout(() => {
            toastShownRef.current = false;
          }, 2000);
        }
        setIsLoading(true);
        return 0;
      }
      return prevPoints;
    });
  }, []);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      <Toaster />
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative cursor-pointer w-14 h-14 focus:outline-none"
        onClick={handleClick}
      >
        <div className="absolute inset-0 rounded-full focus:outline-none" />
        <div
          className={`absolute flex items-center justify-center rounded-full inset-1 focus:outline-none ${
            points === 100
              ? "bg-green-700 text-white animate-pulse border-2 border-green-400"
              : "bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-100 font-Ubuntu"
          }`}
        >
          <span className="text-sm font-bold">P</span>
        </div>
        {isLoading && (
          <CircularProgress
            size="lg"
            value={points}
            color="warning"
            aria-label="Loading progress"
            showValueLabel={false}
            strokeWidth={2}
            classNames={{
              svg: "w-full h-full",
              indicator: "stroke-[#16a34a] outline-none",
              track: "stroke-[#a1a1aa] opacity-30 outline-none",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
