import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MonacoEditor from "@monaco-editor/react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import {
  Play,
  Trash2,
  ArrowDownToLine,
  Share2,
  Flame,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LeaveSitePrompt from "@/components/LeaveSitePrompt";

const CodeEditor = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("javascript");
  const [code, setCode] = useState({
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>CodeScript Live Preview</title>
</head>

<body>
    <div class="container">
        <h1>
            CodeScript Online Compiler
        </h1>
        <p>
            Thank you for your patience while using our online compiler. Please note that it may not be fully optimized
            for all integrations. We appreciate your understanding.
        </p>
        <button id="btn">Click me</button>
    </div>
</body>

</html>`,
    css: `body{
    font-family: 'Consolas';
    color: rgb(27, 27, 27);
    padding: 50px;
}


.container{
    max-width: 800px;
    margin-top: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 5px;
}
h1{
    color: #050505;
}

button{
    margin-top: 30px;
    padding: 10px 20px;
    background-color: rgb(31, 160, 80);
    color: #fff;
    outline: none;
    border: none;
}`,
    javascript: `document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", () => {
        alert('Hello Dev!');
    });
});`,
  });
  const [output, setOutput] = useState("");

  const previewWindow = useRef(null);

  useEffect(() => {
    document.title = "CodeScript - Online Editor";
  }, []);

  const editorRef = useRef(null);

  // Generate a complete HTML document with injected HTML, CSS, and JavaScript
  const generateFullHtml = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          ${code.css}
        </style>
      </head>
      <body>
        ${code.html}
        <script>
          ${code.javascript}
        </script>
      </body>
      </html>
    `;
  };

  const handleEditorChange = useCallback(
    (value) => {
      if (value !== undefined) {
        setCode((prevCode) => ({
          ...prevCode,
          [activeTab]: value,
        }));
      }
    },
    [activeTab]
  );

  const handleOpenLivePreview = useCallback(() => {
    const fullHtml = generateFullHtml();

    // Open new window or focus existing one with the updated content
    if (!previewWindow.current || previewWindow.current.closed) {
      previewWindow.current = window.open("", "CodePreview");
    } else {
      previewWindow.current.focus();
    }

    // Inject the generated HTML content into the new window
    previewWindow.current.document.open();
    previewWindow.current.document.write(fullHtml);
    previewWindow.current.document.close();
  }, [code]);

  useEffect(() => {
    return () => {
      if (previewWindow.current) {
        previewWindow.current.close();
      }
    };
  }, []);

  const runCode = useCallback(() => {
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
      const wrappedCode = `(async () => { ${code.javascript} })()`;

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
            outputBuffer || `$ node /tmp/${randomFileName}.js\n(No output)`
          );

          if (previewWindow.current && !previewWindow.current.closed) {
            handleOpenLivePreview();
          }
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
  }, [code, handleOpenLivePreview]);

  const clearOutput = useCallback(() => {
    setOutput("");
  }, []);

  const handleSaveFile = useCallback(async () => {
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: `index.${activeTab === "javascript" ? "js" : activeTab}`,
        types: [
          {
            description: `${activeTab.toLowerCase()} Files`,
            accept: {
              "text/plain": [`.${activeTab}`],
            },
          },
        ],
      });

      const writableStream = await fileHandle.createWritable();
      await writableStream.write(code[activeTab]);
      await writableStream.close();
    } catch (err) {
      console.error("File saving failed:", err);
    }
  }, [activeTab, code]);

  const handleFormatCode = useCallback(async () => {
    if (editorRef.current) {
      editorRef.current.getAction("editor.action.formatDocument").run();
    }
  }, []);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

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
  }, [handleSaveFile]);

  return (
    <div className="w-full h-screen flex flex-col bg-zinc-900 font-NotoSans">
      <LeaveSitePrompt />
      <Header onSaveFile={handleSaveFile} />
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          <ToolBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onRun={runCode}
            onFormat={handleFormatCode}
          />
          <div className="flex-1">
            <MonacoEditor
              className="w-full h-full"
              language={activeTab}
              theme="vs-dark"
              value={code[activeTab]}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
                style: {
                  vertical: "visible",
                  horizontal: "visible",
                  useShadows: false,
                  verticalScrollbarSize: 10,
                  horizontalScrollbarSize: 10,
                },
              }}
            />
          </div>
        </div>
        <OutputPanel
          output={output}
          onClear={clearOutput}
          onOpenPreview={handleOpenLivePreview}
          isPreviewOpen={
            !!previewWindow.current && !previewWindow.current.closed
          }
        />
      </div>
    </div>
  );
};

