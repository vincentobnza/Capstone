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
  Key,
} from "../../layout/UILayout";

import { useSpeech } from "@/context/TextToSpeech";
import { Link } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import TextToSpeechModal from "@/components/TextToSpeechModal";

export default function Lesson1_Topic2() {
  const { textRef } = useSpeech();
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <header className="flex justify-between w-full mx-auto mb-6">
        <Link
          to="/content-map"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-400"
        >
          <IoReturnDownBackSharp size={20} /> Content Map
        </Link>

        <TextToSpeechModal />
      </header>
      <div className="flex flex-col gap-4" ref={textRef}>
        <section id="section1">
          <Topic>Setting up the Development Environment</Topic>
          <Description>
            Here, we'll be creating a web application with JavaScript. For the
            purpose of writing the JavaScript code, we therefore need at least
            two tools: a browser and an editor.
          </Description>
          <Description>
            We will utilize a single HTML web page to run our JavaScript code,
            even though running a web application also requires a webserver. For
            now, there is no need to install it.
          </Description>
          <Title>Browser</Title>
          <Description>
            Most likely, your computer already has a browser loaded on it. For
            Windows, it's Microsoft Edge, and for Mac OS, it's Safari.
          </Description>
          <Description>
            Alternatively, you can install the browser listed below based on
            your preferences:
          </Description>
          <List
            items={[
              "Microsoft Edge",
              "Google Chrome",
              "Mozill Firefox",
              "Safari",
              "Opera",
            ]}
          />
        </section>
        <section id="section2">
          <Title>IDEs for JavaScript Application Development</Title>
          <Description>
            A straightforward editor such as Notepad can be used to write
            JavaScript code. Nevertheless, you can install any licensed or
            open-source IDE (Integrated Development Environment) to benefit from
            the syntax error/warning highlighter and IntelliSense support for
            JavaScript, which enable quick development.
          </Description>
          <Description>
            The followings are some of the well-known JavaScript editors:
          </Description>
          <List
            items={[
              "Visual Studio Code (Free, cross-platform)",
              "Eclipse (Free, cross-platform)",
              "Atom (Free, cross-platform)",
              "Notepad++ (Free, Windows)",
              "Code Lobster (Free, cross-platform)",
              "WebStorm (Paid, cross-platform)",
              "Brackets",
              "Replit",
              "JSFiddle",
            ]}
          />
          <Title>Online Editors for JavaScript</Title>
          <Description>
            To immediately run the JavaScript code without installing anything,
            use the online editor. The free web editors are as follows:
          </Description>
        </section>
        <NextButton
          link="/learn-js/adding-javascript-to-page"
          text="Adding JavaScript to Page"
        />
      </div>
    </div>
  );
}
