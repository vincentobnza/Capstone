import MonacoEditor from "@monaco-editor/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DebugChallenges() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-zinc-300 p-5 space-y-6">
      <Header />
      <DEBUG_EDITOR />
    </div>
  );
}

const Header = () => {
  return (
    <div className="mt-10 w-full max-w-screen-lg mx-auto space-y-1">
      <h3 className="text-xs font-bold text-green-600">
        CodeScript Debugging Challenge
      </h3>
      <h1 className="text-2xl font-semibold">Find the missing code 🧐</h1>
    </div>
  );
};

const DEBUG_EDITOR = () => {
  const [challengeData, setChallengeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { challenge } = useParams();
  const [code, setCode] = useState("");

  useEffect(() => {
    const fetchQuiz = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/challenges/${challenge}`
        );
        setChallengeData(data);
        setCode(challengeData.code);
      } catch (error) {
        console.error("Error fetching challenge:", error);
        setError("Failed to load challenge data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuiz();
  }, [challenge]);

  const handleEditorChange = (value) => {
    setChallengeData(value);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-screen-lg mx-auto h-[300px] flex items-center justify-center">
        <p>Loading challenge...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-screen-lg mx-auto h-[300px] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!challengeData) {
    return (
      <div className="w-full max-w-screen-lg mx-auto h-[300px] flex items-center justify-center">
        <p>No challenge data available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] max-w-screen-lg mx-auto grid md:grid-cols-2 gap-1">
      <div className="w-full border-4 border-zinc-800">
        <MonacoEditor
          className="h-full"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>

      {/* OUTPUT PANEL */}
      <div className="w-full h-full border-4 border-zinc-800 bg-zinc-900 relative">
        {/* RUN BUTTON */}
        <button className="absolute top-1 right-1 text-xs py-2 px-4 bg-green-700 text-white font-semibold">
          Test Code
        </button>
      </div>
    </div>
  );
};
