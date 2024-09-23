import React from "react";
import {
  Topic,
  Description,
  Title,
  Code,
  Key,
  NextButton,
  Highlight,
} from "../layout/UILayout";

export default function CodeStructure() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>Code Structure</Topic>

        <Description>
          The first thing we’ll study is the building blocks of code.
        </Description>

        <Title>Statements</Title>

        <Description>
          Statements are syntax constructs and commands that perform actions.
        </Description>

        <Description>
          We’ve already seen a statement,{" "}
          <Highlight>{"alert('Hello, world!')"}</Highlight>, which shows the
          message “Hello, world!”.
        </Description>

        <Description>
          We can have as many statements in our code as we want. Statements can
          be separated with a semicolon.
        </Description>

        <Description>
          For example, here we split “Hello World” into two alerts:
        </Description>

        <Code code={`alert('Hello'); alert('World');`} />

        <Description>
          Usually, statements are written on separate lines to make the code
          more readable:
        </Description>

        <Code
          code={`alert('Hello');
alert('World');`}
        />

        <Title>Semicolons</Title>
        <Description>
          A semicolon may be omitted in most cases when a line break exists.
        </Description>
        <Description>This would also work:</Description>

        <Code
          code={`alert('Hello')
alert('World')`}
        />

        <Description>
          Here, JavaScript interprets the line break as an “implicit” semicolon.
          This is called an automatic semicolon insertion.
        </Description>

        <Description>
          In most cases, a newline implies a semicolon. But “in most cases” does
          not mean “always”!
        </Description>

        <Description>
          There are cases when a newline does not mean a semicolon. For example:
        </Description>

        <Code
          code={`alert(3 +
1
+ 2);`}
        />

        <Description>
          The code outputs <Highlight>6</Highlight> because JavaScript does not
          insert semicolons here. It is intuitively obvious that if the line
          ends with a plus <Highlight>{'"+"'}</Highlight>, then it is an
          “incomplete expression”, so a semicolon there would be incorrect. And
          in this case, that works as intended.
        </Description>

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            💡 An example of an error
          </h3>

          <Description>
            If you’re curious to see a concrete example of such an error, check
            this code out:
          </Description>

          <Code
            code={`alert("Hello");

[1, 2].forEach(alert);`}
          />

          <Description>
            No need to think about the meaning of the brackets{" "}
            <Highlight>{"[ ]"}</Highlight> and <Highlight>forEach</Highlight>{" "}
            yet. We’ll study them later. For now, just remember the result of
            running the code: it shows <Highlight>Hello</Highlight>, then{" "}
            <Highlight>1</Highlight>, then <Highlight>2</Highlight>.
          </Description>

          <Description>
            Now let’s remove the semicolon after the{" "}
            <Highlight>alert</Highlight>:
          </Description>

          <Code
            code={`alert("Hello")

[1, 2].forEach(alert);`}
          />

          <Description>
            The difference compared to the code above is only one character: the
            semicolon at the end of the first line is gone.
          </Description>

          <Description>
            f we run this code, only the first <Highlight>Hello</Highlight>{" "}
            shows (and there’s an error, you may need to open the console to see
            it). There are no numbers any more.
          </Description>

          <Description>
            That’s because JavaScript does not assume a semicolon before square
            brackets <Highlight>{"[...]"}</Highlight>. So, the code in the last
            example is treated as a single statement.
          </Description>

          <Description>Here’s how the engine sees it:</Description>

          <Code code={`alert("Hello")[1, 2].forEach(alert);`} />

          <Description>
            Looks weird, right? Such merging in this case is just wrong. We need
            to put a semicolon after <Highlight>alert</Highlight> for the code
            to work correctly.
          </Description>
          <Description>This can happen in other situations also.</Description>
        </div>
        <Description>
          We recommend putting semicolons between statements even if they are
          separated by newlines. This rule is widely adopted by the community.
          Let’s note once again – it is possible to leave out semicolons most of
          the time. But it’s safer – especially for a beginner – to use them.
        </Description>

        <Title>Comments</Title>

        <Description>
          As time goes on, programs become more and more complex. It becomes
          necessary to add comments which describe what the code does and why.
        </Description>

        <Description>
          Comments can be put into any place of a script. They don’t affect its
          execution because the engine simply ignores them.
        </Description>

        <Description>
          <b className="text-zinc-700 dark:text-zinc-200">
            One-line comments start with two forward slash characters{" "}
            <Highlight>//.</Highlight>.
          </b>
        </Description>

        <Description>
          The rest of the line is a comment. It may occupy a full line of its
          own or follow a statement.
        </Description>

        <Description>Like here:</Description>

        <Code
          code={`// This comment occupies a line of its own
alert('Hello');

alert('World'); // This comment follows the statement`}
        />

        <Description>
          Multiline comments start with a forward slash and an asterisk /* and
          end with an asterisk and a forward slash */.
        </Description>

        <Description>Like this:</Description>

        <Code
          code={`* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');`}
        />

        <Description>
          The content of comments is ignored, so if we put code inside{" "}
          <Highlight>/* … */</Highlight>, it won’t execute.
        </Description>

        <Description>
          Sometimes it can be handy to temporarily disable a part of code:
        </Description>

        <Code
          code={`/* Commenting out the code
alert('Hello');
*/
alert('World');`}
        />

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            ✔️ Use Hot Keys
          </h3>

          <Description>
            In most editors, a line of code can be commented out by pressing the
            <Key>Ctrl+/</Key> hotkey for a single-line comment and something
            like <Key>Ctrl+Shift+/</Key> – for multiline comments (select a
            piece of code and press the hotkey). For Mac, try <Key>cmd</Key>
            instead of <Key>Ctrl</Key> and <Key>Option</Key> instead of Shift.
          </Description>
        </div>

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            ✔️ Nested comments are not supported!
          </h3>
          <Description>
            There may not be{" "}
            <Highlight>/*...*/ inside another /*...*/.</Highlight>
          </Description>
          <Description>Such code will die with an error:</Description>
          <Code
            code={`/*
  /* nested comment ?!? */
*/
alert( 'World' );`}
          />

          <Description>
            Please, don’t hesitate to comment your code.
          </Description>
        </div>
        <Description>
          Comments increase the overall code footprint, but that’s not a problem
          at all. There are many tools which minify code before publishing to a
          production server. They remove comments, so they don’t appear in the
          working scripts. Therefore, comments do not have negative effects on
          production at all.
        </Description>

        <NextButton link="/learn-js/fundamentals/variables" text="Variables" />
      </div>
    </div>
  );
}
