// import CreateCard from "./components/CreateCard";
import { Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';


import "./App.css";

import React, { useState, useEffect } from 'react';

var question_list;


const Flashcard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);


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
          {question.answer_text}
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
          {question.question_id-2000}.{question.question_text}
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

  const [question, setQuestion] = useState( {question: "What is the powerhouse of the cell?", answer: "mitochondria"}    )


function getNextQuestion() {

    console.log("Called?")

    fetch("http://localhost:3000/test")
    .then((response) => response.json())
    .then((data) => { 
      console.log(data);
      setQuestion(data['message'][0]); 
    })
    
  }

  useEffect(() => {
    getNextQuestion();
  }, [])




  // const questions = [
  //   {
  //     question: "What organelle lives in the rough ER?",
  //     answer: "ribosome",
  //   },
  //   {
  //     question: "What is the Big O runtime of merge sort?",
  //     answer: "nlogn"
  //   }, 
  //   {
  //     question: "What does GPU stand for?",
  //     answer: "graphical processing unit"
  //   }
  // ]


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
