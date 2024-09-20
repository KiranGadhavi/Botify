import styles from '../page.module.css';
import React, { useState } from 'react';
import { model } from './chatbot';

export default function QuestionContainer() {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    function setQuestionValue(e : React.ChangeEvent<HTMLInputElement>) {
        setQuestion(e.target.value);
    }

    function handleQuestionSubmit() {
        (async () => {
            const prompt = question;
            const result = await model.generateContent(prompt);
            setAnswer(result.response.text());
          })();
    }

    return (
        <>
            <div className={styles.questionContainer}>
                <p>Hi, what is your question??</p>
                <input className={styles.questionContainerBox}
                type="text"
                onChange={setQuestionValue}
                value={question}
                placeholder="Type your question here"
                />
                <button 
                    className={styles.button} 
                    onClick={handleQuestionSubmit}
                >Ask your question</button>
            </div>
                <div className={styles.answerContainer}>
                <p>This is the answer to your question</p>
                <p 
                className={styles.answerContainerBox}
                >{answer}</p>
             </div>        
        </>

    )
}