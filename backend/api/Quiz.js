const IntroductionQuiz = [
  {
    id: 1,
    question: "What was the original purpose of JavaScript?",
    options: {
      a: "To improve web page loading speed",
      b: "To add dynamic content to web pages",
      c: "To build mobile applications",
      d: "To create a scripting alternative to Java",
    },
    answer: "b",
  },
  {
    id: 2,
    question: "What was JavaScript's original name?",
    options: {
      a: "JScript",
      b: "WebScript",
      c: "LiveScript",
      d: "ScriptMaster",
    },
    answer: "c",
  },
  {
    id: 3,
    question: "Why was JavaScript renamed from its original name?",
    options: {
      a: "Because JavaScript is a part of Java",
      b: "Java was very popular at the time",
      c: "To avoid conflicts with other programming languages",
      d: "It was originally intended for backend development",
    },
    answer: "b",
  },
  {
    id: 4,
    question: "What specification defines JavaScript as a separate language?",
    options: {
      a: "W3C",
      b: "ECMA",
      c: "ISO",
      d: "RFC",
    },
    answer: "b",
  },
  {
    id: 5,
    question: "Which of the following is NOT a key feature of JavaScript?",
    options: {
      a: "Fully integrates with HTML and CSS",
      b: "Difficult tasks are simplified",
      c: "Compatible with all popular browsers",
      d: "Requires a server to execute",
    },
    answer: "d",
  },
  {
    id: 6,
    question:
      "Which of the following is a free, cross-platform IDE for JavaScript development?",
    options: {
      a: "Notepad++",
      b: "Visual Studio Code",
      c: "WebStorm",
      d: "Dreamweaver",
    },
    answer: "b",
  },
  {
    id: 7,
    question:
      "How can JavaScript code be added to an HTML page? (Select all that apply)",
    options: {
      a: "Using the <script> tag",
      b: "Using inline event handlers like onclick",
      c: "Linking an external .js file",
      d: "Using the <link> tag",
    },
    answer: ["a", "b", "c"],
  },
  {
    id: 8,
    question:
      "Which of the following is a good practice when adding JavaScript code to a webpage?",
    options: {
      a: "Writing all JavaScript inline",
      b: "Separating JavaScript into an external .js file",
      c: "Embedding all code between <style> tags",
      d: "Placing JavaScript at the beginning of the HTML document",
    },
    answer: "b",
  },
  {
    id: 9,
    question:
      "What happens when you use the onclick attribute in a button element?",
    options: {
      a: "The button automatically submits a form",
      b: "The associated JavaScript code is executed when the button is clicked",
      c: "The button changes color on click",
      d: "The page is reloaded",
    },
    answer: "b",
  },
  {
    id: 10,
    question:
      "What is the best way to maintain JavaScript code when using it across multiple pages?",
    options: {
      a: "Write the code inline on every page",
      b: "Use the onload event in each page",
      c: "Store the JavaScript in an external file and link it using the <script> tag",
      d: "Use the style attribute to embed JavaScript",
    },
    answer: "c",
  },
];

module.exports = { IntroductionQuiz };
