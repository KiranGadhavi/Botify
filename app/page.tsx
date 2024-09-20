'use client'

import React from 'react';
import styles from'./page.module.css';
import Lottie  from 'lottie-react';
import animationData from './components/animation.json'; 

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
      <div className={styles.questionContainer}>
        <p>Hi, what is your question??</p>
        <input className={styles.questionContainerBox}
          type="text"
          //value={question}
          placeholder="Type your question here"
        />
        <button className={styles.button} >Ask your question</button>
      </div>
      <div className={styles.answerContainer}>
        <p>This is the answer to your question</p>
        <input className={styles.answerContainerBox}
        />
      </div>
    </div>
  );
}

export default App;
