import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Play, Trash2, ArrowDownToLine, Share2 } from "lucide-react";
import LeaveSitePrompt from "@/components/LeaveSitePrompt";

const CodeEditor = () => {
  const [code, setCode] = useState(
    `// Online Javascript Editor\n// Write, Edit and Run your Javascript code using our Online Editor\n\nconsole.log("Hello World");`
  );
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
  const handleSaveFile = async () => {
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: `index.${language === "javascript" ? "js" : "ts"}`,
        types: [
          {
            description: `${language.toLowerCase()} Files`,
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
  };

  // Attach the keydown listener when the component mounts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        handleSaveFile();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [code, language]);
  return (
    <div className="w-full h-screen flex flex-col bg-zinc-900">
      <LeaveSitePrompt />
      <Header onSaveFile={handleSaveFile} />
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

const Header = ({ onSaveFile }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <header className="w-full max-w-screen-2xl mx-auto bg-[#1E1E1E] border-b border-zinc-700 p-6 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-yellow-500 dark:text-yellow-500">
          CodeScript
        </h1>
        <p className="text-zinc-200 text-xs">JavaScript Online Compiler</p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          className="bg-green-600 text-white text-xs font-semibold border-2 border-green-500"
          size="sm"
          endContent={<Share2 size={16} />}
          radius="none"
          onClick={onOpen}
        >
          Share
        </Button>
        <Button
          onClick={onSaveFile}
          className="bg-blue-600 text-white text-xs font-semibold border-2 border-blue-500"
          size="sm"
          endContent={<ArrowDownToLine size={16} />}
          radius="none"
        >
          Save File
        </Button>
        <Button
          className="bg-zinc-700 text-white text-xs font-semibold border-2 border-zinc-500"
          size="sm"
          radius="none"
        >
          Full Code Editor
        </Button>

        <ShareLinkModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </header>
  );
};

const ToolBar = ({ language, onLanguageChange, onRun }) => (
  <div className="bg-[#1E1E1E] border-b border-zinc-700 p-3 flex justify-between items-center space-x-2">
    <div className="ml-4 flex items-center gap-2">
      <p className="text-sm font-bold text-zinc-200">Language: </p>
      <h3 className="text-sm font-bold text-yellow-500">JavaScript</h3>
    </div>
    <Button
      onClick={onRun}
      className="bg-yellow-500 border-2 border-yellow-300 text-black font-bold"
      size="sm"
      radius="none"
    >
      <Play size={16} /> Run Code
    </Button>
  </div>
);

const OutputPanel = ({ output, onClear }) => (
  <div className="w-1/3 bg-[#1E1E1E] border-l border-zinc-700 flex flex-col">
    <div className="p-2 border-b border-gray-700 flex justify-between items-center">
      <h2 className="font-semibold text-gray-300">Output</h2>
      <Button onClick={onClear} variant="light" isIconOnly>
        <Trash2 className="text-white" size={20} />
      </Button>
    </div>
    <div className="flex-1 p-4 font-mono text-sm overflow-auto whitespace-pre-wrap text-zinc-200">
      {output}
    </div>
  </div>
);

const ShareLinkModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
      <ModalContent className="bg-zinc-900 text-zinc-100 border border-zinc-800">
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Share Your Code Link
            </ModalHeader>
            <ModalBody>
              <div className="w-full p-3 bg-zinc-800 border-2 border-zinc-700">
                <p>{window.location.href}</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="bg-blue-600 text-white text-xs font-semibold border-2 border-blue-500"
                onPress={() => onOpenChange(false)}
              >
                Copy Link
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CodeEditor;
