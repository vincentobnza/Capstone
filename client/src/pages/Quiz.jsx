import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

export default function Quiz() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-screen bg-white dark:bg-zinc-900 p-5 text-zinc-700 dark:text-zinc-300"
    >
      <div className="w-full flex max-w-screen-lg mx-auto p-5 justify-between">
        <h1>CodeScript Quiz</h1>

        <div
          className="cursor-pointer duration-500 transition ease-in-out"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
        </div>
      </div>
      <QuizCard />
    </motion.div>
  );
}

const QuizCard = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const { quizType } = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `http://localhost:8000/api/quiz/${quizType}`
        );
        setQuizData(data);
        setError(null);
      } catch (err) {
        setError("Failed to load quiz. Please try again later.");
        console.error("Error fetching quiz:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuiz();
  }, [quizType]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    // Check if answer is correct and update score
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = Array.isArray(currentQuestion.answer)
      ? currentQuestion.answer.includes(selectedAnswer)
      : currentQuestion.answer === selectedAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    // Store user's answer
    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion.question,
        userAnswer: selectedAnswer,
        correctAnswer: currentQuestion.answer,
        isCorrect,
      },
    ]);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center max-w-screen-lg mx-auto p-5">
        <p>Loading quiz...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center max-w-screen-lg mx-auto p-5">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!quizData || quizData.length === 0) {
    return (
      <div className="w-full flex justify-center items-center max-w-screen-lg mx-auto p-5">
        <p>No quiz questions available.</p>
      </div>
    );
  }

  if (quizCompleted) {
    const quizDetails = [
      {
        title: "Total Question",
        value: quizData.length,
      },

      {
        title: "Correct Answers",
        value: score,
      },
      {
        title: "Wrong Answers",
        value: quizData.length - score,
      },
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col justify-center items-center max-w-screen-lg mx-auto p-5 gap-6 text-center"
      >
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/391/041/original/trophy-3d-illustration-free-png.png"
            alt="trophy"
            className="w-28 md:w-[120px]"
          />
        </motion.div>

        <h1 className="text-2xl md:text-4xl text-zinc-800 dark:text-zinc-100">
          Quiz Completed
        </h1>
        <h2 className="text-zinc-700 dark:text-zinc-500 text-sm md:text-lg font-medium">
          You've scored:{" "}
          <span className={score <= 4 ? "text-red-500" : "text-green-500"}>
            {score}
          </span>{" "}
          out of {quizData.length}
        </h2>

        <div className="grid w-full max-w-lg md:grid-cols-3 gap-2">
          {quizDetails.map((details, idx) => (
            <div
              key={idx}
              className="flex flex-col text-left gap-2 p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-lg"
            >
              <h1 className="text-xs font-semibold text-zinc-400">
                {details.title}
              </h1>
              <h1 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {details.value}
              </h1>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-2">
          <Button
            radius="none"
            className="bg-yellow-600 text-white text-sm border-2 border-yellow-500"
          >
            View Accuracy
          </Button>
          <Link to="/leaderboard">
            <Button
              radius="none"
              className="bg-zinc-600 text-white text-sm border-2 border-zinc-500"
            >
              Leaderboard
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="w-full flex flex-col justify-center items-center max-w-screen-lg mx-auto p-5 space-y-6 text-center">
      <h1 className="text-3xl mb-8">{currentQuestion.question}</h1>

      <div className="w-full max-w-lg space-y-2">
        {Object.entries(currentQuestion.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleAnswerSelection(key)}
            className={`w-full p-4 rounded text-left text-sm ${
              selectedAnswer === key
                ? "bg-orange-500 text-white"
                : "bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <Button
          onClick={handleNextQuestion}
          className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          {currentQuestionIndex === quizData.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </Button>
      )}

      <div className="mt-8 text-sm">
        Question {currentQuestionIndex + 1} of {quizData.length}
      </div>
    </div>
  );
};
