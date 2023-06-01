// import CreateCard from "./components/CreateCard";
import { Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import "./App.css";

import React, { useState, useEffect } from "react";

const Flashcard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/test") // Call the API route you want
      .then((response) => response.json()) // You always have to run this to get the data
      .then((data) => {
        // Treat "data" as a variable with the whole API response and do whatever within this function
        console.log(data);
      });
  }, []);

  function toggleShowAnswer() {
    setShowAnswer(!showAnswer);
  }

  const cardStyle = {
    width: "40rem",
    height: "20rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #0078D7",
    boxShadow: "none",
  };

  const cardContentStyle = {
    margin: "auto",
    textAlign: "center",
    color: "#0078D7",
  };

  return showAnswer ? (
    <Card style={cardStyle}>
      <CardContent style={cardContentStyle} sx={{ width: "80%" }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          Answer
        </Typography>
        <br></br>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "30px" }}
        >
          {question.answer}
        </Typography>
        <br></br>

        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={() => toggleShowAnswer()}
        >
          Show Question
        </Button>
        <br></br>
      </CardContent>
    </Card>
  ) : (
    <Card style={cardStyle}>
      <CardContent style={cardContentStyle} sx={{ width: "80%" }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          Question
        </Typography>
        <br></br>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "30px" }}
        >
          {question.question}
        </Typography>
        <br></br>

        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={() => toggleShowAnswer()}
        >
          Show Answer
        </Button>
        <br></br>
      </CardContent>
    </Card>
  );
};

function App() {
  const [question, setQuestion] = useState({
    question: "What is the powerhouse of the cell?",
    answer: "mitochondria",
  });

  const questions = [
    {
      question: "What organelle lives in the rough ER?",
      answer: "ribosome",
    },
    {
      question: "What is the Big O runtime of merge sort?",
      answer: "nlogn",
    },
    {
      question: "What does GPU stand for?",
      answer: "graphical processing unit",
    },
  ];

  function getNextQuestion() {
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  }

  const centerStyle = {
    display: "grid",
    placeItems: "center",
    height: "100vh",
  };

  return (
    <div className="App" style={centerStyle}>
      <Typography
        variant="h1"
        component="div"
        sx={{
          margin: "auto",
          color: "#0078D7",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        Quiz App
      </Typography>
      <Flashcard key={crypto.randomUUID()} question={question}></Flashcard>
      <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: "none" }}
        onClick={() => getNextQuestion()}
      >
        Next Question
      </Button>
    </div>
  );
}

export default App;
