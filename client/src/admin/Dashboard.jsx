import React from "react";
import { UserCheck, ShieldCheck, Frown } from "lucide-react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-2 space-y-6">
      <Header />
      <DataStats />

      <div className="w-full grid grid-cols-2 gap-2">
        <RecentlySignedIn />
      </div>
    </div>
  );
}

const Header = () => {
  // DATE NOW
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[12px] font-semibold self-start">{formattedDate}</p>
      <h1 className="text-2xl font-semibold">System's Dashboard</h1>
    </div>
  );
};

const DataStats = () => {
  const data = [
    {
      name: "Total Users",
      value: 0,
      icon: UserCheck,
      updateAt: "All time",
    },

    {
      name: "Active Now",
      value: 0,
      icon: ShieldCheck,
      updateAt: "Since last month",
    },
  ];
  return (
    <div className="w-full grid grid-cols-4 gap-2">
      {data.map((data, idx) => {
        const Icon = data.icon;
        return (
          <div
            key={idx}
            className="flex flex-col gap-2 p-4 border border-zinc-200 rounded-lg shadow-md shadow-zinc-100"
          >
            <div className="w-full flex justify-between">
              <h1 className="text-sm font-semibold">{data.name}</h1>
              <Icon size={20} />
            </div>
            <h1 className="text-3xl font-bold">+ {data.value}</h1>
            <p className="text-[12px] font-medium text-zinc-500">
              {data.updateAt}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const RecentlySignedIn = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-col gap-1  mb-3">
        <h1 className="font-semibold">Recently Signed Ins</h1>
        <p className="text-xs text-zinc-500">This day</p>
      </div>

      <div className="w-full">
        <Table aria-label="Example empty table" className="bg-white">
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>Last Signed In</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody
            emptyContent={
              <div className="flex flex-col gap-2">
                <Frown className="self-center" />
                <h1 className="tex-sm">No rows to display</h1>
              </div>
            }
          >
            {[]}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
