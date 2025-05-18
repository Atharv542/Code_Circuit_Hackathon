import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar'


import { Toaster } from "react-hot-toast";
import HomePage from './pages/Home';
import Header from './pages/Navbar';
import CheatSheetGenerator from './pages/Options';
import Cheatsheet from './pages/Cheatsheet';
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
    <>
     <Router>
       <Header/>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
         <Route path="/options" element={<CheatSheetGenerator/>}/> 
         <Route path="/view-sheet" element={<Cheatsheet/>}/>

       </Routes>
      <Toaster position="top-center" reverseOrder={false} />
     </Router>
       
    </>
   
  )
}

export default App;

