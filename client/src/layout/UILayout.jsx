import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

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
  return (
    <div className="w-full bg-[#282A36] p-3 relative">
      <SyntaxHighlighter language={language} style={atomOneDark}>
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
        <FaInfoCircle size={18} className="text-yellow-500" />
        <h1 className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">
          {noteTitle}
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
