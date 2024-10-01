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
        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            👉 There is no character type.
          </h3>

          <Description>
            In some languages, there is a special “character” type for a single
            character. For example, in the C language and in Java it is called
            “char”.
          </Description>

          <Description>
            In JavaScript, there is no such type. There’s only one type:{" "}
            <Highlight>string</Highlight>. A string may consist of zero
            characters (be empty), one character or many of them.
          </Description>
        </div>

        <Title>Boolean (logical type)</Title>

        <Description>
          The boolean type has only two values: <Highlight>true</Highlight> and{" "}
          <Highlight>false</Highlight>.
        </Description>

        <Description>
          This type is commonly used to store yes/no values:{" "}
          <Highlight>true</Highlight> means “yes, correct”, and{" "}
          <Highlight>false</Highlight> means “no, incorrect”.
        </Description>

        <Description>For Instance: </Description>

        <Code
          code={`let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")`}
        />

        <Description>
          We’ll cover booleans more deeply in the chapter Logical operators.
        </Description>

        <Title>The “null” value</Title>

        <Description>
          The special <Highlight>null</Highlight> value does not belong to any
          of the types described above.
        </Description>

        <Description>
          It forms a separate type of its own which contains only the{" "}
          <Highlight>null </Highlight>
          value:
        </Description>

        <Code code={`let age = null;`} />

        <Description>
          In JavaScript, null is not a “reference to a non-existing object” or a
          “null pointer” like in some other languages.
        </Description>

        <Description>
          It’s just a special value which represents “nothing”, “empty” or
          “value unknown”.
        </Description>

        <Description>The code above states that age is unknown.</Description>

        <Title>The “undefined” value</Title>
        <Description>
          The special value <Highlight>undefined</Highlight> also stands apart.
          It makes a type of its own, just like <Highlight>null</Highlight>.
        </Description>
        <Description>
          The meaning of <Highlight>undefined</Highlight> is “value is not
          assigned”.
        </Description>
        <Description>
          If a variable is declared, but not assigned, then its value is
          <Highlight>undefined</Highlight>.:
        </Description>

        <Code
          code={`let age;

alert(age); // shows "undefined"`}
        />

        <Description>
          Technically, it is possible to explicitly assign undefined to a
          variable:
        </Description>

        <Code
          code={`let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"`}
        />

        <Highlight>
          …But we don’t recommend doing that. Normally, one uses null to assign
          an “empty” or “unknown” value to a variable, while undefined is
          reserved as a default initial value for unassigned things.
        </Highlight>

        <Title>Objects and Symbols</Title>

        <Description>
          The <Highlight>object</Highlight> type is special.
        </Description>

        <Description>
          All other types are called “primitive” because their values can
          contain only a single thing (be it a string or a number or whatever).
          In contrast, objects are used to store collections of data and more
          complex entities.
          <br />
          <br />
          Being that important, objects deserve a special treatment. We’ll deal
          with them later in the chapter Objects, after we learn more about
          primitives.
          <br />
          <br />
          The <Highlight>symbol</Highlight> type is used to create unique
          identifiers for objects. We have to mention it here for the sake of
          completeness, but also postpone the details till we know objects.
        </Description>

        <Title>The typeof operator</Title>
        <Description>
          The <Highlight>typeof</Highlight> operator returns the type of the
          operand. It’s useful when we want to process values of different types
          differently or just want to do a quick check.
        </Description>

        <Description>
          A call to <Highlight>typeof x</Highlight> returns a string with the
          type name:
        </Description>

        <Code
          code={`typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)`}
        />

        <Description>
          The last three lines may need additional explanation:
        </Description>

        <List
          items={[
            `Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.`,
            `The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.`,
            `The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.`,
          ]}
        />

        <div className="mt-5 mb-3 w-full p-5 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 relative flex flex-col gap-3">
          <h3 className="font-bold text-zinc-700 dark:text-zinc-200">
            📋 The typeof(x) syntax
          </h3>

          <Description>
            You may also come across another syntax: typeof(x). It’s the same as
            typeof x.
          </Description>

          <Description>
            To put it clear: typeof is an operator, not a function. The
            parentheses here aren’t a part of typeof. It’s the kind of
            parentheses used for mathematical grouping.
          </Description>

          <Description>
            Usually, such parentheses contain a mathematical expression, such as
            (2 + 2), but here they contain only one argument (x). Syntactically,
            they allow to avoid a space between the typeof operator and its
            argument, and some people like it.
          </Description>

          <Description>
            Some people prefer typeof(x), although the typeof x syntax is much
            more common.
          </Description>
        </div>

        <Title>Summary</Title>

        <Description>There are 8 basic data types in JavaScript.</Description>

        <Description>Seven primitive data types:</Description>

        <List
          items={[
            `number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).`,
            `bigint for integer numbers of arbitrary length.`,
            `string for strings. A string may have zero or more characters, there’s no separate single-character type.`,
            `boolean for true/false.`,
            `null for unknown values – a standalone type that has a single value null.`,
            `undefined for unassigned values – a standalone type that has a single value undefined.`,
            `symbol for unique identifiers.`,
          ]}
        />

        <Description>And one non-primitive data type:</Description>
        <List items={[`object for more complex data structures.`]} />
        <Description>
          The typeof operator allows us to see which type is stored in a
          variable.
        </Description>

        <List
          items={[
            `Usually used as typeof x, but typeof(x) is also possible.`,
            `Returns a string with the name of the type, like "string".`,
            `For null returns "object" – this is an error in the language, it’s not actually an object.`,
          ]}
        />

        <Description>
          In the next chapters, we’ll concentrate on primitive values and once
          we’re familiar with them, we’ll move on to objects.
        </Description>

        <NextButton
          link="/learn-js/fundamentals/operators"
          text="Basic operators, maths"
        />
      </div>
    </div>
  );
}
