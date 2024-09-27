import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Play, Trash2, ChevronDown } from "lucide-react";
import LeaveSitePrompt from "@/components/LeaveSitePrompt";

const CodeEditor = () => {
  const [code, setCode] = useState("// Type your code here...");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const runCode = () => {
    const randomFileName = Math.random().toString(36).substring(7);
    let outputBuffer = `$ node /tmp/${randomFileName}.js\n`;

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
      const wrappedCode = `(async () => { ${code} })()`;

      const runnable = new Function(
        ...Object.keys(sandbox),
        `return (${wrappedCode}).catch(error => console.error(error));`
      );

      runnable(...Object.values(sandbox))
        .then((result) => {
          if (result !== undefined) {
            mockConsole.log(result);
          }
          setOutput(
            outputBuffer || "$ node /tmp/${randomFileName}.js\n(No output)"
          );
        })
        .catch((error) => {
          setOutput(
            `$ node /tmp/${randomFileName}.js\nUncaught error: ${error.message}`
          );
        });
    } catch (error) {
      setOutput(
        `$ node /tmp/${randomFileName}.js\nSyntax error: ${error.message}`
      );
    }
  };

  const clearOutput = () => {
    setOutput("");
  };

  // Function to trigger the native "Save As" dialog using File System Access API
  const handleSaveFile = async (e) => {
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();

      try {
        // Use showSaveFilePicker() to open the file picker dialog
        const fileHandle = await window.showSaveFilePicker({
          suggestedName: `code.${language === "javascript" ? "js" : "ts"}`,
          types: [
            {
              description: `${language.toUpperCase()} Files`,
              accept: {
                "text/plain": [`.${language === "javascript" ? "js" : "ts"}`],
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
    }
  };

  // Attach the keydown listener when the component mounts
  useEffect(() => {
    window.addEventListener("keydown", handleSaveFile);
    return () => {
      window.removeEventListener("keydown", handleSaveFile);
    };
  }, [code, language]);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 dark:bg-zinc-900">
      <LeaveSitePrompt />
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col">
          <ToolBar
            language={language}
            onLanguageChange={handleLanguageChange}
            onRun={runCode}
          />
          <MonacoEditor
            height="100%"
            language={language}
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
        <OutputPanel output={output} onClear={clearOutput} />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-full max-w-screen-2xl mx-auto bg-white dark:bg-gradient-to-b from-slate-800 dark:to-[#1E1E1E] border-b border-zinc-200 dark:border-zinc-700 p-6 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-yellow-500 dark:text-yellow-500">
          CodeScript
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs">
          JavaScript Online Compiler
        </p>
      </div>
    </header>
  );
};

const ToolBar = ({ language, onLanguageChange, onRun }) => (
  <div className="bg-white dark:bg-[#1E1E1E] border-b border-gray-200 dark:border-zinc-700 p-2 flex justify-between items-center space-x-2">
    <div className="ml-6 flex items-center gap-2">
      <p className="text-sm font-bold">Language: </p>
      <Button
        variant="flat"
        className="capitalize cursor-not-allowed"
        disabled={true}
      >
        {language} <ChevronDown size={16} />
      </Button>
    </div>
    <Button
      onClick={onRun}
      className="bg-yellow-500 text-black font-bold"
      size="sm"
    >
      <Play size={16} /> Run Code
    </Button>
  </div>
);

const OutputPanel = ({ output, onClear }) => (
  <div className="w-1/3 bg-white dark:bg-[#1E1E1E] border-l border-gray-200 dark:border-gray-700 flex flex-col">
    <div className="p-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <h2 className="font-semibold text-gray-800 dark:text-gray-100">Output</h2>
      <Button onClick={onClear} variant="light" isIconOnly>
        <Trash2 size={16} />
      </Button>
    </div>
    <div className="flex-1 p-4 font-mono text-sm overflow-auto whitespace-pre-wrap">
      {output}
    </div>
  </div>
);

export default CodeEditor;
