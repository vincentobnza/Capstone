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
  Highlight,
  Task,
} from "../layout/UILayout";
import { useTask } from "../context/TaskApi.jsx";

export default function Variables() {
  const { tasks } = useTask();
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>Variables</Topic>
        <Description>
          Most of the time, a JavaScript application needs to work with
          information. Here are two examples:
        </Description>
        <List
          items={[
            "An online shop – the information might include goods being sold and a shopping cart.",
            "A chat application – the information might include users, messages, and much more.",
          ]}
        />
        <Description>Variables are used to store this information.</Description>
        <Title>A variable</Title>
        <Description>
          A variable is a “named storage” for data. We can use variables to
          store goodies, visitors, and other data.
        </Description>
        <Description>
          o create a variable in JavaScript, use the <Highlight>let</Highlight>{" "}
          keyword.
        </Description>
        <Description>
          The statement below creates (in other words: declares) a variable with
          the name “message”:
        </Description>
        <Code code={"let message;"} />
        <Description>
          Now, we can put some data into it by using the assignment operator{" "}
          <Highlight>=</Highlight>
        </Description>
        <Code
          code={`let message;

message = 'Hello'; // store the string 'Hello' in the variable named message`}
        />
        <Description>
          The string is now saved into the memory area associated with the
          variable. We can access it using the variable name:
        </Description>
        <Code
          code={`let message;
message = 'Hello!';

alert(message); // shows the variable content`}
        />
        <Description>
          To be concise, we can combine the variable declaration and assignment
          into a single line:
        </Description>
        <Code
          code={`let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!`}
        />
        <Description>
          We can also declare multiple variables in one line:
        </Description>
        <Code code={`let user = 'John', age = 25, message = 'Hello';`} />

        <Description>
          That might seem shorter, but we don’t recommend it. For the sake of
          better readability, please use a single line per variable.
        </Description>

        <Description>
          The multiline variant is a bit longer, but easier to read:
        </Description>

        <Code
          code={`let user = 'John';
let age = 25;
let message = 'Hello';`}
        />

        <Description>
          Some people also define multiple variables in this multiline style:
        </Description>

        <Code
          code={`let user = 'John',
  age = 25,
  message = 'Hello';`}
        />

        <Description>…Or even in the “comma-first” style:</Description>
        <Code
          code={`let user = 'John'
  , age = 25
  , message = 'Hello';`}
        />

        <Description>
          Technically, all these variants do the same thing. So, it’s a matter
          of personal taste and aesthetics.
        </Description>

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            👉 <Highlight>var</Highlight> instead of <Highlight>let</Highlight>
          </h3>

          <Description>
            In older scripts, you may also find another keyword:{" "}
            <Highlight>var</Highlight> instead of <Highlight>let</Highlight>
          </Description>

          <Code code={`var message = 'Hello';`} />

          <Description>
            The <Highlight>var</Highlight> keyword is almost the same as{" "}
            <Highlight>let</Highlight>. It also declares a variable but in a
            slightly different, “old-school” way.
          </Description>

          <Description>
            There are subtle differences between <Highlight>let</Highlight> and
            <Highlight>var</Highlight>, but they do not matter to us yet. We’ll
            cover them in detail in the chapter{" "}
            <Highlight>The old "var"</Highlight>.
          </Description>

          <Title>A real-life analogy</Title>

          <Description>
            We can easily grasp the concept of a “variable” if we imagine it as
            a “box” for data, with a uniquely-named sticker on it.
          </Description>

          <Description>
            For instance, the variable message can be imagined as a box labelled
            "message" with the value "Hello!" in it:
          </Description>

          <img
            src="https://javascript.info/article/variables/variable.svg"
            alt=""
            className="my-8 w-40 grayscale"
          />

          <Description>We can put any value in the box.</Description>
          <Description>
            We can also change it as many times as we want:
          </Description>

          <Code
            code={`let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);`}
          />

          <Description>
            When the value is changed, the old data is removed from the
            variable:
          </Description>

          <img
            src="https://javascript.info/article/variables/variable-change.svg"
            alt=""
            className="my-8 w-60 grayscale"
          />

          <Description>
            We can also declare two variables and copy data from one into the
            other.
          </Description>

          <Code
            code={`let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!`}
          />

          <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
            <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
              ⚠️ Declaring twice triggers an error
            </h3>

            <Description>A variable should be declared only once.</Description>
            <Description>
              A repeated declaration of the same variable is an error:
            </Description>

            <Code
              code={`let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared`}
            />

            <Description>
              So, we should declare a variable once and then refer to it without
              <Highlight>let</Highlight>.
            </Description>
          </div>
        </div>
        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            💡 Functional languages
          </h3>

          <Description>
            It’s interesting to note that there exist so-called pure functional
            programming languages, such as Haskell, that forbid changing
            variable values.
          </Description>

          <Description>
            In such languages, once the value is stored “in the box”, it’s there
            forever. If we need to store something else, the language forces us
            to create a new box (declare a new variable). We can’t reuse the old
            one.
          </Description>

          <Description>
            Though it may seem a little odd at first sight, these languages are
            quite capable of serious development. More than that, there are
            areas like parallel computations where this limitation confers
            certain benefits.
          </Description>
        </div>

        <Title>Variable naming</Title>

        <Description>
          There are two limitations on variable names in JavaScript:
        </Description>

        <List
          items={[
            "The name must contain only letters, digits, or the symbols $ and _.",
            "The first character must not be a digit.",
          ]}
        />

        <Description>Examples of valid names:</Description>

        <Code
          code={`let userName;
let test123;`}
        />

        <Description>
          When the name contains multiple words, <i>camelCase</i> is commonly
          used. That is: words go one after another, each word except first
          starting with a capital letter: <Highlight>myVeryLongName</Highlight>.
        </Description>

        <Description>
          What’s interesting – the dollar sign '$' and the underscore '_' can
          also be used in names. They are regular symbols, just like letters,
          without any special meaning.
        </Description>

        <Description>These names are valid:</Description>

        <Code
          code={`let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3`}
        />

        <Description>Examples of incorrect variable names:</Description>
        <Code
          code={`let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name`}
        />

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            📣 Case matters
          </h3>

          <Description>
            Variables named <Highlight>apple</Highlight> and{" "}
            <Highlight>APPLE</Highlight> are two different variables.
          </Description>
        </div>

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            📣 Non-Latin letters are allowed, but not recommended
          </h3>

          <Description>
            It is possible to use any language, including Cyrillic letters,
            Chinese logograms and so on, like this:
          </Description>

          <Code
            code={`let имя = '...';
let 我 = '...';`}
          />

          <Description>
            Technically, there is no error here. Such names are allowed, but
            there is an international convention to use English in variable
            names. Even if we’re writing a small script, it may have a long life
            ahead. People from other countries may need to read it sometime.
          </Description>
        </div>

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            ⛔ Reserved names
          </h3>

          <Description>
            There is a list of reserved words, which cannot be used as variable
            names because they are used by the language itself.
          </Description>

          <Description>
            For example: let, class, return, and function are reserved.
          </Description>

          <Description>The code below gives a syntax error:</Description>

          <Code
            code={`let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!`}
          />
        </div>

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            ⛔ An assignment without <Highlight>use strict</Highlight>
          </h3>

          <Description>
            Normally, we need to define a variable before using it. But in the
            old times, it was technically possible to create a variable by a
            mere assignment of the value without using{" "}
            <Highlight>let</Highlight>. This still works now if we don’t put{" "}
            <Highlight>use strict</Highlight>in our scripts to maintain
            compatibility with old scripts.
          </Description>

          <Code
            code={`// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5`}
          />

          <Description>
            This is a bad practice and would cause an error in strict mode:
          </Description>

          <Code
            code={`"use strict";

num = 5; // error: num is not defined`}
          />
        </div>

        <Title>Constants</Title>

        <Description>
          To declare a constant (unchanging) variable, use{" "}
          <Highlight>const</Highlight> instead of <Highlight>let</Highlight>:
        </Description>

        <Code code={`const myBirthday = '18.04.1982';`} />

        <Description>
          When a programmer is sure that a variable will never change, they can
          declare it with <Highlight>const</Highlight> to guarantee and
          communicate that fact to everyone.
        </Description>

        <Title>Uppercase constants</Title>

        <Description>
          There is a widespread practice to use constants as aliases for
          difficult-to-remember values that are known before execution.
        </Description>

        <Description>
          Such constants are named using capital letters and underscores.
        </Description>

        <Description>
          For instance, let’s make constants for colors in so-called “web”
          (hexadecimal) format:
        </Description>

        <Code
          code={`const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00`}
        />

        <Description>Benefits:</Description>

        <List
          items={[
            `COLOR_ORANGE is much easier to remember than "#FF7F00".`,
            `It is much easier to mistype "#FF7F00" than COLOR_ORANGE.`,
            `When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.`,
          ]}
        />

        <Description>
          When should we use capitals for a constant and when should we name it
          normally? Let’s make that clear.
        </Description>

        <Description>
          Being a “constant” just means that a variable’s value never changes.
          But some constants are known before execution (like a hexadecimal
          value for red) and some constants are calculated in run-time, during
          the execution, but do not change after their initial assignment.
        </Description>

        <Description>For instance:</Description>

        <Code
          code={`const pageLoadTime = /* time taken by a webpage to load */;`}
        />

        <Description>
          The value of <Highlight>pageLoadTime</Highlight> is not known before
          the page load, so it’s named normally. But it’s still a constant
          because it doesn’t change after the assignment.
        </Description>

        <Description>
          In other words, capital-named constants are only used as aliases for
          “hard-coded” values.
        </Description>

        <Title>Name things right</Title>
        <Description>
          Talking about variables, there’s one more extremely important thing.
        </Description>

        <Description>
          A variable name should have a clean, obvious meaning, describing the
          data that it stores.
        </Description>

        <Description>
          Variable naming is one of the most important and complex skills in
          programming. A glance at variable names can reveal which code was
          written by a beginner versus an experienced developer.
        </Description>

        <Description>
          In a real project, most of the time is spent modifying and extending
          an existing code base rather than writing something completely
          separate from scratch. When we return to some code after doing
          something else for a while, it’s much easier to find information that
          is well-labelled. Or, in other words, when the variables have good
          names.
        </Description>

        <Description>
          Please spend time thinking about the right name for a variable before
          declaring it. Doing so will repay you handsomely.
        </Description>

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            👉 Reuse or create?
          </h3>

          <Description>
            And the last note. There are some lazy programmers who, instead of
            declaring new variables, tend to reuse existing ones.
          </Description>

          <Description>
            As a result, their variables are like boxes into which people throw
            different things without changing their stickers. What’s inside the
            box now? Who knows? We need to come closer and check.
          </Description>

          <Description>
            Such programmers save a little bit on variable declaration but lose
            ten times more on debugging.
          </Description>

          <Description>An extra variable is good, not evil.</Description>
          <Description>
            Modern JavaScript minifiers and browsers optimize code well enough,
            so it won’t create performance issues. Using different variables for
            different values can even help the engine optimize your code.
          </Description>
        </div>

        <Title>Summary</Title>

        <Description>
          We can declare variables to store data by using the{" "}
          <Highlight>var</Highlight>, <Highlight>let</Highlight>, or{" "}
          <Highlight>const</Highlight>
          keywords.
        </Description>

        <List
          items={[
            "let – is a modern variable declaration.",
            'var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.',
            "const – is like let, but the value of the variable can’t be changed.",
          ]}
        />

        <Description>
          Variables should be named in a way that allows us to easily understand
          what’s inside them.
        </Description>
        {tasks.map((taskObj, index) => {
          const task = taskObj.Variables;
          if (task) {
            return (
              <Task
                key={index}
                task={task.task}
                points={task.points}
                expectedOutput={task.expectedOutput}
              />
            );
          }
          return null;
        })}

        <NextButton
          link="/learn-js/fundamentals/data-types"
          text="Data Types"
        />
      </div>
    </div>
  );
}
