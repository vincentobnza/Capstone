import React, { useState, useCallback, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import { Button } from "@nextui-org/react";
import { Play, Trash2, ArrowDownToLine, Flame } from "lucide-react";
import useFetchAssessments from "@/api/assessmentsRequest";
import Loading from "@/components/loading";

export default function CodeScript() {
  const { assessments, loading } = useFetchAssessments();
  const editorRef = useRef(null);

  const [code, setCode] = useState("//Click assessments to begin");
  const [output, setOutput] = useState("");
  const [currentAssessment, setCurrentAssessment] = useState(null);
  const [completedAssessments, setCompletedAssessments] = useState([]);
  const [error, setError] = useState("");

  const handleEditorChange = useCallback((value) => {
    if (value !== undefined) {
      setCode(value);
    }
  }, []);

  const runCode = useCallback(() => {
    let outputBuffer = "";
    const mockConsole = {
      log: (...args) => {
        outputBuffer += args.join(" ") + "\n";
      },
      error: (...args) => {
        outputBuffer += "Error: " + args.join(" ") + "\n";
      },
    };

    try {
      const sandbox = { console: mockConsole };
      const runnable = new Function(
        ...Object.keys(sandbox),
        `${code}\n//# sourceURL=user-code.js`
      );
      runnable.call(null, ...Object.values(sandbox));
      setOutput(outputBuffer.trim());
      setError(null);

      // Validate the output against the expected output
      if (outputBuffer.trim() === currentAssessment?.expectedOutput) {
        if (!completedAssessments.includes(currentAssessment.id)) {
          setCompletedAssessments((prev) => [...prev, currentAssessment.id]);
          setOutput((prevOutput) => `${prevOutput}\n\nAssessment Passed! 🎉`);
        }
      } else {
        setOutput(
          (prevOutput) =>
            `${prevOutput}\n\nAssessment Failed. Please try again.`
        );
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setError(error);
    }
  }, [code, currentAssessment, completedAssessments]);

  const clearOutput = useCallback(() => {
    setOutput("");
  }, []);

  const handleSaveFile = useCallback(async () => {
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: `assessment_${currentAssessment.id}.js`,
        types: [
          {
            description: "JavaScript Files",
            accept: {
              "text/javascript": [".js"],
            },
          },
        ],
      });
      const writableStream = await fileHandle.createWritable();
      await writableStream.write(code);
      await writableStream.close();
    } catch (err) {
      console.error("File saving failed:", err);
    }
  }, [currentAssessment, code]);

  const handleFormatCode = useCallback(() => {
    if (editorRef.current) {
      editorRef.current.getAction("editor.action.formatDocument").run();
    }
  }, []);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleAssessmentChange = (assessmentId) => {
    const newAssessment = assessments.find((a) => a.id === assessmentId);
    setCurrentAssessment(newAssessment);
    setCode(`// ${newAssessment.description}\n\n${newAssessment.initialCode}`);
    clearOutput();
  };

  if (loading) {
    return (
      <Loading
        title="Loading..."
        text="Please wait while we prepare your assessments."
      />
    );
  }

  return (
    <div className="flex w-full h-screen font-Inter bg-zinc-900">
      <AssessmentSidePanel
        assessments={assessments}
        currentAssessment={currentAssessment}
        completedAssessments={completedAssessments}
        onAssessmentChange={handleAssessmentChange}
      />
      <div className="flex flex-col flex-1 ml-64">
        <Header onSaveFile={handleSaveFile} />
        <div className="flex flex-1">
          <div className="flex flex-col flex-1">
            <ToolBar onRun={runCode} onFormat={handleFormatCode} />
            <div className="flex-1 overflow-hidden">
              <MonacoEditor
                className="w-full h-full"
                language="javascript"
                theme="vs-dark"
                value={code}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  wordWrap: "on",
                  wrappingStrategy: "advanced",
                }}
              />
            </div>
          </div>
          <OutputPanel output={output} onClear={clearOutput} error={error} />
        </div>
      </div>
    </div>
  );
}

