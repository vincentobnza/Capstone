const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { Task } = require("./api/Task");
const { IntroductionQuiz } = require("./api/Quiz");

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
app.get("/api/quiz/:quizType", (req, res) => {
  const { quizType } = req.params;

  const quizzes = {
    introduction: IntroductionQuiz,
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
