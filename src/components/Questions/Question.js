import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Question.module.css";
import { GrLinkNext } from "react-icons/gr";

const Question = ({ question, onHandleNextClick, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNextClick = () => {
    onHandleNextClick(selectedOption);
    setSelectedOption("");
  };

  const handleSubmit = () => {
    onSubmit(selectedOption);
  };

  const nextStyles = {
    backgroundColor: "#dc3545",
    color: "white",
    width: "7rem",
    padding: "15px",
    marginRight: "-5rem",
    borderRadius: "1rem",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.25)",
  };

  const optionStyles = {
    display: "block",
    margin: "0.5rem 0",
  };

  return (
    <div className={classes.question}>
      <Card>
        <h2>Q{`${question.questionid}. ${question.question}`}</h2>
        {question.questionoption.map((option) => (
          <div key={option.optionid} style={optionStyles}>
            <label>
              <input
                type={question.questiontype.toLowerCase()}
                name={`question-${question.questionid}`}
                value={option.optionid}
                checked={selectedOption === option.optionid}
                onChange={() => handleOptionSelect(option.optionid)}
              />
              {option.optionvalue}
            </label>
          </div>
        ))}
      </Card>
      <div>
      <button type="button" style={nextStyles} onClick={handleNextClick}>
        <GrLinkNext />
      </button>
      <button type="submit" onClick={handleSubmit} >
        SUBMIT
      </button>
      </div>
    </div>
  );
};

export default Question;
