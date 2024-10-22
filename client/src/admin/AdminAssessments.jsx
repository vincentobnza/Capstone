import React from "react";

export default function AdminAssessments() {
  return (
    <div className="flex flex-col w-full gap-2 space-y-6">
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <div className="flex-1">
      <h1>Dashboard</h1>
    </div>
  );
};
