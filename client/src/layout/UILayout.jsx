import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { xcode } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Kbd } from "@nextui-org/react";
export const Topic = ({ children }) => {
  return (
    <h1 className="text-4xl font-medium text-zinc-800 dark:text-zinc-100">
      {children}
    </h1>
  );
};

export const Title = ({ children }) => {
  return (
    <h1 className="mt-5 text-2xl font-medium text-zinc-700 dark:text-zinc-200">
      {children}
    </h1>
  );
};

export const Description = ({ children }) => {
  return <p className="text-md text-zinc-700 dark:text-zinc-400">{children}</p>;
};

export const Example = ({ text }) => {
  return (
    <div className="w-full p-5 bg-zinc-100 border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 flex items-center justify-start  text-zinc-700 dark:text-zinc-300">
      <h1 className="text-sm font-medium">{text}</h1>
    </div>
  );
};

export const Code = ({ code, language, error, setError }) => {
  const { theme } = useTheme(); // Updated to use Next Themes

  return (
    <div
      className={`my-5 w-full p-[1px] relative ${
        theme === "dark" ? "bg-[#282A36] border border-zinc-600" : "bg-zinc-100"
      }`}
    >
      <SyntaxHighlighter
        language="javascript"
        style={theme === "dark" ? hybrid : xcode}
      >
        {code}
      </SyntaxHighlighter>

      {error && (
        <IoCloseCircleSharp
          size={25}
          className="absolute -left-2 -top-2 cursor-pointer text-red-500"
          onClick={() => setError(false)}
        />
      )}
    </div>
  );
};
export const Image = ({ image, height }) => {
  return <img src={image} alt="code" className={`w-full h-${height}px`} />;
};
export const List = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-2 text-zinc-700 dark:text-zinc-300">
      <h1 className="text-lg">{title}</h1>
      <ul className="flex flex-col gap-3 py-2 px-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-disc list-inside text-md"
            style={{
              textIndent: "-22px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Text = ({ children }) => {
  return (
    <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
      {children}
    </p>
  );
};

export const Note = ({ noteTitle, description }) => {
  return (
    <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative  text-zinc-700 dark:text-zinc-300 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">
          ✍🏻 {noteTitle}
        </h1>
      </div>
      <p className="text-sm ml-6">{description}</p>
    </div>
  );
};

export const ListItem = ({ title, text }) => {
  return (
    <div className="w-full flex flex-col gap-2 text-md font-medium text-zinc-700 dark:text-zinc-300">
      <h1>{title}</h1>
      <p className="ml-5">{text}</p>
    </div>
  );
};

export const Key = ({ children }) => {
  return <Kbd className="kbd kbd-sm mx-2">{children}</Kbd>;
};

export const NextButton = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="mt-12 w-[260px] border border-zinc-200 dark:border-zinc-700 self-end text-sm flex justify-end text-right p-4 gap-4 text-zinc-900 dark:text-zinc-300 hover:border-zinc-600 duration-500"
    >
      <div className="flex flex-col gap-1">
        <p>Next</p>
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold text-blue-600 hover:text-blue-300">
            {text}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export const Highlight = ({ children }) => {
  return (
    <span className="bg-zinc-100 dark:bg-zinc-700 px-2 border border-zinc-200 dark:border-zinc-600">
      {children}
    </span>
  );
};

export const Task = ({ points, task, expectedOutput }) => {
  const [output, setOutput] = useState("");
  const [score, setScore] = useState(0);
  const editorRef = useRef(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { theme } = useTheme();

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const runCode = () => {
    const currentCode = editorRef.current.getValue();
    let result;
    try {
      // Create a new Function from the code and execute it
      new Function(currentCode)();
      result = "Code executed successfully!";

      if (currentCode.includes(expectedOutput)) {
        setScore(points);
        result += " You earned " + points + " points!";
      } else {
        setScore(0);
        result += " But it doesn't match the expected output. Try again!";
      }
    } catch (error) {
      result = `Error: ${error.message}`;
      setScore(0);
    }
    setOutput(result);
  };

  return (
    <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative text-zinc-700 dark:text-zinc-400 flex flex-col gap-3">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xs">{formattedDate}</p>
          <h1 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200">
            Your Task 👨🏻‍💻
          </h1>
          <h3>{task}</h3>
        </div>

        <h1 className="text-sm font-semibold">
          Points to earn: <span className="text-yellow-500">{points} pts</span>
        </h1>
      </div>
      <div className="w-full mt-5">
        <Editor
          theme={theme === "dark" ? "vs-dark" : "light"}
          height="350px"
          defaultLanguage="javascript"
          defaultValue="// HELLO DEVELOPER!"
          onMount={handleEditorDidMount}
        />

        <div className="w-full flex justify-end">
          <button
            onClick={runCode}
            className="mt-5 text-sm font-semibold text-black py-2 px-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg hover:opacity-80 duration-400 transition ease-in"
          >
            Run Code
          </button>
        </div>
      </div>
      {output && (
        <div className="mt-4">
          <h3 className="font-bold">Output:</h3>
          <pre className="mt-5 bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export const QuizButton = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="mt-12 w-[260px] border border-zinc-200 dark:border-zinc-700 self-end text-sm flex justify-end text-right p-4 gap-4 text-zinc-900 dark:text-zinc-300 hover:border-zinc-600 duration-500 relative overflow-hidden hover:opacity-70"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/5827/5827057.png"
        alt="quiz icon"
        className="absolute -left-2 -bottom-2 opacity-20 size-20"
      />
      <div className="flex flex-col gap-1">
        <p>Take a Quiz</p>
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold text-green-600 hover:text-green-300">
            {text}
          </h1>
        </div>
      </div>
    </Link>
  );
};
