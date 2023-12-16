import React, { useState } from 'react';
import { QuizData } from '../quizdata/QuizData';
import ShowResult from './ShowResult';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = (direction) => {
        updateScore();
        if (direction === 'next') {
            if (currentQuestion < QuizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setClickedOption(0);
            } else {
                setShowResult(true);
            }
        } else if (direction === 'prev' && currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setClickedOption(0);
        }
    };

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    };

    return (
        <div className="my-component">
            <p className="heading-txt">Quiz</p>
            <div className="container">
                {showResult ? (
                    <ShowResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 ? 'checked' : null}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        <div className='button-container'>
                           
                           <input type="button" value="Previous" id="prev-button" onClick={() => changeQuestion('prev')}/>
                           
                          <input type="button" value="Next" id="next-button" onClick={() => changeQuestion('next')} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
