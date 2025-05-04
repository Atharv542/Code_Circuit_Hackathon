import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FlashCardPage = () => {
  const { state } = useLocation();
  let flashcards = [];

  try {
    flashcards = JSON.parse(state?.flashcards || '[]');
  } catch (err) {
    console.error('Failed to parse flashcard data:', err);
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef(null);

  const card = flashcards[currentIndex];

  const tips = [
    "📌 Tip: Repetition helps memory stick!",
    "💡 Did you know? 10 minutes of review beats 30 minutes of rereading.",
    "🧠 Flashcards train active recall — the brain's best workout!",
    "📖 Use your own words when reviewing the answer!",
  ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.25;
    utterance.onend = () => setIsSpeaking(false);
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const toggleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speak(flipped ? card.answer : card.question);
    }
  };

  useEffect(() => {
    if (card) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    
    }
  }, [currentIndex, flipped]);

  const handleFlip = () => setFlipped((prev) => !prev);

  const nextCard = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  if (!flashcards.length) {
    return <div className="p-6 text-red-600">No flashcards available.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] p-6 relative">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Flash Cards</h1>

      <div className="w-full max-w-md">
        <div className="bg-gray-300 rounded-full h-2 mb-1">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-right text-gray-600 mb-4">
          {Math.round(((currentIndex + 1) / flashcards.length) * 100)}% completed
        </p>
      </div>

      {/* Flashcard */}
      <div className="w-full max-w-md perspective" onClick={handleFlip}>
        <AnimatePresence mode="wait">
          <motion.div
            key={flipped ? 'answer' : 'question'}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-2xl p-6 text-center text-lg font-semibold min-h-[180px] flex flex-col items-center justify-center cursor-pointer hover:shadow-inner relative"
          >
            <div>
              {flipped ? (
                <>
                  <span className="text-green-600 text-xl">✅</span><br />
                  {card.answer}
                </>
              ) : (
                <>
                  <span className="text-blue-500 text-xl">❓</span><br />
                  {card.question}
                </>
              )}
            </div>

          
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                toggleSpeak();
              }}
              className="absolute top-3 right-4 cursor-pointer text-xl text-gray-600 hover:text-blue-600"
              title={isSpeaking ? "Stop Voice" : "Play Voice"}
            >
              {isSpeaking ?  '🔊':'🔇'}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6 w-full max-w-md">
        <button
          onClick={prevCard}
          className="px-4 py-2 cursor-pointer text-black hover:text-white border-2 border-blue-600 rounded-md hover:bg-blue-600 transition"
        >
          Previous
        </button>
        <button
          onClick={nextCard}
          className="px-4 py-2 cursor-pointer text-black hover:text-white border-2 border-blue-600 rounded-md hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>

    
      <p className="text-sm text-gray-700 mt-3">
        Card {currentIndex + 1} of {flashcards.length} — <span className="italic text-gray-500">Click to {flipped ? 'see question' : 'reveal answer'}</span>
      </p>


      <div className="mt-6 text-center text-gray-600 italic text-sm">
        {tips[currentIndex % tips.length]}
      </div>
    </div>
  );
};

export default FlashCardPage;


