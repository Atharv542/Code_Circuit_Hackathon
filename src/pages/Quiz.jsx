import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const QuizPage = () => {
  const { state } = useLocation();
  let quizData = [];

  try {
    quizData = JSON.parse(state?.quiz || '[]');
  } catch (err) {
    console.error('Failed to parse quiz data:', err);
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const { width, height } = useWindowSize();

  const correctSound = useRef(null);
  const wrongSound = useRef(null);

  const currentQuestion = quizData[currentQuestionIndex];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  useEffect(() => {
    if (showAnswer || currentQuestionIndex >= quizData.length) return;
    if (timeLeft === 0) {
      handleSubmit();
      return;
    }
    

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showAnswer]);

  const handleSubmit = () => {
    if (!selectedOption && timeLeft > 0) return;

    const correct = selectedOption === currentQuestion.answer;
    setIsCorrect(correct);
    setShowAnswer(true);
    if (correct) {
      setScore(score + 1);
      correctSound.current.play();
    } else {
      wrongSound.current.play();
    }

    setTimeout(() => {
      setShowAnswer(false);
      setSelectedOption('');
      setIsCorrect(null);
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(10);
    }, 2000);
  };

  if (!quizData.length) {
    return <div className="p-6 text-red-600">No quiz data found.</div>;
  }

  if (currentQuestionIndex >= quizData.length) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-6 text-center">
        <Confetti width={width} height={height} />
        <img src="ss14.jpg" alt="Completed" className="mx-auto mt-8 mb-5 w-96 h-auto" />
        <h2 className="text-3xl font-bold mb-4">Quiz Completed 🎉</h2>
        <p className="text-xl">Your Score: {score} / {quizData.length}</p>
        <p className="text-md text-gray-600 mt-2">Great job! Keep practicing to improve even more. 🚀</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <audio ref={correctSound} src="success.mp3" preload="auto" />
      <audio ref={wrongSound} src="fail.mp3" preload="auto" />

      <div className="bg-white shadow-xl rounded-xl p-6 max-w-2xl w-full animate-fadeIn">
       
        <div className="w-full bg-gray-300 rounded-full h-3 mb-4">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
          ></div>
        </div>

        <h2 className="text-xl font-bold mb-2">Question {currentQuestionIndex + 1} of {quizData.length}</h2>
        <div className="mb-4 text-gray-700">{currentQuestion.question}</div>

      
        <div className="mb-4 text-sm">
          <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            ⏱️ Time Left: {timeLeft}s
          </span>
        </div>

     
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((opt, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selectedOption === opt}
                onChange={() => setSelectedOption(opt)}
                disabled={showAnswer}
              />
              <span className="text-gray-800">{opt}</span>
            </label>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={handleSubmit}
            disabled={showAnswer || (!selectedOption && timeLeft > 0)}
            className="text-black hover:text-white border-2 border-blue-600 rounded-md px-4 py-2 hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>

          {showAnswer && (
            <div
              className={`px-4 py-2 rounded font-medium transition-all duration-300 ${
                isCorrect ? 'bg-green-100 text-green-700 animate-bounce' : 'bg-red-100 text-red-700 animate-shake'
              }`}
            >
              <span className="text-2xl mr-2">{isCorrect ? '🎉' : '😬'}</span>
              {isCorrect ? '✅ Correct!' : `❌ Oops! Correct: ${currentQuestion.answer}`}
            </div>
          )}
        </div>

      
        <div className="text-center italic text-sm text-gray-500">
          "Every expert was once a beginner. Keep going! 💪"
        </div>

       
        <div className="mt-4 text-center text-sm">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full mr-2">
            Score: {score}/{quizData.length}
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            Progress: {currentQuestionIndex + 1} / {quizData.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;




