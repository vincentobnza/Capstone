import React from "react";
import {
  Topic,
  Description,
  Title,
  Code,
  Example,
  Image,
  List,
  Text,
  Note,
  ListItem,
  NextButton,
} from "../layout/UILayout";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export default function CodeEditors() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>Code editors</Topic>
        <Description>
          A code editor is the place where programmers spend most of their time.
        </Description>
        <Description>
          There are two main types of code editors: IDEs and lightweight
          editors. Many people use one tool of each type.
        </Description>

        <Title>IDE</Title>

        <Description>
          The term IDE (Integrated Development Environment) refers to a powerful
          editor with many features that usually operates on a “whole project.”
          As the name suggests, it’s not just an editor, but a full-scale
          “development environment.”
        </Description>

        <Description>
          An IDE loads the project (which can be many files), allows navigation
          between files, provides autocompletion based on the whole project (not
          just the open file), and integrates with a version management system
          (like git), a testing environment, and other “project-level” stuff.
        </Description>

        <Description>
          If you haven’t selected an IDE yet, consider the following options:
        </Description>

        <ul className="flex flex-col gap-3 py-2 px-5">
          <li className="list-disc list-inside text-md">
            <Link
              to="https://code.visualstudio.com/"
              className="text-orange-500 underline"
            >
              Visual Studio Code
            </Link>{" "}
            (cross-platform, free).
          </li>
          <li className="list-disc list-inside text-md">
            <Link
              to="https://www.jetbrains.com/webstorm/"
              className="text-orange-500 underline"
            >
              Webstorm {""}
            </Link>
            (cross-platform, paid).
          </li>
        </ul>

        <Description>
          For Windows, there’s also “Visual Studio”, not to be confused with
          “Visual Studio Code”. “Visual Studio” is a paid and mighty
          Windows-only editor, well-suited for the .NET platform. It’s also good
          at JavaScript. There’s also a free version{" "}
          <Link
            to="https://visualstudio.microsoft.com/vs/community/"
            className="text-orange-500 underline"
          >
            Visual Studio Community
          </Link>
        </Description>

        <Description>
          Many IDEs are paid, but have a trial period. Their cost is usually
          negligible compared to a qualified developer’s salary, so just choose
          the best one for you.
        </Description>

        <Title>Lightweight editors</Title>
        <Description>
          “Lightweight editors” are not as powerful as IDEs, but they’re fast,
          elegant and simple.
        </Description>

        <Description>
          They are mainly used to open and edit a file instantly.
        </Description>

        <Description>
          The main difference between a “lightweight editor” and an “IDE” is
          that an IDE works on a project-level, so it loads much more data on
          start, analyzes the project structure if needed and so on. A
          lightweight editor is much faster if we need only one file.
        </Description>

        <Description>
          In practice, lightweight editors may have a lot of plugins including
          directory-level syntax analyzers and autocompleters, so there’s no
          strict border between a lightweight editor and an IDE.
        </Description>

        <Description>There are many options, for instance:</Description>
        <ul className="flex flex-col gap-3 py-2 px-5">
          <li className="list-disc list-inside text-md">
            <Link
              to="https://www.sublimetext.com/"
              className="text-orange-500 underline"
            >
              Sublime Text
            </Link>{" "}
            (cross-platform, shareware).
          </li>
          <li className="list-disc list-inside text-md">
            <Link
              to="https://notepad-plus-plus.org/"
              className="text-orange-500 underline"
            >
              Notepadd ++ {""}
            </Link>
            (Windows, free).
          </li>
          <li className="list-disc list-inside text-md">
            <Link
              to="https://www.vim.org/"
              className="text-orange-500 underline"
            >
              Vim {""}
            </Link>
            and {""}
            <Link
              to="https://www.emacs.org/"
              className="text-orange-500 underline"
            >
              Emacs {""}
            </Link>
            (Windows, free).
          </li>
        </ul>

        <Title>Let’s not argue</Title>
        <Description>
          The editors in the lists above are those that either I or my friends
          whom I consider good developers have been using for a long time and
          are happy with.
        </Description>

        <Description>
          There are other great editors in our big world. Please choose the one
          you like the most.
        </Description>

        <Description>
          The choice of an editor, like any other tool, is individual and
          depends on your projects, habits, and personal preferences.
        </Description>

        <Description>The author’s personal opinion:</Description>
        <List
          items={[
            `I’d use Visual Studio Code if I develop mostly frontend.`,
            `Otherwise, if it’s mostly another language/platform and partially frontend, then consider other editors, such as XCode (Mac), Visual Studio (Windows) or Jetbrains family (Webstorm, PHPStorm, RubyMine etc, depending on the language).`,
          ]}
        />

        <NextButton
          link="/learn-js/fundamentals/hello-world"
          text="Fundamentals of JS"
        />
      </div>
    </div>
  );
}
