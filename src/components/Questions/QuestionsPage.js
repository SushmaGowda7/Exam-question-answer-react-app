import React, { useState } from "react";
import Question from "./Question";
import { useHistory } from "react-router-dom";

const QuestionsPage = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const history = useHistory();
  const [answers, setAnswers] = useState({});

  const handleSubmit = (selectedAnswer) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: selectedAnswer
    });
    history.push('/results');
  };

  const handleNextClick = (selectedAnswer) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: selectedAnswer
    });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      history.push({
        pathname: "/results",
        state: { answers },
      });
    }
  };

  return (
    <div>
      <Question
        key={questions[currentQuestionIndex].questionid}
        question={questions[currentQuestionIndex]}
        onHandleNextClick={handleNextClick}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default QuestionsPage;
