import React, { createContext, useContext, useState, useEffect } from "react";
import supabase from "@/config/supabaseClient";
// Initialize Supabase client

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
    fetchCurrentUser();
  }, []);

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

  const fetchCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching current user:", error);
      } else {
        setCurrentUser(data);
      }
    }
  };

  const fetchUserRank = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("id")
      .order("score", { ascending: false });

    if (error) {
      console.error("Error fetching user rank:", error);
      return -1;
    }

    const rank = data.findIndex((user) => user.id === userId) + 1;
    return rank;
  };

  const insertScore = async (userId, score) => {
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: userId, score }, { onConflict: "id" });

    if (error) {
      console.error("Error inserting score:", error);
    } else {
      fetchUsers();
      fetchCurrentUser();
    }
  };

  const updateScore = async (userId, score) => {
    const { error } = await supabase
      .from("profiles")
      .update({ score })
      .eq("id", userId);

    if (error) {
      console.error("Error updating score:", error);
    } else {
      fetchUsers();
      fetchCurrentUser();
    }
  };

  const updateProgress = async (userId, progress) => {
    const { error } = await supabase
      .from("profiles")
      .update({ progress })
      .eq("id", userId);

    if (error) {
      console.error("Error updating progress:", error);
    } else {
      fetchCurrentUser();
    }
  };

  const deleteUser = async (userId) => {
    const { error } = await supabase.from("profiles").delete().eq("id", userId);

    if (error) {
      console.error("Error deleting user:", error);
    } else {
      fetchUsers();
      if (currentUser && currentUser.id === userId) {
        setCurrentUser(null);
      }
    }
  };

  const value = {
    users,
    currentUser,
    fetchUsers,
    fetchUserRank,
    insertScore,
    updateScore,
    updateProgress,
    deleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