const Header = ({ onSaveFile }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <header className="w-full max-w-screen-2xl mx-auto bg-[#1E1E1E] border-b border-zinc-700 p-6 flex justify-between items-center">
      <div className="ml-2 relative flex flex-col gap-2">
        <h1 className="bg-gradient-to-br from-green-500 to-green-600 dark:to-green-800 bg-clip-text text-transparent font-black text-lg font-Orbitron">
          CodeScript
        </h1>
        <p className="text-zinc-400 text-xs font-bold">Online Code Editor</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="bg-green-600 text-white text-xs font-semibold border border-green-500"
          size="sm"
          endContent={<Share2 size={16} />}
          radius="none"
          onClick={onOpen}
        >
          Share
        </Button>
        <Button
          onClick={onSaveFile}
          className="bg-white text-black text-xs font-semibold"
          size="sm"
          endContent={<ArrowDownToLine size={16} />}
          radius="none"
        >
          Save File
        </Button>
        <ShareLinkModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </header>
  );
};

const PreviewButton = ({ onClick, isOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    onClick();
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Tooltip
      showArrow={true}
      content={isOpen ? "Preview window is open" : "Opens in a new tab"}
      radius="none"
    >
      <button
        className={`flex items-center justify-center gap-2 text-xs font-bold ${
          isLoading ? "text-gray-400" : "text-green-500 underline"
        }`}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            Opening Preview...
            <span className="animate-spin">⟳</span>
          </>
        ) : (
          <>
            {isOpen ? "Update Live Preview" : "Open Live Preview"}
            <Globe size={15} />
          </>
        )}
      </button>
    </Tooltip>
  );
};
const ToolBar = ({ activeTab, setActiveTab, onRun, onFormat }) => {
  const tabs = ["html", "css", "javascript"];

  return (
    <div className="bg-[#1E1E1E] border-b border-zinc-700 p-3 flex justify-between items-center space-x-2">
      <div className="ml-5 flex items-center gap-2">
        <ul className="w-[300px] h-10 border border-zinc-700 grid grid-cols-3 relative">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`w-full h-full cursor-pointer grid place-items-center text-xs font-bold relative z-10 transition-colors duration-200 ${
                activeTab === tab
                  ? "text-green-400 bg-green-900/10"
                  : "text-zinc-300 hover:text-zinc-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </li>
          ))}
          <motion.div
            className="absolute top-0 left-0 w-1/3 h-full bg-zinc-800 z-0"
            initial={false}
            animate={{
              x: tabs.indexOf(activeTab) * 100 + "%",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          />
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={onFormat}
          className="bg-zinc-500 border border-zinc-400 text-white font-bold"
          size="sm"
          radius="none"
        >
          <Flame size={16} className="mr-2" />
          Format Code
        </Button>
        <Button
          onClick={onRun}
          className="bg-green-600 border border-green-500 text-white font-bold"
          size="sm"
          radius="none"
        >
          <Play size={16} className="mr-2" /> Run Code
        </Button>
      </div>
    </div>
  );
};

const OutputPanel = ({ output, onClear, onOpenPreview, isPreviewOpen }) => (
  <div className="w-1/3 bg-[#1E1E1E] border-l border-zinc-700 flex flex-col">
    <div className="p-2 border-b border-gray-700 flex justify-between items-center">
      <h2 className="font-semibold text-gray-300 text-sm ml-4">Console</h2>
      <div className="flex items-center gap-3">
        <PreviewButton onClick={onOpenPreview} isOpen={isPreviewOpen} />
        <Button onClick={onClear} variant="light" isIconOnly>
          <Trash2 className="text-white" size={20} />
        </Button>
      </div>
    </div>
    <div className="flex-1 p-4 font-mono text-sm overflow-auto whitespace-pre-wrap text-zinc-200">
      {output}
    </div>
  </div>
);
const ShareLinkModal = ({ isOpen, onOpenChange }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
      <ModalContent className="bg-zinc-900 text-zinc-100 border border-zinc-800">
        {(onClose) => (
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
                onClick={handleCopyLink}
              >
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CodeEditor;
