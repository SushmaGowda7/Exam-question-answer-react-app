import React, { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  return <QuestionContext.Provider value={{ answers, setAnswers }}>{children}</QuestionContext.Provider>;
};
