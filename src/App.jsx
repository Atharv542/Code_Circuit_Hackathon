import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import AllSubjects from './pages/SubjectsPage'
import WhyToChoose from './pages/WhyToChoose'
import TeacherSection from './pages/Teachers'
import Learners from './pages/Learners'
import WhatsNew from './pages/WhatsNew'
import NotesUploader from './pages/NotesUploader';
import QuizPage from './pages/Quiz';
import FlashCardPage from './pages/FlashCard';
import Testimonial from './pages/Testimonial';
import Child from './pages/Child';
import Join from './pages/Join';
import Sponsors from './pages/Sponsors';
import Footer from './pages/Footer';
import GoBackPage from './pages/GoBackPage';
import { Toaster } from "react-hot-toast";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const whatsNewRef = useRef(null);

  const scrollToWhatsNew = () => {
    whatsNewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar scrollToWhatsNew={scrollToWhatsNew} darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <AllSubjects />
              <WhatsNew ref={whatsNewRef} style={{ paddingTop: '80px' }} />
              <WhyToChoose />
              <TeacherSection />
              <Learners />
              <Testimonial />
              <Child />
              <Join />
              <Sponsors />
              <Footer />
            </>
          } />
          <Route path='/notes' element={<NotesUploader />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/flashcards' element={<FlashCardPage />} />
          <Route path='/go-back' element={<GoBackPage/>}/>
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  )
}

export default App;

