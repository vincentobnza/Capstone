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
import { useUser } from "@/context/UserContext";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";

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
  const { users } = useUser();

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.is_active).length;

  const data = [
    {
      name: "Total Users",
      value: totalUsers,
      icon: UserCheck,
      updateAt: "All time",
    },
    {
      name: "Active Users",
      value: activeUsers,
      icon: ShieldCheck,
      updateAt: "Currently",
    },
  ];

  return (
    <div className="w-full grid grid-cols-4 gap-2">
      {data.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="flex flex-col gap-2 p-4 border border-zinc-200 rounded-lg shadow-md shadow-zinc-100"
          >
            <div className="w-full flex justify-between">
              <h1 className="text-sm font-semibold">{item.name}</h1>
              <Icon size={20} />
            </div>
            <h1 className="text-3xl font-bold">{item.value}</h1>
            <p className="text-[12px] font-medium text-zinc-500">
              {item.updateAt}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const RecentlySignedIn = () => {
  const [recentUsers, setRecentUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentUsers = async () => {
      try {
        const { data, error } = await supabase
          .from("auth.users")
          .select("id, email, full_name, last_sign_in_at, is_active")
          .order("last_sign_in_at", { ascending: false })
          .limit(5);

        if (error) throw error;
        setRecentUsers(data);

        console.log(data);
      } catch (error) {
        console.error("Error fetching recent users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentUsers();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-col gap-1 mb-3">
        <h1 className="font-semibold">Recently Signed Ins</h1>
        <p className="text-xs text-zinc-500">This day</p>
      </div>

      <div className="w-full">
        <Table aria-label="Recently signed in users" className="bg-white">
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>Last Signed In</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody
            emptyContent={
              loading ? (
                <div>Loading...</div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Frown className="self-center" />
                  <h1 className="text-sm">No rows to display</h1>
                </div>
              )
            }
          >
            {recentUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.display_name || user.email}</TableCell>
                <TableCell>{user.last_sign_in_at}</TableCell>
                <TableCell>{user.is_active ? "Active" : "Inactive"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
