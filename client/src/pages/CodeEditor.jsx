import React, { useState, useCallback, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Progress,
} from "@nextui-org/react";
import { Play, Trash2, ArrowDownToLine, Flame } from "lucide-react";

const assessments = [
  {
    id: 1,
    title: "Assessment 1",
    description:
      "Print 'Hello, World!' to the console. Output should be: 'Hello, World!'.",
    initialCode: "// Your code here\n",
    expectedOutput: "Hello, World!",
    points: 10,
  },
  {
    id: 2,
    title: "Assessment 2",
    description:
      "Calculate the sum of numbers from 1 to 10. Output should be: 55.",
    initialCode: "// Your code here\n",
    expectedOutput: "55",
    points: 20,
  },
  {
    id: 3,
    title: "Assessment 3",
    description: "Calculate the factorial of 5. Output should be: 120.",
    initialCode: "// Your code here\n",
    expectedOutput: "120",
    points: 25,
  },
  {
    id: 4,
    title: "Assessment 4",
    description:
      "Reverse the string 'JavaScript'. Output should be: 'tpircSavaJ'.",
    initialCode: "// Your code here\n",
    expectedOutput: "tpircSavaJ",
    points: 15,
  },
  {
    id: 5,
    title: "Assessment 5",
    description:
      "Check if the number 121 is a palindrome. Output should be: true.",
    initialCode: "// Your code here\n",
    expectedOutput: "true",
    points: 20,
  },
];

export default function CodeScript() {
  const [code, setCode] = useState(assessments[0].initialCode);
  const [output, setOutput] = useState("");
  const [currentAssessment, setCurrentAssessment] = useState(assessments[0]);
  const [completedAssessments, setCompletedAssessments] = useState([]);
  const editorRef = useRef(null);

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

      if (outputBuffer.trim() === currentAssessment.expectedOutput) {
        if (!completedAssessments.includes(currentAssessment.id)) {
          setCompletedAssessments([
            ...completedAssessments,
            currentAssessment.id,
          ]);
        }
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
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

  return (
    <div className="flex w-full h-screen font-NotoSans bg-zinc-900">
      <AssessmentSidePanel
        assessments={assessments}
        currentAssessment={currentAssessment}
        completedAssessments={completedAssessments}
        onAssessmentChange={handleAssessmentChange}
      />
      <div className="flex flex-col flex-1">
        <Header onSaveFile={handleSaveFile} />
        <div className="flex flex-1">
          <div className="flex flex-col flex-1">
            <ToolBar onRun={runCode} onFormat={handleFormatCode} />
            <div className="flex-1">
              <MonacoEditor
                className="h-[80vh]"
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
                }}
              />
            </div>
          </div>
          <OutputPanel output={output} onClear={clearOutput} />
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

const OutputPanel = ({ output, onClear }) => (
  <div className="h-full flex flex-col w-1/3 border-l bg-[#1E1E1E] border-zinc-800">
    <div className="flex items-center justify-between p-2 border-b border-zinc-700">
      <h2 className="text-sm font-semibold text-zinc-300">Console</h2>
      <Button
        onClick={onClear}
        isIconOnly
        className="text-white bg-transparent"
      >
        <Trash2 size={20} />
      </Button>
    </div>
    <div className="flex-1 p-4 overflow-auto font-mono text-sm whitespace-pre-wrap text-zinc-200">
      {output}
    </div>
  </div>
);

const AssessmentSidePanel = ({
  assessments,
  currentAssessment,
  completedAssessments,
  onAssessmentChange,
}) => {
  const totalPoints = assessments.reduce(
    (sum, assessment) => sum + assessment.points,
    0
  );
  const earnedPoints = assessments
    .filter((assessment) => completedAssessments.includes(assessment.id))
    .reduce((sum, assessment) => sum + assessment.points, 0);

  return (
    <div className="h-full flex flex-col w-64 p-5 border-r bg-[#1E1E1E] border-zinc-800">
      <div className="flex flex-col gap-1 mb-4 font-semibold">
        <h3 className="text-xs text-zinc-400">JavaScript Assessments</h3>
        <h3 className="text-lg font-semibold text-zinc-100">
          Assessments for You
        </h3>
      </div>
      <Progress
        radius="none"
        value={(earnedPoints / totalPoints) * 100}
        className="mb-4"
        color="success"
      />
      <p className="mb-4 text-xs font-semibold text-zinc-200">
        Points: {earnedPoints} / {totalPoints}
      </p>
      <div className="flex flex-col flex-1 w-full overflow-auto font-semibold">
        {assessments.map((assessment) => (
          <div
            key={assessment.id}
            className={`mb-2 cursor-pointer p-3 text-zinc-200 border rounded transition-colors duration-200 ${
              assessment.id === currentAssessment.id
                ? "border-green-700 bg-green-500/10"
                : "border-zinc-700 hover:border-zinc-600 opacity-30"
            }`}
            onClick={() => onAssessmentChange(assessment.id)}
          >
            <h3 className={`mb-2 text-sm font-semibold text-zinc-200`}>
              {assessment.title}
            </h3>
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] text-amber-200">
                {assessment.points} points
              </span>
              {completedAssessments.includes(assessment.id) && (
                <span className="text-xs text-green-500">Completed</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
