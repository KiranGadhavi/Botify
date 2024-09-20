import styles from '../page.module.css';
import React, { useState } from 'react';
import { model } from './chatbot';

export default function QuestionContainer() {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    function setQuestionValue(e : React.ChangeEvent<HTMLInputElement>) {
        setQuestion(e.target.value);
    }

    function handleQuestionSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        (async () => {
            const prompt = "Context: Answer the question as a " + (e.target as HTMLButtonElement).value + " know it all and keep responses to no more than 75 words. Question: " + question;
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
                <div className={styles.buttonsGroup}>
                <button 
                    className={styles.button} 
                    onClick={handleQuestionSubmit}
                    value="funny"
                    >Ask funny bot</button>
                <button 
                    className={styles.button} 
                    onClick={handleQuestionSubmit}
                    value="rude"
                    >Ask rude bot</button>
                <button 
                    className={styles.button} 
                    onClick={handleQuestionSubmit}
                    value="happy"
                    >Ask happy bot</button>
                </div>
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