const Header = ({ onSaveFile }) => (
  <header className="flex items-center justify-between w-full p-4 border-b bg-[#1E1E1E] border-zinc-800">
    <div className="flex flex-col gap-1">
      <h1 className="text-lg font-black text-transparent bg-gradient-to-br from-green-500 to-green-600 dark:to-green-800 bg-clip-text font-Orbitron">
        CodeScript
      </h1>
      <p className="text-xs text-zinc-400">JavaScript Assessment Platform</p>
    </div>
    <Button
      size="sm"
      radius="none"
      onClick={onSaveFile}
      className="text-white bg-zinc-700"
      endContent={<ArrowDownToLine size={16} />}
    >
      Save File
    </Button>
  </header>
);

const ToolBar = ({ onRun, onFormat }) => (
  <div className="flex items-center justify-end p-2 border-b bg-[#1E1E1E] border-zinc-800">
    <div className="flex gap-1">
      <Button
        radius="none"
        size="sm"
        onClick={onFormat}
        className="font-semibold text-white bg-zinc-700"
      >
        <Flame size={16} className="mr-2" />
        Format Code
      </Button>
      <Button
        radius="none"
        size="sm"
        onClick={onRun}
        className="font-semibold text-white bg-green-600"
      >
        <Play size={16} className="mr-2" /> Run Code
      </Button>
    </div>
  </div>
);

const OutputPanel = ({ output, onClear, error }) => (
  <div className="flex flex-col w-1/3 border-l bg-[#1E1E1E] border-zinc-800">
    <div className="flex items-center justify-between p-1 border-b border-zinc-800">
      <h2 className="text-sm font-semibold text-zinc-300">Console</h2>
      <Button
        onClick={onClear}
        isIconOnly
        className="bg-transparent text-zinc-400"
      >
        <Trash2 size={20} />
      </Button>
    </div>
    <div
      className={`flex-1 p-4 overflow-auto font-mono text-sm whitespace-pre-wrap ${
        error ? "text-amber-500" : "text-green-500"
      } font-semibold`}
    >
      {output}
    </div>
  </div>
);

const AssessmentSidePanel = ({
  currentAssessment,
  completedAssessments,
  onAssessmentChange,
  assessments,
}) => {
  const totalPoints = assessments.reduce(
    (sum, assessment) => sum + assessment.points,
    0
  );
  const earnedPoints = assessments
    .filter((assessment) => completedAssessments.includes(assessment.id))
    .reduce((sum, assessment) => sum + assessment.points, 0);

  return (
    <div className="flex flex-col w-64 fixed inset-y-0 left-0 top-0 border-r bg-[#1E1E1E] border-zinc-800">
      <div className="p-5">
        <div className="flex flex-col gap-1 font-semibold">
          <h3 className="text-xs text-zinc-400">JavaScript Assessments</h3>
          <h3 className="text-lg font-semibold text-zinc-100">
            Assessments for You
          </h3>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div
          className="p-5 h-[450px] overflow-scroll"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {assessments.map((assessment) => (
            <AssessmentCard
              key={assessment.id}
              assessment={assessment}
              isActive={currentAssessment?.id === assessment.id}
              isCompleted={completedAssessments.includes(assessment.id)}
              onClick={() => onAssessmentChange(assessment.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-4 border-t border-zinc-800">
        <p className="text-sm text-zinc-400">
          {earnedPoints}/{totalPoints} Points
        </p>
        <p className="text-sm text-zinc-400">
          {completedAssessments.length} Completed
        </p>
      </div>
    </div>
  );
};

const AssessmentCard = ({ assessment, isActive, isCompleted, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 h-16 transition-colors  relative mb-2 
      ${isActive ? "bg-green-500/20" : "bg-zinc-800"} 
      ${isCompleted ? "border-l-4 border-green-600" : ""}
    `}
  >
    {isCompleted && (
      <p
        className={`px-3 py-[1px] rounded-full absolute -top-2 -right-2 text-[10px] font-semibold transition ease duration-300 ${
          isActive
            ? "bg-white border border-green-800 text-black"
            : "bg-green-500/20 border border-green-800 text-white"
        }`}
      >
        Completed
      </p>
    )}
    <h4 className="text-sm font-semibold text-zinc-100">{assessment.title}</h4>
  </div>
);
