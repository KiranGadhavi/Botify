"use client";

import React from "react";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import animationData from "./components/animation/animation.json";
import QuestionContainer from "./components/questionContainer";

function App() {
  //const [question, setQuestion] = useState('');
  //const [answer, setAnswer] = useState('');

  //const handleQuestionSubmit = () => {
  // Add logic to interact with AI here
  //setAnswer("This is the response to your question.");
  //};

  return (
    <div className={styles.appContainer}>
      <header>
        <h1 className={styles.title}>The Know-it-all</h1>
        <div className={styles.icon}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </header>
      <QuestionContainer />
    </div>
  );
}

export default App;
