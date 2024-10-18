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
import { Search, EllipsisVertical, ArrowUpDown } from "lucide-react";
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
    <div className="pb-10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
      <Header />
      <ListBox />
      <Ranking />
    </div>
  );
}

const Header = () => {
  return (
    <div className="w-full max-w-screen-lg p-3 mx-auto mb-10">
      <div className="flex flex-col items-center gap-2 text-center">
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
    <div className="grid w-full max-w-screen-md gap-4 p-3 mx-auto md:grid-cols-2">
      <div className="relative flex justify-start w-full gap-5 p-5 border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
        <div className="flex flex-col w-full">
          <motion.div
            initial={{ opacity: 0, top: -5 }}
            whileInView={{ opacity: 1, top: 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            className="absolute top-0 right-2 "
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/7645/7645279.png"
              alt="medal"
              className="size-20"
            />
          </motion.div>
          <div className="flex w-full gap-5">
            <div className="size-12 rounded-full p-[2px] bg-zinc-50 dark:bg-zinc-800 relative">
              <img
                src={user.user_metadata.avatar_url || "default_profile_url"}
                alt="profile"
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-md text-zinc-700 dark:text-zinc-100">
                {user.user_metadata.name}
              </h1>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {userDetails.username}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 grid w-full grid-cols-2 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-col gap-2 p-5 text-center border-r border-zinc-200 dark:border-zinc-700">
              <p className="text-[11px] text-zinc-500 dark:text-zinc-200 font-semibold">
                Quiz Completed
              </p>

              {/* QUIZ COMPLETED VALUE */}
              <h1 className="text-5xl font-bold text-orange-400">0</h1>
            </div>
            <div className="flex flex-col gap-2 p-5 text-center">
              <p className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-200">
                Rank
              </p>

              {/* QUIZ COMPLETED VALUE */}
              <h1 className="text-5xl font-bold text-green-400">2</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-5 space-y-6 border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-md text-zinc-800 dark:text-zinc-50">
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
          value={50}
          strokeWidth={4}
          showValueLabel={true}
        />
        <Chip
          classNames={{
            base: "border-none",
            content:
              "text-center text-zinc-700 dark:text-white/90 text-xs font-semibold px-6 py-2",
          }}
          variant="bordered"
        >
          Current Points:{" "}
          <span className="ml-2 font-bold text-orange-500">
            {userDetails.current_points} points
          </span>
        </Chip>
      </div>
    </div>
  );
};

const Ranking = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isHidden, setIsHidden] = useState(() => {
    const stored = localStorage.getItem("leaderboardHidden");
    return stored ? JSON.parse(stored) : false;
  });
  const [sortAscending, setSortAscending] = useState(false);

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

  useEffect(() => {
    localStorage.setItem("leaderboardHidden", JSON.stringify(isHidden));
  }, [isHidden]);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortAscending
      ? a.current_points - b.current_points
      : b.current_points - a.current_points
  );

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const toggleSort = () => {
    setSortAscending(!sortAscending);
  };

  return (
    <div className="w-full max-w-screen-lg p-3 mx-auto space-y-6">
      <div className="min-h-[70vh] p-6 bg-zinc-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 space-y-8">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-zinc-800 dark:text-zinc-100">
                Global Ranking 💎
              </h1>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Aim for the top and stand on the global leaderboard
              </p>
            </div>

            <Dropdown
              placement="bottom-end"
              className="text-xs font-NotoSans"
              shadow="none"
              radius="none"
            >
              <DropdownTrigger>
                <EllipsisVertical
                  size={20}
                  className="cursor-pointer text-zinc-500 dark:text-zinc-300"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                  key="visibility"
                  className="text-xs"
                  onPress={toggleVisibility}
                >
                  {isHidden ? "View leaderboard" : "Hide for now"}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          {!isHidden && (
            <>
              <div className="flex items-center gap-2 mt-5">
                <div className="relative w-[400px]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="text-gray-400 size-4" />
                  </div>
                  <input
                    type="text"
                    className="w-full h-10 pl-10 pr-4 bg-transparent border border-gray-200 shadow outline-none dark:border-zinc-700 focus:outline-none dark:focus:outline-none hover:border-zinc-300 placeholder:text-sm dark:hover:border-zinc-700"
                    placeholder="Search user"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  onClick={toggleSort}
                  className="h-10 px-3 bg-transparent border border-gray-200 shadow dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 focus:outline-none dark:shadow-none"
                  title={
                    sortAscending
                      ? "Sort Highest to Lowest"
                      : "Sort Lowest to Highest"
                  }
                >
                  <ArrowUpDown className="text-gray-400 size-4" />
                </button>
              </div>
              <Table
                removeWrapper
                aria-label="Global ranking table"
                className="mt-5"
              >
                <TableHeader>
                  <TableColumn>Rank</TableColumn>
                  <TableColumn>Username</TableColumn>
                  <TableColumn className="text-center">Points</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No user is found"}>
                  {sortedUsers.map((rankedUser, index) => (
                    <TableRow key={rankedUser.id}>
                      <TableCell>
                        <div
                          className={`size-8 rounded-lg ${
                            index === 0
                              ? "bg-green-900/50 text-green-500 shadow-xl shadow-green-900/60 animate-pulse"
                              : "bg-zinc-200 dark:bg-zinc-800"
                          } grid place-items-center border ${
                            index === 0
                              ? "border-green-600"
                              : "dark:border-zinc-700 border-zinc-300"
                          }`}
                        >
                          <h1
                            className={`text-xs font-extrabold ${
                              index === 0
                                ? "text-"
                                : "text-zinc-500 dark:text-white"
                            }`}
                          >
                            {index + 1}
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-6">
                          <div className="grid overflow-hidden border rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 size-9 place-items-center">
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
                      <TableCell className="font-bold text-center text-green-600 dark:text-green-500">
                        + {rankedUser.current_points} points
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
          {isHidden && (
            <div className="h-[300px] grid place-items-center">
              <p className="mt-4 text-sm text-center text-zinc-500 dark:text-zinc-400">
                The leaderboard is currently hidden. Click "View leaderboard" to
                show it again.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
