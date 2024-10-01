import React from "react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

export default function Leaderboard() {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 pb-10 space-y-2">
      <Header />

      <ListBox />

      <Ranking />
    </div>
  );
}

const Header = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-3">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Leaderboard</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          View points and ranking of CodeScript Users.
        </p>
      </div>
    </div>
  );
};

const ListBox = () => {
  const { user } = useAuth();
  return (
    <div className="w-full max-w-screen-lg mx-auto grid md:grid-cols-3 gap-2 p-3">
      <div className="w-full p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex justify-start gap-5 relative">
        <div className="w-full flex flex-col">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11166/11166574.png"
            alt="medal"
            className="absolute top-0 right-0 size-20"
          />
          <div className="w-full flex gap-5">
            <div className="size-12 rounded-full p-[2px] bg-zinc-50 dark:bg-zinc-600 relative">
              <img
                src={user.user_metadata.avatar_url || "default_profile_url"}
                alt="profile"
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-md font-semibold text-zinc-700 dark:text-zinc-100">
                {user.user_metadata.name}
              </h1>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                @Vincent
              </p>
            </div>
          </div>

          <div className="mt-16 w-full grid grid-cols-2 gap-2">
            <div className="p-5 flex flex-col gap-2 rounded border border-zinc-300 dark:border-zinc-700 text-left">
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Quiz Completed
              </p>

              {/* QUIZ COMPLETED VALUE */}
              <h1 className="text-4xl text-orange-500 font-bold">0</h1>
            </div>
            <div className="p-5 flex flex-col gap-2 rounded border border-zinc-300 dark:border-zinc-700 text-left">
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Matches
              </p>

              {/* QUIZ COMPLETED VALUE */}
              <h1 className="text-4xl text-green-500 font-bold">12</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex justify-center flex-col items-center space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-md text-zinc-800 dark:text-zinc-50 font-semibold">
            Overall Progress 🔥
          </h1>
        </div>

        <CircularProgress
          classNames={{
            svg: "w-28 h-28 drop-shadow-md",
            indicator: "stroke-orange-500",
            track: "stroke-zinc-300 dark:stroke-white/10 ",
            value: "text-xl font-bold text-zinc-800 dark:text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
        <Chip
          classNames={{
            base: "border-1 border-zinc-500 dark:border-white/30",
            content: "text-zinc-700 dark:text-white/90 text-xs font-semibold",
          }}
          variant="bordered"
        >
          2800 Data points
        </Chip>
      </div>

      <div className="w-full p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 "></div>
    </div>
  );
};

const Ranking = () => {
  const { user } = useAuth();
  return (
    <div className="w-full max-w-screen-lg  mx-auto p-3 space-y-6">
      <div className="min-h-[70vh] p-5 bg-zinc-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold">
            Global Ranking 💎
          </h1>
        </div>

        <Table removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Rank</TableColumn>
            <TableColumn>Username</TableColumn>
            <TableColumn>Quiz Completed</TableColumn>
            <TableColumn>Points</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>
                <div className="size-8 rounded-lg bg-zinc-700 grid place-items-center border border-zinc-500">
                  <h1 className="text-xs font-bold text-white">1</h1>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="size-8 grid place-items-center cursor-pointe rounded-full overflow-hidden cursor-pointer">
                    <img
                      src={
                        user.user_metadata.avatar_url || "default_profile_url"
                      }
                      alt="default profile"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1>Vincenxxx05</h1>
                    <p className="text-xs text-zinc-500">ID: 67645tsgt7U</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>10</TableCell>
              <TableCell>3000 points</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
