import React, { useContext } from "react";
import { QuestionContext } from "../../store/QuestionContext";
import classes from "./ResultPage.module.css";
import Card from "../UI/Card";

const ResultsPage = ({ questions }) => {
  const { answers } = useContext(QuestionContext);

  return (
    <div className={classes.result}>
      {questions.map((question, index) => {
        const selectedOption = question.questionoption.find(
          (option) => option.optionid === answers[index]
        );
        return (
          <Card>
          <div key={question.questionid}>
            <h2>Q{`${question.questionid}. ${question.question}`}</h2>
            <p>
              Selected Option:{" "}
              {selectedOption ? selectedOption.optionvalue : "Not answered"}
            </p>
          </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ResultsPage;
