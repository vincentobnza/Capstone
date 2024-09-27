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

export default function DataTypes() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>JavaScript Data Types</Topic>
        <Description>
          A value in JavaScript is always of a certain type. For example, a
          string or a number.
        </Description>
        <Description>
          There are eight basic data types in JavaScript. Here, we’ll cover them
          in general and in the next chapters we’ll talk about each of them in
          detail.
        </Description>
        <Description>
          We can put any type in a variable. For example, a variable can at one
          moment be a string and then store a number:
        </Description>
        <Code
          code={`// no error
let message = "hello";
message = 123456;`}
        />
        <Description>
          Programming languages that allow such things, such as JavaScript, are
          called “dynamically typed”, meaning that there exist data types, but
          variables are not bound to any of them.
        </Description>
        <Title>Number</Title>
        <Code
          code={`let n = 123;
n = 12.345;`}
        />
        <Description>
          The <i>number</i> type represents both integer and floating point
          numbers.
        </Description>
        <Description>
          There are many operations for numbers, e.g. multiplication{" "}
          <Highlight>*</Highlight>, division
          <Highlight>/</Highlight>, addition <Highlight>+</Highlight>,
          subtraction <Highlight>-</Highlight>, and so on.
        </Description>
        <Description>
          Besides regular numbers, there are so-called “special numeric values”
          which also belong to this data type: <Highlight>Infinity</Highlight>,
          <Highlight>-Infinity</Highlight> and <Highlight>NaN</Highlight>.
        </Description>
        <ul className="mt-8">
          <li>
            <Highlight>Infinity</Highlight> represents the mathematical Infinity
            ∞. It is a special value that’s greater than any number. We can get
            it as a result of division by zero:
          </li>

          <Description>
            We can get it as a result of division by zero:
          </Description>

          <Code code={`alert( 1 / 0 ); // Infinity`} />

          <Description>Or just reference it directly:</Description>
          <Code code={`alert( Infinity ); // Infinity`} />

          <li>
            <Highlight>NaN</Highlight> represents a computational error. It is a
            result of an incorrect or an undefined mathematical operation, for
            instance:
          </li>

          <Code
            code={`alert( "not a number" / 2 ); // NaN, such division is erroneous`}
          />

          <li>
            <Highlight>NaN</Highlight> is sticky. Any further mathematical
            operation on <Highlight>NaN</Highlight> returns{" "}
            <Highlight>NaN</Highlight>:
          </li>

          <Code
            code={`alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN`}
          />

          <Description>
            So, if there’s a NaN somewhere in a mathematical expression, it
            propagates to the whole result (there’s only one exception to that:
            NaN ** 0 is 1).
          </Description>
        </ul>
        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            👉 Mathematical operations are safe
          </h3>

          <Description>
            Doing maths is “safe” in JavaScript. We can do anything: divide by
            zero, treat non-numeric strings as numbers, etc.
          </Description>

          <Description>
            The script will never stop with a fatal error (“die”). At worst,
            we’ll get <Highlight>NaN</Highlight> as the result.
          </Description>

          <Description>
            Special numeric values formally belong to the “number” type. Of
            course they are not numbers in the common sense of this word.
          </Description>

          <Description>
            We’ll see more about working with numbers in the chapter Numbers.
          </Description>
        </div>

        <Title>BigInt</Title>
        <Description>
          In JavaScript, the “number” type cannot safely represent integer
          values larger than (253-1) (that’s 9007199254740991), or less than
          -(253-1) for negatives.
        </Description>
        <Description>
          To be really precise, the “number” type can store larger integers (up
          to 1.7976931348623157 * 10308), but outside of the safe integer range
          ±(253-1) there’ll be a precision error, because not all digits fit
          into the fixed 64-bit storage. So an “approximate” value may be
          stored.
        </Description>

        <Description>
          For example, these two numbers (right above the safe range) are the
          same:
        </Description>

        <Code
          code={`console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992`}
        />

        <Description>
          So to say, all odd integers greater than (253-1) can’t be stored at
          all in the “number” type.
        </Description>

        <Description>
          For most purposes ±(253-1) range is quite enough, but sometimes we
          need the entire range of really big integers, e.g. for cryptography or
          microsecond-precision timestamps.
        </Description>

        <Description>
          BigInt type was recently added to the language to represent integers
          of arbitrary length.
        </Description>

        <Description>
          A BigInt value is created by appending n to the end of an integer:
        </Description>

        <Code
          code={`// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;`}
        />

        <Description>
          As BigInt numbers are rarely needed, we don’t cover them here, but
          devoted them a separate chapter BigInt. Read it when you need such big
          numbers.
        </Description>

        <Title>String</Title>

        <Description>
          A string in JavaScript must be surrounded by quotes.
        </Description>
        <Code
          code={`
    const str = "Hello";
    const str2 = 'Single quotes are ok too';
    const phrase = \`can embed another \${str}\`;
  `}
        />

        <Description>In JavaScript, there are 3 types of quotes.</Description>
        <ul className="text-zinc-700 dark:text-zinc-400 flex flex-col gap-3">
          <li className="list-decimal list-inside">
            Double quotes: <Highlight>"Hello"</Highlight>.
          </li>
          <li className="list-decimal list-inside">
            Single quotes: <Highlight>'Hello'</Highlight>.
          </li>
          <li className="list-decimal list-inside">
            Backticks: <Highlight>`Hello`</Highlight>.
          </li>
        </ul>

        <Description>
          Double and single quotes are “simple” quotes. There’s practically no
          difference between them in JavaScript.
        </Description>

        <Description>
          Backticks are “extended functionality” quotes. They allow us to embed
          variables and expressions into a string by wrapping them in{" "}
          <Highlight>{"${...}"}</Highlight>, for example:
        </Description>

        <Code
          code={`
    let name = "John";

    // embed a variable
    alert(\`Hello, \${name}!\`); // Hello, John!

    // embed an expression
    alert(\`the result is \${1 + 2}\`); // the result is 3
  `}
        />

        <Description>
          The expression inside <Highlight>{"${...}"}</Highlight> is evaluated
          and the result becomes a part of the string. We can put anything in
          there: a variable like <Highlight>name</Highlight> or an arithmetical
          expression like <Highlight>1 + 2</Highlight> or something more
          complex.
        </Description>

        <Description>
          Please note that this can only be done in backticks. Other quotes
          don’t have this embedding functionality!
        </Description>

        <Code
          code={`alert( "the result is ${1 + 2}" ); // the result is ${
            1 + 2
          } (double quotes do nothing)`}
        />

        <Description>
          We’ll cover strings more thoroughly in the chapter Strings.
        </Description>
      </div>
    </div>
  );
}
