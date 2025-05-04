import React, { useState, useRef, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import { MdDelete } from 'react-icons/md';
import { chatSession } from '../service/AiModal';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const images = [
  '/ss10.jpg',
  '/ss11.jpg',
  '/ss12.jpg',
];

const steps = [
  { title: "Upload Notes", description: "Drag and drop or select your file to get started." },
  { title: "Extract Text", description: "We use OCR to read your notes and extract the content." },
  { title: "Generate Summary", description: "AI processes the text to give you a concise summary." },
  { title: "Create Tools", description: "Instantly generate quizzes and flashcards from the summary." },
];

const NotesUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedText, setExtractedText] = useState('');
  const [summary, setSummary] = useState('');
  const [currentImage, setCurrentImage] = useState(0);
  const dropboxRef = useRef(null);
  const guideRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToDropbox = () => {
    dropboxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGuide = () => {
    guideRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);
  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
  };
  const handleDragOver = (e) => e.preventDefault();
  const openFileDialog = () => fileInputRef.current.click();

  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsProcessing(true);
    setExtractedText('');
    setSummary('');

    try {
      const result = await Tesseract.recognize(selectedFile, 'eng');
      const text = result?.data?.text || '';
      setExtractedText(text);
      const aiSummary = await generateSummary(text);
      setSummary(aiSummary || 'No summary generated.');
    } catch (err) {
      console.error('OCR or Summary Error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setExtractedText('');
    setSummary('');
  };

  const generateSummary = async (text) => {
    const prompt = `Generate a short summary for the following text:\n\n"${text}"`;
    try {
      const result = await chatSession.sendMessage(prompt);
      const response = await result?.response?.text();
      if (response.trim().startsWith('{')) {
        const parsed = JSON.parse(response);
        return parsed.summary || response;
      }
      return response?.trim();
    } catch (err) {
      console.error('Error generating summary:', err);
      return null;
    }
  };

  const generateQuiz = async () => {
    if (!extractedText) return;
    const prompt = `Generate 10 multiple choice quiz questions from the following text. Each question should have 4 options and indicate the correct answer:\n\n"${extractedText}"`;
    try {
      const result = await chatSession.sendMessage(prompt);
      const quiz = await result?.response?.text();
      navigate('/quiz', { state: { quiz } });
    } catch (err) {
      console.error('Quiz generation failed:', err);
    }
  };

  const generateFlashcards = async () => {
    if (!extractedText) return;
    const prompt = `Generate flashcards from the following text. Each flashcard should have a question and an answer:\n\n"${extractedText}"`;
    try {
      const result = await chatSession.sendMessage(prompt);
      const flashcards = await result?.response?.text();
      navigate('/flashcards', { state: { flashcards } });
    } catch (err) {
      console.error('Flashcard generation failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 ">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row mt-52 justify-between max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold italic text-gray-800">"Smarter Studying Starts Here – Just Upload & Learn."</h1>
          <p className="text-md text-black">Upload your class notes, PDFs, or handwritten content and let our AI do the heavy lifting.
Instantly generate concise summaries to review faster.
Create quizzes to test your understanding and flashcards to retain key points.
Everything you need to study smarter all in one place.<br/><br/>
<motion.span
  className="italic text-blue-700 font-semibold"
  animate={{ opacity: [0.2, 1, 0.2] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Say goodbye to manual note processing and hello to intelligent learning!
</motion.span>
</p>
          <div className="space-x-4">
            <button onClick={scrollToDropbox} className="border-2 cursor-pointer rounded-lg border-blue-600 text-black hover:text-white px-5 py-2  hover:bg-blue-700">Get Started</button>
            <button onClick={scrollToGuide} className="border-2 border-blue-600 cursor-pointer rounded-lg text-black hover:text-white px-5 py-2  hover:bg-blue-700">Know More</button>
          </div>
        </div>
        <div className="md:w-1/2 -mt-10">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="upload preview"
            className=" h-96 w-full mx-auto rounded-xl shadow-md"
            initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1}}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      {/* Dropbox Section */}
      <motion.section
        ref={dropboxRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-96 h-64 mx-auto mt-30 bg-white p-6 rounded-xl shadow-md border-2 border-dashed border-blue-400 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p className="text-gray-500 mb-4 mt-16">Drag & drop your notes file here</p>

        {!selectedFile ? (
          <button onClick={openFileDialog} className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700">Choose File</button>
        ) : (
          <>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-sm text-green-600">Selected File: {selectedFile.name}</p>
              <button onClick={handleRemoveFile} className="text-red-600 text-xl"><MdDelete /></button>
            </div>
            <button onClick={handleUpload} disabled={isProcessing} className="mt-4 px-6 py-2  text-black hover:text-white border-2 border-blue-600 cursor-pointer rounded-lg hover:bg-blue-600 disabled:opacity-50">
              {isProcessing ? 'Processing...' : 'Generate Text'}
            </button>
          </>
        )}
        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".png,.jpg,.jpeg,.pdf,.docx" />
      </motion.section>

      {/* Summary & Buttons */}
      {summary && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-md rounded"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Summary</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
          <div className="flex gap-4 mt-6">
            <button onClick={generateQuiz} className="flex-1 bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700">Generate Quiz</button>
            <button onClick={generateFlashcards} className="flex-1 bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700">Generate Flashcards</button>
          </div>
        </motion.div>
      )}

      {/* Guide Section */}
      <motion.section
  ref={guideRef}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-3xl mx-auto mt-20 px-4"
>
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
    How It Works
  </h2>
  <div className="space-y-6">
    {steps.map((step, index) => (
      <motion.div
        key={index}
        className="flex items-start gap-4 p-4 bg-white mb-5 shadow-md rounded-lg border-l-4 border-blue-500"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-bold rounded-full">
          {index + 1}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>
    </div>
  );
};

export default NotesUploader;





