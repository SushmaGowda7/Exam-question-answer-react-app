// import Header from './components/Layout/Header';
// import Question from './components/Questions/Question';
// import { QuestionProvider } from './store/QuestionContext';
// import questions from './components/Questions/questions.json';

// function App() {
//   return (
//     <QuestionProvider>
//       <Header />
//       <main>
//         <Question questions={questions}/>
//       </main>
//     </QuestionProvider>
//   );
// }

import React from "react";
import { QuestionProvider } from "./store/QuestionContext";
import QuestionsPage from "./components/Questions/QuestionsPage";
import ResultsPage from "./components/Questions/ResultsPage";
import questions from "./components/Questions/questions.json";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";

const App = () => {
  return (
    <QuestionProvider>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <QuestionsPage questions={questions.questions} />
          </Route>
          <Route path='/results'>
            <ResultsPage questions={questions.questions}/>
          </Route>
        </Switch>
      </main>
    </QuestionProvider>
  )
}

export default App;
