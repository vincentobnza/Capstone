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
} from "../layout/UILayout";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export default function Introduction() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>An Introduction to JavaScript</Topic>
        <Description>
          Let’s see what’s so special about JavaScript, what we can achieve with
          it, and what other technologies play well with it.
        </Description>
        <Title>What is JavaScript?</Title>
        <Description>
          <i>JavaScript </i>was initially created to “make web pages alive”.
        </Description>
        <Description>
          The programs in this language are called scripts. They can be written
          right in a web page’s HTML and run automatically as the page loads.
        </Description>
        <Description>
          Scripts are provided and executed as plain text. They don’t need
          special preparation or compilation to run.
        </Description>
        <Description>
          In this aspect, JavaScript is very different from another language
          called <b className="text-orange-700">Java</b>
        </Description>
        <Note
          noteTitle="Why is it called JavaScript?"
          description="When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all."
        />
        <Description>
          Today, JavaScript can execute not only in the browser, but also on the
          server, or actually on any device that has a special program called
          the JavaScript engine.
        </Description>
        <Description>
          Different engines have different “codenames”. For example:
        </Description>
        <List
          items={[
            `V8 – in Chrome, Opera and Edge.
`,
            `SpiderMonkey – in Firefox.`,
            `…There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.`,
          ]}
        />
        <Description>
          The terms above are good to remember because they are used in
          developer articles on the internet. We’ll use them too. For instance,
          if “a feature X is supported by V8”, then it probably works in Chrome,
          Opera and Edge.
        </Description>
        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative  text-zinc-700 dark:text-zinc-300 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaInfoCircle size={18} className="text-yellow-500" />
            <h1 className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">
              How do engines work?
            </h1>
          </div>
          <Description>
            Engines are complicated. But the basics are easy.
          </Description>

          <List
            items={[
              "The engine (embedded if it’s a browser) reads (“parses”) the script.",
              "Then it converts (“compiles”) the script to machine code.",
              `Then it converts (“compiles”) the script to machine code.
And then the machine code runs, pretty fast.`,
            ]}
          />
          <Description>
            The engine applies optimizations at each step of the process. It
            even watches the compiled script as it runs, analyzes the data that
            flows through it, and further optimizes the machine code based on
            that knowledge.
          </Description>
        </div>
        <Title>What can in-browser JavaScript do?</Title>
        <Description>
          Modern JavaScript is a “safe” programming language. It does not
          provide low-level access to memory or the CPU, because it was
          initially created for browsers which do not require it.
        </Description>
        <Description>
          JavaScript’s capabilities greatly depend on the environment it’s
          running in. For instance,{" "}
          <Link
            to="https://en.wikipedia.org/wiki/Node.js"
            className="underline text-orange-600"
          >
            Node.js
          </Link>{" "}
          supports functions that allow JavaScript to read/write arbitrary
          files, perform network requests, etc.
        </Description>
        <Description>
          In-browser JavaScript can do everything related to webpage
          manipulation, interaction with the user, and the webserver.
        </Description>
        <Description>
          For instance, in-browser JavaScript is able to:
        </Description>
        <List
          items={[
            "Add new HTML to the page, change the existing content, modify styles.",
            "React to user actions, run on mouse clicks, pointer movements, key presses.",
            "Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).",
            "Get and set cookies, ask questions to the visitor, show messages.",
            "Remember the data on the client-side (“local storage”).",
          ]}
        />
        <Title>What CAN’T in-browser JavaScript do?</Title>
        <Description>
          JavaScript’s abilities in the browser are limited to protect the
          user’s safety. The aim is to prevent an evil webpage from accessing
          private information or harming the user’s data.
        </Description>
        <Description>Examples of such restrictions include:</Description>
        <List
          items={[
            `JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.

Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via an <input> tag.

There are ways to interact with the camera/microphone and other devices, but they require a user’s explicit permission. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the NSA.`,
            `Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port).

This is called the “Same Origin Policy”. To work around that, both pages must agree for data exchange and must contain special JavaScript code that handles it. We’ll cover that in the tutorial.

This limitation is, again, for the user’s safety. A page from http://anysite.com which a user has opened must not be able to access another browser tab with the URL http://gmail.com, for example, and steal information from there.`,
            `JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that’s a safety limitation.`,
          ]}
        />
        <img
          src="https://javascript.info/article/intro/limitations.svg"
          alt="image"
          className="my-10  w-[500px] mx-auto grayscale"
        />

        <Description>
          Such limitations do not exist if JavaScript is used outside of the
          browser, for example on a server. Modern browsers also allow
          plugins/extensions which may ask for extended permissions.
        </Description>

        <Title>What makes JavaScript unique?</Title>
        <Description>
          There are at least three great things about JavaScript:
        </Description>

        <div className="my-5 w-full p-5 border border-zinc-300 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 ">
          <List
            items={[
              "Full integration with HTML/CSS.",
              "Simple things are done simply.",
              "Supported by all major browsers and enabled by default.",
            ]}
          />
        </div>

        <Description>
          JavaScript is the only browser technology that combines these three
          things.
          <br />
          That’s what makes JavaScript unique. That’s why it’s the most
          widespread tool for creating browser interfaces.
          <br />
          That said, JavaScript can be used to create servers, mobile
          applications, etc.
        </Description>

        <Title>Languages “over” JavaScript</Title>
        <Description>
          The syntax of JavaScript does not suit everyone’s needs. Different
          people want different features. That’s to be expected, because
          projects and requirements are different for everyone. So, recently a
          plethora of new languages appeared, which are transpiled (converted)
          to JavaScript before they run in the browser.
        </Description>

        <Description>
          Modern tools make the transpilation very fast and transparent,
          actually allowing developers to code in another language and
          auto-converting it “under the hood”.
        </Description>

        <Description>Examples of such languages:</Description>

        <List
          items={[
            "CoffeeScript is “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.",
            "TypeScript is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.",
            "Flow also adds data typing, but in a different way. Developed by Facebook.",
            "Dart is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.",
            "Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.",
            "Kotlin is a modern, concise and safe programming language that can target the browser or Node.",
          ]}
        />

        <Description>
          There are more. Of course, even if we use one of these transpiled
          languages, we should also know JavaScript to really understand what
          we’re doing.
        </Description>

        <Title>Summary</Title>
        <List
          items={[
            "JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.",
            "Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.",
            "There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.",
          ]}
        />

        <Link
          to="/learn-js/developers-console"
          className="mt-12 w-[260px] border border-zinc-200 dark:border-zinc-700 self-end text-sm flex justify-end text-right p-4 gap-4 text-zinc-900 dark:text-zinc-300 hover:border-zinc-600 duration-500"
        >
          <div className="flex flex-col gap-1">
            <p>Next</p>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-sky-600 hover:text-sky-300">
                Developers Console 👉
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
