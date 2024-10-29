import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;
  const quizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswer((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
    },
    []
  );

  const handleSkip = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizOver) {
    return (
      <Summary userAnswer={userAnswer} />
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkip}
      />
    </div>
  );
}
