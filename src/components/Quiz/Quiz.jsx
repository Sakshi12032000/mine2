import React, { useState } from 'react';
import '../Quiz/Quiz.css';

function Quiz() {

  const questions = [
    {
      questionText: 'Which one of the following is not a Java feature?',
      answerOptions: [
        { answerText: 'Object-oriented', isCorrect: false },
        { answerText: 'Dynamic and Extensible', isCorrect: false },
        { answerText: 'Use of pointers', isCorrect: true },
        { answerText: 'Portable', isCorrect: false },
      ],
    },
    {
      questionText: 'Which component is used to compile, debug and execute the java programs?',
      answerOptions: [
        { answerText: 'JRE', isCorrect: false },
        { answerText: 'JDK', isCorrect: true },
        { answerText: 'JVM', isCorrect: false },
        { answerText: 'JIT', isCorrect: false },
      ],
    },
    {
      questionText: 'Which statement is true about Java?',
      answerOptions: [
        { answerText: ' Java is a sequence-dependent programming language', isCorrect: false },
        { answerText: ' Java is a platform-independent programming language', isCorrect: true },
        { answerText: ' Java is a platform-dependent programming language', isCorrect: false },
        { answerText: 'Java is a code dependent programming language', isCorrect: false },
      ],
    },
    {
      questionText: 'Who invented Java Programming?',
      answerOptions: [
        { answerText: 'Guido van Rossum', isCorrect: false },
        { answerText: 'Dennis Ritchie', isCorrect: false },
        { answerText: 'Bjarne Stroustrup', isCorrect: false },
        { answerText: 'James Gosling', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following is not an OOPS concept in Java?',
      answerOptions: [
        { answerText: 'Polymorphism', isCorrect: false },
        { answerText: 'Inheritance', isCorrect: false },
        { answerText: 'Encapsulation', isCorrect: false },
        { answerText: 'Compilation', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [index, setIndex] =useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  };

  return (
    <>
      <div className="quiz">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='sectionBox'>
                  <div className='question-count'>
                     <span>Question {currentQuestion + 1}</span> of {questions.length}
                  </div>
                  <div className='Score-ContentBox'>
                      {/* <div className='score-section'> */}
                           You scored {score} out of {questions.length}
                      {/* </div> */}
                  </div>
                </div>
                <div className='question-text'>
                  {index+1}. {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button 
                      className='click-btn' 
                      onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
                      >
                      {answerOptions.answerText}
                    </button>
                  ))
                }
              </div>
              <div>        
         </div>
            </>
          )}
      </div>
    </>
  );
}

export default Quiz;
