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

export default function HelloWorld() {
  const { tasks } = useTask();

  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>Hello World</Topic>
        <Description>
          This part of the tutorial is about core JavaScript, the language
          itself.
        </Description>

        <Description>
          But we need a working environment to run our scripts and, since this
          book is online, the browser is a good choice. We’ll keep the amount of
          browser-specific commands (like alert) to a minimum so that you don’t
          spend time on them if you plan to concentrate on another environment
          (like Node.js).
        </Description>

        <Description>
          So first, let’s see how we attach a script to a webpage. For
          server-side environments (like Node.js), you can execute the script
          with a command like <Highlight>{"node my.js"}</Highlight>
        </Description>

        <Title>The “script” tag</Title>

        <Description>
          JavaScript programs can be inserted almost anywhere into an HTML
          document using the <Highlight>{"<script> tag."}</Highlight>
        </Description>

        <Description>For instance:</Description>

        <Code
          code={`<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>`}
        />

        <Description>
          You can run the example by clicking the “Play” button in the right-top
          corner of the box above.
        </Description>

        <Description>
          The <Highlight>{"<script>"}</Highlight> tag contains JavaScript code
          which is automatically executed when the browser processes the tag.
        </Description>

        <Title>Modern markup</Title>
        <Description>
          The <Highlight>{"<script>"}</Highlight> tag has a few attributes that
          are rarely used nowadays but can still be found in old code:
        </Description>

        <Description>
          The <Highlight>type</Highlight> attribute:{" "}
          <Highlight>{"<script type=…>"}</Highlight>
        </Description>
        <Description>
          This attribute was meant to show the language of the script. This
          attribute no longer makes sense because JavaScript is the default
          language. There is no need to use it.
        </Description>

        <h3 className="mt-5 text-lg font-bold text-zinc-800 dark:text-zinc-200">
          Comments before and after scripts.
        </h3>

        <Description>
          In really ancient books and guides, you may find comments inside{" "}
          <Highlight>{"<script>"}</Highlight> tags, like this:
        </Description>

        <Code
          code={`<script type="text/javascript"><!--
    ...
//--></script>`}
        />

        <Description>
          This trick isn’t used in modern JavaScript. These comments hide
          JavaScript code from old browsers that didn’t know how to process the{" "}
          <Highlight>{"<script>"}</Highlight> tag. Since browsers released in
          the last 15 years don’t have this issue, this kind of comment can help
          you identify really old code.
        </Description>

        <Title>External scripts</Title>
        <Description>
          If we have a lot of JavaScript code, we can put it into a separate
          file.
        </Description>

        <Description>
          Script files are attached to HTML with the <Highlight>src</Highlight>{" "}
          attribute:
        </Description>

        <Code code={`<script src="/path/to/script.js"></script>`} />

        <Description>
          Here, <Highlight>/path/to/script.js</Highlight> is an absolute path to
          the script from the site root. One can also provide a relative path
          from the current page. For instance,{" "}
          <Highlight>src="script.js</Highlight>", just like s
          <Highlight>rc="./script.js"</Highlight>, would mean a file{" "}
          <Highlight>"script.js"</Highlight>
          in the current folder.
        </Description>

        <Description>We can give a full URL as well. For instance:</Description>
        <Code
          code={`<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`}
        />
        <Description>To attach several scripts, use multiple tags:</Description>
        <Code
          code={`<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…`}
        />

        <Note
          noteTitle="Please note:"
          description="As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

The benefit of a separate file is that the browser will download it and store it in its cache.

Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

That reduces traffic and makes pages faster."
        />

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative  text-zinc-700 dark:text-zinc-300 flex flex-col gap-3">
          <Description>
            📢 If <Highlight>src</Highlight> is set, the script content is
            ignored.
          </Description>

          <Description>
            A single <Highlight>{"<script>"}</Highlight> tag can’t have both the
            <Highlight>src</Highlight> attribute and code inside.
          </Description>

          <Description>This won’t work:</Description>

          <Code
            code={`<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>`}
          />

          <Description>
            We must choose either an external{" "}
            <Highlight>{`<script src="…">`}</Highlight>or a regular{" "}
            <Highlight>{"<script>"}</Highlight> with code.
          </Description>

          <Description>
            The example above can be split into two scripts to work:
          </Description>
          <Code
            code={`<script src="file.js"></script>
<script>
  alert(1);
</script>`}
          />
        </div>

        <Title>Summary</Title>

        <List
          items={[
            `We can use a <script> tag to add JavaScript code to a page.`,
            `The type and language attributes are not required.`,
            `A script in an external file can be inserted with <script src="path/to/script.js"></script>.`,
          ]}
        />
        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <Description>
            There is much more to learn about browser scripts and their
            interaction with the webpage. But let’s keep in mind that this part
            of the tutorial is devoted to the JavaScript language, so we
            shouldn’t distract ourselves with browser-specific implementations
            of it. We’ll be using the browser as a way to run JavaScript, which
            is very convenient for online reading, but only one of many.
          </Description>
        </div>

        {tasks.map((taskObj, index) => {
          const task = taskObj.HelloWorldTask;
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
          link="/learn-js/fundamentals/code-structure"
          text="Code Structure"
        />
      </div>
    </div>
  );
}
