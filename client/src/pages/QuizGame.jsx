import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Copy } from "lucide-react";
import { useGame } from "@/context/GameContext";

export default function QuizGame() {
  const {
    roomId,
    setRoomId,
    connectedPlayers,
    gameStarted,
    attacks,
    createRoom,
    joinRoom,
    startGame,
    leaveGame,
  } = useGame();
  const [open, setIsOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-900">
      <Toaster />
      <SidePanel
        roomId={roomId}
        connectedPlayers={connectedPlayers}
        attacks={attacks}
        onStartGame={startGame}
        onLeaveGame={leaveGame}
      />
      <CreateRoomModal
        open={open}
        setIsOpen={setIsOpen}
        roomId={roomId}
        setRoomId={setRoomId}
        onCreateRoom={createRoom}
        onJoinRoom={joinRoom}
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
  <div className="relative h-full p-6 space-y-8 border-r w-60 bg-zinc-900 border-zinc-800 text-zinc-300">
    <div className="flex flex-col w-full gap-2 mt-4 text-left">
      <div className="flex justify-between w-full">
        <h3 className="text-xs font-semibold text-zinc-400">Room ID</h3>
        <Copy
          size={18}
          className="cursor-pointer text-zinc-500"
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

    <div className="flex flex-col w-full gap-2 mt-4 text-left">
      <div className="flex justify-between w-full">
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

    <div className="flex flex-col w-full gap-2 mt-4 text-left">
      <div className="flex justify-between w-full">
        <h3 className="text-xs font-semibold text-zinc-400">Attacks</h3>
      </div>

      <div className="flex flex-col gap-2 mt-3">
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

    <div className="absolute left-0 right-0 flex flex-col items-center justify-center gap-2 bottom-5">
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
    {!open && (
      <div className="fixed inset-0 z-50 grid bg-zinc-900/20 backdrop-blur place-items-center text-zinc-100">
        <div className="w-full max-w-md border rounded bg-zinc-800 border-zinc-700">
          <div className="w-full h-[90px] border-b border-zinc-700 flex flex-col gap-1 p-5">
            <h1 className="text-lg font-semibold">Set Up Your Game Room</h1>
            <p className="text-xs text-zinc-400">
              Enter a unique room ID to begin the game.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-5 w-ful">
            <label htmlFor="id" className="text-sm font-bold">
              Room ID
            </label>
            <input
              type="text"
              className="w-full h-12 px-4 border outline-none border-zinc-600 bg-zinc-800 placeholder:text-sm placeholder:text-zinc-400"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button
              className="self-end mt-2 text-xs font-bold underline text-zinc-200"
              onClick={() => setRoomId(Math.random().toString(36).substr(2, 8))}
            >
              Generate Random ID
            </button>

            <div className="flex justify-end gap-2 mt-5">
              <button
                className="px-3 py-2 mt-2 text-xs font-bold text-white bg-gray-600 rounded"
                onClick={onJoinRoom}
              >
                Join Room
              </button>
              <button
                className="px-3 py-2 mt-2 text-xs font-bold text-white bg-green-600 rounded"
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
