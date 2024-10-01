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

export default function Operators() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>Basic operators, maths</Topic>
        <Description>
          We know many operators from school. They are things like addition +,
          multiplication *, subtraction -, and so on.
        </Description>
        <Description>
          In this chapter, we’ll start with simple operators, then concentrate
          on JavaScript-specific aspects, not covered by school arithmetic.
        </Description>

        <Title>Terms: “unary”, “binary”, “operand”</Title>

        <Description>
          Before we move on, let’s grasp some common terminology.
        </Description>

        <ul className="flex flex-col gap-4">
          <li
            className="ml-6 list-disc list-inside"
            style={{
              textIndent: "-22px",
            }}
          >
            An operand – is what operators are applied to. For instance, in the
            multiplication of 5 * 2 there are two operands: the left operand is
            5 and the right operand is 2. Sometimes, people call these
            “arguments” instead of “operands”.
          </li>
          <li
            className="ml-6 list-disc list-inside"
            style={{
              textIndent: "-22px",
            }}
          >
            An operand – is what operators are applied to. For instance, in the
            multiplication of 5 * 2 there are two operands: the left operand is
            5 and the right operand is 2. Sometimes, people call these
            “arguments” instead of “operands”.
          </li>
        </ul>

        <Code
          code={`let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied`}
        />

        <Description>
          An operator is binary if it has two operands. The same minus exists in
          binary form as well:
        </Description>

        <Code
          code={`let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values`}
        />

        <Description>
          Formally, in the examples above we have two different operators that
          share the same symbol: the negation operator, a unary operator that
          reverses the sign, and the subtraction operator, a binary operator
          that subtracts one number from another.
        </Description>

        <Title>Maths</Title>
        <List
          items={[
            `Addition +,`,
            `Subtraction -,`,
            `Multiplication *,`,
            `Division /,`,
            `Remainder %,`,
            `Exponentiation **,`,
          ]}
        />

        <Description>
          The first four are straightforward, while % and ** need a few words
          about them.
        </Description>

        <Title>Remainder %</Title>

        <Description>
          The remainder operator %, despite its appearance, is not related to
          percents.
        </Description>
        <Description>
          The result of a % b is the remainder of the integer division of a by
          b.
        </Description>
        <Description>For instance:</Description>
        <Code
          code={`alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4`}
        />

        <Title>Exponentiation **</Title>
        <Description>
          The exponentiation operator a ** b raises a to the power of b.
        </Description>

        <Description>In school maths, we write that as ab.</Description>
        <Description>For instance:</Description>
        <Code
          code={`alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16`}
        />

        <Description>
          Just like in maths, the exponentiation operator is defined for
          non-integer numbers as well.
        </Description>

        <Description>
          For example, a square root is an exponentiation by ½:
        </Description>
        <Code
          code={`alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)`}
        />

        <Title>String concatenation with binary +</Title>
        <Description>
          Let’s meet the features of JavaScript operators that are beyond school
          arithmetics.
        </Description>

        <Description>Usually, the plus operator + sums numbers.</Description>
        <Description>
          But, if the binary + is applied to strings, it merges (concatenates)
          them:
        </Description>

        <Code
          code={`let s = "my" + "string";
alert(s); // mystring`}
        />

        <Description>
          Note that if any of the operands is a string, then the other one is
          converted to a string too.
        </Description>

        <Description>For example:</Description>
        <Code
          code={`alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"`}
        />

        <Description>
          See, it doesn’t matter whether the first operand is a string or the
          second one.
        </Description>

        <Description>Here’s a more complex example:</Description>
        <Code code={`alert(2 + 2 + '1' ); // "41" and not "221"`} />

        <Description>
          Here, operators work one after another. The first + sums two numbers,
          so it returns 4, then the next + adds the string 1 to it, so it’s like
          4 + '1' = '41'.
        </Description>

        <Code code={`alert('1' + 2 + 2); // "122" and not "14"`} />

        <Description>
          Here, the first operand is a string, the compiler treats the other two
          operands as strings too. The 2 gets concatenated to '1', so it’s like
          '1' + 2 = "12" and "12" + 2 = "122".
        </Description>

        <Description>Here’s the demo for subtraction and division:</Description>
        <Code
          code={`alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers`}
        />

        <Title>Numeric conversion, unary +</Title>
        <Description>
          The plus <Highlight>+</Highlight> exists in two forms: the binary form
          that we used above and the unary form.
        </Description>

        <Description>
          The unary plus or, in other words, the plus operator + applied to a
          single value, doesn’t do anything to numbers. But if the operand is
          not a number, the unary plus converts it into a number.
        </Description>

        <Description>For example:</Description>
        <Code
          code={`// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0`}
        />

        <Description>
          It actually does the same thing as <Highlight>Number(...)</Highlight>,
          but is shorter.
        </Description>

        <Description>
          The need to convert strings to numbers arises very often. For example,
          if we are getting values from HTML form fields, they are usually
          strings. What if we want to sum them?
        </Description>

        <Description>The binary plus would add them as strings:</Description>
        <Code
          code={`let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings`}
        />
        <Description>
          From a mathematician’s standpoint, the abundance of pluses may seem
          strange. But from a programmer’s standpoint, there’s nothing special:
          unary pluses are applied first, they convert strings to numbers, and
          then the binary plus sums them up.
        </Description>

        <Description>
          Why are unary pluses applied to values before the binary ones? As
          we’re going to see, that’s because of their higher precedence.
        </Description>

        <Title>Operator precedence</Title>

        <Description>
          If an expression has more than one operator, the execution order is
          defined by their precedence, or, in other words, the default priority
          order of operators.
        </Description>

        <Description>
          From school, we all know that the multiplication in the expression{" "}
          <Highlight>1 + 2 * 2 </Highlight>should be calculated before the
          addition. That’s exactly the precedence thing. The multiplication is
          said to have a higher precedence than the addition.
        </Description>

        <Description>
          Parentheses override any precedence, so if we’re not satisfied with
          the default order, we can use them to change it. For example, write (1
          + 2) * 2.
        </Description>

        <Description>
          There are many operators in JavaScript. Every operator has a
          corresponding precedence number. The one with the larger number
          executes first. If the precedence is the same, the execution order is
          from left to right.
        </Description>

        <Description>
          Here’s an extract from the precedence table (you don’t need to
          remember this, but note that unary operators are higher than
          corresponding binary ones):
        </Description>
      </div>
    </div>
  );
}
