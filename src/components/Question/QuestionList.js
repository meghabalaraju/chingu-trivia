import React from "react";
import { QuestionCard } from "components/Question";

const QuestionList = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => (
        <QuestionCard key={index} quiz={question} />
      ))}
    </>
  );
};

export default QuestionList;
