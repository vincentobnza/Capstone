import { Search } from "lucide-react";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Switch,
  cn,
} from "@nextui-org/react";

export default function User_Leaderboard() {
  return (
    <div className="space-y-6">
      <Header />

      <LeaderboardTable />
    </div>
  );
}

const Header = () => {
  const [isSelected, setIsSelected] = React.useState(true);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Leaderboard</h1>
          <p>View all the top CodeScript Users</p>
        </div>
        <div className="w-[320px] flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-md">Enable Leaderboard Visibility</h1>
            <p className="text-xs text-zinc-400">
              Control leaderboard visibility for users.
            </p>
          </div>
          <div className="flex">
            <Switch
              isSelected={isSelected}
              onValueChange={setIsSelected}
              aria-label="Automatic updates"
              size="sm"
              color="success"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2">
        {/* INPUT SEARCH */}
        <div className="relative w-[350px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="size-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:border-transparent shadow hover:border-zinc-300"
            placeholder="Search"
          />
        </div>

        {/* SORT BY */}
      </div>
    </div>
  );
};

const LeaderboardTable = () => {
  return (
    <div className="w-full">
      <Table aria-label="Example empty table" className="bg-white">
        <TableHeader>
          <TableColumn>User ID</TableColumn>
          <TableColumn>Username</TableColumn>
          <TableColumn>Points</TableColumn>
          <TableColumn>Matches</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
      </Table>
    </div>
  );
};
