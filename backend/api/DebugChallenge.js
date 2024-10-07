const operator_debug = [
  {
    id: 1,
    description: "The addition result is incorrect.",
    code: `
    let result = 2 + 4;
    console.log(result); // Should output 6
    `,
    hint: "Check if the addition operator is correct.",
    correctCode: `
    let result = 2 + 4;
    console.log(result); // Correct output: 6
    `,
    solution: 6,
  },
];

module.exports = { operator_debug };
