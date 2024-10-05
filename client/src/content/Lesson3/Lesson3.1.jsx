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
  Highlight,
  Output,
} from "../../layout/UILayout";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function Lesson3_Topic1() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>Conditionals: if, else, else if</Topic>

        <Description>
          Conditional statements control behavior in JavaScript and determine
          whether or not pieces of code can run.
        </Description>

        <Description>
          There are multiple different types of conditionals in JavaScript
          including:
        </Description>

        <Description>
          <Highlight> “If” statements:</Highlight> where if a condition is true
          it is used to specify execution for a block of code.
        </Description>

        <Description>
          <Highlight> “Else” statements:</Highlight> where if the same condition
          is false it specifies the execution for a block of code.
        </Description>

        <Description>
          <Highlight> “Else if” statements:</Highlight> this specifies a new
          test if the first condition is false.
        </Description>

        <Description>
          Now that you have the basic JavaScript conditional statement
          definitions, let’s show you examples of each.
        </Description>

        <Title>If Statement Example</Title>
        <Description>
          As the most common type of conditional, the if statement only runs if
          the condition enclosed in parentheses () is truthy.
        </Description>

        <Code
          code={`if(10 > 5){
  let result = "if block";
  console.log(result)
}
`}
        />

        <Description>Here’s what’s happening in the example above:</Description>
        <Description>
          The keyword if tells JavaScript to start the conditional statement.
        </Description>
        <Description>
          {`(10 > 5) is the condition to test, which in this case is true — 10 is greater than 5.`}
        </Description>

        <Description>
          The part contained inside curly braces {} is the block of code to run.
        </Description>
        <Description>
          Because the condition passes, the variable outcome is assigned the
          value "if block".
        </Description>

        <Title>Else Statement Example</Title>

        <Description>
          You can extend an if statement with an else statement, which adds
          another block to run when the if conditional doesn’t pass.
        </Description>

        <Code
          code={`if("cat" === "dog"){
  let result = "if block";

} else{
  let result = "else block"
}
`}
        />
        <Description>Output</Description>
        <Output output={"else block"} />

        <Description>
          {
            'In the example above, "cat" and "dog" are not equal, so the else block runs and the variable outcome gets the value "else block".'
          }
        </Description>

        <Title>Else If Statement Example</Title>
        <Description>
          You can also extend an if statement with an else if statement, which
          adds another conditional with its own block.
        </Description>

        <Code
          code={`if (false) {
var result = "if block";
} else if (true) {
var result = "else if block";
}
else {
var result = "else block";
}`}
        />
        <Description>Output</Description>
        <Output output={"else if block"} />
        <Description>
          An else if statement doesn’t need a following else statement to work.
          If none of the if or else if conditions pass, then JavaScript moves
          forward and doesn’t run any of the conditional blocks of code.
        </Description>

        <Code
          code={`if (false) {
var result = "if block";
} else if (false) {
let result = "else if block";
}
`}
        />
        <Description>Output</Description>
        <Output output={"first else if block"} />

        <NextButton
          link="/learn-js/switch-statements"
          text="Switch Statements"
        />
      </div>
    </div>
  );
}
