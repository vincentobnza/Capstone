import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import supabase from "../config/supabaseClient";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [roomId, setRoomId] = useState("");
  const [connectedPlayers, setConnectedPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [attacks, setAttacks] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data: { user } = {} } = await supabase.auth.getUser();
      if (user) {
        setCurrentUser(user);
      }
    };
    fetchCurrentUser();
  }, []);

  const createRoom = async () => {
    const newRoomId = roomId || Math.random().toString(36).substr(2, 8);
    const { data, error } = await supabase.from("rooms").insert({
      id: newRoomId,
      player1_id: currentUser.id,
    });
  };
};

const joinRoom = async () => {
  const { data, error } = await supabase
    .from("rooms")
    .update({ player2_id: "current_user_id" }) // Replace with actual user ID
    .eq("id", roomId)
    .single();

  if (error) {
    console.error("Error joining room:", error);
    toast.error("Failed to join room");
  } else if (data && data.length > 0) {
    toast.success("Joined room successfully!");
    setConnectedPlayers([
      { id: data.player1_id, name: "Player 1" },
      { id: currentUser.id, name: "Player 2" },
    ]);
  } else {
    toast.error("Room not found");
  }

  return (
    <GameContext.Provider
      value={{
        roomId,
        connectedPlayers,
        gameStarted,
        attacks,
        createRoom,
        joinRoom,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
