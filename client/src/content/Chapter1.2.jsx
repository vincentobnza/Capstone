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
  Kbd,
} from "../layout/UILayout";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function DevelopersConsole() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-4">
        <Topic>Developer console</Topic>
        <Description>
          Code is prone to errors. You will quite likely make errors… Oh, what
          am I talking about? You are absolutely going to make errors, at least
          if you’re a human, not a robot.
        </Description>
        <Description>
          But in the browser, users don’t see errors by default. So, if
          something goes wrong in the script, we won’t see what’s broken and
          can’t fix it.
        </Description>
        <Description>
          To see errors and get a lot of other useful information about scripts,
          “developer tools” have been embedded in browsers.
        </Description>
        <Description>
          Most developers lean towards Chrome or Firefox for development because
          those browsers have the best developer tools. Other browsers also
          provide developer tools, sometimes with special features, but are
          usually playing “catch-up” to Chrome or Firefox. So most developers
          have a “favorite” browser and switch to others if a problem is
          browser-specific.
        </Description>

        <Description>
          Developer tools are potent; they have many features. To start, we’ll
          learn how to open them, look at errors, and run JavaScript commands.
        </Description>

        <Title>Google Chrome</Title>
        <Description>
          Open the page <b className="text-orange-700">bug.html.</b>
        </Description>

        <Description>
          There’s an error in the JavaScript code on it. It’s hidden from a
          regular visitor’s eyes, so let’s open developer tools to see it.
        </Description>

        <Description>
          Press
          <Kbd>F12</Kbd>
          or, if you’re on Mac, then
          <Kbd>Cmd + Opt + J</Kbd>
        </Description>

        <Description>
          The developer tools will open on the Console tab by default.
        </Description>

        <Description>It looks somewhat like this:</Description>

        <img
          src="https://javascript.info/article/devtools/chrome.png"
          alt="image"
          className="w-full my-5"
        />
        <Description>
          The exact look of developer tools depends on your version of Chrome.
          It changes from time to time but should be similar.
        </Description>

        <List
          items={[
            `Here we can see the red-colored error message. In this case, the script contains an unknown “lalala” command.
On the right, there is a clickable link to the source bug.html:12 with the line number where the error has occurred.`,
            `On the right, there is a clickable link to the source bug.html:12 with the line number where the error has occurred.`,
          ]}
        />

        <Description>
          Below the error message, there is a blue {">"} symbol. It marks a
          “command line” where we can type JavaScript commands. Press{" "}
          <Kbd>Enter</Kbd>
          to run them.
        </Description>

        <Description>
          Now we can see errors, and that’s enough for a start. We’ll come back
          to developer tools later and cover debugging more in-depth in the
          chapter <b className="text-orange-700">Debugging in the browser.</b>
        </Description>

        <div className="my-5 w-full flex flex-col gap-4 p-5 border border-zinc-300 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 ">
          <h1 className="font-bold">Multi-line input</h1>
          <p>
            Usually, when we put a line of code into the console, and then press
            <kbd className="kbd kbd-sm mx-2 bg-zinc-50 dark:bg-zinc-800">
              Enter
            </kbd>
            , it executes.
          </p>
          <p>
            To insert multiple lines, press{" "}
            <kbd className="kbd kbd-sm mx-2 bg-zinc-50 dark:bg-zinc-800">
              Ctrl + Enter
            </kbd>{" "}
            This way one can enter long fragments of JavaScript code.
          </p>
        </div>

        <Title>Firefox, Edge, and others</Title>
        <Description>
          Most other browsers use <Kbd>F12</Kbd>
          to open developer tools.
        </Description>

        <Description>
          The look & feel of them is quite similar. Once you know how to use one
          of these tools (you can start with Chrome), you can easily switch to
          another.
        </Description>

        <Description>Safari</Description>

        <Description>
          Safari (Mac browser, not supported by Windows/Linux) is a little bit
          special here. We need to enable the “Develop menu” first.
        </Description>

        <Description>
          Open Preferences and go to the “Advanced” pane. There’s a checkbox at
          the bottom:
        </Description>

        <img
          src="https://javascript.info/article/devtools/safari.png"
          alt="image"
          className="w-full my-5"
        />

        <Description>
          Now <Kbd> Cmd + Opt + C</Kbd>
          can toggle the console. Also, note that the new top menu item named
          “Develop” has appeared. It has many commands and options.
        </Description>

        <Title>Summary</Title>

        <Description>
          Developer tools allow us to see errors, run commands, examine
          variables, and much more.
        </Description>

        <Description>
          They can be opened with F12 for most browsers on Windows. Chrome for
          Mac needs <Kbd>Cmd + Opt + J</Kbd>, Safari: <Kbd>Cmd + Opt + J</Kbd>
          (need to enable first).
        </Description>

        <Description>
          Now we have the environment ready. In the next section, we’ll get down
          to JavaScript.
        </Description>

        <NextButton link="/learn-js/code-editors" text="Code Editors" />
      </div>
    </div>
  );
}
