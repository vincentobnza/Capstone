import React from "react";
import { Search } from "lucide-react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { useUser } from "@/context/UserContext";
export default function User_Management() {
  return (
    <div className="space-y-6">
      <Header />
      <UsersTable />
    </div>
  );
}

const Header = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Users</h1>
      <p>View and manage CodeScript Users</p>

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

const UsersTable = () => {
  return (
    <div className="w-full">
      <Table aria-label="Example empty table" className="bg-white">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Last Signed In</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
      </Table>
    </div>
  );
};
