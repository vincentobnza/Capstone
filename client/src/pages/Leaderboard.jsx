import React, { useEffect } from "react";
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
import supabase from "../config/supabaseClient";
import { useUser } from "@/context/UserContext";
import PixelProfile from "../assets/pixel_profile.png";
import { Search, EllipsisVertical } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Leaderboard() {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 pb-10">
      <Header />
      <ListBox />
      <Ranking />
    </div>
  );
}

const Header = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-3 mb-10">
      <div className="flex flex-col gap-2 text-center items-center">
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
  const [userDetails, setUserDetails] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        setUserDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="w-full max-w-screen-md mx-auto grid md:grid-cols-2 gap-4 p-3">
      <div className="w-full p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex justify-start gap-5 relative">
        <div className="w-full flex flex-col">
          <motion.div
            initial={{ opacity: 0, top: -5 }}
            whileInView={{ opacity: 1, top: 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            className="absolute top-0 right-0 "
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/11166/11166574.png"
              alt="medal"
              className="size-20"
            />
          </motion.div>
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
                {userDetails.username}
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
            Overall Progress
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
            base: "border-1 border-zinc-500 dark:border-zinc-700",
            content:
              "text-center text-zinc-700 dark:text-white/90 text-xs font-semibold px-6",
          }}
          variant="bordered"
        >
          {userDetails.current_points} points
        </Chip>
      </div>
    </div>
  );
};

const Ranking = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("current_points", { ascending: false });
      if (error) {
        console.error("Error fetching users:", error);
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort filtered users by score in descending order
  const sortedUsers = [...filteredUsers].sort(
    (a, b) => b.current_points - a.current_points
  );

  return (
    <div className="w-full max-w-screen-lg mx-auto p-3 space-y-6">
      <div className="min-h-[70vh] p-6 bg-zinc-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 space-y-8">
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold">
                Global Ranking 💎
              </h1>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Aim for the top and stand on the global leaderboard
              </p>
            </div>

            <Dropdown placement="bottom-end" className="text-xs font-NotoSans">
              <DropdownTrigger>
                <EllipsisVertical
                  size={20}
                  className="text-zinc-500 dark:text-zinc-300 cursor-pointer"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="hide">Hide for now</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="mt-5 relative w-[350px] outline-none">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="size-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 h-10 bg-transparent border border-gray-200 dark:border-zinc-700 focus:outline-none dark:focus:outline-none shadow hover:border-zinc-300 placeholder:text-sm outline-none dark:hover:border-zinc-700"
              placeholder="Search user"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Table removeWrapper aria-label="Global ranking table">
          <TableHeader>
            <TableColumn>Rank</TableColumn>
            <TableColumn>Username</TableColumn>
            <TableColumn>Points</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No user is found"}>
            {sortedUsers.map((rankedUser, index) => (
              <TableRow key={rankedUser.id}>
                <TableCell>
                  <div className="size-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 grid place-items-center border dark:border-zinc-700 border-zinc-300">
                    <h1 className="text-xs font-extrabold text-zinc-500 dark:text-white">
                      {index + 1}
                    </h1>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-6">
                    <div className="bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 size-9 grid place-items-center cursor-pointer rounded-full overflow-hidden">
                      <img
                        src={PixelProfile || "/default_profile_url.jpg"}
                        alt={`${rankedUser.username}'s profile`}
                        className="size-5"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                        {rankedUser.username}
                      </h1>
                      <p className="text-xs text-zinc-500">
                        User ID: {rankedUser.id.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{rankedUser.current_points} points</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
