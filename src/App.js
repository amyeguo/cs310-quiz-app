// import CreateCard from "./components/CreateCard";
import { Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./App.css";
import React, { useState, useEffect } from "react";
import Flashcard from "./components/Flashcard";

function App() {
  const [questionIndex, setQuestionIndex] = useState(null);
  const [questionList, setQuestionList] = useState([]);
  const [question, setQuestion] = useState({});

  function getQuestionList() {
    fetch("http://localhost:3000/test")
      .then((response) => response.json())
      .then((data) => {
        setQuestionList(data["message"]);
      });
  }

  function getNextQuestion() {
    let currInd = questionIndex;
    if (currInd < questionList.length) {
      let newInd = currInd + 1;
      setQuestionIndex(newInd);
      setQuestion(questionList[questionIndex]);
    }
  }

  function startQuiz() {
    setQuestionIndex(0);
    setQuestion(questionList[0]);
  }

  useEffect(() => {
    getQuestionList();
  }, []);

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
      {questionIndex === null ? (
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={() => startQuiz()}
        >
          Start Quiz
        </Button>
      ) : (
        <>
          <Flashcard key={crypto.randomUUID()} question={question}></Flashcard>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => getNextQuestion()}
          >
            Next Question
          </Button>
        </>
      )}
    </div>
  );
}

export default App;
