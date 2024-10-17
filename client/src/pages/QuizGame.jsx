import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Copy } from "lucide-react";
import supabase from "../config/supabaseClient";

// Initialize Supabase client

export default function QuizGame() {
  const [open, setIsOpen] = useState(true);
  const [roomId, setRoomId] = useState("");
  const [connectedPlayers, setConnectedPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [attacks, setAttacks] = useState([]);

  useEffect(() => {
    if (roomId) {
      const channel = supabase.channel(`room:${roomId}`);

      channel
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "rooms",
            filter: `id=eq.${roomId}`,
          },
          (payload) => {
            if (payload.new) {
              setConnectedPlayers(payload.new.players);
            }
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [roomId]);

  const handleCreateRoom = async () => {
    const { data, error } = await supabase.from("rooms").insert({
      id: roomId,
      players: [{ id: "current_user_id", name: "Current User" }],
    });

    if (error) {
      toast.error("Failed to create room", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      });
    } else {
      setIsOpen(false);
      toast.success("Room created successfully!", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      });
    }
  };

  const handleJoinRoom = async () => {
    const { data, error } = await supabase
      .from("rooms")
      .select("players")
      .eq("id", roomId)
      .single();

    if (error) {
      toast.error("Failed to find room", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      });
      return;
    }

    const updatedPlayers = [
      ...data.players,
      { id: "current_user_id", name: "Current User" },
    ];

    const { error: updateError } = await supabase
      .from("rooms")
      .update({ players: updatedPlayers })
      .eq("id", roomId);

    if (updateError) {
      toast.error("Failed to join room", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      });
    } else {
      setIsOpen(false);
      toast.success("Joined room successfully!", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      });
    }
  };

  const handleStartGame = () => {
    setGameStarted(true);
    // Implement game start logic here
  };

  const handleLeaveGame = async () => {
    const { data, error } = await supabase
      .from("rooms")
      .update({
        players: connectedPlayers.filter(
          (player) => player.id !== "current_user_id"
        ),
      })
      .eq("id", roomId);

    if (error) {
      toast.error("Failed to leave room", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      });
    } else {
      setRoomId("");
      setIsOpen(true);
      toast.success("Left room successfully!", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.5px",
        },
      });
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-900">
      <Toaster />
      <SidePanel
        roomId={roomId}
        connectedPlayers={connectedPlayers}
        attacks={attacks}
        onStartGame={handleStartGame}
        onLeaveGame={handleLeaveGame}
      />
      <CreateRoomModal
        open={open}
        setIsOpen={setIsOpen}
        roomId={roomId}
        setRoomId={setRoomId}
        onCreateRoom={handleCreateRoom}
        onJoinRoom={handleJoinRoom}
      />
    </div>
  );
}

const SidePanel = ({
  roomId,
  connectedPlayers,
  attacks,
  onStartGame,
  onLeaveGame,
}) => (
  <div className="relative h-full w-60 bg-zinc-900 border-r border-zinc-800 p-6 text-zinc-300 space-y-8">
    <div className="w-full mt-4 flex flex-col gap-2 text-left">
      <div className="w-full flex justify-between">
        <h3 className="text-xs font-semibold text-zinc-400">Room ID</h3>
        <Copy
          size={18}
          className="text-zinc-500 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(roomId);
            toast.success("Room ID copied!", {
              style: {
                borderRadius: "5px",
                background: "#333",
                color: "#fff",
                fontSize: "12px",
                letterSpacing: "0.5px",
              },
            });
          }}
        />
      </div>
      <h1 className="text-lg font-semibold text-zinc-100">{roomId}</h1>
    </div>

    <div className="w-full mt-4 flex flex-col gap-2 text-left">
      <div className="w-full flex justify-between">
        <h3 className="text-xs font-semibold text-zinc-400">
          Connected Players
        </h3>
      </div>
      <div className="text-lg font-semibold text-zinc-100">
        {connectedPlayers.map((player) => (
          <div key={player.id}>{player.name}</div>
        ))}
      </div>
    </div>

    <div className="w-full mt-4 flex flex-col gap-2 text-left">
      <div className="w-full flex justify-between">
        <h3 className="text-xs font-semibold text-zinc-400">Attacks</h3>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        {attacks.map((attack, index) => (
          <div
            key={index}
            className="w-full h-[100px] border border-zinc-800 flex flex-col gap-2 p-3"
          >
            {attack}
          </div>
        ))}
        {attacks.length === 0 && (
          <div className="w-full h-[100px] border border-zinc-800 flex items-center justify-center text-zinc-500">
            No attacks yet
          </div>
        )}
      </div>
    </div>

    <div className="absolute bottom-5 left-0 right-0 flex flex-col gap-2 justify-center items-center">
      <button
        className="w-[190px] text-xs font-semibold py-2 px-3 bg-green-900 border border-green-600 rounded text-white"
        onClick={onStartGame}
      >
        Start Game
      </button>
      <button
        className="w-[190px] text-xs font-semibold py-2 px-3 bg-zinc-900 border border-zinc-800 rounded text-white"
        onClick={onLeaveGame}
      >
        Leave Game
      </button>
    </div>
  </div>
);

const CreateRoomModal = ({
  open,
  setIsOpen,
  roomId,
  setRoomId,
  onCreateRoom,
  onJoinRoom,
}) => (
  <>
    {open && (
      <div className="fixed inset-0 bg-zinc-900/20 backdrop-blur grid place-items-center z-50 text-zinc-100">
        <div className="w-full max-w-md  bg-zinc-800 border border-zinc-700 rounded">
          <div className="w-full h-[90px] border-b border-zinc-700 flex flex-col gap-1 p-5">
            <h1>Set Up Your Game Room</h1>
            <p className="text-xs text-zinc-400">
              Enter a unique room ID to begin the game.
            </p>
          </div>
          <div className="w-ful flex flex-col gap-2 p-5">
            <label htmlFor="id" className="text-sm font-bold">
              Room ID
            </label>
            <input
              type="text"
              className="w-full h-12 border border-zinc-600 bg-zinc-800 px-4 placeholder:text-sm placeholder:text-zinc-400 outline-none"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button
              className="text-xs font-bold text-zinc-200 self-end underline mt-2"
              onClick={() => setRoomId(Math.random().toString(36).substr(2, 8))}
            >
              Generate Random ID
            </button>

            <div className="mt-5 flex justify-end gap-2">
              <button
                className="text-xs font-bold py-2 px-3 bg-gray-600 text-white mt-2 rounded"
                onClick={onJoinRoom}
              >
                Join Room
              </button>
              <button
                className="text-xs font-bold py-2 px-3 bg-green-600 text-white mt-2 rounded"
                onClick={onCreateRoom}
              >
                Create Room
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
