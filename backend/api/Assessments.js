const Assessments = [
  {
    id: 1,
    title: "Declare a Variable",
    description:
      "Declare a variable named 'greeting' and assign it the value 'Hello, World!'. Then, print the value of 'greeting' to the console. Output should be: 'Hello, World!'.",
    initialCode: "// Your code here\n",
    expectedOutput: "Hello, World!",
    points: 10,
  },
  {
    id: 2,
    title: "If Statement",
    description:
      "Write an if statement that checks if 8 is greater than 3. If true, print 'if block executed' to the console. Output should be: 'if block executed'.",
    initialCode: "// Your code here\n",
    expectedOutput: "if block executed",
    points: 10,
  },
  {
    id: 3,
    title: "Else Statement",
    description:
      "Write an if-else statement that checks if 'apple' is equal to 'banana'. If true, print 'if block executed', otherwise print 'else block executed'. Output should be: 'else block executed'.",
    initialCode: "// Your code here\n",
    expectedOutput: "else block executed",
    points: 10,
  },
  {
    id: 4,
    title: "For Loop - Display Text",
    description:
      "Write a for loop that prints the phrase 'Hello, World!' five times. Output should be: 'Hello, World!' printed five times.",
    initialCode: "// Your code here\n",
    expectedOutput:
      "Hello, World!\nHello, World!\nHello, World!\nHello, World!\nHello, World!",
    points: 10,
  },

  {
    id: 5,
    title: "For Loop - Sequence of Numbers",
    description:
      "Write a for loop that prints the numbers from 1 to 5. Output should be: '1, 2, 3, 4, 5'.",
    initialCode: "// Your code here\n",
    expectedOutput: "1\n2\n3\n4\n5",
    points: 10,
  },
  {
    id: 6,
    title: "Function Declaration - Color Info",
    description:
      "Create a function `generateInfo` that accepts one parameter `color`. It should return a string 'Apple is color {color}' where {color} is replaced with the argument passed. Test it by calling `generateInfo('green')`.",
    initialCode:
      "function generateInfo(color) {\n  // Your code here\n}\n\nconst apple = generateInfo('green');\nconsole.log(apple);",
    expectedOutput: "Apple is color green",
    points: 10,
  },
  {
    id: 7,
    title: "Create an Object - Car Details",
    description:
      "Create an object `car` that contains properties `brand`, `model`, and `year`. Add a method `start` to the object, which logs 'Starting the {brand} {model}' to the console. Test it by calling `car.start()`.",
    initialCode:
      "const car = {\n  // Add properties and methods here\n};\n\ncar.start();",
    expectedOutput: "Starting the {brand} {model}",
    points: 10,
  },
];

module.exports = { Assessments };
