// import CreateCard from "./components/CreateCard";
import { Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';


import "./App.css";

import React, { useState, useEffect } from 'react';


const Flashcard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/test") // Call the API route you want
      .then(response => response.json()) // You always have to run this to get the data
      .then(data => {
        // Treat "data" as a variable with the whole API response and do whatever within this function
        console.log(data)
      }) 
  }, [])

  function toggleShowAnswer() {
    setShowAnswer(!showAnswer)
  }
  return (
    showAnswer ? 
    
    <Card sx={{width: '20rem'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Answer
        </Typography>
        <br></br>
        
        <Typography variant="body2" color="text.secondary">
          {question.answer}
        </Typography>
        <br></br>

        <Button variant="contained" color="primary"  onClick={() => toggleShowAnswer()}>
          Show Question
        </Button>
        <br></br>
      </CardContent>
    </Card> 

    :

    <Card sx={{width: '20rem'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Question
        </Typography>
        <br></br>
        
        <Typography variant="body2" color="text.secondary">
          {question.question}
        </Typography>
        <br></br>

        <Button variant="contained" color="primary" onClick={() => toggleShowAnswer()}>
          Show Answer
        </Button>
        <br></br>
      </CardContent>
    </Card>  
  )
}


function App() {
  

  const [question, setQuestion] = useState({question: "What is the powerhouse of the cell?", answer: "mitochondria"})

  const questions = [
    {
      question: "What organelle lives in the rough ER?",
      answer: "ribosome",
    },
    {
      question: "What is the Big O runtime of merge sort?",
      answer: "nlogn"
    }, 
    {
      question: "What does GPU stand for?",
      answer: "graphical processing unit"
    }
  ]

  function getNextQuestion() {
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  }

  return (
    <div className="App">
      <Flashcard key={crypto.randomUUID()} question={question}></Flashcard>
      <br></br>
      <Button variant="contained" color="primary" onClick={() => getNextQuestion()}>
          Show Next Question
      </Button>
    </div>
  );
}

export default App;
