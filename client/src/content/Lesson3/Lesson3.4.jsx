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
  QuizButton,
  Output,
  Highlight,
} from "../../layout/UILayout";
import { Link } from "react-router-dom";

export default function Lesson3_Topic4() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <section id="section1" className="w-full">
          <Topic>JavaScript - Break Statements</Topic>
          <Description>
            In JavaScript, the break statement ends the loop or switch case.
            declaration. When the loop and the break statement are used
            together, the Control flow exits the loop and carries out the
            remaining different code.
          </Description>

          <Description>
            Another way to jump a labeled statement is with the break statement.
            when used inside that phrase with a label. It's a helpful resource
            for regulating the JavaScript code's execution flow.
          </Description>
          <Title>Syntax</Title>
          <Description>
            The syntax of break statement in JavaScript is as follows —
          </Description>

          <Code
            visibleButton={false}
            code={`break;
OR 
break[label];`}
          />

          <Description>
            The label is optional with a break statement.
          </Description>
          <Description>
            Note — In the next chapter, we Will learn to use the break statement
            with the label inside the loop.
          </Description>

          <img
            src="https://www.tutorialspoint.com/javascript/images/break_statement.jpg"
            alt="break statement"
            className="mt-4 border border-zinc-200 dark:border-zinc-800 w-[470px]"
          />

          <Description>
            <h1 className="text-xs text-zinc-600 dark:text-zinc-400 italic underline dark:hover:text-green-600">
              Reference:
              <Link to="https://www.tutorialspoint.com/javascript/javascript_break_statement.htm">
                https://www.tutorialspoint.com/javascript/javascript_break_statement.htm
              </Link>
            </h1>
          </Description>
        </section>

        <NextButton link="/learn-js/loops" text="JavaScript Break Statements" />
      </div>
    </div>
  );
}
