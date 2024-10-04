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
  QuizButton,
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

export default function Lesson2_Topic1() {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <Topic>Operators</Topic>
        <Description>
          JavaScript operators are special symbols that perform operation on one
          or more operands (values). They are essential for manipulating data,
          performing calculations, and making decisions within your code.
        </Description>
        <Description>Types of operators: </Description>

        <Title>Arithmetic Operators</Title>
        <Description>Addition (+ ), add two operands (value)</Description>
        <Code code={`let result = 2 + 4 ;  // result will be 6`} />

        <Description>
          Subtraction ( - ), subtracts the second operand from the first
        </Description>

        <Code code={`let difference = 20 + 4 ;  // result will be 16`} />
        <Description>
          Multiplication ( * ), multiplies two operands.
        </Description>

        <Code code={`let product = 20 * 4 ;  // result will be 80`} />
        <Description>
          Division ( / ), divides the first operand by the second.
        </Description>

        <Code code={`let product = 20 / 4 ;  // result will be 5`} />
        <Description>
          Modulo ( % ), returns the reminder of the division.
        </Description>

        <Code code={`let remainder = 19 % 3 ;  // result will be 6`} />
        <Description>
          Increment ( ++ ), adds 1 to the operand, it’s either before or the
          after the operation.
        </Description>

        <Code
          code={`let  x = 4 ;  
let  y = ++x ;   // result will be x becomes 5, y is 5
`}
        />

        <Description>
          Decrement ( -- ), subtracts 1 from the operand, it’s either before of
          after the operation.
        </Description>

        <Code
          code={`let  x = 11 ;  
let  y = --x ;   // result will be x becomes 10, y is 10
`}
        />

        <Title>Comparison Operators:</Title>

        <Description>
          Equal to ( == ), checks if two operands are equal (loose quality).
        </Description>

        <Code
          code={`let  a = 5 ;  
let  b = "5" ;   
if(a == b){
console.log("Equal"); 
}  
// Output will be : Equal
`}
        />

        <Description>
          Not equal to ( != ), checks if two operands are not equal (loose
          inequality).
        </Description>

        <Code
          code={`let  a = 10 ;  
let  b = "10" ;   
if(a != b){
console.log("Not equal");
} 
// Output will be : Not equal
`}
        />

        <Description>
          Strictly equal to ( === ), check if two operands are equal in both
          value and type.
        </Description>

        <Code
          code={`let  a = 10 ;  
let  b = "10" ;   

if(a === b){
console.log("Strictly equal"); }  // Output will be : Nothing
`}
        />

        <Description>
          Strictly not equal to ( !== ), check if two operands are not equal in
          either value or type.
        </Description>

        <Code
          code={`let  a = 10 ;  
let  b = "10" ;   
// Output will be :  Strictly not equal
`}
        />

        <Description>
          {`Greater than ( > ), check if the first operand is greater than the
          second`}
        </Description>

        <Code
          code={`if (9 > 4) {
  console.log('Greater than');
} // Output will be :  Greater than
`}
        />

        <Description>
          {`Less than ( < ), checksif the first operand is less than the second.`}
        </Description>

        <div className="w-full flex items-center gap-3 justify-end">
          <QuizButton text="Operators" link="/quiz/lesson2" />
          <NextButton link="/learn-js/operators" text="Operators" />
        </div>
      </div>
    </div>
  );
}
