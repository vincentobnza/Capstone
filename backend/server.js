const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { IntroductionData } = require("./api/Chapter1Data");

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

app.get("/api/contents", (req, res) => {
  try {
    res.json(IntroductionData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
