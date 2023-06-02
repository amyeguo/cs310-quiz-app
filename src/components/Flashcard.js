import { Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const Flashcard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

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
          {question.answer_text}
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
          Question {question.question_id - 2000}
        </Typography>
        <br></br>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "30px" }}
        >
          {question.question_text}
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

export default Flashcard;
