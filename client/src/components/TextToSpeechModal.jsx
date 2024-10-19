import React, { useState, useEffect } from "react";
import { Button, Switch, Select, SelectItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useSpeech } from "@/context/TextToSpeech";
import { Speech } from "lucide-react";

const TextToSpeechModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSpeak, speaking, textRef, setSpeaking } = useSpeech();
  const [voice, setVoice] = useState("");
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleStop = () => {
    window.speechSynthesis.cancel();
  };

  const handleBackToBeginning = () => {
    handleStop();
    if (textRef.current) {
      const utterance = new SpeechSynthesisUtterance(
        textRef.current.textContent
      );
      if (voice) {
        utterance.voice = voices.find((v) => v.name === voice);
      }
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleVoiceChange = (e) => {
    setVoice(e.target.value);
    if (window.speechSynthesis.speaking) {
      handleStop();
      handleBackToBeginning();
    }
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 px-3 py-2 text-xs font-bold bg-white border outline-none dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-300"
      >
        Enable TTS
        <Speech size={20} />
      </button>
      {isOpen && (
        <motion.div
          drag
          dragMomentum={false}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed z-50 overflow-hidden bg-white rounded shadow-lg top-20 right-20 w-80 dark:bg-zinc-800"
        >
          <div className="relative p-4 overflow-hidden text-white cursor-move bg-gradient-to-br from-green-800 to-green-600">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2326/2326112.png"
              alt="Speech Icon"
              className="absolute bottom-0 w-14 -right-1 opacity-60"
            />
            <p className="text-xs font-semibold text-white/70">Settings</p>
            <h3 className="text-lg font-semibold">CodeScript Text to Speech</h3>
          </div>
          <div className="gap-6 p-4 text-xs font-bold">
            <Switch
              size="sm"
              checked={speaking}
              onChange={handleSpeak}
              color="success"
            >
              {speaking ? "Disable" : "Enable"} Text to Speech
            </Switch>
            <div className="flex flex-col gap-1 mt-7">
              <button
                onClick={handleStop}
                className="w-full py-3 border outline-none bg-zinc-200 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:opacity-70"
              >
                Stop
              </button>
              <button
                onClick={handleBackToBeginning}
                className="w-full py-3 border outline-none bg-zinc-200 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:opacity-70"
              >
                Start from the Beginning
              </button>
            </div>
            <div className="mt-5">
              <Select
                className="font-NotoSans"
                label="Voice Changer"
                placeholder="Select a voice"
                value={voice}
                onChange={handleVoiceChange}
              >
                {voices.map((v) => (
                  <SelectItem key={v.name} value={v.name}>
                    {v.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <button
              onClick={closeModal}
              className="w-full py-3 mt-5 text-white rounded dark:bg-green-600 hover:opacity-70 duration-400"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default TextToSpeechModal;
