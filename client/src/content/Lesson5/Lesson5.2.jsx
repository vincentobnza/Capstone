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

export default function Lesson5_Topic2() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <section id="section1">
          <Topic>JavaScript Arrays</Topic>
          <Description>
            An array is a special variable, which can hold more than one value:
          </Description>

          <Code
            visibleButton={false}
            code={`const cars = ["Ferrari", "Volvo", "BMW"]`}
          />
          <Title>Why use Arrays?</Title>
          <Description>
            For example, if you have a list of automobile names, you could store
            the cars in single variables like this:
          </Description>

          <Code
            visibleButton={false}
            code={`let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
`}
          />
          <Description>
            But what if you want to search for a specific car by looping across
            the fleet? And what if you had 300 cars instead of only 3?{" "}
          </Description>
          <Description>An array is the answer! </Description>
          <Description>
            A value can be accessed by using an index number, and an array can
            store several values under a single name.
          </Description>
        </section>

        <section id="section2">
          <Title>Creating an Array</Title>
          <Description>
            The simplest method for creating a JavaScript array is to use an
            array literal.
          </Description>

          <Description>Syntax:</Description>
          <Code code={`const cars = [car1, car2, ...];`} />
          <Description>
            Spaces and line breaks are not important. A declaration can span
            multiple lines:
          </Description>
        </section>
        <NextButton
          link="/learn-js/array-array-methods"
          text="Array and Array Methods"
        />
      </div>
    </div>
  );
}
