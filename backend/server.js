const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { Task } = require("./api/Task");
const {
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson8,
} = require("./api/Quiz");
const { operator_debug } = require("./api/DebugChallenge");

const PORT = process.env.PORT || 9000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the CodeScript API" });
});

app.get("/api/tasks", (req, res) => {
  try {
    res.json(Task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/challenges/:challenge", (req, res) => {
  const { challenge } = req.params;

  const challenges = {
    operators: operator_debug,
    // Add other challenges here if necessary
  };

  const challengeData = challenges[challenge];

  if (!challengeData) {
    return res.status(404).json({ error: "Challenge not found" });
  }

  res.json({ code: challengeData.code });
});
app.get("/api/quiz/:quizType", (req, res) => {
  const { quizType } = req.params;

  const quizzes = {
    lesson1: Lesson1,
    lesson2: Lesson2,
    lesson3: Lesson3,
    lesson4: Lesson4,
    lesson5: Lesson5,
    lesson6: Lesson6,
    lesson8: Lesson8,
  };

  const quizData = quizzes[quizType];

  if (!quizData) {
    return res.status(404).json({ error: "Quiz not found" });
  }

  res.json(quizData);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
