import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  questionCount: {
    fontSize: 14,
  },
}));

const QuestionCard = ({ quiz }) => {
  const { questionCount } = useStyles();
  const { question, choices, answer } = quiz;
  const options = Object.values(choices);

  const handleOptions = (e) => {
    e.preventDefault();
    console.log("event onclick", e.currentTarget.value);
  };

  return (
    <Card>
      {JSON.stringify(quiz)}
      <CardContent>
        <Typography
          className={questionCount}
          color="textSecondary"
          gutterBottom
        >
          Question 1/10
        </Typography>
        <Typography variant="h6">{question}</Typography>
        <Typography variant="body2" component="div">
          {options.map((option, index) => (
            <Button
              variant="contained"
              key={index}
              onClick={handleOptions}
              value={option}
            >
              {option}
            </Button>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
