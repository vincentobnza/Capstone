import React from "react";
import { UserCheck, ShieldCheck, Frown, Container } from "lucide-react";
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
import useFetchAssessments from "@/api/assessmentsRequest";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full gap-2 space-y-6">
      <Header />

      <DataStats />
    </div>
  );
}

const Header = () => {
  return (
    <div className="flex-1">
      <h1 className="font-semibold">Dashboard</h1>
    </div>
  );
};

const DataStats = () => {
  const { users } = useUser();

  const { assessments, loading } = useFetchAssessments();

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
    {
      name: "Total Assessments",
      value: assessments.length,
      icon: Container,
      updateAt: "Currently",
    },
  ];

  return (
    <div className="grid w-full grid-cols-3 gap-2">
      {data.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="flex flex-col gap-2 p-6 border rounded-lg shadow-md border-zinc-200 shadow-zinc-100"
          >
            <div className="flex justify-between w-full">
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
