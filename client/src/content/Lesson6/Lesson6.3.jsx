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

export default function Lesson6_Topic3() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <section id="section1">
          <Title>What Are DOM Events and Why Are They Useful?</Title>
          <Description>
            JavaScript code can be executed by using DOM events, which are
            signals made available by the browser.{" "}
          </Description>

          <Description>
            The user interacts with the application we've constructed by
            clicking buttons and entering text into input fields, among other
            interactions that result in these DOM events.
          </Description>

          <Description>
            You can tell JavaScript as a web developer to wait for a particular
            event and then take action in response to it.
          </Description>

          <Description>As an illustration: </Description>
          <List
            items={[
              "Does a paragraph's text alter when a button is clicked?",
              "Use the Fetch API to make a POST request after a form has been submitted.",
            ]}
          />

          <Description>
            I'll walk you through the process of utilizing JavaScript to listen
            for and react to DOM events in this article.
          </Description>
          <Title>How to Listen to DOM Events</Title>
          <Description>
            You must use the addEventListener() function to connect an event
            listener to an element in order to start listening for events.{" "}
          </Description>

          <Description>
            Two parameters are accepted by the addEventListener() method:{" "}
          </Description>

          <Description>
            The kind of incident that should be heard A procedure to be executed
            upon event triggering
          </Description>
          <Code
            visibleButton={false}
            code={`Element.addEventListener(type, function);`}
          />

          <Description>
            Referring back to the example, let's say you wish to alter a
            paragraph's text in response to a button element being clicked.
            Here's how to go about it:
          </Description>

          <Code
            code={`<body>
                
  <p id="myParagraph">This is an example paragraph</p>
  <button id="changeText">Change Text</button>

  <script>
    const button = document.querySelector("#changeText");
    function newText(event){
      const p =document.querySelector("#myParagraph");
      p.innerText = "The text has been changed";
    }
    button.addEventListener("click", newText);
  </script>

</body>
`}
          />

          <Description>
            The script element must be used as demonstrated above in order to
            add JavaScript code to an HTML document.
          </Description>

          <Description>
            Using the document.querySelector() function, the button element is
            chosen, and the addEventListener() method is then invoked on the
            element. This indicates that an event listener is connected to the
            button.
          </Description>

          <Description>
            Initially, you designate the kind of event to be attended to—in this
            example, a click event. The function to be executed when that event
            occurs is then specified.
          </Description>

          <Description>
            The newText function in the aforementioned code will be used when
            the click event is triggered.
          </Description>

          <Description>
            An event object containing details about the triggered event will
            also be sent by the event listener. This is the reason the newText
            function above has an event parameter.
          </Description>

          <Description>
            To view the event's specifics, log it to the console:
          </Description>

          <Code
            code={`function newText(event){
  console.log(event);
}`}
          />
        </section>
        <NextButton
          link="/learn-js/event-listeners-handling-events"
          text="Event Listeners and Handling Events"
        />
      </div>
    </div>
  );
}
